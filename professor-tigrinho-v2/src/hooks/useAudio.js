/**
 * 🔊 HOOK DE GERENCIAMENTO DE ÁUDIO v2.0
 * Sistema de sons otimizado com HTML5 Audio API
 */

import { useEffect, useRef, useCallback } from 'react';
import { useGameState } from './useGameState';

// Configuração de sons - PRIORIDADE: arquivos locais, FALLBACK: sem som
const SOUNDS = {
  spin: {
    src: '/sounds/spin.mp3',
    volume: 0.3,
    fallback: true
  },
  win: {
    src: '/sounds/win.mp3',
    volume: 0.5,
    fallback: true
  },
  bigWin: {
    src: '/sounds/bigwin.mp3',
    volume: 0.6,
    fallback: true
  },
  lose: {
    src: '/sounds/lose.mp3',
    volume: 0.2,
    fallback: true
  },
  nearMiss: {
    src: '/sounds/nearmiss.mp3',
    volume: 0.3,
    fallback: true
  },
  click: {
    src: '/sounds/click.mp3',
    volume: 0.2,
    fallback: true
  },
  achievement: {
    src: '/sounds/achievement.mp3',
    volume: 0.4,
    fallback: true
  }
};

/**
 * Classe para gerenciar sons individuais com HTML5 Audio
 */
class Sound {
  constructor(src, volume = 1.0, fallbackBeep = null) {
    this.src = src;
    this.volume = volume;
    this.fallbackBeep = fallbackBeep;
    this.audio = null;
    this.loaded = false;
    this.failed = false;
    this.fileExists = false;

    // Verificar se o arquivo existe primeiro
    this.checkFileExists().then(exists => {
      this.fileExists = exists;
      if (exists) {
        this.initializeAudio();
      } else {
        this.failed = true;
        console.info(`🔇 Arquivo não encontrado: ${src} - usando beep sintetizado`);
      }
    });
  }

  async checkFileExists() {
    try {
      const response = await fetch(this.src, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  initializeAudio() {
    this.audio = new Audio(this.src);
    this.audio.volume = this.volume;
    this.audio.preload = 'auto';

    // Tentar carregar
    this.audio.addEventListener('canplaythrough', () => {
      this.loaded = true;
    }, { once: true });

    this.audio.addEventListener('error', () => {
      this.failed = true;
      console.info(`🎵 Usando beep sintetizado para: ${this.src.split('/').pop()}`);
    }, { once: true });
  }
  
  play() {
    // Se arquivo não existe ou falhou, usa beep sintetizado
    if (!this.fileExists || this.failed) {
      if (this.fallbackBeep) {
        this.fallbackBeep();
      }
      return;
    }

    // Se ainda não foi inicializado, inicializar agora
    if (!this.audio) {
      this.initializeAudio();
    }

    // Se ainda não carregou, usa beep
    if (!this.loaded) {
      if (this.fallbackBeep) {
        this.fallbackBeep();
      }
      return;
    }

    // Resetar para o início se já estiver tocando
    this.audio.currentTime = 0;

    // Tentar tocar, ignorar erros de autoplay
    this.audio.play().catch(error => {
      // Se autoplay foi bloqueado ou erro, usa beep como fallback
      if (this.fallbackBeep) {
        this.fallbackBeep();
      }
    });
  }
  
  stop() {
    if (this.audio && this.loaded && !this.failed) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  setVolume(volume) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }
}

/**
 * Gerador de beeps com Web Audio API
 */
class BeepGenerator {
  constructor() {
    this.audioContext = null;
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('🔇 Web Audio API não disponível');
    }
  }
  
  beep(frequency = 440, duration = 100, volume = 0.3) {
    if (!this.audioContext) return;
    
    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration / 1000);
    } catch (e) {
      // Silencioso se falhar
    }
  }
}

const beepGen = new BeepGenerator();

export const useAudio = () => {
  const soundsRef = useRef({});
  const soundEnabled = useGameState(state => state.soundEnabled);
  const initializedRef = useRef(false);
  
  // Inicializar sons uma única vez
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    
    // Definir beeps de fallback para cada tipo de som
    const beeps = {
      spin: () => beepGen.beep(440, 150, 0.2),
      click: () => beepGen.beep(800, 50, 0.15),
      win: () => {
        beepGen.beep(523, 100, 0.3);
        setTimeout(() => beepGen.beep(659, 100, 0.3), 100);
        setTimeout(() => beepGen.beep(784, 150, 0.4), 200);
      },
      bigWin: () => {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => beepGen.beep(523 + (i * 50), 80, 0.3), i * 80);
        }
      },
      lose: () => beepGen.beep(200, 80, 0.1),
      nearMiss: () => {
        beepGen.beep(440, 100, 0.2);
        setTimeout(() => beepGen.beep(400, 150, 0.2), 120);
      },
      achievement: () => {
        beepGen.beep(659, 100, 0.3);
        setTimeout(() => beepGen.beep(784, 100, 0.3), 100);
        setTimeout(() => beepGen.beep(988, 150, 0.4), 200);
      }
    };
    
    // Criar instâncias de sons com fallback para beeps
    Object.keys(SOUNDS).forEach(key => {
      try {
        const config = SOUNDS[key];
        soundsRef.current[key] = new Sound(config.src, config.volume, beeps[key]);
      } catch (error) {
        console.warn(`⚠️ Erro ao criar som ${key}:`, error.message);
      }
    });
    
    return () => {
      // Limpar sons ao desmontar
      Object.values(soundsRef.current).forEach(sound => {
        if (sound) sound.stop();
      });
    };
  }, []);
  
  // Atualizar volume baseado em configuração
  useEffect(() => {
    Object.keys(soundsRef.current).forEach(key => {
      const sound = soundsRef.current[key];
      const config = SOUNDS[key];
      if (sound && config) {
        sound.setVolume(soundEnabled ? config.volume : 0);
      }
    });
  }, [soundEnabled]);
  
  /**
   * Tocar som específico
   */
  const play = useCallback((soundName) => {
    if (!soundEnabled) return;
    
    const sound = soundsRef.current[soundName];
    if (sound) {
      sound.play();
    }
  }, [soundEnabled]);
  
  /**
   * Parar som específico
   */
  const stop = useCallback((soundName) => {
    const sound = soundsRef.current[soundName];
    if (sound) {
      sound.stop();
    }
  }, []);
  
  /**
   * Parar todos os sons
   */
  const stopAll = useCallback(() => {
    Object.values(soundsRef.current).forEach(sound => {
      if (sound) sound.stop();
    });
  }, []);
  
  /**
   * Sons específicos do jogo
   */
  const playSpin = useCallback(() => play('spin'), [play]);
  const playWin = useCallback(() => play('win'), [play]);
  const playBigWin = useCallback(() => play('bigWin'), [play]);
  const playLose = useCallback(() => play('lose'), [play]);
  const playNearMiss = useCallback(() => play('nearMiss'), [play]);
  const playClick = useCallback(() => play('click'), [play]);
  const playAchievement = useCallback(() => play('achievement'), [play]);
  
  return {
    play,
    stop,
    stopAll,
    playSpin,
    playWin,
    playBigWin,
    playLose,
    playNearMiss,
    playClick,
    playAchievement,
    soundEnabled
  };
};

/**
 * Hook simplificado para efeitos sonoros rápidos
 */
export const useSoundEffect = (soundName) => {
  const { play } = useAudio();
  
  return () => play(soundName);
};


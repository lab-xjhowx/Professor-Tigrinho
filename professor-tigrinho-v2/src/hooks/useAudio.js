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
  constructor(src, volume = 1.0) {
    this.audio = new Audio(src);
    this.audio.volume = volume;
    this.audio.preload = 'auto';
    this.loaded = false;
    this.failed = false;
    
    // Tentar carregar
    this.audio.addEventListener('canplaythrough', () => {
      this.loaded = true;
    }, { once: true });
    
    this.audio.addEventListener('error', () => {
      this.failed = true;
      console.warn(`🔇 Som não disponível: ${src} (funcionando silenciosamente)`);
    }, { once: true });
  }
  
  play() {
    if (this.failed) return; // Falhou ao carregar, ignora silenciosamente
    
    // Resetar para o início se já estiver tocando
    this.audio.currentTime = 0;
    
    // Tentar tocar, ignorar erros de autoplay
    this.audio.play().catch(error => {
      // Navegador bloqueou autoplay - normal, não é erro crítico
      if (error.name !== 'NotAllowedError') {
        console.warn('🔇 Audio play blocked:', error.message);
      }
    });
  }
  
  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  
  setVolume(volume) {
    this.audio.volume = Math.max(0, Math.min(1, volume));
  }
}

export const useAudio = () => {
  const soundsRef = useRef({});
  const soundEnabled = useGameState(state => state.soundEnabled);
  const initializedRef = useRef(false);
  
  // Inicializar sons uma única vez
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    
    // Criar instâncias de sons
    Object.keys(SOUNDS).forEach(key => {
      try {
        const config = SOUNDS[key];
        soundsRef.current[key] = new Sound(config.src, config.volume);
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


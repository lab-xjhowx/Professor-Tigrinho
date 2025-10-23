/**
 * 🔊 HOOK DE GERENCIAMENTO DE ÁUDIO
 * Sistema de sons e música
 */

import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { useGameState } from './useGameState';

// Definir sons (URLs podem ser substituídas por arquivos locais)
const SOUNDS = {
  spin: {
    src: ['https://assets.mixkit.co/active_storage/sfx/2073/2073-preview.mp3'],
    volume: 0.3
  },
  win: {
    src: ['https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3'],
    volume: 0.5
  },
  bigWin: {
    src: ['https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3'],
    volume: 0.6
  },
  lose: {
    src: ['https://assets.mixkit.co/active_storage/sfx/2001/2001-preview.mp3'],
    volume: 0.2
  },
  nearMiss: {
    src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'],
    volume: 0.3
  },
  click: {
    src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'],
    volume: 0.2
  },
  achievement: {
    src: ['https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'],
    volume: 0.4
  },
  ambient: {
    src: ['https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3'],
    volume: 0.1,
    loop: true
  }
};

export const useAudio = () => {
  const soundsRef = useRef({});
  const soundEnabled = useGameState(state => state.soundEnabled);
  
  // Inicializar sons
  useEffect(() => {
    // Desabilitado temporariamente - URLs externas retornam 403
    // Para produção, adicione arquivos de som em /public/sounds/
    /*
    Object.keys(SOUNDS).forEach(key => {
      try {
        soundsRef.current[key] = new Howl({
          src: SOUNDS[key].src,
          volume: soundEnabled ? SOUNDS[key].volume : 0,
          loop: SOUNDS[key].loop || false,
          preload: false,
          html5: true,
          onloaderror: (id, error) => {
            console.warn(`⚠️ Falha ao carregar som: ${key}`, error);
          }
        });
      } catch (error) {
        console.warn(`⚠️ Erro ao inicializar som: ${key}`, error);
      }
    });
    */
    
    return () => {
      // Limpar sons ao desmontar
      Object.values(soundsRef.current).forEach(sound => {
        if (sound) sound.unload();
      });
    };
  }, []);
  
  // Atualizar volume baseado em configuração
  useEffect(() => {
    Object.keys(soundsRef.current).forEach(key => {
      const sound = soundsRef.current[key];
      if (sound) {
        sound.volume(soundEnabled ? SOUNDS[key].volume : 0);
      }
    });
  }, [soundEnabled]);
  
  /**
   * Tocar som específico
   */
  const play = (soundName, options = {}) => {
    if (!soundEnabled) return;
    
    const sound = soundsRef.current[soundName];
    if (sound) {
      if (options.stop && sound.playing()) {
        sound.stop();
      }
      sound.play();
    }
  };
  
  /**
   * Parar som específico
   */
  const stop = (soundName) => {
    const sound = soundsRef.current[soundName];
    if (sound) {
      sound.stop();
    }
  };
  
  /**
   * Parar todos os sons
   */
  const stopAll = () => {
    Object.values(soundsRef.current).forEach(sound => {
      if (sound) sound.stop();
    });
  };
  
  /**
   * Sons específicos do jogo
   */
  const playSpin = () => play('spin');
  const playWin = () => play('win');
  const playBigWin = () => play('bigWin');
  const playLose = () => play('lose');
  const playNearMiss = () => play('nearMiss');
  const playClick = () => play('click');
  const playAchievement = () => play('achievement');
  
  /**
   * Música ambiente
   */
  const startAmbient = () => {
    const ambient = soundsRef.current.ambient;
    if (ambient && soundEnabled && !ambient.playing()) {
      ambient.play();
    }
  };
  
  const stopAmbient = () => stop('ambient');
  
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
    startAmbient,
    stopAmbient,
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


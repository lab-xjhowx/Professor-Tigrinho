/**
 * ✨ HOOK DE ANIMAÇÕES
 * Configurações e variantes do Framer Motion
 */

import { useGameState } from './useGameState';

export const useAnimations = () => {
  const effectsEnabled = useGameState(state => state.effectsEnabled);
  
  /**
   * Variantes de animação para componentes
   */
  const variants = {
    // Fade in/out
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    },
    
    // Slide up
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    
    // Slide down
    slideDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    
    // Scale
    scale: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0, opacity: 0 },
      transition: { duration: 0.3, ease: 'backOut' }
    },
    
    // Bounce
    bounce: {
      animate: {
        y: [0, -20, 0],
        transition: {
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 2
        }
      }
    },
    
    // Wiggle (shake)
    wiggle: {
      animate: {
        rotate: [0, -5, 5, -5, 5, 0],
        transition: {
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3
        }
      }
    },
    
    // Pulse
    pulse: {
      animate: {
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }
    },
    
    // Glow
    glow: {
      animate: {
        boxShadow: [
          '0 0 20px rgba(139, 92, 246, 0.5)',
          '0 0 40px rgba(139, 92, 246, 0.8)',
          '0 0 20px rgba(139, 92, 246, 0.5)'
        ],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }
    },
    
    // Slot spin
    slotSpin: {
      animate: {
        y: [0, -100, 0],
        opacity: [1, 0.5, 1],
        transition: {
          duration: 0.1,
          repeat: 20,
          ease: 'linear'
        }
      }
    },
    
    // Win celebration
    winCelebration: {
      animate: {
        scale: [1, 1.2, 1, 1.1, 1],
        rotate: [0, -5, 5, -5, 0],
        transition: {
          duration: 0.6,
          ease: 'easeOut'
        }
      }
    },
    
    // Shake (near miss)
    shake: {
      animate: {
        x: [0, -10, 10, -10, 10, 0],
        transition: {
          duration: 0.4,
          ease: 'easeInOut'
        }
      }
    },
    
    // Float
    float: {
      animate: {
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }
    },
    
    // Stagger children
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    
    staggerItem: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    }
  };
  
  /**
   * Transições comuns
   */
  const transitions = {
    fast: { duration: 0.15, ease: 'easeOut' },
    normal: { duration: 0.3, ease: 'easeOut' },
    slow: { duration: 0.5, ease: 'easeOut' },
    spring: { type: 'spring', stiffness: 300, damping: 20 },
    bounce: { type: 'spring', stiffness: 400, damping: 10 }
  };
  
  /**
   * Configurações de arraste
   */
  const dragConstraints = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  
  /**
   * Retorna variante desabilitada se efeitos estão off
   */
  const getVariant = (variantName) => {
    if (!effectsEnabled) {
      return {
        initial: {},
        animate: {},
        exit: {}
      };
    }
    return variants[variantName] || {};
  };
  
  /**
   * Animação de confete
   */
  const confettiConfig = {
    numberOfPieces: effectsEnabled ? 200 : 0,
    recycle: false,
    gravity: 0.3,
    wind: 0,
    initialVelocityY: 15,
    colors: ['#8b5cf6', '#ec4899', '#fbbf24', '#10b981', '#3b82f6']
  };
  
  return {
    variants,
    transitions,
    dragConstraints,
    getVariant,
    confettiConfig,
    effectsEnabled
  };
};

/**
 * Hook para animação de contador
 */
export const useCountAnimation = (value, duration = 1) => {
  const effectsEnabled = useGameState(state => state.effectsEnabled);
  
  if (!effectsEnabled) return value;
  
  return {
    animate: { value },
    transition: { duration, ease: 'easeOut' }
  };
};

/**
 * Hook para animação de presença
 */
export const usePresenceAnimation = () => {
  const effectsEnabled = useGameState(state => state.effectsEnabled);
  
  return effectsEnabled;
};


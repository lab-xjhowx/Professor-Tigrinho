/**
 * 🎬 REUSABLE ANIMATION WRAPPERS
 * Componentes de animação reutilizáveis
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useAnimations } from '@hooks/useAnimations';

/**
 * Fade In Animation
 */
export const FadeIn = ({ children, delay = 0, duration = 0.3, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      {...getVariant('fadeIn')}
      transition={{ delay, duration }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Slide Up Animation
 */
export const SlideUp = ({ children, delay = 0, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      {...getVariant('slideUp')}
      transition={{ delay, ...getVariant('slideUp').transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Scale Animation
 */
export const ScaleIn = ({ children, delay = 0, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      {...getVariant('scale')}
      transition={{ delay, ...getVariant('scale').transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Pulse Animation
 */
export const Pulse = ({ children, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      {...getVariant('pulse')}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Bounce Animation
 */
export const Bounce = ({ children, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      {...getVariant('bounce')}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Float Animation
 */
export const Float = ({ children, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      {...getVariant('float')}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Wiggle Animation
 */
export const Wiggle = ({ children, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      {...getVariant('wiggle')}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Glow Effect
 */
export const Glow = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 20px rgba(139, 92, 246, 0.5)',
          '0 0 40px rgba(139, 92, 246, 0.8)',
          '0 0 20px rgba(139, 92, 246, 0.5)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={`rounded-xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger Container
 */
export const StaggerContainer = ({ children, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      variants={getVariant('staggerContainer')}
      initial="initial"
      animate="animate"
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger Item
 */
export const StaggerItem = ({ children, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      variants={getVariant('staggerItem')}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Shake Animation (Near Miss)
 */
export const Shake = ({ trigger, children, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      animate={trigger ? getVariant('shake').animate : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Win Celebration Animation
 */
export const WinCelebration = ({ trigger, children, ...props }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      animate={trigger ? getVariant('winCelebration').animate : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Presence Wrapper
 */
export const PresenceWrapper = ({ show, children, ...props }) => {
  return (
    <AnimatePresence mode="wait">
      {show && children}
    </AnimatePresence>
  );
};

export default {
  FadeIn,
  SlideUp,
  ScaleIn,
  Pulse,
  Bounce,
  Float,
  Wiggle,
  Glow,
  StaggerContainer,
  StaggerItem,
  Shake,
  WinCelebration,
  PresenceWrapper
};


/**
 * ✨ PARTICLES BACKGROUND
 * Partículas animadas no fundo
 */

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export const Particles = ({ count = 50 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      color: Math.random() > 0.5 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(236, 72, 153, 0.3)'
    }));
  }, [count]);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            background: particle.color
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
      
      {/* Radial gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary-500/10 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-neon-pink/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-full h-full bg-gradient-radial from-neon-green/5 via-transparent to-transparent" />
    </div>
  );
};

export default Particles;


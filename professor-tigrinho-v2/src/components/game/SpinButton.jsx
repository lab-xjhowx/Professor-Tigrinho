/**
 * 🎲 SPIN BUTTON COMPONENT
 * Botões de aposta
 */

import { motion } from 'framer-motion';
import { Coins, Zap } from 'lucide-react';
import { useAudio } from '@hooks/useAudio';

export const SpinButton = ({ 
  valor, 
  disabled, 
  isSpinning, 
  onClick, 
  variant = 'primary' 
}) => {
  const { playClick } = useAudio();
  
  const handleClick = () => {
    if (!disabled && !isSpinning) {
      playClick();
      onClick();
    }
  };
  
  const colors = {
    primary: 'from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700 shadow-primary-500/50',
    secondary: 'from-neon-pink to-pink-700 hover:from-pink-500 hover:to-pink-600 shadow-pink-500/50',
    success: 'from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 shadow-green-500/50',
    gold: 'from-gold-500 to-gold-700 hover:from-gold-400 hover:to-gold-600 shadow-gold-500/50'
  };
  
  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled || isSpinning}
      className={`
        relative w-full py-6 px-8 rounded-2xl font-display font-bold text-xl
        bg-gradient-to-br ${colors[variant]}
        text-white shadow-lg
        flex items-center justify-center gap-4
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        overflow-hidden
        group
      `}
      whileHover={!disabled && !isSpinning ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled && !isSpinning ? { scale: 0.98 } : {}}
    >
      {/* Brilho animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
      
      {/* Ícone */}
      <motion.div
        animate={isSpinning ? { rotate: 360 } : {}}
        transition={isSpinning ? { duration: 1, repeat: Infinity, ease: 'linear' } : {}}
      >
        {variant === 'gold' ? (
          <Zap className="w-7 h-7" fill="currentColor" />
        ) : (
          <Coins className="w-7 h-7" />
        )}
      </motion.div>
      
      {/* Texto */}
      <div className="flex flex-col items-start relative z-10">
        <span className="text-xs uppercase tracking-wider opacity-90">
          {isSpinning ? 'Girando...' : 'Apostar'}
        </span>
        <span className="text-2xl font-black">
          R$ {valor},00
        </span>
      </div>
      
      {/* Efeito de partículas no hover */}
      {!disabled && !isSpinning && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.button>
  );
};

export default SpinButton;


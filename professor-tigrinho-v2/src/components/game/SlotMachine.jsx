/**
 * 🎰 SLOT MACHINE COMPONENT
 * Máquina de slots principal
 */

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Glow, Shake, WinCelebration } from '../effects/Animations';
import { useAnimations } from '@hooks/useAnimations';

export const SlotMachine = ({ resultado, isSpinning, isWin, isNearMiss }) => {
  const [displayResults, setDisplayResults] = useState(['🐯', '🐀', '🐂']);
  const { getVariant } = useAnimations();
  
  useEffect(() => {
    if (resultado && Array.isArray(resultado) && resultado.length === 3) {
      try {
        const icons = resultado.map(r => r?.icon || '🐯');
        setDisplayResults(icons);
      } catch (error) {
        console.error('Erro ao processar resultado:', error);
        setDisplayResults(['🐯', '🐀', '🐂']);
      }
    }
  }, [resultado]);
  
  return (
    <Glow className="w-full relative">
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-8 border-4 border-gold-400/30 shadow-2xl">
        {/* Header com luzes */}
        <div className="flex justify-center gap-3 mb-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gold-400"
              animate={{
                opacity: [0.3, 1, 0.3],
                boxShadow: [
                  '0 0 5px rgba(251, 191, 36, 0.3)',
                  '0 0 20px rgba(251, 191, 36, 0.8)',
                  '0 0 5px rgba(251, 191, 36, 0.3)'
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        
        {/* Título */}
        <motion.div
          className="text-center mb-8"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <h2 className="text-4xl font-display font-black bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent bg-[length:200%_auto]">
            SLOTMIND v2.0
          </h2>
        </motion.div>
        
        {/* Display dos Slots */}
        <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl p-6 border-4 border-gold-500/20 mb-6 shadow-inner">
          <div className="grid grid-cols-3 gap-4">
            {displayResults.map((icon, index) => (
              <SlotReel
                key={index}
                icon={icon}
                isSpinning={isSpinning}
                isWin={isWin}
                isNearMiss={isNearMiss}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
        
        {/* Decoração inferior */}
        <div className="flex justify-center gap-2">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent rounded-full" />
        </div>
      </div>
    </Glow>
  );
};

/**
 * 🎡 SLOT REEL
 * Rolo individual do slot
 */
const SlotReel = ({ icon, isSpinning, isWin, isNearMiss, delay }) => {
  const { getVariant } = useAnimations();
  
  return (
    <motion.div
      className={`
        relative aspect-square flex items-center justify-center
        bg-gradient-to-br from-white via-gray-50 to-gray-100
        rounded-xl shadow-lg border-2 border-gray-300
        overflow-hidden
        ${isWin ? 'ring-4 ring-green-400 ring-offset-2 ring-offset-slate-900' : ''}
        ${isNearMiss ? 'ring-4 ring-yellow-400 ring-offset-2 ring-offset-slate-900' : ''}
      `}
      animate={
        isSpinning
          ? {
              y: [0, -10, 0],
              rotateX: [0, 360, 720, 1080],
            }
          : isWin
          ? {
              scale: [1, 1.1, 1, 1.05, 1],
              rotate: [0, -5, 5, -5, 0],
            }
          : isNearMiss
          ? {
              x: [0, -5, 5, -5, 5, 0],
            }
          : {}
      }
      transition={
        isSpinning
          ? {
              duration: 0.5,
              repeat: Infinity,
              ease: 'linear',
              delay,
            }
          : { duration: 0.6 }
      }
    >
      {/* Brilho superior */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent" />
      
      {/* Ícone */}
      <motion.div
        className="text-6xl md:text-7xl filter drop-shadow-lg"
        animate={isSpinning ? { opacity: [1, 0.5, 1] } : {}}
        transition={{ duration: 0.3, repeat: isSpinning ? Infinity : 0 }}
      >
        {icon}
      </motion.div>
      
      {/* Reflexo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent" />
      
      {/* Efeito de vitória */}
      {isWin && (
        <motion.div
          className="absolute inset-0 bg-green-400/20"
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      )}
    </motion.div>
  );
};

export default SlotMachine;


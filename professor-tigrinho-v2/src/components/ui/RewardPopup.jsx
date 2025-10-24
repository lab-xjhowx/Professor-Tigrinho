/**
 * 🎁 REWARD POPUP COMPONENT
 * Pop-up de recompensas educativas
 */

import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Star, Sparkles } from 'lucide-react';
import { useGameState } from '@hooks/useGameState';
import { gerarRecompensaFalsa } from '@utils/psychology';

export const RewardPopup = () => {
  const { showRewardPopup, rewardMessage, closeRewardPopup } = useGameState();
  
  return (
    <AnimatePresence>
      {showRewardPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeRewardPopup}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', duration: 0.6 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-neon-pink blur-3xl opacity-50 animate-pulse" />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-primary-900/50 to-slate-900 rounded-3xl p-8 border-4 border-primary-400 shadow-2xl">
              {/* Close button */}
              <button
                onClick={closeRewardPopup}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Stars decoration */}
              <div className="absolute top-0 left-0 right-0 flex justify-center -mt-8">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity
                    }}
                  >
                    <Star className="w-8 h-8 text-gold-400 fill-gold-400 mx-1" />
                  </motion.div>
                ))}
              </div>
              
              {/* Icon */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="flex justify-center mb-6 mt-6"
              >
                <div className="p-4 bg-gradient-to-br from-primary-500 to-neon-pink rounded-full">
                  <Gift className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              
              {/* Title */}
              <motion.h2
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
                className="text-3xl font-display font-black text-center mb-4 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent"
              >
                Recompensa Desbloqueada!
              </motion.h2>
              
              {/* Message */}
              <p className="text-xl text-center text-white mb-6 font-semibold whitespace-pre-line leading-relaxed">
                {rewardMessage || gerarRecompensaFalsa()}
              </p>
              
              {/* Sparkles */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0, 1, 0],
                      y: [0, -20, 0]
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                      repeat: Infinity
                    }}
                  >
                    <Sparkles className="w-5 h-5 text-gold-400" />
                  </motion.div>
                ))}
              </div>
              
              {/* Info */}
              <div className="bg-primary-500/20 border border-primary-400/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-center text-slate-300">
                  💡 <span className="font-semibold">Lembre-se:</span> Cassinos reais usam gamificação falsa para te manter jogando.
                </p>
              </div>
              
              {/* Button */}
              <motion.button
                onClick={closeRewardPopup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-neon-pink text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Continuar Aprendendo
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RewardPopup;


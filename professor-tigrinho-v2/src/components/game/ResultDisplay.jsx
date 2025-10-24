/**
 * 📊 RESULT DISPLAY COMPONENT
 * Exibe resultado da jogada
 */

import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertTriangle, Info } from 'lucide-react';
import { SlideUp } from '../effects/Animations';

export const ResultDisplay = ({ resultado, show }) => {
  if (!resultado) return null;
  
  // BUGFIX: Garantir que near-miss nunca seja true se for vitória
  const { isVitoria, ganho, resultado: slots } = resultado;
  const isNearMiss = !isVitoria && resultado.isNearMiss;
  
  const getIcon = () => {
    if (isVitoria) return <TrendingUp className="w-6 h-6" />;
    if (isNearMiss) return <AlertTriangle className="w-6 h-6" />;
    return <TrendingDown className="w-6 h-6" />;
  };
  
  const getColor = () => {
    if (isVitoria) return 'from-green-500 to-green-600';
    if (isNearMiss) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };
  
  const getMessage = () => {
    if (isVitoria) {
      return `🎉 VITÓRIA! Ganhou R$ ${ganho.toFixed(2)}`;
    }
    if (isNearMiss) {
      return '🎯 Quase! Dois símbolos iguais...';
    }
    return '❌ Não foi dessa vez';
  };
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <div className={`
            relative overflow-hidden
            bg-gradient-to-r ${getColor()}
            rounded-2xl p-6
            shadow-xl
            border-2 border-white/20
          `}>
            {/* Brilho animado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={isVitoria ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 0.6 }}
                >
                  {getIcon()}
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {getMessage()}
                </h3>
              </div>
              
              {/* Resultado visual */}
              <div className="flex items-center justify-center gap-4 mb-4">
                {slots && slots.map((animal, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    className="text-5xl bg-white/20 backdrop-blur-sm rounded-xl p-3"
                  >
                    {animal.icon}
                  </motion.div>
                ))}
              </div>
              
              {/* Info adicional */}
              <div className="text-center text-white/90 text-sm">
                {isVitoria && (
                  <p className="font-semibold">
                    Multiplicador: {slots[0].multiplicador}x
                  </p>
                )}
                {isNearMiss && (
                  <p className="font-medium">
                    ⚠️ Isso foi programado para te fazer continuar jogando!
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * 💰 BALANCE DISPLAY
 * Exibe saldo atual
 */
export const BalanceDisplay = ({ saldo, saldoInicial }) => {
  const diferenca = saldo - saldoInicial;
  const isPositivo = diferenca >= 0;
  
  return (
    <motion.div
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border-2 border-primary-500/30 shadow-xl"
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-center">
        <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">
          Saldo Atual
        </p>
        <motion.p
          key={saldo}
          initial={{ scale: 1.2, color: '#10b981' }}
          animate={{ scale: 1, color: '#f1f5f9' }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-display font-black text-white mb-3"
        >
          R$ {saldo.toFixed(2)}
        </motion.p>
        
        <div className={`
          text-sm font-semibold flex items-center justify-center gap-2
          ${isPositivo ? 'text-green-400' : 'text-red-400'}
        `}>
          {isPositivo ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span>
            {isPositivo ? '+' : ''} R$ {Math.abs(diferenca).toFixed(2)}
          </span>
          <span className="text-slate-500">
            ({isPositivo ? '+' : ''}{((diferenca / saldoInicial) * 100).toFixed(1)}%)
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultDisplay;


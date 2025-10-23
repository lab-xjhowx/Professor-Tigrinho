/**
 * 🧠 PHASE INDICATOR COMPONENT
 * Indicador de fase psicológica
 */

import { motion, AnimatePresence } from 'framer-motion';
import { Brain, TrendingUp, TrendingDown, AlertTriangle, Info } from 'lucide-react';
import { useGameState } from '@hooks/useGameState';
import { Pulse } from '../effects/Animations';

export const PhaseIndicator = () => {
  const { faseAtual, totalJogadas } = useGameState();
  
  const phases = {
    hook: {
      icon: <TrendingUp className="w-6 h-6" />,
      name: 'Hook Phase',
      emoji: '🎣',
      description: 'Fase de Fisgar - Chances aumentadas!',
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-500/50',
      textColor: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    normal: {
      icon: <AlertTriangle className="w-6 h-6" />,
      name: 'Normal Phase',
      emoji: '⚖️',
      description: 'Fase Normal - Chances padrão',
      color: 'from-yellow-500 to-yellow-600',
      borderColor: 'border-yellow-500/50',
      textColor: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    loss: {
      icon: <TrendingDown className="w-6 h-6" />,
      name: 'Loss Phase',
      emoji: '📉',
      description: 'Fase de Perda - Chances reduzidas!',
      color: 'from-red-500 to-red-600',
      borderColor: 'border-red-500/50',
      textColor: 'text-red-400',
      bgColor: 'bg-red-500/20'
    }
  };
  
  const currentPhase = phases[faseAtual] || phases.normal;
  
  return (
    <div className="w-full space-y-4">
      <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
        <Brain className="w-7 h-7 text-primary-400" />
        Estado Psicológico
      </h3>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={faseAtual}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className={`
            relative overflow-hidden
            bg-gradient-to-r ${currentPhase.color}
            rounded-2xl p-6
            border-2 ${currentPhase.borderColor}
            shadow-xl
          `}
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
              repeatDelay: 1,
            }}
          />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Pulse>
                  <div className="text-4xl">
                    {currentPhase.emoji}
                  </div>
                </Pulse>
                <div>
                  <h4 className="text-xl font-display font-bold text-white">
                    {currentPhase.name}
                  </h4>
                  <p className="text-sm text-white/80">
                    {currentPhase.description}
                  </p>
                </div>
              </div>
              
              <div className="text-white">
                {currentPhase.icon}
              </div>
            </div>
            
            {/* Info adicional */}
            <div className={`
              ${currentPhase.bgColor}
              rounded-lg p-4 border border-white/20
            `}>
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/90">
                  {faseAtual === 'hook' && (
                    <p>
                      As primeiras jogadas têm chances artificialmente aumentadas para criar
                      uma falsa sensação de facilidade e te fisgar no jogo.
                      <span className="block mt-2 font-semibold">
                        Jogadas restantes: {Math.max(0, 5 - totalJogadas)}
                      </span>
                    </p>
                  )}
                  {faseAtual === 'normal' && (
                    <p>
                      Fase padrão com probabilidades "normais". Mas lembre-se: a matemática
                      sempre favorece a casa em ~85%.
                    </p>
                  )}
                  {faseAtual === 'loss' && (
                    <p>
                      Suas chances foram drasticamente reduzidas. O sistema está garantindo
                      que a casa recupere o que te pagou antes e gere lucro.
                      <span className="block mt-2 font-semibold text-red-200">
                        ⚠️ Na vida real, este é o caminho para a falência!
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Timeline visual */}
      <PhaseTimeline currentPhase={faseAtual} totalJogadas={totalJogadas} />
    </div>
  );
};

/**
 * Phase Timeline Component
 */
const PhaseTimeline = ({ currentPhase, totalJogadas }) => {
  const timeline = [
    { phase: 'hook', label: 'Hook', range: '0-5 jogadas' },
    { phase: 'normal', label: 'Normal', range: '5-10 jogadas' },
    { phase: 'loss', label: 'Loss', range: '10+ jogadas' }
  ];
  
  return (
    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
      <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">
        Progressão das Fases
      </p>
      
      <div className="flex items-center gap-2">
        {timeline.map((item, index) => (
          <div key={item.phase} className="flex-1">
            <motion.div
              className={`
                h-2 rounded-full transition-all duration-300
                ${currentPhase === item.phase 
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 shadow-glow-md' 
                  : 'bg-slate-700'
                }
              `}
              animate={currentPhase === item.phase ? {
                opacity: [0.7, 1, 0.7],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="mt-2 text-center">
              <p className={`
                text-xs font-semibold
                ${currentPhase === item.phase ? 'text-primary-400' : 'text-slate-500'}
              `}>
                {item.label}
              </p>
              <p className="text-[10px] text-slate-600">
                {item.range}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-slate-400">
          Jogada atual: <span className="text-white font-semibold">{totalJogadas}</span>
        </p>
      </div>
    </div>
  );
};

export default PhaseIndicator;


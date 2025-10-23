/**
 * 💡 TIPS MODAL COMPONENT
 * Modal com dicas educativas detalhadas
 */

import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Brain, TrendingDown, Target } from 'lucide-react';
import { useGameState } from '@hooks/useGameState';

export const TipsModal = () => {
  const { showTipsModal, closeTipsModal } = useGameState();
  
  return (
    <AnimatePresence>
      {showTipsModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeTipsModal}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto border-2 border-primary-500/30 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                <Brain className="w-8 h-8 text-primary-400" />
                Como Funciona?
              </h2>
              <button
                onClick={closeTipsModal}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <TacticCard
                icon={<Target className="w-6 h-6" />}
                title="🎣 Hook Phase (Fase de Fisgar)"
                description="Nas primeiras 5-10 jogadas, suas chances de ganhar são artificialmente aumentadas."
                why="Para criar uma falsa sensação de facilidade e empolgação"
                reality="Você ganha no início, mas perde muito mais depois"
                color="green"
              />
              
              <TacticCard
                icon={<TrendingDown className="w-6 h-6" />}
                title="📉 Loss Phase (Fase de Perda)"
                description="Após a hook phase, o jogo reduz drasticamente suas chances de vitória."
                why="Para recuperar o que te pagou e garantir lucro da casa"
                reality="A matemática sempre favorece a casa (~85% de vantagem)"
                color="red"
              />
              
              <TacticCard
                icon={<Target className="w-6 h-6" />}
                title="🎯 Near-Miss Effect (Quase Vitória)"
                description="O sistema força 2 símbolos iguais em 40% das suas perdas."
                why="Criar ilusão de que você 'quase ganhou' e está perto do prêmio"
                reality="'Quase' não vale nada. É uma derrota completa programada"
                color="yellow"
              />
              
              <TacticCard
                icon={<AlertTriangle className="w-6 h-6" />}
                title="🎊 Reforço Positivo"
                description="Vitórias são exageradas com animações, sons e confete."
                why="Maximizar dopamina e criar vício psicológico"
                reality="Perdas são minimizadas, vitórias exageradas - manipulação pura"
                color="purple"
              />
            </div>
            
            {/* Footer Warning */}
            <div className="mt-8 p-5 bg-red-500/20 border-2 border-red-500/50 rounded-xl">
              <p className="text-red-400 font-semibold mb-2">⚠️ AVISO IMPORTANTE</p>
              <p className="text-sm text-slate-300">
                Este é um simulador educativo. Na vida real, jogos de azar destroem finanças e famílias.
                A casa SEMPRE ganha no longo prazo. Não existe "estratégia infalível".
              </p>
            </div>
            
            {/* Close Button */}
            <button
              onClick={closeTipsModal}
              className="w-full mt-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Entendi
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TacticCard = ({ icon, title, description, why, reality, color }) => {
  const colors = {
    green: 'bg-green-500/10 border-green-500/30',
    red: 'bg-red-500/10 border-red-500/30',
    yellow: 'bg-yellow-500/10 border-yellow-500/30',
    purple: 'bg-purple-500/10 border-purple-500/30'
  };
  
  return (
    <div className={`${colors[color]} border-2 rounded-xl p-5`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="text-white">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-slate-300 mb-3">{description}</p>
      <div className="space-y-2 text-sm">
        <p className="text-yellow-400">💡 Por quê? {why}</p>
        <p className="text-red-400">⚠️ Realidade: {reality}</p>
      </div>
    </div>
  );
};

export default TipsModal;


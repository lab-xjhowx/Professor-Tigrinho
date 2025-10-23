/**
 * 👑 VIP MODE COMPONENT
 * Modo VIP com conteúdo avançado
 */

import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Lock, Unlock, BarChart, Brain, AlertTriangle } from 'lucide-react';
import { useGameState } from '@hooks/useGameState';
import { calcularProbabilidadeReal } from '@utils/probability';
import curiosidades from '@data/curiosidades.json';

export const VipModal = () => {
  const { showVipModal, closeVipModal, vipUnlocked } = useGameState();
  
  if (!vipUnlocked) return null;
  
  return (
    <AnimatePresence>
      {showVipModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeVipModal}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gold-900 via-slate-900 to-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto border-4 border-gold-400/50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent flex items-center gap-3">
                <Crown className="w-8 h-8 text-gold-400" />
                Modo Consciência Premium
              </h2>
              <button
                onClick={closeVipModal}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Probabilidades Reais */}
            <ProbabilidadesSection />
            
            {/* Estatísticas Avançadas */}
            <EstatisticasAvancadas />
            
            {/* Realidade vs Mito */}
            <RealidadeSection />
            
            <button
              onClick={closeVipModal}
              className="w-full mt-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-900 font-bold rounded-lg transition-all"
            >
              Voltar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProbabilidadesSection = () => {
  const stats = calcularProbabilidadeReal();
  
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gold-300 mb-4 flex items-center gap-2">
        <BarChart className="w-6 h-6" />
        Probabilidades Reais (Matemática Pura)
      </h3>
      
      <div className="bg-slate-950/50 rounded-xl p-5 border border-gold-500/20 mb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-slate-400">RTP Total (Retorno ao Jogador)</p>
            <p className="text-3xl font-bold text-red-400">{stats.rtpTotal}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">House Edge (Vantagem da Casa)</p>
            <p className="text-3xl font-bold text-green-400">{stats.houseEdge}</p>
          </div>
        </div>
        
        <p className="text-sm text-yellow-400 italic">
          💡 A cada R$ 100 apostados, você espera perder R$ {stats.houseEdge.replace('%', '')} no longo prazo.
        </p>
      </div>
      
      <div className="space-y-2">
        {stats.probabilidades.map((prob, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-3 flex justify-between items-center">
            <span className="text-slate-300">{prob.animal}</span>
            <div className="text-right">
              <p className="text-xs text-slate-500">Chance de 3 iguais</p>
              <p className="text-sm font-semibold text-red-400">{prob.probabilidade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EstatisticasAvancadas = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gold-300 mb-4 flex items-center gap-2">
        <Brain className="w-6 h-6" />
        Estatísticas Globais
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {curiosidades.estatisticas.map((stat, index) => (
          <div key={index} className={`
            bg-gradient-to-br rounded-xl p-4 border-2
            ${stat.impacto === 'critical' 
              ? 'from-red-500/20 to-red-600/20 border-red-500/50' 
              : 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/50'
            }
          `}>
            <p className="text-2xl font-bold text-white mb-1">{stat.valor}</p>
            <p className="text-xs text-slate-400 mb-2">{stat.titulo}</p>
            <p className="text-xs text-slate-300">{stat.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const RealidadeSection = () => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gold-300 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6" />
        Mito vs Realidade
      </h3>
      
      <div className="space-y-3">
        {curiosidades.realidade.map((item, index) => (
          <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <p className="text-green-400 font-semibold mb-1">{item.mito}</p>
            <p className="text-red-400 font-semibold mb-2">{item.realidade}</p>
            <p className="text-xs text-slate-400 italic">{item.explicacao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VipModal;


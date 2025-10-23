/**
 * 📊 STATS COMPONENT
 * Estatísticas em tempo real
 */

import { motion } from 'framer-motion';
import { 
  Activity, 
  Trophy, 
  TrendingUp, 
  TrendingDown, 
  Target,
  Brain,
  AlertCircle,
  DollarSign 
} from 'lucide-react';
import { useGameState } from '@hooks/useGameState';
import { StaggerContainer, StaggerItem } from '../effects/Animations';

export const Stats = () => {
  const estadoJogo = useGameState();
  const stats = estadoJogo.getEstatisticas();
  
  return (
    <div className="w-full space-y-4">
      <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
        <Activity className="w-7 h-7 text-primary-400" />
        Estatísticas em Tempo Real
      </h3>
      
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Total de Jogadas */}
        <StaggerItem>
          <StatCard
            icon={<Activity className="w-6 h-6" />}
            label="Total de Jogadas"
            value={stats.basicas.totalJogadas}
            color="blue"
          />
        </StaggerItem>
        
        {/* Vitórias */}
        <StaggerItem>
          <StatCard
            icon={<Trophy className="w-6 h-6" />}
            label="Vitórias"
            value={stats.basicas.vitorias}
            subValue={`Taxa: ${stats.basicas.taxaVitoria}`}
            color="green"
          />
        </StaggerItem>
        
        {/* Derrotas */}
        <StaggerItem>
          <StatCard
            icon={<TrendingDown className="w-6 h-6" />}
            label="Derrotas"
            value={stats.basicas.derrotas}
            color="red"
          />
        </StaggerItem>
        
        {/* Near Misses */}
        <StaggerItem>
          <StatCard
            icon={<Target className="w-6 h-6" />}
            label="Quase Vitórias"
            value={stats.basicas.nearMisses}
            subValue="Programadas!"
            color="yellow"
          />
        </StaggerItem>
      </StaggerContainer>
      
      {/* Estatísticas Financeiras */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
      >
        <FinancialCard
          icon={<DollarSign className="w-6 h-6" />}
          label="Lucro do Jogador"
          value={`R$ ${stats.financeiras.diferenca}`}
          percentage={`${stats.financeiras.percentual}%`}
          isPositive={parseFloat(stats.financeiras.diferenca) >= 0}
        />
        
        <FinancialCard
          icon={<AlertCircle className="w-6 h-6" />}
          label="Lucro da Casa"
          value={`R$ ${stats.financeiras.lucroCasa}`}
          info="A casa sempre ganha!"
          isHouse
        />
      </motion.div>
      
      {/* Nível de Consciência */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <ConsciousnessLevel
          pontos={stats.consciencia.pontos}
          nivel={stats.consciencia.nivel}
        />
      </motion.div>
    </div>
  );
};

/**
 * Stat Card Component
 */
const StatCard = ({ icon, label, value, subValue, color }) => {
  const colors = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-400',
    red: 'from-red-500/20 to-red-600/20 border-red-500/30 text-red-400',
    yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400'
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      className={`
        bg-gradient-to-br ${colors[color]}
        rounded-xl p-5 border-2
        backdrop-blur-sm
        shadow-lg
        transition-all duration-200
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={colors[color].split(' ').pop()}>
          {icon}
        </div>
      </div>
      
      <p className="text-sm text-slate-400 mb-1">{label}</p>
      <p className="text-3xl font-display font-black text-white">
        {value}
      </p>
      
      {subValue && (
        <p className="text-xs text-slate-500 mt-1">{subValue}</p>
      )}
    </motion.div>
  );
};

/**
 * Financial Card Component
 */
const FinancialCard = ({ icon, label, value, percentage, info, isPositive, isHouse }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`
        relative overflow-hidden
        ${isHouse 
          ? 'bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500/30' 
          : isPositive
            ? 'bg-gradient-to-br from-green-500/20 to-green-600/20 border-2 border-green-500/30'
            : 'bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500/30'
        }
        rounded-xl p-5 backdrop-blur-sm shadow-lg
      `}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={isHouse ? 'text-red-400' : isPositive ? 'text-green-400' : 'text-red-400'}>
          {icon}
        </div>
        <p className="text-sm text-slate-300">{label}</p>
      </div>
      
      <div className="flex items-baseline gap-3">
        <p className="text-3xl font-display font-black text-white">
          {value}
        </p>
        {percentage && (
          <p className={`text-lg font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{percentage}
          </p>
        )}
      </div>
      
      {info && (
        <p className="text-xs text-slate-500 mt-2">{info}</p>
      )}
    </motion.div>
  );
};

/**
 * Consciousness Level Component
 */
const ConsciousnessLevel = ({ pontos, nivel }) => {
  const progress = nivel.proximo ? (pontos / nivel.proximo) * 100 : 100;
  
  return (
    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-2 border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="w-6 h-6 text-purple-400" />
        <div>
          <p className="text-sm text-slate-400">Nível de Consciência</p>
          <p className="text-2xl font-display font-bold text-white">
            {nivel.titulo}
          </p>
        </div>
      </div>
      
      <p className="text-sm text-slate-300 mb-4">{nivel.descricao}</p>
      
      {/* Progress Bar */}
      {nivel.proximo && (
        <>
          <div className="relative h-3 bg-slate-800/50 rounded-full overflow-hidden mb-2">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-slate-500">
            <span>{pontos} pontos</span>
            <span>{nivel.proximo} para próximo nível</span>
          </div>
        </>
      )}
      
      {!nivel.proximo && (
        <div className="text-center py-3">
          <p className="text-lg font-bold text-purple-400">🏆 Nível Máximo Alcançado!</p>
        </div>
      )}
    </div>
  );
};

export default Stats;


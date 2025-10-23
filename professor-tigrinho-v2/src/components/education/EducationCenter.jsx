/**
 * 🎓 EDUCATION CENTER COMPONENT
 * Centro educacional com dicas e curiosidades
 */

import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, AlertTriangle, TrendingUp } from 'lucide-react';
import { useGameState } from '@hooks/useGameState';
import { StaggerContainer, StaggerItem } from '../effects/Animations';
import curiosidades from '@data/curiosidades.json';

export const EducationCenter = () => {
  const dica = useGameState(state => state.getDica());
  
  return (
    <div className="w-full space-y-6">
      <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
        <BookOpen className="w-7 h-7 text-primary-400" />
        Centro Educacional
      </h3>
      
      {/* Dica Atual */}
      {dica && <DicaCard dica={dica} />}
      
      {/* Curiosidades */}
      <div className="grid grid-cols-1 gap-4">
        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          Curiosidades Psicológicas
        </h4>
        
        <StaggerContainer className="space-y-3">
          {curiosidades.psicologia.slice(0, 3).map((curiosidade, index) => (
            <StaggerItem key={index}>
              <CuriosidadeCard curiosidade={curiosidade} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

const DicaCard = ({ dica }) => {
  const icons = {
    info: <Lightbulb className="w-6 h-6" />,
    warning: <AlertTriangle className="w-6 h-6" />,
    education: <BookOpen className="w-6 h-6" />,
    alert: <AlertTriangle className="w-6 h-6" />,
    critical: <AlertTriangle className="w-6 h-6 animate-pulse" />
  };
  
  const colors = {
    info: 'from-blue-500/20 to-blue-600/20 border-blue-500/50 text-blue-400',
    warning: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/50 text-yellow-400',
    education: 'from-purple-500/20 to-purple-600/20 border-purple-500/50 text-purple-400',
    alert: 'from-orange-500/20 to-orange-600/20 border-orange-500/50 text-orange-400',
    critical: 'from-red-500/20 to-red-600/20 border-red-500/50 text-red-400'
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-br ${colors[dica.tipo]} border-2 rounded-xl p-5 backdrop-blur-sm`}
    >
      <div className="flex items-start gap-3">
        <div className={colors[dica.tipo].split(' text-')[1]}>
          {icons[dica.tipo]}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-1">{dica.titulo}</h4>
          <p className="text-sm text-slate-300">{dica.mensagem}</p>
        </div>
      </div>
    </motion.div>
  );
};

const CuriosidadeCard = ({ curiosidade }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, x: 4 }}
      className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 backdrop-blur-sm"
    >
      <h5 className="font-semibold text-white mb-2">{curiosidade.titulo}</h5>
      <p className="text-sm text-slate-400 mb-2">{curiosidade.descricao}</p>
      <p className="text-xs text-primary-400 italic">{curiosidade.exemplo}</p>
      <p className="text-xs text-slate-600 mt-2">Fonte: {curiosidade.fonte}</p>
    </motion.div>
  );
};

export default EducationCenter;


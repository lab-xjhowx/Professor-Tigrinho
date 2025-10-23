/**
 * 🎯 NAVBAR COMPONENT
 * Barra de navegação principal
 */

import { motion } from 'framer-motion';
import { Settings, Info, RotateCcw, Volume2, VolumeX, Sparkles, Crown } from 'lucide-react';
import { useGameState } from '@hooks/useGameState';
import { useAudio } from '@hooks/useAudio';

export const Navbar = () => {
  const { 
    resetar, 
    toggleSound, 
    soundEnabled, 
    openTipsModal, 
    openVipModal,
    vipUnlocked 
  } = useGameState();
  const { playClick } = useAudio();
  
  const handleReset = () => {
    if (confirm('Tem certeza que deseja reiniciar? Todas as estatísticas serão perdidas.')) {
      playClick();
      resetar();
    }
  };
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800 shadow-xl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl"
            >
              🐯
            </motion.div>
            <div>
              <h1 className="text-2xl font-display font-black bg-gradient-to-r from-primary-400 via-neon-pink to-gold-400 bg-clip-text text-transparent">
                Professor Tigrinho
              </h1>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                v2.0 • Educativo
              </p>
            </div>
          </motion.div>
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* VIP Badge */}
            {vipUnlocked && (
              <motion.button
                onClick={() => { playClick(); openVipModal(); }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg"
              >
                <Crown className="w-5 h-5" />
              </motion.button>
            )}
            
            {/* Info */}
            <NavButton
              icon={<Info />}
              onClick={() => { playClick(); openTipsModal(); }}
              label="Como funciona"
            />
            
            {/* Sound Toggle */}
            <NavButton
              icon={soundEnabled ? <Volume2 /> : <VolumeX />}
              onClick={() => { playClick(); toggleSound(); }}
              label={soundEnabled ? 'Som ligado' : 'Som desligado'}
              active={soundEnabled}
            />
            
            {/* Reset */}
            <NavButton
              icon={<RotateCcw />}
              onClick={handleReset}
              label="Reiniciar"
              variant="danger"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavButton = ({ icon, onClick, label, active, variant = 'default' }) => {
  const variants = {
    default: 'bg-slate-800 hover:bg-slate-700 text-slate-300',
    danger: 'bg-red-500/20 hover:bg-red-500/30 text-red-400',
    active: 'bg-primary-500/20 text-primary-400'
  };
  
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`p-3 rounded-xl transition-all ${active ? variants.active : variants[variant]}`}
      title={label}
    >
      {icon}
    </motion.button>
  );
};

export default Navbar;


/**
 * 🎰 BET CONTROLS COMPONENT
 * Sistema de controle de apostas estilo Fortune Tiger
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Play, Edit3 } from 'lucide-react';
import { useAudio } from '@hooks/useAudio';

const VALORES_APOSTA = [5, 10, 20, 50, 100];

export const BetControls = ({ 
  saldo,
  isSpinning, 
  onSpin 
}) => {
  const [betIndex, setBetIndex] = useState(1); // Começa em R$ 10
  const [modoCustom, setModoCustom] = useState(false);
  const [valorCustom, setValorCustom] = useState('10');
  const { playClick } = useAudio();
  
  const valorAtual = modoCustom 
    ? parseFloat(valorCustom) || 0 
    : VALORES_APOSTA[betIndex];
  
  const podeApostar = saldo >= valorAtual && !isSpinning && valorAtual >= 1 && valorAtual <= saldo;
  const podeDiminuir = betIndex > 0 && !isSpinning && !modoCustom;
  const podeAumentar = betIndex < VALORES_APOSTA.length - 1 && !isSpinning && !modoCustom;
  
  const handleDiminuir = () => {
    if (podeDiminuir) {
      playClick();
      setBetIndex(prev => Math.max(0, prev - 1));
    }
  };
  
  const handleAumentar = () => {
    if (podeAumentar) {
      playClick();
      setBetIndex(prev => Math.min(VALORES_APOSTA.length - 1, prev + 1));
    }
  };
  
  const handleGirar = () => {
    if (podeApostar) {
      playClick();
      onSpin(valorAtual);
    }
  };
  
  const toggleModoCustom = () => {
    playClick();
    if (!modoCustom) {
      setValorCustom(valorAtual.toString());
    }
    setModoCustom(!modoCustom);
  };
  
  const handleValorCustomChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setValorCustom(value);
  };
  
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Controles Principais */}
      <div className="flex items-center justify-center gap-4">
      {/* Botão Diminuir */}
      <motion.button
        onClick={handleDiminuir}
        disabled={!podeDiminuir}
        className={`
          w-14 h-14 rounded-xl font-bold text-2xl
          flex items-center justify-center
          transition-all duration-200
          ${podeDiminuir 
            ? 'bg-slate-700 hover:bg-slate-600 text-white shadow-lg' 
            : 'bg-slate-800 text-slate-600 cursor-not-allowed'
          }
        `}
        whileHover={podeDiminuir ? { scale: 1.05 } : {}}
        whileTap={podeDiminuir ? { scale: 0.95 } : {}}
      >
        <Minus className="w-6 h-6" />
      </motion.button>
      
      {/* Botão Principal GIRAR */}
      <div className="flex flex-col items-center gap-2">
        <motion.button
          onClick={handleGirar}
          disabled={!podeApostar}
          className={`
            relative w-32 h-32 rounded-full font-display font-black text-xl
            flex flex-col items-center justify-center
            transition-all duration-300
            overflow-hidden
            ${podeApostar
              ? 'bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-xl shadow-green-500/50 text-white'
              : 'bg-gradient-to-br from-slate-700 to-slate-800 text-slate-500 cursor-not-allowed shadow-lg'
            }
          `}
          whileHover={podeApostar ? { scale: 1.05, rotate: 5 } : {}}
          whileTap={podeApostar ? { scale: 0.95 } : {}}
          animate={isSpinning ? { 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          } : {}}
          transition={isSpinning ? {
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity }
          } : {}}
        >
          {/* Brilho animado */}
          {podeApostar && !isSpinning && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          )}
          
          {/* Conteúdo */}
          <div className="relative z-10 flex flex-col items-center">
            {isSpinning ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Play className="w-10 h-10 fill-current" />
                </motion.div>
                <span className="text-xs mt-1 uppercase tracking-wider">
                  Girando
                </span>
              </>
            ) : (
              <>
                <Play className="w-10 h-10 fill-current mb-1" />
                <span className="text-sm uppercase tracking-wider">
                  GIRAR
                </span>
              </>
            )}
          </div>
          
          {/* Partículas no hover */}
          {podeApostar && !isSpinning && (
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-0"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  whileHover={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.cos((i / 8) * Math.PI * 2) * 60,
                    y: Math.sin((i / 8) * Math.PI * 2) * 60,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          )}
        </motion.button>
        
        {/* Display do Valor da Aposta */}
        <motion.div
          className="text-center px-6 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700"
          key={valorAtual}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="text-xs text-slate-400 uppercase tracking-wider">
            Aposta
          </div>
          <div className="text-2xl font-display font-black text-gold-400">
            R$ {valorAtual.toFixed(2).replace('.', ',')}
          </div>
        </motion.div>
      </div>
      
      {/* Botão Aumentar */}
      <motion.button
        onClick={handleAumentar}
        disabled={!podeAumentar}
        className={`
          w-14 h-14 rounded-xl font-bold text-2xl
          flex items-center justify-center
          transition-all duration-200
          ${podeAumentar 
            ? 'bg-slate-700 hover:bg-slate-600 text-white shadow-lg' 
            : 'bg-slate-800 text-slate-600 cursor-not-allowed'
          }
        `}
        whileHover={podeAumentar ? { scale: 1.05 } : {}}
        whileTap={podeAumentar ? { scale: 0.95 } : {}}
      >
        <Plus className="w-6 h-6" />
      </motion.button>
      </div>
      
      {/* Modo Aposta Customizada */}
      <div className="flex items-center gap-2">
        <motion.button
          onClick={toggleModoCustom}
          disabled={isSpinning}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium
            flex items-center gap-2 transition-all
            ${modoCustom 
              ? 'bg-gold-500 text-slate-900 shadow-lg shadow-gold-500/50' 
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }
            ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          whileHover={!isSpinning ? { scale: 1.05 } : {}}
          whileTap={!isSpinning ? { scale: 0.95 } : {}}
        >
          <Edit3 className="w-4 h-4" />
          {modoCustom ? 'Valores Fixos' : 'Valor Livre'}
        </motion.button>
        
        {modoCustom && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <span className="text-slate-400 text-sm">R$</span>
            <input
              type="number"
              min="1"
              max={saldo}
              step="1"
              value={valorCustom}
              onChange={handleValorCustomChange}
              disabled={isSpinning}
              className="w-24 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-center font-bold focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/50 disabled:opacity-50"
              placeholder="10"
            />
            <span className="text-slate-500 text-xs">
              (max: R$ {saldo.toFixed(0)})
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BetControls;


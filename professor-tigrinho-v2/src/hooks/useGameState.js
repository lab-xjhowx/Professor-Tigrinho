/**
 * 🎮 HOOK DE GERENCIAMENTO DE ESTADO DO JOGO
 * Zustand store para estado global
 */

import { create } from 'zustand';
import { processarAposta, calcularLucroPrejuizo, gerarDicaEducativa, verificarConquistas, resetarJogo } from '@utils/gameLogic';
import { calcularPontosConsciencia, determinarNivelConsciencia, gerarMissaoDiaria } from '@utils/psychology';

export const useGameState = create((set, get) => ({
  // Estado inicial
  ...resetarJogo(100),
  
  // Estado de UI
  isSpinning: false,
  showRewardPopup: false,
  rewardMessage: '',
  showTipsModal: false,
  showVipModal: false,
  vipUnlocked: false,
  
  // Conquistas e missões
  conquistasDesbloqueadas: [],
  missaoAtual: gerarMissaoDiaria(),
  progressoMissao: 0,
  
  // Configurações
  soundEnabled: true,
  effectsEnabled: true,
  
  // Actions
  
  /**
   * Realiza uma aposta
   */
  apostar: async (valorAposta) => {
    const estado = get();
    
    if (estado.isSpinning) return;
    
    set({ isSpinning: true });
    
    // Processar aposta
    const resultado = processarAposta(estado, valorAposta);
    
    if (!resultado.sucesso) {
      set({ isSpinning: false });
      return resultado;
    }
    
    // Atualizar estado
    console.log('📊 Atualizando estado:', {
      saldoAntes: estado.saldo,
      saldoDepois: resultado.novoEstado.saldo,
      isVitoria: resultado.resultado.isVitoria,
      ganho: resultado.resultado.ganho
    });
    
    set({
      ...resultado.novoEstado,
      isSpinning: false
    });
    
    // Verificar conquistas
    const novasConquistas = verificarConquistas(
      resultado.novoEstado,
      estado.conquistasDesbloqueadas
    );
    
    if (novasConquistas.length > 0) {
      set(state => ({
        conquistasDesbloqueadas: [...state.conquistasDesbloqueadas, ...novasConquistas],
        showRewardPopup: true,
        rewardMessage: `🏆 Nova conquista desbloqueada!`
      }));
    }
    
    // Atualizar progresso da missão
    get().atualizarProgressoMissao(resultado.resultado);
    
    // Desbloquear VIP após 20 jogadas
    if (resultado.novoEstado.totalJogadas >= 20 && !estado.vipUnlocked) {
      set({ 
        vipUnlocked: true,
        showRewardPopup: true,
        rewardMessage: '🌟 Modo VIP Desbloqueado! Acesse conteúdo exclusivo.'
      });
    }
    
    return resultado;
  },
  
  /**
   * Resetar jogo
   */
  resetar: () => {
    set({
      ...resetarJogo(100),
      isSpinning: false,
      conquistasDesbloqueadas: [],
      missaoAtual: gerarMissaoDiaria(),
      progressoMissao: 0
    });
  },
  
  /**
   * Obter estatísticas
   */
  getEstatisticas: () => {
    const estado = get();
    return {
      basicas: {
        totalJogadas: estado.totalJogadas,
        vitorias: estado.vitorias,
        derrotas: estado.derrotas,
        nearMisses: estado.nearMisses,
        taxaVitoria: estado.totalJogadas > 0 
          ? ((estado.vitorias / estado.totalJogadas) * 100).toFixed(1) + '%'
          : '0%'
      },
      financeiras: calcularLucroPrejuizo(estado),
      consciencia: {
        pontos: calcularPontosConsciencia(estado),
        nivel: determinarNivelConsciencia(calcularPontosConsciencia(estado))
      }
    };
  },
  
  /**
   * Obter dica educativa
   */
  getDica: () => {
    return gerarDicaEducativa(get());
  },
  
  /**
   * Toggle configurações
   */
  toggleSound: () => set(state => ({ soundEnabled: !state.soundEnabled })),
  toggleEffects: () => set(state => ({ effectsEnabled: !state.effectsEnabled })),
  
  /**
   * Controle de popups
   */
  closeRewardPopup: () => set({ showRewardPopup: false }),
  showReward: (message) => set({ showRewardPopup: true, rewardMessage: message }),
  
  /**
   * Controle de modais
   */
  openTipsModal: () => set({ showTipsModal: true }),
  closeTipsModal: () => set({ showTipsModal: false }),
  openVipModal: () => set({ showVipModal: true }),
  closeVipModal: () => set({ showVipModal: false }),
  
  /**
   * Atualizar progresso da missão
   */
  atualizarProgressoMissao: (jogada) => {
    const { missaoAtual, progressoMissao } = get();
    
    let novoProgresso = progressoMissao;
    
    // Lógica específica por tipo de missão
    if (missaoAtual.id === 'observe_pattern' && jogada.isNearMiss) {
      novoProgresso++;
    } else if (missaoAtual.id === 'calculate_rtp') {
      novoProgresso++;
    } else if (missaoAtual.id === 'identify_hook' && get().totalJogadas <= 5) {
      novoProgresso++;
    } else if (missaoAtual.id === 'emotional_awareness') {
      novoProgresso++;
    }
    
    // Missão completa
    if (novoProgresso >= missaoAtual.objetivo) {
      set({
        progressoMissao: 0,
        missaoAtual: gerarMissaoDiaria(),
        showRewardPopup: true,
        rewardMessage: `✅ Missão completa! ${missaoAtual.recompensa}`
      });
    } else {
      set({ progressoMissao: novoProgresso });
    }
  },
  
  /**
   * Depositar mais dinheiro (simulação)
   */
  depositar: (valor) => {
    set(state => ({
      saldo: state.saldo + valor,
      saldoInicial: state.saldo + valor,
      faseAtual: 'hook' // Reset para hook phase
    }));
  }
}));


/**
 * 🎮 LÓGICA PRINCIPAL DO JOGO
 * Gerencia estado, apostas e resultados
 */

import { generateSlotResult, determinarFase } from './probability';
import frases from '@data/frases.json';

/**
 * Processa uma aposta
 */
export const processarAposta = (estadoAtual, valorAposta) => {
  const { saldo, totalJogadas, sequenciaPerdas, saldoInicial, historicoApostas } = estadoAtual;
  
  // Validar saldo
  if (saldo < valorAposta) {
    return {
      sucesso: false,
      mensagem: '❌ Saldo insuficiente! Na vida real, você quebraria aqui...',
      novoEstado: estadoAtual
    };
  }
  
  // Deduzir aposta
  const novoSaldo = saldo - valorAposta;
  
  // Determinar fase psicológica
  const fase = determinarFase(totalJogadas, sequenciaPerdas, novoSaldo, saldoInicial);
  
  // Gerar resultado
  const { resultado, isVitoria, isNearMiss } = generateSlotResult(fase, true);
  
  // Calcular ganhos
  let ganho = 0;
  let novoSaldoFinal = novoSaldo;
  
  if (isVitoria) {
    ganho = valorAposta * resultado[0].multiplicador;
    novoSaldoFinal = novoSaldo + ganho;
  }
  
  // Atualizar estatísticas
  const novasEstatisticas = {
    totalJogadas: totalJogadas + 1,
    totalApostado: estadoAtual.totalApostado + valorAposta,
    totalGanho: estadoAtual.totalGanho + (isVitoria ? ganho : 0),
    vitorias: estadoAtual.vitorias + (isVitoria ? 1 : 0),
    derrotas: estadoAtual.derrotas + (isVitoria ? 0 : 1),
    nearMisses: estadoAtual.nearMisses + (isNearMiss ? 1 : 0),
    sequenciaPerdas: isVitoria ? 0 : sequenciaPerdas + 1,
    maiorSequenciaPerdas: Math.max(
      estadoAtual.maiorSequenciaPerdas,
      isVitoria ? sequenciaPerdas : sequenciaPerdas + 1
    )
  };
  
  // Adicionar ao histórico
  const novaJogada = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    aposta: valorAposta,
    resultado: resultado.map(a => a.icon).join(' '),
    animais: resultado,
    isVitoria,
    isNearMiss,
    ganho: isVitoria ? ganho : 0,
    saldoApos: novoSaldoFinal,
    fase
  };
  
  const novoHistorico = [novaJogada, ...historicoApostas].slice(0, 50); // Manter últimas 50
  
  // Selecionar mensagem apropriada
  let mensagem = '';
  if (isVitoria) {
    mensagem = frases.vitorias[Math.floor(Math.random() * frases.vitorias.length)];
  } else if (isNearMiss) {
    mensagem = frases.nearMiss[Math.floor(Math.random() * frases.nearMiss.length)];
  } else {
    mensagem = frases.perdas[Math.floor(Math.random() * frases.perdas.length)];
  }
  
  return {
    sucesso: true,
    resultado: novaJogada,
    mensagem,
    novoEstado: {
      ...estadoAtual,
      saldo: novoSaldoFinal,
      ...novasEstatisticas,
      historicoApostas: novoHistorico,
      faseAtual: fase
    }
  };
};

/**
 * Calcula lucro/prejuízo
 */
export const calcularLucroPrejuizo = (estado) => {
  const { saldo, saldoInicial, totalApostado, totalGanho } = estado;
  
  const diferenca = saldo - saldoInicial;
  const lucroCasa = totalApostado - totalGanho;
  const rtpReal = totalApostado > 0 ? (totalGanho / totalApostado) * 100 : 0;
  
  return {
    diferenca: diferenca.toFixed(2),
    percentual: saldoInicial > 0 ? ((diferenca / saldoInicial) * 100).toFixed(2) : 0,
    lucroCasa: lucroCasa.toFixed(2),
    rtpReal: rtpReal.toFixed(2) + '%',
    status: diferenca >= 0 ? 'lucro' : 'prejuizo'
  };
};

/**
 * Gera dica educativa baseada no estado
 */
export const gerarDicaEducativa = (estado) => {
  const { totalJogadas, vitorias, nearMisses, sequenciaPerdas, faseAtual } = estado;
  const stats = calcularLucroPrejuizo(estado);
  
  // Diferentes dicas baseadas em situação
  if (totalJogadas === 1) {
    return {
      tipo: 'info',
      titulo: '👋 Bem-vindo!',
      mensagem: 'Observe como as primeiras jogadas são "fáceis". Isso é proposital!'
    };
  }
  
  if (totalJogadas === 5 && vitorias >= 2) {
    return {
      tipo: 'warning',
      titulo: '🎣 Hook Phase Detectada!',
      mensagem: 'Você ganhou nas primeiras jogadas? Prepare-se... a fase de perdas está chegando.'
    };
  }
  
  if (nearMisses >= 3) {
    return {
      tipo: 'education',
      titulo: '🎯 Near-Miss em Ação',
      mensagem: `Você já viu ${nearMisses} "quase vitórias". Isso é programado para te fazer continuar!`
    };
  }
  
  if (sequenciaPerdas >= 5) {
    return {
      tipo: 'alert',
      titulo: '📉 Sequência de Perdas',
      mensagem: 'Na vida real, você estaria perseguindo perdas. Esse é o caminho para falência.'
    };
  }
  
  if (parseFloat(stats.diferenca) < -50) {
    return {
      tipo: 'critical',
      titulo: '🚨 ALERTA CRÍTICO',
      mensagem: `Você já perdeu R$ ${Math.abs(stats.diferenca)}. A casa está lucrando como planejado.`
    };
  }
  
  if (faseAtual === 'loss') {
    return {
      tipo: 'warning',
      titulo: '📊 Loss Phase Ativa',
      mensagem: 'Suas chances foram reduzidas. O sistema está garantindo lucro da casa.'
    };
  }
  
  // Dica aleatória educativa
  const dicasAleatorias = frases.educativas;
  return {
    tipo: 'info',
    titulo: '💡 Curiosidade',
    mensagem: dicasAleatorias[Math.floor(Math.random() * dicasAleatorias.length)]
  };
};

/**
 * Verifica conquistas desbloqueadas
 */
export const verificarConquistas = (estado, conquistasAtuais) => {
  const novasConquistas = [];
  
  if (estado.totalJogadas === 1 && !conquistasAtuais.includes('first_spin')) {
    novasConquistas.push('first_spin');
  }
  
  if (estado.vitorias === 1 && !conquistasAtuais.includes('first_win')) {
    novasConquistas.push('first_win');
  }
  
  if (estado.totalJogadas >= 10 && !conquistasAtuais.includes('wake_up')) {
    novasConquistas.push('wake_up');
  }
  
  if (estado.nearMisses >= 5 && !conquistasAtuais.includes('conscious')) {
    novasConquistas.push('conscious');
  }
  
  return novasConquistas;
};

/**
 * Reseta o jogo
 */
export const resetarJogo = (saldoInicial = 100) => {
  return {
    saldo: saldoInicial,
    saldoInicial,
    totalJogadas: 0,
    totalApostado: 0,
    totalGanho: 0,
    vitorias: 0,
    derrotas: 0,
    nearMisses: 0,
    sequenciaPerdas: 0,
    maiorSequenciaPerdas: 0,
    historicoApostas: [],
    faseAtual: 'hook',
    conquistasDesbloqueadas: []
  };
};


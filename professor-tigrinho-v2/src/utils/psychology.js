/**
 * 🧠 SISTEMA DE PSICOLOGIA E MANIPULAÇÃO
 * Implementa táticas psicológicas reais dos cassinos
 */

import frases from '@data/frases.json';

/**
 * Gera mensagem de recompensa falsa (gamificação)
 */
export const gerarRecompensaFalsa = (tipo = 'random') => {
  const recompensas = {
    vitoria: [
      '🎁 Você ganhou: +100 Pontos de Sorte!',
      '⭐ Nível de Consciência: MÁXIMO!',
      '💎 Item Raro: "Imunidade à Manipulação"',
      '🏆 Conquista Desbloqueada: Pensador Crítico',
      '🔥 Combo de Sabedoria x3 ativado!'
    ],
    aprendizado: [
      '📚 +50 XP em Educação Financeira',
      '🧠 Novo Conhecimento Desbloqueado!',
      '💡 Missão Completa: Entender Manipulação',
      '🎓 Certificado: Expert em Probabilidades',
      '✨ Poder Especial: Visão Além do Marketing'
    ],
    consciencia: [
      '🌟 Consciência +1000',
      '💪 Resistência Mental Aprimorada',
      '🛡️ Escudo Anti-Propaganda Ativado',
      '🔮 Terceiro Olho da Matemática Aberto',
      '⚡ Super Poder: Ver Através das Mentiras'
    ]
  };
  
  const categoria = tipo === 'random' 
    ? ['vitoria', 'aprendizado', 'consciencia'][Math.floor(Math.random() * 3)]
    : tipo;
    
  const mensagens = recompensas[categoria];
  return mensagens[Math.floor(Math.random() * mensagens.length)];
};

/**
 * Analisa padrão de comportamento do jogador
 */
export const analisarComportamento = (historico) => {
  if (historico.length < 5) {
    return { perfil: 'iniciante', risco: 'baixo' };
  }
  
  const ultimas10 = historico.slice(0, 10);
  const apostasAltas = ultimas10.filter(j => j.aposta >= 20).length;
  const perdas = ultimas10.filter(j => !j.isVitoria).length;
  
  // Detectar comportamento de risco
  if (apostasAltas >= 5 && perdas >= 7) {
    return {
      perfil: 'risco_alto',
      risco: 'critico',
      alerta: '🚨 COMPORTAMENTO DE RISCO DETECTADO! Na vida real, você estaria em sérios problemas.'
    };
  }
  
  if (perdas >= 8) {
    return {
      perfil: 'perseguindo_perdas',
      risco: 'alto',
      alerta: '⚠️ Você está perseguindo perdas! Clássico comportamento de vício.'
    };
  }
  
  return { perfil: 'casual', risco: 'moderado' };
};

/**
 * Gera insight psicológico personalizado
 */
export const gerarInsight = (estado) => {
  const { totalJogadas, vitorias, derrotas, sequenciaPerdas, nearMisses } = estado;
  
  const taxaVitoria = totalJogadas > 0 ? (vitorias / totalJogadas) * 100 : 0;
  const taxaNearMiss = totalJogadas > 0 ? (nearMisses / derrotas) * 100 : 0;
  
  const insights = [];
  
  // Insight sobre taxa de vitória
  if (taxaVitoria > 30) {
    insights.push({
      tipo: 'hook_phase',
      titulo: '🎣 Hook Phase Detectada',
      descricao: `Você ganhou ${taxaVitoria.toFixed(0)}% das vezes. Isso NÃO é normal! Você está na fase de fisgar.`,
      impacto: 'warning'
    });
  } else if (taxaVitoria < 10) {
    insights.push({
      tipo: 'loss_phase',
      titulo: '📉 Loss Phase Ativa',
      descricao: `Apenas ${taxaVitoria.toFixed(0)}% de vitórias. O sistema está recuperando o que te deu antes.`,
      impacto: 'critical'
    });
  }
  
  // Insight sobre near-miss
  if (taxaNearMiss > 30) {
    insights.push({
      tipo: 'near_miss',
      titulo: '🎯 Manipulação Near-Miss',
      descricao: `${taxaNearMiss.toFixed(0)}% das suas perdas mostram "2 iguais". Isso é programado!`,
      impacto: 'warning'
    });
  }
  
  // Insight sobre sequência de perdas
  if (sequenciaPerdas >= 5) {
    insights.push({
      tipo: 'losing_streak',
      titulo: '💔 Sequência de Perdas',
      descricao: `${sequenciaPerdas} perdas seguidas. Gambler's Fallacy em ação: "a próxima vai dar certo!"`,
      impacto: 'alert'
    });
  }
  
  // Insight sobre viés cognitivo
  if (totalJogadas >= 20 && vitorias <= 3) {
    insights.push({
      tipo: 'cognitive_bias',
      titulo: '🧠 Viés de Confirmação',
      descricao: 'Você lembra das 3 vitórias, mas esquece das 17+ derrotas. Assim o vício funciona.',
      impacto: 'education'
    });
  }
  
  return insights;
};

/**
 * Calcula "pontos de consciência"
 */
export const calcularPontosConsciencia = (estado) => {
  let pontos = 0;
  
  // Pontos por jogar (paradoxo: quanto mais joga, mais aprende sobre o sistema)
  pontos += estado.totalJogadas * 10;
  
  // Bônus por identificar near-miss
  pontos += estado.nearMisses * 50;
  
  // Bônus por perder (aprende na prática que a casa sempre ganha)
  pontos += estado.derrotas * 25;
  
  // Bônus por sequência de perdas (quanto mais perde, mais consciente fica)
  pontos += estado.maiorSequenciaPerdas * 100;
  
  return pontos;
};

/**
 * Determina "nível de consciência"
 */
export const determinarNivelConsciencia = (pontos) => {
  if (pontos < 500) {
    return {
      nivel: 1,
      titulo: '🌱 Aprendiz',
      descricao: 'Você está começando a entender como funciona.',
      proxo: 500
    };
  } else if (pontos < 1500) {
    return {
      nivel: 2,
      titulo: '👁️ Observador',
      descricao: 'Você está vendo os padrões de manipulação.',
      proximo: 1500
    };
  } else if (pontos < 3000) {
    return {
      nivel: 3,
      titulo: '🧠 Analista',
      descricao: 'Você entende as táticas psicológicas profundamente.',
      proximo: 3000
    };
  } else if (pontos < 5000) {
    return {
      nivel: 4,
      titulo: '💎 Mestre',
      descricao: 'Você é imune à manipulação dos cassinos.',
      proximo: 5000
    };
  } else {
    return {
      nivel: 5,
      titulo: '🏆 Educador',
      descricao: 'Você pode ensinar outros sobre esses perigos.',
      proximo: null
    };
  }
};

/**
 * Gera missão diária educativa
 */
export const gerarMissaoDiaria = () => {
  const missoes = [
    {
      id: 'observe_pattern',
      titulo: '🔍 Observar Padrões',
      descricao: 'Conte quantas vezes você vê exatamente "2 símbolos iguais"',
      objetivo: 5,
      recompensa: '📊 Dados sobre frequência de Near-Miss'
    },
    {
      id: 'calculate_rtp',
      titulo: '🧮 Calcular RTP Real',
      descricao: 'Compare quanto apostou vs quanto ganhou após 20 jogadas',
      objetivo: 20,
      recompensa: '💡 Revelação: A matemática nunca mente'
    },
    {
      id: 'identify_hook',
      titulo: '🎣 Identificar Hook Phase',
      descricao: 'Observe se as primeiras 5 jogadas são "mais fáceis"',
      objetivo: 5,
      recompensa: '🧠 Compreensão sobre manipulação inicial'
    },
    {
      id: 'emotional_awareness',
      titulo: '😌 Consciência Emocional',
      descricao: 'Observe como você se sente após vitórias vs perdas',
      objetivo: 10,
      recompensa: '💭 Insight sobre reforço positivo/negativo'
    }
  ];
  
  return missoes[Math.floor(Math.random() * missoes.length)];
};

/**
 * Mensagens educativas para desenvolvedores curiosos
 */
export const mensagensParaDevs = [
  '🧠 Você está explorando o código? Ótimo! Este é um projeto educativo open-source.',
  '👨‍💻 Curioso sobre como funciona? Leia o README.md para detalhes técnicos!',
  '📚 Todo o código está disponível no GitHub. Aprenda e compartilhe!',
  '💡 Desenvolvedor esperto! Você está vendo como cassinos manipulam probabilidades.',
  '🎓 Parabéns por ter curiosidade técnica! Isso mostra pensamento crítico.',
  '🔍 Inspecionando o DevTools? Ótimo! Transparência é nosso objetivo.',
  '⚡ Você percebeu que o código é aberto? Cassinos reais escondem isso...',
  '🌟 Developer Mode: Você pode ver exatamente como a manipulação funciona!'
];


/**
 * 🎲 SISTEMA DE PROBABILIDADES
 * Calcula probabilidades reais e manipuladas
 */

import { animais } from '@data/estatisticas.json';

/**
 * Seleciona animal baseado em peso de probabilidade
 */
export const getRandomAnimal = (fase = 'normal', ajustes = {}) => {
  let animaisAjustados = [...animais];
  
  // Ajuste baseado na fase psicológica
  if (fase === 'hook') {
    // Hook Phase: Aumenta chances de animais valiosos
    animaisAjustados = animaisAjustados.map(animal => ({
      ...animal,
      chance: animal.multiplicador > 1.5 
        ? animal.chance * 1.5  // 50% mais chance
        : animal.chance
    }));
  } else if (fase === 'loss') {
    // Loss Phase: Reduz chances de animais valiosos
    animaisAjustados = animaisAjustados.map(animal => ({
      ...animal,
      chance: animal.multiplicador > 1.5 
        ? animal.chance * 0.5  // 50% menos chance
        : animal.chance
    }));
  }
  
  // Calcular peso total
  const pesoTotal = animaisAjustados.reduce((sum, animal) => sum + animal.chance, 0);
  
  // Selecionar random ponderado
  let random = Math.random() * pesoTotal;
  
  for (const animal of animaisAjustados) {
    random -= animal.chance;
    if (random <= 0) {
      return animais.find(a => a.id === animal.id); // Retorna original, não ajustado
    }
  }
  
  return animais[0]; // Fallback: rato
};

/**
 * Gera resultado de 3 slots
 */
export const generateSlotResult = (fase = 'normal', nearMissEnabled = true) => {
  const slot1 = getRandomAnimal(fase);
  const slot2 = getRandomAnimal(fase);
  const slot3 = getRandomAnimal(fase);
  
  const resultado = [slot1, slot2, slot3];
  
  // Verificar se é vitória
  const isVitoria = slot1.id === slot2.id && slot2.id === slot3.id;
  
  // Near-Miss: Forçar 2 iguais se perdeu (40% das vezes)
  if (!isVitoria && nearMissEnabled && Math.random() < 0.4) {
    // Escolher qual slot vai ser igual
    const matchIndex = Math.floor(Math.random() * 3);
    
    if (matchIndex === 0) {
      resultado[2] = slot1; // Primeiro e último iguais
    } else if (matchIndex === 1) {
      resultado[0] = slot2; // Primeiro e segundo iguais
    } else {
      resultado[1] = slot3; // Segundo e terceiro iguais
    }
    
    return { resultado, isVitoria: false, isNearMiss: true };
  }
  
  return { resultado, isVitoria, isNearMiss: false };
};

/**
 * Calcula probabilidade real de vitória
 */
export const calcularProbabilidadeReal = () => {
  const probabilidades = animais.map(animal => {
    const chanceDecimal = animal.chance / 100;
    const probabilidade3Iguais = Math.pow(chanceDecimal, 3);
    const rtp = probabilidade3Iguais * animal.multiplicador;
    
    return {
      animal: animal.nome,
      probabilidade: (probabilidade3Iguais * 100).toFixed(4) + '%',
      rtp: (rtp * 100).toFixed(2) + '%'
    };
  });
  
  const rtpTotal = probabilidades.reduce((sum, p) => {
    return sum + parseFloat(p.rtp.replace('%', ''));
  }, 0);
  
  return {
    probabilidades,
    rtpTotal: rtpTotal.toFixed(2) + '%',
    houseEdge: (100 - rtpTotal).toFixed(2) + '%'
  };
};

/**
 * Calcula estatísticas esperadas
 */
export const calcularEstatisticasEsperadas = (numeroJogadas, valorAposta) => {
  const stats = calcularProbabilidadeReal();
  const rtpDecimal = parseFloat(stats.rtpTotal.replace('%', '')) / 100;
  
  const totalApostado = numeroJogadas * valorAposta;
  const retornoEsperado = totalApostado * rtpDecimal;
  const perdaEsperada = totalApostado - retornoEsperado;
  
  return {
    totalApostado: totalApostado.toFixed(2),
    retornoEsperado: retornoEsperado.toFixed(2),
    perdaEsperada: perdaEsperada.toFixed(2),
    percentualPerda: ((perdaEsperada / totalApostado) * 100).toFixed(2) + '%'
  };
};

/**
 * Verifica se deve ativar Hook Phase
 */
export const shouldActivateHook = (totalJogadas, saldoAtual, saldoInicial) => {
  // Ativa hook se:
  // 1. Primeiras 5 jogadas
  if (totalJogadas < 5) return true;
  
  // 2. Jogador depositou mais (saldo maior que inicial)
  if (saldoAtual > saldoInicial) return true;
  
  // 3. Jogador perdeu muito (abaixo de 30% do inicial)
  if (saldoAtual < saldoInicial * 0.3) {
    // 20% de chance de dar "migalha" para manter jogando
    return Math.random() < 0.2;
  }
  
  return false;
};

/**
 * Determina fase psicológica atual
 */
export const determinarFase = (totalJogadas, sequenciaPerdas, saldoAtual, saldoInicial) => {
  // Hook Phase: primeiras jogadas ou após depositar
  if (shouldActivateHook(totalJogadas, saldoAtual, saldoInicial)) {
    return 'hook';
  }
  
  // Loss Phase: muitas perdas seguidas ou saldo baixo
  if (sequenciaPerdas >= 5 || saldoAtual < saldoInicial * 0.5) {
    return 'loss';
  }
  
  // Normal Phase
  return 'normal';
};


/**
 * 👨‍💻 MENSAGENS EDUCATIVAS PARA DESENVOLVEDORES
 * Sistema de proteção suave com mensagens educativas
 */

import { mensagensParaDevs } from './psychology';

/**
 * Inicializa sistema de mensagens educativas no console
 */
export const initDevMessages = () => {
  // Mensagem de boas-vindas estilizada
  console.log(
    '%c🐯 Professor Tigrinho v2.0',
    'font-size: 24px; font-weight: bold; color: #8b5cf6; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
  );
  
  console.log(
    '%c🎓 Projeto Educativo Open-Source',
    'font-size: 16px; color: #10b981; font-weight: bold;'
  );
  
  console.log(
    '%cDesenvolvido por Jonathan (@xjhowx)',
    'font-size: 12px; color: #94a3b8;'
  );
  
  console.log('\n%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'color: #4c1d95');
  
  console.log(
    '%c👨‍💻 Olá, Desenvolvedor(a)!',
    'font-size: 14px; font-weight: bold; color: #ec4899;'
  );
  
  console.log(
    `%c
🧠 Você está explorando o código? Perfeito!

Este é um projeto educativo que demonstra como cassinos online
manipulam jogadores usando táticas psicológicas.

📚 O que você pode fazer aqui:
  ✓ Explorar o código-fonte livremente
  ✓ Entender como probabilidades são manipuladas
  ✓ Ver táticas de Near-Miss, Hook Phase, etc.
  ✓ Aprender sobre vieses cognitivos
  ✓ Contribuir no GitHub

⚠️  O que NÃO recomendamos:
  ✗ Usar essas técnicas para prejudicar pessoas
  ✗ Criar sistemas de apostas reais
  ✗ Explorar vulnerabilidades para lucro próprio

💡 Propósito: EDUCAÇÃO e CONSCIENTIZAÇÃO

🔗 Acesse o repositório: github.com/jonathan/professor-tigrinho-v2
📖 Leia a documentação completa no README.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `,
    'font-size: 11px; color: #cbd5e1; line-height: 1.6;'
  );
  
  // Expor API útil para desenvolvedores
  window.ProfessorTigrinho = {
    versao: '2.0.0',
    autor: 'Jonathan (@xjhowx)',
    
    info: () => {
      console.log('%c📊 Informações do Sistema', 'font-weight: bold; color: #8b5cf6;');
      console.table({
        'Versão': '2.0.0',
        'Framework': 'React 18',
        'Build': 'Vite 5',
        'Estilo': 'Tailwind CSS 3',
        'Animações': 'Framer Motion',
        'Ícones': 'Lucide React',
        'Estado': 'Zustand'
      });
    },
    
    probabilidades: () => {
      console.log('%c🎲 Sistema de Probabilidades', 'font-weight: bold; color: #10b981;');
      console.log(`
Hook Phase: Primeiras 5-10 jogadas têm chances aumentadas (+50%)
Loss Phase: Após hook, chances reduzidas (-30%)
Near-Miss: 40% das perdas mostram "2 símbolos iguais"
House Edge: ~85% de vantagem da casa
RTP Real: ~15% retorno ao jogador
      `);
    },
    
    taticas: () => {
      console.log('%c🧠 Táticas Psicológicas Implementadas', 'font-weight: bold; color: #ec4899;');
      console.table({
        'Hook Phase': 'Vitórias fáceis no início',
        'Loss Phase': 'Perdas programadas após hook',
        'Near-Miss': 'Mostrar "quase vitórias"',
        'Reforço Positivo': 'Exagerar vitórias',
        'Loss Aversion': 'Minimizar perdas visuais',
        'Variable Ratio': 'Recompensas imprevisíveis',
        'Gamification': 'Recompensas falsas educativas'
      });
    },
    
    ajuda: () => {
      console.log(`%c
🆘 Comandos Disponíveis:

  ProfessorTigrinho.info()           - Informações do sistema
  ProfessorTigrinho.probabilidades() - Ver sistema de probabilidades
  ProfessorTigrinho.taticas()        - Listar táticas psicológicas
  ProfessorTigrinho.creditos()       - Créditos e contato
  ProfessorTigrinho.ajuda()          - Mostrar esta ajuda

💡 Dica: Abra o React DevTools para ver o estado em tempo real!
      `, 'color: #94a3b8;');
    },
    
    creditos: () => {
      console.log(`%c
👨‍💻 Desenvolvedor: Jonathan
🐦 Twitter/X: @xjhowx
🔗 GitHub: github.com/jonathan
📧 Contato: contato@jonathan.dev

🏆 Créditos Especiais:
  - Pesquisas em Psicologia Cognitiva
  - Estudos sobre Vieses Comportamentais
  - Comunidade Open-Source

📜 Licença: MIT (Uso livre para fins educativos)
⭐ Se gostou, dê uma estrela no GitHub!
      `, 'color: #fbbf24;');
    }
  };
  
  // Mostrar mensagem aleatória educativa
  setTimeout(() => {
    const mensagem = mensagensParaDevs[Math.floor(Math.random() * mensagensParaDevs.length)];
    console.log(`%c${mensagem}`, 'font-size: 13px; color: #8b5cf6; padding: 10px;');
  }, 2000);
};

/**
 * Monitora abertura do DevTools (educativo, não bloqueador)
 */
export const monitorDevTools = () => {
  let devToolsAberto = false;
  
  const detectar = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    const agoraAberto = widthThreshold || heightThreshold;
    
    if (agoraAberto && !devToolsAberto) {
      devToolsAberto = true;
      mostrarMensagemDevTools();
    } else if (!agoraAberto && devToolsAberto) {
      devToolsAberto = false;
    }
  };
  
  setInterval(detectar, 1000);
};

/**
 * Mostra mensagem educativa quando DevTools é aberto
 */
const mostrarMensagemDevTools = () => {
  console.log(
    '%c🔍 DevTools Detectado!',
    'font-size: 18px; font-weight: bold; color: #ec4899; background: #1e293b; padding: 10px; border-radius: 5px;'
  );
  
  console.log(`%c
👋 Olá, desenvolvedor curioso!

Você abriu o DevTools - isso é ÓTIMO! Significa que você tem curiosidade
técnica e pensamento crítico.

🎓 Este projeto é open-source justamente para que pessoas como você
possam entender EXATAMENTE como cassinos manipulam jogadores.

🔍 O que explorar:
  • Components tab - Veja o estado do React em tempo real
  • Network tab - Observe que não há chamadas suspeitas
  • Console tab - Use os comandos ProfessorTigrinho.*

💡 Cassinos REAIS escondem esse código. Nós mostramos tudo!

Digite ProfessorTigrinho.ajuda() para ver comandos disponíveis.
  `, 'color: #cbd5e1; line-height: 1.6; font-size: 12px;');
  
  console.log('%cContinue explorando! 🚀', 'font-size: 14px; color: #10b981; font-weight: bold;');
};

/**
 * Proteção suave: Mensagem ao invés de bloqueio
 */
export const protecaoSuave = () => {
  // Interceptar context menu (botão direito)
  document.addEventListener('contextmenu', (e) => {
    // Não bloquear, apenas mostrar mensagem educativa
    console.log(
      '%c📱 Botão direito detectado!',
      'color: #8b5cf6; font-weight: bold;'
    );
    console.log(
      'Você pode usar! Este é um projeto educativo. Explore à vontade! 🎓'
    );
    // Não previne: e.preventDefault();
  });
  
  // Interceptar seleção de texto
  document.addEventListener('selectstart', () => {
    console.log(
      '%c📝 Texto selecionado! Pode copiar tranquilamente. Compartilhe o conhecimento! 📚',
      'color: #10b981;'
    );
  });
  
  // Interceptar Ctrl+C
  document.addEventListener('copy', () => {
    console.log(
      '%c📋 Conteúdo copiado! Ótimo - compartilhe esse conhecimento com outros! 🌟',
      'color: #fbbf24; font-weight: bold;'
    );
  });
  
  // Mensagem ao tentar arrastar
  document.addEventListener('dragstart', () => {
    console.log(
      '%c🖱️ Elemento sendo arrastado! Explore a interface livremente! ✨',
      'color: #ec4899;'
    );
  });
};

/**
 * Watermark digital educativo
 */
export const addWatermark = () => {
  const style = document.createElement('style');
  style.textContent = `
    .dev-watermark {
      position: fixed;
      bottom: 10px;
      right: 10px;
      font-size: 10px;
      color: rgba(139, 92, 246, 0.3);
      pointer-events: none;
      z-index: 9999;
      font-family: 'JetBrains Mono', monospace;
      user-select: none;
    }
  `;
  document.head.appendChild(style);
  
  const watermark = document.createElement('div');
  watermark.className = 'dev-watermark';
  watermark.textContent = 'Professor Tigrinho by Jonathan (@xjhowx) • Educativo';
  document.body.appendChild(watermark);
};

export default {
  initDevMessages,
  monitorDevTools,
  protecaoSuave,
  addWatermark
};


# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-10-23

### 🎉 Lançamento Inicial

Primeira versão pública do **SlotMind** - Simulador Educativo de Psicologia em Jogos de Azar.

### ✨ Adicionado

#### Core Features
- 🎰 **Sistema de Slot Machine** completo e funcional
  - 5 animais diferentes com probabilidades e multiplicadores únicos
  - Animações suaves de spin com efeito stagger
  - Sistema de apostas de R$ 5,00 e R$ 10,00
  - Saldo inicial de R$ 100,00

#### Táticas Psicológicas
- 🎣 **Hook Phase (Fase de Fisgar)**
  - Primeiras 5 jogadas com chances aumentadas
  - Bônus configurável de +30% na probabilidade
  - Transição automática para Loss Phase
  
- 📉 **Loss Phase (Fase de Perda)**
  - Redução de 15% nas chances após hook phase
  - Simulação de "recuperação" da casa
  - Indicador visual de fase atual
  
- 🎯 **Near-Miss Effect (Quase Vitória)**
  - 40% de chance de gerar 2 símbolos iguais em perdas
  - Animação especial de "shake" para near-miss
  - Feedback visual diferenciado
  
- 🎊 **Reforço Positivo**
  - Efeitos de confete em vitórias
  - Animações de "glow" nos slots vencedores
  - Sons de celebração
  - Modal de vitória com destaque

#### Interface & Design
- 🎨 **Design System Moderno**
  - Paleta de cores vibrante (Indigo, Pink, Green, Red, Amber)
  - CSS Variables para customização
  - Glassmorphism effects
  - Gradientes dinâmicos
  
- 📱 **Totalmente Responsivo**
  - Layout mobile-first
  - Breakpoints: Mobile (<480px), Tablet (481-767px), Desktop (>768px)
  - Grid adaptativo
  - Touch-friendly buttons
  
- ✨ **Efeitos Visuais**
  - Particles background animado
  - Confetti canvas com física realista
  - Animações CSS3 suaves
  - Transições fluidas

#### Funcionalidades
- 📊 **Estatísticas em Tempo Real**
  - Total de jogadas
  - Número de vitórias
  - Lucro/Prejuízo do jogador
  - Lucro da casa
  - Taxa de vitória
  
- 📜 **Histórico de Jogadas**
  - Log de últimas 20 jogadas
  - Timestamps de cada aposta
  - Diferenciação visual (vitória/perda/info)
  - Botão de limpar histórico
  
- ⚙️ **Configurações Avançadas**
  - Ajuste de probabilidades individuais
  - Configuração de multiplicadores
  - Toggle de táticas psicológicas
  - Parâmetros de hook/loss phase
  - Configuração de near-miss
  - Controle de sons
  - Garantia de lucro da casa
  
- 🧠 **Indicador de Fase Psicológica**
  - Barra de progresso visual
  - Texto descritivo da fase atual
  - Contador de jogadas fáceis restantes
  - Cores indicativas (Verde/Amarelo/Vermelho)

#### Documentação
- 📝 **README.md Completo**
  - Badges de tecnologias
  - Índice navegável
  - Explicações detalhadas de cada tática
  - Matemática do jogo explicada
  - Diagramas Mermaid (Fluxo e Arquitetura)
  - Guias de uso e configuração
  - Roadmap futuro
  - Referências científicas
  
- 🤝 **CONTRIBUTING.md**
  - Código de conduta
  - Templates de issue/PR
  - Padrões de código
  - Guia de estilo
  - Processo de contribuição
  
- 📄 **LICENSE (MIT)**
  - Licença permissiva
  - Permite uso comercial
  - Requer atribuição
  
- 📋 **CHANGELOG.md**
  - Histórico de versões
  - Formato Keep a Changelog
  - Semantic Versioning

#### Arquitetura de Código
- 🏗️ **Organização Modular**
  - Separação em classes ES6+
  - GameState, GameSettings, GameEngine
  - SlotMachine, UIManager, ModalManager
  - HistoryManager, AudioManager
  
- 🎯 **Design Patterns**
  - MVC pattern
  - Class-based architecture
  - Event-driven design
  - State management
  
- 🔊 **Sistema de Áudio**
  - Sons de vitória
  - Sons de spin
  - Preload de áudio
  - Controle silencioso em caso de erro

#### Acessibilidade
- ♿ **A11y Features**
  - Labels descritivos
  - ARIA attributes
  - Semântica HTML5
  - Contraste adequado
  - Foco visível

### 🛠️ Técnico

#### Tecnologias
- **HTML5**: Estrutura semântica
- **CSS3**: Variables, Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Classes, Async/Await, Modules
- **Canvas API**: Efeitos de confete
- **Web Audio API**: Sistema de sons

#### Performance
- Zero dependências externas
- Vanilla JavaScript puro
- CSS otimizado com variáveis
- Animações via requestAnimationFrame
- Assets inline (sem carregamentos externos)

#### Compatibilidade
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

### 📚 Conteúdo Educativo

#### Material Didático
- Explicação de 4 táticas psicológicas
- Avisos sobre jogos de azar
- Referências a artigos científicos
- Links para ajuda (CVV, Jogadores Anônimos)
- Cálculos matemáticos transparentes

#### Fórmulas Implementadas
```
RTP (Return to Player) = Σ(P(animal)³ × Multiplicador)
House Edge = 1 - RTP
Expected Loss = Bet × House Edge
```

### 🎨 Assets Visuais

#### Emojis
- 🦓 Zebra (comum)
- 🐘 Elefante (incomum)
- 🦜 Arara (raro)
- 🦫 Castor (muito raro)
- 🐆 Onça (extremamente raro)

### 🔒 Segurança

- Sem coleta de dados pessoais
- Sem analytics
- Sem cookies
- Sem requisições externas
- 100% client-side

### 📝 Notas de Desenvolvimento

Este projeto foi desenvolvido com foco em:
1. **Educação**: Demonstrar táticas psicológicas de forma clara
2. **Qualidade**: Código limpo, documentado e organizado
3. **Performance**: Zero dependências, otimizado
4. **Acessibilidade**: Usável por todos
5. **Responsividade**: Funciona em qualquer dispositivo

---

## [Unreleased]

### 🔮 Planejado para v1.1.0

- [ ] Sistema de conquistas (achievements)
- [ ] Tutorial guiado interativo
- [ ] Exportar estatísticas (JSON/CSV)
- [ ] Temas customizáveis (Dark/Light/Colorblind)
- [ ] Suporte a múltiplos idiomas (i18n)
- [ ] Gráficos de estatísticas (Charts.js)
- [ ] Modo "Educador" para professores

### 🚀 Planejado para v2.0.0

- [ ] Progressive Web App (PWA)
- [ ] Service Worker para offline
- [ ] Modo multiplayer educativo
- [ ] API de estatísticas agregadas
- [ ] Dashboard analytics avançado
- [ ] Integração com plataformas educacionais

---

## Tipos de Mudanças

- `Added` (Adicionado) - para novas funcionalidades
- `Changed` (Modificado) - para mudanças em funcionalidades existentes
- `Deprecated` (Descontinuado) - para funcionalidades que serão removidas
- `Removed` (Removido) - para funcionalidades removidas
- `Fixed` (Corrigido) - para correções de bugs
- `Security` (Segurança) - para correções de vulnerabilidades

---

[1.0.0]: https://github.com/jonathan/slotmind/releases/tag/v1.0.0
[Unreleased]: https://github.com/jonathan/slotmind/compare/v1.0.0...HEAD


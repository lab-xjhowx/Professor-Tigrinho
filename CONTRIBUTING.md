# Guia de Contribuição 🤝

Obrigado por considerar contribuir com o **SlotMind**! Este documento fornece diretrizes para contribuir com o projeto de forma efetiva.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Configurando o Ambiente](#configurando-o-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)
- [Guia de Estilo](#guia-de-estilo)

## 📜 Código de Conduta

### Nosso Compromisso

Estamos comprometidos em proporcionar uma experiência acolhedora e inspiradora para todos, independentemente de:
- Idade
- Tamanho corporal
- Deficiência
- Etnia
- Identidade e expressão de gênero
- Nível de experiência
- Nacionalidade
- Aparência pessoal
- Raça
- Religião
- Identidade e orientação sexual

### Nossos Padrões

**Exemplos de comportamento que contribuem para um ambiente positivo:**
- ✅ Usar linguagem acolhedora e inclusiva
- ✅ Respeitar pontos de vista e experiências diferentes
- ✅ Aceitar críticas construtivas graciosamente
- ✅ Focar no que é melhor para a comunidade
- ✅ Mostrar empatia com outros membros da comunidade

**Exemplos de comportamento inaceitável:**
- ❌ Uso de linguagem ou imagens sexualizadas
- ❌ Trolling, comentários insultuosos/depreciativos
- ❌ Assédio público ou privado
- ❌ Publicar informações privadas de terceiros
- ❌ Outras condutas consideradas inapropriadas em ambiente profissional

## 🚀 Como Posso Contribuir?

### 1. Reportar Bugs

Bugs são rastreados como [GitHub Issues](https://github.com/jonathan/slotmind/issues). Antes de criar um issue:

1. **Verifique se o bug já foi reportado** na lista de issues
2. **Use um título claro e descritivo**
3. **Forneça o máximo de detalhes possível**

**Template para Bug Report:**

```markdown
## Descrição do Bug
[Descrição clara e concisa do bug]

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Observe o erro

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que está acontecendo]

## Screenshots
[Se aplicável, adicione screenshots]

## Ambiente
- SO: [ex: Windows 11, macOS 13, Ubuntu 22.04]
- Navegador: [ex: Chrome 120, Firefox 121, Safari 17]
- Versão do SlotMind: [ex: 1.0.0]

## Informações Adicionais
[Qualquer outra informação relevante]
```

### 2. Sugerir Melhorias

Melhorias também são rastreadas como GitHub Issues. Para sugerir:

1. **Verifique se a sugestão já existe**
2. **Use um título claro e descritivo**
3. **Explique o valor da melhoria**

**Template para Feature Request:**

```markdown
## Descrição da Feature
[Descrição clara da funcionalidade desejada]

## Problema que Resolve
[Que problema essa feature resolve?]

## Solução Proposta
[Como você imagina que isso funcionaria?]

## Alternativas Consideradas
[Outras abordagens que você considerou]

## Contexto Adicional
[Screenshots, mockups, exemplos de outros projetos]
```

### 3. Contribuir com Código

#### Tipos de Contribuição

- 🐛 **Bug Fixes**: Correções de bugs existentes
- ✨ **Features**: Novas funcionalidades
- 📝 **Documentação**: Melhorias na documentação
- 🎨 **UI/UX**: Melhorias visuais e de experiência
- ⚡ **Performance**: Otimizações de performance
- ♿ **Acessibilidade**: Melhorias de acessibilidade
- 🌍 **Internacionalização**: Traduções e i18n

## 🛠️ Configurando o Ambiente

### Pré-requisitos

- Git
- Editor de código (recomendado: VS Code)
- Navegador moderno (Chrome/Firefox/Safari/Edge)
- Servidor local (opcional)

### Passo a Passo

1. **Fork o Repositório**
   ```bash
   # No GitHub, clique em "Fork" no canto superior direito
   ```

2. **Clone seu Fork**
   ```bash
   git clone https://github.com/SEU-USUARIO/slotmind.git
   cd slotmind
   ```

3. **Configure o Remote Upstream**
   ```bash
   git remote add upstream https://github.com/jonathan/slotmind.git
   ```

4. **Crie uma Branch**
   ```bash
   git checkout -b tipo/nome-descritivo
   
   # Exemplos:
   git checkout -b feature/achievement-system
   git checkout -b bugfix/modal-close-issue
   git checkout -b docs/update-readme
   ```

5. **Execute Localmente**
   ```bash
   # Opção 1: Abra index.html diretamente
   
   # Opção 2: Use um servidor local
   python -m http.server 8000
   # ou
   npx serve
   ```

## 📝 Padrões de Código

### JavaScript

#### Estilo de Código

```javascript
// ✅ BOM - Use classes para organização
class GameEngine {
    constructor() {
        this.state = {};
    }
    
    play(amount) {
        // lógica aqui
    }
}

// ✅ BOM - Use const/let, não var
const MAX_BET = 100;
let currentBet = 10;

// ❌ RUIM - Não use var
var oldWay = "evite";

// ✅ BOM - Arrow functions para callbacks
array.map(item => item * 2);

// ✅ BOM - Nomes descritivos
function calculateWinAmount(betAmount, multiplier) {
    return betAmount * multiplier;
}

// ❌ RUIM - Nomes vagos
function calc(a, b) {
    return a * b;
}

// ✅ BOM - Comentários explicativos
// Ajusta probabilidades durante hook phase
if (isHookPhase()) {
    adjustProbabilities();
}
```

#### Convenções de Nomenclatura

- **Classes**: PascalCase
  ```javascript
  class GameState { }
  class UIManager { }
  ```

- **Funções/Métodos**: camelCase
  ```javascript
  function updateBalance() { }
  const getRandomAnimal = () => { }
  ```

- **Constantes**: UPPER_SNAKE_CASE
  ```javascript
  const MAX_BALANCE = 1000;
  const DEFAULT_BET_AMOUNT = 10;
  ```

- **Variáveis**: camelCase
  ```javascript
  let currentPhase = 'HOOK';
  const betAmount = 5;
  ```

### HTML

```html
<!-- ✅ BOM - Semântica adequada -->
<header class="header">
    <nav class="navigation">
        <button class="btn-primary">Jogar</button>
    </nav>
</header>

<!-- ✅ BOM - Atributos descritivos -->
<button 
    id="spinBtn" 
    class="bet-button primary" 
    aria-label="Apostar R$ 10">
    Apostar
</button>

<!-- ✅ BOM - Acessibilidade -->
<img src="icon.png" alt="Ícone de slot machine">
```

### CSS

```css
/* ✅ BOM - Use variáveis CSS */
:root {
    --color-primary: #6366f1;
    --spacing-md: 1rem;
}

/* ✅ BOM - Nomenclatura BEM */
.slot-machine { }
.slot-machine__header { }
.slot-machine__header--active { }

/* ✅ BOM - Mobile-first */
.container {
    width: 100%;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

/* ✅ BOM - Organize por seções */
/* === Base Styles === */
/* === Components === */
/* === Utilities === */
```

### Documentação de Código

```javascript
/**
 * Calcula o valor do prêmio baseado na aposta e multiplicador
 * 
 * @param {number} betAmount - Valor da aposta em reais
 * @param {number} multiplier - Multiplicador do animal (1.2x a 9.0x)
 * @returns {number} Valor total do prêmio
 * 
 * @example
 * calculateWinAmount(10, 1.5) // returns 15
 */
function calculateWinAmount(betAmount, multiplier) {
    return betAmount * multiplier;
}
```

## 🔄 Processo de Pull Request

### 1. Prepare seu Código

```bash
# Certifique-se de estar atualizado com o upstream
git fetch upstream
git merge upstream/main

# Execute testes (se aplicável)
npm test

# Verifique o código
npm run lint
```

### 2. Commit suas Mudanças

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Formato: tipo(escopo): descrição

git commit -m "feat(ui): adiciona sistema de conquistas"
git commit -m "fix(game): corrige cálculo de probabilidade"
git commit -m "docs(readme): atualiza instruções de instalação"
git commit -m "style(css): melhora responsividade em mobile"
git commit -m "refactor(engine): simplifica lógica de spin"
git commit -m "perf(animations): otimiza animações CSS"
```

**Tipos de Commit:**
- `feat`: Nova feature
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, espaços, ponto e vírgula (não afeta código)
- `refactor`: Refatoração de código
- `perf`: Melhoria de performance
- `test`: Adiciona testes
- `chore`: Manutenção, configuração

### 3. Push para seu Fork

```bash
git push origin tipo/nome-descritivo
```

### 4. Abra um Pull Request

No GitHub:
1. Vá para seu fork
2. Clique em "Compare & pull request"
3. Preencha o template de PR

**Template de Pull Request:**

```markdown
## Descrição
[Descrição clara das mudanças]

## Tipo de Mudança
- [ ] 🐛 Bug fix
- [ ] ✨ Nova feature
- [ ] 📝 Documentação
- [ ] 🎨 UI/UX
- [ ] ⚡ Performance
- [ ] ♿ Acessibilidade

## Relacionado
Closes #[número do issue]

## Como Testar
1. Vá para '...'
2. Clique em '...'
3. Verifique que '...'

## Screenshots
[Se aplicável]

## Checklist
- [ ] Meu código segue os padrões do projeto
- [ ] Fiz self-review do meu código
- [ ] Comentei código complexo
- [ ] Atualizei a documentação
- [ ] Minhas mudanças não geram novos warnings
- [ ] Testei em diferentes navegadores
- [ ] Testei em mobile
```

### 5. Review Process

- Mantenha o PR focado (uma feature/fix por vez)
- Responda aos comentários prontamente
- Faça as alterações solicitadas
- Seja receptivo a feedback

## 🎨 Guia de Estilo

### Mensagens de Commit

```bash
# ✅ BOM
feat(ui): adiciona modal de conquistas com animações
fix(game): corrige bug de near-miss em mobile
docs(contributing): atualiza guia de estilo

# ❌ RUIM
mudanças
correção
update
```

### Documentação

- Use Markdown para documentação
- Inclua exemplos de código
- Adicione screenshots quando relevante
- Mantenha linguagem clara e concisa

### Testes

```javascript
// Exemplo de teste manual
function testHookPhase() {
    // Reset game
    gameState.reset();
    
    // Fazer 5 apostas (hook phase)
    for (let i = 0; i < 5; i++) {
        const result = gameEngine.play(10);
        console.log(`Aposta ${i + 1}:`, result);
    }
    
    // Verificar se taxa de vitória é anormalmente alta
    const winRate = gameState.statistics.totalWins / gameState.statistics.totalPlays;
    console.log(`Taxa de vitória: ${(winRate * 100).toFixed(2)}%`);
}
```

## 🏆 Reconhecimento

Contribuidores serão reconhecidos:
- Na seção de Agradecimentos do README
- Em release notes quando aplicável
- No arquivo CONTRIBUTORS.md

## 💬 Dúvidas?

- 📧 Email: contato@jonathan.dev
- 💬 Discussions: [GitHub Discussions](https://github.com/jonathan/slotmind/discussions)
- 🐛 Issues: [GitHub Issues](https://github.com/jonathan/slotmind/issues)

## 📚 Recursos Adicionais

- [Git Workflow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

**Obrigado por contribuir! 🎉**

Juntos, podemos tornar o SlotMind um projeto ainda melhor para educar sobre os perigos da manipulação psicológica em jogos de azar.

---

*Este guia foi inspirado em projetos open-source de sucesso e adaptado para as necessidades do SlotMind.*


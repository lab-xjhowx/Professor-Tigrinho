# Professor Tigrinho 🐯

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.ecma-international.org/)

**Simulador educativo que demonstra táticas psicológicas em jogos de azar**

[🎮 Demo v1](https://prof-tigrinho-v1.vercel.app/) • [🚀 Nova Versão v2.0](https://prof-tigrinho-v2.vercel.app/) • [📖 Documentação](#-sobre-o-projeto)

---

### 🎉 Nova Versão Disponível!

**Professor Tigrinho v2.0** já está no ar com React, Tailwind, Framer Motion e muito mais!

👉 [**Acesse a v2.0 aqui**](https://prof-tigrinho-v2.vercel.app/) 👈

[Ver código da v2.0](./professor-tigrinho-v2/) | [Documentação v2.0](./professor-tigrinho-v2/README.md)

---

</div>

## 📋 Sobre o Projeto

**Professor Tigrinho v1.0** é uma aplicação web moderna (Vanilla JS) que simula um caça-níquel com o objetivo de **educar usuários sobre as táticas psicológicas** empregadas pela indústria de jogos de azar. O projeto demonstra de forma prática e visual como esses mecanismos funcionam para manter jogadores apostando.

> 🎓 **Projeto Educativo**: Não utiliza dinheiro real. Desenvolvido para fins didáticos e de pesquisa.

### 🆕 Versões Disponíveis

| Versão | Tecnologia | Status | Demo | Código |
|--------|-----------|--------|------|--------|
| **v1.0** (Esta) | Vanilla JS, CSS3, HTML5 | ✅ Estável | [prof-tigrinho-v1.vercel.app](https://prof-tigrinho-v1.vercel.app/) | [Raiz do repo](.) |
| **v2.0** (Nova) | React, Vite, Tailwind | 🚀 Recomendada | [prof-tigrinho-v2.vercel.app](https://prof-tigrinho-v2.vercel.app/) | [/professor-tigrinho-v2](./professor-tigrinho-v2/) |

**💡 Recomendamos usar a v2.0** para melhor experiência e features avançadas!

---

## ✨ Funcionalidades (v1.0)

### 🎮 Sistema de Jogo
- 🐯 **Slot Machine Interativo**: Simulação realista de caça-níquel com 5 animais diferentes
- 💰 **Sistema de Apostas**: Opções de R$ 5,00 e R$ 10,00
- 📊 **Estatísticas em Tempo Real**: Acompanhe vitórias, derrotas, lucros e perdas
- 🎲 **Probabilidades Configuráveis**: Ajuste chances e multiplicadores de cada símbolo

### 🧠 Táticas Psicológicas Implementadas

#### 1. 🎣 Hook Phase (Fase de Fisgar)
Nas primeiras jogadas, o sistema aumenta artificialmente as chances de vitória para criar:
- Falsa sensação de facilidade
- Empolgação inicial
- Confiança excessiva no jogo

#### 2. 📉 Loss Phase (Fase de Perda)
Após a fase inicial, as chances são drasticamente reduzidas para:
- Recuperar ganhos pagos
- Gerar lucro para a "casa"
- Explorar o viés de "quase ganhar"

#### 3. 🎯 Near Miss (Quase Vitória)
Sistema frequentemente exibe resultados onde o jogador "quase" vence:
- Dois símbolos iguais de três
- Cria falsa esperança de proximidade à vitória
- Incentiva a continuar jogando ("próxima rodada eu ganho")

#### 4. 🎊 Reforço Positivo
Vitórias são exageradamente celebradas:
- Animações vibrantes
- Efeitos de confete
- Sons de comemoração
- Enquanto perdas são minimizadas visualmente

---

## 🛠️ Stack Tecnológica (v1.0)

### Frontend
- **HTML5** - Estrutura semântica moderna
- **CSS3** - Design system com CSS Variables, Flexbox, Grid
- **JavaScript (ES6+)** - POO, Classes, Async/Await, Modules pattern

### Design & UX
- **Glassmorphism** - Efeitos de vidro fosco
- **Gradientes Dinâmicos** - Paleta de cores vibrante
- **Animações CSS** - Keyframes, transforms, transitions
- **Canvas API** - Efeitos de confete customizados
- **Responsive Design** - Mobile-first approach

### Arquitetura
- **MVC Pattern** - Separação de lógica, estado e visualização
- **Class-based Architecture** - GameState, GameEngine, UIManager
- **Event-driven Design** - Sistema de eventos modular
- **Zero Dependencies** - Vanilla JavaScript puro

---

## 🚀 Começando (v1.0)

### Pré-requisitos
- Navegador web moderno (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Servidor web local (opcional, para desenvolvimento)

### Instalação

#### Opção 1: Uso Direto
```bash
# Clone o repositório
git clone https://github.com/lab-xjhowx/Professor-Tigrinho.git
cd Professor-Tigrinho

# Abra o arquivo index.html no navegador
# ou use um servidor local
```

#### Opção 2: Servidor Local (Recomendado)
```bash
# Clone o repositório
git clone https://github.com/lab-xjhowx/Professor-Tigrinho.git
cd Professor-Tigrinho

# Usando Python 3
python -m http.server 8000

# Ou usando Node.js (npx)
npx serve

# Ou usando PHP
php -S localhost:8000

# Acesse: http://localhost:8000
```

### 🆕 Para usar a versão 2.0
```bash
cd professor-tigrinho-v2
npm install
npm run dev
```

Veja a [documentação completa da v2.0](./professor-tigrinho-v2/README.md)

---

## 📁 Estrutura do Repositório

```
Professor-Tigrinho/
├── 📂 v1.0 (Vanilla JS) - Raiz do repositório
│   ├── index.html              # v1.0 - HTML principal
│   ├── style.css               # v1.0 - Estilos
│   ├── script.js               # v1.0 - Lógica do jogo
│   ├── README.md               # v1.0 - Este arquivo
│   ├── CONTRIBUTING.md         # v1.0 - Guia de contribuição
│   ├── CHANGELOG.md            # v1.0 - Histórico
│   ├── LICENSE                 # Licença MIT
│   ├── PROJECT_OVERVIEW.md     # v1.0 - Visão geral
│   ├── QUICK_START.md          # v1.0 - Início rápido
│   └── TECHNICAL_ANALYSIS.md   # v1.0 - Análise técnica
│
└── 📂 professor-tigrinho-v2/   # v2.0 (React + Vite)
    ├── src/                    # Código fonte React
    ├── public/                 # Assets públicos
    ├── package.json            # Dependências v2.0
    ├── README.md               # Documentação v2.0
    └── ...                     # Outros arquivos v2.0
```

---

## 🎮 Como Usar (v1.0)

### Gameplay Básico

1. **Iniciar o Jogo**
   - Você começa com R$ 100,00 de saldo virtual
   - Escolha entre apostar R$ 5,00 ou R$ 10,00

2. **Fazer Apostas**
   - Clique em "APOSTAR R$ 10,00" ou "APOSTAR R$ 5,00"
   - Os slots giram e mostram três animais aleatórios

3. **Ganhar Prêmios**
   - Ganhe quando os três slots mostrarem o mesmo símbolo
   - Cada símbolo tem um multiplicador diferente:
     - 🐀 Rato: 1.2x (50% de chance)
     - 🐂 Touro: 1.5x (10% de chance)
     - 🥇 Medalha: 3.0x (6% de chance)
     - 🐰 Coelho: 5.0x (4% de chance)
     - 🐯 Tigre: 9.0x (2% de chance)

4. **Monitorar Estatísticas**
   - Acompanhe total de jogadas, vitórias, lucro/prejuízo
   - Observe a fase psicológica atual (Hook, Normal ou Loss)

### Configurações Avançadas

Acesse o menu "⚙️ Configurações" para:
- **Ajustar Probabilidades**: Modifique a porcentagem de aparição de cada animal
- **Configurar Multiplicadores**: Altere o valor de pagamento de cada símbolo
- **Táticas Psicológicas**: Configure Hook Phase, Near-Miss, etc.

---

## 🔬 Fundamento Científico

### Vieses Cognitivos Explorados

#### Near-Miss Effect
> **Reid (1986)**: Cérebro interpreta "quase vitórias" como encorajamento.

#### Variable Ratio Reinforcement
> **Skinner (1953)**: Recompensas imprevisíveis são mais viciantes.

#### Gambler's Fallacy
> **Tversky & Kahneman (1974)**: Crença que eventos passados influenciam futuros.

#### Loss Aversion
> **Kahneman & Tversky (1979)**: Perdas doem 2x mais que ganhos.

### Referências

- Reid, R. L. (1986). "The Psychology of the Near Miss". *Journal of Gambling Behavior*
- Schüll, N. D. (2012). "Addiction by Design: Machine Gambling in Las Vegas"
- Kahneman, D. (2011). "Thinking, Fast and Slow"

---

## 🆚 Comparação de Versões

| Feature | v1.0 (Vanilla JS) | v2.0 (React) |
|---------|-------------------|--------------|
| **Tecnologia** | HTML, CSS, JS | React, Vite, Tailwind |
| **Animações** | CSS Keyframes | Framer Motion |
| **Estado** | Classes ES6 | Zustand |
| **Áudio** | Web Audio API | Howler.js |
| **Bundle Size** | ~70KB | ~300KB (otimizado) |
| **Performance** | ⚡ Muito rápida | ⚡⚡ Muito rápida |
| **Manutenibilidade** | ✅ Boa | ✅✅ Excelente |
| **Features** | Core | Core + Avançadas |
| **UI/UX** | ✨ Moderna | ✨✨ Premium |
| **Mobile** | ✅ Responsivo | ✅✅ Otimizado |
| **Modo VIP** | ❌ Não | ✅ Sim |
| **Gamificação** | Básica | Avançada |
| **Documentação** | Completa | Muito Completa |

**Recomendação**: Use v1.0 para aprender Vanilla JS, v2.0 para produção!

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Veja o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

### Quick Start para Contribuidores

```bash
# Fork o projeto
# Clone seu fork
git clone https://github.com/SEU-USUARIO/Professor-Tigrinho.git

# v1.0 - Nenhuma instalação necessária
# Edite os arquivos HTML/CSS/JS e teste no navegador

# v2.0 - Instale dependências
cd professor-tigrinho-v2
npm install
npm run dev

# Crie uma branch para sua feature
git checkout -b feature/MinhaNovaFeature

# Faça commit e push
git commit -m "Add: Nova funcionalidade incrível"
git push origin feature/MinhaNovaFeature

# Abra um Pull Request
```

---

## 🌐 Deploy

### v1.0 (Vanilla JS) - Vercel
```bash
# Deploy direto da raiz
vercel --prod
```
**Live**: https://prof-tigrinho-v1.vercel.app/

### v2.0 (React) - Vercel
```bash
# Deploy da pasta v2
cd professor-tigrinho-v2
vercel --prod
```
**Live**: https://prof-tigrinho-v2.vercel.app/

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

**Uso livre com atribuição** ✅

---

## 👨‍💻 Autor

**Jonathan** ([@xjhowx](https://twitter.com/xjhowx))

- Portfolio: [jonathan.dev](https://jonathan.dev)
- GitHub: [@lab-xjhowx](https://github.com/lab-xjhowx)
- Email: contato@jonathan.dev

---

## 🙏 Agradecimentos

- Pesquisas em Psicologia Cognitiva e Neurociência
- Estudos sobre manipulação em jogos de azar
- Comunidade de desenvolvedores open-source
- Feedback de educadores e psicólogos

---

## ⚠️ Aviso Importante

Este projeto é puramente educativo. **Jogos de azar com dinheiro real podem causar**:

- 💸 Perdas financeiras significativas
- 🧠 Dependência psicológica grave
- 👪 Problemas familiares e sociais

### Precisa de Ajuda?

- 🇧🇷 **CVV**: 188 (24h, gratuito)
- 🌐 **Jogadores Anônimos**: [jogadoresanonimos.com.br](http://www.jogadoresanonimos.com.br)

---

<div align="center">

**Se este projeto foi útil, considere dar uma ⭐!**

[⭐ Star no GitHub](https://github.com/lab-xjhowx/Professor-Tigrinho) • [🚀 v2.0](https://prof-tigrinho-v2.vercel.app/) • [📖 Docs v2.0](./professor-tigrinho-v2/README.md)

Desenvolvido com ❤️ e ☕ por [Jonathan](https://github.com/lab-xjhowx)

---

**v1.0 (Vanilla JS)** | **[v2.0 (React) →](./professor-tigrinho-v2/)**

</div>

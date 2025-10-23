# 🐯 Professor Tigrinho v2.0

<div align="center">

![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3-BB4B96)

**Simulador educativo interativo que demonstra táticas psicológicas em jogos de azar**

[🎮 Demo v2.0](https://prof-tigrinho-v2.vercel.app/) • [📖 Documentação](#-documentação) • [🔙 v1.0](https://prof-tigrinho-v1.vercel.app/) • [🤝 Contribuir](#-contribuindo)

</div>

---

## 📋 Sobre o Projeto

**Professor Tigrinho v2.0** é um simulador educativo desenvolvido em React que demonstra de forma prática e visual as táticas psicológicas utilizadas por cassinos online e jogos de azar para manipular comportamentos de jogadores.

### 🎯 Objetivos

- 📚 **Educar** sobre manipulação psicológica em jogos de azar
- 🔍 **Demonstrar** táticas como Hook Phase, Near-Miss e Loss Aversion
- 💡 **Conscientizar** sobre a matemática sempre desfavorável ao jogador
- 🎨 **Exemplificar** design moderno com React + Vite + Tailwind

> ⚠️ **IMPORTANTE**: Este é um projeto puramente educativo. Não utiliza dinheiro real e não incentiva jogos de azar.

---

## ✨ Funcionalidades

### 🎮 Sistema de Jogo

- **Slot Machine Interativo**: Simulação realista com 5 animais diferentes
- **Sistema de Apostas**: Opções de R$ 5,00 e R$ 10,00
- **Animações Premium**: Framer Motion para transições suaves
- **Efeitos Visuais**: Confete, partículas, glow effects
- **Sistema de Sons**: Feedback sonoro para todas as ações

### 🧠 Táticas Psicológicas Implementadas

#### 1. 🎣 Hook Phase (Fase de Fisgar)
Primeiras 5-10 jogadas têm chances aumentadas artificialmente para criar falsa sensação de facilidade.

#### 2. 📉 Loss Phase (Fase de Perda)
Após hook phase, chances são drasticamente reduzidas para recuperar ganhos e garantir lucro da casa.

#### 3. 🎯 Near-Miss Effect
Sistema força 2 símbolos iguais em 40% das perdas, criando ilusão de "quase vitória".

#### 4. 🎊 Reforço Positivo
Vitórias exageradas com animações e sons; perdas minimizadas visualmente.

### 📊 Dashboard Completo

- **Estatísticas em Tempo Real**: Total de jogadas, vitórias, derrotas
- **Análise Financeira**: Lucro/prejuízo do jogador vs casa
- **Indicador de Fase**: Mostra fase psicológica atual
- **Nível de Consciência**: Gamificação educativa

### 🎓 Centro Educacional

- **Dicas Contextuais**: Mensagens educativas baseadas no comportamento
- **Curiosidades**: Fatos científicos sobre psicologia de jogos de azar
- **Modo VIP**: Conteúdo avançado com probabilidades reais
- **Missões Educativas**: Tarefas para aprender sobre manipulação

---

## 🛠️ Stack Tecnológica

### Frontend

```json
{
  "framework": "React 18.3.1",
  "build": "Vite 5.3",
  "styling": "Tailwind CSS 3.4",
  "animations": "Framer Motion 11.3",
  "icons": "Lucide React",
  "state": "Zustand 4.5",
  "audio": "Howler.js 2.2"
}
```

### Arquitetura

- **Component-Based**: Estrutura modular e reutilizável
- **Custom Hooks**: useGameState, useAudio, useAnimations
- **Utils**: Lógica separada (probability, gameLogic, psychology)
- **Zero Backend**: 100% frontend, sem necessidade de servidor

---

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ e npm/yarn/pnpm
- Navegador moderno (Chrome 90+, Firefox 88+, Safari 14+)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lab-xjhowx/Professor-Tigrinho.git
cd Professor-Tigrinho/professor-tigrinho-v2

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: `http://localhost:3000`

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Preview do build
npm run preview
```

---

## 📁 Estrutura do Projeto

```
professor-tigrinho-v2/
├── public/                     # Assets estáticos
│   ├── sounds/                 # Efeitos sonoros
│   └── images/                 # Imagens
├── src/
│   ├── components/             # Componentes React
│   │   ├── game/               # Componentes do jogo
│   │   ├── dashboard/          # Estatísticas e métricas
│   │   ├── education/          # Conteúdo educativo
│   │   ├── vip/                # Modo premium
│   │   ├── ui/                 # Componentes de UI
│   │   └── effects/            # Efeitos visuais
│   ├── hooks/                  # Custom hooks
│   │   ├── useGameState.js     # Estado global do jogo
│   │   ├── useAudio.js         # Sistema de áudio
│   │   └── useAnimations.js    # Configurações de animação
│   ├── utils/                  # Utilitários
│   │   ├── probability.js      # Cálculos de probabilidade
│   │   ├── gameLogic.js        # Lógica do jogo
│   │   ├── psychology.js       # Táticas psicológicas
│   │   └── devMessages.js      # Mensagens educativas
│   ├── data/                   # Dados JSON
│   │   ├── frases.json         # Frases e mensagens
│   │   ├── curiosidades.json   # Conteúdo educativo
│   │   └── estatisticas.json   # Dados dos animais
│   ├── styles/                 # Estilos
│   │   └── globals.css         # CSS global
│   ├── App.jsx                 # Componente principal
│   └── main.jsx                # Entry point
├── index.html                  # HTML base
├── package.json                # Dependências
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
└── README.md                   # Este arquivo
```

---

## 🎮 Como Usar

### Gameplay Básico

1. **Começar**: Você inicia com R$ 100,00 de saldo virtual
2. **Apostar**: Escolha entre R$ 5,00 ou R$ 10,00
3. **Observar**: Slots giram e mostram 3 animais aleatórios
4. **Ganhar**: Três símbolos iguais = vitória (cada animal tem multiplicador diferente)
5. **Aprender**: Observe as mensagens educativas após cada jogada

### Probabilidades e Multiplicadores

| Animal | Emoji | Chance Individual | Multiplicador | Probabilidade Real (3x) |
|--------|-------|-------------------|---------------|-------------------------|
| Rato | 🐀 | 50% | 1.2x | 12.5% |
| Touro | 🐂 | 10% | 1.5x | 0.1% |
| Medalha | 🥇 | 6% | 3.0x | 0.02% |
| Coelho | 🐰 | 4% | 5.0x | 0.006% |
| Tigre | 🐯 | 2% | 9.0x | 0.0008% |

**RTP Total**: ~15% (House Edge: ~85%)

---

## 🔬 Fundamento Científico

### Vieses Cognitivos Explorados

#### Near-Miss Effect
> **Reid (1986)**: Cérebro interpreta "quase vitórias" como encorajamento, não como derrotas.

#### Variable Ratio Reinforcement
> **Skinner (1953)**: Recompensas imprevisíveis são mais viciantes que previsíveis.

#### Gambler's Fallacy
> **Tversky & Kahneman (1974)**: Crença errônea de que eventos passados influenciam futuros.

#### Loss Aversion
> **Kahneman & Tversky (1979)**: Perdas doem 2x mais que ganhos equivalentes trazem prazer.

### Referências

- Reid, R. L. (1986). "The Psychology of the Near Miss". *Journal of Gambling Behavior*
- Schüll, N. D. (2012). "Addiction by Design: Machine Gambling in Las Vegas"
- Kahneman, D. (2011). "Thinking, Fast and Slow"

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Código de Conduta

- Seja respeitoso e inclusivo
- Foque no propósito educativo do projeto
- Não adicione features que incentivem jogos de azar reais

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License - Uso livre com atribuição
✅ Uso comercial permitido
✅ Modificação permitida
✅ Distribuição permitida
✅ Uso privado permitido
⚠️ Requer atribuição ao autor
⚠️ Sem garantia
```

---

## 👨‍💻 Autor

**Jonathan** ([@xjhowx](https://twitter.com/xjhowx))

- Portfolio: [jonathan.dev](https://jonathan.dev)
- GitHub: [@lab-xjhowx](https://github.com/lab-xjhowx)
- Email: contato@jonathan.dev

---

## 🙏 Agradecimentos

- Pesquisas em Psicologia Cognitiva e Neurociência
- Comunidade React e open-source
- Feedback de educadores e psicólogos
- Todos que contribuem para conscientização sobre jogos de azar

---

## ⚠️ Aviso Importante

Este projeto é puramente educativo. **Jogos de azar com dinheiro real podem causar**:

- 💸 Perdas financeiras significativas
- 🧠 Dependência psicológica grave
- 👪 Problemas familiares e sociais
- 💔 Depressão e ansiedade

### Precisa de Ajuda?

- 🇧🇷 **CVV**: 188 (24h, gratuito)
- 🌐 **Jogadores Anônimos**: [jogadoresanonimos.com.br](http://www.jogadoresanonimos.com.br)
- 📞 **CAPS**: Centros de Atenção Psicossocial (SUS)

---

<div align="center">

**Se este projeto foi útil, considere dar uma ⭐!**

Desenvolvido com ❤️ e ☕ por [Jonathan](https://github.com/lab-xjhowx)

---

## 🔙 Outras Versões

- [📦 v1.0 (Vanilla JS)](../README.md) - Versão clássica em JavaScript puro
- [🌐 Demo v1.0](https://prof-tigrinho-v1.vercel.app/)
- [📋 Comparar Versões](../VERSIONS.md)

</div>


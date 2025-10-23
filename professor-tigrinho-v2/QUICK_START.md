# ⚡ Guia de Início Rápido

## 🚀 Instalação em 3 Passos

```bash
# 1. Clone o repositório
git clone https://github.com/jonathan/professor-tigrinho-v2.git
cd professor-tigrinho-v2

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Pronto! Acesse `http://localhost:3000` 🎉

---

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build para produção
npm run preview  # Preview do build de produção
npm run lint     # Verifica código com ESLint
```

---

## 🎮 Como Jogar

1. **Apostar**: Escolha R$ 5 ou R$ 10
2. **Observar**: Slots giram e mostram 3 animais
3. **Ganhar**: 3 símbolos iguais = vitória!
4. **Aprender**: Leia as mensagens educativas

---

## 🧠 Conceitos Principais

### Hook Phase (🎣)
Primeiras 5-10 jogadas têm chances **aumentadas** para te fisgar.

### Loss Phase (📉)
Depois, chances **reduzidas** drasticamente.

### Near-Miss (🎯)
40% das perdas mostram "2 iguais" (programado!).

---

## 📊 Entendendo as Estatísticas

- **Taxa de Vitória**: % de jogadas vencedoras
- **RTP Real**: Retorno ao jogador (quanto você recupera)
- **House Edge**: Vantagem da casa (~85%)
- **Nível de Consciência**: Pontos educativos ganhos

---

## 🎨 Personalização

### Alterar Cores

Edite `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: { ... }, // Sua cor primária
      neon: { ... }     // Cores neon personalizadas
    }
  }
}
```

### Adicionar Novos Animais

Edite `src/data/estatisticas.json`:
```json
{
  "id": "unicorn",
  "icon": "🦄",
  "nome": "Unicórnio",
  "chance": 1,
  "multiplicador": 15.0,
  "raridade": "mitológico"
}
```

---

## 🔧 Troubleshooting

### Build falha?
```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erros de lint?
```bash
npm run lint -- --fix
```

### Sons não funcionam?
Verifique se o navegador permite autoplay de áudio.

---

## 🎓 Para Educadores

### Uso em Sala de Aula

1. **Demonstração**: Projete para a turma
2. **Discussão**: Identifiquem as táticas juntos
3. **Análise**: Comparem probabilidades esperadas vs reais
4. **Reflexão**: Debatam implicações sociais

### Tópicos para Discutir

- Vieses cognitivos
- Probabilidade e estatística
- Ética em design de produtos
- Saúde mental e vício

---

## 💻 Para Desenvolvedores

### Estrutura de Código

```
hooks/      -> Estado e lógica
components/ -> UI React
utils/      -> Cálculos e lógica pura
data/       -> Dados estáticos JSON
```

### Adicionar Nova Feature

1. Crie componente em `components/`
2. Adicione lógica em `utils/` se necessário
3. Conecte ao estado em `useGameState`
4. Importe no `App.jsx`

### Boas Práticas

- ✅ Use TypeScript comments (JSDoc)
- ✅ Siga convenções de nomenclatura
- ✅ Mantenha componentes pequenos (<200 linhas)
- ✅ Teste manualmente antes de commit

---

## 📱 Deploy

### Vercel (Recomendado)

```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Arraste pasta `dist` para netlify.com
```

### GitHub Pages

```bash
# Adicione em vite.config.js
base: '/professor-tigrinho-v2/'

# Build
npm run build

# Deploy pasta dist
```

---

## 🆘 Precisa de Ajuda?

- 📖 Leia o [README completo](README.md)
- 🐛 [Reporte bugs](https://github.com/jonathan/professor-tigrinho-v2/issues)
- 💬 [Discussões](https://github.com/jonathan/professor-tigrinho-v2/discussions)
- 📧 Email: contato@jonathan.dev

---

## 🎯 Próximos Passos

1. ✅ Rode o projeto localmente
2. 🎮 Jogue algumas rodadas
3. 🧠 Explore o código
4. 📚 Leia a documentação completa
5. 🤝 Contribua com melhorias
6. ⭐ Dê uma estrela no GitHub!

---

**Divirta-se aprendendo!** 🚀

*Professor Tigrinho v2.0 - by Jonathan*


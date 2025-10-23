# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o Professor Tigrinho v2.0! 🎉

## 📋 Código de Conduta

### Nossos Valores

- 🎓 **Educação em primeiro lugar**: Foco no propósito educativo
- 🤝 **Respeito**: Seja gentil e construtivo
- 🌍 **Inclusão**: Todos são bem-vindos
- 🔒 **Responsabilidade**: Não incentive jogos de azar reais

### Comportamentos Esperados

✅ Uso de linguagem acolhedora
✅ Respeito por pontos de vista diferentes
✅ Críticas construtivas
✅ Foco no melhor para a comunidade

### Comportamentos Inaceitáveis

❌ Linguagem ofensiva ou discriminatória
❌ Assédio de qualquer tipo
❌ Trolling ou comentários depreciativos
❌ Features que incentivem apostas reais

---

## 🚀 Como Contribuir

### 1. Reportar Bugs

Encontrou um bug? Ajude-nos a corrigi-lo!

**Antes de reportar**:
- Verifique se já não foi reportado
- Teste na versão mais recente
- Reproduza o bug consistentemente

**Como reportar**:
1. Vá para [Issues](https://github.com/jonathan/professor-tigrinho-v2/issues)
2. Clique em "New Issue"
3. Use template de Bug Report
4. Inclua:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots se relevante
   - Ambiente (navegador, OS, versão)

### 2. Sugerir Features

Tem uma ideia legal? Compartilhe!

**Antes de sugerir**:
- Verifique se já não foi sugerido
- Certifique-se que alinha com propósito educativo
- Pense na viabilidade técnica

**Como sugerir**:
1. Abra uma Issue com tag `enhancement`
2. Descreva a feature detalhadamente
3. Explique POR QUÊ é útil educativamente
4. Considere alternativas

### 3. Contribuir com Código

#### Processo

1. **Fork** o repositório
2. **Clone** seu fork:
   ```bash
   git clone https://github.com/SEU-USUARIO/professor-tigrinho-v2.git
   ```
3. **Crie uma branch**:
   ```bash
   git checkout -b feature/minha-feature
   ```
4. **Faça suas alterações**
5. **Commit** com mensagem clara:
   ```bash
   git commit -m "Add: Nova feature educativa"
   ```
6. **Push** para seu fork:
   ```bash
   git push origin feature/minha-feature
   ```
7. **Abra um Pull Request**

#### Padrões de Código

**JavaScript/React**:
```javascript
// ✅ Bom
const calcularProbabilidade = (animal) => {
  const chance = animal.chance / 100;
  return Math.pow(chance, 3);
};

// ❌ Evite
function calc(a){return a.c/100**3}
```

**Componentes React**:
```jsx
// ✅ Bom
export const MeuComponente = ({ prop1, prop2 }) => {
  return (
    <div className="container">
      <h1>{prop1}</h1>
      <p>{prop2}</p>
    </div>
  );
};

// Use nomes descritivos
// Componentes começam com maiúscula
// Props descritivas
```

**CSS/Tailwind**:
```jsx
// ✅ Bom
<div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">

// ❌ Evite inline styles
<div style={{ padding: '16px' }}>
```

#### Mensagens de Commit

Siga o padrão:

```
tipo: Descrição curta

Descrição mais longa se necessário.
```

**Tipos**:
- `Add:` Nova feature
- `Fix:` Correção de bug
- `Update:` Atualização de código existente
- `Refactor:` Refatoração sem mudar comportamento
- `Docs:` Apenas documentação
- `Style:` Formatação, sem mudança de lógica
- `Test:` Adição/correção de testes
- `Chore:` Manutenção (deps, config)

**Exemplos**:
```bash
git commit -m "Add: Componente de estatísticas avançadas"
git commit -m "Fix: Corrige cálculo de probabilidade do tigre"
git commit -m "Docs: Atualiza README com novas features"
```

---

## 🎨 Tipos de Contribuição

### 1. Código

- Novos componentes
- Correções de bugs
- Otimizações de performance
- Testes

### 2. Documentação

- README
- Comentários no código
- Guias e tutoriais
- Traduções

### 3. Design

- Melhorias de UI/UX
- Novos temas
- Ícones e assets
- Animações

### 4. Conteúdo Educativo

- Novas frases educativas
- Curiosidades científicas
- Estatísticas atualizadas
- Referências acadêmicas

### 5. Testes

- Testes unitários
- Testes de integração
- Testes de acessibilidade
- Reports de bugs

---

## 📦 Estrutura do Projeto

```
src/
├── components/     # Componentes React
│   ├── game/       # Lógica de jogo
│   ├── dashboard/  # Estatísticas
│   ├── education/  # Conteúdo educativo
│   ├── vip/        # Features premium
│   ├── ui/         # Componentes de UI
│   └── effects/    # Efeitos visuais
├── hooks/          # Custom hooks
├── utils/          # Funções utilitárias
├── data/           # Dados JSON
└── styles/         # Estilos globais
```

### Onde Adicionar?

| Tipo de Mudança | Onde Adicionar |
|----------------|----------------|
| Novo componente visual | `components/ui/` |
| Lógica de jogo | `utils/gameLogic.js` |
| Cálculos matemáticos | `utils/probability.js` |
| Táticas psicológicas | `utils/psychology.js` |
| Conteúdo educativo | `data/*.json` |
| Animações | `components/effects/` |
| Estado global | `hooks/useGameState.js` |

---

## ✅ Checklist de Pull Request

Antes de submeter, verifique:

- [ ] Código segue padrões do projeto
- [ ] Comentários adicionados onde necessário
- [ ] Documentação atualizada
- [ ] Testado em navegadores diferentes
- [ ] Sem erros de console
- [ ] Sem warnings de lint
- [ ] Commit messages claras
- [ ] PR descreve mudanças detalhadamente
- [ ] Screenshots se mudança visual

---

## 🚫 O Que NÃO Aceitar

- ❌ Features de apostas com dinheiro real
- ❌ Remoção de avisos educativos
- ❌ Código malicioso ou ofuscado
- ❌ Dependências desnecessárias pesadas
- ❌ Breaking changes sem discussão prévia
- ❌ Código que viole a licença MIT

---

## 💬 Comunicação

### Onde Perguntar?

- 🐛 **Bugs**: [GitHub Issues](https://github.com/jonathan/professor-tigrinho-v2/issues)
- 💡 **Ideias**: [GitHub Discussions](https://github.com/jonathan/professor-tigrinho-v2/discussions)
- 📧 **Email**: contato@jonathan.dev
- 🐦 **Twitter**: [@xjhowx](https://twitter.com/xjhowx)

### Tempo de Resposta

- Issues: 1-3 dias úteis
- Pull Requests: 3-7 dias
- Discussões: Best effort

---

## 🎓 Contribuidores

Todos os contribuidores serão creditados no README e CONTRIBUTORS.md!

### Hall da Fama

Contribuições significativas serão destacadas:
- 🥇 Major Contributors
- 🥈 Regular Contributors
- 🥉 First-time Contributors

---

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a licença MIT do projeto.

---

## 🙏 Agradecimentos

Obrigado por ajudar a tornar este projeto melhor! Cada contribuição, por menor que seja, é valiosa.

**Juntos, podemos educar mais pessoas sobre os perigos dos jogos de azar!** 🎓

---

*Professor Tigrinho v2.0 - Projeto Educativo Open-Source*
*Desenvolvido com ❤️ por Jonathan e contribuidores*


# Quick Start Guide 🚀

Guia rápido para começar a usar o **SlotMind** em menos de 5 minutos!

## ⚡ Início Rápido (30 segundos)

### Opção 1: Uso Direto (Mais Rápido)

1. **Clone ou baixe o projeto**
   ```bash
   git clone https://github.com/jonathan/slotmind.git
   ```

2. **Abra o arquivo**
   - Navegue até a pasta do projeto
   - Dê duplo clique em `index.html`
   - Pronto! O jogo abrirá no seu navegador padrão

### Opção 2: Servidor Local (Recomendado)

```bash
# Navegue até a pasta
cd slotmind

# Escolha um dos comandos:

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve

# PHP
php -S localhost:8000

# Acesse: http://localhost:8000
```

## 🎮 Primeiros Passos

### 1. Experimente o Hook Phase
```
✅ Faça as primeiras 5 apostas
✅ Observe que você ganha com frequência
✅ Note a mensagem "X jogadas fáceis restantes"
✅ Este é o "Hook" - te fisgando!
```

### 2. Observe a Mudança de Fase
```
⚠️ Após 5 apostas, o jogo muda para "Loss Phase"
⚠️ Suas chances de ganhar caem drasticamente
⚠️ Este é o momento que a casa começa a lucrar
```

### 3. Identifique Near-Miss
```
🎯 Observe quando aparecem 2 símbolos iguais
🎯 Isso NÃO é coincidência - é manipulação
🎯 Faz você pensar "quase ganhei, vou continuar"
```

### 4. Explore as Configurações
```
⚙️ Clique em "Configurações"
⚙️ Ajuste probabilidades e multiplicadores
⚙️ Ative/desative táticas psicológicas
⚙️ Experimente diferentes cenários
```

## 📊 Experimentos Sugeridos

### Experimento 1: Provar a Matemática da Casa

**Objetivo**: Demonstrar que a casa sempre ganha no longo prazo

**Passos**:
1. Reinicie o jogo (botão 🔄 Reiniciar)
2. Faça 50 apostas de R$ 10,00
3. Observe as estatísticas:
   - Total apostado: R$ 500,00
   - Lucro do jogador: Provavelmente negativo
   - Lucro da casa: Provavelmente positivo

**Resultado Esperado**:
```
📉 Jogador: -R$ 350 a -R$ 450
📈 Casa: +R$ 350 a +R$ 450
💡 RTP aproximado: 10-30% (configuração padrão)
```

### Experimento 2: Testar Hook Phase

**Objetivo**: Verificar a diferença entre fases

**Passos**:
1. Reinicie o jogo
2. Fase Hook (1ª a 5ª aposta):
   - Conte quantas vitórias
   - Taxa esperada: 40-60%
3. Fase Loss (6ª a 20ª aposta):
   - Conte quantas vitórias
   - Taxa esperada: 5-15%

**Resultado Esperado**:
```
🎣 Hook Phase: 2-3 vitórias em 5 apostas (40-60%)
📉 Loss Phase: 1-2 vitórias em 15 apostas (7-13%)
```

### Experimento 3: Near-Miss Frequency

**Objetivo**: Identificar manipulação de near-miss

**Passos**:
1. Configure: Ative "Quase Vitórias"
2. Faça 30 apostas
3. Conte:
   - Vitórias completas (3 iguais)
   - Near-miss (2 iguais)
   - Perdas totais (todos diferentes)

**Resultado Esperado**:
```
🎯 Near-Miss: ~30-40% das apostas
✅ Vitórias: ~10-15% das apostas
❌ Perdas totais: ~45-60% das apostas

💡 Near-miss é artificialmente inflado!
```

### Experimento 4: Sem Táticas Psicológicas

**Objetivo**: Comparar com/sem manipulação

**Passos**:
1. Configurações > Desative "Ativar Manipulação Psicológica"
2. Faça 20 apostas
3. Anote resultados
4. Reinicie
5. Configurações > Ative manipulação
6. Faça 20 apostas
7. Compare

**Resultado Esperado**:
```
🔴 Com manipulação: Maior variação, mais near-miss
🟢 Sem manipulação: Mais previsível, matemática pura
```

## 🎓 Modo Educador

### Para Professores e Educadores

**Cenário 1: Demonstração em Sala**
```
1. Projete o jogo na tela
2. Peça voluntários para apostar
3. Mostre o Hook Phase funcionando
4. Discuta após 10 apostas
5. Revele as estatísticas
```

**Cenário 2: Atividade em Grupo**
```
1. Divida alunos em grupos
2. Cada grupo faz 20 apostas
3. Grupos anotam resultados
4. Compartilham estatísticas
5. Discutem padrões observados
```

**Cenário 3: Projeto de Pesquisa**
```
1. Alunos formulam hipóteses
2. Testam com diferentes configs
3. Coletam dados
4. Analisam estatisticamente
5. Apresentam conclusões
```

## 🔬 Testes Técnicos

### Para Desenvolvedores

#### Teste 1: Verificar Probabilidades

```javascript
// Abra o Console do navegador (F12)

// Teste de distribuição
const results = {};
for (let i = 0; i < 1000; i++) {
    const animal = gameEngine.getRandomAnimal();
    results[animal.name] = (results[animal.name] || 0) + 1;
}
console.table(results);
// Deve refletir as probabilidades configuradas
```

#### Teste 2: RTP Calculation

```javascript
// No Console
function calculateRTP() {
    const animals = gameSettings.animals;
    const totalWeight = animals.reduce((sum, a) => sum + a.chance, 0);
    
    let rtp = 0;
    animals.forEach(a => {
        const prob = Math.pow(a.chance / totalWeight, 3);
        rtp += prob * a.multiplier;
    });
    
    return {
        rtp: (rtp * 100).toFixed(2) + '%',
        houseEdge: ((1 - rtp) * 100).toFixed(2) + '%'
    };
}

console.log(calculateRTP());
```

#### Teste 3: Performance

```javascript
// Teste de performance da animação
console.time('spinAnimation');
await gameEngine.play(10);
console.timeEnd('spinAnimation');
// Deve ser < 3000ms
```

## 🐛 Troubleshooting

### Problema: Sons não tocam

**Solução**:
```
1. Interaja com a página primeiro (clique em qualquer lugar)
2. Navegadores bloqueiam áudio automático
3. Após interação, sons funcionarão
```

### Problema: Animações lentas

**Solução**:
```
1. Feche outras abas do navegador
2. Verifique uso de CPU
3. Teste em navegador diferente
4. Desative extensões do navegador
```

### Problema: Layout quebrado em mobile

**Solução**:
```
1. Force refresh: Ctrl+Shift+R (ou Cmd+Shift+R no Mac)
2. Limpe cache do navegador
3. Verifique se está em modo responsivo
```

## 💡 Dicas Pro

### Dica 1: Atalhos de Teclado
```
? - Abrir ajuda
C - Abrir configurações  
R - Reiniciar jogo
Espaço - Apostar R$ 10
Shift+Espaço - Apostar R$ 5
```
_Nota: Atalhos podem ser adicionados em versão futura_

### Dica 2: Console do Desenvolvedor
```
F12 - Abrir DevTools
gameState - Ver estado atual
gameSettings - Ver configurações
gameEngine - Acesso ao engine
```

### Dica 3: Exportar Dados
```javascript
// No Console - Exportar estatísticas
const stats = {
    ...gameState.statistics,
    balance: gameState.balance,
    phase: gameState.psychological.phase
};
console.log(JSON.stringify(stats, null, 2));
```

## 📱 Testando em Dispositivos

### Desktop
```
✅ Chrome/Edge: Ctrl+Shift+I > Toggle Device Toolbar
✅ Firefox: Ctrl+Shift+M
✅ Safari: Develop > Enter Responsive Design Mode
```

### Mobile Real
```
1. Coloque o projeto em servidor web
2. Descubra IP local: ipconfig (Windows) ou ifconfig (Mac/Linux)
3. Acesse do celular: http://SEU_IP:8000
4. Ou use ngrok para URL pública temporária
```

### Teste de Responsividade
```
📱 iPhone SE (375px)
📱 iPhone 12 (390px)
📱 Android (360px, 412px)
📱 iPad (768px, 1024px)
💻 Desktop (1920px, 2560px)
```

## 🎯 Checklist de Funcionalidades

Teste todos os recursos:

**Gameplay**
- [ ] Apostar R$ 5,00
- [ ] Apostar R$ 10,00
- [ ] Animação de slots
- [ ] Vitória com 3 símbolos iguais
- [ ] Modal de vitória
- [ ] Efeito de confete
- [ ] Sons de vitória

**Estatísticas**
- [ ] Total de jogadas atualiza
- [ ] Vitórias contam corretamente
- [ ] Lucro do jogador calcula certo
- [ ] Lucro da casa calcula certo
- [ ] Saldo atualiza em tempo real

**Configurações**
- [ ] Abrir modal de config
- [ ] Alterar probabilidades
- [ ] Alterar multiplicadores
- [ ] Toggle de táticas
- [ ] Salvar configurações
- [ ] Fechar modal

**Histórico**
- [ ] Jogadas aparecem no log
- [ ] Cores diferentes (win/loss/info)
- [ ] Limpar histórico funciona
- [ ] Scroll automático

**Responsividade**
- [ ] Layout mobile funciona
- [ ] Botões clicáveis em touch
- [ ] Modais centralizam
- [ ] Texto legível em mobile

## 📞 Suporte

**Documentação Completa**: [README.md](README.md)
**Guia de Contribuição**: [CONTRIBUTING.md](CONTRIBUTING.md)
**Reportar Bug**: [GitHub Issues](https://github.com/jonathan/slotmind/issues)

---

## 🎉 Pronto para Começar!

Agora você está pronto para explorar o **SlotMind** e entender como jogos de azar manipulam psicologicamente os jogadores!

**Lembre-se**: Este é um projeto educativo. Use-o para aprender, ensinar e conscientizar sobre os perigos do jogo.

---

**Desenvolvido com ❤️ por Jonathan**

⭐ Se achou útil, dê uma estrela no GitHub!


# 🔊 Sistema de Áudio - Professor Tigrinho v2.0

## 📋 Status Atual

O sistema de áudio está **FUNCIONAL** mas os arquivos de som ainda precisam ser adicionados.

**Situação**: A aplicação funciona perfeitamente SEM sons (modo silencioso). Quando você adicionar arquivos MP3, os sons começarão a tocar automaticamente!

---

## 🎵 Sons Necessários

Coloque estes arquivos MP3 nesta pasta (`public/sounds/`):

| Arquivo | Descrição | Duração | Uso |
|---------|-----------|---------|-----|
| `spin.mp3` | Som de giro dos slots | ~1-2s | Quando clicar em GIRAR |
| `win.mp3` | Vitória pequena | ~2s | Ganhou 2x-5x |
| `bigwin.mp3` | Vitória grande | ~3s | Ganhou 5x+ |
| `lose.mp3` | Perda (sutil) | ~0.5s | Perdeu |
| `nearmiss.mp3` | "Quase!" | ~1s | 2 símbolos iguais |
| `click.mp3` | Clique em botões | ~0.1s | Cliques gerais |
| `achievement.mp3` | Conquista desbloqueada | ~2s | Novas conquistas |

---

## 🌐 Onde Baixar Sons Gratuitos

### 1. **Pixabay** (Recomendado!)
- 🔗 https://pixabay.com/sound-effects/
- ✅ **100% Gratuito**
- ✅ Sem atribuição necessária
- ✅ Uso comercial permitido

**Sugestões de busca:**
- `spin` → "slot machine", "reel spin", "spinning"
- `win` → "coins", "win", "success bell"
- `bigwin` → "jackpot", "big win", "fanfare"
- `lose` → "lose", "fail", "negative"
- `nearmiss` → "anticipation", "almost"
- `click` → "click", "button", "UI click"
- `achievement` → "achievement", "level up", "success"

### 2. **Freesound**
- 🔗 https://freesound.org/
- ✅ Gratuito (verifique licença individual)
- ⚠️ Algumas requerem atribuição

### 3. **Mixkit**
- 🔗 https://mixkit.co/free-sound-effects/
- ✅ Gratuito
- ✅ Sem atribuição

### 4. **ZapSplat**
- 🔗 https://www.zapsplat.com/
- ✅ Gratuito com conta
- ⚠️ Atribuição recomendada

---

## 🎬 Como Adicionar Sons

### Passo 1: Baixar
Baixe os sons dos sites acima (formato **MP3** recomendado)

### Passo 2: Renomear
Renomeie os arquivos exatamente como listado:
- `spin.mp3`
- `win.mp3`
- `bigwin.mp3`
- `lose.mp3`
- `nearmiss.mp3`
- `click.mp3`
- `achievement.mp3`

### Passo 3: Colocar
Cole os arquivos nesta pasta:
```
professor-tigrinho-v2/public/sounds/
```

### Passo 4: Testar
1. Execute `npm run dev`
2. Abra o jogo
3. Clique em GIRAR
4. 🎵 **Os sons devem tocar!**

---

## 🎚️ Ajustar Volumes

Edite `src/hooks/useAudio.js`:

```javascript
const SOUNDS = {
  spin: { volume: 0.3 },    // 30% (atual)
  win: { volume: 0.5 },     // 50%
  bigWin: { volume: 0.6 },  // 60%
  // ... ajuste conforme necessário
};
```

---

## 🎭 Dicas de Escolha de Sons

### ✅ Bons Sons:
- **Curtos** (0.5s - 3s)
- **Claros** (sem ruído de fundo)
- **Adequados** ao contexto (alegre para vitória, sutil para perda)
- **Leves** (< 100KB cada)

### ❌ Evite:
- Sons muito longos (>5s)
- Sons irritantes/repetitivos
- Arquivos muito pesados (>500KB)
- Sons com direitos autorais

---

## 🔧 Troubleshooting

### Sons não tocam?

**1. Verifique se os arquivos existem:**
```bash
ls public/sounds/
```

**2. Verifique o console do navegador:**
```
🔇 Som não disponível: /sounds/spin.mp3 (funcionando silenciosamente)
```
↑ Significa que o arquivo não foi encontrado (mas não quebra o jogo!)

**3. Limpe o cache:**
```bash
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

**4. Verifique se o som está habilitado:**
- Clique no ícone 🔊 no topo da página
- Deve estar verde/ativo

---

## 📦 Tamanhos Recomendados

| Tipo | Bitrate | Tamanho Aprox. |
|------|---------|----------------|
| Click | 64 kbps | 5-10 KB |
| Spin | 128 kbps | 50-100 KB |
| Win | 128 kbps | 80-150 KB |
| Big Win | 192 kbps | 150-300 KB |

**Total ideal**: < 1 MB para todos os sons

---

## 🎯 Sem Sons?

**Tudo bem!** O projeto funciona perfeitamente sem sons.

Usuários podem:
- ✅ Jogar normalmente
- ✅ Todas as funcionalidades funcionam
- ✅ Sem erros no console
- ✅ Performance não é afetada

---

## 🚀 Sons Avançados (Futuro)

### Música Ambiente
```javascript
// Adicionar em useAudio.js
ambient: {
  src: '/sounds/ambient.mp3',
  volume: 0.1,
  loop: true
}
```

### Variações de Sons
```javascript
// Múltiplos sons de vitória
win1.mp3, win2.mp3, win3.mp3
// Escolhe aleatoriamente
```

---

## 📜 Licenças

⚠️ **IMPORTANTE**: 
- ✅ Use apenas sons com **licença livre**
- ✅ Verifique se pode usar **comercialmente**
- ✅ Dê créditos se necessário
- ❌ Não use sons com copyright

---

## 💡 Exemplo: Sons do Pixabay

1. Acesse: https://pixabay.com/sound-effects/search/slot%20machine/
2. Encontre "Slot Machine Reel Spin"
3. Baixe → Renomeie para `spin.mp3`
4. Cole em `public/sounds/`
5. ✅ Pronto!

---

## 🆘 Ajuda

**Precisa de ajuda?**
- 📧 Abra uma issue no GitHub
- 💬 Veja a documentação completa no README.md
- 🎮 Teste primeiro no modo dev: `npm run dev`

---

**Sistema de áudio by Professor Tigrinho v2.0** 🐯🔊

*Última atualização: Outubro 2025*


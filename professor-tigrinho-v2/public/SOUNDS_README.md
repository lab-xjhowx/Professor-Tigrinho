# 🔊 Guia de Sons

## 📋 Arquivos de Som Necessários

Coloque os seguintes arquivos na pasta `public/sounds/`:

### Sons do Jogo

1. **spin.mp3** - Som de giro dos slots
   - Duração: ~1-2s
   - Sugestão: Som de máquina girando

2. **win.mp3** - Som de vitória pequena
   - Duração: ~2s
   - Sugestão: Moedas caindo, sino

3. **bigwin.mp3** - Som de vitória grande
   - Duração: ~3s
   - Sugestão: Fanfarra, explosão de alegria

4. **lose.mp3** - Som de perda (sutil)
   - Duração: ~0.5s
   - Sugestão: Som baixo, decepcionante

5. **nearmiss.mp3** - Som de "quase"
   - Duração: ~1s
   - Sugestão: Som de expectativa

6. **click.mp3** - Som de clique em botões
   - Duração: ~0.1s
   - Sugestão: Click suave

7. **achievement.mp3** - Som de conquista
   - Duração: ~2s
   - Sugestão: Fanfarra de conquista

8. **ambient.mp3** - Música ambiente (opcional)
   - Duração: ~30s (loop)
   - Sugestão: Música de fundo sutil

---

## 🌐 Fontes de Sons Gratuitas

### Recomendadas:

1. **Mixkit** (Usado no código)
   - https://mixkit.co/free-sound-effects/
   - Licença: Gratuita para uso comercial

2. **Freesound**
   - https://freesound.org/
   - Licença: Varia (verifique)

3. **ZapSplat**
   - https://www.zapsplat.com/
   - Licença: Gratuita com atribuição

4. **Pixabay**
   - https://pixabay.com/sound-effects/
   - Licença: Gratuita

---

## 🎵 Configuração Atual

O projeto usa URLs da Mixkit como fallback:

```javascript
const SOUNDS = {
  spin: 'https://assets.mixkit.co/.../2073-preview.mp3',
  win: 'https://assets.mixkit.co/.../2000-preview.mp3',
  // ... outros sons
};
```

### Para usar sons locais:

1. Baixe os arquivos MP3
2. Coloque em `public/sounds/`
3. Atualize `src/hooks/useAudio.js`:

```javascript
const SOUNDS = {
  spin: {
    src: ['/sounds/spin.mp3'],
    volume: 0.3
  },
  // ... outros sons
};
```

---

## 🎚️ Ajustar Volumes

Em `src/hooks/useAudio.js`:

```javascript
const SOUNDS = {
  spin: { volume: 0.3 },    // 30% do volume máximo
  win: { volume: 0.5 },     // 50%
  bigWin: { volume: 0.6 },  // 60%
  lose: { volume: 0.2 },    // 20% (sutil)
  // ...
};
```

---

## 🔇 Desabilitar Sons

Os usuários podem desabilitar sons pela UI:
- Clique no ícone de volume na navbar
- Estado é salvo no localStorage

---

## 📦 Formatos Suportados

- ✅ **MP3** - Melhor compatibilidade
- ✅ **OGG** - Boa compressão
- ✅ **WAV** - Alta qualidade (maior tamanho)
- ✅ **M4A** - iOS/Safari

Recomendação: Use **MP3** para máxima compatibilidade.

---

## 🎭 Dicas de Design de Áudio

### Vitórias
- Comece sutil, crescente
- Use tons alegres, positivos
- Duração curta (1-3s)

### Perdas
- Som MUITO sutil ou nenhum
- Evite sons negativos fortes
- Jogos reais minimizam perdas auditivamente

### Near-Miss
- Som de "quase", expectativa
- Nem vitória nem derrota total
- Cria sensação de proximidade

---

## 📊 Performance

### Otimização:

1. **Preload**: Sons são pré-carregados
   ```javascript
   preload: true
   ```

2. **Compressão**: Use bitrate 128kbps (suficiente)

3. **Tamanho**: Mantenha < 100KB por arquivo

4. **Formato**: MP3 tem boa compressão

---

## 🐛 Troubleshooting

### Sons não tocam?

1. **Autoplay bloqueado**: Navegadores bloqueiam autoplay
   - Solução: Primeiro som após interação do usuário

2. **Formato não suportado**:
   - Verifique compatibilidade do navegador
   - Use MP3 como fallback

3. **Volume zero**:
   - Verifique se usuário não mutou
   - Verifique `soundEnabled` no estado

### Console mostra erro?

```javascript
// Erro comum
Uncaught (in promise) DOMException: play() failed

// Solução: ignore ou trate
sound.play().catch(e => console.log('Audio blocked'));
```

---

## 📜 Licenças

⚠️ **IMPORTANTE**: Verifique licenças dos sons!

- ✅ **Uso Educativo**: Geralmente permitido
- ✅ **Creative Commons**: Verifique tipo (BY, NC, SA)
- ❌ **Copyright**: Não use sem permissão
- ✅ **Royalty-Free**: Permitido uso

---

## 🎯 Sem Sons?

O projeto funciona perfeitamente SEM sons!

Para desabilitar completamente:

```javascript
// useAudio.js
const play = () => {}; // Função vazia
```

Ou remova imports de `useAudio` do `App.jsx`.

---

## 🔗 Links Úteis

- [Howler.js Docs](https://howlerjs.com/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Audio Best Practices](https://web.dev/audio-video/)

---

**Dúvidas? Abra uma issue no GitHub!**

*Professor Tigrinho v2.0 - Sound Guide*


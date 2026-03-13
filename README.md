<div align="center">

# 📰 Teste de Blog

**Portal de notícias multi-tema com visual único por categoria**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![CSS3](https://img.shields.io/badge/CSS3-Avançado-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=flat-square&logo=github&logoColor=white)](https://pages.github.com)
[![License](https://img.shields.io/badge/Licença-MIT-green?style=flat-square)](#licença)

</div>

---

## ✨ Sobre o Projeto

**Tere em Foco** é um portal de notícias construído em React onde **cada categoria tem sua própria identidade visual completa** — tipografia, paleta de cores, animações e atmosfera únicas. Ao trocar de categoria, o site inteiro transiciona suavemente para um novo tema.

> 🎨 Inspirado na ideia de que cada universo de conteúdo merece sua própria estética.

---

## 🎭 Os Temas

| Categoria | Estética | Fonte | Cores |
|-----------|----------|-------|-------|
| 🎮 **Jogos** | Cyberpunk neon on dark | Orbitron + Share Tech Mono | Cyan `#00fff2` · Pink `#ff00aa` |
| ⚽ **Futebol** | Estádio à noite · placar LED | Barlow Condensed | Verde `#00c853` · Dourado `#ffd600` |
| 📈 **Economia** | Bloomberg terminal | IBM Plex Mono | Âmbar `#ff9500` · Verde `#00d084` |
| 💻 **Tecnologia** | Deep space azul | DM Sans + DM Mono | Azul `#4d94ff` · Ciano `#00cfff` |
| 🔬 **Ciência** | Cosmos · deep space | Outfit + Space Mono | Teal `#00e5c8` · Índigo `#7b61ff` |
| 🎬 **Entretenimento** | Magazine pop dark | Anton + Nunito | Rosa `#ff1f6e` · Coral `#ff6b35` |

---

## 🚀 Funcionalidades

- **Sistema de temas dinâmico** — CSS variables injetadas via `useEffect` ao trocar de categoria
- **Fundo do body transiciona** suavemente entre os temas (`transition: background 0.5s`)
- **Logo e header sincronizados** — gradiente, fonte e tagline mudam junto com a página
- **Navbar estável** — fonte fixa independente do tema, sem pulos de layout
- **Slider horizontal** com `scroll-snap` nativo em todas as categorias
- **Drop cap editorial** na primeira letra dos artigos
- **Animações de entrada** únicas por página com `@keyframes` e `animation-delay`
- **Deploy automático** via GitHub Actions a cada `push` na `main`

---

## 🗂️ Estrutura do Projeto

```
src/
├── App.jsx               # Orquestrador central + objeto TEMAS
├── App.css               # Estilos globais, header, sidebar, fontes
├── components/
│   └── Sidebar.jsx       # Navbar que recebe o tema via props
└── Pages/
    ├── Pagejogos.jsx      + Pagejogos.css
    ├── Pagefutebol.jsx    + Pagefutebol.css
    ├── Pageeconomia.jsx   + Pageeconomia.css
    ├── Pagetecnologia.jsx + Pagetecnologia.css
    ├── Pageciencia.jsx    + Pageciencia.css
    └── Pageentretenimento.jsx + Pageentretenimento.css
```

---

## 🧠 Decisões Técnicas

### Sistema de Temas

O objeto `TEMAS` no `App.jsx` funciona como o DNA visual de cada categoria — armazena cores, gradientes, fontes e estilos de botão. Ao selecionar uma categoria, o `useEffect` injeta os valores como CSS custom properties no `:root`:

```js
root.style.setProperty("--tema-bg", tema.bg);
root.style.setProperty("--tema-accent", tema.accent);
document.body.style.background = tema.bg;
```

### Fonte fixa no Sidebar

A navbar usa `font-family: 'DM Sans'` fixo, sem herdar `--fonte-display` do tema. Isso evita que os botões mudem de tamanho ao trocar categorias (Orbitron → Anton são fontes muito diferentes em espaçamento).

### Re-animação por página

O `key={categoria}` no `<main>` força o React a **desmontar e remontar** o componente ao trocar de categoria, garantindo que a animação de entrada CSS seja disparada toda vez — sem nenhum JS extra.

```jsx
<main key={categoria} className="app-main">
  {renderPage()}
</main>
```

### CSS Grid responsivo sem media queries

```css
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
```

Os cards se reorganizam automaticamente em qualquer tamanho de tela.

---

## ⚙️ Como Rodar

```bash
# Clone o repositório
git clone https://github.com/Vituali/tereemfoco.git
cd tereemfoco

# Instala dependências
npm install

# Inicia em desenvolvimento
npm run dev

# Build de produção
npm run build
```

---

## 🚢 Deploy

O projeto usa **GitHub Actions** para deploy automático no GitHub Pages.

A cada `git push` na branch `main`, o workflow:
1. Instala as dependências com `npm ci`
2. Roda `npm run build`
3. Publica a pasta `dist/` na branch `gh-pages`

O arquivo de configuração está em `.github/workflows/deploy.yml`.

Para configurar pela primeira vez:

1. Edite o `homepage` no `package.json`:
   ```json
   "homepage": "https://Vituali.github.io/tereemfoco"
   ```

2. Adicione a `base` no `vite.config.js`:
   ```js
   export default defineConfig({ base: '/tereemfoco/' })
   ```

3. Ative o GitHub Pages em **Settings → Pages → Branch: gh-pages**

---

## 📚 Conceitos de CSS Aplicados

| Conceito | Onde é usado |
|----------|-------------|
| `CSS Custom Properties` | Sistema de temas dinâmico |
| `clamp()` | Tipografia responsiva sem media queries |
| `backdrop-filter: blur()` | Efeito de vidro fosco na navbar |
| `background-clip: text` | Gradiente dentro das letras |
| `scroll-snap` | Slider horizontal nativo |
| `position: sticky` | Navbar que acompanha o scroll |
| `@keyframes` + `animation-delay` | Entrada escalonada dos cards |
| `::first-letter` | Drop cap editorial |
| `radial-gradient` | Atmosferas de fundo por tema |
| `auto-fit + minmax` | Grid responsivo automático |

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com ☕ e muito CSS · **Tere em Foco 2026**

</div>

# Traduttore: un progetto per iniziare con Vite e React

## Wireframe del progetto

![Wireframe del progetto](./docs/wireframe.png)


## Possibile risultato

![Possibile risultato](./docs/possibileRisultato.png)

# Tailwind CSS

## Installazione

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

## Configurazione

```js
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```js
// main.js
import './index.css'
```

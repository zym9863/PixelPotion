# PixelPotion - Pixel Art Creation Tool

[中文](README.md) | English

A modern pixel art creation tool built with React, TypeScript, and Vite.

## Features

- 🎨 Brush Tool: Free-form pixel art drawing
- ✨ Color Palette: Rich color selection
- ⚡ Eraser: Easy modification and erasing
- 💻 Responsive Design: Adapts to different screen sizes

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Modules

## Quick Start

1. Clone the project
```bash
git clone https://github.com/zym9863/PixelPotion.git
cd PixelPotion
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open browser and visit `http://localhost:5173`

## ESLint Configuration

The project uses TypeScript-ESLint for code linting. If you're developing a production application, it's recommended to enable type-aware lint rules:

1. Configure `parserOptions`:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Use recommended type checking configuration:
- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`

## License

MIT
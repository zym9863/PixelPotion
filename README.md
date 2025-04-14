# PixelPotion - 像素艺术创作工具

中文 | [English](README_EN.md)

一个使用React、TypeScript和Vite构建的现代像素艺术创作工具。

## 功能特点

- 🎨 画笔工具：自由绘制像素艺术
- ✨ 调色板：丰富的颜色选择
- ⚡ 橡皮擦：轻松修改和擦除
- 💻 响应式设计：适配不同屏幕尺寸

## 技术栈

- React 18
- TypeScript
- Vite
- CSS Modules

## 快速开始

1. 克隆项目
```bash
git clone https://github.com/zym9863/PixelPotion.git
cd PixelPotion
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 `http://localhost:5173`

## ESLint 配置

项目使用了TypeScript-ESLint进行代码规范检查。如果你正在开发生产应用，建议启用类型感知的lint规则：

1. 配置 `parserOptions`：

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

2. 使用推荐的类型检查配置：
- 将 `tseslint.configs.recommended` 替换为 `tseslint.configs.recommendedTypeChecked` 或 `tseslint.configs.strictTypeChecked`
- 可选添加 `...tseslint.configs.stylisticTypeChecked`

## 许可证

MIT

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React + TypeScript + Vite application with React Compiler enabled. This is a minimal setup that uses Babel for Fast Refresh and includes ESLint configuration.

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Type-check and build for production
npm run build

# Lint all files
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Build System
- **Vite** (v7.1.7) for bundling and dev server
- **TypeScript** (~5.9.3) with strict mode enabled
- **React Compiler** (babel-plugin-react-compiler) integrated in Vite config for automatic optimization

### TypeScript Configuration
Uses project references with two separate tsconfig files:
- `tsconfig.app.json`: Application code in `src/` (target: ES2022, JSX runtime)
- `tsconfig.node.json`: Build configuration files like `vite.config.ts` (target: ES2023)

Both configs use bundler module resolution and have strict linting enabled (noUnusedLocals, noUnusedParameters, noFallthroughCasesInSwitch, noUncheckedSideEffectImports).

### React Setup
- React 19.1.1 with React DOM
- StrictMode enabled in `src/main.tsx`
- React Compiler automatically optimizes components (note: impacts dev & build performance)

### ESLint Configuration
Uses flat config (eslint.config.js) with:
- TypeScript ESLint recommended rules
- React Hooks recommended-latest rules
- React Refresh Vite rules
- Ignores `dist/` directory

### Entry Points
- `index.html`: Root HTML file
- `src/main.tsx`: Application entry point that renders `<App />` into `#root`
- `src/App.tsx`: Main application component

## Styling Guidelines

**Color Palette**: Use the following color scheme consistently across the application:
- **Gunmetal** (#2d3142): Primary dark color for text and backgrounds
- **Silver** (#bfc0c0): Secondary/neutral color for borders and subtle elements
- **White** (#ffffff): Background and contrast color
- **Coral** (#ef8354): Accent color for CTAs, highlights, and interactive elements
- **Paynes Gray** (#4f5d75): Secondary dark color for headings and emphasis

**CSS Variables** (use these in your CSS):
```css
--gunmetal: #2d3142;
--silver: #bfc0c0;
--white: #ffffff;
--coral: #ef8354;
--paynes-gray: #4f5d75;
```

**Important CSS Rules**:
- Never use `display: flex` on the `body` element
- Use the color palette above instead of purple/blue gradients
- Maintain consistency with the defined color scheme

## Important Notes

**React Compiler Impact**: The React Compiler is enabled, which affects Vite dev and build performance. This automatically optimizes React components but adds compilation overhead.

**Type-Aware Linting**: The current ESLint config uses basic TypeScript rules. The README suggests upgrading to `recommendedTypeChecked` or `strictTypeChecked` for production applications by adding `parserOptions.project` configuration.

# Copilot Instructions for Website Project

## Project Overview
This is a **Next.js website** built with TypeScript and React. The project follows modern React patterns with strict type safety, component-based architecture, and automated testing.

## Architecture & Key Components

### Directory Structure
- **`src/pages/`** - Next.js page routes (file-based routing). Each `.tsx` file becomes a route.
- **`src/components/`** - Reusable React components. Keep components small and focused on a single responsibility.
- **`src/lib/`** - Utility functions and shared logic (e.g., `utils.ts` contains `formatDate()`, `classNames()`).
- **`src/styles/`** - Global CSS (`globals.css`) and component-scoped styles.
- **`public/`** - Static assets served directly (images, fonts, etc.).

### Technology Stack
- **Next.js 14** - React framework with built-in routing, SSR, and optimization
- **TypeScript** - Strict type checking (`strict: true` in tsconfig)
- **Jest + React Testing Library** - Unit testing framework
- **ESLint** - Code quality (extends `next/core-web-vitals`)

## Critical Workflows

### Development
```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm start            # Run production server
```

### Testing & Quality
```bash
npm test             # Run unit tests once
npm run test:watch   # Run tests in watch mode
npm run type-check   # Run TypeScript type checking
npm run lint         # Run ESLint
```

## Project-Specific Conventions

### Path Aliases
Import using `@/` prefix instead of relative paths:
```typescript
// ✅ Preferred
import Header from '@/components/Header';
import { formatDate } from '@/lib/utils';

// ❌ Avoid
import Header from '../components/Header';
```

### Component Patterns
- **Functional components only** - Use `React.FC<Props>` for typed components
- **Export default** - Each component file exports one default component
- **Props interface** - Define `interface ComponentProps` above the component
- Example from [Header.tsx](src/components/Header.tsx):
  ```typescript
  interface HeaderProps {
    title?: string;
  }
  const Header: React.FC<HeaderProps> = ({ title = 'My Website' }) => { ... }
  ```

### Type Safety
- All files use TypeScript (`.ts` or `.tsx` extensions)
- `strict: true` enforces non-null assertions and full type coverage
- Avoid `any` type - use `unknown` or specific types instead

### Testing
- Test files colocate with components (same directory)
- Use Jest with `jest-environment-jsdom` for DOM testing
- Path aliases configured in `jest.config.js` to match `tsconfig.json`

## Integration Points & Dependencies

### External Services
- **Next.js Image Optimization** - Configured in `next.config.js` with AVIF and WebP formats
- **React Strict Mode** - Enabled in `next.config.js` for development safety checks

### Build & Deployment
- **SWC Minification** - Enabled in `next.config.js` for faster builds
- **Image Optimization** - Unoptimized for GitHub Pages compatibility (`unoptimized: true`)
- **GitHub Pages** - Configured with `basePath: '/ai-website'` and `assetPrefix: '/ai-website/'` for repository deployment
- **gh-pages** - Used to deploy the `out/` directory to GitHub Pages

## Common Tasks

### Adding a New Page
1. Create `src/pages/[pagename].tsx`
2. Export a default React component that receives props from Next.js
3. Use path alias imports for components and utilities

### Adding a New Component
1. Create `src/components/[ComponentName].tsx`
2. Define `interface [ComponentName]Props` for type safety
3. Export as `export default` with `React.FC` type
4. Import in pages using `@/components/[ComponentName]`

### Running Tests
- Jest watches for changes in `src/**/*.test.ts(x)` files
- Configure module name mapping in `jest.config.js` to match TypeScript paths
- Setup file (`jest.setup.js`) imports testing utilities globally

### Deploying to GitHub Pages
1. Ensure git is configured and changes are committed
2. Run `npm run deploy` to build and push to GitHub Pages (`gh-pages` branch)
3. GitHub Pages will automatically serve from `https://derricksobrien.github.io/ai-website/`
4. The `basePath: '/ai-website'` in `next.config.js` ensures correct asset paths

## Key Files to Reference
- [package.json](package.json) - Dependencies and scripts
- [tsconfig.json](tsconfig.json) - TypeScript configuration and path aliases
- [next.config.js](next.config.js) - Next.js-specific settings
- [src/components/Header.tsx](src/components/Header.tsx) - Component pattern example
- [src/lib/utils.ts](src/lib/utils.ts) - Utility function examples
- [README.md](README.md) - Setup and project overview

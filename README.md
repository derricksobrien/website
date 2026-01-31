# Website

A modern Next.js website built with TypeScript and React.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

```bash
npm run build
npm start
```

### Testing

```bash
npm test
npm run test:watch
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Project Structure

- `/src/pages` - Next.js pages and API routes
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and shared logic
- `/src/styles` - Global and component styles
- `/public` - Static assets

## Key Patterns

- **Component Organization**: Small, focused components in separate files
- **Type Safety**: Strict TypeScript configuration enforced project-wide
- **Path Aliases**: Use `@/` prefix to import from src root
- **Testing**: Unit tests collocated with components using Jest

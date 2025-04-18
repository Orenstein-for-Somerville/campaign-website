# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build
- `npm run netlify-dev` - Run Netlify development server

## Code Style Guidelines
- Use TypeScript with React functional components
- Import paths use aliases: `@/components/*` maps to `src/components/*`
- Components use default exports and follow PascalCase naming
- Styling uses Tailwind CSS with utility classes
- UI components from Shadcn (`@/components/ui/*`)
- Use `cn()` utility for conditional class merging
- Hooks use camelCase naming with `use` prefix
- Minimal TypeScript strictness (strictNullChecks disabled)
- Follow React hooks usage rules
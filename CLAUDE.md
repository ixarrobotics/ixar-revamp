# IXAR Robotic Recreation

## Project Overview
Website for IXAR, built with React + TypeScript + Vite + Tailwind CSS.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build**: Vite 5
- **Styling**: Tailwind CSS 3 + CSS Modules (`.module.css`)
- **Routing**: React Router DOM v7
- **Icons**: Lucide React

## Project Structure
```
src/
  pages/          # Route-level page components (with co-located CSS modules)
  components/     # Shared components (Navbar, Footer, UI)
  components/ui/  # Reusable UI primitives
  hooks/          # Custom React hooks
  styles/         # Global styles
  assets/         # Static assets
  types/          # TypeScript type definitions
```

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build

## Conventions
- Pages use CSS Modules (e.g., `HomePage.module.css` alongside `HomePage.tsx`)
- Components are in `src/components/`, pages in `src/pages/`
- Branch `dev` for development, `master` is the main branch

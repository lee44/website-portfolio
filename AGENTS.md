# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 13 portfolio site using React, TypeScript, Tailwind CSS, and Framer Motion.

- `pages/` contains route-level pages and Next.js application files (`_app.js`, `_document.js`, and `index.tsx`).
- `components/` contains reusable UI, grouped into `elements/` and `templates/`.
- `constants/` contains portfolio content and configuration data such as projects, social links, animations, and timeline events.
- `styles/` contains global CSS; `public/` contains static images, resume files, and portfolio media.
- `next.config.js`, `tailwind.config.js`, `postcss.config.js`, and `tsconfig.json` define the build and styling toolchain.

Keep new page-specific code near its route, reusable components in `components/`, and editable portfolio content in `constants/` rather than hard-coding it into JSX.

## Build, Test, and Development Commands

Run these commands from the repository root:

```bash
npm install       # Install dependencies from package-lock.json
npm run dev       # Start the local development server at http://localhost:3000
npm run lint      # Run Next.js ESLint checks
npm run build     # Create a production build and validate compilation
npm start         # Serve the existing production build
```

There is currently no automated test framework or test script. At minimum, run `npm run lint` and `npm run build`, then manually check the affected page at desktop and mobile widths.

## Coding Style & Naming Conventions

Follow the existing ESLint configuration: use two-space indentation, single quotes, and no semicolons. Use PascalCase for React component files and component names, camelCase for JavaScript/TypeScript variables, and descriptive lowercase names for static asset files. Prefer typed `.tsx` files for new React components and keep imports organized and minimal.

## Testing Guidelines

No coverage requirement is configured. For UI changes, verify navigation, animations, responsive layout, links, and asset loading manually after linting and building.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects, consistent with the existing history (for example, `Added favicon and fixed warning`). Keep each commit focused. Pull requests should describe the visible or behavioral change, list validation commands run, link any related issue, and include screenshots or a short screen recording for visual changes.

## Security & Configuration

Do not commit secrets, credentials, or local environment files. Review changes to external links and downloadable public assets before opening a pull request.

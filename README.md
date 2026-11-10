# IELTS Prep

A personal IELTS / PTE / Spoken English coaching website — React + Vite + Tailwind CSS, in a red/blue/white theme.

## Stack

- [Vite](https://vite.dev/) + React (JS, no TypeScript)
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) for styling, themed via `@theme` in `src/index.css`
- [lucide-react](https://lucide.dev/) for icons
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) for linting

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

## Scripts

- `npm run dev` — start the dev server with hot reload
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Project structure

```
src/
  components/
    layout/   Navbar, Footer, page shell (Layout)
    ui/       Reusable building blocks: Button, Card, Container, Accordion, ...
  pages/      One file per route (Home, About, Courses, Results, Contact, ...)
  data/       Static content (courses, testimonials, FAQs) kept separate from markup
  index.css   Tailwind import + theme tokens (colors, fonts)
```

## Before going live

- **Contact form**: `src/pages/Contact.jsx` currently only validates and shows a
  success message locally — there's no backend. Wire the `handleSubmit`
  function to a real endpoint (e.g. [Formspree](https://formspree.io/),
  [Getform](https://getform.io/), or your own API) before relying on it.
- **Content**: course descriptions, testimonials, FAQs, and contact details are
  placeholder content in `src/data/` and `src/components/layout/Footer.jsx` —
  replace with your real details.
- **Legal pages**: `Privacy.jsx` and `Terms.jsx` contain placeholder text only.
- **Deployment**: this is a static Vite build (`npm run build` outputs
  `dist/`), so it deploys to any static host (Netlify, Vercel, GitHub Pages,
  etc.) once you pick one.

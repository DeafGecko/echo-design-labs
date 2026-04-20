# Echo Design Labs

A tutorial platform for aspiring developers and designers — built around the idea that you learn by building, not just reading.

Echo Design Labs combines structured React and design tutorials with "Tiny Twerk" interview-prep projects, giving learners hands-on practice that mirrors what real frontend and design-engineering interviews actually test.

## Status

🚧 In active development. Currently building the core learning experience in public as I level up my own React skills.

## Website
https://echo-design-labs.vercel.app/

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast dev + builds
- **Tailwind CSS** for styling (custom `echo` theme)
- **React Router** for client-side routing
- **Supabase** (planned) for auth, tutorial content, and user progress
- **Stripe** (planned) for tiered subscriptions

## Features

### Live
- Multi-page app with client-side routing
- Dynamic tutorial chapter pages (`/tutorials/:slug`)
- Typed data layer with TypeScript interfaces
- Custom Tailwind theme with glass-gradient utilities

### Planned
- User accounts and progress tracking (Supabase)
- "Tiny Twerk" interview-prep projects with interactive code challenges
- Tiered subscriptions (free, pro, studio)
- Community showcase for user-submitted projects
- A focus on accessibility 

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` to see the app.

## Project Structure
src/
├── components/     Reusable UI components (Nav, etc.)
├── pages/          Top-level route components
├── data/           Typed content (tutorials, chapters)
├── assets/         Images and static files
└── styles/         Global styles

## Philosophy

Most tutorial platforms teach by making you type what you're told. Echo Design Labs is built on a different premise: the fastest way to learn is to build real things, hit real bugs, and fix them. Every chapter ends with a challenge — no exceptions.

## About

Built by [Dwight Rogers](https://github.com/DeafGecko) — freelance developer, founder of 09 Lab.

---

*Currently learning in public. Follow along or fork and build your own.*

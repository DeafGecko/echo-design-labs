# Echo Design Labs

A tutorial platform for aspiring developers and designers — built around the idea that you learn by building, not just reading.

Echo Design Labs combines structured React and design tutorials with "Tiny Twerk" interview-prep projects, giving learners hands-on practice that mirrors what real frontend and design-engineering interviews actually test.

## Status

🚧 In active development. Currently building the core learning experience in public as I level up my own React skills.

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
- A focus on accessibility — including features for the Deaf community, who are part of the core audience

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

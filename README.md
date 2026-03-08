# The Basement Labs

**Web3 Venture Studio** — From hackathon to protocol. Zero capital. Full control.

A 7-page dark-mode marketing site built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS 3.4 + CSS Variables
- **UI**: Radix UI primitives + custom components
- **Animation**: Framer Motion + Lenis smooth scroll
- **CMS**: Sanity v3 (Projects & Blog)
- **Email**: Resend (contact form)
- **Analytics**: PostHog
- **Hosting**: Vercel

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy env template
cp .env.example .env.local

# Fill in your environment variables in .env.local

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, what we do, featured projects, metrics, dual CTA |
| `/about` | Story, sprint system (S0–S4), economics, team, failure protocol |
| `/projects` | Active, graduated, pipeline projects (Sanity CMS) |
| `/for-builders` | Perks, economics, roles, application, FAQ |
| `/for-ecosystems` | Value props, grant alignment, partner logos, metrics |
| `/blog` | Articles from Sanity CMS |
| `/contact` | Inquiry form (Resend), community links |

## Environment Variables

See `.env.example` for required variables.

## Deployment

Push to `main` → Vercel auto-deploys.

## License

© 2026 Basement Labs. All rights reserved.

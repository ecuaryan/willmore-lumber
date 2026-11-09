# Willmore Lumber

Marketing website for [Willmore Lumber](https://willmorelumber.com), a family-run lumber mill in Idaho with 50+ years in business. Built as a fast, mobile-friendly static site to showcase products, services, pricing, and customer reviews.

**Live site:** [willmorelumber.com](https://willmorelumber.com)

## Highlights

- **Next.js App Router** with static export (`output: "export"`) for fast loads and simple hosting
- **Fully responsive** navigation — desktop toolbar with nested menus, mobile drawer with collapsible sections
- **15+ content pages** for products (rough-cut lumber, beams, flooring, siding, etc.) and services (custom cuts, delivery)
- **Product grid and testimonials carousel** on the home page, with a clear call-to-action (tap-to-call, quote-request email) in the hero and footer
- **CI/CD** via GitHub Actions — build on push to `main`, deploy to GitHub Pages with a custom domain
- **SEO & PWA basics** — per-page titles/descriptions/canonical URLs, Open Graph tags, `LocalBusiness` structured data (JSON-LD), generated `sitemap.xml`, `robots.txt`, web app manifest, and WebP images

## Tech Stack

| | |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/), [Material UI 6](https://mui.com/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Carousel | [Swiper](https://swiperjs.com/) (testimonials) |
| Hosting | [GitHub Pages](https://pages.github.com/) |
| CI | GitHub Actions |

## Features

- Dark-themed MUI design system with custom palette and typography (Roboto via `next/font`)
- Reusable layout components (`Nav`, `Footer`, `DefaultPageWidth`, `ContactUs`, `BusinessHours`)
- Product gallery with lazy-loaded images and link to a full Google Photos album
- Google review integration — carousel of testimonials plus link to leave a review
- Accessible navigation patterns (drawer focus management, active route highlighting)

## Project Structure

```
src/
├── app/              # App Router pages (one route per product/service)
├── components/       # Shared UI (nav, footer, showcase, reviews, etc.)
├── hooks/            # Client hooks (e.g. Swiper configuration)
└── theme.ts          # MUI theme
public/               # Static assets (images, icons, manifest)
.github/workflows/  # Deploy pipeline
```

## Getting Started

**Prerequisites:** Node.js 20+

```bash
# Install dependencies (npm or pnpm)
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production static build → `out/` |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |

## Deployment

Pushes to `main` trigger [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml), which:

1. Installs dependencies and runs `next build`
2. Uploads the static `out/` directory as a Pages artifact
3. Deploys to GitHub Pages

The custom domain is configured via [src/CNAME](src/CNAME) (`willmorelumber.com`).

## Context

This is a real-world project built for a local business — not a demo template. The content, photography, and customer reviews reflect an operating lumber mill. The goal was a maintainable, performant site that works well on phones (many customers browse on-site or in the field) without the overhead of a CMS or backend.

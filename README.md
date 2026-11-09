# Willmore Lumber

Marketing website for [Willmore Lumber](https://willmorelumber.com), a family-run lumber mill in St. Anthony, Idaho with 50+ years in business. It's a fast, mobile-friendly static site built to turn word-of-mouth referrals into phone calls: products, pricing guidance, hours, directions, and customer reviews, all one tap away.

**Live site:** [willmorelumber.com](https://willmorelumber.com)

## Goals

- **Near-zero cost.** Static export hosted on GitHub Pages; no server, database, or CMS.
- **Easy to contact.** Tap-to-call and a prefilled quote-request email in the hero, nav drawer, footer, and contact/pricing pages.
- **Easy to find.** Search-friendly metadata and structured data so the business shows up well for local queries.
- **Works on a phone.** Many customers browse in the field or at the mill.

## Highlights

- **Next.js App Router** with static export (`output: "export"`).
- **Responsive design** with a compact header, a mobile drawer, and a product grid that adapts from one to three columns.
- **Search and sharing:**
  - per-page titles, descriptions, and canonical URLs, and one `<h1>` per page
  - Open Graph/Twitter tags
  - `LocalBusiness` JSON-LD (address, phone, hours)
  - a generated `sitemap.xml` and `robots.txt`
- **Accessible by default:** semantic headings, descriptive alt text, keyboard-friendly navigation, and smooth scrolling that respects `prefers-reduced-motion`.
- **Contact options without a backend:** `tel:` links and a `mailto:` link with a prefilled quote template, plus an embedded map and directions link.
- **CI/CD:** GitHub Actions lints, builds, and deploys to GitHub Pages on every push to `main`.

## Tech Stack

|           |                                                                                            |
| --------- | ------------------------------------------------------------------------------------------ |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, static export)                              |
| UI        | [React 19](https://react.dev/), [Material UI 6](https://mui.com/) with a custom dark theme |
| Language  | [TypeScript](https://www.typescriptlang.org/)                                              |
| Carousel  | [Swiper](https://swiperjs.com/) (customer testimonials)                                    |
| Tooling   | ESLint, Prettier                                                                           |
| Hosting   | [GitHub Pages](https://pages.github.com/)                                                  |
| CI        | GitHub Actions                                                                             |

## Project Structure

```
src/
├── app/              # App Router pages (one route per product/service), sitemap, robots, theme CSS
├── components/       # Shared UI (nav, footer, hero helpers, product grid, reviews, quote buttons, etc.)
├── hooks/            # Client hooks (e.g. Swiper configuration)
└── theme.ts          # MUI theme
public/               # Static assets (images, icons, manifest)
.github/workflows/    # Lint, build, and deploy pipeline
```

## Getting Started

**Prerequisites:** Node.js 20.9+ (CI uses Node 22)

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack)    |
| `npm run build` | Production static build into `out/` |
| `npm run lint`  | Run ESLint                          |

To preview the production build locally, run `npm run build` and then serve the `out/` directory with any static file server (for example `npx serve out`).

## Deployment

Pushes to `main` trigger [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml), which:

1. Installs dependencies with `npm ci`
2. Runs `npm run lint`
3. Builds the static site with `next build`
4. Uploads `out/` as a Pages artifact and deploys it to GitHub Pages

The site is served at `willmorelumber.com` using a custom domain on GitHub Pages.

## Updating Content

- **Products and services:** each has its own folder under `src/app/` with a `page.tsx` that holds the copy, images, and page metadata.
- **Business details** (phone, hours, address): update them in the footer components in `src/components/` and in the `LocalBusiness` JSON-LD in `src/app/layout.tsx`.
- **Reviews:** edit the list in `src/components/reviews.tsx`.
- **Images:** add WebP files to `public/`. Photos shown full-width should be about 2000px wide; images in half-width columns can be about 1300px.

## Context

This is a real-world project built for a local business, not a demo template. The content, photography, and customer reviews reflect an operating lumber mill. The goal was a maintainable, performant site without the overhead of a CMS or backend.

# The Gurkha Grills website

Phase 1: a single-page pre-launch site for a Nepali street-food trailer.
Same stack as the Founders Toastmasters site: **Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui (Radix) + framer-motion + lucide-react**, deployed to **GitHub Pages**.

## Commands
| Command | What it does |
|---|---|
| `npm run dev` | Dev server at http://localhost:8080 |
| `npm run build` | Production build in `dist/` |
| `npm run prerender` | Bakes the rendered page into `dist/index.html` for SEO (needs Chrome) |
| `npm run deploy` | Build + prerender + push `dist/` to the `gh-pages` branch |
| `npm run build:share` | Single-file build in `share-preview/` for the private client-review link |
| `npm run lint` | ESLint |

Pushing to `main` also deploys via `.github/workflows/deploy.yml` (GitHub Pages → Source: GitHub Actions).
Without a custom domain the site is served from `/<repo>/`; add `public/CNAME` with the domain to serve from `/`.

## Editing content
| What | File |
|---|---|
| Name, tagline, launch status, email, socials, currency, form endpoints | `src/config/site.ts` |
| Menu categories, dishes, prices, veg/spice tags, dish photos | `src/data/menu.ts` |
| Locations / schedule | `src/data/schedule.ts` |
| Gallery photos and captions | `src/data/gallery.ts` |
| Images | `src/assets/` (WebP) |
| Brand colours and fonts | `src/index.css`, `tailwind.config.ts` |

## Forms
Set `forms.notifyEndpoint` / `forms.cateringEndpoint` in `src/config/site.ts` (e.g. a Formspree URL).
While empty, forms validate and show a "preview only" message without sending anything.

## Going dynamic (Phase 2)
Components read data only through `src/hooks/use-content.ts`. Swap those hooks for React Query
(`useQuery`, already installed) calls to a headless CMS or your own API; the return shape already matches.

# Portfolio — Nagasai Vamsi Chilakalapudi

Personal portfolio site for a Full-Stack AI Engineer. Single-page scroll (Hero, About, Skills,
Experience, Projects, Contact) plus dynamic project case-study pages and a résumé view.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** (navy `#1F4E79` accent, class-based dark mode)
- **React Router** — `/`, `/projects/:slug`, `/resume`, and a 404
- **Framer Motion** — tasteful fade/slide-on-scroll (respects `prefers-reduced-motion`)
- **lucide-react** icons, **react-helmet-async** for per-page SEO

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Editing content

All content lives in typed files under `src/content/` — no CMS:

- `profile.ts` — name, title, tagline, about, email/phone, social links, résumé path
- `skills.ts` — grouped skill chips
- `experience.ts` — timeline entries
- `projects.ts` — project case studies (the `/projects/:slug` pages read from here)
- `nav.ts` — anchored nav sections

## Things to replace before going live

1. **Résumé** — `public/resume.pdf` is a generated placeholder. Drop in the real PDF (same name).
2. **Contact form** — set `FORMSPREE_ENDPOINT` in `src/components/ContactForm.tsx` to a
   [Formspree](https://formspree.io) form URL. Until then the form falls back to opening a
   pre-filled `mailto:` to the address in `profile.ts`. A hidden honeypot field blocks bots.
3. **Domain** — update the production URL in three places: `src/components/Seo.tsx`
   (`SITE_URL`), `public/robots.txt`, and `public/sitemap.xml` (currently `https://vamsi.dev`).
4. **OG image** — `public/og-image.svg` is provided. Some social scrapers prefer PNG/JPG; export
   a 1200×630 PNG and point `Seo.tsx`'s `DEFAULT_IMAGE` at it for best link previews.

## Deploy (static SPA)

Build command `vite build`, output `dist`. SPA deep-link rewrites are pre-configured:

- **Vercel** — `vercel.json` rewrites all routes to `/index.html`.
- **Netlify** — `public/_redirects` does the same.

## Notes

- `lucide-react` is pinned to `0.408.0` (the installed `1.x` dropped the GitHub/LinkedIn brand
  icons and changed the `size` prop type).
- JSON-LD `Person` schema and the no-flash theme script live in `index.html`.

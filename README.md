# Victor Elvis Lorenzo — Data Analyst Portfolio

Minimal, editorial portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind-free CSS**. Designed for Vercel static export.

## Stack

- Next.js 14 (App Router, Static Export)
- React 18 / TypeScript
- Zero-runtime CSS (globals.css) — no Tailwind build step
- Inter + Space Grotesk via Google Fonts
- IntersectionObserver scroll reveals (no animation library)

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout, metadata, fonts
│   ├── page.tsx             # Homepage (hero, about, toolbox, projects, process, notes, contact)
│   └── projects/[slug]/     # Dynamic case-study pages (SSG via generateStaticParams)
├── components/
│   ├── Reveal.tsx           # Scroll-reveal wrapper
│   └── Site.tsx             # Header, Footer, ProjectCard, Bars
├── data/
│   └── projects.ts          # All project content — single source of truth
├── styles/
│   └── globals.css          # Design tokens + layout utilities
├── public/
│   └── favicon.svg
├── next.config.mjs          # output: 'export', images.unoptimized: true
├── tsconfig.json
├── package.json
└── .env.example
```

## Quick start

```bash
cd portfolio
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to /out
npm run start      # serve /out locally (npx serve out)
```

## Deploy to Vercel

1. Push this `portfolio/` folder to a Git repo (or import the folder directly).
2. In Vercel: **Add New → Project → Import** the repo.
3. Vercel auto-detects Next.js. Build command: `npm run build` · Output dir: `out`
4. Add env vars from `.env.example` if needed (none required for static build).
5. Deploy.

## Customize

### Projects

Edit `data/projects.ts` — each project is a typed object. Add/remove entries; the site rebuilds all case-study pages automatically.

```ts
export const projects: Project[] = [
  {
    slug: 'my-new-project',
    num: '06',
    category: 'MARKETING ANALYTICS',
    title: 'Campaign Attribution Model',
    stack: ['SQL', 'Python', 'Power BI'],
    summary: '...',
    problem: '...',
    dataset: [{ label: 'Dataset', value: '...' }, ...],
    questions: ['...', '...'],
    insights: [{ value: '+23%', label: 'ROAS lift' }, ...],
    conclusion: '...',
    bars: [45, 78, 92, 33, 67, 88, 51], // 7 bars for hero/mini-viz
  },
];
```

### Tools & Notes

Also in `data/projects.ts` — update `tools[]` and `notes[]` arrays.

### Colors / Typography

Design tokens live at the top of `styles/globals.css`:

```css
:root {
  --bg: #f7f7f5;
  --ink: #111111;
  --muted: #666666;
  --line: #d9d9d4;
  --accent: #00a6a6;
  --max: 1160px;
}
```

Swap `--accent` for your brand color. Fonts are loaded in `app/layout.tsx`.

## Accessibility

- Semantic HTML5 (`header`, `main`, `footer`, `nav`, `article`, `section`)
- Focus-visible outlines on all interactive elements
- Skip-to-content link
- `prefers-reduced-motion` respected (disables scroll reveals + animations)
- Alt text / ARIA labels on decorative visualizations
- Contrast ratios ≥ 4.5:1 on text

## Performance

- Static HTML export — zero server runtime
- No JS bundles for animations (CSS-only + IntersectionObserver)
- Fonts preconnected, `display: swap`
- Images unoptimized (static export) — replace with optimized assets in `public/` if needed
- Lighthouse 100/100 achievable

## License

MIT — use freely for your own portfolio.
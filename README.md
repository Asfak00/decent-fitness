# Decent Fitness — Website

Frontend for **Decent Fitness**, a gym in Chandrima Model Town, Mohammadpur, Dhaka.
React 19 · Vite 8 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide.

Every gym fact (contact, prices, schedule, results) comes from the gym's public Facebook page — see
[GYM_BRAND_RESEARCH.md](GYM_BRAND_RESEARCH.md) for sources and what still needs confirming.

## Run locally

Requires Node 20+.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:5173.

## Production build

```bash
npm run build
```

Outputs a static site to `dist/` (typecheck runs first). Preview it with:

```bash
npm run preview
```

## Deploy

`dist/` is plain static files — host it anywhere:

- **Netlify / Vercel / Cloudflare Pages:** build command `npm run build`, output directory `dist`.
- **Shared hosting (cPanel etc.):** upload the contents of `dist/` to `public_html/`.

### Link previews (WhatsApp, Facebook, X)

Previews need the site's public address so the preview image URL is absolute.

1. Copy `.env.example` to `.env` and set `SITE_URL=https://your-domain` (no trailing slash).
2. Run `npm run build`.

The build fills `og:url`, `og:image`, `twitter:image`, the canonical link and the JSON-LD with that
address, and writes `robots.txt` + `sitemap.xml`. On **Netlify, Vercel and Cloudflare Pages** the address is
detected automatically. Without it, the build prints a warning and previews show text but no image.

After going live, refresh the cached preview with the
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) (WhatsApp uses the same data).

The preview image is `public/assets/brand/og-image.jpg` (1200×630, ~85 KB). Icons live in
`public/assets/icons/`, `public/favicon.ico` and `public/site.webmanifest`.

## Editing content

All content lives in `src/data/` — no component changes needed:

| File | What it controls |
|---|---|
| `gym.ts` | Name, address, phone, **WhatsApp number**, email, social links, **shift times**, WhatsApp message per button |
| `packages.ts` | Admission fee, packages, prices (`price: null` → "Contact for pricing"; `visible: false` hides a package) |
| `transformations.ts` | Before/after results |
| `trainers.ts` | Trainer profiles (empty → section shows a "talk to our trainer" panel) and the inspiration wall |
| `videos.ts` | Reels (Facebook URL + poster). Add `file: '/assets/videos/x.mp4'` to self-host |
| `gallery.ts` | Gallery images and filter categories |
| `training.ts` | Facilities and training goals |
| `faq.ts` | Questions and answers |
| `media.ts` | Shared image definitions |

### Images

Images are WebP in `public/assets/<folder>/<name>-<width>.webp`. To add one:

1. Export it at 2 widths (e.g. 800 and 1600 px) as WebP: `my-photo-800.webp`, `my-photo-1600.webp`.
2. Reference it as `{ base: '/assets/gallery/my-photo', widths: [800, 1600], ratio: width / height, alt: '…' }`.

### WhatsApp

Every CTA calls `whatsappLink(intent)` (`src/utils/whatsapp.ts`), which opens
`https://wa.me/8801781539998?text=<URL-encoded message>`. Messages are in `whatsappMessages` in `gym.ts`.

## Project structure

```
public/assets/   brand · hero · gym-interior · equipment · workouts · trainers
                 transformations · testimonials · videos · gallery · icons
src/
  components/    one file per section + ui/ primitives (Picture, Reveal, WaButton, Icons)
  data/          all editable content
  hooks/         scroll, active section, scroll-lock, keyboard, live shift (Dhaka time)
  utils/         image srcset + WhatsApp link helpers
  styles/        Tailwind theme tokens (from the logo colours)
_raw/            original downloads from Facebook (git-ignored, not shipped)
```

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (Framer `MotionConfig reducedMotion="user"` + CSS).
- Lightbox: ← → Esc and swipe. Menu and modals close with Esc and lock page scroll.
- Hero images are preloaded; everything else is lazy-loaded responsive WebP.
- Reels load Facebook's player only when opened; nothing autoplays with sound.

# kms.deals

The wholesale network where surplus meets demand. Marketing site for
the kms.deals platform, built on Next.js (App Router).

## Brand & design

The visual identity is canonical in [`BRAND.md`](BRAND.md). Quick
reference:

- **Anchor color:** Sherwin-Williams Sealskin **`#48423C`** (replaces
  black throughout the system — text, headings, primary buttons, the
  K-square mark, the favicon tile).
- **Accent:** KMS blue **`#00AEEF`**, used only for the wordmark dot,
  focus rings, and reserved interactive states.
- **Surfaces:** `#FAFAFA` page, `#FFFFFF` cards, `#F5F5F5` subtle.
- **Borders:** Hairline `1px` derived from Sealskin's RGB:
  `rgba(72, 66, 60, 0.07 / 0.12 / 0.20)`.
- **Type:** Inter Variable, sentence case everywhere, no exclamation
  marks. Wordmark is always lowercase: `kms.deals`.
- **Motion:** `cubic-bezier(0.16, 1, 0.3, 1)`, durations 120/180/240ms.

All design tokens live in [`app/globals.css`](app/globals.css) and are
the source of truth. **Never hardcode hex values in components** —
update the token instead.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — homepage with the hero shipment-map and value/sellers/buyers/
  testimonials/CTA sections
- `/sell` — for sellers
- `/buy` — for buyers
- `/company` — about the network and leadership
- `/contact` — contact form, hours, FAQ

## Repo layout

```
app/
├── page.js                  # home
├── layout.js                # Inter font + metadata
├── globals.css              # design tokens + component styles
├── icon.svg                 # favicon (Sealskin tile + dual-dot)
├── buy/, sell/,
│   company/, contact/       # routes
└── components/
    ├── Header.js            # K-square mark, nav, CTAs
    ├── Footer.js            # brand block, link groups
    ├── Wordmark.js          # kms.deals wordmark with accent dot
    ├── Icon.js              # Lucide-style line icons (1.75 stroke)
    ├── ShipmentMap.js       # SVG shipment-arc background animation
    └── ContactForm.js       # contact form
```

## Deployment

The site auto-deploys to Vercel on push to `main`. Vercel project is
linked to this repo.

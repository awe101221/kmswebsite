<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Brand & design rules

The visual identity for kms.deals is documented in [`BRAND.md`](BRAND.md).
**Read it before changing any visual surface** (marketing site, ads,
decks, in-product UI, social assets).

Non-negotiables:

- **Dark color is Sealskin (`#48423C`), never black.** Sealskin is the
  brand anchor. Pure black, `#000`, `#0A0A0A`, or any other near-black
  is wrong. The token is `--text-primary` in
  [`app/globals.css`](app/globals.css).
- **Single accent — KMS blue (`#00AEEF`).** Used only on the wordmark
  dot, focus rings, and reserved interactive states. Never on body
  text, primary CTAs, or card backgrounds.
- **Tokens, not hex values.** Color, spacing, radii, motion, and type
  scale all live in `app/globals.css`. Use the CSS variables. Never
  hardcode `#48423C` or `rgba(0,0,0,...)` inside a component.
- **The wordmark is `kms.deals` (lowercase).** Rendered through
  [`app/components/Wordmark.js`](app/components/Wordmark.js) with the
  period as an accent dot. Do not substitute "KMS Wholesale", "KMS
  Deals", or any other form. In prose, write `kms.deals` even at the
  start of a sentence.
- **No emoji as decorative icons. No stock photography. No gradient
  blobs.** See `BRAND.md §8` for the full marketing/product split.
- **Sentence case everywhere.** "Find deals", not "Find Deals". No
  exclamation marks.

When updating the brand, edit the tokens in `app/globals.css` first
and `BRAND.md` second so the docs stay in sync with the code.

# kms.deals — Brand & design system

This is the source of truth for the kms.deals visual identity. It applies to
the marketing site, the kms-brain product, page ads, decks, social assets,
and any other surface that carries the brand. When in doubt, defer to the
tokens in [`app/globals.css`](app/globals.css) — this document explains
**why** they exist and how to use them.

---

## 1. Color

### Primary anchor — Sealskin

The single most important brand color. Replaces what most products would
treat as "black." It is **never** substituted with `#000`, `#0A0A0A`, or
any other near-black.

| Token | Hex | Usage |
|---|---|---|
| **Sealskin** | `#48423C` | Body text, headings, primary button background, the K-square logo mark, dark surfaces, the favicon tile. Sherwin-Williams SW 7675. |
| Sealskin 80 | `#5C544C` | Primary button hover. |
| Sealskin 65 | `#6F665E` | Primary button active. |

Why Sealskin? Pure black on a white surface reads cold and template-y.
Sealskin is a deep, warm brown-gray that signals premium and considered.
The whole brand should feel "warm dark" rather than "harsh black."

### Surfaces

| Token | Hex | Usage |
|---|---|---|
| `--bg-app` | `#FAFAFA` | Page background, behind everything. |
| `--bg-surface` | `#FFFFFF` | Cards, modals, popovers. |
| `--bg-subtle` | `#F5F5F5` | Hover states, secondary buttons, input backgrounds. |
| `--bg-muted` | `#EFEFEF` | Pressed states, sidebar selected. |

### Borders (hairline)

All borders are hairline (`1px`) and derived from Sealskin's RGB so they
inherit the warmth.

| Token | Value |
|---|---|
| `--border-subtle` | `rgba(72, 66, 60, 0.07)` |
| `--border-default` | `rgba(72, 66, 60, 0.12)` |
| `--border-strong` | `rgba(72, 66, 60, 0.20)` |

Never use heavier borders or drop shadows where a hairline + whitespace
will do the work.

### Text

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#48423C` (Sealskin) | All body and heading text. |
| `--text-secondary` | `#525252` | Labels, captions, secondary copy. |
| `--text-tertiary` | `#A3A3A3` | Placeholders, timestamps, eyebrow labels. |
| `--text-inverse` | `#FAFAFA` | Text on Sealskin (e.g., primary button). |

### Accent — KMS blue

A single accent color, used **sparingly**. Goal is to never have more than
one accent element fighting for attention on a screen.

| Token | Hex | Usage |
|---|---|---|
| `--accent-500` | `#00AEEF` | The dot in the `kms.deals` wordmark. Focus rings. The accent dot in the favicon. |
| `--accent-600` | `#0090C7` | Reserved (link hover, active accent state). |
| `--accent-700` | `#006FA0` | Reserved (pressed accent state). |
| `--accent-50` | `#E6F7FE` | Reserved (very light tints). |

The accent is **never** used on body text, primary CTAs, card backgrounds,
or borders. The marketing hero may use it on a status dot or focus state,
nothing else.

### Decorative warmth

For the shipment-map background and any similarly atmospheric element on
marketing pages, use neutral grays:

| Use | Hex |
|---|---|
| Background dots | `#9CA3AF` |
| Background arcs / endpoint rings | `#6B7280` |

These do **not** participate in the brand identity — they are decoration
masked behind content.

---

## 2. Typography

**Font family.** Inter Variable, loaded via `next/font/google` in
[`app/layout.js`](app/layout.js). Stylistic sets `cv11`, `ss01`, `ss03`
are enabled in `body` for the cleaner alternates.

```
--font-sans: var(--font-inter), "Inter Variable", "Inter",
             -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### Scale

| Element | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|
| Hero `h1` | `clamp(2.75rem, 6vw, 4.5rem)` | 600 | `-0.04em` | 1.02 |
| Section `h2` | `clamp(1.875rem, 3.4vw, 2.5rem)` | 600 | `-0.03em` | 1.1 |
| Card title | 18–22px | 600 | `-0.015em` to `-0.025em` | 1.2 |
| Body | 14px | 400 | 0 | 1.5–1.6 |
| Hero subtitle | 18px | 400 | `-0.012em` | 1.55 |
| Eyebrow label | 11px | 500 | `0.14em–0.2em` UPPERCASE | — |
| Big numerals | 32–68px | 500 | `-0.045em` to `-0.05em` | 1.0 |

Numbers in stats and tables always use tabular figures
(`font-feature-settings: "tnum"`).

### Voice & tone

- **Sentence case** for buttons, labels, headlines. Never Title Case.
  "Find deals", "Apply to buy", "Send message" — never "Find Deals".
- **No exclamation marks.** No "Awesome!" or "Oops!".
- **Verbs for actions.** "Create", "Add", "Invite", "Connect" — not
  "New record" or "Get started" (when "Start" or "Connect" is more direct).
- **Specific nouns.** "12 deals" beats "12 items". "Sarah Chen" beats
  "User #4821".
- **Errors are facts, not apologies.** "This email is already in use."
  Not "Oh no! Something went wrong."
- **Brand name in prose.** Always lowercase: `kms.deals`. Even at the
  start of a sentence. The wordmark IS the brand name.

---

## 3. Logo & wordmark

### Wordmark

`kms.deals` rendered through the [`Wordmark`](app/components/Wordmark.js)
component. The period is a 0.34em SVG circle filled with `--accent-500`.
The wordmark is the brand mark — never substitute a different
representation.

Three variants:
- Default: 15px, weight 600
- `wordmark--lg`: 18px (used in the footer)
- `wordmark--xl`: `clamp(1.5rem, 3vw, 2rem)` (display contexts)

### K-square mark

A 24×24px Sealskin tile (`6px` radius) with a white "K" inside. Used
left of the wordmark in the header, and as the favicon tile. Mirrors the
mark used in kms-brain so the marketing→app handoff feels seamless.

### Favicon

[`app/icon.svg`](app/icon.svg) — 32×32 Sealskin tile with two dots:
neutral white origin and accent-blue destination. The two-dot motif
echoes the buyer/seller match metaphor.

### Don'ts

- Never re-color the K-square outside Sealskin.
- Never render the wordmark without the accent dot.
- Never use the wordmark in Title Case ("Kms.Deals") or all caps
  ("KMS.DEALS").

---

## 4. Spacing, radii, shadows

**Spacing.** 4px base. Use the `--space-*` tokens in
[`app/globals.css`](app/globals.css). Never invent custom values.

**Radii.**

| Use | Token | Value |
|---|---|---|
| Pills, chips | `--radius-pill` | 9999px (avatars and status only) |
| Inputs, buttons, dropdowns | `--radius-md` | 6px |
| Sidebar items, table cells | `--radius-sm` | 4px |
| Cards, modals | `--radius-lg` | 10px |
| Side-peek, large containers | `--radius-xl` | 12px |

Never use `>12px` radii in the product UI. Never use `rounded-full`
except on avatars and circular icon buttons.

**Shadows.** Hairline borders carry most of the visual weight. Shadows
are very subtle:

```
--shadow-sm:    0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md:    0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
--shadow-lg:    0 4px 8px rgba(0, 0, 0, 0.04), 0 12px 32px rgba(0, 0, 0, 0.10);
```

The primary button has a Sealskin-tinted shadow on hover. Never apply
shadows to anything that isn't elevated (modal, dropdown, tooltip).

---

## 5. Motion

One ease curve, three durations.

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default. |
| `--dur-fast` | 120ms | Hover, focus, active. |
| `--dur-mid` | 180ms | Dropdowns, tooltips, popovers. |
| `--dur-slow` | 240ms | Modals, side-peek, page transitions. |

Never animate longer than 240ms in the UI. Marketing site can be
slightly more cinematic — the shipment map runs on a 10s loop — but
nothing bouncy and nothing pulsing on purpose.

Always respect `prefers-reduced-motion: reduce`.

---

## 6. Iconography

- **Library:** Lucide-style line icons, hand-rolled in
  [`app/components/Icon.js`](app/components/Icon.js).
- **Stroke width:** `1.75`. Never `2` (chunky) or `1` (fragile).
- **Size:** 16px default, 14px in dense contexts, 20px in headers.
- **Color:** `--text-secondary` by default; `--text-primary` on hover or
  active state.
- **No filled icons** except for tiny status dots.
- **No multi-color, no 3D, no emoji** as decorative icons. Anywhere.

---

## 7. Component patterns

### Button

| Variant | Bg | Text | Border |
|---|---|---|---|
| `btn--primary` | Sealskin | White | none |
| `btn--secondary` | white | Sealskin | hairline default |
| `btn--ghost` | transparent | secondary text | none |

Sizes: 28px (sm), 32px (default), 40px (`btn--large`, hero CTAs).

### Cards

White surface, hairline border, `--radius-lg` (10px), no shadow.
Generous internal padding (`--space-8` to `--space-10`). Subtle
background tint on hover (`--bg-subtle`).

In-card CTAs are **uppercase tracked text-links** with an arrow, not
buttons. Format: `GET STARTED →`. This pattern matches the kms-brain
app's `START INGESTION→` style and creates the seamless handoff.

### Section eyebrows

11px UPPERCASE with `0.14em–0.2em` letter-spacing, in
`--text-tertiary`. Used above headlines on inner-page heroes
("FOR SELLERS", "FOR BUYERS", "WHAT WE BELIEVE", etc.).

---

## 8. Marketing vs. product UI

| | Marketing site (kms.deals) | Product (kms-brain) |
|---|---|---|
| Hero headlines | Display 64–72px | Up to 24px |
| Sections | Generous (`py-20`–`py-24`) | Dense |
| Background visuals | Allowed (shipment-map) | Forbidden |
| Animation | Slow scroll-triggered fades, 10s ambient loops | Snappy 120/180/240ms only |
| Logo wall | Allowed | n/a |
| Stock photography | **Never.** Marketing forbids "diverse smiling team in conference room." | n/a |
| Decorative gradients in foreground | Forbidden | Forbidden |
| Decorative emoji or 3D shapes | Forbidden | Forbidden |

Marketing pages can show product screenshots inside a stylized browser
frame with a soft drop shadow. Use looped `<video playsinline muted loop>`
for product motion — never animated GIFs.

---

## 9. The smell test

Before shipping any new screen, page, ad, or asset, ask:

1. Is the dark color **Sealskin**, not black? ✓
2. Is the accent used only on focus rings, the wordmark dot, and
   reserved interactive states? ✓
3. Is body text 14px or smaller (in product) / 16–18px (in marketing
   prose)? ✓
4. Are borders hairlines at low contrast? ✓
5. Are radii ≤ 12px everywhere? ✓
6. Are buttons sentence-case? ✓
7. Could a user click "Sign in" on the marketing site and not feel a
   visual jolt landing in kms-brain? ✓

If any answer is no, it isn't on-brand yet.

---

## 10. Where the tokens live

- **Color, type, motion, radius tokens:** [`app/globals.css`](app/globals.css)
  — `:root` block at the top. This is the canonical source of truth.
- **Wordmark component:** [`app/components/Wordmark.js`](app/components/Wordmark.js)
- **Favicon mark:** [`app/icon.svg`](app/icon.svg)
- **Icon set:** [`app/components/Icon.js`](app/components/Icon.js)
- **Shipment-map visualization:** [`app/components/ShipmentMap.js`](app/components/ShipmentMap.js)

When updating the brand, update the tokens in `globals.css` first, this
document second. Never hardcode a hex value in a component when a token
exists.

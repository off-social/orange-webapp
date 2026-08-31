# Home hero: replace the video with the Advanced Textile Fabric Printer panel

**Date:** 2026-08-03
**Status:** approved

## Problem

The home page opens with an autoplaying `/homePageVideo.mp4` behind a frosted-glass
card. The card carries the headline "Built with Precision. Proven in Performance.",
a supporting line, and the site's two primary calls to action.

The video and the card are both going away. What replaces them is the panel that
already opens the products page: the "Advanced Textile Fabric Printer" artwork,
heading and specification line. The two calls to action stay, moving to sit under
the specification line.

## Scope

In scope:

- A new home hero built from the products panel's design, with the two buttons
  below the description.
- Removing the video, the frosted card, and the copy the card held.
- Correcting the home page heading hierarchy around the new hero.

Out of scope:

- `app/products/ProductsHero.tsx`. Its first slide is the design being copied and
  it stays exactly as it is, carousel and all.
- Every other section of the home page.

## Design

### New component

The hero moves out of `components/home/Hero.tsx` into
`components/home/HomeHero.tsx`. `Hero.tsx` is 597 lines and holds the whole home
page; editing the hero in place would only add to it, while a separate file gives
the hero one purpose and shrinks its host.

`app/products/AdvancedTextileHero.tsx` becomes that new file. It is already the
same design, it is imported nowhere, and moving it removes a duplicate rather
than adding a third copy of the same hero. It gains `"use client"`, since the
consultation button opens a modal through a context hook.

### Layout

Three responsive blocks, matching the products panel's proportions exactly:

| Breakpoint       | Height | Image                   | Text placement                    |
| ---------------- | ------ | ----------------------- | --------------------------------- |
| desktop (lg+)    | 800px  | `/productPageImg.webp`  | `top: 305px, left: 121px`         |
| tablet (sm–lg)   | 600px  | `/productPageImg.webp`  | bottom-anchored, over a dark fade |
| mobile (xs)      | 620px  | `/prductimgMobile.webp` | bottom-anchored, over a dark fade |

The desktop image carries `priority`, because it is the first thing above the fold
on the site's entry page.

Copy is unchanged from the products panel: "Advanced" in white, "Textile Fabric
Printer" in the existing gradient, then "Equipped with 16 Kyocera industrial
printheads, it delivers print speeds of Upto 2,000 LM/Day".

### Buttons

Both keep the styling they have today, and sit 16px below the description.

- **Book a Consultation** — white, outlined, calls `openModal()` from
  `ConsultationContext`.
- **Explore Printers** — orange, filled, right-arrow icon, links to `/products`.

On mobile the two share one row at full width (`flex: 1 0 0`), as they do now.
Order is unchanged: consultation first, Explore Printers second.

The current label reads "Book a Consulation" — a missing `t`, and the only
spelling of it on the site. The move corrects it to "Book a Consultation".

### Heading hierarchy

The heading renders as two visual lines. Two `h1` elements would be wrong, so one
`Typography component="h1"` holds both, with the gradient half in a `span`. The
result looks identical and leaves one clean `h1`.

"Digital Printing Ecosystem", currently the `h1` at `Hero.tsx:246`, becomes an
`h2`. The page then reads: `h1` hero, `h2` for each section below it.

### Removals

- The `<video>` element and the frosted-glass card in `Hero.tsx`.
- `useConsultation` and `Link` imports in `Hero.tsx`, unused once the buttons
  leave. Left in place they fail lint.
- `/homePageVideo.mp4` and `/homePageVideo-poster.webp`. Nothing else references
  them, and every file under `public/` ships in a static export, so leaving the
  video behind means shipping it for nothing.

## Verification

The repository has no test framework; `package.json` defines only `dev`, `build`,
`start` and `lint`. So:

- `npm run lint` — passes, confirming no import is left dangling.
- `npm run build` — passes.
- The hero renders correctly at all three breakpoints on the dev server: artwork
  framing, heading, description and both buttons.
- Both buttons work: the consultation modal opens, and Explore Printers navigates
  to `/products`.
- The products page hero is untouched.

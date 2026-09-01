# HANDOFF — Zynergy Website Project

> Context document for continuing this work in a new chat/machine.
> Written 2026-09-01. Everything below is self-contained — no prior chat needed.
> If working with Claude: read this file fully before making changes, and follow
> the **Working preferences** section.

---

## 1. Project goal

Build **zynergy.co.id** — a website-services agency site for the Indonesian market
(selling website packages to UMKM, local businesses, schools, professionals),
modeled on the competitor **https://www.digitalinaja.id/** ("CreativeAI").
User/team: team@deepskill.io.

**Status (2026-09-02): Phase 1 LIVE on https://zynergy-dev.vercel.app**
(Vercel project `zynergy`, personal scope `devdanzen-projects`, no git
integration — deploy via `vercel deploy --prod`). **Phase 2 (Payload CMS 3 +
Postgres) is BUILT and VERIFIED locally**: blog, portofolio, brief-project
lead form, admin panel at `/admin`. See README for local dev workflow
(docker `zynergy-pg`, migrate, seed). Prod deploy of Phase 2 still needs:
Neon Postgres + Vercel Blob (user approval for new services), env vars on
Vercel, `payload migrate` against Neon. Remaining: real content
(TODO(launch)), domain registration (NIB + KTP), Meta Pixel + GA4.

---

## 2. Competitor research (digitalinaja.id, analyzed 2026-09-01)

Business model: attract with pain-point marketing → funnel every CTA into
**WhatsApp deep links with pre-filled messages** (`wa.me/<nr>?text=...`) →
close via free consultation. Yearly package pricing with "free hosting/domain/
maintenance forever" as the hook.

- **Their stack:** Laravel + Inertia.js + React + Radix UI + Tailwind, Vite build
- **Their design:** light theme, orange #E24A1D primary / #FB923C accent,
  Plus Jakarta Sans font, pill section badges, rounded-2xl cards, gradient blobs
- **Their pages:** long landing page + /blog + /portfolio (6 case studies) +
  /brief-project (lead form: business type, budget, deadline, feature checkboxes,
  file upload max 5×8MB) + /login (client area)
- **Their landing sequence (we mirror it — it's a conversion pattern):**
  hero → stats bar (120+ sites, 98% satisfaction, 4.9/5) → tech-logo marquee →
  6 pain-point cards → 6 service segments → 8 why-us cards → 3 pricing tiers
  (500K/800K/1000K per year, middle highlighted) → 6-step process → portfolio →
  6 testimonials → FAQ accordion (8 q) → final CTA → footer
- **Their WhatsApp number:** 6285113251571 (for reference only)

---

## 3. Decisions made (all confirmed by user)

| Decision | Choice |
|---|---|
| Team skills | JavaScript/TypeScript |
| Launch scope | Landing page only; full admin panel later |
| Stack | **Next.js (App Router) + TS + Tailwind + Radix + Framer Motion**, deploy on **Vercel** |
| Phase 2 | **Payload CMS 3** (installs in-repo, same deploy) + **Neon Postgres** + Vercel Blob for uploads |
| Phase 3 | Client login area via Payload auth (only if needed) |
| Design theme | **"Synergy Blue"** — chosen over "Voltage" (dark tech) and "Kinetic Coral" (warm) |
| Rationale | Blue=trust + emerald=growth converts the UMKM market; clearly distinct from competitor's orange |

### Design tokens (implemented in `src/app/globals.css`)

- `primary` #2563EB · `primary-dark` #1D4ED8 · `primary-soft` #EFF4FF
- `secondary` #10B981 (emerald; used for ALL WhatsApp CTAs) · `secondary-dark` #0E9F6E · `secondary-soft` #E7F8F1
- `ink` #0F1B33 (headings) · `muted` #55617A (body) · `surface` #FBFCFE (page bg) ·
  `surface-soft` #F4F7FB (alternating sections) · `line` #E6EAF2 (borders)
- Font: **Plus Jakarta Sans** (next/font, weights 400–800), light theme only
- Patterns kept from competitor: pill badges, rounded-2xl cards + soft shadows,
  highlighted middle pricing tier, sticky floating WhatsApp button

---

## 4. What's built (this repo)

Next.js **16.3.3** (Turbopack, note: NOT 15 — see AGENTS.md about breaking
changes), React 19, Tailwind **v4** (tokens via `@theme` in globals.css, no
tailwind.config), pnpm.
Deps: framer-motion, @radix-ui/react-accordion, lucide-react, clsx, tailwind-merge.

```
src/
├── app/            layout.tsx (font/metadata/Header/Footer/WhatsAppFloat), page.tsx, globals.css
├── content/        ⭐ ALL business data & copy — EDIT HERE, NOT IN COMPONENTS
│   ├── site.ts     name, WA number, waMessages, email, socials, nav
│   └── landing.ts  typed content for every section (hero…finalCta)
├── components/
│   ├── layout/     Header (client: scroll+mobile menu), Footer, WhatsAppFloat
│   ├── sections/   Hero, StatsBar, Problems, Services, WhyUs, Pricing,
│   │               Process, Portfolio, Testimonials, Faq, FinalCta
│   └── ui/         Section, SectionHeading, CtaLink, Reveal (framer),
│                   FaqAccordion (radix), WhatsAppIcon (custom svg — lucide has no brands)
└── lib/            cn.ts (clsx+twMerge), wa.ts (waLink builder)
```

Section anchor ids: beranda, masalah, layanan, keunggulan, paket, proses,
portofolio, testimoni, faq, kontak.

All copy is **original Indonesian** (intent mirrors competitor, wording does not).
Hero visual is a CSS-only browser mockup — no image assets exist yet.

### Verified (2026-09-01)

- `pnpm build` ✅ compiles, type-checks, fully static prerender
- `pnpm lint` ✅ zero warnings
- Zero browser console errors; all 10 sections render; FAQ accordion works
- 10 `wa.me` CTAs with correct pre-filled Indonesian messages
- `.claude/launch.json` exists in repo for dev-server preview (port 3000)

---

## 5. Placeholders — grep `TODO(launch)` in src/content/

| Item | Current placeholder | Action |
|---|---|---|
| WhatsApp number | `6281234567890` in site.ts | Replace with real business number |
| Pricing | Starter 500K / Business 950K (highlighted) / Premium 1.5JT per year | Finalize real prices & benefits |
| Testimonials | 3 fake quotes, "Nama Klien" | **MUST replace with real ones before launch** |
| Portfolio | 3 invented projects w/ gradient thumbnails | Replace with real projects + screenshots |
| Stats | 50+ / 98% / 4.9/5 / 3-7 | Update with real numbers |
| Socials | zynergy.id handles in site.ts | Real URLs or remove |
| Email | halo@zynergy.co.id | Confirm mailbox exists |

---

## 6. Next steps (in order)

1. Fill real content (section 5 above)
2. Add favicon/logo + OG image (`src/app/` — currently default Next icons)
3. **Deploy to Vercel** (repo has git init'd but nothing committed beyond
   create-next-app scaffold — commit first)
4. **Domain:** register zynergy.co.id early — .co.id requires **NIB + KTP**
   via an Indonesian registrar; DNS → Vercel
5. Meta Pixel + GA4 via `next/script` (was deferred; add before running ads)
6. Phase 2: Payload CMS 3 in-repo + Neon Postgres + Vercel Blob →
   blog, dynamic portfolio, brief-project lead form (mirror competitor's form
   fields, listed in section 2), admin panel for staff
7. Phase 3 (optional): client login via Payload auth

---

## 7. Working preferences (user-stated)

Act as a **senior fullstack engineer with clean-code standards**:

- Content/config separated from presentation (single source of truth in `src/content/`)
- Typed content models; small focused components; meaningful names
- Minimal dependencies — hand-roll trivial primitives instead of adding libraries
- Server components by default; `"use client"` only where interactivity requires
- Respect `prefers-reduced-motion`; keep animations subtle & performance-cheap
- Verify with `pnpm build` + `pnpm lint` before declaring anything done
- The codebase must stay maintainable by a JS/TS team as it grows into Phase 2

Communication: user prefers concrete visual mockups over verbal design
descriptions; decisions were made via option-choosing (give recommendations
with clear trade-offs).

---

## 8. Machine-specific notes (old machine — safe to ignore on laptop)

- Old path: `/home/danish/projects/zynergy`; dev preview via
  `/home/danish/projects/.claude/launch.json` (`pnpm --dir zynergy dev`, port 3000)
- Claude memory files on the old machine (`zynergy-website-project.md`,
  `engineering-standards.md`) duplicate what's in this handoff — nothing unique there
- Design-direction mockup HTML (3 theme candidates) was in the session scratchpad —
  disposable; the chosen theme is fully specified in section 3

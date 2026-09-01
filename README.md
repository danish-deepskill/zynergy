# Zynergy — zynergy.co.id

Website jasa pembuatan website profesional. Landing page + CMS (blog,
portofolio, form brief project, admin panel).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Payload CMS 3** (in-repo) + **Postgres** — konten dinamis & admin panel di `/admin`
- **Tailwind CSS v4** — design tokens di [`src/app/(site)/globals.css`](<src/app/(site)/globals.css>) (tema "Synergy Blue")
- **Framer Motion** — animasi reveal-on-scroll
- **Radix UI Accordion** — FAQ
- **lucide-react** — ikon

## Arsitektur

```
src/
├── app/
│   ├── (site)/           # Frontend publik: landing, /blog, /portofolio, /brief-project
│   └── (payload)/        # Admin panel (/admin) + REST API (/api) — scaffold Payload
├── collections/          # Skema Payload: Posts, Projects, Media, Leads, LeadFiles, Users
├── content/
│   ├── site.ts           # ⭐ Satu sumber data bisnis: nomor WA, email, nav, sosmed
│   ├── landing.ts        # ⭐ Seluruh copy & data section landing page (typed)
│   └── brief.ts          # ⭐ Opsi form brief project (dipakai form + collection)
├── components/
│   ├── layout/           # Header, Footer, tombol WhatsApp melayang
│   ├── sections/         # Satu file per section, urutan komposisi di (site)/page.tsx
│   └── ui/               # Primitif reusable: Section, CtaLink, Reveal, dst.
├── migrations/           # Migrasi database Payload (generated)
├── lib/                  # cn(), waLink(), payload client, dst.
└── payload.config.ts     # Konfigurasi Payload CMS
```

**Prinsip:** konten terpisah dari presentasi. Copy statis di `src/content/`,
konten dinamis (artikel, portofolio, leads) di CMS — edit via `/admin`.

## Menjalankan (lokal)

```bash
docker start zynergy-pg   # Postgres lokal (sekali buat: lihat .env.example)
pnpm install
cp .env.example .env.local  # isi PAYLOAD_SECRET (openssl rand -hex 32)
pnpm payload migrate      # terapkan skema database
pnpm seed                 # admin dev (dev@zynergy.local) + konten contoh
pnpm dev                  # http://localhost:3000 — admin di /admin
pnpm build && pnpm lint
```

Ubah skema collection? Jalankan `pnpm payload migrate:create <nama>` lalu
commit file migrasinya, dan `pnpm generate:types`.

## Sebelum launch — cari `TODO(launch)` di src/content/

- [ ] Ganti `whatsappNumber` placeholder dengan nomor bisnis asli
- [ ] Finalisasi harga & benefit paket
- [ ] Ganti testimoni placeholder dengan testimoni klien asli (wajib)
- [ ] Ganti item portofolio dengan proyek asli + screenshot
- [ ] Perbarui angka statistik dengan data asli
- [ ] Isi URL sosial media asli
- [ ] Daftarkan domain zynergy.co.id (butuh NIB + KTP untuk .co.id)
- [ ] Pasang Meta Pixel & GA4 (Phase 1.5)

## Roadmap

- **Phase 2:** Payload CMS (in-repo) + Neon Postgres — blog, portofolio dinamis,
  form brief project dengan upload file
- **Phase 3:** Area login klien (Payload auth)

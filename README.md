# Zynergy — zynergy.co.id

Website jasa pembuatan website profesional (Phase 1: static landing page).

## Stack

- **Next.js 16** (App Router, static output) + **TypeScript**
- **Tailwind CSS v4** — design tokens di [`src/app/globals.css`](src/app/globals.css) (tema "Synergy Blue")
- **Framer Motion** — animasi reveal-on-scroll
- **Radix UI Accordion** — FAQ
- **lucide-react** — ikon

## Arsitektur

```
src/
├── app/                  # Layout (font, metadata, header/footer) + halaman
├── content/
│   ├── site.ts           # ⭐ Satu sumber data bisnis: nomor WA, email, nav, sosmed
│   └── landing.ts        # ⭐ Seluruh copy & data section landing page (typed)
├── components/
│   ├── layout/           # Header, Footer, tombol WhatsApp melayang
│   ├── sections/         # Satu file per section, urutan komposisi di app/page.tsx
│   └── ui/               # Primitif reusable: Section, CtaLink, Reveal, dst.
└── lib/                  # cn() dan waLink() helper
```

**Prinsip:** konten terpisah dari presentasi. Untuk mengubah teks, harga, atau
nomor WhatsApp, cukup edit `src/content/` — tidak perlu menyentuh komponen.

## Menjalankan

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # produksi (static)
pnpm lint
```

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

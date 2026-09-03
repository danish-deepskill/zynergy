/**
 * Software product catalog (Zynergy Digital line). Single source of truth for
 * what exists and where it points. Nothing renders publicly while status is
 * "draft"; when the first product turns "beta"/"live", build /produk pages
 * that list only non-draft entries. Product apps live in their OWN repos and
 * domains ("by Zynergy"); this site only markets and links them.
 *
 * Names below are WORKING NAMES. TODO(launch): validate names & availability.
 */

export type ProductStatus = "draft" | "beta" | "live";

export interface Product {
  slug: string;
  /** Working name until validated. */
  name: string;
  tagline: string;
  description: string;
  /** Who buys it; keep aligned with segments in features.ts/brief.ts. */
  audience: string;
  /** Recurring model per business strategy (subscriptions over one-offs). */
  pricingModel: "subscription" | "one-time" | "freemium";
  status: ProductStatus;
  /** The product's own app/marketing URL once it exists. */
  url?: string;
  /** Internal MVP scope notes; not rendered. */
  mvp: string;
}

export const products: Product[] = [
  {
    slug: "zybalas",
    name: "ZyBalas",
    tagline: "Asisten WhatsApp AI untuk UMKM",
    description:
      "Menjawab pertanyaan pelanggan yang berulang (harga, stok, jam buka, alamat) langsung di WhatsApp, dilatih dari profil bisnis dan katalog Anda.",
    audience: "UMKM & bisnis lokal yang kewalahan membalas chat",
    pricingModel: "subscription",
    status: "draft",
    mvp: "Satu nomor WA terhubung, knowledge base dari form profil bisnis + katalog, eskalasi ke manusia, dashboard percakapan. Validasi: pain #1 di kuis Cek (tanya-berulang).",
  },
  {
    slug: "zymenu",
    name: "ZyMenu",
    tagline: "Menu digital QR + pesan via WhatsApp",
    description:
      "Buat menu digital sendiri, cetak QR untuk meja, pelanggan pesan langsung ke WhatsApp kasir. Tanpa aplikasi, tanpa komisi.",
    audience: "Kafe, resto, dan usaha kuliner",
    pricingModel: "subscription",
    status: "draft",
    mvp: "Editor menu self-serve, halaman menu mobile, QR generator, deep link pesanan WA berformat. Validasi: fitur menu-digital-qr di katalog racik.",
  },
  {
    slug: "zydaftar",
    name: "ZyDaftar",
    tagline: "PPDB & pendaftaran online untuk sekolah",
    description:
      "Form pendaftaran siswa yang rapi: berkas terkumpul, status seleksi jelas, pengumuman tersampaikan. Tanpa spreadsheet berantakan.",
    audience: "Sekolah, lembaga kursus, dan komunitas",
    pricingModel: "subscription",
    status: "draft",
    mvp: "Form builder sederhana, upload berkas, tabel pendaftar + status, notifikasi WA/email, halaman pengumuman. Validasi: fitur ppdb-pendaftaran, vertikal sekolah.",
  },
];

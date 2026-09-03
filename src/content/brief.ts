/**
 * Options for the brief-project lead form, shared by the Leads collection
 * (admin panel labels) and the public form UI.
 */

export interface BriefOption {
  label: string;
  value: string;
}

export const businessTypes = [
  { label: "UMKM / Toko Online", value: "umkm" },
  { label: "Personal Branding", value: "personal" },
  { label: "Bisnis Lokal (kuliner, retail, jasa)", value: "bisnis-lokal" },
  { label: "Sekolah / Lembaga", value: "sekolah" },
  { label: "Company Profile", value: "company-profile" },
  { label: "Lainnya", value: "lainnya" },
] as const satisfies readonly BriefOption[];

export const budgets = [
  { label: "Di bawah Rp500 ribu", value: "lt-500k" },
  { label: "Rp500 ribu – Rp1 juta", value: "500k-1jt" },
  { label: "Rp1 – 3 juta", value: "1-3jt" },
  { label: "Di atas Rp3 juta", value: "gt-3jt" },
  { label: "Belum tahu, butuh saran", value: "unknown" },
] as const satisfies readonly BriefOption[];

export const deadlines = [
  { label: "Secepatnya (di bawah 1 minggu)", value: "asap" },
  { label: "1–2 minggu", value: "1-2minggu" },
  { label: "Dalam 1 bulan", value: "1bulan" },
  { label: "Fleksibel", value: "fleksibel" },
] as const satisfies readonly BriefOption[];

export const features = [
  { label: "Landing page", value: "landing-page" },
  { label: "Toko online / katalog produk", value: "toko-online" },
  { label: "Blog / artikel", value: "blog" },
  { label: "Booking / reservasi", value: "booking" },
  { label: "Integrasi WhatsApp", value: "whatsapp" },
  { label: "Google Maps & SEO lokal", value: "seo-lokal" },
  { label: "Multi-bahasa", value: "multi-bahasa" },
  { label: "Lainnya", value: "lainnya" },
] as const satisfies readonly BriefOption[];

export const briefUpload = {
  maxFiles: 5,
  maxFileSizeMB: 8,
  /** Keep in sync with LeadFiles collection mimeTypes. */
  accept: [
    "image/*",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/zip",
  ],
} as const;

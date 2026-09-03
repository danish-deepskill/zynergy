import { Boxes, type LucideIcon, MonitorSmartphone, Palette } from "lucide-react";

/**
 * Group-level content: the root page presents the three business lines of
 * Zynergy (under PT Sinergi Mitra Abadi Jaya). Line-specific funnels live on
 * their own pages; the root stays a thin gateway.
 */

export interface BusinessLine {
  value: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
  href: string;
  cta: string;
  icon: LucideIcon;
  /** Flagship line gets visual priority on the root page. */
  flagship?: boolean;
}

export const companyHome = {
  eyebrow: "PT Sinergi Mitra Abadi Jaya",
  title: "Satu Sinergi, Tiga Lini Bisnis.",
  subtitle:
    "Zynergy membantu bisnis Indonesia tumbuh lewat solusi digital, desain kreatif, dan pengadaan barang industri.",
} as const;

export const businessLines: BusinessLine[] = [
  {
    value: "digital",
    name: "Zynergy Digital",
    tagline: "Website, Aplikasi & Mobile",
    description:
      "Website profesional untuk UMKM dan bisnis lokal, lengkap dengan CMS, blog, dan integrasi WhatsApp.",
    points: ["Website bisnis & UMKM", "Aplikasi web & mobile", "CMS + admin panel"],
    href: "/digital",
    cta: "Jelajahi Digital",
    icon: MonitorSmartphone,
    flagship: true,
  },
  {
    value: "design",
    name: "Zynergy Design",
    tagline: "Grafis, Branding & Animasi",
    description:
      "Identitas visual yang membuat bisnis Anda dikenali: logo, konten sosial media, sampai animasi.",
    points: ["Logo & identitas brand", "Konten sosial media", "Animasi & motion graphics"],
    href: "/design",
    cta: "Jelajahi Design",
    icon: Palette,
  },
  {
    value: "pengadaan",
    name: "Pengadaan Barang",
    tagline: "Electrical, Industri & Mining",
    description:
      "Lini pengadaan PT Sinergi Mitra Abadi Jaya: supplier kebutuhan kelistrikan, industri, dan pertambangan.",
    points: ["Peralatan kelistrikan", "Kebutuhan industri", "Supply pertambangan"],
    href: "/pengadaan",
    cta: "Lihat Pengadaan",
    icon: Boxes,
  },
];

/** TODO(launch): expand both line pages with real portfolio & detail services. */
export const designPage = {
  badge: "Zynergy Design",
  title: "Desain yang Membuat Bisnis Anda Dikenali",
  subtitle:
    "Dari logo sampai animasi, kami bantu bisnis Anda tampil konsisten dan profesional di semua kanal.",
  services: [
    "Logo & identitas brand",
    "Desain konten sosial media",
    "Materi promosi (brosur, banner, kemasan)",
    "Animasi & motion graphics",
    "Ilustrasi & aset visual website",
  ],
  cta: "Konsultasi Desain via WhatsApp",
} as const;

export const pengadaanPage = {
  badge: "Pengadaan Barang",
  title: "Mitra Pengadaan untuk Kebutuhan Industri",
  subtitle:
    "PT Sinergi Mitra Abadi Jaya melayani pengadaan barang kelistrikan, industri, dan pertambangan dengan proses yang transparan dan tepat waktu.",
  services: [
    "Peralatan & komponen kelistrikan",
    "Kebutuhan operasional industri",
    "Supply & consumable pertambangan",
    "Sourcing berdasarkan spesifikasi tender",
  ],
  cta: "Hubungi Tim Pengadaan",
} as const;

import {
  Boxes,
  Cable,
  Cog,
  type LucideIcon,
  Megaphone,
  MonitorSmartphone,
  Package,
  Palette,
  Router,
  Zap,
} from "lucide-react";

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
  /** Announced but not yet open; renders a "Segera Hadir" card without CTA. */
  upcoming?: boolean;
}

export const companyHome = {
  eyebrow: "PT Sinergi Mitra Abadi Jaya",
  title: "Membantu Bisnis Bertumbuh lewat Teknologi, Desain, dan Pemasaran.",
  subtitle:
    "Zynergy adalah rumah bagi lima lini bisnis PT Sinergi Mitra Abadi Jaya: teknologi, desain, pemasaran, produk software, dan pengadaan barang industri.",
} as const;

export const businessLines: BusinessLine[] = [
  {
    value: "technology",
    name: "Zynergy Technology",
    tagline: "Website, App & Mobile",
    description:
      "Website profesional untuk UMKM dan bisnis lokal, lengkap dengan CMS, blog, dan integrasi WhatsApp.",
    points: ["Website bisnis & UMKM", "Web app & mobile app", "CMS + admin panel"],
    href: "/technology",
    cta: "Jelajahi Technology",
    icon: MonitorSmartphone,
    flagship: true,
  },
  {
    value: "creative",
    name: "Zynergy Creative",
    tagline: "Branding, Design & Motion",
    description:
      "Identitas visual yang membuat bisnis Anda dikenali: logo, konten sosial media, sampai animasi.",
    points: ["Logo & brand identity", "Konten sosial media", "Animasi & motion graphics"],
    href: "/creative",
    cta: "Jelajahi Creative",
    icon: Palette,
  },
  {
    value: "marketing",
    name: "Zynergy Marketing",
    tagline: "SEO, Ads & Social Media",
    description:
      "Mendatangkan pelanggan lewat kanal digital: pencarian Google, iklan berbayar, dan konten sosial media.",
    points: ["SEO & content", "Meta & Google Ads", "Social media management"],
    href: "#",
    cta: "",
    icon: Megaphone,
    upcoming: true,
  },
  {
    value: "products",
    name: "Zynergy Products",
    tagline: "Software Siap Pakai",
    description:
      "Produk software berlangganan yang lahir dari kebutuhan nyata klien kami, sedang dalam pengembangan.",
    points: ["Asisten WhatsApp AI", "Menu digital QR + pesanan", "PPDB & pendaftaran online"],
    href: "#",
    cta: "",
    icon: Package,
    upcoming: true,
  },
  {
    value: "pengadaan",
    name: "Zynergy Supply",
    tagline: "Pengadaan Electrical, Industri & Mining",
    description:
      "Lini pengadaan barang PT Sinergi Mitra Abadi Jaya sejak 2008: komponen jaringan, kelistrikan, dan infrastruktur industri.",
    points: ["Networking & konektivitas", "Structured cabling", "Kelistrikan & MRO"],
    href: "/supply",
    cta: "Jelajahi Supply",
    icon: Boxes,
  },
];

/** TODO(launch): expand both line pages with real portfolio & detail services. */
export const creativePage = {
  badge: "Zynergy Creative",
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

export interface SupplyCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string;
}

export const supplyPage = {
  badge: "Pengadaan Barang",
  title: "Mitra Pengadaan untuk Kebutuhan Industri",
  subtitle:
    "Sejak 2008, PT Sinergi Mitra Abadi Jaya memasok komponen jaringan, kelistrikan, dan infrastruktur untuk industri pertambangan dan manufaktur: berbasis SR/RFQ, sesuai spesifikasi dan part number, tepat waktu.",
  chips: ["Sejak 2008", "Berbasis SR / RFQ", "Sourcing Domestik & Impor"],
  categoriesBadge: "Kategori Supply",
  categoriesTitle: "Apa yang Kami Pasok",
  categories: [
    {
      icon: Router,
      title: "Networking & Konektivitas",
      description: "Komponen jaringan spesialis, termasuk modul impor yang sulit dicari.",
      examples: "SFP & GLC transceiver, Lantronix device server, Cisco AP",
    },
    {
      icon: Cable,
      title: "Structured Cabling",
      description: "Kabel terstruktur dan komponen fiber optic untuk infrastruktur site.",
      examples: "Commscope CAT6A, Netviel fiber optic, Panduit, First Cable",
    },
    {
      icon: Zap,
      title: "Kelistrikan",
      description: "Komponen instalasi listrik untuk panel dan distribusi daya.",
      examples: "MCB Schneider, panel box, kabel N2XY/NYY, Phoenix Contact",
    },
    {
      icon: Cog,
      title: "MRO & Custom Fabrication",
      description: "Spare part maintenance dan peralatan custom dibuat sesuai spesifikasi.",
      examples: "V-belt Bando/Optibelt/Gates, fabrikasi bespoke sesuai kebutuhan",
    },
  ] satisfies SupplyCategory[],
  stepsTitle: "Cara Kerja Pengadaan",
  steps: [
    {
      title: "Terima SR / RFQ",
      description: "Kirim service request atau daftar kebutuhan lengkap dengan spesifikasi.",
    },
    {
      title: "Sourcing & Penawaran",
      description: "Kami cari barang sesuai part number, domestik maupun impor, lalu ajukan penawaran kompetitif.",
    },
    {
      title: "Pengiriman & Dokumen",
      description: "Barang dikirim tepat waktu ke site, lengkap dengan invoice dan dokumen pendukung.",
    },
  ],
  brands: [
    "Schneider Electric",
    "Cisco",
    "Commscope",
    "Lantronix",
    "Panduit",
    "Netviel",
    "Optibelt",
    "Gates",
    "Bando",
    "Phoenix Contact",
  ],
  brandsLabel: "Brand yang pernah kami pasok:",
  ctaTitle: "Punya SR atau daftar kebutuhan barang?",
  ctaSubtitle:
    "Kirimkan detailnya, tim pengadaan kami balas dengan penawaran sesuai spesifikasi.",
  cta: "Hubungi Tim Pengadaan",
} as const;

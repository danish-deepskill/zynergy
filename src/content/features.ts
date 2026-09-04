import type { ComponentType } from "react";
import {
  CalendarCheck,
  CalendarDays,
  CircleHelp,
  ClipboardList,
  GraduationCap,
  Images,
  Languages,
  MapPin,
  Megaphone,
  Newspaper,
  QrCode,
  Search,
  ShoppingCart,
  Star,
  Store,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export type FeatureCategory =
  | "jualan"
  | "kepercayaan"
  | "pengunjung"
  | "interaksi"
  | "organisasi";

/** Values intentionally match businessTypes in brief.ts so lead data lines up. */
export type BusinessSegment =
  | "umkm"
  | "personal"
  | "bisnis-lokal"
  | "sekolah"
  | "company-profile";

export interface WebFeature {
  /** Stable id, used in the WhatsApp message and future lead data. */
  value: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  category: FeatureCategory;
  /** Business types this feature is recommended for (drives the preset chips). */
  segments: BusinessSegment[];
}

export const featuresSection = {
  badge: "Racik Fitur",
  title: "Susun Website Impian Anda",
  subtitle:
    "Pilih fitur yang bisnis Anda butuhkan, lalu kirim daftarnya via WhatsApp. Tim kami balas dengan rekomendasi paketnya. Gratis, tanpa komitmen.",
  presetLabel: "Bingung mulai dari mana? Pilih jenis usaha Anda:",
  footerNote: "Butuh fitur yang tidak ada di daftar?",
} as const;

export const featureCategories: { value: FeatureCategory; label: string }[] = [
  { value: "jualan", label: "Jualan & Transaksi" },
  { value: "kepercayaan", label: "Bukti & Kepercayaan" },
  { value: "pengunjung", label: "Menarik Pengunjung" },
  { value: "interaksi", label: "Interaksi & Layanan" },
  { value: "organisasi", label: "Khusus Sekolah & Organisasi" },
];

export const segmentPresets: { value: BusinessSegment; label: string }[] = [
  { value: "umkm", label: "Toko Online / UMKM" },
  { value: "personal", label: "Personal Brand" },
  { value: "bisnis-lokal", label: "Bisnis Lokal" },
  { value: "sekolah", label: "Sekolah / Lembaga" },
  { value: "company-profile", label: "Company Profile" },
];

/** Add a new feature = append one entry here. Order defines display order. */
export const featureCatalog: WebFeature[] = [
  // Jualan & Transaksi
  {
    value: "katalog-produk",
    title: "Katalog Produk",
    description: "Etalase produk dengan foto, harga, dan detail yang rapi.",
    icon: Store,
    category: "jualan",
    segments: ["umkm", "bisnis-lokal"],
  },
  {
    value: "keranjang-checkout",
    title: "Keranjang & Checkout",
    description: "Pelanggan pesan langsung dari website tanpa ribet.",
    icon: ShoppingCart,
    category: "jualan",
    segments: ["umkm"],
  },
  {
    value: "pembayaran-qris",
    title: "Pembayaran QRIS / Transfer",
    description: "Terima pembayaran digital dengan notifikasi otomatis.",
    icon: QrCode,
    category: "jualan",
    segments: ["umkm"],
  },
  {
    value: "booking-reservasi",
    title: "Booking / Reservasi",
    description: "Jadwal online untuk salon, klinik, konsultan, atau lapangan.",
    icon: CalendarCheck,
    category: "jualan",
    segments: ["bisnis-lokal", "personal"],
  },
  {
    value: "menu-digital-qr",
    title: "Menu Digital + QR",
    description: "Pelanggan scan QR di meja, menu tampil di HP mereka.",
    icon: UtensilsCrossed,
    category: "jualan",
    segments: ["bisnis-lokal"],
  },

  // Bukti & Kepercayaan
  {
    value: "testimoni",
    title: "Testimoni Pelanggan",
    description: "Ulasan dan rating yang bikin calon pelanggan yakin.",
    icon: Star,
    category: "kepercayaan",
    segments: ["umkm", "personal", "bisnis-lokal", "company-profile"],
  },
  {
    value: "galeri-foto",
    title: "Galeri Foto / Portofolio",
    description: "Pamerkan hasil kerja, produk, atau suasana tempat Anda.",
    icon: Images,
    category: "kepercayaan",
    segments: ["umkm", "personal", "bisnis-lokal", "sekolah"],
  },
  {
    value: "maps-jam-buka",
    title: "Google Maps & Jam Buka",
    description: "Lokasi, petunjuk arah, dan jam operasional yang jelas.",
    icon: MapPin,
    category: "kepercayaan",
    segments: ["bisnis-lokal", "sekolah", "company-profile"],
  },

  // Menarik Pengunjung
  {
    value: "blog-artikel",
    title: "Blog / Artikel",
    description: "Konten edukasi yang mengangkat website Anda di Google.",
    icon: Newspaper,
    category: "pengunjung",
    segments: ["personal", "sekolah", "company-profile"],
  },
  {
    value: "seo-google",
    title: "SEO Google",
    description: "Muncul saat orang mencari produk atau jasa seperti Anda.",
    icon: Search,
    category: "pengunjung",
    segments: ["umkm", "personal", "bisnis-lokal", "company-profile"],
  },
  {
    value: "instagram-feed",
    title: "Feed Instagram",
    description: "Konten Instagram tampil otomatis di website.",
    icon: InstagramIcon,
    category: "pengunjung",
    segments: ["umkm", "personal", "bisnis-lokal"],
  },
  {
    value: "promo-popup",
    title: "Promo Popup / Banner",
    description: "Umumkan flash sale, event, atau promo musiman.",
    icon: Megaphone,
    category: "pengunjung",
    segments: ["umkm", "bisnis-lokal"],
  },

  // Interaksi & Layanan
  {
    value: "form-kontak",
    title: "Form Kontak / Pertanyaan",
    description: "Pesan pengunjung masuk rapi ke email atau dashboard.",
    icon: ClipboardList,
    category: "interaksi",
    segments: ["personal", "sekolah", "company-profile"],
  },
  {
    value: "faq",
    title: "FAQ",
    description: "Jawab pertanyaan yang sering diajukan, hemat waktu CS.",
    icon: CircleHelp,
    category: "interaksi",
    segments: ["umkm", "bisnis-lokal", "company-profile"],
  },
  {
    value: "multi-bahasa",
    title: "Multi-bahasa (ID/EN)",
    description: "Jangkau pelanggan internasional atau wisatawan.",
    icon: Languages,
    category: "interaksi",
    segments: ["company-profile"],
  },

  // Khusus Sekolah & Organisasi
  {
    value: "ppdb-pendaftaran",
    title: "PPDB / Pendaftaran Online",
    description: "Form pendaftaran siswa atau anggota, datanya terkumpul rapi.",
    icon: GraduationCap,
    category: "organisasi",
    segments: ["sekolah"],
  },
  {
    value: "profil-tim",
    title: "Profil Guru / Tim",
    description: "Direktori staf dengan foto dan peran masing-masing.",
    icon: UsersRound,
    category: "organisasi",
    segments: ["sekolah", "company-profile"],
  },
  {
    value: "agenda-pengumuman",
    title: "Agenda & Pengumuman",
    description: "Kalender kegiatan dan info terbaru untuk warga sekolah.",
    icon: CalendarDays,
    category: "organisasi",
    segments: ["sekolah"],
  },
];

/**
 * Add-on jasa Creative & Marketing: bukan bagian website, jadi bukan kartu
 * fitur; ditawarkan setelah memilih fitur dan ikut terkirim di pesan WA.
 */
export const addOns = {
  label: "Butuh juga dari tim Creative & Marketing?",
  items: [
    { value: "logo-branding", label: "Logo & brand identity" },
    { value: "konten-sosmed", label: "Konten sosial media" },
    { value: "foto-video", label: "Foto & video produk" },
    { value: "iklan-digital", label: "Iklan Meta & Google" },
    { value: "seo-bulanan", label: "SEO bulanan" },
  ],
} as const;

/** Baseline yang tidak perlu dipilih, selling point di bawah daftar fitur. */
export const includedInEveryPackage = {
  label: "Sudah termasuk di semua paket:",
  items: [
    "Desain mobile-friendly",
    "Tombol chat WhatsApp",
    "Kecepatan loading optimal",
    "SSL & keamanan",
    "Hosting & domain",
  ],
} as const;

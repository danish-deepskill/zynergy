export interface NavItem {
  label: string;
  href: string;
}

/**
 * Single source of truth for business data.
 * Everything a non-dev might need to change lives here or in landing.ts.
 */
export const siteConfig = {
  name: "Zynergy",
  legalName: "PT Sinergi Mitra Abadi Jaya",
  endorsement: "Unit bisnis digital & kreatif dari PT Sinergi Mitra Abadi Jaya.",
  domain: "zynergy.co.id",
  url: "https://zynergy.co.id",
  tagline: "Jasa pembuatan website profesional untuk UMKM, personal brand, dan bisnis lokal.",
  description:
    "Zynergy membangun website profesional yang cepat, mobile-friendly, dan siap iklan, membantu bisnis Anda dipercaya pelanggan dan mendapatkan lebih banyak leads via WhatsApp.",

  // TODO(launch): ganti dengan nomor WhatsApp bisnis asli (format internasional tanpa "+").
  whatsappNumber: "6281234567890",
  email: "halo@zynergy.co.id",
  serviceArea: "Melayani seluruh Indonesia (online)",

  // TODO(launch): isi URL sosial media asli, hapus yang tidak dipakai.
  socials: {
    instagram: "https://instagram.com/zynergy.id",
    linkedin: "https://linkedin.com/company/zynergy-id",
    facebook: "https://facebook.com/zynergy.id",
    youtube: "https://youtube.com/@zynergy",
  },

  waMessages: {
    default:
      "Halo Zynergy! Saya ingin konsultasi gratis mengenai pembuatan website. Bisa dibantu?",
    package: (packageName: string) =>
      `Halo Zynergy! Saya tertarik dengan paket ${packageName}. Mohon info lebih lanjut ya.`,
    features: (featureList: string) =>
      `Halo Zynergy! Saya ingin website dengan fitur: ${featureList}. Bisa dibantu rekomendasinya?`,
    design:
      "Halo Zynergy! Saya ingin konsultasi kebutuhan desain (logo/konten/animasi). Bisa dibantu?",
    pengadaan:
      "Halo, saya ingin menghubungi tim pengadaan PT Sinergi Mitra Abadi Jaya terkait kebutuhan barang.",
  },

  nav: [
    { label: "Beranda", href: "/" },
    { label: "Teknologi", href: "/teknologi" },
    { label: "Racik Fitur", href: "/racik-fitur" },
    { label: "Paket Harga", href: "/teknologi#paket" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/teknologi#faq" },
    { label: "Kontak", href: "/teknologi#kontak" },
  ] satisfies NavItem[],
} as const;

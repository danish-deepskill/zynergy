/**
 * "Cek Kebutuhan Website": diagnostic quiz for prospects who don't yet know
 * whether they need a website. Each "yes" surfaces a pain (insight) and maps
 * to features from features.ts. Add a question = append one entry.
 */

export interface QuizQuestion {
  value: string;
  question: string;
  /** Feature values (from featureCatalog) that fix this pain. */
  features: string[];
  /** Shown in the verdict when answered "yes", mirrors the pain back. */
  insight: string;
}

export interface QuizVerdict {
  /** Verdict applies when yes-count >= min (highest matching wins). */
  min: number;
  title: string;
  body: string;
}

export const quizSection = {
  badge: "Cek & Racik",
  title: "Butuh Website atau Belum?",
  subtitle:
    "Jawab 6 pertanyaan singkat, 1 menit selesai. Lihat di mana bisnis Anda bocor, lalu racik fitur yang menambalnya. Atau langsung racik kalau sudah tahu maunya.",
  startCta: "Mulai Cek (1 menit)",
  skipCta: "Langsung Racik Fitur",
  progressLabel: (current: number, total: number) => `Pertanyaan ${current} dari ${total}`,
  yesLabel: "Ya, betul",
  noLabel: "Tidak",
  applyCta: (count: number) => `Terapkan ${count} fitur rekomendasi`,
  retryCta: "Ulangi cek",
} as const;

export const quizQuestions: QuizQuestion[] = [
  {
    value: "tanya-berulang",
    question:
      "Pelanggan sering menanyakan hal yang sama berulang-ulang? (harga, lokasi, jam buka)",
    features: ["faq", "katalog-produk", "maps-jam-buka"],
    insight:
      "Waktu Anda habis menjawab pertanyaan yang sama, padahal website bisa menjawabnya otomatis, 24 jam.",
  },
  {
    value: "cuma-sosmed",
    question: "Jualan hanya mengandalkan Instagram, TikTok, atau marketplace?",
    features: ["katalog-produk", "seo-google", "instagram-feed"],
    insight:
      "Akun sosmed dan lapak marketplace bukan milik Anda, algoritma berubah, jangkauan bisa turun kapan saja. Website 100% aset Anda.",
  },
  {
    value: "tidak-ketemu-google",
    question:
      "Saat nama bisnis Anda dicari di Google, hasilnya kosong, atau malah kompetitor yang muncul?",
    features: ["seo-google", "blog-artikel"],
    insight:
      "8 dari 10 pembeli mengecek Google sebelum membeli. Saat ini, yang mereka temukan bukan Anda.",
  },
  {
    value: "diragukan",
    question: "Calon pembeli kadang ragu karena bisnis Anda terlihat kurang “resmi”?",
    features: ["testimoni", "galeri-foto", "profil-tim"],
    insight:
      "Kepercayaan = penjualan. Testimoni dan galeri di website resmi membuat calon pembeli yakin sebelum bertanya.",
  },
  {
    value: "catat-manual",
    question: "Pesanan atau booking masih dicatat manual dari chat, satu per satu?",
    features: ["keranjang-checkout", "booking-reservasi", "form-kontak"],
    insight:
      "Pesanan yang masuk terstruktur lewat website = tidak ada yang terlewat, tidak ada salah catat.",
  },
  {
    value: "promo-tenggelam",
    question: "Info promo atau produk baru sering tenggelam, tidak sampai ke pelanggan?",
    features: ["promo-popup", "instagram-feed"],
    insight:
      "Promo yang tampil di website menyapa setiap pengunjung, tanpa bergantung jangkauan algoritma.",
  },
];

/** Ordered low→high; pick the last verdict whose `min` <= yes-count. */
export const quizVerdicts: QuizVerdict[] = [
  {
    min: 0,
    title: "Bisnis Anda masih aman. Untuk sekarang.",
    body: "Belum banyak titik bocor. Tapi kompetitor Anda mungkin sudah mulai duluan. Tidak ada salahnya melihat fitur yang tersedia.",
  },
  {
    min: 2,
    title: "Ada kebocoran yang diam-diam merugikan Anda.",
    body: "Beberapa masalah di atas menggerus waktu dan calon pembeli Anda setiap hari. Kabar baiknya: semua bisa ditambal.",
  },
  {
    min: 4,
    title: "Bisnis Anda sudah sangat butuh website.",
    body: "Hampir semua titik bocor terjadi di bisnis Anda. Setiap hari tanpa website adalah pelanggan yang hilang. Mulai dari rekomendasi ini.",
  },
];

/** Copy for the landing-page teaser that links to /racik-fitur. */
export const racikTeaser = {
  badge: "Cek & Racik",
  title: "Butuh website atau belum? Cek dulu, racik sendiri.",
  subtitle:
    "Jawab 6 pertanyaan singkat untuk tahu kebutuhan bisnis Anda, lalu susun fitur website-nya, hasilnya langsung dikirim via WhatsApp.",
  checkCta: "Cek Kebutuhan (1 menit)",
  racikCta: "Langsung Racik Fitur",
} as const;

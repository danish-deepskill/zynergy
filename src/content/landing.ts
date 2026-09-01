import {
  BarChart3,
  Briefcase,
  Building2,
  Gauge,
  GraduationCap,
  LayoutTemplate,
  type LucideIcon,
  MapPin,
  MessagesSquare,
  Palette,
  Search,
  SearchX,
  ShieldCheck,
  Smartphone,
  Store,
  TrendingDown,
  UserRound,
  Waves,
  Wrench,
} from "lucide-react";

export interface Stat {
  value: string;
  label: string;
}

export interface IconCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceCard extends IconCard {
  features: string[];
}

export interface PricingTier {
  name: string;
  description: string;
  /** Angka saja, tanpa "Rp" — dirender terpisah. */
  price: string;
  period: string;
  highlighted: boolean;
  badge?: string;
  features: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  client: string;
  category: string;
  description: string;
  /** Kelas gradient Tailwind untuk thumbnail placeholder (sebelum ada screenshot asli). */
  thumbnailGradient: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const hero = {
  badge: "Partner Digital Bisnis Anda",
  titleLead: "Website Profesional yang",
  titleHighlight: "Bekerja 24/7",
  titleTail: "untuk Bisnis Anda",
  subtitle:
    "Zynergy membantu UMKM dan bisnis lokal tampil kredibel di internet — website cepat, mobile-friendly, siap iklan Meta & Google, dan terhubung langsung ke WhatsApp Anda.",
  trustPoints: [
    "Tanpa biaya tersembunyi",
    "Online dalam hitungan hari",
    "Gratis konsultasi & revisi sesuai brief",
  ],
};

// TODO(launch): perbarui angka dengan data asli seiring bertambahnya klien.
export const stats: Stat[] = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "98%", label: "Klien Puas" },
  { value: "4.9/5", label: "Rating Klien" },
  { value: "3-7", label: "Hari Online" },
];

export const problems = {
  badge: "Masalah yang Sering Terjadi",
  title: "Bisnis Bagus, Tapi Sulit Dipercaya Calon Pelanggan?",
  subtitle:
    "Tanpa kehadiran online yang profesional, bisnis Anda kehilangan peluang setiap hari — bahkan tanpa Anda sadari.",
  cards: [
    {
      icon: SearchX,
      title: "Sulit Ditemukan di Google",
      description:
        "Calon pelanggan mencari produk atau jasa Anda, tapi yang muncul justru kompetitor. Peluang hilang sebelum sempat ditawar.",
    },
    {
      icon: TrendingDown,
      title: "Iklan Boros, Hasil Minim",
      description:
        "Trafik iklan dikirim langsung ke chat tanpa landing page. Biaya naik terus, tapi konversi tidak sebanding.",
    },
    {
      icon: MessagesSquare,
      title: "Menjawab Chat Satu per Satu",
      description:
        "Pertanyaan yang sama diulang setiap hari — harga, katalog, alamat. Waktu Anda habis untuk hal repetitif.",
    },
    {
      icon: ShieldCheck,
      title: "Kredibilitas Diragukan",
      description:
        "Calon klien membandingkan Anda dengan kompetitor yang punya website rapi — dan memilih yang terlihat lebih meyakinkan.",
    },
    {
      icon: Waves,
      title: "Promosi Cepat Tenggelam",
      description:
        "Promo hanya lewat status WhatsApp dan story Instagram. Dalam 24 jam hilang, sulit diakses kembali oleh pembeli.",
    },
    {
      icon: LayoutTemplate,
      title: "Informasi Bisnis Terpencar",
      description:
        "Katalog, harga, testimoni, dan kontak tersebar di banyak tempat. Calon pembeli bingung, lalu batal membeli.",
    },
  ] satisfies IconCard[],
  closing: "Saatnya punya satu rumah digital yang bekerja untuk Anda 24/7.",
};

export const services = {
  badge: "Layanan Zynergy",
  title: "Solusi Website untuk Setiap Jenis Bisnis",
  subtitle:
    "Setiap bisnis punya kebutuhan berbeda. Kami rancang website yang sesuai dengan cara Anda menjual.",
  cards: [
    {
      icon: Store,
      title: "UMKM & Toko Online",
      description:
        "Katalog produk dengan tombol pesan langsung ke WhatsApp. Cocok untuk kuliner, fashion, dan produk kreatif.",
      features: ["Katalog produk", "Order via WhatsApp", "Info promo terpusat"],
    },
    {
      icon: UserRound,
      title: "Personal Branding",
      description:
        "Profil profesional untuk konsultan, trainer, dan kreator agar lebih mudah dipercaya klien baru.",
      features: ["Profil & portofolio", "Testimoni klien", "Booking layanan"],
    },
    {
      icon: MapPin,
      title: "Bisnis Lokal",
      description:
        "Website untuk resto, klinik, salon, dan jasa servis agar mudah ditemukan pelanggan di area Anda.",
      features: ["Integrasi Google Maps", "Daftar menu / layanan", "Reservasi online"],
    },
    {
      icon: GraduationCap,
      title: "Sekolah & Lembaga",
      description:
        "Profil institusi, informasi pendaftaran, berita, dan agenda kegiatan dalam satu website resmi.",
      features: ["Info pendaftaran (PPDB)", "Profil institusi", "Berita & agenda"],
    },
    {
      icon: Building2,
      title: "Company Profile",
      description:
        "Website perusahaan yang menampilkan visi, layanan, tim, dan portofolio secara profesional.",
      features: ["Profil perusahaan", "Layanan & tim", "Portofolio proyek"],
    },
    {
      icon: Briefcase,
      title: "Jasa Profesional",
      description:
        "Untuk dokter, pengacara, arsitek, dan agen properti yang butuh sistem booking dan kredibilitas tinggi.",
      features: ["Booking online", "Halaman layanan", "Konsultasi via WA"],
    },
  ] satisfies ServiceCard[],
};

export const whyUs = {
  badge: "Kenapa Zynergy",
  title: "Bukan Sekadar Website — Mesin Kepercayaan untuk Bisnis Anda",
  subtitle:
    "Kami fokus pada hasil: website yang cepat, mudah ditemukan, dan mengubah pengunjung menjadi pelanggan.",
  cards: [
    {
      icon: Gauge,
      title: "Cepat & Ringan",
      description: "Performa dioptimasi agar pengunjung betah dan konversi meningkat.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Tampil sempurna di HP — tempat mayoritas pelanggan Anda berada.",
    },
    {
      icon: MessagesSquare,
      title: "Terhubung WhatsApp",
      description: "Tombol chat & pesan otomatis. Leads masuk langsung ke WhatsApp Anda.",
    },
    {
      icon: BarChart3,
      title: "Siap Iklan",
      description: "Meta Pixel & Google Analytics terpasang. Iklan lebih tepat sasaran.",
    },
    {
      icon: ShieldCheck,
      title: "Aman & Terpercaya",
      description: "SSL/HTTPS aktif — data terenkripsi dan dipercaya browser & Google.",
    },
    {
      icon: Wrench,
      title: "Maintenance Termasuk",
      description: "Website dirawat tim kami selama berlangganan — tanpa biaya tambahan.",
    },
    {
      icon: Search,
      title: "SEO Dasar",
      description: "Struktur & meta tag dioptimasi agar mudah ditemukan di pencarian.",
    },
    {
      icon: Palette,
      title: "Desain Premium",
      description: "Tampilan modern yang memperkuat citra dan kepercayaan brand Anda.",
    },
  ] satisfies IconCard[],
};

export const pricing = {
  badge: "Paket Harga",
  title: "Investasi yang Sesuai Skala Bisnis Anda",
  subtitle:
    "Harga transparan per tahun — sudah termasuk domain, hosting, SSL, dan maintenance. Tanpa biaya kejutan.",
  // TODO(launch): finalisasi harga & benefit sebelum publikasi.
  tiers: [
    {
      name: "Starter",
      description: "Langkah pertama untuk hadir online dengan budget hemat.",
      price: "500K",
      period: "/ tahun",
      highlighted: false,
      features: [
        "Landing page profesional 1 halaman",
        "Gratis domain .my.id & hosting",
        "Desain responsive di semua perangkat",
        "Tombol chat WhatsApp (CTWA)",
        "Integrasi sosial media",
        "SSL/HTTPS aktif",
        "SEO dasar",
        "Revisi sesuai brief awal",
      ],
    },
    {
      name: "Business",
      description: "Paket terpopuler — landing page lengkap siap menerima leads.",
      price: "950K",
      period: "/ tahun",
      highlighted: true,
      badge: "Paling Populer",
      features: [
        "Semua benefit paket Starter",
        "Gratis domain .com atau .id",
        "Struktur halaman lebih lengkap",
        "Copywriting untuk headline & CTA",
        "Form leads / konsultasi",
        "Meta Pixel & Google Analytics",
        "Setup Google Search Console",
        "Optimasi kecepatan website",
      ],
    },
    {
      name: "Premium",
      description: "Untuk bisnis yang siap beriklan dan butuh hasil maksimal.",
      price: "1.5JT",
      period: "/ tahun",
      highlighted: false,
      features: [
        "Semua benefit paket Business",
        "Desain eksklusif high-converting",
        "Copywriting penjualan matang",
        "Pesan WhatsApp otomatis",
        "Animasi modern & micro-interaction",
        "Multi-halaman (profil, layanan, blog)",
        "Leads tersimpan ke database",
        "Support prioritas",
      ],
    },
  ] satisfies PricingTier[],
  closing:
    "Semua paket termasuk gratis hosting, SSL aktif, dan maintenance selama berlangganan.",
};

export const processSection = {
  badge: "Proses Kerja",
  title: "6 Langkah Sampai Website Anda Online",
  subtitle:
    "Proses transparan dan terarah — Anda selalu tahu progres website di setiap tahap.",
  steps: [
    {
      title: "Konsultasi & Brief",
      description: "Diskusi via WhatsApp untuk memahami bisnis, target, dan tujuan website Anda.",
    },
    {
      title: "Rekomendasi Paket",
      description: "Kami sarankan paket paling sesuai kebutuhan dan budget — tanpa memaksa.",
    },
    {
      title: "Pengumpulan Materi",
      description: "Anda kirim logo, foto, dan teks. Kami pandu sampai materinya lengkap.",
    },
    {
      title: "Desain & Development",
      description: "Tim kami membangun website sesuai brief. Progres dilaporkan berkala.",
    },
    {
      title: "Review & Revisi",
      description: "Kita cek tampilan, fungsi, dan kecepatan bersama. Revisi sampai sesuai brief.",
    },
    {
      title: "Launching",
      description: "Website online dengan domain & hosting aktif. Siap dipromosikan!",
    },
  ] satisfies ProcessStep[],
};

export const portfolio = {
  badge: "Portofolio",
  title: "Karya yang Berbicara Lewat Hasil",
  subtitle:
    "Beberapa contoh website yang kami bangun untuk membantu bisnis klien berkembang.",
  // TODO(launch): ganti dengan proyek asli + screenshot begitu tersedia.
  items: [
    {
      title: "Toko Online Kopi",
      client: "Kopi Nusantara",
      category: "UMKM",
      description:
        "Katalog produk kopi dengan pemesanan langsung via WhatsApp dan halaman promo musiman.",
      thumbnailGradient: "from-amber-400 to-orange-600",
    },
    {
      title: "Website Klinik",
      client: "Klinik Sehat Prima",
      category: "Bisnis Lokal",
      description:
        "Profil klinik dengan jadwal dokter, reservasi online, dan integrasi Google Maps.",
      thumbnailGradient: "from-sky-400 to-blue-600",
    },
    {
      title: "Company Profile",
      client: "PT Sinergi Karya",
      category: "Company",
      description:
        "Website perusahaan dengan halaman layanan, tim, dan portofolio proyek yang elegan.",
      thumbnailGradient: "from-emerald-400 to-teal-600",
    },
  ] satisfies PortfolioItem[],
};

export const testimonials = {
  badge: "Testimoni",
  title: "Apa Kata Klien Kami",
  subtitle: "Cerita dari pemilik bisnis yang sudah mempercayakan website-nya kepada Zynergy.",
  // TODO(launch): WAJIB ganti dengan testimoni asli dari klien nyata sebelum website dipublikasikan.
  items: [
    {
      quote:
        "Sejak punya website, pelanggan lebih percaya dan pesanan via WhatsApp meningkat. Prosesnya cepat dan komunikatif.",
      name: "Nama Klien",
      role: "Pemilik · Nama Bisnis",
    },
    {
      quote:
        "Iklan jadi jauh lebih efektif karena diarahkan ke landing page. Tim Zynergy sangat membantu dari awal sampai launching.",
      name: "Nama Klien",
      role: "Founder · Nama Bisnis",
    },
    {
      quote:
        "Desainnya profesional dan sesuai brand kami. Maintenance juga responsif setiap kali ada kebutuhan update.",
      name: "Nama Klien",
      role: "Direktur · Nama Bisnis",
    },
  ] satisfies Testimonial[],
};

export const faq = {
  badge: "FAQ",
  title: "Pertanyaan yang Sering Diajukan",
  subtitle: "Belum menemukan jawaban? Tim kami siap membantu via WhatsApp.",
  items: [
    {
      question: "Berapa lama proses pembuatan website?",
      answer:
        "Rata-rata 3-7 hari kerja setelah materi lengkap, tergantung paket yang dipilih. Untuk kebutuhan multi-halaman bisa sampai 10 hari kerja. Progres selalu kami laporkan via WhatsApp.",
    },
    {
      question: "Apakah ada biaya bulanan?",
      answer:
        "Tidak ada. Biaya dihitung per tahun dan sudah termasuk domain, hosting, SSL, serta maintenance. Anda hanya membayar perpanjangan tahunan.",
    },
    {
      question: "Domain dan hosting benar-benar gratis?",
      answer:
        "Ya, setiap paket sudah termasuk domain dan hosting untuk tahun pertama serta perpanjangannya selama berlangganan — sesuai jenis domain pada masing-masing paket.",
    },
    {
      question: "Apakah website terhubung ke WhatsApp saya?",
      answer:
        "Tentu. Semua tombol CTA diarahkan ke nomor WhatsApp bisnis Anda dengan pesan otomatis yang sudah disiapkan, sehingga leads langsung masuk tanpa hambatan.",
    },
    {
      question: "Apakah website siap untuk iklan Meta dan Google?",
      answer:
        "Ya. Paket Business ke atas sudah termasuk pemasangan Meta Pixel dan Google Analytics, sehingga konversi iklan terlacak akurat dan retargeting bisa berjalan maksimal.",
    },
    {
      question: "Bagaimana sistem revisinya?",
      answer:
        "Revisi bebas selama masih sesuai brief awal yang disepakati. Perubahan di luar brief (misalnya ganti konsep total) akan didiskusikan terlebih dahulu.",
    },
    {
      question: "Apa saja yang perlu saya siapkan?",
      answer:
        "Cukup logo, foto produk/bisnis, dan deskripsi singkat usaha Anda. Belum punya materi lengkap? Tim kami akan memandu langkah demi langkah.",
    },
    {
      question: "Apakah melayani klien dari luar kota?",
      answer:
        "Bisa! Seluruh proses berjalan online via WhatsApp — dari konsultasi, pengiriman materi, hingga revisi. Kami melayani seluruh Indonesia.",
    },
  ] satisfies FaqItem[],
};

export const finalCta = {
  badge: "Mulai Sekarang",
  title: "Siap Punya Website yang Mendatangkan Pelanggan?",
  subtitle:
    "Konsultasikan kebutuhan Anda — gratis, tanpa kewajiban. Kami bantu rekomendasikan solusi terbaik untuk bisnis Anda.",
  points: [
    "Konsultasi gratis via WhatsApp",
    "Rekomendasi paket sesuai budget",
    "Website online dalam 3-7 hari kerja",
  ],
};

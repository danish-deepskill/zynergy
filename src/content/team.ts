/**
 * Team page content. TODO(launch): replace placeholder names/bios with the
 * real six people and add photos (photo field is optional; initials-avatar
 * renders when absent).
 */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/team/nama.jpg". Absent = initials placeholder. */
  photo?: string;
  /** Extra credibility line, e.g. an advisor's own business. */
  note?: string;
  highlight?: boolean;
}

export const tentangSection = {
  badge: "Tentang Kami",
  title: "Tim Kecil, Standar Serius",
  subtitle:
    "Zynergy adalah unit bisnis digital & kreatif dari PT Sinergi Mitra Abadi Jaya. Enam orang, satu tujuan: membuat bisnis Anda dipercaya pelanggan.",
  storyTitle: "Kenapa Zynergy Ada",
  story:
    "Kami melihat terlalu banyak bisnis bagus yang kalah bersaing hanya karena tidak terlihat meyakinkan di internet. Zynergy dibangun untuk menutup celah itu: website yang cepat dan terurus, tanpa Anda harus paham teknis.",
} as const;

/** Cerita di balik nama, ditampilkan di /tentang. */
export const nameMeaning = {
  title: "Arti di Balik Nama",
  formula: "Zynergy = Sinergi + Energi + Z",
  items: [
    {
      title: "Sinergi",
      text: "Diambil dari nama induk kami, PT Sinergi Mitra Abadi Jaya. Sinergi artinya hasil gabungan lebih besar dari jumlah bagiannya: technology, creative, dan marketing dikerjakan satu tim yang solid, dengan satu tujuan, bisnis Anda bertumbuh.",
    },
    {
      title: "Energi",
      text: "Tersembunyi di ujung kata. Sinergi saja tidak cukup kalau tidak hidup: energi tim inilah yang membuat pekerjaan selesai cepat, komunikasi responsif, dan ide terus mengalir.",
    },
    {
      title: "Huruf Z",
      text: "Dua makna sekaligus. Dari A sampai Z: satu tim untuk semua kebutuhan digital, dari logo sampai iklan. Dan generasi Z: energi generasi digital yang menjalankan babak baru perusahaan ini.",
    },
  ],
} as const;

export const teamMembers: TeamMember[] = [
  {
    name: "Nama Anggota", // TODO(launch)
    role: "Lead",
    bio: "Mengarahkan strategi, visi, dan kualitas di setiap proyek.",
  },
  {
    name: "Nama Anggota", // TODO(launch)
    role: "Developer",
    bio: "Membangun website dan aplikasi yang cepat, aman, dan mudah dirawat.",
  },
  {
    name: "Nama Anggota", // TODO(launch)
    role: "Marketing",
    bio: "Membantu klien menemukan solusi yang pas, tanpa jargon teknis.",
  },
  {
    name: "Nama Anggota", // TODO(launch)
    role: "Designer",
    bio: "Merancang identitas visual dan tampilan yang memperkuat kepercayaan brand.",
  },
  {
    name: "Nama Anggota", // TODO(launch)
    role: "Finance",
    bio: "Menjaga penawaran, penagihan, dan langganan berjalan rapi dan transparan.",
  },
  {
    name: "Nama Anggota", // TODO(launch)
    role: "Business",
    bio: "Menjaga arah bisnis dan kemitraan agar layanan selalu relevan.",
  },
];

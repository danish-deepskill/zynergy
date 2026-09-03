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

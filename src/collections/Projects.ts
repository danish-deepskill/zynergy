import { safeRevalidatePath } from "@/lib/revalidate";
import type { CollectionConfig } from "payload";

export const projectCategories = [
  { label: "UMKM & Toko Online", value: "umkm" },
  { label: "Personal Branding", value: "personal" },
  { label: "Bisnis Lokal", value: "bisnis-lokal" },
  { label: "Sekolah & Lembaga", value: "sekolah" },
  { label: "Company Profile", value: "company-profile" },
  { label: "Jasa Profesional", value: "jasa" },
] as const;

/** Portfolio entries shown on /portofolio. */
export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "order"],
    group: "Konten",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        safeRevalidatePath("/portofolio");
        return doc;
      },
    ],
    afterDelete: [
      () => {
        safeRevalidatePath("/portofolio");
      },
    ],
  },
  defaultSort: "order",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Nama proyek",
    },
    {
      name: "client",
      type: "text",
      required: true,
      label: "Nama klien / brand",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [...projectCategories],
      label: "Kategori",
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
      label: "Ringkasan",
      admin: {
        description: "1–2 kalimat tentang proyek dan hasilnya.",
      },
    },
    {
      name: "siteUrl",
      type: "text",
      label: "URL website",
      admin: {
        description: "Link ke website live (opsional).",
      },
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Screenshot website. Tanpa gambar, kartu memakai gradien.",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Urutan tampil, kecil lebih dulu.",
      },
    },
  ],
};

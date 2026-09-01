import type { CollectionConfig } from "payload";
import { briefUpload, budgets, businessTypes, deadlines, features } from "@/content/brief";

/**
 * Submissions from the /brief-project form. Not publicly writable —
 * the form's server action creates these via the Local API.
 */
export const Leads: CollectionConfig = {
  slug: "leads",
  labels: {
    singular: "Lead",
    plural: "Leads",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "whatsapp", "businessType", "budget", "createdAt"],
    group: "Leads",
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nama",
    },
    {
      name: "whatsapp",
      type: "text",
      required: true,
      label: "Nomor WhatsApp",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "businessType",
      type: "select",
      options: [...businessTypes],
      label: "Jenis bisnis",
    },
    {
      name: "budget",
      type: "select",
      options: [...budgets],
      label: "Budget",
    },
    {
      name: "deadline",
      type: "select",
      options: [...deadlines],
      label: "Deadline",
    },
    {
      name: "features",
      type: "select",
      hasMany: true,
      options: [...features],
      label: "Fitur yang dibutuhkan",
    },
    {
      name: "message",
      type: "textarea",
      label: "Deskripsi kebutuhan",
    },
    {
      name: "attachments",
      type: "upload",
      relationTo: "lead-files",
      hasMany: true,
      maxRows: briefUpload.maxFiles,
    },
    {
      name: "status",
      type: "select",
      defaultValue: "baru",
      options: [
        { label: "Baru", value: "baru" },
        { label: "Dihubungi", value: "dihubungi" },
        { label: "Deal", value: "deal" },
        { label: "Tidak lanjut", value: "tidak-lanjut" },
      ],
      admin: {
        position: "sidebar",
        description: "Status follow-up internal.",
      },
    },
  ],
};

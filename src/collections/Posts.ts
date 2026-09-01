import { safeRevalidatePath } from "@/lib/revalidate";
import type { CollectionConfig } from "payload";
import { slugFrom } from "@/lib/slug";

/** Blog articles. Drafts stay private until published. */
export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "_status", "publishedAt"],
    group: "Konten",
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [
      ({ doc, previousDoc }) => {
        safeRevalidatePath("/blog");
        if (doc?.slug) safeRevalidatePath(`/blog/${doc.slug}`);
        if (previousDoc?.slug && previousDoc.slug !== doc?.slug) {
          safeRevalidatePath(`/blog/${previousDoc.slug}`);
        }
        return doc;
      },
    ],
    afterDelete: [
      ({ doc }) => {
        safeRevalidatePath("/blog");
        if (doc?.slug) safeRevalidatePath(`/blog/${doc.slug}`);
      },
    ],
  },
  access: {
    read: ({ req }) =>
      req.user ? true : { _status: { equals: "published" } },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Judul",
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "Otomatis dari judul jika dikosongkan.",
      },
      hooks: {
        beforeValidate: [slugFrom("title")],
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      label: "Ringkasan",
      admin: {
        description: "Muncul di daftar artikel dan hasil pencarian.",
      },
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Isi artikel",
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayOnly" },
      },
      defaultValue: () => new Date().toISOString(),
    },
  ],
};

import type { CollectionConfig } from "payload";

/** Public images: blog covers, portfolio thumbnails. */
export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "Konten",
  },
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 480 },
      { name: "card", width: 768 },
      { name: "hero", width: 1280 },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Teks alternatif",
    },
  ],
};

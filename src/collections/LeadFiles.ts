import type { CollectionConfig } from "payload";
import { briefUpload } from "@/content/brief";

/**
 * Attachments from the brief-project form. Not publicly readable —
 * created server-side via the Local API only.
 */
export const LeadFiles: CollectionConfig = {
  slug: "lead-files",
  admin: {
    group: "Leads",
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  upload: {
    mimeTypes: [...briefUpload.accept],
  },
  fields: [],
};

import type { CollectionConfig } from "payload";

/** Staff accounts for the admin panel. */
export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "Admin",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};

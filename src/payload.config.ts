import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import sharp from "sharp";
import { LeadFiles } from "@/collections/LeadFiles";
import { Leads } from "@/collections/Leads";
import { Media } from "@/collections/Media";
import { Posts } from "@/collections/Posts";
import { Projects } from "@/collections/Projects";
import { Users } from "@/collections/Users";
import { briefUpload } from "@/content/brief";
import { siteConfig } from "@/content/site";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ` — ${siteConfig.name} Admin`,
    },
  },
  collections: [Posts, Projects, Media, Leads, LeadFiles, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  sharp,
  upload: {
    limits: {
      fileSize: briefUpload.maxFileSizeMB * 1024 * 1024,
    },
  },
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  plugins: process.env.BLOB_READ_WRITE_TOKEN
    ? [
        vercelBlobStorage({
          collections: {
            media: true,
            "lead-files": true,
          },
          token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
      ]
    : [],
});

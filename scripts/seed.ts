/**
 * Dev seed: admin user + sample content, so a fresh local setup has something
 * to look at. Idempotent, safe to run repeatedly. Run: pnpm seed
 *
 * The dev login is dev@zynergy.local / zynergy-dev-only, LOCAL USE ONLY.
 * On production the admin panel asks to create the first user on first visit.
 */
import { getPayload } from "payload";
import config from "@payload-config";

function paragraph(text: string) {
  return {
    type: "paragraph",
    version: 1,
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    children: [{ type: "text", version: 1, text }],
  };
}

function heading(text: string) {
  return {
    type: "heading",
    tag: "h2",
    version: 1,
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    children: [{ type: "text", version: 1, text }],
  };
}

type LexicalNode = { [k: string]: unknown; type: string; version: number };

function richText(nodes: LexicalNode[]) {
  return {
    root: {
      type: "root",
      version: 1,
      direction: "ltr" as const,
      format: "" as const,
      indent: 0,
      children: nodes,
    },
  };
}

const payload = await getPayload({ config });

const existingUsers = await payload.find({
  collection: "users",
  where: { email: { equals: "dev@zynergy.local" } },
  limit: 1,
});
if (existingUsers.totalDocs === 0) {
  await payload.create({
    collection: "users",
    data: {
      email: "dev@zynergy.local",
      password: "zynergy-dev-only",
      name: "Dev Admin",
    },
  });
  payload.logger.info("Seeded dev admin: dev@zynergy.local");
}

const existingPosts = await payload.find({
  collection: "posts",
  where: { slug: { equals: "kenapa-bisnis-anda-butuh-website" } },
  limit: 1,
});
if (existingPosts.totalDocs === 0) {
  await payload.create({
    collection: "posts",
    data: {
      title: "Kenapa Bisnis Anda Butuh Website di 2026",
      slug: "kenapa-bisnis-anda-butuh-website",
      excerpt:
        "Media sosial saja tidak cukup. Ini alasan website masih jadi fondasi kepercayaan pelanggan, dan kenapa sekarang waktu terbaik untuk memulai.",
      content: richText([
        paragraph(
          "Banyak pemilik usaha merasa cukup dengan Instagram atau marketplace. Sampai suatu hari akun kena batasi, algoritma berubah, atau calon pelanggan bertanya: “websitenya ada?”",
        ),
        heading("Website = aset milik Anda sendiri"),
        paragraph(
          "Berbeda dengan media sosial yang aturannya bisa berubah kapan saja, website sepenuhnya milik Anda. Konten, data pelanggan, dan tampilan brand berada di kendali Anda.",
        ),
        heading("Dipercaya calon pelanggan"),
        paragraph(
          "Riset menunjukkan mayoritas konsumen mengecek keberadaan online sebelum membeli. Website profesional dengan domain sendiri menaikkan kepercayaan secara instan, apalagi untuk transaksi bernilai besar.",
        ),
        paragraph(
          "Zynergy membantu UMKM dan bisnis lokal punya website profesional tanpa ribet. Konsultasikan kebutuhan Anda, gratis.",
        ),
      ]),
      publishedAt: new Date().toISOString(),
      _status: "published",
    },
  });
  payload.logger.info("Seeded sample blog post");
}

const existingProjects = await payload.find({ collection: "projects", limit: 1 });
if (existingProjects.totalDocs === 0) {
  const projects = [
    {
      title: "Toko Online Kopi",
      client: "Kopi Nusantara",
      category: "umkm",
      summary:
        "Katalog produk kopi dengan pemesanan langsung via WhatsApp dan halaman promo musiman.",
      order: 1,
    },
    {
      title: "Website Klinik",
      client: "Klinik Sehat Prima",
      category: "bisnis-lokal",
      summary: "Profil klinik dengan jadwal dokter, reservasi online, dan integrasi Google Maps.",
      order: 2,
    },
    {
      title: "Company Profile",
      client: "PT Sinergi Karya",
      category: "company-profile",
      summary: "Website perusahaan dengan halaman layanan, tim, dan portofolio proyek yang elegan.",
      order: 3,
    },
  ] as const;
  for (const project of projects) {
    await payload.create({ collection: "projects", data: project });
  }
  payload.logger.info("Seeded sample projects");
}

payload.logger.info("Seed complete");
process.exit(0);

import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getPayloadClient } from "@/lib/payload";

export const revalidate = 3600;

const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 0.8 },
  { path: "/technology", priority: 1 },
  { path: "/racik-fitur", priority: 0.9 },
  { path: "/brief-project", priority: 0.9 },
  { path: "/creative", priority: 0.7 },
  { path: "/pengadaan", priority: 0.7 },
  { path: "/portofolio", priority: 0.7 },
  { path: "/tentang", priority: 0.5 },
  { path: "/blog", priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    priority,
  }));

  // Blog posts come from the CMS; a DB hiccup should not break the sitemap.
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "posts",
      where: { _status: { equals: "published" } },
      select: { slug: true, updatedAt: true },
      limit: 500,
    });
    for (const post of docs) {
      if (!post.slug) continue;
      entries.push({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        priority: 0.5,
      });
    }
  } catch {
    // Sitemap ships with static routes only.
  }

  return entries;
}

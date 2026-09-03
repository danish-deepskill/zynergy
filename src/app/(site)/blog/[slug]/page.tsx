import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Media } from "@/payload-types";
import { getPayloadClient } from "@/lib/payload";
import { formatDate } from "@/lib/date";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/ui/JsonLd";

export const revalidate = 3600;

interface Args {
  params: Promise<{ slug: string }>;
}

async function findPost(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug },
      _status: { equals: "published" },
    },
    depth: 1,
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    select: { slug: true },
    limit: 100,
  });
  return docs.flatMap((doc) => (doc.slug ? [{ slug: doc.slug }] : []));
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({ params }: Args) {
  const { slug } = await params;
  const post = await findPost(slug);
  if (!post) notFound();

  const cover = post.cover as Media | null;

  return (
    <article className="px-4 pb-20 pt-32 sm:px-6 sm:pb-24 lg:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt ?? undefined,
          datePublished: post.publishedAt ?? undefined,
          dateModified: post.updatedAt,
          url: `${siteConfig.url}/blog/${post.slug}`,
          author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        }}
      />
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Semua artikel
        </Link>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        {post.publishedAt && (
          <time className="mt-4 block text-sm text-muted" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        )}
        {cover?.url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover.sizes?.hero?.url ?? cover.url}
            alt={cover.alt ?? post.title}
            className="mt-8 w-full rounded-2xl border border-line object-cover"
          />
        )}
        <div className="article mt-10">
          <RichText data={post.content} />
        </div>
      </div>
    </article>
  );
}

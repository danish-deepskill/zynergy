import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { businessLines, companyHome } from "@/content/company";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";
import { CtaLink } from "@/components/ui/CtaLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Teknologi, Desain, Pemasaran, Produk & Pengadaan`,
  description: companyHome.subtitle,
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.legalName,
          brand: { "@type": "Brand", name: siteConfig.name },
          url: siteConfig.url,
          email: siteConfig.email,
          sameAs: Object.values(siteConfig.socials),
        }}
      />
      <section id="beranda" className="px-4 pb-16 pt-36 text-center sm:px-6 sm:pt-44 lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
              {companyHome.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {companyHome.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {companyHome.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        {/* Row 1: agency triangle (3 equal). Row 2: Products + Supply (2 wide). */}
        <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {businessLines.map((line, index) => (
            <Reveal
              key={line.value}
              delay={index * 0.08}
              className={cn(
                "h-full",
                index < 3 ? "lg:col-span-2" : "lg:col-span-3",
                index === businessLines.length - 1 && businessLines.length % 2 === 1 && "sm:col-span-2 lg:col-span-3",
              )}
            >
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all",
                  line.flagship
                    ? "border-primary/30 shadow-lg shadow-primary/10 hover:shadow-lg"
                    : line.upcoming
                      ? "border-dashed border-line"
                      : "border-line hover:border-primary/30 hover:shadow-lg",
                )}
              >
                {line.upcoming && (
                  <span className="absolute right-4 top-4 rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-dark">
                    Segera
                  </span>
                )}
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl",
                    line.flagship ? "bg-primary text-white" : "bg-primary-soft text-primary",
                  )}
                >
                  <line.icon className="size-6" />
                </span>
                <h2 className="mt-5 text-lg font-extrabold text-ink">{line.name}</h2>
                <p className="text-sm font-semibold text-primary">{line.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{line.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {line.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted">
                      <Check className="size-3.5 shrink-0 text-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  {line.upcoming ? (
                    <span className="inline-flex w-full items-center justify-center rounded-xl border border-dashed border-line px-6 py-3 text-sm font-semibold text-muted">
                      Segera Hadir
                    </span>
                  ) : (
                    <CtaLink
                      href={line.href}
                      variant={line.flagship ? "primary" : "outline"}
                      className="w-full"
                    >
                      {line.cta}
                      <ArrowRight className="size-4" />
                    </CtaLink>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted">
          Ingin kenal orang-orang di baliknya?{" "}
          <Link href="/tentang" className="font-semibold text-primary hover:underline">
            Tentang kami
          </Link>
        </p>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { supplyPage } from "@/content/company";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";
import { waLink } from "@/lib/wa";
import { CtaLink } from "@/components/ui/CtaLink";
import { CubePattern } from "@/components/ui/CubePattern";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Pengadaan Barang Industri | PT Sinergi Mitra Abadi Jaya",
  description: supplyPage.subtitle,
};

export default function SupplyPage() {
  return (
    <div>
      {/* Hero: steel + isometric crate pattern, identitas industrial lini Supply */}
      <div className="relative overflow-hidden bg-gradient-to-br from-steel to-steel-light">
        <CubePattern
          id="supply-hero-cubes"
          className="text-white/[0.07] [mask-image:radial-gradient(ellipse_65%_70%_at_50%_40%,black_30%,transparent_100%)]"
        />
        <section className="relative px-4 pb-16 pt-36 text-center sm:px-6 sm:pt-40 lg:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5">
            <Reveal className="flex flex-col items-center gap-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber/35 bg-amber/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber">
                <span className="size-1.5 rounded-full bg-amber" aria-hidden />
                {supplyPage.badge}
              </span>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {supplyPage.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-steel-ink sm:text-lg">
                {supplyPage.subtitle}
              </p>
              <ul className="flex flex-wrap justify-center gap-3 pt-1">
                {supplyPage.chips.map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-steel-ink"
                  >
                    <span className="size-1.5 rounded-full bg-amber" aria-hidden />
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Klien */}
      <Section className="py-12 sm:py-14">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-muted">
            {supplyPage.clientsLabel}
          </p>
          {/* Marquee: daftar dirender dua kali untuk loop mulus; duplikat aria-hidden.
              Reduced motion: animasi mati, duplikat disembunyikan, baris wrap statis. */}
          <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]">
            <ul className="flex w-max items-center motion-safe:animate-marquee motion-safe:hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-6">
              {[...supplyPage.clients, ...supplyPage.clients].map((client, index) => (
                <li
                  key={`${client.name}-${index}`}
                  aria-hidden={index >= supplyPage.clients.length || undefined}
                  className={cn(
                    "mx-7 shrink-0",
                    index >= supplyPage.clients.length && "motion-reduce:hidden",
                  )}
                >
                  <Image
                    src={client.logo}
                    alt={index < supplyPage.clients.length ? client.name : ""}
                    title={client.name}
                    width={client.width}
                    height={client.height}
                    className="h-9 w-auto max-w-40 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10 sm:max-w-48"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Kategori supply */}
      <Section tone="soft">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-dark">
            <span className="size-1.5 rounded-full bg-amber" aria-hidden />
            {supplyPage.categoriesBadge}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {supplyPage.categoriesTitle}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supplyPage.categories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-amber-soft text-amber-dark">
                  <category.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{category.description}</p>
                <p className="mt-auto border-t border-line pt-3 text-xs leading-relaxed text-muted">
                  {category.examples}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">
              {supplyPage.brandsLabel}
            </p>
            <ul className="mx-auto mt-4 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {supplyPage.brands.map((brand) => (
                <li
                  key={brand}
                  className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-muted"
                >
                  {brand}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted">{supplyPage.sourcingNote}</p>
          </div>
        </Reveal>
      </Section>

      {/* Cara kerja */}
      <Section className="py-16 sm:py-20">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {supplyPage.stepsTitle}
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
          {supplyPage.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="grid size-9 place-items-center rounded-full bg-amber text-sm font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA band: steel */}
      <div className="relative overflow-hidden bg-gradient-to-br from-steel to-steel-light">
        <CubePattern
          id="supply-cta-cubes"
          className="text-white/[0.06] [mask-image:radial-gradient(ellipse_60%_90%_at_50%_50%,black_30%,transparent_100%)]"
        />
        <section className="relative px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {supplyPage.ctaTitle}
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-steel-ink sm:text-base">
              {supplyPage.ctaSubtitle}
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={waLink(siteConfig.waMessages.pengadaan)} variant="whatsapp">
                <WhatsAppIcon className="size-4" />
                {supplyPage.cta}
              </CtaLink>
              <CtaLink
                href={`mailto:${siteConfig.email}`}
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:border-amber hover:bg-white/5 hover:text-white"
              >
                <Mail className="size-4" />
                {siteConfig.email}
              </CtaLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

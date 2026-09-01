import { CheckCircle2 } from "lucide-react";
import { pricing } from "@/content/landing";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

export function Pricing() {
  return (
    <Section id="paket">
      <SectionHeading badge={pricing.badge} title={pricing.title} subtitle={pricing.subtitle} />
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {pricing.tiers.map((tier, index) => (
          <Reveal key={tier.name} delay={index * 0.07}>
            <article
              className={cn(
                "relative h-full rounded-2xl border bg-white p-7",
                tier.highlighted
                  ? "border-primary shadow-xl shadow-primary/10 lg:-mt-4 lg:mb-4"
                  : "border-line",
              )}
            >
              {tier.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-ink">Paket {tier.name}</h3>
              <p className="mt-1.5 min-h-10 text-sm text-muted">{tier.description}</p>
              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="text-sm font-semibold text-muted">Rp</span>
                <span className="text-4xl font-extrabold tracking-tight text-ink">{tier.price}</span>
                <span className="text-sm text-muted">{tier.period}</span>
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <CtaLink
                href={waLink(siteConfig.waMessages.package(tier.name))}
                variant={tier.highlighted ? "primary" : "outline"}
                className="mt-7 w-full"
              >
                Pilih Paket {tier.name}
              </CtaLink>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-muted">{pricing.closing}</p>
    </Section>
  );
}

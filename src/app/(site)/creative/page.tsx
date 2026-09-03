import type { Metadata } from "next";
import { Check } from "lucide-react";
import { creativePage } from "@/content/company";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Zynergy Design | Grafis, Branding & Animasi",
  description: creativePage.subtitle,
};

export default function DesignPage() {
  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          badge={creativePage.badge}
          title={creativePage.title}
          subtitle={creativePage.subtitle}
        />
        <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white p-8 sm:p-10">
          <ul className="space-y-3">
            {creativePage.services.map((service) => (
              <li key={service} className="flex items-center gap-2.5 text-sm text-muted">
                <Check className="size-4 shrink-0 text-secondary" />
                {service}
              </li>
            ))}
          </ul>
          <CtaLink
            href={waLink(siteConfig.waMessages.design)}
            variant="whatsapp"
            className="mt-8 w-full"
          >
            <WhatsAppIcon className="size-4" />
            {creativePage.cta}
          </CtaLink>
        </div>
      </Section>
    </div>
  );
}

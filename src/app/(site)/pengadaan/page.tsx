import type { Metadata } from "next";
import { Check, Mail } from "lucide-react";
import { pengadaanPage } from "@/content/company";
import { siteConfig } from "@/content/site";
import { waLink } from "@/lib/wa";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Pengadaan Barang | PT Sinergi Mitra Abadi Jaya",
  description: pengadaanPage.subtitle,
};

export default function PengadaanPage() {
  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          badge={pengadaanPage.badge}
          title={pengadaanPage.title}
          subtitle={pengadaanPage.subtitle}
        />
        <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white p-8 sm:p-10">
          <ul className="space-y-3">
            {pengadaanPage.services.map((service) => (
              <li key={service} className="flex items-center gap-2.5 text-sm text-muted">
                <Check className="size-4 shrink-0 text-secondary" />
                {service}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <CtaLink
              href={waLink(siteConfig.waMessages.pengadaan)}
              variant="whatsapp"
              className="w-full"
            >
              <WhatsAppIcon className="size-4" />
              {pengadaanPage.cta}
            </CtaLink>
            <CtaLink href={`mailto:${siteConfig.email}`} variant="outline" className="w-full">
              <Mail className="size-4" />
              {siteConfig.email}
            </CtaLink>
          </div>
        </div>
      </Section>
    </div>
  );
}

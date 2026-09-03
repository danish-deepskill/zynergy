import type { Metadata } from "next";
import Image from "next/image";
import { teamMembers, tentangSection } from "@/content/team";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";
import { waLink } from "@/lib/wa";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: tentangSection.subtitle,
};

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TentangPage() {
  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          badge={tentangSection.badge}
          title={tentangSection.title}
          subtitle={tentangSection.subtitle}
        />

        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface-soft p-8 sm:p-10">
            <h3 className="text-base font-bold text-ink">{tentangSection.storyTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{tentangSection.story}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal key={`${member.role}-${index}`} delay={index * 0.05} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col overflow-hidden rounded-2xl border bg-white",
                  member.highlight
                    ? "border-secondary/40 shadow-md shadow-secondary/10"
                    : "border-line",
                )}
              >
                {/* Slot foto profil (3:4 portrait). TODO(launch): isi member.photo */}
                <div className="relative aspect-[3/4] w-full bg-gradient-to-br from-primary-soft via-surface-soft to-secondary-soft">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="grid h-full w-full place-items-center text-4xl font-extrabold tracking-wide text-primary/40">
                      {initials(member.name)}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold text-ink">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary">{member.role}</p>
                  {member.note && (
                    <p className="mt-0.5 text-xs font-medium text-secondary-dark">
                      {member.note}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <CtaLink href={waLink(siteConfig.waMessages.default)} variant="whatsapp">
            <WhatsAppIcon className="size-4" />
            Ngobrol dengan Tim Kami
          </CtaLink>
        </div>
      </Section>
    </div>
  );
}

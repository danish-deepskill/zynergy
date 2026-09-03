import { ClipboardCheck, Sparkles } from "lucide-react";
import { racikTeaser } from "@/content/quiz";
import { Section } from "@/components/ui/Section";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";

/** Slim banner pointing to the /racik-fitur tool, the full picker lives there. */
export function RacikTeaser() {
  return (
    <Section id="fitur" className="py-14 sm:py-16">
      <Reveal>
        <div className="rounded-3xl border border-line bg-gradient-to-br from-primary-soft via-white to-secondary-soft p-8 text-center sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-dark shadow-sm">
            <Sparkles className="size-3.5 text-secondary" />
            {racikTeaser.badge}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            {racikTeaser.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {racikTeaser.subtitle}
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href="/racik-fitur">
              <ClipboardCheck className="size-4" />
              {racikTeaser.checkCta}
            </CtaLink>
            <CtaLink href="/racik-fitur#racik" variant="outline">
              {racikTeaser.racikCta}
            </CtaLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

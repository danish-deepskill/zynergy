import { whyUs } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyUs() {
  return (
    <Section id="keunggulan">
      <SectionHeading badge={whyUs.badge} title={whyUs.title} subtitle={whyUs.subtitle} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.04}>
            <article className="h-full rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-md">
              <span className="mb-3 inline-grid size-10 place-items-center rounded-lg bg-primary-soft text-primary">
                <card.icon className="size-4.5" />
              </span>
              <h3 className="text-sm font-bold text-ink">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

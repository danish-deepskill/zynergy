import { problems } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Problems() {
  return (
    <Section id="masalah" tone="soft">
      <SectionHeading badge={problems.badge} title={problems.title} subtitle={problems.subtitle} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-md">
              <span className="mb-4 inline-grid size-12 place-items-center rounded-xl bg-red-50 text-red-500">
                <card.icon className="size-5" />
              </span>
              <h3 className="text-base font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center text-base font-semibold text-ink">{problems.closing}</p>
    </Section>
  );
}

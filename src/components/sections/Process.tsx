import { processSection } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <Section id="proses" tone="soft">
      <SectionHeading
        badge={processSection.badge}
        title={processSection.title}
        subtitle={processSection.subtitle}
      />
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {processSection.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.05}>
            <li className="h-full list-none rounded-2xl border border-line bg-white p-6">
              <span className="text-3xl font-extrabold text-primary/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

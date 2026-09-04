import { Check } from "lucide-react";
import { capabilities } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Capabilities() {
  return (
    <Section id="kapabilitas">
      <SectionHeading
        badge={capabilities.badge}
        title={capabilities.title}
        subtitle={capabilities.subtitle}
      />
      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
        {capabilities.columns.map((column, index) => (
          <Reveal key={column.title} delay={index * 0.07} className="h-full">
            <article className="h-full rounded-2xl border border-line bg-white p-6">
              <h3 className="text-base font-extrabold text-ink">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

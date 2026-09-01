import { Quote } from "lucide-react";
import { testimonials } from "@/content/landing";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <Section id="testimoni" tone="soft">
      <SectionHeading
        badge={testimonials.badge}
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.items.map((item, index) => (
          <Reveal key={`${item.name}-${index}`} delay={index * 0.07}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
              <Quote className="size-6 text-primary/25" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid size-10 place-items-center rounded-full bg-primary-soft text-sm font-bold text-primary">
                  {initials(item.name)}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

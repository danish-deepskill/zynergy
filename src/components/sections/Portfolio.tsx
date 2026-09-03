import { portfolio } from "@/content/landing";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Portfolio() {
  return (
    <Section id="portofolio">
      <SectionHeading badge={portfolio.badge} title={portfolio.title} subtitle={portfolio.subtitle} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.07}>
            <article className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg">
              {/* Placeholder thumbnail, ganti dengan screenshot proyek asli */}
              <div
                className={cn(
                  "relative flex h-44 items-end bg-gradient-to-br p-5",
                  item.thumbnailGradient,
                )}
              >
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-ink">
                  {item.category}
                </span>
                <p className="text-xl font-extrabold text-white drop-shadow">{item.client}</p>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({ badge, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl sm:mb-16", align === "center" && "mx-auto text-center")}>
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-dark",
        )}
      >
        <span className="size-1.5 rounded-full bg-secondary" aria-hidden />
        {badge}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}

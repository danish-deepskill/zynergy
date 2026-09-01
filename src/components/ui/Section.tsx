import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  tone?: "default" | "soft";
  className?: string;
  children: React.ReactNode;
}

/** Standard page section: vertical rhythm, horizontal padding, centered container. */
export function Section({ id, tone = "default", className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8",
        tone === "soft" && "bg-surface-soft",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

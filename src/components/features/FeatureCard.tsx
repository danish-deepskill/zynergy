import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type { WebFeature } from "@/content/features";
import { featureIllustrations } from "@/components/features/illustrations";

interface FeatureCardProps {
  feature: WebFeature;
  selected: boolean;
  onToggle: (value: string) => void;
}

/** One selectable feature with a skeleton-wireframe thumbnail. Pure renderer. */
export function FeatureCard({ feature, selected, onToggle }: FeatureCardProps) {
  const illustration = featureIllustrations[feature.value];

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onToggle(feature.value)}
      className={cn(
        "group relative flex h-full w-full flex-col rounded-2xl border bg-white p-3 text-left transition-all",
        selected
          ? "border-secondary bg-secondary-soft shadow-md shadow-secondary/10"
          : "border-line hover:border-primary/30 hover:shadow-md",
      )}
    >
      {/* Mini browser-window thumbnail */}
      <span
        aria-hidden
        className="pointer-events-none mb-3 block w-full overflow-hidden rounded-lg border border-line bg-white"
      >
        <span className="flex items-center gap-1 border-b border-line bg-surface-soft px-2 py-1.5">
          <span className="size-1 rounded-full bg-line" />
          <span className="size-1 rounded-full bg-line" />
          <span className="size-1 rounded-full bg-line" />
        </span>
        <span className="block h-24 p-2.5">
          {illustration ?? (
            <span className="grid h-full place-items-center">
              <feature.icon className="size-8 text-line" />
            </span>
          )}
        </span>
      </span>

      <span className="flex items-start gap-2 px-1 pb-1">
        <span
          className={cn(
            "mt-0.5 shrink-0 transition-colors",
            selected ? "text-secondary" : "text-primary",
          )}
        >
          <feature.icon className="size-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-bold text-ink">{feature.title}</span>
          <span className="mt-0.5 block text-xs leading-relaxed text-muted">
            {feature.description}
          </span>
        </span>
      </span>

      <span
        aria-hidden
        className={cn(
          "absolute right-3 top-3 z-10 grid size-6 place-items-center rounded-full border shadow-sm transition-all",
          selected
            ? "border-secondary bg-secondary text-white"
            : "border-line bg-white text-transparent",
        )}
      >
        <Check className="size-3.5" strokeWidth={3} />
      </span>
    </button>
  );
}

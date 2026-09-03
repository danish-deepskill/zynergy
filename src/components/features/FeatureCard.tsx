import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type { WebFeature } from "@/content/features";

interface FeatureCardProps {
  feature: WebFeature;
  selected: boolean;
  onToggle: (value: string) => void;
}

/** One selectable feature. Pure renderer — selection state lives in the explorer. */
export function FeatureCard({ feature, selected, onToggle }: FeatureCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onToggle(feature.value)}
      className={cn(
        "group relative flex h-full items-start gap-3 rounded-2xl border bg-white p-4 text-left transition-all",
        selected
          ? "border-secondary bg-secondary-soft shadow-md shadow-secondary/10"
          : "border-line hover:border-primary/30 hover:shadow-md",
      )}
    >
      <span
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-xl transition-colors",
          selected
            ? "bg-secondary text-white"
            : "bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white",
        )}
      >
        <feature.icon className="size-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold text-ink">{feature.title}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted">
          {feature.description}
        </span>
      </span>
      <span
        aria-hidden
        className={cn(
          "absolute right-3 top-3 grid size-5 place-items-center rounded-full border transition-all",
          selected
            ? "border-secondary bg-secondary text-white"
            : "border-line bg-white text-transparent",
        )}
      >
        <Check className="size-3" strokeWidth={3} />
      </span>
    </button>
  );
}

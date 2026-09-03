import { cn } from "@/lib/cn";

interface GridPatternProps {
  /** Unique per usage; SVG pattern ids are global on the page. */
  id: string;
  className?: string;
}

/**
 * Subtle blueprint-grid backdrop. Color comes from the text-* class;
 * pair with a mask-image utility so the grid fades toward the edges.
 */
export function GridPattern({ id, className }: GridPatternProps) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

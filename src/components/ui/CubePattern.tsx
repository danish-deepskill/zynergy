import { cn } from "@/lib/cn";

interface CubePatternProps {
  /** Unique per usage; SVG pattern ids are global on the page. */
  id: string;
  className?: string;
}

/**
 * Scattered isometric-crate backdrop for the Supply identity. Color comes
 * from the text-* class; pair with a mask-image utility to fade the edges.
 */
export function CubePattern({ id, className }: CubePatternProps) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <pattern id={id} width="96" height="104" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
            <path d="M28 12 48 24 28 36 8 24Z" />
            <path d="M8 24v24l20 12V36" />
            <path d="M48 24v24L28 60V36" />
            <path d="M28 12v24" strokeOpacity=".5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

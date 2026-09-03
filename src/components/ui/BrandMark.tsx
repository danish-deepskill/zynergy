import { useId } from "react";
import { cn } from "@/lib/cn";

/** Logo mark, same artwork as the favicon (src/app/icon.svg). */
export function BrandMark({ className }: { className?: string }) {
  const gradientId = useId();
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={cn("size-8", className)}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill={`url(#${gradientId})`} />
      <path fill="#fff" d="M27 25H73V38L44.5 62H73V75H27V62L55.5 38H27Z" />
    </svg>
  );
}

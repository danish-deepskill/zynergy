import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * CSS-only skeleton thumbnails — a mini wireframe of each feature, same
 * technique as the hero browser mockup. Add a feature in features.ts?
 * Add its sketch here (missing entries fall back to an icon tile).
 */

function Bar({ className }: { className?: string }) {
  return <div className={cn("rounded-full bg-line", className)} />;
}

function Box({ className }: { className?: string }) {
  return <div className={cn("rounded bg-line/70", className)} />;
}

/** Mini product card used by catalog-style sketches. */
function MiniProduct({ priceClass = "bg-primary/60" }: { priceClass?: string }) {
  return (
    <div className="space-y-1">
      <Box className="h-8 w-full" />
      <Bar className="h-1 w-3/4" />
      <Bar className={cn("h-1 w-1/2", priceClass)} />
    </div>
  );
}

/** Tiny QR-code block. */
function MiniQr({ className }: { className?: string }) {
  return (
    <div className={cn("grid shrink-0 grid-cols-4 gap-px", className)}>
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className={cn("aspect-square rounded-[1px]", [0, 3, 5, 6, 9, 10, 12, 15].includes(i) ? "bg-ink/60" : "bg-line")}
        />
      ))}
    </div>
  );
}

export const featureIllustrations: Record<string, ReactNode> = {
  "katalog-produk": (
    <div className="grid h-full grid-cols-3 gap-1.5">
      <MiniProduct />
      <MiniProduct />
      <MiniProduct />
    </div>
  ),

  "keranjang-checkout": (
    <div className="flex h-full gap-2">
      <div className="flex-1 space-y-1.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <Box className="size-4 shrink-0" />
            <Bar className="h-1 flex-1" />
          </div>
        ))}
      </div>
      <div className="w-2/5 space-y-1 rounded border border-line p-1.5">
        <Bar className="h-1 w-full" />
        <Bar className="h-1 w-2/3" />
        <div className="h-3 rounded bg-secondary/70" />
      </div>
    </div>
  ),

  "pembayaran-qris": (
    <div className="flex h-full items-center justify-center gap-3">
      <MiniQr className="w-12" />
      <div className="w-1/3 space-y-1.5">
        <Bar className="h-1 w-full" />
        <Bar className="h-1 w-2/3" />
        <div className="h-3 w-full rounded bg-secondary/70" />
      </div>
    </div>
  ),

  "booking-reservasi": (
    <div className="space-y-1.5">
      <Bar className="h-1 w-1/3" />
      <div className="grid grid-cols-7 gap-1">
        {[...Array(14)].map((_, i) => (
          <div key={i} className={cn("aspect-square rounded-sm", i === 9 ? "bg-secondary" : "bg-line/70")} />
        ))}
      </div>
      <div className="h-3 w-1/2 rounded bg-primary/60" />
    </div>
  ),

  "menu-digital-qr": (
    <div className="flex h-full gap-2">
      <div className="flex-1 space-y-1.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <Bar className="h-1 w-1/2" />
            <Bar className="h-1 w-4 bg-primary/60" />
          </div>
        ))}
      </div>
      <MiniQr className="w-10 self-center" />
    </div>
  ),

  testimoni: (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5">
        <div className="size-4 rounded-full bg-line" />
        <Bar className="h-1 w-1/4" />
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="size-1.5 rounded-sm bg-secondary" />
          ))}
        </div>
      </div>
      <Bar className="h-1 w-full" />
      <Bar className="h-1 w-5/6" />
      <Bar className="h-1 w-2/3" />
    </div>
  ),

  "galeri-foto": (
    <div className="grid h-full grid-cols-3 gap-1">
      <div className="space-y-1">
        <Box className="h-8" />
        <Box className="h-5" />
      </div>
      <div className="space-y-1">
        <Box className="h-5 bg-primary/25" />
        <Box className="h-8" />
      </div>
      <div className="space-y-1">
        <Box className="h-7" />
        <Box className="h-6" />
      </div>
    </div>
  ),

  "maps-jam-buka": (
    <div className="relative h-full overflow-hidden rounded bg-surface-soft">
      <div className="absolute -left-2 top-4 h-1.5 w-24 rotate-12 rounded-full bg-white" />
      <div className="absolute left-8 -top-2 h-24 w-1.5 rotate-12 rounded-full bg-white" />
      <div className="absolute left-1/2 top-1/3 grid -translate-x-1/2 place-items-center">
        <div className="size-4 rounded-full bg-primary/20" />
        <div className="absolute size-2 rounded-full bg-primary" />
      </div>
      <div className="absolute bottom-1.5 right-1.5 space-y-1 rounded border border-line bg-white p-1">
        <Bar className="h-1 w-8" />
        <Bar className="h-1 w-6 bg-secondary/70" />
      </div>
    </div>
  ),

  "blog-artikel": (
    <div className="space-y-1.5">
      <Bar className="h-1.5 w-2/3 bg-ink/30" />
      <Box className="h-8 w-full" />
      <Bar className="h-1 w-full" />
      <Bar className="h-1 w-5/6" />
    </div>
  ),

  "seo-google": (
    <div className="space-y-2">
      <div className="mx-auto flex h-4 w-3/4 items-center gap-1 rounded-full border border-line px-1.5">
        <div className="size-1.5 rounded-full border border-muted/60" />
        <Bar className="h-1 w-1/3" />
      </div>
      <div className="space-y-1">
        <Bar className="h-1 w-1/2 bg-primary/60" />
        <Bar className="h-1 w-full" />
        <Bar className="h-1 w-5/6" />
      </div>
    </div>
  ),

  "instagram-feed": (
    <div className="grid h-full grid-cols-3 gap-1">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={cn("rounded", i === 1 ? "bg-gradient-to-tr from-primary/60 to-secondary/60" : "bg-line/70")}
        />
      ))}
    </div>
  ),

  "promo-popup": (
    <div className="relative h-full">
      <div className="space-y-1.5 opacity-40">
        <Bar className="h-1 w-full" />
        <Bar className="h-1 w-5/6" />
        <Bar className="h-1 w-2/3" />
        <Bar className="h-1 w-full" />
      </div>
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 space-y-1 rounded border border-line bg-white p-1.5 shadow-sm">
        <Bar className="h-1 w-1/3 bg-primary/60" />
        <Bar className="h-1 w-3/4" />
        <div className="h-3 w-1/2 rounded bg-secondary/70" />
      </div>
    </div>
  ),

  "form-kontak": (
    <div className="space-y-1.5">
      <div className="h-3 rounded border border-line" />
      <div className="h-3 rounded border border-line" />
      <div className="h-6 rounded border border-line" />
      <div className="h-3 w-1/3 rounded bg-primary/70" />
    </div>
  ),

  faq: (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between border-b border-line pb-1">
        <Bar className="h-1 w-1/2" />
        <div className="size-1.5 rounded-sm bg-muted/40" />
      </div>
      <div className="space-y-1 border-b border-line pb-1">
        <div className="flex items-center justify-between">
          <Bar className="h-1 w-2/5 bg-primary/60" />
          <div className="size-1.5 rounded-sm bg-primary/60" />
        </div>
        <Bar className="h-1 w-full" />
        <Bar className="h-1 w-2/3" />
      </div>
      <div className="flex items-center justify-between">
        <Bar className="h-1 w-1/2" />
        <div className="size-1.5 rounded-sm bg-muted/40" />
      </div>
    </div>
  ),

  "multi-bahasa": (
    <div className="space-y-2">
      <div className="ml-auto flex w-fit gap-1 rounded-full border border-line p-0.5">
        <div className="h-2.5 w-5 rounded-full bg-primary/70" />
        <div className="h-2.5 w-5 rounded-full bg-line" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <Bar className="h-1 w-full" />
          <Bar className="h-1 w-3/4" />
          <Bar className="h-1 w-5/6" />
        </div>
        <div className="space-y-1">
          <Bar className="h-1 w-5/6" />
          <Bar className="h-1 w-full" />
          <Bar className="h-1 w-2/3" />
        </div>
      </div>
    </div>
  ),

  "ppdb-pendaftaran": (
    <div className="space-y-2">
      <div className="flex items-center gap-1">
        <div className="size-2 rounded-full bg-secondary" />
        <Bar className="h-px flex-1 bg-secondary/50" />
        <div className="size-2 rounded-full border border-line bg-white" />
        <Bar className="h-px flex-1" />
        <div className="size-2 rounded-full border border-line bg-white" />
      </div>
      <div className="h-3 rounded border border-line" />
      <div className="h-3 rounded border border-line" />
      <div className="h-3 w-2/5 rounded bg-primary/70" />
    </div>
  ),

  "profil-tim": (
    <div className="grid h-full grid-cols-3 items-center gap-1.5">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-1 text-center">
          <div className={cn("mx-auto size-6 rounded-full", i === 0 ? "bg-primary/30" : "bg-line")} />
          <Bar className="mx-auto h-1 w-3/4" />
          <Bar className="mx-auto h-1 w-1/2" />
        </div>
      ))}
    </div>
  ),

  "agenda-pengumuman": (
    <div className="space-y-1.5">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div
            className={cn(
              "grid size-5 shrink-0 place-items-center rounded",
              i === 0 ? "bg-secondary/20" : "bg-surface-soft",
            )}
          >
            <Bar className={cn("h-1 w-2.5", i === 0 && "bg-secondary/70")} />
          </div>
          <div className="flex-1 space-y-1">
            <Bar className="h-1 w-3/4" />
            <Bar className="h-1 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  ),
};

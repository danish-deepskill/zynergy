"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  type BusinessSegment,
  featureCatalog,
  featureCategories,
  featuresSection,
  includedInEveryPackage,
  segmentPresets,
} from "@/content/features";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";
import { waLink } from "@/lib/wa";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { FeatureCard } from "@/components/features/FeatureCard";

/** Tap-to-select feature picker; the "checkout" is a pre-filled WhatsApp message. */
export function FeatureExplorer() {
  const [selected, setSelected] = useState<string[]>([]);
  const [activePreset, setActivePreset] = useState<BusinessSegment | null>(null);

  const toggle = (value: string) => {
    setActivePreset(null);
    setSelected((current) =>
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value],
    );
  };

  const applyPreset = (segment: BusinessSegment) => {
    if (segment === activePreset) {
      setActivePreset(null);
      setSelected([]);
      return;
    }
    setActivePreset(segment);
    setSelected(
      featureCatalog.filter((f) => f.segments.includes(segment)).map((f) => f.value),
    );
  };

  // Catalog order keeps the WhatsApp message readable regardless of click order.
  const selectedTitles = featureCatalog
    .filter((f) => selected.includes(f.value))
    .map((f) => f.title);

  return (
    <div>
      <Reveal>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          <span className="w-full text-center text-sm text-muted sm:w-auto">
            {featuresSection.presetLabel}
          </span>
          {segmentPresets.map((preset) => (
            <button
              key={preset.value}
              type="button"
              aria-pressed={activePreset === preset.value}
              onClick={() => applyPreset(preset.value)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
                activePreset === preset.value
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-white text-muted hover:border-primary/40 hover:text-primary",
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="space-y-10">
        {featureCategories.map((category) => (
          <div key={category.value}>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">
              {category.label}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {featureCatalog
                .filter((f) => f.category === category.value)
                .map((feature, index) => (
                  <Reveal key={feature.value} delay={index * 0.04}>
                    <FeatureCard
                      feature={feature}
                      selected={selected.includes(feature.value)}
                      onToggle={toggle}
                    />
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        <span className="font-semibold text-ink">{includedInEveryPackage.label}</span>{" "}
        {includedInEveryPackage.items.join(" · ")}
      </p>
      <p className="mt-3 text-center text-sm text-muted">
        {featuresSection.footerNote}{" "}
        <a
          href={waLink(siteConfig.waMessages.default)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          Konsultasi gratis di sini
        </a>
      </p>

      {selected.length > 0 && (
        <div className="sticky bottom-4 z-40 mt-8 flex justify-center pe-16 sm:pe-0">
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white/95 py-2 pl-4 pr-2 shadow-xl backdrop-blur">
            <button
              type="button"
              aria-label="Kosongkan pilihan"
              onClick={() => {
                setSelected([]);
                setActivePreset(null);
              }}
              className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface-soft hover:text-ink"
            >
              <X className="size-4" />
            </button>
            <span className="text-sm font-semibold text-ink">
              {selected.length} fitur dipilih
            </span>
            <CtaLink
              href={waLink(siteConfig.waMessages.features(selectedTitles.join(", ")))}
              variant="whatsapp"
              className="px-4 py-2.5"
            >
              <WhatsAppIcon className="size-4" />
              Kirim via WhatsApp
            </CtaLink>
          </div>
        </div>
      )}
    </div>
  );
}

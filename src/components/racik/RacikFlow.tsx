"use client";

import { useRef, useState } from "react";
import { CekQuiz } from "@/components/racik/CekQuiz";
import { FeatureExplorer } from "@/components/features/FeatureExplorer";
import { syncSelectionUrl } from "@/components/features/selectionUrl";

interface RacikFlowProps {
  /** Pre-validated selection from the `?f=` query param. */
  initialSelected: string[];
  /** Pre-validated Creative & Marketing add-ons from the `?a=` query param. */
  initialAddOns: string[];
}

/** Cek (diagnose) on top, Racik (prescribe & pick) below. */
export function RacikFlow({ initialSelected, initialAddOns }: RacikFlowProps) {
  const [selection, setSelection] = useState(initialSelected);
  const explorerRef = useRef<HTMLDivElement>(null);

  const scrollToExplorer = () => {
    explorerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const applyRecommendation = (features: string[]) => {
    setSelection(features);
    syncSelectionUrl(features, initialAddOns);
    scrollToExplorer();
  };

  return (
    <>
      <CekQuiz onApply={applyRecommendation} onSkip={scrollToExplorer} />
      <div ref={explorerRef} id="racik" className="mt-16 scroll-mt-24 sm:mt-20">
        {/* Remount on new recommendation so the picker adopts it as fresh state. */}
        <FeatureExplorer
          key={selection.join(",")}
          initialSelected={selection}
          initialAddOns={initialAddOns}
        />
      </div>
    </>
  );
}

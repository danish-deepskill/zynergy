"use client";

import { useState } from "react";
import { ArrowDown, ArrowLeft, CircleAlert, RotateCcw } from "lucide-react";
import { featureCatalog } from "@/content/features";
import { quizQuestions, quizSection, quizVerdicts } from "@/content/quiz";
import { cn } from "@/lib/cn";

interface CekQuizProps {
  /** Called with the recommended feature values when the user applies them. */
  onApply: (features: string[]) => void;
  onSkip: () => void;
}

type Status = "idle" | "active" | "done";

/** 6-question diagnostic: surfaces pains, then prescribes features. */
export function CekQuiz({ onApply, onSkip }: CekQuizProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState(0);
  const [yesValues, setYesValues] = useState<string[]>([]);

  const answer = (yes: boolean) => {
    const q = quizQuestions[step];
    setYesValues((current) => {
      const without = current.filter((v) => v !== q.value);
      return yes ? [...without, q.value] : without;
    });
    if (step + 1 < quizQuestions.length) {
      setStep(step + 1);
    } else {
      setStatus("done");
    }
  };

  const back = () => {
    if (step === 0) {
      setStatus("idle");
    } else {
      setStep(step - 1);
    }
  };

  const restart = () => {
    setYesValues([]);
    setStep(0);
    setStatus("active");
  };

  const yesQuestions = quizQuestions.filter((q) => yesValues.includes(q.value));
  // Catalog order keeps the recommendation list stable and readable.
  const recommendedSet = new Set(yesQuestions.flatMap((q) => q.features));
  const recommended = featureCatalog
    .filter((f) => recommendedSet.has(f.value))
    .map((f) => f.value);
  const verdict = [...quizVerdicts].reverse().find((v) => yesQuestions.length >= v.min);

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-10">
      {status === "idle" && (
        <div className="text-center">
          <p className="text-lg font-bold text-ink">
            1 menit untuk tahu di mana bisnis Anda bocor.
          </p>
          <p className="mt-2 text-sm text-muted">
            {quizQuestions.length} pertanyaan singkat, jawab jujur saja — hasilnya langsung
            jadi rekomendasi fitur.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setStatus("active")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark"
            >
              {quizSection.startCta}
            </button>
            <button
              type="button"
              onClick={onSkip}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              {quizSection.skipCta}
              <ArrowDown className="size-4" />
            </button>
          </div>
        </div>
      )}

      {status === "active" && (
        <div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={back}
              aria-label="Kembali"
              className="grid size-8 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-surface-soft hover:text-ink"
            >
              <ArrowLeft className="size-4" />
            </button>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {quizSection.progressLabel(step + 1, quizQuestions.length)}
              </p>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
          <p className="mt-8 text-xl font-bold leading-snug text-ink sm:text-2xl">
            {quizQuestions[step].question}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => answer(true)}
              className="rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark"
            >
              {quizSection.yesLabel}
            </button>
            <button
              type="button"
              onClick={() => answer(false)}
              className="rounded-xl border border-line bg-white px-6 py-4 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              {quizSection.noLabel}
            </button>
          </div>
        </div>
      )}

      {status === "done" && verdict && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Hasil cek Anda
          </p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
            {verdict.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{verdict.body}</p>

          {yesQuestions.length > 0 && (
            <ul className="mt-6 space-y-3">
              {yesQuestions.map((q) => (
                <li key={q.value} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <CircleAlert className="mt-0.5 size-4 shrink-0 text-primary" />
                  {q.insight}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            {recommended.length > 0 ? (
              <button
                type="button"
                onClick={() => onApply(recommended)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-colors hover:bg-secondary-dark sm:w-auto"
              >
                {quizSection.applyCta(recommended.length)}
                <ArrowDown className="size-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onSkip}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark sm:w-auto"
              >
                Lihat semua fitur
                <ArrowDown className="size-4" />
              </button>
            )}
            <button
              type="button"
              onClick={restart}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary",
                "w-full sm:w-auto",
              )}
            >
              <RotateCcw className="size-4" />
              {quizSection.retryCta}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

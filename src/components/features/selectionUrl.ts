import { featureCatalog } from "@/content/features";

/**
 * The current racikan lives in the `?f=` query param so any state of the
 * picker is a shareable, revisitable link (prospects can send theirs back).
 */

export function syncSelectionUrl(values: string[]): void {
  const url = new URL(window.location.href);
  if (values.length > 0) {
    url.searchParams.set("f", values.join(","));
  } else {
    url.searchParams.delete("f");
  }
  window.history.replaceState(null, "", url);
}

/** Parse and validate a `?f=` value against the catalog. */
export function parseSelectionParam(param: string | undefined): string[] {
  if (!param) return [];
  const known = new Set(featureCatalog.map((f) => f.value));
  return param.split(",").filter((v) => known.has(v));
}

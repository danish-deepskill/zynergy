import { addOns, featureCatalog } from "@/content/features";

/**
 * The current racikan lives in query params so any state of the picker is a
 * shareable, revisitable link: `?f=` for website features, `?a=` for
 * Creative & Marketing add-ons.
 */

export function syncSelectionUrl(features: string[], addOnValues: string[] = []): void {
  const url = new URL(window.location.href);
  if (features.length > 0) {
    url.searchParams.set("f", features.join(","));
  } else {
    url.searchParams.delete("f");
  }
  if (addOnValues.length > 0) {
    url.searchParams.set("a", addOnValues.join(","));
  } else {
    url.searchParams.delete("a");
  }
  window.history.replaceState(null, "", url);
}

/** Parse and validate a `?f=` value against the feature catalog. */
export function parseSelectionParam(param: string | undefined): string[] {
  if (!param) return [];
  const known = new Set(featureCatalog.map((f) => f.value));
  return param.split(",").filter((v) => known.has(v));
}

/** Parse and validate an `?a=` value against the add-on list. */
export function parseAddOnsParam(param: string | undefined): string[] {
  if (!param) return [];
  const known = new Set<string>(addOns.items.map((a) => a.value));
  return param.split(",").filter((v) => known.has(v));
}

import type { FieldHook } from "payload";

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

/** Auto-fills the slug from another field when left empty. */
export function slugFrom(sourceField: string): FieldHook {
  return ({ value, data }) => {
    if (typeof value === "string" && value.length > 0) return slugify(value);
    const source = data?.[sourceField];
    return typeof source === "string" ? slugify(source) : value;
  };
}

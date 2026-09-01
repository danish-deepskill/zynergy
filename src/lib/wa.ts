import { siteConfig } from "@/content/site";

/** Builds a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

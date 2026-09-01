import Link from "next/link";
import { Mail, MapPin, Zap } from "lucide-react";
import { siteConfig } from "@/content/site";
import { services } from "@/content/landing";
import { waLink } from "@/lib/wa";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="#beranda" className="flex items-center gap-2" aria-label={siteConfig.name}>
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-white">
              <Zap className="size-4" fill="currentColor" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-ink">
              {siteConfig.name}
              <span className="text-primary">.</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Navigasi footer">
          <h3 className="text-sm font-bold text-ink">Navigasi</h3>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold text-ink">Layanan</h3>
          <ul className="mt-4 space-y-2.5">
            {services.cards.map((service) => (
              <li key={service.title} className="text-sm text-muted">
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-ink">Kontak</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={waLink(siteConfig.waMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="size-4 text-secondary" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted">
              <MapPin className="size-4 text-primary" />
              {siteConfig.serviceArea}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-line pt-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  );
}

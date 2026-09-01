import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "whatsapp" | "outline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark",
  whatsapp: "bg-secondary text-white shadow-lg shadow-secondary/25 hover:bg-secondary-dark",
  outline: "border border-line bg-white text-ink hover:border-primary/40 hover:text-primary",
};

interface CtaLinkProps {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

/** Button-styled link. External URLs (WhatsApp, socials) open in a new tab. */
export function CtaLink({ href, variant = "primary", className, children }: CtaLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors",
    variantClasses[variant],
    className,
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

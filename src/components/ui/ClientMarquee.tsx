import Image from "next/image";
import { supplyPage } from "@/content/company";
import { cn } from "@/lib/cn";

/**
 * Strip logo klien berjalan (auto-scroll). Daftar dirender dua kali untuk
 * loop mulus; duplikat aria-hidden. Reduced motion: animasi mati, duplikat
 * disembunyikan, baris wrap statis. Latar harus terang (dua logo ber-
 * background putih).
 */
export function ClientMarquee({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]",
        className,
      )}
    >
      <ul className="flex w-max items-center motion-safe:animate-marquee motion-safe:hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-6">
        {[...supplyPage.clients, ...supplyPage.clients].map((client, index) => (
          <li
            key={`${client.name}-${index}`}
            aria-hidden={index >= supplyPage.clients.length || undefined}
            className={cn(
              "mx-7 shrink-0",
              index >= supplyPage.clients.length && "motion-reduce:hidden",
            )}
          >
            <Image
              src={client.logo}
              alt={index < supplyPage.clients.length ? client.name : ""}
              title={client.name}
              width={client.width}
              height={client.height}
              className="h-9 w-auto max-w-40 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10 sm:max-w-48"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

import { stats } from "@/content/landing";
import { Reveal } from "@/components/ui/Reveal";

export function StatsBar() {
  return (
    <div className="border-y border-line bg-white px-4 py-10 sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-primary sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

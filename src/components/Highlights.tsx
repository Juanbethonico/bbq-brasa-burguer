import { Flame, CalendarDays, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { highlights } from "@/data/menu";

const iconMap: Record<string, LucideIcon> = {
  Flame,
  CalendarDays,
  Wallet,
};

export function Highlights() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative bg-charcoal-950 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 md:grid-cols-3 md:px-10">
        {highlights.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.title}
              style={{
                transitionDelay: visible ? `${i * 110}ms` : "0ms",
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-charcoal-900 to-charcoal-950 p-7 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              } hover:border-ember-500/40`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ember-500/10 blur-2xl transition-opacity duration-500 group-hover:bg-ember-500/25" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-ember-500 text-charcoal-950 font-bold shadow-lg shadow-ember-500/40 ring-2 ring-ember-400/50">
                <Icon className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="mt-5 font-headline text-2xl tracking-wide uppercase text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-white/60">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

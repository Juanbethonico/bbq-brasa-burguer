import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { menuItems } from '@/data/menu';

export function Menu() {
  const { ref, visible } = useReveal();

  return (
    <section id="cardapio" className="relative bg-charcoal-950 py-20 md:py-28">
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-ember-600/10 blur-[120px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* heading */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-400">
            Nosso cardápio
          </span>
          <h2 className="mt-3 font-headline text-5xl uppercase tracking-wide text-white md:text-7xl">
            Feito na brasa
          </h2>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-white/55">
            Cada item é preparado no fogo de verdade, com ingredientes
            selecionados e o sabor defumado que só a brasa entrega.
          </p>
        </div>

        {/* grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, i) => (
            <article
              key={item.id}
              style={{ transitionDelay: visible ? `${i * 110}ms` : '0ms' }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-charcoal-900 transition-all duration-700 hover:-translate-y-1.5 hover:border-ember-500/40 hover:ember-glow ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/10 to-transparent" />
                {item.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-ember-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-charcoal-950">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-headline text-2xl tracking-wide uppercase text-white">
                    {item.name}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/30 transition-all group-hover:text-ember-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <p className="mt-2 flex-1 text-[13px] font-medium leading-relaxed text-white/55">
                  {item.description}
                </p>

                {/* tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* price */}
                <div className="mt-5 flex items-end justify-between border-t border-white/5 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    Preço
                  </span>
                  <span className="font-headline text-2xl tracking-wide text-ember-400">
                    {item.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA below grid */}
        <div className="mt-14 text-center">
          <a
            href="https://whatsmenu.com.br/bbqbrasaburguer?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAactHLQQE3ChoVhFG3vh1KhZ6hfHi3NzgjkpTdYHflzKmzq193z3-nDR5MVlnw_aem_qWrEQ5lv50pmspSYBOcfgQ&utm_id=97760_v0_s00_e0_tv3"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ember-500/40 bg-ember-500/10 px-7 py-4 text-sm font-black uppercase tracking-wider text-ember-300 transition-all hover:bg-ember-500 hover:text-charcoal-950"
          >
            Faça seu pedido pelo WhatsApp
            <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
}

import { Flame } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="quem-somos" className="relative bg-charcoal-950 py-12 md:py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-6 md:px-10">
        <div
          className={`relative overflow-hidden rounded-[2.5rem] border border-ember-500/20 bg-gradient-to-br from-ember-600 via-ember-500 to-ember-700 p-8 md:p-14 transition-all duration-700 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* texture */}
          <div className="pointer-events-none absolute inset-0 grain opacity-[0.08]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* image */}
            <div className="relative overflow-hidden rounded-3xl h-72 md:h-[24rem]">
              <img
                src="https://images.pexels.com/photos/15898820/pexels-photo-15898820.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Ambiente da hamburgueria BBQ Brasa"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
            </div>

            {/* copy */}
            <div className="flex flex-col">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-charcoal-950/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                <Flame className="h-3.5 w-3.5" strokeWidth={2.5} />
                Nossa história
              </span>
              <h2 className="mt-5 font-headline text-5xl uppercase leading-none text-white md:text-7xl">
                Quem somos
              </h2>
              <p className="mt-5 text-sm font-semibold leading-relaxed text-charcoal-950/85 md:text-base">
                Nascemos em Sobradinho I com a proposta de servir um hambúrguer
                artesanal de alta qualidade, assado no fogo de verdade na brasa
                e com um valor que cabe no bolso.
              </p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-charcoal-950/85 md:text-base">
                Ingredientes selecionados, carnes suculentas e atendimento
                todos os dias da semana para levar até você o verdadeiro sabor
                de churrasco.
              </p>

              <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-charcoal-950 px-4 py-3 text-[11px] font-black uppercase tracking-widest text-ember-400">
                <Flame className="h-4 w-4" strokeWidth={3} />
                Feito na brasa. Do jeito certo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

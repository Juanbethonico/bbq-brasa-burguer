import { Flame, Clock, MapPin, ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-charcoal-950 pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-ember-600/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full bg-ember-500/20 blur-[110px]" />
        <div className="absolute inset-0 grain opacity-[0.04]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ember-300 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-ember-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-400" />
            </span>
            Hamburgueria Artesanal · Sobradinho I
          </div>

          <h1 className="font-headline text-6xl leading-[0.88] sm:text-7xl md:text-8xl uppercase tracking-tight text-white animate-fade-up">
            Hambúrguer
            <br />
            artesanal feito
            <br />
            <span className="text-ember-500">na brasa</span>
          </h1>

          <p className="mt-7 max-w-md text-base font-semibold leading-relaxed text-white/70 animate-fade-up [animation-delay:120ms]">
            Sabor defumado autêntico de churrasco no fogo de verdade. Carne
            selada na brasa, ingredientes selecionados e um valor
            que cabe no bolso.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up [animation-delay:220ms]">
            <a
              href="https://wa.me/5561900000000"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-ember-500 px-7 py-4 text-sm font-black uppercase tracking-wider text-charcoal-950 transition-all hover:bg-ember-400 hover:ember-glow-lg"
            >
              Fazer pedido
              <span className="text-xs font-bold opacity-70">
                a partir de R$ 14,99
              </span>
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={3}
              />
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white/90 transition-colors hover:border-ember-500/50 hover:text-ember-300"
            >
              Ver cardápio
            </a>
          </div>

          {/* Meta row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-wider text-white/55 animate-fade-up [animation-delay:320ms]">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-ember-400" strokeWidth={2.5} />
              18h — 00h
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-ember-400" strokeWidth={2.5} />
              Sobradinho I — DF
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="h-4 w-4 text-ember-400" strokeWidth={2.5} />
              Seg a Seg
            </span>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative flex justify-center animate-scale-in [animation-delay:200ms]">
          {/* glow ring */}
          <div className="absolute top-1/2 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500/25 blur-[90px]" />
          <div className="absolute top-1/2 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember-500/20" />

          <div className="relative animate-float-slow">
            <img
              src="/hero-burguer.jpeg"
              alt="Hambúrguer artesanal duplo na brasa"
              className="relative z-10 h-[22rem] w-[22rem] rounded-full object-cover shadow-2xl ring-1 ring-white/10 sm:h-[26rem] sm:w-[26rem]"
            />
            {/* floating badge: rating */}
            <div className="absolute -left-2 top-6 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-charcoal-900/90 px-3.5 py-2.5 backdrop-blur-md animate-float-slower">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-ember-400 text-ember-400"
                  />
                ))}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                4,9 · 320+ pedidos
              </span>
            </div>
            {/* floating badge: flame */}
            <div className="absolute -right-1 bottom-10 z-20 flex items-center gap-2 rounded-2xl border border-ember-500/30 bg-ember-500/15 px-3.5 py-2.5 backdrop-blur-md animate-float-slow [animation-delay:1s]">
              <Flame className="h-4 w-4 text-ember-400" strokeWidth={2.5} />
              <span className="text-[11px] font-black uppercase tracking-wider text-ember-200">
                Na brasa
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-16 border-y border-white/5 bg-charcoal-900/60 py-4">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center gap-10 pr-10">
                {[
                  "Feito na brasa",
                  "Pão brioche artesanal",
                  "Blend 120g",
                  "Bacon crocante",
                  "Molho barbecue da casa",
                  "Aberto todos os dias",
                  "Sobradinho I — DF",
                ].map((t) => (
                  <span key={t + dup} className="flex items-center gap-10">
                    <span className="font-headline text-xl tracking-wider text-white/35 uppercase">
                      {t}
                    </span>
                    <Flame
                      className="h-4 w-4 text-ember-500/70"
                      strokeWidth={2.5}
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

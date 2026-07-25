import { Flame, Clock, MapPin, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer
      id="unidades"
      className="relative border-t border-white/5 bg-charcoal-950 pt-16 pb-8"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500 text-charcoal-950">
                <Flame className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-headline text-2xl tracking-wider text-white">
                BBQ <span className="text-ember-500">BRASA</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-semibold leading-relaxed text-white/50">
              Hambúrguer artesanal feito na brasa, do jeito certo. Sabor
              defumado que só o fogo de verdade entrega.
            </p>
          </div>

          {/* unit */}
          <div>
            <h4 className="font-headline text-xl uppercase tracking-wider text-white">
              Unidade
            </h4>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" strokeWidth={2.5} />
                 Quadra 10 Conjunto A casa,44 - Sobradinho I / Brasília
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" strokeWidth={2.5} />
                Segunda a Segunda · 18h às 00h
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-headline text-xl uppercase tracking-wider text-white">
              Pedidos & Contato
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/5561900000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/80 transition-colors hover:border-ember-500/40 hover:text-ember-300"
              >
                <MessageCircle className="h-4 w-4 text-ember-400" strokeWidth={2.5} />
                WhatsApp — (61) 99981-2451
              </a>
              <a
                href="https://www.instagram.com/bbqbrasaburguer/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/80 transition-colors hover:border-ember-500/40 hover:text-ember-300"
              >
                <Instagram className="h-4 w-4 text-ember-400" strokeWidth={2.5} />
                @bbqbrasaburguer
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs font-semibold text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} BBQ Brasa Burguer. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito na brasa
            <Flame className="h-3.5 w-3.5 text-ember-500" strokeWidth={2.5} />
            em Sobradinho I
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Menu, X, Flame } from "lucide-react";

const navLinks = [
  { label: "Sobradinho I", href: "#unidades" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Quem Somos", href: "#quem-somos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal-950/85 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/logo.jpeg"
            alt="BBQ Brasa Logo"
            className="h-11 w-11 rounded-full object-cover border border-ember-500/50 shadow-md"
          />
          <span className="font-headline text-2xl md:text-3xl tracking-wider text-white">
            BBQ <span className="text-ember-500">BRASA</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-9 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-ember-400 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ember-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://whatsmenu.com.br/bbqbrasaburguer?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnpE4NGKzuaI09WjXBK32aIt5IRseVcqABro5hCi08YkGmoeOv7QUDqgYYRlw_aem_fb2UvjFi2sBrEpxF5_5T8A&utm_id=97760_v0_s00_e0_tv3"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ember-500 px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-charcoal-950 transition-all hover:bg-ember-400 hover:ember-glow"
        >
          <Flame className="h-3.5 w-3.5" strokeWidth={3} />
          Pedir agora
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2 -mr-2"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-6 mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-charcoal-900/95 p-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider text-white/80 transition-colors hover:bg-white/5 hover:text-ember-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5561900000000"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-ember-500 px-4 py-3 text-sm font-black uppercase tracking-widest text-charcoal-950"
          >
            <Flame className="h-4 w-4" strokeWidth={3} />
            Pedir agora
          </a>
        </nav>
      </div>
    </header>
  );
}

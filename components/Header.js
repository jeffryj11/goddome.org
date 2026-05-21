export default function Header() {
  return (
    <header className="site-header fixed left-4 right-4 top-4 z-50 rounded-[1.75rem] border border-gold/20 bg-night/45 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#home" className="flex items-center gap-5" aria-label="Faithful Words home">
          <img src="/images/goddome-logo.svg" alt="God Dome" className="h-20 w-auto max-w-[220px] object-contain drop-shadow-gold" />
          <div className="hidden sm:block">
            <p className="font-serif text-3xl font-bold leading-tight text-cream">Faithful Words</p>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.34em] text-gold">Christian Stories by J.M.</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-cream/90 lg:flex">
          <a className="nav-link" href="#welcome">Welcome</a>
          <a className="nav-link" href="#stories">Stories</a>
          <a className="nav-link" href="#goddome">God Dome</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>

        <a href="#stories" className="rounded-full bg-gradient-to-br from-[#f7d078] to-[#b8792c] px-6 py-3 text-sm font-black text-[#241206] shadow-gold transition hover:-translate-y-0.5 hover:shadow-gold-lg">
          Read Stories
        </a>
      </div>
    </header>
  );
}

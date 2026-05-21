export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-gold/20 bg-night/70 px-6 py-12 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img src="/images/goddome-logo.svg" alt="God Dome" className="h-20 w-auto" />
          <div>
            <p className="font-serif text-2xl font-black">Faithful Words | God Dome</p>
            <p className="mt-1 text-cream/70">Christian stories by J.M. and the God Dome ministry home.</p>
          </div>
        </div>
        <a href="mailto:info@goddome.org" className="rounded-full border border-gold/35 px-6 py-3 text-center font-black text-gold">info@goddome.org</a>
      </div>
    </footer>
  );
}

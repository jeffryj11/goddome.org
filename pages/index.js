import Head from "next/head";

const storyCards = [
  {
    title: "Stories by J.M.",
    text: "Warm Christian storytelling written in a personal voice, with room for faith, memory, healing, and hope.",
  },
  {
    title: "Reflections for the Heart",
    text: "Gentle devotional thoughts for quiet mornings, late evenings, and the moments when the soul needs encouragement.",
  },
  {
    title: "A Place to Return",
    text: "A peaceful home for Jeanna’s writings, built around Scripture, tenderness, and the steady light of God’s love.",
  },
];

const values = ["Faith", "Story", "Prayer", "Comfort", "Hope", "Restoration"];

function Header() {
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

function HeroArt() {
  return (
    <div className="hero-card relative overflow-hidden rounded-[2rem] border border-gold/50 bg-[#101936] shadow-2xl shadow-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_18%,rgba(255,190,66,0.95),transparent_8%),radial-gradient(circle_at_60%_34%,rgba(255,113,44,0.82),transparent_13%),linear-gradient(180deg,#18213d_0%,#2a1b22_43%,#1a120f_100%)]" />
      <div className="absolute inset-0 opacity-75 bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,.9)_0_1px,transparent_2px),radial-gradient(circle_at_76%_18%,rgba(244,200,106,.9)_0_1px,transparent_2px),radial-gradient(circle_at_12%_48%,rgba(255,255,255,.75)_0_1px,transparent_2px)] [background-size:180px_180px,240px_240px,300px_300px]" />
      <div className="absolute left-0 right-0 top-[34%] h-[28%] bg-[linear-gradient(180deg,rgba(255,152,50,0.25),rgba(20,31,36,0.05)),radial-gradient(ellipse_at_center,rgba(255,224,126,0.85),transparent_40%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,transparent,#120b09_70%),radial-gradient(ellipse_at_65%_35%,rgba(131,84,39,0.5),transparent_26%)]" />

      <div className="absolute right-[10%] top-[43%] h-36 w-36 rounded-full bg-[radial-gradient(circle,#fff7c8_0_7%,#ffae35_8%_26%,#ff5d1d_27%_42%,transparent_43%)] blur-[1px]" />
      <div className="absolute right-[12%] top-[42%] h-32 w-24 animate-pulse bg-[radial-gradient(ellipse_at_center,#fff8bb_0_9%,#ffb23f_10%_28%,#e8521e_29%_48%,transparent_50%)]" style={{ clipPath: "polygon(50% 0%, 68% 34%, 88% 12%, 78% 54%, 100% 42%, 78% 75%, 58% 100%, 42% 100%, 22% 75%, 0 42%, 22% 54%, 12% 12%, 32% 34%)" }} />
      <div className="absolute right-[8%] top-[58%] h-14 w-44 rounded-full border-[12px] border-[#7f4f28] bg-[#2a160e] shadow-xl" />

      <div className="absolute left-[14%] bottom-[25%] h-28 w-24 rounded-b-[1.5rem] rounded-t-[.5rem] border-4 border-[#f5e5c8] bg-[#9b211d] shadow-xl">
        <div className="absolute left-4 right-4 top-3 h-4 rounded-full bg-[#fff8ec]" />
        <div className="absolute -left-8 top-10 h-14 w-10 rounded-full border-[7px] border-[#9b211d] bg-transparent" />
        <div className="absolute left-8 -top-12 h-12 w-4 rounded-full bg-white/35 blur-sm" />
      </div>

      <div className="absolute left-[47%] bottom-[24%] h-52 w-20 rotate-[-9deg] rounded-[2rem] bg-[linear-gradient(90deg,#27150e,#6f472d,#1d100b)] shadow-2xl" />
      <div className="absolute left-[58%] bottom-[24%] h-52 w-20 rotate-[10deg] rounded-[2rem] bg-[linear-gradient(90deg,#21110b,#7d5133,#1d100b)] shadow-2xl" />
      <div className="absolute left-[46%] bottom-[18%] h-16 w-28 rotate-[-8deg] rounded-[50%] bg-[#1b0d08] shadow-2xl" />
      <div className="absolute left-[56%] bottom-[18%] h-16 w-28 rotate-[8deg] rounded-[50%] bg-[#1b0d08] shadow-2xl" />

      <div className="absolute bottom-0 left-0 right-0 h-[26%] bg-[linear-gradient(90deg,rgba(72,43,22,0.85),rgba(43,25,14,0.95)),repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_10px)]" />

      <div className="relative flex min-h-[540px] items-end p-6 md:min-h-[610px]">
        <div className="grid w-full gap-5 rounded-[1.5rem] border border-gold/35 bg-cream/95 p-6 text-brown shadow-2xl backdrop-blur sm:grid-cols-[0.9fr_1px_1.1fr] sm:items-center md:p-8">
          <div className="flex justify-center sm:justify-start">
            <img src="/images/goddome-logo.svg" alt="God Dome" className="h-28 w-auto max-w-[250px] object-contain" />
          </div>
          <div className="hidden h-28 w-px bg-brown/30 sm:block" />
          <div>
            <p className="font-serif text-4xl font-black leading-tight text-brown">Faithful Words</p>
            <p className="mt-3 max-w-sm text-lg font-bold leading-7 text-copper">warm stories, coffee, firelight, and faith</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Head>
        <title>Faithful Words | God Dome</title>
        <meta name="description" content="Faithful Words by J.M. is the Christian story and reflection home of God Dome." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/goddome-logo.svg" />
      </Head>

      <main className="min-h-screen overflow-hidden bg-night text-cream">
        <Header />

        <section id="home" className="star-field relative min-h-screen px-6 pb-20 pt-44 md:pt-48">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/45 bg-night/45 px-5 py-3 text-sm font-black text-gold shadow-lg backdrop-blur">
                <span>✦</span>
                A quiet place for Christian stories, reflection, and hope
              </div>
              <h1 className="font-serif text-6xl font-black leading-[0.92] tracking-tight text-cream text-shadow-gold md:text-8xl">
                Faithful<br />Words
              </h1>
              <p className="mt-7 text-lg font-black uppercase tracking-[0.36em] text-gold md:text-xl">Christian Stories by J.M.</p>
              <div className="my-6 h-px w-56 bg-gradient-to-r from-gold via-gold/60 to-transparent" />
              <p className="max-w-2xl text-xl leading-9 text-cream/90">
                Faithful Words is Jeanna’s Christian writing home on GodDome.org — a warm space for stories, devotionals, testimony, and gentle reminders of God’s love.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#stories" className="rounded-full bg-gradient-to-br from-[#f7d078] to-[#b8792c] px-8 py-4 text-center font-black text-[#241206] shadow-gold transition hover:-translate-y-0.5 hover:shadow-gold-lg">Enter Faithful Words</a>
                <a href="#goddome" className="rounded-full border border-gold/45 bg-night/35 px-8 py-4 text-center font-black text-gold backdrop-blur transition hover:-translate-y-0.5 hover:bg-gold/10">Learn About God Dome</a>
              </div>
            </div>

            <HeroArt />
          </div>
        </section>

        <section id="welcome" className="relative z-10 mx-auto my-16 max-w-6xl rounded-[2rem] border border-gold/30 bg-cream/95 px-6 py-16 text-brown shadow-2xl shadow-black/30 backdrop-blur md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.34em] text-copper">Welcome</p>
            <h2 className="mt-4 font-serif text-5xl font-black leading-tight md:text-6xl">A gentle corner of God Dome for Jeanna’s writings.</h2>
            <p className="mt-7 text-lg leading-9 text-brown/80">
              This site should feel peaceful, personal, and sincere — like opening a well-loved book beside a warm lamp. God Dome remains the ministry home, while Faithful Words gives Jeanna’s stories room to breathe.
            </p>
          </div>
        </section>

        <section id="stories" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.34em] text-gold">Stories</p>
            <h2 className="mt-4 font-serif text-5xl font-black md:text-6xl">Christian Stories by Jeanna’</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {storyCards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-gold/25 bg-cream/95 p-7 text-brown shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-gold/55">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gold/25 text-2xl text-copper">✦</div>
                <h3 className="font-serif text-3xl font-black">{card.title}</h3>
                <p className="mt-4 leading-8 text-brown/80">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="goddome" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-gold/35 bg-gradient-to-br from-cream via-[#fff8ec] to-[#f4d995] p-8 text-brown shadow-2xl shadow-black/30 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.34em] text-copper">God Dome</p>
                <h2 className="mt-4 font-serif text-5xl font-black leading-tight">The ministry home around the writing.</h2>
                <p className="mt-6 text-lg leading-9 text-brown/80">
                  God Dome provides the broader foundation for prayer, outreach, giving, restoration, and future nonprofit updates. Faithful Words is the storytelling branch where Jeanna’s voice can remain warm, personal, and central.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-white/70 p-7 shadow-xl">
                <div className="text-4xl">❤️</div>
                <h3 className="mt-5 font-serif text-3xl font-black">Support the Mission</h3>
                <p className="mt-3 leading-8 text-brown/75">Donation buttons and PayPal giving links can be added here once final giving links are connected.</p>
                <a href="mailto:info@goddome.org?subject=God%20Dome" className="mt-6 inline-flex rounded-full bg-brown px-6 py-3 font-black text-cream">Contact God Dome</a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-6">
            {values.map((value) => (
              <div key={value} className="rounded-2xl border border-gold/25 bg-night/45 p-5 text-center font-black text-gold shadow-lg backdrop-blur">{value}</div>
            ))}
          </div>
        </section>

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
      </main>
    </>
  );
}

export default HomePage;

import Head from "next/head";

const values = ["Faith", "Gentleness", "Scripture", "Stories", "Prayer", "Hope"];

const storyCards = [
  {
    title: "Stories by J.M.",
    text: "Faith-filled Christian stories written in a warm, personal voice that welcomes readers into hope, healing, and reflection.",
  },
  {
    title: "Reflections for the Heart",
    text: "Short devotionals, quiet encouragement, and Scripture-centered thoughts for everyday life.",
  },
  {
    title: "A Gentle Place to Return",
    text: "A peaceful home for Jeanna’s writings, created with warmth, simplicity, and room for the Spirit to speak.",
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Faithful Words | God Dome</title>
        <meta
          name="description"
          content="Faithful Words by J.M. is the Christian story and reflection home of God Dome, a faith-centered nonprofit ministry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo_resized.png" />
      </Head>

      <main className="min-h-screen bg-[#fbf1df] text-[#332319]">
        <header className="sticky top-0 z-50 border-b border-[#d8b779]/30 bg-[#fbf1df]/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3" aria-label="Faithful Words home">
              <img
                src="/images/logo_resized.png"
                alt="God Dome logo"
                className="h-12 w-12 rounded-full object-contain shadow-sm"
              />
              <div>
                <p className="font-serif text-2xl font-bold leading-none text-[#5a341c]">Faithful Words</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b6a2f]">Christian Stories by J.M.</p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-sm font-semibold text-[#5d4635] md:flex">
              <a className="transition hover:text-[#9b6a2f]" href="#welcome">Welcome</a>
              <a className="transition hover:text-[#9b6a2f]" href="#stories">Stories</a>
              <a className="transition hover:text-[#9b6a2f]" href="#goddome">God Dome</a>
              <a className="transition hover:text-[#9b6a2f]" href="#contact">Contact</a>
            </nav>

            <a
              href="#stories"
              className="rounded-full bg-[#8b5a2b] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#70451f]"
            >
              Read Stories
            </a>
          </div>
        </header>

        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(218,174,91,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(137,90,43,0.16),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit rounded-full border border-[#c79b55]/30 bg-white/60 px-4 py-2 text-sm font-bold text-[#7b4d22] shadow-sm">
                A quiet place for Christian stories, reflection, and hope
              </div>
              <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight tracking-tight text-[#4a2d1a] md:text-7xl">
                Words of faith for the weary, the wondering, and the willing heart.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6b5544] md:text-xl">
                Faithful Words is Jeanna’s Christian writing home on GodDome.org — a warm space for stories, devotionals, testimony, and gentle reminders of God’s love.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#stories"
                  className="inline-flex items-center justify-center rounded-full bg-[#5a341c] px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#3f2414]"
                >
                  Enter Faithful Words
                </a>
                <a
                  href="#goddome"
                  className="inline-flex items-center justify-center rounded-full border border-[#c9aa75] bg-white/70 px-7 py-3 font-bold text-[#4a2d1a] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Learn About God Dome
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/70 bg-white/65 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#fff8ec] via-white to-[#f1dfbf] p-8 text-center">
                  <div className="mx-auto max-w-sm rounded-[2rem] border border-[#d9bb7d]/40 bg-[#fffaf1] p-8 shadow-inner">
                    <img
                      src="/images/logo_resized.png"
                      alt="God Dome emblem"
                      className="mx-auto mb-6 h-28 w-28 object-contain"
                    />
                    <p className="font-serif text-4xl font-bold text-[#5a341c]">Faithful Words</p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6a2f]">By J.M.</p>
                    <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#c79b55] to-transparent" />
                    <p className="text-lg italic leading-8 text-[#6b5544]">
                      “Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight...”
                    </p>
                    <p className="mt-3 text-sm font-bold text-[#8b5a2b]">Psalm 19:14</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="welcome" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#9b6a2f]">Welcome</p>
            <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#4a2d1a] md:text-5xl">
              A gentle corner of God Dome for Jeanna’s writings.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6b5544]">
              This site should feel peaceful, personal, and sincere — less like an organization selling something, and more like opening a well-loved book beside a warm lamp. God Dome remains the nonprofit home, while Faithful Words gives Jeanna’s stories room to breathe.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {storyCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] border border-[#d8b779]/40 bg-white/75 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f2dfbd] text-2xl text-[#8b5a2b]">
                  ✦
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#4a2d1a]">{card.title}</h3>
                <p className="mt-4 leading-7 text-[#6b5544]">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stories" className="bg-[#4a2d1a] px-6 py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f3cf87]">Christian Stories</p>
              <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Faithful Words by Jeanna’
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#ead9be]">
                Stories will be published in a simple, readable format with room for Scripture, featured images, and a calm reading experience. Each writing can be credited as “By J.M.”
              </p>
              <a
                href="https://rockwallbodyandsoul.com/"
                className="mt-8 inline-flex rounded-full bg-[#f3cf87] px-7 py-3 font-black text-[#4a2d1a] transition hover:-translate-y-0.5 hover:bg-[#ffe0a1]"
              >
                Visit Jeanna’s Website
              </a>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                "Stories",
                "Devotionals",
                "Reflections",
              ].map((item) => (
                <article key={item} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="text-3xl">✍️</div>
                  <h3 className="mt-5 font-serif text-2xl font-bold">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#ead9be]">
                    A warm reading layout for faith-centered writing, image-supported posts, and quiet encouragement.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="goddome" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#f3d99f] via-[#fff8ec] to-white p-8 shadow-xl md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8b5a2b]">God Dome</p>
                <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#4a2d1a] md:text-5xl">
                  The nonprofit home around the writing ministry.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#6b5544]">
                  God Dome provides the broader ministry foundation: prayer, outreach, nonprofit updates, giving, and faith-based projects. Faithful Words is the storytelling and reflection branch where Jeanna’s voice can remain front and center.
                </p>
                <p className="mt-6 rounded-2xl bg-white/70 p-5 text-base italic leading-7 text-[#6b5544] shadow-sm">
                  “My house shall be called a house of prayer for all nations.” — Isaiah 56:7
                </p>
              </div>
              <div id="donate" className="rounded-[1.5rem] bg-white p-7 shadow-lg">
                <div className="text-4xl">❤️</div>
                <h3 className="mt-5 font-serif text-2xl font-bold text-[#4a2d1a]">Support the Mission</h3>
                <p className="mt-3 leading-7 text-[#6b5544]">
                  Donation buttons can be added here once the PayPal links are connected. This section will remain soft, simple, and ministry-focused.
                </p>
                <div className="mt-6 grid gap-3">
                  <a href="mailto:info@goddome.org?subject=God%20Dome%20Donation" className="rounded-full bg-[#5a341c] px-5 py-3 text-center font-bold text-white transition hover:bg-[#3f2414]">
                    Request Donation Link
                  </a>
                  <a href="#contact" className="rounded-full border border-[#c9aa75] px-5 py-3 text-center font-bold text-[#4a2d1a] transition hover:bg-[#fff8ec]">
                    Contact God Dome
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-6">
            {values.map((value) => (
              <div key={value} className="rounded-2xl border border-[#d8b779]/40 bg-white/75 p-5 text-center font-bold text-[#5a341c] shadow-sm">
                {value}
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="border-t border-[#d8b779]/30 bg-[#fffaf1] px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-serif text-2xl font-bold text-[#4a2d1a]">Faithful Words | God Dome</p>
              <p className="mt-2 text-[#6b5544]">Christian stories by J.M. and the God Dome ministry home.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="mailto:info@goddome.org" className="inline-flex items-center justify-center rounded-full border border-[#c9aa75] px-5 py-3 font-bold text-[#4a2d1a] hover:bg-white">
                Contact
              </a>
              <a href="#stories" className="inline-flex items-center justify-center rounded-full bg-[#8b5a2b] px-5 py-3 font-bold text-white hover:bg-[#70451f]">
                Read Stories
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

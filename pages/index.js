import Head from "next/head";

const values = ["Faith", "Prayer", "Restoration", "Storytelling", "Service", "Hope"];

const storyTypes = [
  {
    title: "Christian Stories",
    text: "Faith-filled writings by Jeanna’ that point readers toward hope, endurance, and the love of God.",
  },
  {
    title: "Devotionals & Reflections",
    text: "Short-form encouragement, Scripture-centered reflections, and personal testimony for daily reading.",
  },
  {
    title: "Ministry Updates",
    text: "Announcements, nonprofit milestones, outreach plans, giving updates, and ways to support the mission.",
  },
];

const cards = [
  {
    title: "A House of Prayer",
    text: "God Dome is being built as a digital gathering place rooted in reverence for God, prayer, Scripture, and service.",
  },
  {
    title: "A Home for Stories",
    text: "Jeanna’s writings will remain a core branch of the site, giving readers a warm place to encounter Christian stories and reflections.",
  },
  {
    title: "A Mission of Restoration",
    text: "The ministry exists to encourage hearts, restore hope, and create practical pathways for people to give, serve, and pray.",
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>God Dome | Faith, Hope, Restoration, and Christian Stories</title>
        <meta
          name="description"
          content="God Dome is a faith-centered nonprofit ministry sharing Christian stories, Scripture, prayer, restoration, and outreach."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo_resized.png" />
      </Head>

      <main className="min-h-screen bg-[#fff8ec] text-stone-950">
        <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#fff8ec]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3" aria-label="God Dome home">
              <img
                src="/images/logo_resized.png"
                alt="God Dome logo"
                className="h-12 w-12 rounded-full object-contain shadow-md"
              />
              <div>
                <p className="text-xl font-black leading-none tracking-tight">God Dome</p>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">
                  Faith • Hope • Restoration
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-700 md:flex">
              <a className="transition hover:text-amber-800" href="#mission">Mission</a>
              <a className="transition hover:text-amber-800" href="#stories">Jeanna’s Stories</a>
              <a className="transition hover:text-amber-800" href="#nonprofit">501(c)(3)</a>
              <a className="transition hover:text-amber-800" href="#contact">Contact</a>
            </nav>

            <a
              href="#donate"
              className="rounded-full bg-amber-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-800"
            >
              Donate
            </a>
          </div>
        </header>

        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.30),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.16),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.08fr_0.92fr] md:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-700/20 bg-white/70 px-4 py-2 text-sm font-bold text-amber-900 shadow-sm">
                ✨ Launching as a faith-centered 501(c)(3) nonprofit
              </div>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-stone-950 md:text-7xl">
                A home for faith, stories, restoration, and hope.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
                God Dome is a Christian nonprofit platform bringing together ministry updates, giving support, community outreach, prayer, and Jeanna’s inspiring faith-based writings.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#donate"
                  className="inline-flex items-center justify-center rounded-full bg-stone-950 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-stone-800"
                >
                  Support the Mission
                </a>
                <a
                  href="#stories"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/75 px-7 py-3 font-bold text-stone-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Read Jeanna’s Stories
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-amber-100 via-white to-stone-100 p-8 text-center">
                  <div className="mx-auto flex h-64 max-w-sm items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-stone-900 p-2 shadow-xl">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#fff8ec] px-8">
                      <img
                        src="/images/logo_resized.png"
                        alt="God Dome emblem"
                        className="mb-4 h-24 w-24 object-contain"
                      />
                      <p className="text-3xl font-black tracking-tight">GOD DOME</p>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-stone-600">
                        Gather • Restore • Shine
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-5 text-left shadow-sm">
                      <p className="text-3xl font-black text-amber-800">501(c)(3)</p>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        A clear nonprofit announcement and giving pathway for supporters.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-5 text-left shadow-sm">
                      <p className="text-3xl font-black text-amber-800">Stories</p>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        Jeanna’s writings featured as a dedicated ministry branch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-800">Our Mission</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Build a digital gathering place that points people back to God.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              GodDome.org serves as the main nonprofit home: a place to announce the ministry, receive donations, publish updates, share testimonies, and guide visitors into Jeanna’s writings.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] border border-amber-900/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">
                  ✦
                </div>
                <h3 className="text-2xl font-black">{card.title}</h3>
                <p className="mt-4 leading-7 text-stone-700">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stories" className="bg-stone-950 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Featured Branch</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Christian Stories by Jeanna’
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-300">
                Jeanna’s stories will live as a beautiful companion experience connected from the God Dome homepage while keeping the nonprofit hub clear and focused.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full bg-amber-500 px-7 py-3 font-black text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Submit or Request a Story Update
              </a>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {storyTypes.map((item) => (
                <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="text-3xl">✍️</div>
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nonprofit" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] bg-gradient-to-br from-amber-200 via-yellow-100 to-white p-8 shadow-xl md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-900">501(c)(3) Announcement</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                  God Dome is preparing to launch as a nonprofit ministry.
                </h2>
                <p className="mt-6 text-lg leading-8 text-stone-700">
                  This section carries the official nonprofit announcement, explains the purpose of donations, and invites visitors to help build the ministry from the ground up.
                </p>
                <p className="mt-6 rounded-2xl bg-white/70 p-5 text-base italic leading-7 text-stone-700 shadow-sm">
                  “My house shall be called a house of prayer for all nations.” — Isaiah 56:7
                </p>
              </div>
              <div id="donate" className="rounded-[1.5rem] bg-white p-7 shadow-lg">
                <div className="text-4xl">❤️</div>
                <h3 className="mt-5 text-2xl font-black">Give to the Mission</h3>
                <p className="mt-3 leading-7 text-stone-600">
                  PayPal donation buttons can be placed here using the existing God Dome donation links. Until those are connected, this section anchors the giving area for launch.
                </p>
                <div className="mt-6 grid gap-3">
                  <a href="mailto:info@goddome.org?subject=God%20Dome%20Donation" className="rounded-full bg-stone-950 px-5 py-3 text-center font-bold text-white transition hover:bg-stone-800">
                    Request Donation Link
                  </a>
                  <a href="#contact" className="rounded-full border border-stone-300 px-5 py-3 text-center font-bold text-stone-950 transition hover:bg-stone-50">
                    Contact God Dome
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-6">
            {values.map((value) => (
              <div key={value} className="rounded-2xl border border-amber-900/10 bg-white p-5 text-center font-black shadow-sm">
                {value}
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="border-t border-amber-900/10 bg-white px-6 py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-black">God Dome</p>
              <p className="mt-2 text-stone-600">Faith, hope, restoration, and Christian storytelling.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="mailto:info@goddome.org" className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 font-bold text-stone-950 hover:bg-stone-50">
                Contact
              </a>
              <a href="#donate" className="inline-flex items-center justify-center rounded-full bg-amber-700 px-5 py-3 font-bold text-white hover:bg-amber-800">
                Donate
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

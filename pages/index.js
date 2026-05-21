import Head from "next/head";
import Header from "@/components/Header";
import HeroArt from "@/components/HeroArt";
import StoryCards from "@/components/StoryCards";
import Footer from "@/components/Footer";

const values = ["Faith", "Story", "Prayer", "Comfort", "Hope", "Restoration"];

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
          <StoryCards />
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

        <Footer />
      </main>
    </>
  );
}

export default HomePage;

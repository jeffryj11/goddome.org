
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>God Dome | A House of Prayer for All Nations</title>
        <meta name="description" content="Faithful stories, spiritual truth, and Scripture across Jewish and Christian tradition." />
        <link rel="icon" href="/images/logo_resized.png" />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-yellow-100 to-white py-16 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to God Dome
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            A House of Prayer for All Nations — Stories, Scripture, and Spirit
          </p>
          <div className="flex justify-center gap-4">
            <a href="#announcement" className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600">
              Read Our Mission
            </a>
            <a href="#donate" className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300">
              Make a Donation
            </a>
          </div>
        </section>

        <section id="announcement" className="bg-white py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ✨ God Dome Is Now a 501(c)(3) Nonprofit!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We’re honored to announce that God Dome has been officially recognized as a 501(c)(3) tax-exempt nonprofit. 
            Rooted in both Jewish and Christian tradition, God Dome exists to honor the God of Israel, promote truth, and inspire hearts through story and outreach.
          </p>
          <p className="text-md text-gray-600 mb-6 italic">
            “My house shall be called a house of prayer for all nations.” — Isaiah 56:7
          </p>
          <div className="space-x-4">
            <a href="#mission" className="px-5 py-2 bg-amber-500 text-white font-medium rounded hover:bg-amber-600">
              Learn About Our Mission
            </a>
            <a href="#donate" className="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded hover:bg-gray-200">
              Give Now
            </a>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">✍️ Recent Stories by J.M.</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-xl p-6 text-left">
                <h4 className="text-lg font-semibold text-gray-800">Coming Soon</h4>
                <p className="text-gray-600">Stay tuned for stories of faith, struggle, and revelation from Jeanna.</p>
              </div>
              <div className="bg-white shadow rounded-xl p-6 text-left">
                <h4 className="text-lg font-semibold text-gray-800">More to Come</h4>
                <p className="text-gray-600">Blog integration will display Jeanna’s latest writings here.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FFFBF5]/90 border-b border-[#131211]/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight text-[#131211]">
            🔥 Campfire Music
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#131211]/70">
            <a href="#mission" className="hover:text-[#AF3F16] transition-colors">Mission</a>
            <a href="#values" className="hover:text-[#AF3F16] transition-colors">Values</a>
            <a href="#team" className="hover:text-[#AF3F16] transition-colors">Team</a>
            <a href="#faq" className="hover:text-[#AF3F16] transition-colors">FAQ</a>
            <a
              href="#get-involved"
              className="bg-[#AF3F16] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#8B3212] transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#AF3F16] mb-4">
            501(c)(3) Nonprofit
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#131211] leading-tight max-w-3xl mx-auto">
            Building a streaming platform that puts{" "}
            <span className="text-[#AF3F16]">artists first</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#131211]/60 max-w-2xl mx-auto leading-relaxed">
            Fair, transparent payments. Community-based music discovery.
            A sustainable future for independent musicians.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-involved"
              className="bg-[#AF3F16] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#8B3212] transition-colors"
            >
              Join the Beta
            </a>
            <a
              href="#mission"
              className="border-2 border-[#131211]/15 text-[#131211] px-8 py-3.5 rounded-full font-semibold text-base hover:border-[#AF3F16] hover:text-[#AF3F16] transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="bg-[#131211] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fair Compensation",
                desc: "Every stream directly supports the artist. No hidden fees, no opaque algorithms — transparent payments from day one.",
                icon: "💰",
              },
              {
                title: "Community Discovery",
                desc: "Music found through people, not ad spend. Our platform prioritizes genuine connection over pay-to-play promotion.",
                icon: "🎵",
              },
              {
                title: "Artist Ownership",
                desc: "Musicians retain full rights to their work. We believe creators should control their art and their income.",
                icon: "🔑",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Believe</h2>
          <p className="text-lg text-[#131211]/60 max-w-2xl mx-auto mb-12">
            The music industry is broken. Streaming platforms pay fractions of a
            cent per play. We&apos;re building something different.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Artists deserve a living wage from streaming",
              "Listeners want to support the music they love",
              "Technology should empower creators, not exploit them",
              "Transparency is non-negotiable",
            ].map((value) => (
              <div
                key={value}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-[#131211]/5 shadow-sm"
              >
                <span className="text-[#AF3F16] font-bold text-lg mt-0.5">✓</span>
                <span className="text-[#131211]/80 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="bg-[#AF3F16] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re an artist, listener, or supporter — there&apos;s a place for
            you at the campfire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.cfmusic.org"
              className="bg-white text-[#AF3F16] px-8 py-3.5 rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              Sign Up for Beta
            </a>
            <a
              href="https://www.cfmusic.org"
              className="border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131211] text-white/50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Campfire Music Foundation &middot; 501(c)(3) EIN 88-3475249
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="https://www.instagram.com/campfire_music_/" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.youtube.com/@campfiremusicfoundation" className="hover:text-white transition-colors">YouTube</a>
            <a href="https://www.linkedin.com/company/campfire-music-foundation" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

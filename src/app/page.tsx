export default function Home() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FFFBF5]/90 border-b border-[#131211]/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight text-[#131211]">
            🔥 Campfire Music
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#131211]/70">
            <a href="#problem" className="hover:text-[#AF3F16] transition-colors">The Problem</a>
            <a href="#solution" className="hover:text-[#AF3F16] transition-colors">Our Solution</a>
            <a href="#impact" className="hover:text-[#AF3F16] transition-colors">Impact</a>
            <a href="#team" className="hover:text-[#AF3F16] transition-colors">Team</a>
            <a
              href="#donate"
              className="bg-[#AF3F16] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#8B3212] transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#AF3F16] mb-5">
              501(c)(3) Nonprofit &middot; Listen Ethically
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#131211] leading-[1.1] tracking-tight">
              The music industry is broken.
              <br />
              <span className="text-[#AF3F16]">We&apos;re fixing it.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#131211]/60 leading-relaxed max-w-2xl">
              Artists earn fractions of a cent per stream. Labels control distribution.
              Algorithms decide what you hear. Campfire Music Foundation is building
              a streaming platform that puts artists and listeners first — with fair pay,
              transparent accounting, and community-driven discovery.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#donate"
                className="bg-[#AF3F16] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#8B3212] transition-colors text-center"
              >
                Support the Mission →
              </a>
              <a
                href="#problem"
                className="border-2 border-[#131211]/15 text-[#131211] px-8 py-4 rounded-full font-semibold text-base hover:border-[#AF3F16] hover:text-[#AF3F16] transition-colors text-center"
              >
                Learn How
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section id="problem" className="bg-[#131211] text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#AF3F16] mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Streaming changed how we listen. It didn&apos;t change who gets paid.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="border-t-2 border-[#AF3F16] pt-6">
              <p className="text-5xl font-extrabold text-[#AF3F16]">$0.003</p>
              <p className="mt-2 text-white/60 leading-relaxed">
                Average per-stream payout on major platforms. An artist needs
                over 300,000 streams just to earn minimum wage for a month.
              </p>
            </div>
            <div className="border-t-2 border-white/20 pt-6">
              <p className="text-5xl font-extrabold text-white">90%</p>
              <p className="mt-2 text-white/60 leading-relaxed">
                Of streaming revenue goes to the top 1% of artists. Independent
                musicians — the vast majority — are left behind.
              </p>
            </div>
            <div className="border-t-2 border-white/20 pt-6">
              <p className="text-5xl font-extrabold text-white">0</p>
              <p className="mt-2 text-white/60 leading-relaxed">
                Transparency. Artists can&apos;t see how payouts are calculated.
                The system is a black box designed to benefit platforms, not creators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Solution ── */}
      <section id="solution" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#AF3F16] mb-4">
            Our Solution
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#131211] leading-tight max-w-3xl">
            A streaming platform built as a public benefit — not a profit machine.
          </h2>
          <p className="mt-6 text-lg text-[#131211]/60 max-w-2xl leading-relaxed">
            We&apos;re building a subscriber-share model where your subscription
            goes directly to the artists you actually listen to. No pooling.
            No algorithmic gatekeeping. No AI-generated filler.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Direct-to-Artist Payments",
                desc: "Your subscription flows to the artists you stream. Not a pool. Not an algorithm. Direct, transparent, fair.",
                icon: "💰",
              },
              {
                title: "Community Music Discovery",
                desc: "Find music through people, not ad spend. Curated by listeners, not promoted by labels paying for placement.",
                icon: "🎵",
              },
              {
                title: "No Major Label Gatekeeping",
                desc: "Independent artists get equal treatment. No preferential algorithms. No pay-to-play. Your music, your audience.",
                icon: "🔓",
              },
              {
                title: "Full Transparency",
                desc: "Every artist can see exactly how their payouts are calculated. Open books. No hidden fees. No surprises.",
                icon: "📊",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-[#131211]/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#131211] mb-2">{item.title}</h3>
                <p className="text-[#131211]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donate (Primary CTA) ── */}
      <section id="donate" className="bg-[#AF3F16] text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Help us build a fairer music industry.
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Every dollar funds platform development, artist education, and advocacy
            programming. We&apos;re a registered 501(c)(3) — your donation is tax-deductible.
          </p>
          <a
            href="https://www.cfmusic.org"
            className="inline-block bg-white text-[#AF3F16] px-10 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Donate Now
          </a>
          <p className="mt-6 text-white/50 text-sm">
            EIN 88-3475249 &middot; All donations are tax-deductible
          </p>
        </div>
      </section>

      {/* ── Impact / What We've Done ── */}
      <section id="impact" className="py-20 md:py-28 bg-[#131211] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#AF3F16] mb-4">
            Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl">
            We&apos;re not just talking about change. We&apos;re building it.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                label: "Streaming Platform",
                desc: "A public-benefit service for independent music — no AI-generated content, no major label preferential treatment.",
              },
              {
                label: "Artist Education",
                desc: "Free resources and visibility programs helping musicians build sustainable careers on their own terms.",
              },
              {
                label: "Policy Advocacy",
                desc: "Conferences and workshops addressing music policy, including the 2025 Music Policy Forum and Cascadia Music Summit.",
              },
              {
                label: "Live Events",
                desc: "Community concerts like the JAM Duluth series, which distributed over $10,000 directly to northern Minnesota artists.",
              },
              {
                label: "Public Education",
                desc: "Content and campaigns emphasizing creative value and fair compensation in the music ecosystem.",
              },
              {
                label: "Industry Partnerships",
                desc: "Working with Georgetown Entrepreneurship, KEXP, Music Policy Forum, and community organizations nationwide.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#AF3F16] mb-2">{item.label}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Endorsement ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-[#131211] leading-relaxed italic">
            &ldquo;The emerging generation of music stakeholders has an opportunity
            as well as an obligation to address the structural challenges facing musicians.
            Campfire Music Foundation is stepping up with curiosity, imagination,
            and determination to build a better future of music.&rdquo;
          </blockquote>
          <p className="mt-6 text-[#AF3F16] font-semibold">Michael Bracy</p>
          <p className="text-[#131211]/50 text-sm">Music Policy Forum</p>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-20 bg-[#FFFBF5] border-t border-[#131211]/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#AF3F16] mb-4">
            The Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#131211] mb-4">
            A volunteer group of artists, tech stakeholders, and young leaders.
          </h2>
          <p className="text-[#131211]/60 mb-12 max-w-2xl">
            We&apos;re musicians, engineers, and advocates who believe the music
            industry can work better for everyone.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Johannes Larson", role: "Founder & President" },
              { name: "Andrea White", role: "Director & Corporate Secretary" },
              { name: "Davis Provost", role: "Co-Founder & Treasurer" },
              { name: "SYMOnE Wilson", role: "Director" },
              { name: "Jackson St. George", role: "Co-Founder & VP" },
              { name: "Maizy Lawnicki", role: "Outreach Director" },
              { name: "Will Smyth", role: "Co-Founder & Brand Director" },
              { name: "Sadie Habas", role: "Director" },
              { name: "Keeley Tschaikovsky", role: "Partnership Director" },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-xl p-5 border border-[#131211]/5"
              >
                <div className="w-10 h-10 rounded-full bg-[#AF3F16]/10 text-[#AF3F16] flex items-center justify-center font-bold text-sm mb-3">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="font-semibold text-[#131211] text-sm">{person.name}</p>
                <p className="text-[#131211]/50 text-xs mt-0.5">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Second Donate CTA ── */}
      <section className="py-16 bg-white border-t border-[#131211]/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#131211] mb-4">
            Ready to help build something better?
          </h2>
          <p className="text-[#131211]/60 mb-8 max-w-xl mx-auto">
            Join as a listener, sign up as an artist, or make a tax-deductible donation
            to fund fair music streaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.cfmusic.org"
              className="bg-[#AF3F16] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#8B3212] transition-colors"
            >
              Donate
            </a>
            <a
              href="https://www.cfmusic.org"
              className="border-2 border-[#131211]/15 text-[#131211] px-8 py-3.5 rounded-full font-semibold hover:border-[#AF3F16] hover:text-[#AF3F16] transition-colors"
            >
              Join the Beta
            </a>
            <a
              href="https://www.cfmusic.org"
              className="border-2 border-[#131211]/15 text-[#131211] px-8 py-3.5 rounded-full font-semibold hover:border-[#AF3F16] hover:text-[#AF3F16] transition-colors"
            >
              Artist Signup
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#131211] text-white/50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-white font-bold text-lg mb-2">🔥 Campfire Music Foundation</p>
              <p className="text-sm">444 Newton Ave S, Minneapolis, MN 55405</p>
              <p className="text-sm mt-1">501(c)(3) &middot; EIN 88-3475249</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://www.instagram.com/campfire_music_/" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.youtube.com/@campfiremusicfoundation" className="hover:text-white transition-colors">YouTube</a>
              <a href="https://www.linkedin.com/company/campfire-music-foundation" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:contact@cfmusic.org" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs">
            &copy; {new Date().getFullYear()} Campfire Music Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

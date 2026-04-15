export default function Home() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#E8E0CE]/90 border-b border-[#131211]/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" fill="#131211"/>
              <path d="M50 10 A40 40 0 1 1 10 50 A20 20 0 0 0 50 50 A20 20 0 0 1 50 10Z" fill="#E8581C"/>
              <path d="M50 50 A20 20 0 0 1 50 90 A40 40 0 0 1 10 50 A20 20 0 0 0 50 50Z" fill="#131211"/>
              <path d="M50 30 Q40 45 50 50 Q45 40 50 30Z" fill="#E8E0CE"/>
            </svg>
            <span className="text-lg font-bold tracking-tight text-[#131211]">
              Campfire
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#131211]/70">
            <a href="#story" className="hover:text-[#E8581C] transition-colors">Our Story</a>
            <a href="#how" className="hover:text-[#E8581C] transition-colors">How It Works</a>
            <a href="#impact" className="hover:text-[#E8581C] transition-colors">Impact</a>
            <a href="#team" className="hover:text-[#E8581C] transition-colors">Team</a>
            <a
              href="#donate"
              className="bg-[#E8581C] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#C74A15] transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="bg-[#E8E0CE]">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#E8581C] mb-6">
              501(c)(3) Nonprofit &middot; Est. 2022
            </p>
            <h1 className="text-[2.75rem] md:text-[3.75rem] font-extrabold text-[#131211] leading-[1.08] tracking-tight">
              Music streaming can be fair.
              <br />
              <span className="text-[#E8581C]">We&apos;re building it.</span>
            </h1>
            <p className="mt-7 text-[17px] md:text-[19px] text-[#131211]/65 leading-[1.7] max-w-xl">
              Campfire Music Foundation is a nonprofit building a streaming platform
              where your subscription goes directly to the artists you listen to.
              No pooling. No algorithms. No middlemen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#donate"
                className="bg-[#E8581C] text-white px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#C74A15] transition-colors text-center shadow-sm"
              >
                Support the Mission
              </a>
              <a
                href="#story"
                className="border-2 border-[#131211]/12 text-[#131211]/80 px-8 py-4 rounded-full font-bold text-[15px] hover:border-[#E8581C] hover:text-[#E8581C] transition-colors text-center"
              >
                Read Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers bar ── */}
      <section className="bg-[#131211] py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "10,000+", label: "Volunteer Hours" },
            { num: "1,000+", label: "Artists Engaged" },
            { num: "30+", label: "Partner Organizations" },
            { num: "$3M", label: "Capital Campaign Goal" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-extrabold text-[#E8581C]">{s.num}</p>
              <p className="text-white/50 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story ── */}
      <section id="story" className="bg-[#E8E0CE] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#E8581C] mb-4">
            Our Story
          </p>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#131211] leading-tight mb-8">
            Born from frustration. Built with purpose.
          </h2>
          <div className="space-y-5 text-[17px] text-[#131211]/70 leading-[1.75]">
            <p>
              In 2022, a group of college students at Georgetown University looked at the
              music industry and saw a system that wasn&apos;t working. Artists earning fractions
              of a cent per stream. Ninety percent of revenue flowing to the top one percent.
              A black box where nobody could see how payouts were calculated.
            </p>
            <p>
              They were musicians, engineers, and advocates who believed it didn&apos;t have
              to be this way. So they started building an alternative — a streaming platform
              designed as a public benefit, not a profit machine.
            </p>
            <p>
              Three years later, Campfire Music Foundation is a registered 501(c)(3) nonprofit
              with a growing national presence. The founding team has invested over 10,000
              volunteer hours, conducted nearly 400 structured research calls with artists and
              industry professionals, co-produced national music policy conferences, and
              organized impact concerts that distributed over $10,000 directly to artists.
            </p>
            <p className="font-semibold text-[#131211]/90">
              Now we&apos;re raising $3 million to build, launch, and sustain the platform — and
              to transition from an all-volunteer team to a paid, professional staff.
            </p>
          </div>
        </div>
      </section>

      {/* ── Donate (Primary) ── */}
      <section id="donate" className="bg-[#E8581C] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white leading-tight mb-5">
            Help us build a fairer music industry.
          </h2>
          <p className="text-white/80 text-[17px] leading-[1.7] mb-10 max-w-xl mx-auto">
            Every dollar funds platform development, artist education, and advocacy.
            As a registered 501(c)(3), your donation is fully tax-deductible.
          </p>
          <a
            href="https://www.cfmusic.org"
            className="inline-block bg-white text-[#E8581C] px-10 py-4 rounded-full font-extrabold text-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Donate Now
          </a>
          <p className="mt-5 text-white/40 text-sm">
            EIN 88-3475249 &middot; Tax-deductible under IRC Section 170
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how" className="bg-[#E8E0CE] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#E8581C] mb-4">
            How Campfire Works
          </p>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#131211] leading-tight mb-6 max-w-2xl">
            Your money goes to the music you actually listen to.
          </h2>
          <p className="text-[17px] text-[#131211]/65 leading-[1.7] max-w-2xl mb-14">
            Unlike major platforms that pool all subscriptions and pay out
            pro-rata (favoring top artists), Campfire uses a subscriber-share
            model. You set your own price — starting at $5/month — and Campfire
            caps its share at 20% for operating costs. The rest goes directly to
            the artists you stream.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Direct Artist Payments",
                desc: "Your subscription flows to the artists you actually stream. Not a pool. Not an algorithm. Direct, proportional, transparent.",
              },
              {
                title: "Community Discovery",
                desc: "Find music through people, not ad spend. Curated by listeners and local communities, not promoted by labels paying for placement.",
              },
              {
                title: "Independent Only",
                desc: "No major label gatekeeping. Only independent artists and ethical indie labels. No AI-generated content. No pay-to-play.",
              },
              {
                title: "Full Transparency",
                desc: "Every artist sees exactly how their payouts are calculated. Open books. No hidden fees. Artists and rights-holders have full visibility.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/70 rounded-2xl p-7 border border-[#131211]/5"
              >
                <h3 className="text-lg font-bold text-[#131211] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#131211]/60 leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#131211] py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#E8581C] mb-4">
            Core Values
          </p>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-white leading-tight mb-12 max-w-2xl">
            Equity. Transparency. Philanthropy.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Equity",
                desc: "Equitable access and treatment across all dimensions. Artists, staff, and community partners are treated with fairness regardless of background.",
              },
              {
                title: "Transparency",
                desc: "From royalty payouts to internal governance — clear, open, and accountable systems that build trust across the entire ecosystem.",
              },
              {
                title: "Philanthropy",
                desc: "As a public-benefit nonprofit, Campfire will never operate for private gain. All proceeds are reinvested into supporting artists and the platform.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t-2 border-[#E8581C] pt-6">
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/50 text-[15px] leading-[1.65]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section id="impact" className="bg-[#E8E0CE] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#E8581C] mb-4">
            What We&apos;ve Built
          </p>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#131211] leading-tight mb-12 max-w-2xl">
            We&apos;re not just talking about change.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "Streaming Platform", desc: "A public-benefit streaming app in beta — no AI-generated content, no major label preferential treatment." },
              { label: "400 Research Calls", desc: "Structured conversations with artists, industry professionals, and technologists shaping the platform." },
              { label: "Policy Advocacy", desc: "Co-produced the 2025 Music Policy Forum and Cascadia Music Summit with national leaders." },
              { label: "JAM Duluth Concerts", desc: "Community concert series that distributed over $10,000 directly to northern Minnesota artists." },
              { label: "Artist Education", desc: "Free resources and visibility programs helping independent musicians build sustainable careers." },
              { label: "30+ Partners", desc: "Georgetown, KEXP, Music Policy Forum, Bill & Melinda Gates Foundation, and community organizations nationwide." },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/70 rounded-2xl p-6 border border-[#131211]/5"
              >
                <h3 className="text-[15px] font-bold text-[#E8581C] mb-2">{item.label}</h3>
                <p className="text-[14px] text-[#131211]/60 leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Endorsement ── */}
      <section className="bg-[#131211] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed italic">
            &ldquo;The emerging generation of music stakeholders has an obligation
            to address the structural challenges facing musicians. Campfire Music
            Foundation is stepping up with curiosity, imagination, and determination
            to build a better future of music.&rdquo;
          </blockquote>
          <p className="mt-6 text-[#E8581C] font-bold">Michael Bracy</p>
          <p className="text-white/40 text-sm">Music Policy Forum</p>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="bg-[#E8E0CE] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#E8581C] mb-4">
            The Team
          </p>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#131211] leading-tight mb-4">
            Artists, technologists, and young leaders.
          </h2>
          <p className="text-[17px] text-[#131211]/60 leading-[1.7] mb-12 max-w-xl">
            A volunteer group passionate about structural change in the music industry.
            Founded by college students at Georgetown, Amherst, Grinnell, Northeastern, and BU.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Johannes Larson", role: "Founder & President" },
              { name: "Andrea White", role: "Director & Corporate Secretary" },
              { name: "Davis Provost", role: "Co-Founder & Treasurer" },
              { name: "Jackson St. George", role: "Co-Founder & VP" },
              { name: "Will Smyth", role: "Co-Founder & Brand Director" },
              { name: "SYMOnE Wilson", role: "Director" },
              { name: "Sadie Habas", role: "Director" },
              { name: "Maizy Lawnicki", role: "Outreach Director" },
              { name: "Keeley Tschaikovsky", role: "Partnership Director" },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-white/70 rounded-xl p-5 border border-[#131211]/5"
              >
                <div className="w-9 h-9 rounded-full bg-[#E8581C]/10 text-[#E8581C] flex items-center justify-center font-bold text-xs mb-3">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="font-bold text-[#131211] text-[15px]">{person.name}</p>
                <p className="text-[#131211]/50 text-[13px] mt-0.5">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Second Donate CTA ── */}
      <section className="bg-[#E8581C] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Join the movement.
          </h2>
          <p className="text-white/75 text-[16px] mb-8 max-w-lg mx-auto leading-[1.6]">
            Whether you&apos;re an artist, a listener, or someone who believes music
            deserves better — there&apos;s a place for you at the campfire.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.cfmusic.org"
              className="bg-white text-[#E8581C] px-7 py-3.5 rounded-full font-bold text-[15px] hover:bg-white/90 transition-colors"
            >
              Donate
            </a>
            <a
              href="https://www.cfmusic.org"
              className="border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              Join the Beta
            </a>
            <a
              href="https://www.cfmusic.org"
              className="border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              Artist Signup
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#131211] text-white/40 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-white font-bold text-lg mb-2">Campfire Music Foundation</p>
              <p className="text-sm">444 Newton Ave S, Minneapolis, MN 55405</p>
              <p className="text-sm mt-1">501(c)(3) &middot; EIN 88-3475249</p>
              <p className="text-sm mt-1">218-343-5596 &middot; contact@cfmusic.org</p>
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

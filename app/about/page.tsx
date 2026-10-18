import { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "BeeLee is building the operating system for the Philippine grassroots economy, empowering 1.3 million sari-sari stores with offline-first digital tools.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero Banner ── */}
      <section className="bg-soft-teal py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-beelee-teal">
            About BeeLee
          </h1>
          <p className="text-lg md:text-xl text-earth-brown/80 max-w-2xl mx-auto leading-relaxed">
            We&apos;re building the operating system for the grassroots Philippine economy.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Purpose"
            title="Mission & Vision"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-cream-gold rounded-2xl p-8 md:p-10 space-y-4">
              <p className="text-sm font-bold tracking-widest uppercase text-warm-amber">
                Our Mission
              </p>
              <h3 className="text-2xl font-extrabold text-earth-brown">
                Empower Every Barangay Store
              </h3>
              <p className="text-earth-brown/80 leading-relaxed">
                To empower every barangay store to thrive digitally and give every Filipino
                shopper the convenience of discovering and buying from their own community
                &mdash; fast, affordable, and personal.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-soft-teal rounded-2xl p-8 md:p-10 space-y-4">
              <p className="text-sm font-bold tracking-widest uppercase text-beelee-teal">
                Our Vision
              </p>
              <h3 className="text-2xl font-extrabold text-earth-brown">
                A Marketplace in Every Neighborhood
              </h3>
              <p className="text-earth-brown/80 leading-relaxed">
                A Philippines where every neighborhood marketplace is just a tap away, and
                every sari-sari store owner has the tools to compete in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem We Solve ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Why We Exist"
            title="The Problem We Solve"
            description="Philippine sari-sari stores face challenges that no one is solving. We're changing that."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "\uD83D\uDCD3",
                title: "Utang is killing cash flow",
                desc: "Credit tracked in notebooks with no reminders — the #1 reason stores fail.",
              },
              {
                icon: "\uD83D\uDCF6",
                title: "AI tools require connectivity",
                desc: "77% of provinces have poor connectivity. Rural stores get nothing from current tech.",
              },
              {
                icon: "\uD83C\uDFEA",
                title: "Hard discounters closing in",
                desc: "DALI and O!Save are stealing customers, and stores have no competitive tools.",
              },
              {
                icon: "\uD83C\uDF00",
                title: "Typhoons wipe out progress",
                desc: "38% sales drop during storms with no recovery tools to help stores bounce back.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-beelee-teal/10 flex items-center justify-center text-3xl">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-earth-brown">{card.title}</h3>
                <p className="text-earth-brown/70 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Our Origin"
            title="Our Story"
            center={false}
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-earth-brown/80 leading-relaxed">
                The name <strong className="text-beelee-teal">BeeLee</strong> comes from a
                playful fusion of the Filipino word{" "}
                <em className="text-honey-gold font-semibold">&quot;bili&quot;</em> (to buy)
                and the <em className="text-honey-gold font-semibold">bee</em> &mdash; a
                tireless worker who keeps its community thriving. Like bees in a hive, every
                sari-sari store is a vital node in the neighborhood economy.
              </p>
              <p className="text-earth-brown/80 leading-relaxed">
                We started by walking barangays, talking to store owners, and understanding
                the invisible infrastructure that feeds the Philippines. What we discovered
                was staggering:
              </p>
              <div className="bg-soft-teal rounded-2xl p-6 border-l-4 border-beelee-teal">
                <p className="text-beelee-teal font-extrabold text-2xl">
                  70% of manufactured goods
                </p>
                <p className="text-earth-brown/80 mt-1">
                  flow through sari-sari stores, yet only{" "}
                  <strong className="text-honey-gold">14.9%</strong> use any AI tool.
                </p>
              </div>
              <p className="text-earth-brown/80 leading-relaxed">
                That gap became our mission. We set out to build the digital backbone for the
                grassroots economy &mdash; starting with the sari-sari store.
              </p>
            </div>

            <Image src="/images/delivery.jpg" alt="BeeLee delivery — connecting stores and communities" width={600} height={340} className="rounded-2xl shadow-lg object-cover w-full" />
          </div>
        </div>
      </section>

      {/* ── The Team ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="The Hive"
            title="Meet the Hive"
            description="A passionate team dedicated to empowering Philippine communities through technology."
            labelColor="text-honey-gold"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                role: "Founder & CEO",
                focus: "PH Market, Strategy & Fundraising",
                desc: "Walked hundreds of barangays to understand the sari-sari economy firsthand. Now leads BeeLee's mission to give every nanay the same digital leverage as a franchise — at zero upfront cost.",
                image: "/images/blank-avatar.jpg",
              },
              {
                role: "Co-Founder & CTO",
                focus: "Offline-First Mobile, Android & React Native",
                desc: "Engineers resilient, offline-first technology so stores in the 77% of provinces with poor connectivity never lose a transaction or a peso of data.",
                image: "/images/blank-avatar.jpg",
              },
              {
                role: "Head of Product",
                focus: "UX for Nanays, Taglish-First Design",
                desc: "Designs Taglish-first interfaces that feel as intuitive as a notebook and calculator — because if a nanay can't use it in 30 seconds, we haven't done our job.",
                image: "/images/blank-avatar.jpg",
              },
              {
                role: "Head of Growth",
                focus: "Barangay Field Ops & FMCG Partnerships",
                desc: "Builds trust one barangay at a time through grassroots field operations and partnerships with FMCG brands that keep sari-sari shelves stocked.",
                image: "/images/blank-avatar.jpg",
              },
            ].map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <Image src={member.image} alt={member.role} width={400} height={400} className="rounded-2xl object-cover w-full aspect-square" />
                <div className="space-y-1 pt-2">
                  <p className="text-lg font-extrabold text-earth-brown">{member.role}</p>
                  <p className="text-sm font-bold text-beelee-teal">{member.focus}</p>
                </div>
                <p className="text-earth-brown/70 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisors ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Guidance"
            title="Our Advisors"
            description="Industry leaders helping us navigate the path to scale."
          />

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "FMCG & Supply Chain Advisor",
                desc: "Guides our wholesale sourcing strategy and helps sari-sari stores compete on shelf price with hard discounters.",
              },
              {
                title: "Government & Policy Advisor",
                desc: "Navigates DTI and LGU regulations so BeeLee can scale across barangays with full compliance.",
              },
              {
                title: "Fintech & Lending Advisor",
                desc: "Shapes our utang-to-credit roadmap, turning informal lending data into responsible microfinance products.",
              },
            ].map((advisor) => (
              <div
                key={advisor.title}
                className="bg-soft-teal rounded-2xl p-5 space-y-3 text-center"
              >
                <Image
                  src="/images/blank-avatar.jpg"
                  alt={advisor.title}
                  width={128}
                  height={128}
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <p className="text-base font-extrabold text-earth-brown mt-2">
                  {advisor.title}
                </p>
                <p className="text-sm text-earth-brown/70 leading-relaxed">{advisor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-cream-gold py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Our DNA"
            title="What Drives Us"
            labelColor="text-warm-amber"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                filipino: "Madiskarte",
                english: "Resourceful",
                desc: "We find creative solutions to real-world constraints — low connectivity, tight budgets, and unpredictable challenges.",
              },
              {
                filipino: "Maaasahan",
                english: "Reliable",
                desc: "Store owners depend on us. We build trust through consistent uptime, accurate data, and keeping our promises.",
              },
              {
                filipino: "Masigla",
                english: "Energetic",
                desc: "We move fast, iterate often, and bring relentless energy to every barangay we enter.",
              },
              {
                filipino: "Maalaga",
                english: "Caring",
                desc: "Genuine malasakit for communities. We design with empathy and never lose sight of the people we serve.",
              },
              {
                filipino: "Mapagkaisa",
                english: "Unifying",
                desc: "We bring neighborhoods together — connecting shoppers, store owners, and suppliers into one thriving ecosystem.",
              },
            ].map((value) => (
              <div
                key={value.filipino}
                className="bg-white rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-extrabold text-beelee-teal">
                  {value.filipino}
                </h3>
                <p className="text-sm font-bold text-honey-gold">{value.english}</p>
                <p className="text-earth-brown/70 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-beelee-teal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Build the future of neighborhood commerce with us
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            Whether you're a store owner, brand partner, investor, or future teammate — there's a place for you in the BeeLee hive.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/download"
              className="inline-flex items-center justify-center rounded-full bg-honey-gold border-2 border-honey-gold px-8 py-3 text-base font-bold text-earth-brown hover:brightness-110 transition"
            >
              Download the App
            </a>
            <a
              href="/careers"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-base font-bold text-white hover:bg-white hover:text-beelee-teal transition"
            >
              Join the Hive
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

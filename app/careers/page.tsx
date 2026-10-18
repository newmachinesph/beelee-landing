import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the BeeLee hive. We're building the operating system for 1.3 million sari-sari stores. Remote-friendly roles in engineering, product, growth, and operations.",
};

const values = [
  {
    emoji: "🎯",
    title: "Mission-Driven",
    desc: "We exist to empower the nanays and tatays running sari-sari stores across the Philippines. Every line of code, every design decision serves them.",
  },
  {
    emoji: "🇵🇭",
    title: "Filipino-First",
    desc: "Built in the Philippines, for the Philippines. We understand the culture, the hustle, and the heart of local communities.",
  },
  {
    emoji: "🚀",
    title: "Early Stage Impact",
    desc: "Join early and shape a product that will reach millions of Filipinos. Your work here matters from day one.",
  },
  {
    emoji: "🏠",
    title: "Remote-Friendly",
    desc: "Work from anywhere in the Philippines. We believe great work happens wherever you're most productive.",
  },
];

const benefits = [
  "Competitive HMO",
  "Life insurance",
  "Rice & clothing allowance",
  "Flexible schedule",
  "Learning budget",
  "Stock options",
];

const openings = [
  { role: "Senior Android Developer", department: "Engineering" },
  { role: "Backend Engineer", department: "Engineering" },
  { role: "Head of Growth", department: "Growth" },
  { role: "Android Developer", department: "Engineering" },
  { role: "Field Operations Lead", department: "Operations" },
  { role: "Community Manager", department: "Marketing" },
];

export default function CareersPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-soft-teal py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-beelee-teal">
            Join the Hive
          </h1>
          <p className="text-lg text-earth-brown/80 max-w-2xl mx-auto leading-relaxed">
            We&apos;re building the operating system for 1.3 million sari-sari
            stores. Come build with us.
          </p>
          <div className="max-w-3xl mx-auto pt-4">
            <Image src="/images/community-fiesta.jpg" alt="BeeLee community fiesta" width={800} height={400} className="rounded-2xl shadow-lg object-cover w-full" />
          </div>
        </div>
      </section>

      {/* ── Why BeeLee ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Culture"
            title="Why Work Here"
            description="BeeLee isn't just a startup — it's a movement to uplift Filipino micro-entrepreneurs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-soft-teal rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-beelee-teal/10 flex items-center justify-center text-3xl">
                  {v.emoji}
                </div>
                <h3 className="text-xl font-bold text-beelee-teal">
                  {v.title}
                </h3>
                <p className="text-earth-brown/70 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-cream-gold py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Perks"
            title="Benefits & Allowances"
            labelColor="text-warm-amber"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b}
                className="bg-white rounded-xl px-6 py-4 flex items-center gap-3 shadow-sm"
              >
                <span className="text-beelee-teal text-xl font-bold">&#10003;</span>
                <span className="text-earth-brown font-semibold">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Openings"
            title="Current Openings"
            description="We're hiring across the board. Find your fit."
          />

          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.role}
                className="bg-white border border-light-gray rounded-xl border-l-4 border-l-beelee-teal p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-earth-brown">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold tracking-wide uppercase bg-soft-teal text-beelee-teal px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-sm text-earth-brown/60">
                      Philippines (Remote)
                    </span>
                  </div>
                </div>
                <Link
                  href="mailto:careers@beelee.ph"
                  className="text-beelee-teal font-bold hover:underline whitespace-nowrap"
                >
                  Apply &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-soft-teal py-16">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-beelee-teal">
            Don&apos;t see your role?
          </h2>
          <p className="text-earth-brown/80 text-lg leading-relaxed">
            We&apos;re always looking for talented people. Send your CV to{" "}
            <a
              href="mailto:careers@beelee.ph"
              className="text-beelee-teal font-bold underline"
            >
              careers@beelee.ph
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

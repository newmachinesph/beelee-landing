import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with BeeLee. Reach us for partnerships, support, careers, or general inquiries. Email hello@beelee.ph.",
};

const contactCards = [
  {
    emoji: "\uD83D\uDCE7",
    label: "Email",
    email: "hello@beelee.ph",
    desc: "General inquiries",
  },
  {
    emoji: "\uD83E\uDD1D",
    label: "Partnerships",
    email: "partners@beelee.ph",
    desc: "FMCG brands & investors",
  },
  {
    emoji: "\uD83D\uDCBC",
    label: "Careers",
    email: "careers@beelee.ph",
    desc: "Join the hive",
  },
];

const socials = [
  { platform: "Facebook", handle: "facebook.com/beeleeph", href: "https://facebook.com/beeleeph" },
  { platform: "Instagram", handle: "@beeleeph", href: "https://instagram.com/beeleeph" },
];

export default function ContactPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-soft-teal py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-beelee-teal">
            Get in Touch
          </h1>
          <p className="text-lg text-earth-brown/80 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a store owner, brand partner, or investor
            &mdash; we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8">
            {contactCards.map((c) => (
              <div
                key={c.label}
                className="bg-soft-teal rounded-2xl p-8 text-center space-y-3 hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl">{c.emoji}</span>
                <h3 className="text-xl font-bold text-beelee-teal">
                  {c.label}
                </h3>
                <a
                  href={`mailto:${c.email}`}
                  className="text-earth-brown font-semibold hover:text-beelee-teal transition-colors"
                >
                  {c.email}
                </a>
                <p className="text-sm text-earth-brown/60">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-2xl mx-auto px-6 space-y-8">
          <SectionHeading
            title="Send Us a Message"
            description="Fill out the form below and we'll get back to you within 24 hours."
          />

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-earth-brown mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Juan dela Cruz"
                className="w-full rounded-xl border border-earth-brown/20 bg-white px-5 py-3 text-sm text-earth-brown placeholder:text-earth-brown/40 focus:outline-none focus:ring-2 focus:ring-beelee-teal"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-earth-brown mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-earth-brown/20 bg-white px-5 py-3 text-sm text-earth-brown placeholder:text-earth-brown/40 focus:outline-none focus:ring-2 focus:ring-beelee-teal"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-earth-brown mb-1">
                Subject
              </label>
              <select
                className="w-full rounded-xl border border-earth-brown/20 bg-white px-5 py-3 text-sm text-earth-brown focus:outline-none focus:ring-2 focus:ring-beelee-teal"
                defaultValue=""
                disabled
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option>General</option>
                <option>Partnership</option>
                <option>Support</option>
                <option>Press</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-earth-brown mb-1">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full rounded-xl border border-earth-brown/20 bg-white px-5 py-3 text-sm text-earth-brown placeholder:text-earth-brown/40 focus:outline-none focus:ring-2 focus:ring-beelee-teal resize-none"
                readOnly
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-beelee-teal px-8 py-3 text-sm font-bold text-white hover:brightness-110 transition w-full sm:w-auto"
            >
              Send Message
            </button>

            <p className="text-xs text-earth-brown/50 text-center">
              We&apos;ll get back to you within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* ── Social Links ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading title="Find Us Online" label="Social" />

          <div className="grid sm:grid-cols-2 gap-6">
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-soft-teal rounded-2xl p-6 text-center space-y-2 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-beelee-teal">
                  {s.platform}
                </h3>
                <p className="text-sm text-earth-brown/70 font-semibold">
                  {s.handle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Office ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <SectionHeading
            title="Where We Are"
            label="Office"
            description="We're a remote-first team based across the Philippines."
          />

          <div className="max-w-3xl mx-auto">
            <Image src="/images/aerial-barangay.jpg" alt="BeeLee headquarters — Philippines" width={800} height={400} className="rounded-2xl object-cover w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

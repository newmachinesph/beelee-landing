import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "For Store Owners",
  description: "Free sari-sari store app with POS, inventory tracking, utang ledger, AI restock coach, and 18 digital tools. Download BeeLee — zero cost, works offline.",
};

const painPoints = [
  {
    emoji: "😩",
    tagalog: "Utang na hindi nababayaran",
    desc: "You track credit in a notebook. Customers forget. You lose money every month.",
  },
  {
    emoji: "📦",
    tagalog: "Nauubusan ng stock",
    desc: "Your bestsellers run out mid-week. Customers go elsewhere while you wait for delivery.",
  },
  {
    emoji: "😤",
    tagalog: "Natatalo sa DALI at O!Save",
    desc: "Discounters open nearby and pull away your loyal suki with lower prices.",
  },
  {
    emoji: "🌀",
    tagalog: "Nasisirang paninda pag-bagyo",
    desc: "One typhoon wipes out your inventory. No insurance. No safety net.",
  },
];

const features = [
  { icon: "📦", text: "Track every item with offline inventory" },
  { icon: "🧾", text: "Accept GCash, Maya, QRPh payments" },
  { icon: "📒", text: "Digital utang ledger with SMS reminders" },
  { icon: "🤖", text: "AI tells you what to restock" },
  { icon: "💛", text: "Suki loyalty cards to keep customers" },
  { icon: "🛡️", text: "Typhoon insurance with automatic payout" },
  { icon: "📱", text: "Sell e-load and pay bills — earn commissions" },
  { icon: "📊", text: "Sales dashboard with daily profit reports" },
  { icon: "📦", text: "Become a Shopee & Lazada pickup point" },
  { icon: "📶", text: "Monetize your WiFi with Piso WiFi" },
  { icon: "🔗", text: "Online store link — share on FB and Viber" },
  { icon: "💸", text: "Offer Pera Padala and remittance services" },
  { icon: "🚚", text: "Order wholesale FMCG with free delivery" },
  { icon: "🏪", text: "Manage multiple branches in one app" },
  { icon: "⭐", text: "Build your TrustScore for loan eligibility" },
  { icon: "🗺️", text: "See what your barangay is buying" },
];

const testimonials = [
  {
    name: "Aling Maria",
    store: "Maria's Tindahan, Quezon City",
    quote:
      "Dati sinusulat ko lang sa notebook yung utang. Ngayon automated na lahat. Nababayaran na!",
    image: "/images/nanay-store.jpg",
  },
  {
    name: "Mang Pedro",
    store: "Pedro's Store, Cainta",
    quote:
      "Hindi na ako nauubusan ng stock. Yung AI nag-a-alert sa akin kung ano ang bibilhin.",
    image: "/images/restocking.jpg",
  },
  {
    name: "Ate Jenny",
    store: "Jenny's Store, Davao",
    quote:
      "Nung bumaha, nakuha ko agad yung insurance payout. Hindi ko na kailangan mag-utang.",
    image: "/images/neighbor-exchange.jpg",
  },
];

const steps = [
  {
    step: 1,
    title: "Download the app",
    desc: "Available on Android and iOS. Free forever.",
  },
  {
    step: 2,
    title: "Set up your store in 5 minutes",
    desc: "Add your store name, location, and starting inventory.",
  },
  {
    step: 3,
    title: "Start selling smarter",
    desc: "Accept payments, track utang, get restock alerts, and grow your suki base.",
  },
];

export default function ForStoresPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero ── */}
      <section className="bg-cream-gold">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-earth-brown">
              Ang Super App para sa Super Tindera!
            </h1>
            <p className="text-lg text-earth-brown/80 max-w-md leading-relaxed">
              Everything you need to run, grow, and protect your tindahan — in
              one free app.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#download"
                className="inline-flex items-center justify-center rounded-full bg-beelee-teal border-2 border-beelee-teal px-7 py-3 text-base font-bold text-white hover:brightness-110 transition"
              >
                Download App
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border-2 border-beelee-teal px-7 py-3 text-base font-bold text-beelee-teal hover:bg-beelee-teal hover:text-white transition"
              >
                See All Products
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Image src="/images/nanay-smiling.jpg" alt="Store owner with BeeLee" width={600} height={450} className="rounded-2xl shadow-lg object-cover w-full" />
          </div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="The Problem"
            title="We understand your reality"
            description="Running a sari-sari store is tough. These are the everyday challenges you face."
            labelColor="text-warm-amber"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((p) => (
              <div
                key={p.tagalog}
                className="bg-cream-gold/60 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl">{p.emoji}</span>
                <h3 className="text-lg font-bold text-earth-brown">
                  {p.tagalog}
                </h3>
                <p className="text-earth-brown/70 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How BeeLee Helps ── */}
      <section id="features" className="bg-soft-teal py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="The Solution"
            title="BeeLee solves all of these"
            description="One app. Every tool a tindera needs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.text}
                className="bg-white rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-beelee-teal/10 flex items-center justify-center text-2xl">
                  {f.icon}
                </div>
                <p className="text-earth-brown font-semibold leading-snug pt-2">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Testimonials"
            title="Mga kwento ng ating tindera"
            labelColor="text-honey-gold"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream-gold/40 rounded-2xl p-8 space-y-4"
              >
                <p className="text-earth-brown/80 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-earth-brown font-bold text-sm">
                      {t.name}
                    </p>
                    <p className="text-earth-brown/60 text-xs">{t.store}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting Started ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Get Started"
            title="Paano mag-start?"
            description="Three easy steps to transform your tindahan."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-8 space-y-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-beelee-teal flex items-center justify-center text-2xl font-extrabold text-white">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-earth-brown">
                  {s.title}
                </h3>
                <p className="text-earth-brown/70 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="download" className="bg-beelee-teal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Zero upfront cost. Zero credit card needed.
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            Join thousands of sari-sari store owners already using BeeLee to
            grow their business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-full bg-honey-gold px-8 py-3 text-base font-bold text-earth-brown hover:brightness-110 transition"
            >
              Download for iOS
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-beelee-teal hover:bg-soft-teal transition"
            >
              Download for Android
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

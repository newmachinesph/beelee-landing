import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";
import PlaceholderImg from "../components/PlaceholderImg";

export const metadata: Metadata = {
  title: "For Brands & Partners",
  description: "Reach 1.3 million sari-sari stores with barangay-level demand data, direct distribution, and targeted promotions. Partner with BeeLee.",
};

const stats = [
  { value: "1.3M", label: "Sari-sari stores nationwide" },
  {
    value: "70%",
    label: "Of manufactured goods flow through sari-sari stores",
  },
  { value: "\u20B12.4T", label: "Projected market size by 2030" },
  { value: "77%", label: "Of provinces underserved by digital tools" },
];

const offerings = [
  {
    icon: "🗺️",
    title: "Barangay Demand Heatmap",
    desc: "Hyper-local buying intelligence at the barangay level.",
    bullets: [
      "Real-time trend detection across neighborhoods",
      "Brand performance analytics per geographic cluster",
      "Category-level demand mapping by season",
      "Anonymized and aggregated — individual store data never exposed",
    ],
  },
  {
    icon: "🚚",
    title: "Direct Distribution",
    desc: "Get your products on sari-sari store shelves across the Philippines.",
    bullets: [
      "700+ SKU ordering platform at wholesale prices",
      "Free delivery to stores — no minimum order",
      "Promotional placement and bundle support",
      "Disaster SOS restocking — priority queue post-typhoon",
    ],
  },
  {
    icon: "📊",
    title: "Data & API Access",
    desc: "Plug barangay-level demand data directly into your systems.",
    bullets: [
      "Real-time barangay-level demand data API",
      "Brand performance dashboard with export",
      "FMCG API marketplace — open data product",
      "Seasonal and ber-month forecasting insights",
    ],
  },
  {
    icon: "💛",
    title: "Suki Loyalty & Promotions",
    desc: "Run targeted promos directly to store owners and their customers.",
    bullets: [
      "Sponsor suki loyalty stamp cards for your brand",
      "Push bundle deals and promo creator to store owners",
      "Price-match intelligence vs hard discounters",
      "Track redemption rates and promo ROI",
    ],
  },
  {
    icon: "🔗",
    title: "Digital Storefront Visibility",
    desc: "Your products featured in every store's online catalog.",
    bullets: [
      "Product placement in shareable store links",
      "Featured listings in store owner's digital storefront",
      "QR-scannable product pages for in-store display",
      "Direct-to-consumer awareness at the neighborhood level",
    ],
  },
  {
    icon: "🏪",
    title: "Multi-Store Network Intelligence",
    desc: "Aggregate insights across store clusters and regions.",
    bullets: [
      "Multi-store performance benchmarking",
      "Regional expansion opportunity mapping",
      "Store density and coverage gap analysis",
      "Cross-branch inventory velocity comparisons",
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Connect with BeeLee partnership team",
    desc: "Tell us your goals and we'll design a custom plan for your brand.",
  },
  {
    step: 2,
    title: "Access barangay-level demand data",
    desc: "See exactly where and what sari-sari store owners are buying.",
  },
  {
    step: 3,
    title: "Run targeted promotions to store owners",
    desc: "Push offers, bundles, and discounts directly to tindera devices.",
  },
  {
    step: 4,
    title: "Track performance in real-time dashboard",
    desc: "Measure sell-through, reach, and ROI at the barangay level.",
  },
];

export default function ForBrandsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero ── */}
      <section className="bg-earth-brown">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              The Nielsen for Grassroots Philippine Retail
            </h1>
            <p className="text-lg text-white/80 max-w-md leading-relaxed">
              Reach 1.3 million sari-sari stores with hyper-local data
              intelligence and direct distribution.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-honey-gold border-2 border-honey-gold px-7 py-3 text-base font-bold text-earth-brown hover:brightness-110 transition"
              >
                Partner With Us
              </Link>
              <Link
                href="#offerings"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3 text-base font-bold text-white hover:bg-white hover:text-earth-brown transition"
              >
                See Data Products
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Image src="/images/barangay-stores.jpg" alt="Barangay stores network" width={600} height={450} className="rounded-2xl shadow-lg object-cover w-full" />
          </div>
        </div>
      </section>

      {/* ── The Opportunity ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="The Opportunity"
            title="The largest untapped retail channel"
            description="Sari-sari stores are the backbone of Philippine commerce, yet most brands have zero visibility into this channel."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-soft-teal rounded-2xl p-8 text-center space-y-2 hover:shadow-lg transition-shadow"
              >
                <p className="text-4xl md:text-5xl font-extrabold text-beelee-teal">
                  {s.value}
                </p>
                <p className="text-earth-brown/70 text-sm leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Offer Brands ── */}
      <section id="offerings" className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Our Offerings"
            title="What We Offer Brands"
            description="Six powerful tools to help FMCG brands win at the grassroots level."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="bg-white rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl">{o.icon}</span>
                <h3 className="text-xl font-bold text-beelee-teal">
                  {o.title}
                </h3>
                <p className="text-earth-brown/70 text-sm leading-relaxed">
                  {o.desc}
                </p>
                <ul className="space-y-2 pt-2">
                  {o.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-earth-brown/80"
                    >
                      <span className="text-beelee-teal font-bold mt-0.5">
                        +
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Process"
            title="How It Works"
            description="From first contact to real-time results in four simple steps."
            labelColor="text-warm-amber"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="bg-cream-gold/40 rounded-2xl p-6 space-y-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-beelee-teal flex items-center justify-center text-2xl font-extrabold text-white">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-earth-brown">
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

      {/* ── Partner Logos ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Partners"
            title="Brands We Work With"
            labelColor="text-honey-gold"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["FMCG Brand A", "FMCG Brand B", "FMCG Brand C", "FMCG Brand D", "FMCG Brand E", "FMCG Brand F"].map((brand, i) => (
              <PlaceholderImg
                key={i}
                label={brand}
                aspect="aspect-[3/1]"
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="bg-beelee-teal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to reach every barangay?
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            Join the brands already using BeeLee to unlock the grassroots
            Philippine retail market.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-honey-gold px-8 py-3 text-base font-bold text-earth-brown hover:brightness-110 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./components/SectionHeading";
import PlaceholderImg from "./components/PlaceholderImg";
import { products as allProducts } from "./lib/products";

const comparisonFeatures = [
  "POS / Checkout",
  "Inventory Tracking",
  "Barcode / Camera Scan",
  "Offline Mode",
  "Taglish Voice Entry",
  "Sales & Revenue Reports",
  "Pricing Tools",
  "FMCG Wholesale Ordering",
  "Free Delivery to Store",
  "Buy Now Pay Later",
  "AI Restock Suggestions",
  "Working Capital Loans",
  "GCash / Maya Integration",
  "Bills Payment",
  "E-Load / Telco Credits",
  "Remittance / Pera Padala",
  "Utang Digital Ledger + SMS",
  "Customer TrustScore",
  "Parametric Micro-Insurance",
  "Suki Loyalty / Stamp Cards",
  "Owner-Built Promo Engine",
  "Price-Match Alerts",
  "Disaster SOS Restocking",
  "Shopee / Lazada Pickup Hub",
  "WiFi Hotspot Monetisation",
  "Digital Storefront (Store Link)",
  "Multi-Store Management",
  "Barangay Demand Heatmap",
  "Bee Agent Field Platform",
];

const competitors = [
  { name: "Packworks", features: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"] },
  { name: "GrowSari", features: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"] },
  { name: "Peddlr", features: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"] },
  { name: "MySuki", features: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"] },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── 1. Hero ── */}
      <section className="bg-soft-teal">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-earth-brown">
              The Operating System for{" "}
              <span className="text-beelee-teal">Sari-Sari Stores</span>
            </h1>
            <p className="text-lg text-earth-brown/70 max-w-lg leading-relaxed">
              Empowering 1.3 million sari-sari stores across the Philippines with
              smart inventory, digital payments, and community-powered tools that
              keep neighborhoods thriving.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-beelee-teal border-2 border-beelee-teal px-8 py-3 text-base font-bold text-white hover:brightness-110 transition"
              >
                Download App
              </Link>
              <a
                href="#pillars"
                className="inline-flex items-center justify-center rounded-full border-2 border-beelee-teal px-8 py-3 text-base font-bold text-beelee-teal hover:bg-beelee-teal hover:text-white transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/images/hero-app.jpg"
              alt="Store owner using BeeLee app at sari-sari store"
              width={600}
              height={450}
              className="w-full max-w-md rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── 2. Impact Stats Bar ── */}
      <section className="bg-cream-gold py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1.3M", label: "Sari-Sari Stores (TAM)" },
              { number: "\u20B12.4T", label: "Market Size by 2030" },
              { number: "75%", label: "Women-Owned Stores" },
              { number: "18", label: "Digital Products" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-beelee-teal">
                  {stat.number}
                </p>
                <p className="text-sm font-semibold text-earth-brown mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Three Pillars ── */}
      <section id="pillars" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Our Foundation"
            title="Three Pillars. One App."
            description="Every feature in BeeLee maps back to one of three strategic pillars designed to transform how sari-sari stores operate, transact, and protect their livelihoods."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Store Brain",
                tagline: "Intelligence for Every Tindahan",
                description:
                  "AI-powered inventory tracking, demand forecasting, and restock coaching that turns every store owner into a data-driven entrepreneur.",
                borderColor: "border-beelee-teal",
                nameColor: "text-beelee-teal",
              },
              {
                name: "Community Wallet",
                tagline: "Digital Money for the Last Mile",
                description:
                  "Cashless payments, utang tracking with SMS reminders, and suki loyalty rewards that keep cash flowing and communities connected.",
                borderColor: "border-honey-gold",
                nameColor: "text-honey-gold",
              },
              {
                name: "Neighborhood Shield",
                tagline: "Protection When It Matters Most",
                description:
                  "Parametric micro-insurance, SOS restocking, and TrustScore-backed credit that safeguard stores against disruptions big and small.",
                borderColor: "border-warm-amber",
                nameColor: "text-warm-amber",
              },
            ].map((pillar) => (
              <div
                key={pillar.name}
                className={`bg-light-gray rounded-2xl p-8 border-l-4 ${pillar.borderColor} space-y-4 hover:shadow-lg transition-shadow`}
              >
                <h3 className={`text-xl font-extrabold ${pillar.nameColor}`}>
                  {pillar.name}
                </h3>
                <p className="text-sm font-semibold text-earth-brown/80">
                  {pillar.tagline}
                </p>
                <p className="text-sm text-earth-brown/70 leading-relaxed">
                  {pillar.description}
                </p>
                <Link
                  href="/products"
                  className={`inline-block text-sm font-bold ${pillar.nameColor} hover:underline`}
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Product Showcase ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Products"
            title="Everything Your Tindahan Needs"
            description="From inventory to insurance, BeeLee gives store owners a complete digital toolkit built for Philippine sari-sari stores."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="bg-white rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow group"
              >
                <span className="text-3xl">{product.icon}</span>
                <h3 className="text-base font-extrabold text-earth-brown group-hover:text-beelee-teal transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-earth-brown/60 leading-relaxed">
                  {product.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Why BeeLee ── */}
      <section className="bg-soft-teal py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="What Makes Us Different"
            title="Why Store Owners Choose BeeLee"
            description="Four interlocking advantages that make BeeLee impossible to replicate."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "\uD83D\uDD04",
                title: "Data Flywheel",
                description:
                  "Every transaction trains our AI, improving restock accuracy, demand predictions, and TrustScores for the entire network.",
              },
              {
                icon: "\uD83D\uDD12",
                title: "TrustScore Lock-in",
                description:
                  "Store owners build portable credit scores that unlock better rates, bigger orders, and insurance discounts over time.",
              },
              {
                icon: "\uD83D\uDCF6",
                title: "Offline-First Reach",
                description:
                  "Full functionality without internet. SMS-powered features ensure no store is left behind, even in remote barangays.",
              },
              {
                icon: "\uD83D\uDC69",
                title: "Women-Owner Network",
                description:
                  "75% of sari-sari stores are women-owned. Our community features, savings tools, and safety nets are built for them.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{card.icon}</span>
                <h3 className="text-lg font-extrabold text-beelee-teal">
                  {card.title}
                </h3>
                <p className="text-sm text-earth-brown/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Competitor Comparison ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="How We Compare"
            title="BeeLee vs The Field"
            description="A side-by-side look at what sets BeeLee apart from existing solutions in the Philippine market."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 font-bold text-earth-brown border-b-2 border-earth-brown/10">
                    Feature
                  </th>
                  <th className="py-4 px-4 font-extrabold text-beelee-teal bg-soft-teal rounded-t-xl border-b-2 border-beelee-teal/20 text-center">
                    BeeLee
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className="py-4 px-4 font-bold text-earth-brown/60 border-b-2 border-earth-brown/10 text-center"
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={feature} className={idx % 2 === 0 ? "bg-light-gray/50" : ""}>
                    <td className="py-3 px-4 font-semibold text-earth-brown">
                      {feature}
                    </td>
                    <td className="py-3 px-4 text-center bg-soft-teal font-bold text-beelee-teal text-lg">
                      &#x2713;
                    </td>
                    {competitors.map((c) => (
                      <td
                        key={`${c.name}-${feature}`}
                        className="py-3 px-4 text-center text-earth-brown/40"
                      >
                        <span className="text-earth-brown/40 text-xs font-semibold">TBD</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 7. Testimonials ── */}
      <section className="bg-cream-gold py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Testimonials"
            title="Mga Kwento ng mga Tindera"
            description="Real stories from real sari-sari store owners who are transforming their businesses with BeeLee."
            labelColor="text-warm-amber"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aling Maria",
                store: "Maria's Tindahan, Quezon City",
                avatar: "/images/nanay-store.jpg",
                quote:
                  "Simula nang gumamit ako ng BeeLee, hindi na ako nauubusan ng paninda. Ang galing ng AI restock coach, parang may sarili akong business advisor!",
              },
              {
                name: "Nanay Rosa",
                store: "Rosa's Sari-Sari, Cebu City",
                avatar: "/images/nanay-smiling.jpg",
                quote:
                  "Dati mahirap i-track ang utang ng mga suki ko. Ngayon automatic na ang SMS reminders at hindi na awkward magsingil. Salamat, BeeLee!",
              },
              {
                name: "Ate Jenny",
                store: "Jenny's Store, Davao",
                avatar: "/images/woman-phone.jpg",
                quote:
                  "Nung bumaha last year, ang insurance payout dumating sa akin in 24 hours. Hindi ko na kailangan mag-close ng matagal. Lifesaver talaga ang BeeLee!",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="font-extrabold text-earth-brown">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-earth-brown/60">
                      {testimonial.store}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-earth-brown/80 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Partners ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Ecosystem"
            title="Trusted By"
            description="Strategic partners and investors building the future of neighborhood commerce together."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "FMCG Partner A",
              "FMCG Partner B",
              "FMCG Partner C",
              "Fintech Partner",
              "Government Partner",
              "Insurance Partner",
            ].map((partner) => (
              <PlaceholderImg
                key={partner}
                label={partner}
                aspect="aspect-[3/1]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA Section ── */}
      <section id="download" className="bg-beelee-teal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <Image
            src="/logo.svg"
            alt="BeeLee mascot"
            width={80}
            height={92}
            className="mx-auto drop-shadow-lg"
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Tindahan mo, isang tap lang!
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto leading-relaxed">
            Join thousands of sari-sari store owners already using BeeLee to grow
            their business, serve their community, and secure their future.
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

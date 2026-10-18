import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import { products, pillars } from "../lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "18 digital products for sari-sari stores — POS, inventory, utang ledger, AI restock coach, loyalty cards, micro-insurance, and more. All in one app.",
};

const pillarBorderColors: Record<string, string> = {
  "bg-beelee-teal": "border-beelee-teal",
  "bg-honey-gold": "border-honey-gold",
  "bg-warm-amber": "border-warm-amber",
};

const pillarTextColors: Record<string, string> = {
  "Store Brain": "text-beelee-teal",
  "Community Wallet": "text-honey-gold",
  "Neighborhood Shield": "text-warm-amber",
};

const pillarBgChips: Record<string, string> = {
  "Store Brain": "bg-beelee-teal/10 text-beelee-teal",
  "Community Wallet": "bg-honey-gold/10 text-honey-gold",
  "Neighborhood Shield": "bg-warm-amber/10 text-warm-amber",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero ── */}
      <section className="bg-soft-teal">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-beelee-teal">
            Three Pillars. One App.
          </h1>
          <p className="text-lg text-earth-brown/80 max-w-2xl mx-auto leading-relaxed">
            BeeLee covers every feature of Packworks, GrowSari, Peddlr, and
            MySuki — plus 11 exclusive capabilities no competitor has built.
          </p>
        </div>
      </section>

      {/* ── Pillars Overview ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Product Pillars"
            title="Three Pillars of BeeLee"
            description="Every feature organized into three layers that work together to power your tindahan."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const borderColor =
                pillarBorderColors[pillar.color] || "border-beelee-teal";
              const pillarProducts = pillar.products
                .map((slug) => products.find((p) => p.slug === slug))
                .filter(Boolean);

              return (
                <div
                  key={pillar.name}
                  className={`bg-soft-teal rounded-2xl p-8 space-y-4 border-t-4 ${borderColor}`}
                >
                  <h3
                    className={`text-xl font-bold ${pillarTextColors[pillar.name] || "text-beelee-teal"}`}
                  >
                    {pillar.name}
                  </h3>
                  <p className="text-sm font-semibold text-earth-brown/60">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-earth-brown/70 leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {pillarProducts.map(
                      (product) =>
                        product && (
                          <li key={product.slug}>
                            <Link
                              href={`/products/${product.slug}`}
                              className={`text-sm font-semibold hover:underline ${pillarTextColors[pillar.name] || "text-beelee-teal"}`}
                            >
                              {product.icon} {product.name}
                            </Link>
                          </li>
                        ),
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── All Products Grid ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="All Products"
            title="Everything Inside BeeLee"
            description="18 products. One app. Zero switching."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="bg-white rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow block"
              >
                <span className="text-4xl">{product.icon}</span>
                <h3 className="text-lg font-bold text-earth-brown">
                  {product.name}
                </h3>
                <p className="text-sm text-earth-brown/70 leading-relaxed">
                  {product.tagline}
                </p>
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${pillarBgChips[product.pillar]}`}
                >
                  {product.pillar}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-beelee-teal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to transform your tindahan?
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            All 18 products. One download. Free to start.
          </p>
          <div className="pt-4">
            <a
              href="/download"
              className="inline-flex items-center justify-center rounded-full bg-honey-gold px-8 py-3 text-base font-bold text-earth-brown hover:brightness-110 transition"
            >
              Download App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

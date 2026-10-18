import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeading from "../../components/SectionHeading";
import PlaceholderImg from "../../components/PlaceholderImg";
import { products } from "../../lib/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return { title: product.name };
}

const pillarBgChips: Record<string, string> = {
  "Store Brain": "bg-beelee-teal/10 text-beelee-teal",
  "Community Wallet": "bg-honey-gold/10 text-honey-gold",
  "Neighborhood Shield": "bg-warm-amber/10 text-warm-amber",
};

const pillarTextColors: Record<string, string> = {
  "Store Brain": "text-beelee-teal",
  "Community Wallet": "text-honey-gold",
  "Neighborhood Shield": "text-warm-amber",
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (p) => p.pillar === product.pillar && p.slug !== product.slug,
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero ── */}
      <section className="bg-soft-teal">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-5">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${pillarBgChips[product.pillar]}`}
            >
              {product.pillar}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-beelee-teal">
              {product.name}
            </h1>
            <p className="text-lg text-earth-brown/80 max-w-md leading-relaxed">
              {product.tagline}
            </p>
          </div>

          <div className="flex-1 w-full">
            <PlaceholderImg
              label={`${product.name} Screenshot`}
              className="w-full"
              aspect="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-earth-brown/80 text-lg leading-relaxed text-center">
            {product.description}
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Features"
            title="What's Included"
            description={`Everything you get with ${product.name}.`}
          />

          <div className="grid md:grid-cols-2 gap-4">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="bg-white rounded-xl p-5 flex items-start gap-3"
              >
                <span className="text-beelee-teal font-bold text-lg mt-0.5 shrink-0">
                  ✓
                </span>
                <p className="text-sm text-earth-brown/80 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <SectionHeading
              label={product.pillar}
              title={`More from ${product.pillar}`}
              labelColor={pillarTextColors[product.pillar]}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/products/${related.slug}`}
                  className="bg-soft-teal rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow block"
                >
                  <span className="text-3xl">{related.icon}</span>
                  <h3 className="text-lg font-bold text-earth-brown">
                    {related.name}
                  </h3>
                  <p className="text-sm text-earth-brown/70 leading-relaxed">
                    {related.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-beelee-teal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Start using {product.name} today
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            Available now inside the BeeLee app. Free to start.
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

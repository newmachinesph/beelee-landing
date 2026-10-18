import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, insights, and stories from BeeLee — the operating system for sari-sari stores. Tips for tinderas, engineering deep-dives, and community spotlights.",
};

const recentPosts = [
  {
    id: 0,
    category: "Product",
    title: "How Digital Utang Tracking Saved Aling Nena \u20B115,000 in Bad Debts",
    date: "March 10, 2026",
    excerpt:
      "Aling Nena used to lose track of credit customers in her handwritten notebook. After switching to BeeLee\u2019s digital utang ledger, she recovered outstanding debts and finally stopped lending to repeat defaulters.",
    image: "/images/evening-store.jpg",
  },
  {
    id: 1,
    category: "Community",
    title: "Meet the Tindera Who Beat DALI with Suki Loyalty Cards",
    date: "March 5, 2026",
    excerpt:
      "When a convenience store chain opened across the street, longtime tindera Ate Merly thought she was finished. Her secret weapon turned out to be BeeLee\u2019s Suki Loyalty program, which kept her regulars coming back.",
    image: "/images/restocking.jpg",
  },
  {
    id: 2,
    category: "Engineering",
    title: "Building Offline-First: How BeeLee Works Without Internet",
    date: "February 28, 2026",
    excerpt:
      "Reliable connectivity is a luxury in many Philippine barangays. We built BeeLee\u2019s offline-first architecture so every transaction, inventory update, and credit entry works without a signal and syncs automatically when you\u2019re back online.",
    image: "/images/barangay-stores.jpg",
  },
  {
    id: 3,
    category: "News",
    title: "BeeLee Partners with DTI\u2019s Sari-Sari Store Advancement Program",
    date: "February 20, 2026",
    excerpt:
      "We\u2019re teaming up with the Department of Trade and Industry to bring free digital tools to 10,000 sari-sari stores nationwide. The partnership kicks off with pilot rollouts in Visayas and Mindanao this April.",
    image: "/images/night-store.jpg",
  },
  {
    id: 4,
    category: "Tips",
    title: "5 Signs Your Sari-Sari Store Needs an AI Restock Coach",
    date: "February 12, 2026",
    excerpt:
      "Running out of bestsellers on payday weekends? Overstocking items that expire before they sell? These are classic signs that manual restocking is costing you money\u2014and exactly where BeeLee\u2019s AI Restock Coach steps in.",
    image: "/images/trike-street.jpg",
  },
  {
    id: 5,
    category: "Insights",
    title: "Typhoon Season 2026: How Parametric Insurance Protects Your Store",
    date: "February 5, 2026",
    excerpt:
      "Traditional insurance claims can take months to process after a typhoon. BeeLee\u2019s parametric micro-insurance triggers automatic payouts based on weather data, so store owners get cash within days\u2014not months\u2014to rebuild their inventory.",
    image: "/images/snacks-juice.jpg",
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-soft-teal py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-beelee-teal">
            The Buzz
          </h1>
          <p className="text-lg text-earth-brown/80 max-w-2xl mx-auto leading-relaxed">
            News, insights, and stories from the BeeLee hive.
          </p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image src="/images/tingi-flatlay.jpg" alt="Sari-sari store products" width={600} height={340} className="rounded-2xl object-cover w-full" />
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wide uppercase bg-soft-teal text-beelee-teal px-3 py-1 rounded-full">
                Featured
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-earth-brown">
                Launching BeeLee: Why We&apos;re Building the OS for Sari-Sari Stores
              </h2>
              <p className="text-sm text-earth-brown/50 font-semibold">
                March 15, 2026
              </p>
              <p className="text-earth-brown/70 leading-relaxed">
                The Philippines is home to 1.3 million sari-sari stores, yet most
                still run on handwritten notebooks and gut instinct. Today we
                officially launch BeeLee &mdash; a free, offline-first app that
                gives every store owner a digital POS, smart inventory tracking,
                and the financial tools they deserve.
              </p>
              <Link
                href="/blog"
                className="inline-block text-beelee-teal font-bold hover:underline"
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent Posts ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            label="Latest"
            title="Recent Posts"
            description="Stay up to date with what we're building and learning."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold tracking-wide uppercase bg-soft-teal text-beelee-teal px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-earth-brown">
                    {post.title}
                  </h3>
                  <p className="text-sm text-earth-brown/50 font-semibold">
                    {post.date}
                  </p>
                  <p className="text-sm text-earth-brown/70 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/blog"
                    className="inline-block text-beelee-teal font-bold text-sm hover:underline"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-cream-gold py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-earth-brown">
            Stay in the loop
          </h2>
          <p className="text-earth-brown/70 text-lg leading-relaxed">
            Get BeeLee updates straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full sm:flex-1 rounded-full border border-earth-brown/20 bg-white px-5 py-3 text-sm text-earth-brown placeholder:text-earth-brown/40 focus:outline-none focus:ring-2 focus:ring-beelee-teal"
              readOnly
            />
            <button className="inline-flex items-center justify-center rounded-full bg-beelee-teal px-7 py-3 text-sm font-bold text-white hover:brightness-110 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

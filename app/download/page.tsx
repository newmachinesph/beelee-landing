import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Download",
  description: "Download the BeeLee app for free. Available on Android and iOS. No credit card needed. Works offline. 18 digital products for your sari-sari store.",
};

const freeFeatures = [
  "POS & checkout with receipt generation",
  "Inventory management with barcode scan",
  "Utang digital ledger with SMS reminders",
  "E-load & bills payment (earn commissions)",
  "GCash / Maya / QRPh integration",
  "Basic sales & cash flow reports",
  "Digital storefront (shareable store link)",
  "WiFi hotspot monetisation",
  "Shopee & Lazada pickup hub",
  "OFW remittance / Pera Padala",
];

const proFeatures = [
  "AI Restock Coach with seasonal alerts",
  "BeeLee TrustScore credit scoring",
  "Suki Loyalty Engine & promo creator",
  "Advanced sales & business dashboard",
  "Barangay Demand Heatmap insights",
  "Parametric Micro-Insurance",
  "FMCG wholesale ordering (700+ SKUs)",
  "Multi-store management",
  "Working capital loans (TrustScore-backed)",
  "Priority Bee Agent support",
];

export default function DownloadPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-beelee-teal py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Download BeeLee
            </h1>
            <p className="text-lg text-white/80 max-w-md leading-relaxed">
              Free. No credit card needed. No commitment.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-honey-gold px-8 py-4 text-base font-bold text-earth-brown hover:brightness-110 transition"
              >
                Download for Android
              </a>
              <a
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-beelee-teal hover:bg-soft-teal transition"
              >
                Download for iOS
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="w-52 h-60 md:w-56 md:h-64 rounded-full bg-white/10 flex items-center justify-center p-6">
              <Image
                src="/logo.svg"
                alt="BeeLee mascot"
                width={200}
                height={230}
                className="drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── QR Code ── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-4">
          <p className="text-sm font-bold tracking-widest text-beelee-teal uppercase">
            Scan to Download
          </p>
          <div className="max-w-48">
            <Image
              src="/images/woman-phone.jpg"
              alt="Download BeeLee on your phone"
              width={192}
              height={192}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Device Requirements ── */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            title="Works on Your Phone"
            label="Requirements"
            description="BeeLee runs on most smartphones — even entry-level ones."
          />

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-beelee-teal">Android</h3>
              <ul className="space-y-2 text-sm text-earth-brown/70">
                <li className="flex items-center gap-2">
                  <span className="text-beelee-teal font-bold">&#10003;</span>
                  Android 8.0+
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-beelee-teal font-bold">&#10003;</span>
                  50MB storage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-beelee-teal font-bold">&#10003;</span>
                  Works offline
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-beelee-teal">iOS</h3>
              <ul className="space-y-2 text-sm text-earth-brown/70">
                <li className="flex items-center gap-2">
                  <span className="text-beelee-teal font-bold">&#10003;</span>
                  iOS 14+
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-beelee-teal font-bold">&#10003;</span>
                  60MB storage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-beelee-teal font-bold">&#10003;</span>
                  Works offline
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="bg-soft-teal py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionHeading
            title="Included for Free"
            label="Features"
            description="Everything you need to run your sari-sari store, at zero cost."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-2xl p-8 border-2 border-beelee-teal space-y-5">
              <div>
                <h3 className="text-2xl font-extrabold text-beelee-teal">
                  Free
                </h3>
                <p className="text-sm text-earth-brown/60 mt-1">
                  Everything to get started
                </p>
              </div>
              <ul className="space-y-3">
                {freeFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-earth-brown"
                  >
                    <span className="text-beelee-teal font-bold text-lg">
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Tier */}
            <div className="bg-white rounded-2xl p-8 border-2 border-honey-gold space-y-5">
              <div>
                <h3 className="text-2xl font-extrabold text-honey-gold">
                  Pro
                </h3>
                <p className="text-sm text-earth-brown/60 mt-1">
                  Upgrade to Pro
                </p>
                <p className="text-3xl font-extrabold text-earth-brown mt-2">
                  &#8369;199
                  <span className="text-sm font-semibold text-earth-brown/50">
                    /mo
                  </span>
                </p>
              </div>
              <ul className="space-y-3">
                {proFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-earth-brown"
                  >
                    <span className="text-honey-gold font-bold text-lg">
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-beelee-teal py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Join 5,000+ stores already using BeeLee
          </h2>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-honey-gold px-8 py-4 text-base font-bold text-earth-brown hover:brightness-110 transition"
            >
              Download for Android
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-beelee-teal hover:bg-soft-teal transition"
            >
              Download for iOS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Products: [
    { label: "Inventory Management", href: "/products/inventory-management" },
    { label: "Point of Sale", href: "/products/pos" },
    { label: "Utang Ledger", href: "/products/utang-ledger" },
    { label: "TrustScore", href: "/products/trustscore" },
    { label: "AI Restock Coach", href: "/products/ai-restock-coach" },
    { label: "Suki Loyalty", href: "/products/suki-loyalty" },
    { label: "Community Wallet", href: "/products/community-wallet" },
    { label: "FMCG Ordering", href: "/products/fmcg-ordering" },
    { label: "Demand Heatmap", href: "/products/demand-heatmap" },
    { label: "Micro-Insurance", href: "/products/micro-insurance" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "For Store Owners", href: "/for-stores" },
    { label: "For FMCG Brands", href: "/for-brands" },
    { label: "Download App", href: "/download" },
    { label: "Help Center", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
    { label: "Cookie Policy", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-earth-brown text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="BeeLee" width={32} height={32} />
              <span className="text-xl font-extrabold">
                <span className="text-honey-gold">Bee</span>
                <span className="text-white">Lee</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              The operating system for sari-sari stores. Your Barangay. Your Stores. One App.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 pt-2">
              {[
                { name: "Facebook", url: "https://facebook.com/beeleeph" },
                { name: "Instagram", url: "https://instagram.com/beeleeph" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/70 hover:bg-honey-gold hover:text-earth-brown transition"
                  aria-label={s.name}
                >
                  {s.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-honey-gold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; 2026 BeeLee. All rights reserved. Made with malasakit in the Philippines.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "For Stores", href: "/for-stores" },
  { label: "For Brands", href: "/for-brands" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-soft-teal">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="BeeLee" width={36} height={36} />
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-honey-gold">Bee</span>
            <span className="text-beelee-teal">Lee</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-earth-brown">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-beelee-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden sm:inline-flex rounded-full bg-honey-gold px-5 py-2 text-sm font-bold text-earth-brown hover:brightness-110 transition"
          >
            Download App
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-earth-brown"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-soft-teal px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold text-earth-brown hover:text-beelee-teal transition-colors border-b border-light-gray last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/download"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center rounded-full bg-honey-gold px-5 py-2.5 text-sm font-bold text-earth-brown"
          >
            Download App
          </Link>
        </div>
      )}
    </nav>
  );
}

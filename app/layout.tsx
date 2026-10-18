import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "BeeLee — The Operating System for Sari-Sari Stores",
    template: "%s | BeeLee",
  },
  description:
    "BeeLee empowers 1.3 million Filipino sari-sari stores with offline-first inventory, POS, digital utang ledger, AI coaching, and community finance — at zero upfront cost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PH" className="light">
      <body className={`${nunito.variable} antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

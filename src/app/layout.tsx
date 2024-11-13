import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renexx - Professional Contract Management",
  description: "Dubai's premier property contract and lease management solution",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} overflow-x-hidden`}>
        <div className="relative w-full">
          {/* Main background */}
          <div className="fixed inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />

          {/* Subtle decorative elements with overflow control */}
          <div className="fixed top-0 left-0 w-1/2 h-1/2 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-orange-500/10 rounded-full filter blur-3xl" />
          </div>
          <div className="fixed top-0 right-0 w-1/2 h-1/2 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-gray-700/10 rounded-full filter blur-3xl" />
          </div>

          {/* Content container */}
          <div className="relative">
            <Navbar />
            <main className="min-h-screen w-full">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

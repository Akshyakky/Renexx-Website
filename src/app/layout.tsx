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
      <body className={outfit.className}>
        <Navbar />
        <div className="min-h-screen bg-white">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

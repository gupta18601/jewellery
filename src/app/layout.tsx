import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shree Radha Govind Jewellers - Exquisite Jewelry & Precious Stones",
  description:
    "Manufacturers, exporters, and importers of fine jewelry and precious stones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-amber-50 to-rose-50 min-h-screen flex flex-col`}
      >
        <div className="flex-grow">
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

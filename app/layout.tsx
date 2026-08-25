import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HOSPITAL_INFO } from "@/lib/content";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${HOSPITAL_INFO.name}`,
    default: `${HOSPITAL_INFO.name} | Clearer Vision. Better Care.`,
  },
  description: "Professional eye care focused on protecting your vision and helping you see life more clearly. Visit The Premium Nation's Eye Hospital in Nsukka.",
  openGraph: {
    title: HOSPITAL_INFO.name,
    description: "Professional eye care focused on protecting your vision.",
    url: "https://nationseyehospital.com",
    siteName: HOSPITAL_INFO.name,
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-gray-50/30">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

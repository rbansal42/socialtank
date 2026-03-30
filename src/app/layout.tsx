import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SocialTank | Inter-School Social Impact Pitch Competition",
  description:
    "Turn your empathy into an actionable plan! SocialTank is a Shark Tank-style inter-school pitch competition for social impact ideas. 17th April 2026 at Army Public School, Delhi Cantonment.",
  keywords: [
    "SocialTank",
    "pitch competition",
    "social impact",
    "Shark Tank",
    "inter-school",
    "Rotaract",
    "Delhi",
  ],
  openGraph: {
    title: "SocialTank | Inter-School Social Impact Pitch Competition",
    description:
      "Turn your empathy into an actionable plan! Shark Tank-style inter-school pitch competition. 17th April 2026.",
    url: "https://socialtank.racddl.com",
    siteName: "SocialTank",
    type: "website",
    locale: "en_IN",
  },
  metadataBase: new URL("https://socialtank.racddl.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

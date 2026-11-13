import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${PROFILE.name} | B.Tech CSE (AI & ML) • Student Portfolio`,
  description: `${PROFILE.shortBio} Team Lead for SAGE multi-agent AI tutor & Chief Designer at S.A.C.C.`,
  keywords: [
    "A. Shiva Vaibhav",
    "Shiva Vaibhav",
    "B.Tech CSE AI ML",
    "SITS Hyderabad",
    "SAGE AI Tutor",
    "Student Portfolio",
    "Chief Designer S.A.C.C",
    "AI Agent Systems",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.contact.github }],
  openGraph: {
    title: `${PROFILE.name} | B.Tech CSE (AI & ML) Portfolio`,
    description: PROFILE.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | Portfolio`,
    description: PROFILE.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white selection:bg-[#FF1E27]/30 selection:text-[#FF1E27]`}
      >
        {children}
      </body>
    </html>
  );
}

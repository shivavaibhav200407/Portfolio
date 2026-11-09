import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "A. Shiva Vaibhav | AI & ML Student & Creative Technologist",
  description:
    "Portfolio of A. Shiva Vaibhav — B.Tech CSE (AI & ML) student at SITS Hyderabad. Team Lead for SAGE (multi-agent RAG engine) & Chief Designer at S.A.C.C. Seeking AI & Software Development internships.",
  keywords: [
    "A. Shiva Vaibhav",
    "Shiva Vaibhav",
    "AI Engineer Portfolio",
    "Machine Learning Student",
    "SAGE Multi-Agent",
    "Hyderabad AI Developer",
    "Graphic Designer Hyderabad",
    "S.A.C.C Chief Designer",
  ],
  authors: [{ name: "A. Shiva Vaibhav" }],
  creator: "A. Shiva Vaibhav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibhav-portfolio.vercel.app",
    title: "A. Shiva Vaibhav | AI & ML Student & Creative Technologist",
    description:
      "B.Tech AI & ML student architecting multi-agent systems and crafting high-impact visual design. Creator of SAGE.",
    siteName: "A. Shiva Vaibhav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "A. Shiva Vaibhav | AI & ML Student & Creative Technologist",
    description:
      "B.Tech AI & ML student architecting multi-agent systems and crafting high-impact visual design.",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-cyber-bg text-cyber-heading transition-colors duration-300 selection:bg-cyan-500/20 selection:text-cyan-400`}
      >
        {children}
      </body>
    </html>
  );
}

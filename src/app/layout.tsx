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
  title: "A. Shiva Vaibhav | B.Tech CSE (AI & ML) Student Portfolio",
  description:
    "Portfolio of A. Shiva Vaibhav — B.Tech student at SITS Hyderabad learning Python and AI. Team Lead for SAGE (AI educational tutor) & Chief Designer at S.A.C.C. Seeking an internship or entry-level role in AI and software development.",
  keywords: [
    "A. Shiva Vaibhav",
    "Shiva Vaibhav",
    "B.Tech AI ML student",
    "SITS Hyderabad",
    "SAGE AI Tutor",
    "Student Portfolio",
    "Graphic Designer S.A.C.C",
  ],
  authors: [{ name: "A. Shiva Vaibhav" }],
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

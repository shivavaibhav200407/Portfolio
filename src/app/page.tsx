"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

import NeuralCanvas from "@/components/canvas/NeuralCanvas";
import NeonRedCursor from "@/components/effects/NeonRedCursor";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Terminal from "@/components/sections/Terminal";
import SageCaseStudy from "@/components/sections/SageCaseStudy";
import IrisMlSandbox from "@/components/sections/IrisMlSandbox";
import PostersGallery from "@/components/sections/PostersGallery";
import SkillsBento from "@/components/sections/SkillsBento";
import AboutTimeline from "@/components/sections/AboutTimeline";
import ContactDock from "@/components/sections/ContactDock";
import Footer from "@/components/sections/Footer";

import SkillsMarquee from "@/components/effects/SkillsMarquee";
import ScrollReveal from "@/components/effects/ScrollReveal";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Initialize Lenis Smooth Inertia Scrolling
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-[#FF1E27]/30 selection:text-[#FF1E27]">
      {/* Red Neon Outline Arrow Cursor */}
      <NeonRedCursor />

      {/* Interactive Crimson Neural Canvas (Background) */}
      <NeuralCanvas isDarkMode={isDarkMode} />

      {/* Floating Island Navigation */}
      <Navbar
        onToggleTheme={(dark) => setIsDarkMode(dark)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Kinetic Hero */}
      <Hero onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Infinite Skills Marquee */}
      <SkillsMarquee />

      {/* SAGE Multi-Agent Case Study */}
      <ScrollReveal delay={0.05}>
        <SageCaseStudy />
      </ScrollReveal>

      {/* Interactive ML Sandbox */}
      <ScrollReveal delay={0.05}>
        <IrisMlSandbox />
      </ScrollReveal>

      {/* S.A.C.C Posters & Creative Direction */}
      <ScrollReveal delay={0.05}>
        <PostersGallery />
      </ScrollReveal>

      {/* Skills Matrix */}
      <ScrollReveal delay={0.05}>
        <SkillsBento />
      </ScrollReveal>

      {/* About & Education Timeline */}
      <ScrollReveal delay={0.05}>
        <AboutTimeline />
      </ScrollReveal>

      {/* Contact Dock */}
      <ScrollReveal delay={0.05}>
        <ContactDock />
      </ScrollReveal>

      {/* Footer */}
      <Footer />

      {/* Interactive Terminal CLI */}
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </main>
  );
}

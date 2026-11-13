"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

import NeuralCanvas from "@/components/canvas/NeuralCanvas";
import DualModeCursor from "@/components/effects/DualModeCursor";
import UniqueTechPreloader from "@/components/effects/UniqueTechPreloader";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Terminal from "@/components/sections/Terminal";
import SageCaseStudy from "@/components/sections/SageCaseStudy";
import IrisMlSandbox from "@/components/sections/IrisMlSandbox";
import PostersGallery from "@/components/sections/PostersGallery";
import CertificatesSection from "@/components/sections/CertificatesSection";
import SkillsBento from "@/components/sections/SkillsBento";
import AboutTimeline from "@/components/sections/AboutTimeline";
import ContactDock from "@/components/sections/ContactDock";
import Footer from "@/components/sections/Footer";

import SkillsMarquee from "@/components/effects/SkillsMarquee";
import ScrollReveal from "@/components/effects/ScrollReveal";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Initialize Theme on Mount from localStorage or device preference
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved) {
      const isDark = saved === "dark";
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(systemDark);
      if (systemDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Initialize Lenis Smooth Kinetic Scrolling
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
      touchMultiplier: 1.8,
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
    <main className="relative min-h-screen transition-colors duration-500 bg-white text-slate-900 dark:bg-black dark:text-white">
      {/* Unique Geometric Orbital Tech Preloader */}
      <UniqueTechPreloader isDark={isDarkMode} />

      {/* Dual-Mode Adaptive Custom Cursor (Ocean Blue in Light ↔ Neon Red in Dark) */}
      <DualModeCursor isDark={isDarkMode} />

      {/* Ambient Neural Mesh - Confined to Hero with Graceful Fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[100vh] overflow-hidden [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,black_40%,transparent_100%)]">
        <NeuralCanvas isDarkMode={isDarkMode} />
      </div>

      {/* Floating Island Navigation with Standalone Celestial Theme Toggle */}
      <Navbar
        onToggleTheme={(dark) => setIsDarkMode(dark)}
        onOpenTerminal={() => setTerminalOpen(true)}
        isDark={isDarkMode}
      />

      {/* 01 // Kinetic Tech Hero */}
      <Hero onOpenTerminal={() => setTerminalOpen(true)} isDark={isDarkMode} />

      {/* Infinite Skills Marquee */}
      <SkillsMarquee />

      {/* 03 // SAGE Multi-Agent Case Study (Referral Page Editorial Style) */}
      <ScrollReveal delay={0.05}>
        <SageCaseStudy />
      </ScrollReveal>

      {/* 04 // Interactive ML Dimension Sandbox */}
      <ScrollReveal delay={0.05}>
        <IrisMlSandbox />
      </ScrollReveal>

      {/* 05 // S.A.C.C Posters & Creative Direction (Google Drive Integrated) */}
      <ScrollReveal delay={0.05}>
        <PostersGallery />
      </ScrollReveal>

      {/* 06 // Verified Certificates & College Workshops */}
      <ScrollReveal delay={0.05}>
        <CertificatesSection />
      </ScrollReveal>

      {/* 07 // Toolbox & Skills Bento Grid */}
      <ScrollReveal delay={0.05}>
        <SkillsBento />
      </ScrollReveal>

      {/* 08 // Academic Journey & Leadership */}
      <ScrollReveal delay={0.05}>
        <AboutTimeline />
      </ScrollReveal>

      {/* 09 // High-Conversion Contact Dock */}
      <ScrollReveal delay={0.05}>
        <ContactDock />
      </ScrollReveal>

      {/* Footer */}
      <Footer />

      {/* Interactive Developer CLI Terminal Modal */}
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} isDark={isDarkMode} />
    </main>
  );
}

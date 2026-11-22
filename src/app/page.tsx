"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

import NeuralCanvas from "@/components/canvas/NeuralCanvas";
import DualModeCursor from "@/components/effects/DualModeCursor";
import UniqueTechPreloader from "@/components/effects/UniqueTechPreloader";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Terminal from "@/components/sections/Terminal";
import AboutTimeline from "@/components/sections/AboutTimeline";
import SkillsBento from "@/components/sections/SkillsBento";
import SageCaseStudy from "@/components/sections/SageCaseStudy";
import IrisMlSandbox from "@/components/sections/IrisMlSandbox";
import PostersGallery from "@/components/sections/PostersGallery";
import MiniPosterStudio from "@/components/sections/MiniPosterStudio";
import JourneyRoadmap from "@/components/sections/JourneyRoadmap";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactDock from "@/components/sections/ContactDock";
import Footer from "@/components/sections/Footer";

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
    <main className="relative min-h-screen transition-colors duration-500 bg-[#F7FAFF] text-[#0B1B3A] dark:bg-[#060608] dark:text-white">
      {/* Tactile Film Grain Texture (Award-winning editorial surface) */}
      <div className="grain" aria-hidden="true" />

      {/* Unique Geometric Orbital Tech Preloader */}
      <UniqueTechPreloader isDark={isDarkMode} />

      {/* Sleek Studio Outline Arrow Cursor with Kinetic Tail Lights (Dual Mode) */}
      <DualModeCursor isDark={isDarkMode} />

      {/* Ambient Neural Synapse Mesh - In Hero with Graceful Fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[100vh] overflow-hidden [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,black_40%,transparent_100%)]">
        <NeuralCanvas isDarkMode={isDarkMode} />
      </div>

      {/* Floating Island Navigation */}
      <Navbar
        onToggleTheme={(dark) => setIsDarkMode(dark)}
        onOpenTerminal={() => setTerminalOpen(true)}
        isDark={isDarkMode}
      />

      {/* 00 // Haute Dev Hero with Celestial Sun/Moon Toggle in Name */}
      <Hero
        onToggleTheme={(dark) => setIsDarkMode(dark)}
        onOpenTerminal={() => setTerminalOpen(true)}
        isDark={isDarkMode}
      />

      {/* 01 // Introduction & Academic Journey */}
      <ScrollReveal delay={0.05}>
        <AboutTimeline />
      </ScrollReveal>

      {/* 01.1 // Chronological Roadmap */}
      <ScrollReveal delay={0.05}>
        <JourneyRoadmap />
      </ScrollReveal>

      {/* 02 // Toolbox & Competencies Bento */}
      <ScrollReveal delay={0.05}>
        <SkillsBento />
      </ScrollReveal>

      {/* 03 // Selected Work: SAGE College AI Tutor */}
      <ScrollReveal delay={0.05}>
        <SageCaseStudy />
      </ScrollReveal>

      {/* 03.1 // ML Dimension Sandbox: Iris Classification */}
      <ScrollReveal delay={0.05}>
        <IrisMlSandbox />
      </ScrollReveal>

      {/* 04 // S.A.C.C College Posters Gallery (Google Drive Connected) */}
      <ScrollReveal delay={0.05}>
        <PostersGallery />
      </ScrollReveal>

      {/* 04.1 // S.A.C.C Interactive Poster Studio */}
      <ScrollReveal delay={0.05}>
        <MiniPosterStudio />
      </ScrollReveal>

      {/* 05 // Verified Certifications & College Workshops */}
      <ScrollReveal delay={0.05}>
        <CertificatesSection />
      </ScrollReveal>

      {/* 06 // Contact Dock */}
      <ScrollReveal delay={0.05}>
        <ContactDock />
      </ScrollReveal>

      {/* Footer with Rotating Star / Back to Top Badge */}
      <Footer />

      {/* Interactive Developer CLI Terminal Modal */}
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} isDark={isDarkMode} />
    </main>
  );
}
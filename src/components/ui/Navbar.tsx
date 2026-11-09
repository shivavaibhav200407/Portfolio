"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onToggleTheme?: (isDark: boolean) => void;
  onOpenTerminal?: () => void;
}

export default function Navbar({ onToggleTheme, onOpenTerminal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SAGE Flagship", href: "#sage" },
    { name: "ML Sandbox", href: "#ml-sandbox" },
    { name: "Design & Posters", href: "#posters" },
    { name: "Skills Matrix", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300 sm:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border border-white/10 bg-cyber-surface/85 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-cyber-surface/85 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] light:border-slate-200 light:bg-white/90"
            : "border border-transparent bg-transparent"
        }`}
      >
        {/* Brand Monogram & Status */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 font-display text-sm font-bold tracking-wider text-slate-100 transition-colors dark:text-slate-100 dark:group-hover:text-cyan-400"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 font-mono text-xs text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
              SV
            </span>
            <span className="hidden font-mono text-xs uppercase sm:inline-block">
              A. Shiva Vaibhav
            </span>
          </Link>

          {/* Live Availability Pill */}
          <div className="hidden items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-emerald-400 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Open for Internships</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-slate-400 transition-colors hover:text-cyan-400 dark:text-slate-400 dark:hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2.5">
          {/* Quick Terminal Trigger Button */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              title="Launch Agent Console"
              className="hidden items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 font-mono text-xs text-cyan-400 transition-all hover:bg-cyan-500/20 md:flex"
            >
              <TerminalIcon className="h-3.5 w-3.5" />
              <span>CLI</span>
            </button>
          )}

          {/* Theme Toggle */}
          <ThemeToggle onToggle={onToggleTheme} />

          {/* Download Résumé */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hidden items-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] sm:flex"
          >
            <Download className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>Résumé</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyber-border bg-cyber-surface text-slate-300 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-white/10 bg-cyber-surface/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="mb-2 flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-mono text-xs text-slate-400">Navigation</span>
            <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Available for Roles</span>
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-mono text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-3 flex gap-2 pt-2 border-t border-white/5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 py-2.5 font-mono text-xs text-cyan-300"
            >
              <Download className="h-4 w-4" />
              <span>Download Résumé</span>
            </a>
            {onOpenTerminal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 font-mono text-xs text-slate-300"
              >
                <TerminalIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

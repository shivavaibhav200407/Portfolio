"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Terminal as TerminalIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { PROFILE } from "@/data/profile";

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
    { name: "SAGE", href: "#sage" },
    { name: "ML Sandbox", href: "#ml-sandbox" },
    { name: "Posters", href: "#posters" },
    { name: "Certificates", href: "#certificates" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300 sm:px-8">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border border-white/10 bg-black/85 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        {/* Brand & Badge */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-sm font-bold tracking-wide text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#FF1E27]/50 bg-[#FF1E27]/10 font-mono text-xs text-[#FF3843] shadow-[0_0_10px_rgba(255,30,39,0.3)]">
              {PROFILE.initials}
            </span>
            <span className="font-mono text-xs uppercase text-slate-200">
              {PROFILE.shortName} Vaibhav
            </span>
          </Link>

          {/* Student Status Pill */}
          <div className="hidden items-center gap-1.5 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-2.5 py-0.5 text-[11px] font-mono text-[#FF3843] md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF1E27] animate-pulse" />
            <span>Open for Internships</span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-slate-400 transition-colors hover:text-[#FF3843]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              title="Open Terminal"
              className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-slate-300 hover:text-[#FF3843] hover:border-[#FF1E27]/30 md:flex transition-all"
            >
              <TerminalIcon className="h-3.5 w-3.5" />
              <span>CLI</span>
            </button>
          )}

          <ThemeToggle onToggle={onToggleTheme} />

          <a
            href={PROFILE.contact.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-xl border border-[#FF1E27]/40 bg-[#FF1E27]/10 px-3 py-1.5 font-mono text-xs text-[#FF3843] hover:bg-[#FF1E27]/20 hover:border-[#FF1E27] sm:flex transition-all"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Résumé</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col space-y-3 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-slate-300 hover:text-[#FF3843]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <a
                href={PROFILE.contact.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#FF3843]"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Résumé</span>
              </a>
              {onOpenTerminal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="text-slate-400 hover:text-white"
                >
                  CLI Terminal
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

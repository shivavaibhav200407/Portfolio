"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, Terminal as TerminalIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { PROFILE } from "@/data/profile";

interface NavbarProps {
  onToggleTheme?: (isDark: boolean) => void;
  onOpenTerminal?: () => void;
  isDark?: boolean;
}

export default function Navbar({ onToggleTheme, onOpenTerminal, isDark = true }: NavbarProps) {
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
    { name: "About", href: "#about" },
    { name: "Toolbox", href: "#skills" },
    { name: "Work", href: "#sage" },
    { name: "Posters", href: "#posters" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3.5 transition-all duration-300 sm:px-8">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-2 transition-all duration-300 ${
          scrolled
            ? "border border-[#DCE6F7] bg-white/95 shadow-[0_4px_20px_-2px_rgba(37,99,235,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-black/90 dark:shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        {/* Brand Monogram */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-sm font-bold tracking-wide"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border font-mono text-xs font-semibold border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27]/50 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
              {PROFILE.initials}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#0B1B3A] dark:text-slate-200">
              {PROFILE.name}
            </span>
          </Link>

          {/* Student Status Pill */}
          <div className="hidden items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-mono border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843] md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse dark:bg-[#FF1E27]" />
            <span>Open for Internships</span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-[#5B6B8C] hover:text-[#2563EB] dark:text-slate-400 dark:hover:text-[#FF3843] transition-colors"
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
              title="Open Interactive Terminal"
              className="hidden items-center gap-1.5 rounded-lg border border-[#DCE6F7] bg-[#EAF2FF] px-2.5 py-1.5 font-mono text-xs text-[#0B1B3A] hover:border-[#2563EB] hover:text-[#2563EB] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-[#FF3843] md:flex transition-all"
            >
              <TerminalIcon className="h-3.5 w-3.5" />
              <span>CLI</span>
            </button>
          )}

          {/* Standalone Dedicated Theme Switcher in the top bar */}
          <ThemeToggle onToggle={onToggleTheme} isDark={isDark} />

          <a
            href={PROFILE.contact.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download="A_Shiva_Vaibhav_Resume.pdf"
            className="hidden items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs font-semibold border-[#DCE6F7] bg-[#EAF2FF] text-[#2563EB] hover:bg-[#DBEAFE] hover:border-[#2563EB] dark:border-[#FF1E27]/40 dark:bg-[#FF1E27]/10 dark:text-[#FF3843] dark:hover:bg-[#FF1E27]/20 sm:flex transition-all"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Résumé</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DCE6F7] bg-white text-[#0B1B3A] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mt-2 rounded-2xl border border-[#DCE6F7] bg-white/95 p-4 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/95 lg:hidden">
          <div className="flex flex-col space-y-3 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#0B1B3A] hover:text-[#2563EB] dark:text-slate-300 dark:hover:text-[#FF3843]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#DCE6F7] dark:border-white/10 flex items-center justify-between">
              <a
                href={PROFILE.contact.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="A_Shiva_Vaibhav_Resume.pdf"
                className="flex items-center gap-1.5 text-[#2563EB] dark:text-[#FF3843] font-semibold"
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
                  className="text-[#5B6B8C] dark:text-slate-400"
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
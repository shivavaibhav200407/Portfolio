"use client";

import { useState } from "react";
import { Sparkles, Palette, Type, Award, RefreshCw, Copy, Check } from "lucide-react";

type StylePreset = "cyber" | "swiss" | "campus" | "emerald";

interface ColorTheme {
  name: string;
  primary: string;
  glow: string;
  bgDark: string;
  bgLight: string;
  badgeBgDark: string;
  badgeBgLight: string;
}

const COLOR_THEMES: Record<string, ColorTheme> = {
  red: {
    name: "Neon Crimson",
    primary: "#FF1E27",
    glow: "rgba(255, 30, 39, 0.4)",
    bgDark: "#0B0506",
    bgLight: "#FFF5F5",
    badgeBgDark: "rgba(255, 30, 39, 0.15)",
    badgeBgLight: "#FEE2E2",
  },
  blue: {
    name: "Electric Cobalt",
    primary: "#2563EB",
    glow: "rgba(37, 99, 235, 0.4)",
    bgDark: "#040914",
    bgLight: "#F0F6FF",
    badgeBgDark: "rgba(37, 99, 235, 0.15)",
    badgeBgLight: "#DBEAFE",
  },
  emerald: {
    name: "Terminal Emerald",
    primary: "#10B981",
    glow: "rgba(16, 185, 129, 0.4)",
    bgDark: "#03140C",
    bgLight: "#ECFDF5",
    badgeBgDark: "rgba(16, 185, 129, 0.15)",
    badgeBgLight: "#D1FAE5",
  },
  amber: {
    name: "Solar Amber",
    primary: "#F59E0B",
    glow: "rgba(245, 158, 11, 0.4)",
    bgDark: "#150E02",
    bgLight: "#FFFBEB",
    badgeBgDark: "rgba(245, 158, 11, 0.15)",
    badgeBgLight: "#FEF3C7",
  },
};

export default function MiniPosterStudio() {
  const [headline, setHeadline] = useState("TECHUTSAV 2026");
  const [subtitle, setSubtitle] = useState("Dept. of CSE (AI & ML) · SITS Hyderabad");
  const [eventDate, setEventDate] = useState("NOVEMBER 2026");
  const [selectedStyle, setSelectedStyle] = useState<StylePreset>("cyber");
  const [selectedColor, setSelectedColor] = useState<string>("red");
  const [badgeSacc, setBadgeSacc] = useState(true);
  const [badgeChiefDesigner, setBadgeChiefDesigner] = useState(true);
  const [badgeFreeEntry, setBadgeFreeEntry] = useState(true);
  const [copied, setCopied] = useState(false);

  const theme = COLOR_THEMES[selectedColor];

  const headlinePresets = [
    "TECHUTSAV 2026",
    "AI SYMPOSIUM",
    "INTERNAL SIH 2026",
    "ANNUAL CLUB FEST",
  ];

  const subtitlePresets = [
    "Dept. of CSE (AI & ML) · SITS Hyderabad",
    "Siddhartha Allied Clubs Council (S.A.C.C)",
    "Code · Design · Create · Innovate",
  ];

  const handleCopy = () => {
    const text = `=== POSTER SPECIFICATION ===\nTitle: ${headline}\nSubtitle: ${subtitle}\nDate: ${eventDate}\nStyle: ${selectedStyle.toUpperCase()}\nDesign by: A. Shiva Vaibhav (Chief Designer, S.A.C.C)\nOrganization: Siddhartha Allied Clubs Council · SITS`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setHeadline("TECHUTSAV 2026");
    setSubtitle("Dept. of CSE (AI & ML) · SITS Hyderabad");
    setEventDate("NOVEMBER 2026");
    setSelectedStyle("cyber");
    setSelectedColor("red");
    setBadgeSacc(true);
    setBadgeChiefDesigner(true);
    setBadgeFreeEntry(true);
  };

  return (
    <section id="studio" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-[#060608] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400">
              04.1 // INTERACTIVE POSTER STUDIO
            </span>
            <span className="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
              Live Playground
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#0B1B3A] dark:text-white">
            Design an Event Poster
          </h2>

          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed font-sans text-[#5B6B8C] dark:text-slate-300">
            As Chief Designer &amp; Disciplinary Head of the Siddhartha Allied Clubs Council (S.A.C.C), I design posters for college clubs and events. Try creating your own live poster card below by customizing the headline, styling, colors, and stamps.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Customizer Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-5 rounded-3xl border p-5 sm:p-7 shadow-sm border-[#DCE6F7] bg-white dark:border-white/10 dark:bg-[#0A0A0E]">
            {/* Control Group 1: Headline */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase text-[#0B1B3A] dark:text-slate-300">
                  <Type className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#FF1E27]" />
                  Event Headline
                </label>
                <span className="font-mono text-[10px] text-[#5B6B8C] dark:text-slate-500">Bricolage Grotesque</span>
              </div>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                maxLength={36}
                className="w-full rounded-xl border px-3.5 py-2 font-heading text-sm font-bold tracking-tight transition-all border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] focus:border-[#2563EB] focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:focus:border-[#FF1E27]"
                placeholder="e.g. TECHUTSAV 2026"
              />
              {/* Presets Chips */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {headlinePresets.map((p) => (
                  <button
                    key={p}
                    onClick={() => setHeadline(p)}
                    className={`font-mono text-[10px] px-2.5 py-1 rounded-lg border transition-all ${
                      headline === p
                        ? "border-[#2563EB] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27] dark:bg-[#FF1E27]/10 dark:text-[#FF3843]"
                        : "border-[#DCE6F7] bg-white text-[#5B6B8C] hover:border-[#2563EB]/40 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-400"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Control Group 2: Subtitle / Organizer */}
            <div>
              <label className="block font-mono text-xs font-semibold uppercase mb-1.5 text-[#0B1B3A] dark:text-slate-300">
                Organizer / Subtitle
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                maxLength={60}
                className="w-full rounded-xl border px-3.5 py-2 font-sans text-xs transition-all border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] focus:border-[#2563EB] focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:focus:border-[#FF1E27]"
                placeholder="Dept. of CSE (AI & ML) · SITS"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {subtitlePresets.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSubtitle(s)}
                    className={`font-mono text-[10px] px-2.5 py-1 rounded-lg border transition-all ${
                      subtitle === s
                        ? "border-[#2563EB] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27] dark:bg-[#FF1E27]/10 dark:text-[#FF3843]"
                        : "border-[#DCE6F7] bg-white text-[#5B6B8C] hover:border-[#2563EB]/40 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Control Group 3: Style Preset */}
            <div>
              <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase mb-2 text-[#0B1B3A] dark:text-slate-300">
                <Sparkles className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#FF1E27]" />
                Design Style Preset
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "cyber", label: "Cyberpunk", desc: "Dark & Neon Glow" },
                  { id: "swiss", label: "Swiss Grid", desc: "Minimal & Clean" },
                  { id: "campus", label: "Collegiate", desc: "Bold & Flagship" },
                  { id: "emerald", label: "Terminal", desc: "Tech Matrix" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStyle(s.id as StylePreset)}
                    className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all ${
                      selectedStyle === s.id
                        ? "border-[#2563EB] bg-[#EAF2FF]/50 shadow-sm dark:border-[#FF1E27] dark:bg-[#FF1E27]/10"
                        : "border-[#DCE6F7] bg-white hover:border-[#2563EB]/30 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-300"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-[#0B1B3A] dark:text-white">
                      {s.label}
                    </span>
                    <span className="font-mono text-[9px] text-[#5B6B8C] dark:text-slate-500">
                      {s.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control Group 4: Accent Color */}
            <div>
              <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase mb-2 text-[#0B1B3A] dark:text-slate-300">
                <Palette className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#FF1E27]" />
                Accent Glow Tone
              </label>
              <div className="flex flex-wrap items-center gap-2.5">
                {Object.entries(COLOR_THEMES).map(([key, c]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedColor(key)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono text-xs transition-all ${
                      selectedColor === key
                        ? "border-current shadow-sm scale-105"
                        : "border-[#DCE6F7] bg-white text-[#5B6B8C] dark:border-white/10 dark:bg-white/[0.02]"
                    }`}
                    style={selectedColor === key ? { color: c.primary, borderColor: c.primary } : {}}
                  >
                    <span
                      className="h-3 w-3 rounded-full shadow-sm"
                      style={{ backgroundColor: c.primary }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control Group 5: Official Badges / Stamps */}
            <div>
              <label className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase mb-2 text-[#0B1B3A] dark:text-slate-300">
                <Award className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#FF1E27]" />
                Official Council Stamps
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setBadgeSacc(!badgeSacc)}
                  className={`font-mono text-xs px-3 py-1.5 rounded-xl border transition-all ${
                    badgeSacc
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-500/10 dark:text-emerald-300"
                      : "border-[#DCE6F7] bg-white text-[#5B6B8C] opacity-50 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-500"
                  }`}
                >
                  {badgeSacc ? "✓ S.A.C.C Official" : "+ S.A.C.C Official"}
                </button>
                <button
                  onClick={() => setBadgeChiefDesigner(!badgeChiefDesigner)}
                  className={`font-mono text-xs px-3 py-1.5 rounded-xl border transition-all ${
                    badgeChiefDesigner
                      ? "border-[#2563EB] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27] dark:bg-[#FF1E27]/10 dark:text-[#FF3843]"
                      : "border-[#DCE6F7] bg-white text-[#5B6B8C] opacity-50 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-500"
                  }`}
                >
                  {badgeChiefDesigner ? "✓ Chief Designer Approved" : "+ Chief Designer Approved"}
                </button>
                <button
                  onClick={() => setBadgeFreeEntry(!badgeFreeEntry)}
                  className={`font-mono text-xs px-3 py-1.5 rounded-xl border transition-all ${
                    badgeFreeEntry
                      ? "border-amber-500 bg-amber-50 text-amber-700 dark:border-amber-500/50 dark:bg-amber-500/10 dark:text-amber-300"
                      : "border-[#DCE6F7] bg-white text-[#5B6B8C] opacity-50 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-500"
                  }`}
                >
                  {badgeFreeEntry ? "✓ Free Entry" : "+ Free Entry"}
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-[#DCE6F7] dark:border-white/10">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 font-mono text-xs text-[#5B6B8C] hover:text-[#0B1B3A] dark:text-slate-400 dark:hover:text-white"
              >
                <RefreshCw className="h-3 w-3" />
                Reset Controls
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs font-semibold transition-all border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] hover:border-[#2563EB] hover:text-[#2563EB] dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:hover:border-[#FF1E27] dark:hover:text-[#FF3843]"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied Spec!" : "Copy Poster Specs"}</span>
              </button>
            </div>
          </div>

          {/* Right: Live Poster Card Preview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Poster Mockup Frame */}
            <div
              className={`relative w-full max-w-[360px] aspect-[1/1.42] rounded-2xl overflow-hidden border p-6 transition-all duration-300 shadow-xl flex flex-col justify-between ${
                selectedStyle === "swiss"
                  ? "bg-white text-black border-slate-300 shadow-slate-200 dark:border-slate-800"
                  : selectedStyle === "campus"
                  ? "bg-[#091428] text-white border-blue-500/40 shadow-blue-950/40"
                  : selectedStyle === "emerald"
                  ? "bg-[#03150C] text-emerald-100 border-emerald-500/40 shadow-emerald-950/40"
                  : "bg-[#08080A] text-white border-white/20 shadow-2xl"
              }`}
              style={{
                boxShadow: `0 20px 40px -15px ${theme.glow}`,
              }}
            >
              {/* Background Glow Aura */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-[70px] opacity-60"
                style={{ backgroundColor: theme.primary }}
              />
              <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full blur-[70px] opacity-40"
                style={{ backgroundColor: theme.primary }}
              />

              {/* Grid / Circuit Accent Lines */}
              <div className="pointer-events-none absolute inset-0 opacity-15">
                <div className="h-full w-full bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:24px_24px]" />
              </div>

              {/* Top Header of Poster */}
              <div className="relative z-10 flex items-start justify-between border-b pb-3 border-current/20">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider opacity-75">
                    Siddhartha Allied Clubs Council
                  </div>
                  <div className="font-mono text-[10px] font-bold tracking-widest mt-0.5">
                    S.A.C.C &middot; SITS
                  </div>
                </div>

                <div
                  className="font-mono text-[9px] px-2 py-0.5 rounded border uppercase tracking-wider font-semibold"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  {eventDate}
                </div>
              </div>

              {/* Center Hero: Headline & Subtitle */}
              <div className="relative z-10 my-auto py-4 space-y-3">
                <div
                  className="font-mono text-[9px] uppercase tracking-widest inline-block px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: theme.badgeBgDark,
                    color: theme.primary,
                  }}
                >
                  CAMPUS FLAGSHIP EVENT
                </div>

                <h3
                  className="font-heading text-3xl sm:text-4xl font-extrabold uppercase leading-[1.05] tracking-tight break-words"
                  style={{
                    textShadow:
                      selectedStyle === "cyber" ? `0 0 20px ${theme.primary}` : "none",
                  }}
                >
                  {headline || "YOUR EVENT"}
                </h3>

                <p className="font-sans text-xs sm:text-sm leading-snug opacity-85">
                  {subtitle || "Department Event"}
                </p>

                {/* Geometric divider line */}
                <div
                  className="h-1 w-16 rounded-full"
                  style={{ backgroundColor: theme.primary }}
                />
              </div>

              {/* Bottom Badges & Signature */}
              <div className="relative z-10 space-y-3 border-t pt-3 border-current/20">
                {/* Active Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {badgeSacc && (
                    <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded border border-emerald-500/50 bg-emerald-500/10 text-emerald-400">
                      ★ S.A.C.C OFFICIAL
                    </span>
                  )}
                  {badgeChiefDesigner && (
                    <span
                      className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded border"
                      style={{
                        borderColor: theme.primary,
                        color: theme.primary,
                        backgroundColor: theme.badgeBgDark,
                      }}
                    >
                      SHIVA VAIBHAV DESIGNS
                    </span>
                  )}
                  {badgeFreeEntry && (
                    <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded border border-amber-500/50 bg-amber-500/10 text-amber-400">
                      FREE ENTRY
                    </span>
                  )}
                </div>

                {/* Footer Credits */}
                <div className="flex items-center justify-between text-[9px] font-mono opacity-65">
                  <span>CHIEF DESIGNER &amp; DISCIPLINARY HEAD</span>
                  <span>HYDERABAD</span>
                </div>
              </div>
            </div>

            <p className="mt-3 font-mono text-[11px] text-center text-[#5B6B8C] dark:text-slate-400">
              Live generative poster preview &middot; S.A.C.C Design Language
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

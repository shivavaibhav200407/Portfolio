"use client";

import { useState } from "react";
import { GraduationCap, Palette, Cpu, Briefcase, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  phase: string;
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  tags: string[];
  icon: typeof GraduationCap;
  themeColor: string;
}

const MILESTONES: Milestone[] = [
  {
    id: "foundation",
    year: "2023 — 2024",
    phase: "01 // THE FOUNDATION",
    title: "B.Tech CSE (AI & ML) at SITS",
    role: "Undergraduate Student",
    summary:
      "Admitted to Siddhartha Institute of Technology & Sciences (SITS), Hyderabad in CSE with specialization in Artificial Intelligence & Machine Learning (graduating 2028). Built solid academic grounding in computing basics and started learning Python.",
    highlights: [
      "Current B.Tech CGPA: 8.02 / 10",
      "Intermediate Education: 83.4%",
      "Secondary School Certificate (SSC): 9.5 CGPA",
      "Focus: Python programming basics and computer science core",
    ],
    tags: ["SITS Hyderabad", "AI & ML Specialization", "Learning Python"],
    icon: GraduationCap,
    themeColor: "#2563EB",
  },
  {
    id: "leadership",
    year: "2025",
    phase: "02 // COUNCIL LEADERSHIP",
    title: "Chief Designer & Disciplinary Head",
    role: "Siddhartha Allied Clubs Council (S.A.C.C)",
    summary:
      "Entrusted with student council leadership at S.A.C.C. Headed the creative design direction across college clubs, designing visual identities and posters for many campus technical symposiums, club events, and the internal Smart India Hackathon (SIH 2026).",
    highlights: [
      "Led design for many college clubs and student council events",
      "Created official poster for the internal SIH 2026 hosted by S.A.C.C",
      "Maintained discipline, student coordination, and event staging",
      "Refined high-contrast layout, typography, and visual communication",
    ],
    tags: ["S.A.C.C Council", "Chief Designer", "Poster Design", "Team Leadership"],
    icon: Palette,
    themeColor: "#FF1E27",
  },
  {
    id: "projects",
    year: "Late 2025 — Jan 2026",
    phase: "03 // APPLIED AI & MULTI-AGENT",
    title: "Hands-on Projects & Workshops",
    role: "Team Lead (SAGE) & ML Explorer",
    summary:
      "Attended department workshops at SITS, completed machine learning training with Smartuter Research Center, and led a 4-member student team to develop SAGE — a multi-agent AI tutor for B.Tech students built using AI coding tools.",
    highlights: [
      "Led team of 4 as Team Lead on SAGE (Supervisor, Diagnostic, Curriculum, Evaluator, Verifier & Research agents)",
      "SAGE stack: Python, Django, ChromaDB, Groq, DuckDuckGo search (built with AI coding tools)",
      "Iris Species Classification: project completion certificate from Smartuter Research Center (Jan 2026)",
      "SITS Dept. CSE (AI & ML) Workshops: 'AI & ML Essentials' (3 days) & 'Foundations of AI & ML' (2 days)",
    ],
    tags: ["SAGE Team Lead (4 Members)", "Smartuter ML Certificate", "SITS AI Workshops"],
    icon: Cpu,
    themeColor: "#10B981",
  },
  {
    id: "opportunity",
    year: "2026 — Present",
    phase: "04 // READY TO CONTRIBUTE",
    title: "Seeking Internship & First Job",
    role: "Aspiring AI / Software Engineer",
    summary:
      "Actively looking for an engineering internship and first job opportunity. Honest about my current stage: learning Python continuously, adept with AI-assisted software building tools, and passionate about solving practical problems under mentorship.",
    highlights: [
      "Open to immediate internship and junior engineer roles",
      "Transparent: Building projects with modern AI-assisted workflows",
      "Proven leadership as S.A.C.C Head and SAGE Team Lead",
      "Hyderabad-based &middot; Ready to learn and contribute",
    ],
    tags: ["Open for Roles", "Internship", "First Job", "AI-Assisted Dev"],
    icon: Briefcase,
    themeColor: "#8B5CF6",
  },
];

export default function JourneyRoadmap() {
  const [activeStep, setActiveStep] = useState(0);
  const current = MILESTONES[activeStep];
  const IconComponent = current.icon;

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-[#060608] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400">
              01.1 // CHRONOLOGICAL MILESTONES
            </span>
            <span className="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
              Honest Roadmap
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#0B1B3A] dark:text-white">
            My Journey &amp; Milestones
          </h2>

          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed font-sans text-[#5B6B8C] dark:text-slate-300">
            A transparent timeline of my college journey — from engineering fundamentals and learning Python to student council leadership, multi-agent AI exploration, and seeking my first opportunity.
          </p>
        </div>

        {/* Milestone Steps Scrubber */}
        <div className="relative mb-8">
          {/* Connecting Progress Track */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[#DCE6F7] dark:bg-white/10" />
          <div
            className="hidden sm:block absolute top-1/2 left-0 h-[2px] -translate-y-1/2 transition-all duration-500 bg-[#2563EB] dark:bg-[#FF1E27]"
            style={{ width: `${(activeStep / (MILESTONES.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
            {MILESTONES.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group flex flex-col items-start sm:items-center text-left sm:text-center p-3 sm:p-4 rounded-2xl border transition-all ${
                    isActive
                      ? "border-[#2563EB] bg-white shadow-md dark:border-[#FF1E27] dark:bg-[#0D0D12]"
                      : isPast
                      ? "border-[#DCE6F7] bg-white/80 dark:border-white/10 dark:bg-[#08080A]"
                      : "border-[#DCE6F7] bg-white/40 opacity-70 hover:opacity-100 dark:border-white/5 dark:bg-[#060608]"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl font-mono text-xs font-bold transition-all mb-2 ${
                      isActive
                        ? "bg-[#2563EB] text-white shadow dark:bg-[#FF1E27]"
                        : isPast
                        ? "bg-[#EAF2FF] text-[#2563EB] dark:bg-white/10 dark:text-white"
                        : "bg-[#F1F5F9] text-[#5B6B8C] dark:bg-white/5 dark:text-slate-500"
                    }`}
                  >
                    <StepIcon className="h-4 w-4" />
                  </div>

                  <span className="font-mono text-[10px] text-[#5B6B8C] dark:text-slate-400">
                    {step.year}
                  </span>
                  <span className="font-heading text-xs font-bold mt-0.5 text-[#0B1B3A] dark:text-white line-clamp-1">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Deep-Dive Card */}
        <div className="relative overflow-hidden rounded-3xl border p-6 sm:p-8 shadow-sm transition-all duration-300 border-[#DCE6F7] bg-white dark:border-white/10 dark:bg-[#0A0A0E]">
          {/* Subtle Ambient Glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-[80px] opacity-15"
            style={{ backgroundColor: current.themeColor }}
          />

          <div className="relative z-10 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b pb-4 border-[#DCE6F7] dark:border-white/10">
              <div>
                <span className="font-mono text-[11px] font-semibold tracking-wider text-[#2563EB] dark:text-[#FF3843]">
                  {current.phase} &middot; {current.year}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight mt-1 text-[#0B1B3A] dark:text-white">
                  {current.title}
                </h3>
                <p className="font-mono text-xs text-[#5B6B8C] dark:text-slate-400 mt-0.5">
                  Role: <span className="font-semibold text-[#0B1B3A] dark:text-slate-200">{current.role}</span>
                </p>
              </div>

              {/* Step indicator badge */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-3 py-1 rounded-xl border border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                  Step {activeStep + 1} of {MILESTONES.length}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#5B6B8C] dark:text-slate-300">
              {current.summary}
            </p>

            {/* Verified Fact Highlights */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider block text-[#0B1B3A] dark:text-slate-300">
                Key Facts &amp; Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-xl border p-3 border-[#DCE6F7] bg-[#F7FAFF] dark:border-white/5 dark:bg-white/[0.02]"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-sans text-xs text-[#0B1B3A] dark:text-slate-200">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags & Navigation Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#DCE6F7] dark:border-white/10">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {current.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border px-2.5 py-1 font-mono text-[10px] border-[#DCE6F7] bg-white text-[#5B6B8C] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-3 py-1.5 rounded-xl border font-mono text-xs transition-all border-[#DCE6F7] bg-white text-[#5B6B8C] hover:border-[#2563EB] disabled:opacity-30 disabled:pointer-events-none dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(MILESTONES.length - 1, activeStep + 1))}
                  disabled={activeStep === MILESTONES.length - 1}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl border font-mono text-xs font-semibold transition-all border-[#2563EB] bg-[#2563EB] text-white hover:bg-[#1D4ED8] disabled:opacity-30 disabled:pointer-events-none dark:border-[#FF1E27] dark:bg-[#FF1E27] dark:hover:brightness-110"
                >
                  <span>Next Step</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

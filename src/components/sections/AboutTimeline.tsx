"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield, Globe, MapPin, CheckCircle2, Award } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function AboutTimeline() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-slate-200 bg-white text-slate-900 dark:border-white/5 dark:bg-[#020202] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-semibold border-sky-500/20 bg-sky-50 text-sky-700 dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
            <GraduationCap className="h-3.5 w-3.5 text-sky-600 dark:text-[#FF1E27]" />
            <span>08 // JOURNEY &middot; ACADEMICS & LEADERSHIP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Me & College Education
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mt-1">
            Engineering student passionate about AI agent architectures, practical machine learning, and clean visual design. Eager to contribute and be mentored in an engineering internship.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Education */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-display text-base font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <GraduationCap className="h-4 w-4 text-sky-600 dark:text-[#FF1E27]" />
              Education & Academics
            </h3>

            {/* B.Tech */}
            <div className="rounded-2xl border p-5 shadow-sm border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-[#080808]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-slate-200 dark:border-white/10">
                <div>
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {PROFILE.education.degree}
                  </h4>
                  <p className="font-mono text-xs mt-0.5 text-sky-600 dark:text-[#FF3843]">
                    {PROFILE.education.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded border font-mono text-xs font-bold border-sky-500/30 bg-sky-50 text-sky-700 dark:border-[#FF1E27]/40 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
                    CGPA: {PROFILE.education.cgpa}
                  </span>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {PROFILE.education.year}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed font-sans text-slate-600 dark:text-slate-300">
                Learning core computer science, algorithm design, machine learning foundations, and agentic workflows. Led a 4-person student team to engineer SAGE, our college AI tutor running over campus Wi-Fi.
              </p>
            </div>

            {/* Intermediate & 10th */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-xl border p-4 border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-[#080808]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Intermediate (Class 12)
                </span>
                <div className="text-lg font-bold font-display mt-0.5 text-slate-900 dark:text-white">
                  {PROFILE.education.intermediate.score}
                </div>
                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                  {PROFILE.education.intermediate.stream}
                </p>
              </div>

              <div className="rounded-xl border p-4 border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-[#080808]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Secondary (SSC Class 10)
                </span>
                <div className="text-lg font-bold font-display mt-0.5 text-slate-900 dark:text-white">
                  {PROFILE.education.secondary.score}
                </div>
                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                  Consistent Academic Foundation
                </p>
              </div>
            </div>

            {/* Quick Link to Credentials */}
            <div className="rounded-xl border p-3.5 flex items-center justify-between text-xs font-mono border-slate-200 bg-slate-50 dark:border-white/5 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Award className="h-4 w-4 text-sky-600 dark:text-[#FF1E27]" />
                <span>3 Verified Certifications & College Workshops</span>
              </div>
              <a
                href="#certificates"
                className="hover:underline flex items-center gap-1 font-semibold text-sky-600 dark:text-[#FF3843]"
              >
                <span>View Credentials</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Council Leadership & Languages */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-display text-base font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
              <Shield className="h-4 w-4 text-sky-600 dark:text-[#FF1E27]" />
              Campus Leadership
            </h3>

            {/* S.A.C.C */}
            <div className="rounded-2xl border p-5 shadow-sm border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-[#080808]">
              <div className="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-white/10">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-[#FF3843]">
                  {PROFILE.council.body}
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">Current Role</span>
              </div>
              <h4 className="font-display text-base font-bold mt-2.5 text-slate-900 dark:text-white">
                {PROFILE.council.roles.join(" & ")}
              </h4>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Appointed Leadership Position
              </p>
              <ul className="mt-3.5 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-sky-600 dark:text-[#FF1E27]" />
                  <span>Design posters and digital assets for college clubs, hackathons (including Smart India Hackathon 2026), and technical workshops.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-sky-600 dark:text-[#FF1E27]" />
                  <span>Maintain event order, crowd coordination, and council discipline during high-attendance gatherings.</span>
                </li>
              </ul>
            </div>

            {/* Location & Languages */}
            <div className="rounded-2xl border p-5 space-y-3 font-mono text-xs border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-[#080808]">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="h-4 w-4 text-sky-600 dark:text-[#FF3843]" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Globe className="h-4 w-4 text-sky-600 dark:text-[#FF3843]" />
                <span>Languages: English, Telugu (Native), Hindi</span>
              </div>
              <p className="pt-2.5 border-t text-[11px] leading-relaxed font-sans border-slate-200 text-slate-500 dark:border-white/5 dark:text-slate-400">
                Actively seeking summer internships and entry-level positions in software engineering, AI/ML development, or frontend systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

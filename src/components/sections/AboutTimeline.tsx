"use client";

import { motion } from "framer-motion";
import { GraduationCap, Shield, Globe } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function AboutTimeline() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-[#050507] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400">
            01 / INTRODUCTION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0B1B3A] dark:text-white">
            About Me &amp; Academic Journey
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#5B6B8C] dark:text-slate-400 mt-1 font-sans">
            I am a 3rd-year engineering student based in Hyderabad, India. I am currently learning Python and enjoy building practical tools using AI development workflows.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Education */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-serif text-xl flex items-center gap-2 text-[#0B1B3A] dark:text-white">
              <GraduationCap className="h-4 w-4 text-[#2563EB] dark:text-[#FF1E27]" />
              <span>Academics &amp; College</span>
            </h3>

            {/* B.Tech Card */}
            <div className="rounded-2xl border p-6 backdrop-blur-md transition-all border-[#DCE6F7] bg-white shadow-[0_4px_20px_-2px_rgba(37,99,235,0.06)] dark:border-white/10 dark:bg-[#0A0A0D] dark:shadow-none">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4 border-[#DCE6F7] dark:border-white/10">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-normal text-[#0B1B3A] dark:text-white">
                    {PROFILE.education.degree}
                  </h4>
                  <p className="font-mono text-xs mt-1 text-[#2563EB] dark:text-[#FF4D55]">
                    {PROFILE.education.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full border font-mono text-xs font-bold border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27]/40 dark:bg-[#FF1E27]/10 dark:text-[#FF4D55]">
                    CGPA: {PROFILE.education.cgpa}
                  </span>
                  <div className="text-[11px] font-mono text-[#5B6B8C] dark:text-slate-400 mt-1">
                    {PROFILE.education.year}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#5B6B8C] dark:text-slate-300 font-sans">
                Studying core computer science, mathematics, algorithm foundations, and machine learning. Led a 4-person student team to build SAGE, our college course assistant.
              </p>
            </div>

            {/* Intermediate & 10th */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border p-4 border-[#DCE6F7] bg-white shadow-sm dark:border-white/10 dark:bg-[#0A0A0D] dark:shadow-none">
                <div className="font-mono text-[10px] uppercase text-[#5B6B8C] dark:text-slate-400 tracking-wider">
                  Intermediate (12th Grade)
                </div>
                <div className="mt-1 font-serif text-lg font-normal text-[#0B1B3A] dark:text-white">
                  MPC Stream · {PROFILE.education.intermediate.score}
                </div>
                <div className="text-xs text-[#5B6B8C] dark:text-slate-400 mt-1 font-sans">
                  Maths, Physics, Chemistry
                </div>
              </div>

              <div className="rounded-xl border p-4 border-[#DCE6F7] bg-white shadow-sm dark:border-white/10 dark:bg-[#0A0A0D] dark:shadow-none">
                <div className="font-mono text-[10px] uppercase text-[#5B6B8C] dark:text-slate-400 tracking-wider">
                  Secondary School (10th)
                </div>
                <div className="mt-1 font-serif text-lg font-normal text-[#0B1B3A] dark:text-white">
                  SSC Board · {PROFILE.education.secondary.score}
                </div>
                <div className="text-xs text-[#5B6B8C] dark:text-slate-400 mt-1 font-sans">
                  Foundational academics
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Council Leadership & Languages */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-serif text-xl flex items-center gap-2 text-[#0B1B3A] dark:text-white">
              <Shield className="h-4 w-4 text-[#2563EB] dark:text-[#FF1E27]" />
              <span>Council Leadership</span>
            </h3>

            {/* S.A.C.C Card */}
            <div className="rounded-2xl border p-6 border-[#DCE6F7] bg-white shadow-[0_4px_20px_-2px_rgba(37,99,235,0.06)] dark:border-white/10 dark:bg-[#0A0A0D] dark:shadow-none">
              <div className="flex items-center justify-between border-b pb-3 border-[#DCE6F7] dark:border-white/10">
                <span className="font-mono text-xs font-semibold text-[#2563EB] dark:text-[#FF4D55]">
                  S.A.C.C
                </span>
                <span className="font-mono text-[11px] text-[#5B6B8C] dark:text-slate-400">
                  Campus Council
                </span>
              </div>
              <h4 className="mt-3 font-serif text-lg font-normal text-[#0B1B3A] dark:text-white">
                Chief Designer &amp; Disciplinary Head
              </h4>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5B6B8C] dark:text-slate-300 font-sans">
                {PROFILE.council.responsibility}
              </p>
            </div>

            {/* Languages (Without proficiency labels) */}
            <div className="rounded-2xl border p-5 border-[#DCE6F7] bg-white shadow-[0_4px_20px_-2px_rgba(37,99,235,0.06)] dark:border-white/10 dark:bg-[#0A0A0D] dark:shadow-none">
              <h4 className="font-serif text-base flex items-center gap-2 text-[#0B1B3A] dark:text-white mb-3">
                <Globe className="h-4 w-4 text-[#2563EB] dark:text-[#FF1E27]" />
                <span>Languages</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {PROFILE.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="rounded-lg px-3 py-2 border font-mono text-xs font-medium border-[#DBEAFE] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/5 dark:bg-black/40 dark:text-slate-200"
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

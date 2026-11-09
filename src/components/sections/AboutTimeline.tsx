"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Shield, Globe, MapPin, CheckCircle2 } from "lucide-react";

export default function AboutTimeline() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-[#020202] transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-3 py-1 font-mono text-xs font-medium text-[#FF3843]">
            <GraduationCap className="h-3.5 w-3.5 text-[#FF1E27]" />
            <span>MY JOURNEY // EDUCATION & LEADERSHIP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Me & College Education
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 mt-1">
            I am an engineering student who loves technology, working with friends on practical projects, and learning new AI coding tools every week.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Education */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-display text-base font-bold text-slate-200 flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[#FF1E27]" />
              Education
            </h3>

            {/* B.Tech */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    B.Tech, CSE (AI & ML)
                  </h4>
                  <p className="font-mono text-xs text-[#FF3843] mt-0.5">
                    Siddhartha Institute of Technology & Sciences, Hyderabad
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded bg-[#FF1E27]/10 border border-[#FF1E27]/40 text-[#FF3843] font-mono text-xs font-bold">
                    CGPA: 8.02
                  </span>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Expected 2028</div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Currently learning Python, core computer science subjects, machine learning algorithms, and agentic workflows. Led a 4-person team to build our college AI tutor (SAGE).
              </p>
            </div>

            {/* Intermediate & 10th */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-xl border border-white/10 bg-black/60 p-4">
                <span className="font-mono text-[10px] text-slate-400 uppercase">Intermediate (Class 12)</span>
                <div className="text-lg font-bold font-display text-white mt-0.5">83.4%</div>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Maths, Physics & Chemistry</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/60 p-4">
                <span className="font-mono text-[10px] text-slate-400 uppercase">Secondary (SSC Class 10)</span>
                <div className="text-lg font-bold font-display text-white mt-0.5">9.5 CGPA</div>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Consistent academic record</p>
              </div>
            </div>

            {/* Workshops Attended */}
            <div className="space-y-2 pt-2">
              <h4 className="font-display text-xs font-bold text-slate-300 uppercase font-mono tracking-wider flex items-center gap-2">
                <Award className="h-3.5 w-3.5 text-[#FF3843]" />
                Workshops & Certifications
              </h4>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <span className="text-white font-medium block">
                      Iris Species Classification (ML Project)
                    </span>
                    <span className="text-slate-400 text-[11px]">Smartuter Research Center (SRC)</span>
                  </div>
                  <span className="text-[#FF3843] text-[11px]">Jan 2026</span>
                </div>

                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <span className="text-white font-medium block">
                      Foundations of AI & Machine Learning
                    </span>
                    <span className="text-slate-400 text-[11px]">2-Day Workshop, Dept. of CSE (AI&ML), SITS</span>
                  </div>
                  <span className="text-[#FF3843] text-[11px]">Dec 2025</span>
                </div>

                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <span className="text-white font-medium block">
                      AI & ML Essentials: A Python-Based Approach
                    </span>
                    <span className="text-slate-400 text-[11px]">3-Day Workshop, Dept. of CSE (AI&ML), SITS</span>
                  </div>
                  <span className="text-[#FF3843] text-[11px]">Nov 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Council Leadership */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-display text-base font-bold text-slate-200 flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#FF1E27]" />
              Leadership in College
            </h3>

            {/* S.A.C.C */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#FF3843] font-bold uppercase">
                  College Student Council
                </span>
                <span className="font-mono text-[11px] text-slate-400">Present</span>
              </div>
              <h4 className="font-display text-base font-bold text-white mt-2.5">
                Chief Designer & Disciplinary Head
              </h4>
              <p className="font-mono text-xs text-slate-400">
                Siddhartha Allied Clubs Council (S.A.C.C), SITS
              </p>
              <ul className="mt-3.5 space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF1E27] shrink-0 mt-0.5" />
                  <span>Design posters and promotional material for college clubs, workshops, and fests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF1E27] shrink-0 mt-0.5" />
                  <span>Responsible for maintaining discipline and orderly management during council events.</span>
                </li>
              </ul>
            </div>

            {/* Location & Languages */}
            <div className="rounded-2xl border border-white/10 bg-black/60 p-5 space-y-2.5 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-[#FF3843]" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="h-4 w-4 text-[#FF3843]" />
                <span>Languages: English, Telugu, Hindi</span>
              </div>
              <p className="pt-2 border-t border-white/5 text-[11px] text-slate-400">
                Seeking an internship or entry-level role where I can learn, be mentored by senior developers, and contribute actively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

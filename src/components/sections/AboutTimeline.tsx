"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Shield, Globe, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function AboutTimeline() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 border-t border-white/5 bg-cyber-bg/50">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-300">
            <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
            <span>BACKGROUND & RIGOR // EDUCATION & LEADERSHIP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            A Student Mindset With Production Ambition
          </h2>
          <p className="max-w-3xl text-sm sm:text-base text-slate-400 mt-2">
            I believe in learning by executing real systems. Balancing high academic standards with team leadership and hands-on AI experiments.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Education & Academic Trajectory */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-lg font-bold text-slate-200 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-cyan-400" />
              Academic History
            </h3>

            {/* B.Tech SITS Card */}
            <div className="rounded-2xl border border-cyan-500/30 bg-cyber-surface/80 p-6 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    B.Tech, Computer Science & Engineering (AI & ML)
                  </h4>
                  <p className="font-mono text-xs text-cyan-400 mt-0.5">
                    Siddhartha Institute of Technology & Sciences (SITS), Hyderabad
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                    CGPA: 8.02
                  </span>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Expected 2028</div>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Focused on artificial intelligence foundations, data structures, machine learning algorithms, and multi-agent system design. Team Lead for collegiate technical capstones.
              </p>
            </div>

            {/* Earlier Schooling Benchmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-cyber-surface/60 p-4">
                <span className="font-mono text-[10px] text-slate-500 uppercase">Intermediate (Class 12)</span>
                <div className="text-xl font-bold font-display text-slate-100 mt-1">83.4%</div>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Mathematics, Physics & Chemistry</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-cyber-surface/60 p-4">
                <span className="font-mono text-[10px] text-slate-500 uppercase">Secondary (SSC Class 10)</span>
                <div className="text-xl font-bold font-display text-slate-100 mt-1">9.5 CGPA</div>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">Strong foundational academic record</p>
              </div>
            </div>

            {/* Certifications & Workshops */}
            <div className="space-y-3 pt-2">
              <h4 className="font-display text-sm font-bold text-slate-300 flex items-center gap-2">
                <Award className="h-4 w-4 text-blue-400" />
                Specialized Workshops & Credentials
              </h4>
              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <span className="text-slate-200 font-medium block">
                      Iris Species Classification (ML Completion)
                    </span>
                    <span className="text-slate-500 text-[11px]">Smartuter Research Center (SRC)</span>
                  </div>
                  <span className="text-cyan-400 text-[11px]">Jan 2026</span>
                </div>

                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <span className="text-slate-200 font-medium block">
                      Foundations of AI & Machine Learning
                    </span>
                    <span className="text-slate-500 text-[11px]">2-Day Intensive, Dept. of CSE (AI&ML), SITS</span>
                  </div>
                  <span className="text-cyan-400 text-[11px]">Dec 2025</span>
                </div>

                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <span className="text-slate-200 font-medium block">
                      AI & ML Essentials: A Python-Based Approach
                    </span>
                    <span className="text-slate-500 text-[11px]">3-Day Workshop, Dept. of CSE (AI&ML), SITS</span>
                  </div>
                  <span className="text-cyan-400 text-[11px]">Nov 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Personal Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-lg font-bold text-slate-200 flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-400" />
              Leadership & Council Roles
            </h3>

            {/* S.A.C.C Leadership Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-cyber-surface/80 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase">
                  Council Leadership
                </span>
                <span className="font-mono text-[11px] text-slate-500">Present</span>
              </div>
              <h4 className="font-display text-base font-bold text-slate-100 mt-3">
                Chief Designer & Disciplinary Head
              </h4>
              <p className="font-mono text-xs text-slate-400">
                Siddhartha Allied Clubs Council (S.A.C.C), SITS
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Spearheaded design of official posters, badges, and promotional collateral for 10+ campus events.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Maintained organizational discipline and operational order during major collegiate gatherings and symposiums.</span>
                </li>
              </ul>
            </div>

            {/* Geographic & Linguistic Coordinates */}
            <div className="rounded-2xl border border-white/10 bg-cyber-surface/60 p-6 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Hyderabad, Telangana, India (UTC +5:30)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="h-4 w-4 text-blue-400" />
                <span>Languages: English, Telugu, Hindi (Trilingual)</span>
              </div>
              <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400">
                Willing to relocate for internships or contribute remotely to fast-moving engineering teams worldwide.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

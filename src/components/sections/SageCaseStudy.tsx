"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, CheckCircle2, Zap, Brain, Sparkles, Cpu, BookOpen, ExternalLink } from "lucide-react";
import { PROFILE } from "@/data/profile";

interface AgentModule {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: typeof Brain;
}

const MODULES: AgentModule[] = [
  {
    id: "coordinator",
    name: "Question Coordinator",
    role: "Course & Topic Router",
    description: "Accepts student questions across B.Tech engineering branches and routes them to the right subject notes.",
    icon: Brain,
  },
  {
    id: "checker",
    name: "Concept Checker",
    role: "Misconception Clarifier",
    description: "Identifies whether an error is a simple math typo or a fundamental misunderstanding of the topic.",
    icon: Sparkles,
  },
  {
    id: "planner",
    name: "Study Planner",
    role: "Step-by-Step Breakdown",
    description: "Breaks difficult engineering units into digestible 3-step revision milestones for semester exams.",
    icon: Cpu,
  },
  {
    id: "notes",
    name: "Notes Searcher",
    role: "Textbook & PDF Retriever",
    description: "Retrieves verified explanations directly from indexed college lecture notes and reference textbooks.",
    icon: BookOpen,
  },
];

const sampleQuestions = [
  {
    q: "Why do we calculate Eigenvalues in PCA?",
    gap: "Student knows PCA reduces dimensions, but confuses variance maximization with simple data projection.",
    plan: "1. Review variance on a 2D line · 2. Visualize covariance matrix stretching · 3. Compute principal eigenvectors.",
  },
  {
    q: "Difference between Dijkstra and Bellman-Ford?",
    gap: "Student understands shortest path greedy logic, but misses why negative edge weights cause Dijkstra loops.",
    plan: "1. Re-check greedy relaxation assumptions · 2. Trace 3-node negative cycle · 3. Practice Bellman-Ford passes.",
  },
];

export default function SageCaseStudy() {
  const [activeModule, setActiveModule] = useState<AgentModule>(MODULES[0]);
  const [selectedDemo, setSelectedDemo] = useState<string | null>(sampleQuestions[0].q);

  return (
    <section id="sage" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-[#07070A] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-[11px] tracking-widest uppercase text-[#5B6B8C] dark:text-slate-400">
            03 / SELECTED WORK
          </span>
          <div className="flex flex-wrap items-center justify-between w-full gap-4">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0B1B3A] dark:text-white">
              SAGE — AI Tutor for B.Tech Courses
            </h2>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full border font-mono text-xs border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] font-semibold dark:border-[#FF1E27]/40 dark:bg-[#FF1E27]/10 dark:text-[#FF4D55]">
                Led Team of 4
              </span>
              <span className="px-3 py-1 rounded-full border font-mono text-xs border-[#DCE6F7] bg-white text-[#5B6B8C] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                Built with AI Tools
              </span>
            </div>
          </div>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#5B6B8C] dark:text-slate-400 mt-1 font-sans">
            A multi-agent course revision system designed to help engineering students understand tough topics, check their knowledge gaps, and study directly from syllabus notes.
          </p>
        </div>

        {/* Project Showcase Container */}
        <div className="mt-12 rounded-2xl border p-6 sm:p-8 backdrop-blur-md transition-all border-[#DCE6F7] bg-white shadow-[0_4px_20px_-2px_rgba(37,99,235,0.06)] dark:border-white/10 dark:bg-[#09090D] dark:shadow-none">
          {/* Honest Tech Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DCE6F7] dark:border-white/10">
            <div>
              <span className="font-mono text-xs text-[#5B6B8C] dark:text-slate-400 uppercase tracking-wider block">
                Project Role
              </span>
              <span className="font-serif text-base text-[#0B1B3A] dark:text-white mt-0.5 block font-normal">
                Team Lead (4 Members) · Concept &amp; AI Workflows
              </span>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md border border-[#DBEAFE] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300">
                Python (Learning)
              </span>
              <span className="px-2.5 py-1 rounded-md border border-[#DBEAFE] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300">
                AI Coding Tools
              </span>
              <span className="px-2.5 py-1 rounded-md border border-[#DBEAFE] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300">
                Multi-Agent Design
              </span>
              <span className="px-2.5 py-1 rounded-md border border-[#DBEAFE] bg-[#EAF2FF] text-[#0B1B3A] dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-300">
                College Wi-Fi Hosted
              </span>
            </div>
          </div>

          {/* 4 Agent Modules Selector */}
          <div className="mt-8">
            <span className="font-mono text-xs text-[#5B6B8C] dark:text-slate-400 uppercase tracking-wider block mb-3">
              Multi-Agent Architecture Breakdown
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {MODULES.map((mod) => {
                const Icon = mod.icon;
                const isSelected = activeModule.id === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveModule(mod)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-[#2563EB] bg-[#EAF2FF] shadow-sm dark:border-[#FF1E27]/70 dark:bg-[#FF1E27]/[0.08]"
                        : "border-[#DCE6F7] bg-[#F7FAFF] hover:border-[#DBEAFE] dark:border-white/5 dark:bg-black/30 dark:hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-md ${
                        isSelected
                          ? "bg-[#2563EB]/15 text-[#2563EB] dark:bg-[#FF1E27]/20 dark:text-[#FF4D55]"
                          : "bg-white text-[#5B6B8C] dark:bg-white/[0.04] dark:text-slate-400"
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-serif text-sm font-normal text-[#0B1B3A] dark:text-white">
                        {mod.name}
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-mono text-[#5B6B8C] dark:text-slate-400">
                      {mod.role}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Module Details */}
            <div className="mt-4 p-5 rounded-xl border border-[#DCE6F7] bg-[#F7FAFF] dark:border-white/5 dark:bg-black/40">
              <div className="flex items-center gap-2 font-serif text-base text-[#0B1B3A] dark:text-white">
                <span className="h-2 w-2 rounded-full bg-[#2563EB] dark:bg-[#FF1E27]" />
                <span>{activeModule.name}: {activeModule.role}</span>
              </div>
              <p className="mt-2 text-sm text-[#5B6B8C] dark:text-slate-300 font-sans leading-relaxed">
                {activeModule.description}
              </p>
            </div>
          </div>

          {/* Interactive Demo Query */}
          <div className="mt-8 pt-6 border-t border-[#DCE6F7] dark:border-white/10">
            <span className="font-mono text-xs text-[#5B6B8C] dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#FF1E27]" />
              <span>Interactive Query Clarification Example</span>
            </span>

            <div className="mt-3 flex flex-wrap gap-2">
              {sampleQuestions.map((q) => (
                <button
                  key={q.q}
                  type="button"
                  onClick={() => setSelectedDemo(q.q)}
                  className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-colors border ${
                    selectedDemo === q.q
                      ? "border-[#2563EB] bg-[#EAF2FF] text-[#2563EB] font-semibold dark:border-[#FF1E27] dark:bg-[#FF1E27]/20 dark:text-[#FF4D55]"
                      : "border-[#DCE6F7] bg-white text-[#5B6B8C] hover:border-[#2563EB] hover:text-[#2563EB] dark:border-white/10 dark:bg-black/40 dark:text-slate-400"
                  }`}
                >
                  <span className="font-bold mr-1">&gt;</span>
                  {q.q}
                </button>
              ))}
            </div>

            {selectedDemo && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-lg border border-[#DCE6F7] bg-white shadow-sm dark:border-white/5 dark:bg-black/50 dark:shadow-none">
                  <span className="font-bold text-[10px] uppercase text-[#2563EB] dark:text-[#FF4D55] block mb-1">
                    Diagnosed Knowledge Gap
                  </span>
                  <p className="text-[#0B1B3A] dark:text-slate-300 leading-relaxed font-sans text-xs">
                    {sampleQuestions.find((s) => s.q === selectedDemo)?.gap}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg border border-[#DCE6F7] bg-white shadow-sm dark:border-white/5 dark:bg-black/50 dark:shadow-none">
                  <span className="font-bold text-[10px] uppercase text-[#0B1B3A] dark:text-white block mb-1">
                    Generated Study Plan
                  </span>
                  <p className="text-[#0B1B3A] dark:text-slate-300 leading-relaxed font-sans text-xs">
                    {sampleQuestions.find((s) => s.q === selectedDemo)?.plan}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, CheckCircle2, Zap, Database, Brain, Sparkles, Cpu, ExternalLink, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";

interface AgentNode {
  id: string;
  name: string;
  role: string;
  icon: typeof Brain;
  input: string;
  output: string;
  description: string;
}

const AGENTS: AgentNode[] = [
  {
    id: "coordinator",
    name: "01. Question Coordinator",
    role: "Intent Parsing & Branch Routing",
    icon: Brain,
    input: "Student natural-language inquiry or quiz response",
    output: "Dispatched curriculum branch & topic payload",
    description: "Evaluates questions across 25+ B.Tech courses (CSE, AI, ECE, Mech, Civil) and orchestrates the request to the dedicated subject specialist.",
  },
  {
    id: "diagnostic",
    name: "02. Gap Finder Agent",
    role: "Conceptual Misconception Analysis",
    icon: Sparkles,
    input: "Student answer history & failed quiz attempts",
    output: "Pinpointed conceptual misunderstanding",
    description: "Distinguishes between a simple formula calculation slip and a foundational concept gap (e.g. projection matrix vs variance in PCA).",
  },
  {
    id: "planner",
    name: "03. Study Planner Agent",
    role: "Curriculum Path Generation",
    icon: Cpu,
    input: "Diagnosed knowledge gap + JNTUH syllabus units",
    output: "Actionable 3-step mastery roadmap",
    description: "Sequences complex engineering topics into structured micro-lessons formatted for semester examination patterns.",
  },
  {
    id: "rag",
    name: "04. Notes Searcher (ChromaDB + Groq)",
    role: "Syllabus-Grounding Vector RAG",
    icon: Database,
    input: "Indexed professor lecture notes & textbook PDFs",
    output: "Strictly verified, hallucination-free explanation",
    description: "Retrieves top-k verified textbook chunks from local ChromaDB vectors, executing fast sub-second inference via Groq Llama 3 API.",
  },
];

export default function SageCaseStudy() {
  const [activeAgent, setActiveAgent] = useState<AgentNode>(AGENTS[0]);
  const [simulatedPrompt, setSimulatedPrompt] = useState<string | null>(null);

  const sampleQuestions = [
    {
      q: "Explain Eigenvalues in PCA (Machine Learning)",
      course: "B.Tech CSE / AI&ML",
      gap: "Understands dimensionality reduction, but struggles with variance matrix projection.",
      plan: "Display 2D variance projection diagram prior to the covariance formula derivation.",
    },
    {
      q: "Difference between TCP and UDP (Computer Networks)",
      course: "B.Tech CSE / IT",
      gap: "Confuses 3-way handshake reliability with streaming throughput speeds.",
      plan: "Side-by-side transport layer comparison table contrasting packet retransmission.",
    },
    {
      q: "Otto vs Diesel Engine Cycles (Applied Thermodynamics)",
      course: "B.Tech Mechanical Engineering",
      gap: "Confuses constant-volume vs constant-pressure heat addition stages.",
      plan: "Fetch verified PV & TS indicator diagrams from indexed mechanical course notes.",
    },
  ];

  return (
    <section id="sage" className="relative py-24 px-4 sm:px-8 border-t transition-colors duration-500 border-slate-200 bg-slate-50/50 text-slate-900 dark:border-white/5 dark:bg-[#020202] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header: Referral Page Style Index */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-semibold border-sky-500/20 bg-sky-50 text-sky-700 dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
            <Users className="h-3.5 w-3.5 text-sky-600 dark:text-[#FF1E27]" />
            <span>03 // FLAGSHIP PROJECT &middot; TEAM LEAD (TEAM OF 4)</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            SAGE — Self-Adaptive Agentic Educational Engine
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mt-1">
            I led a team of 4 classmates to architect an offline-ready AI tutoring engine grounded in our college syllabus across 25+ B.Tech engineering courses, delivered over campus Wi-Fi.
          </p>
        </div>

        {/* Executive Highlights Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 font-mono">
          <div className="rounded-xl border p-4 transition-all border-slate-200 bg-white hover:border-sky-500 dark:border-white/10 dark:bg-[#090909] dark:hover:border-[#FF1E27]/40 shadow-sm">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Role</span>
            <div className="text-lg font-bold font-display text-sky-600 dark:text-[#FF3843] mt-1">Team Lead</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">4 student engineers</p>
          </div>
          <div className="rounded-xl border p-4 transition-all border-slate-200 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-[#090909] dark:hover:border-white/20 shadow-sm">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Curriculum</span>
            <div className="text-lg font-bold font-display text-slate-900 dark:text-white mt-1">25+ Courses</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">CSE, AI, ECE, Mech, Civil</p>
          </div>
          <div className="rounded-xl border p-4 transition-all border-slate-200 bg-white hover:border-sky-500 dark:border-white/10 dark:bg-[#090909] dark:hover:border-[#FF1E27]/40 shadow-sm">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tech Stack</span>
            <div className="text-lg font-bold font-display text-sky-600 dark:text-[#FF3843] mt-1">ChromaDB + Groq</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Django + Llama 3 API</p>
          </div>
          <div className="rounded-xl border p-4 transition-all border-slate-200 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-[#090909] dark:hover:border-white/20 shadow-sm">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Delivery</span>
            <div className="text-lg font-bold font-display text-slate-900 dark:text-white mt-1">Campus Wi-Fi</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Free for all students</p>
          </div>
        </div>

        {/* Multi-Agent Architecture Console (Referral Style) */}
        <div className="mt-10 rounded-2xl border p-5 sm:p-7 shadow-xl border-slate-200 bg-white dark:border-white/10 dark:bg-[#070707]">
          <div className="border-b pb-4 border-slate-200 dark:border-white/10">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-[#FF3843]">
              Architecture Topology
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold mt-1 text-slate-900 dark:text-white">
              Collaborative 4-Agent Pipeline
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Select an agent to inspect its responsibilities, input stream, and syllabus-grounded output contract:
            </p>
          </div>

          {/* Clean Agent Selector Tabs */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {AGENTS.map((agent) => {
              const Icon = agent.icon;
              const isSelected = activeAgent.id === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setActiveAgent(agent)}
                  className={`flex flex-col text-left p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? "border-sky-500 bg-sky-50/80 shadow-[0_0_15px_rgba(2,132,199,0.15)] dark:border-[#FF1E27]/70 dark:bg-[#FF1E27]/[0.08] dark:shadow-[0_0_15px_rgba(255,30,39,0.15)]"
                      : "border-slate-200 bg-slate-50/60 hover:border-slate-300 dark:border-white/10 dark:bg-[#0C0C0C] dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-md ${
                      isSelected
                        ? "bg-sky-500/20 text-sky-600 dark:bg-[#FF1E27]/20 dark:text-[#FF3843]"
                        : "bg-slate-200/60 text-slate-600 dark:bg-white/[0.05] dark:text-slate-300"
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-display text-xs font-bold text-slate-900 dark:text-white">
                      {agent.name}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] line-clamp-1 font-mono text-slate-500 dark:text-slate-400">
                    {agent.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Agent Contract Card */}
          <div className="mt-5 rounded-xl border p-4 sm:p-5 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#0C0C0C]">
            <div className="flex items-center gap-2 text-sm font-display font-bold text-slate-900 dark:text-white">
              <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_6px_rgba(2,132,199,0.8)] dark:bg-[#FF1E27] dark:shadow-[0_0_6px_#FF1E27]" />
              <span>{activeAgent.name}: {activeAgent.role}</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {activeAgent.description}
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg border border-slate-200 bg-white dark:border-white/5 dark:bg-black/60">
                <span className="block text-[10px] uppercase text-slate-500 dark:text-slate-400">Input Contract</span>
                <span className="mt-0.5 block font-semibold text-sky-600 dark:text-[#FF3843]">{activeAgent.input}</span>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-200 bg-white dark:border-white/5 dark:bg-black/60">
                <span className="block text-[10px] uppercase text-slate-500 dark:text-slate-400">Output Payload</span>
                <span className="mt-0.5 block text-slate-800 dark:text-slate-200">{activeAgent.output}</span>
              </div>
            </div>
          </div>

          {/* Interactive Simulation / Test */}
          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 text-sky-600 dark:text-[#FF3843]">
              <Zap className="h-3.5 w-3.5" /> Interactive Query Simulation
            </span>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setSimulatedPrompt(q.q)}
                  className="rounded-lg border px-3 py-1.5 text-xs font-mono text-left transition-all border-slate-200 bg-slate-50 hover:border-sky-500 hover:bg-sky-50 text-slate-700 dark:border-white/10 dark:bg-black dark:text-slate-300 dark:hover:border-[#FF1E27]/50 dark:hover:bg-[#FF1E27]/10"
                >
                  <span className="font-bold mr-1.5 text-sky-600 dark:text-[#FF1E27]">&gt;</span>
                  {q.q}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {simulatedPrompt && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="mt-3.5 rounded-xl border p-4 font-mono text-xs shadow-lg border-sky-400/40 bg-sky-50/80 text-slate-800 dark:border-[#FF1E27]/40 dark:bg-[#0B0B0B] dark:text-slate-300"
                >
                  <div className="flex items-center gap-2 font-bold mb-2.5 text-slate-900 dark:text-white">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-[#FF1E27]" />
                    <span>Agent Pipeline Response Generated:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-white dark:border-white/5 dark:bg-black/60">
                      <span className="font-bold block mb-1 uppercase tracking-wider text-[10px] text-sky-600 dark:text-[#FF3843]">
                        Diagnosed Misconception
                      </span>
                      <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                        {sampleQuestions.find((s) => s.q === simulatedPrompt)?.gap}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-white dark:border-white/5 dark:bg-black/60">
                      <span className="font-bold block mb-1 uppercase tracking-wider text-[10px] text-slate-900 dark:text-white">
                        Adaptive Study Plan
                      </span>
                      <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                        {sampleQuestions.find((s) => s.q === simulatedPrompt)?.plan}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

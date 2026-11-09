"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Users, CheckCircle2, Zap, Database, Brain, Sparkles, Cpu } from "lucide-react";

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
    name: "1. Question Coordinator",
    role: "Intent & Subject Routing",
    icon: Brain,
    input: "Student question or quiz input",
    output: "Dispatched task to specialized sub-agents",
    description: "Parses queries across 25+ B.Tech courses (CSE, AI, ECE, Mech, Civil) and routes each inquiry to the exact domain helper.",
  },
  {
    id: "diagnostic",
    name: "2. Knowledge Gap Finder",
    role: "Misconception Analysis",
    icon: Sparkles,
    input: "Student answer history & quiz attempts",
    output: "Pinpointed conceptual misconception",
    description: "Analyzes why a student missed an answer—separating foundational misunderstandings from simple calculation slips.",
  },
  {
    id: "planner",
    name: "3. Adaptive Study Planner",
    role: "Curriculum Path Generation",
    icon: Cpu,
    input: "Diagnosed gap + JNTUH / college syllabus",
    output: "Bite-sized 3-step mastery roadmap",
    description: "Sequences complex technical topics into approachable micro-steps aligned with semester exam patterns.",
  },
  {
    id: "rag",
    name: "4. Notes Searcher (ChromaDB + Groq)",
    role: "Syllabus-Grounding RAG",
    icon: Database,
    input: "Indexed textbook PDFs & professor lecture notes",
    output: "Strictly grounded, hallucination-free answer",
    description: "Vectorizes reference course material in ChromaDB so answers strictly reflect verified curriculum guidelines.",
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
    <section id="sage" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-[#020202] transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-3 py-1 font-mono text-xs font-medium text-[#FF3843]">
            <Users className="h-3.5 w-3.5 text-[#FF1E27]" />
            <span>COLLEGE FLAGSHIP // TEAM LEAD (TEAM OF 4)</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            SAGE — Self-Adaptive Agentic Educational Engine
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 mt-1">
            Led a 4-person student team to engineer an offline-ready AI tutoring engine grounded in college syllabi across 25+ B.Tech courses, deployed over campus Wi-Fi.
          </p>
        </div>

        {/* Real Highlights Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 font-mono">
          <div className="rounded-xl border border-white/10 bg-[#090909] p-4 transition-all hover:border-[#FF1E27]/40">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider">Role</span>
            <div className="text-lg font-bold font-display text-[#FF3843] mt-1">Team Lead</div>
            <p className="text-[11px] text-slate-400 mt-0.5">4 student engineers</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#090909] p-4 transition-all hover:border-white/20">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider">Curriculum</span>
            <div className="text-lg font-bold font-display text-white mt-1">25+ Courses</div>
            <p className="text-[11px] text-slate-400 mt-0.5">CSE, AI, ECE, Mech, Civil</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#090909] p-4 transition-all hover:border-[#FF1E27]/40">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider">Architecture</span>
            <div className="text-lg font-bold font-display text-[#FF3843] mt-1">ChromaDB + Groq</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Django + Llama 3 API</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#090909] p-4 transition-all hover:border-white/20">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider">Delivery</span>
            <div className="text-lg font-bold font-display text-white mt-1">Campus Wi-Fi</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Zero cellular data cost</p>
          </div>
        </div>

        {/* Multi-Agent Architecture Console */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#070707] p-5 sm:p-7 shadow-xl">
          <div className="border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-[#FF3843] font-semibold uppercase tracking-wider">
              System Architecture
            </span>
            <h3 className="font-display text-base sm:text-lg font-bold text-white mt-1">
              Collaborative 4-Agent Pipeline
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select an agent below to inspect its data contract, role, and syllabus-grounding mechanics:
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
                      ? "border-[#FF1E27]/70 bg-[#FF1E27]/[0.08] shadow-[0_0_15px_rgba(255,30,39,0.15)]"
                      : "border-white/10 bg-[#0C0C0C] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-md ${isSelected ? "bg-[#FF1E27]/20 text-[#FF3843]" : "bg-white/[0.05] text-slate-300"}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-display text-xs font-bold text-white">
                      {agent.name}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400 line-clamp-1 font-mono">
                    {agent.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Agent Contract Card */}
          <div className="mt-5 rounded-xl border border-white/10 bg-[#0C0C0C] p-4 sm:p-5">
            <div className="flex items-center gap-2 text-sm font-display font-bold text-white">
              <span className="h-2 w-2 rounded-full bg-[#FF1E27] shadow-[0_0_6px_#FF1E27]" />
              <span>{activeAgent.name}: {activeAgent.role}</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeAgent.description}
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                <span className="text-slate-400 block text-[10px] uppercase">Input Stream</span>
                <span className="text-[#FF3843] mt-0.5 block">{activeAgent.input}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                <span className="text-slate-400 block text-[10px] uppercase">Output Payload</span>
                <span className="text-slate-200 mt-0.5 block">{activeAgent.output}</span>
              </div>
            </div>
          </div>

          {/* Interactive Simulation / Test */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <span className="font-mono text-xs text-[#FF3843] font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-[#FF1E27]" /> Live Query Simulation
            </span>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setSimulatedPrompt(q.q)}
                  className="rounded-lg border border-white/10 bg-black px-3 py-1.5 text-xs font-mono text-slate-300 hover:border-[#FF1E27]/50 hover:bg-[#FF1E27]/10 text-left transition-all"
                >
                  <span className="text-[#FF1E27] font-bold mr-1.5">$</span>
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
                  className="mt-3.5 rounded-xl border border-[#FF1E27]/40 bg-[#0B0B0B] p-4 font-mono text-xs text-slate-300 shadow-[0_0_20px_rgba(255,30,39,0.1)]"
                >
                  <div className="flex items-center gap-2 text-white font-bold mb-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF1E27]" />
                    <span>Agent Pipeline Response Generated:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                      <span className="text-[#FF3843] font-bold block mb-1 uppercase tracking-wider text-[10px]">Diagnosed Misconception</span>
                      <p className="text-slate-300 leading-relaxed">
                        {sampleQuestions.find((s) => s.q === simulatedPrompt)?.gap}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/60 border border-white/5">
                      <span className="text-white font-bold block mb-1 uppercase tracking-wider text-[10px]">Adaptive Study Plan</span>
                      <p className="text-slate-300 leading-relaxed">
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

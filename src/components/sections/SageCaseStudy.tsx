"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ShieldCheck, Database, Zap, BookOpen, Layers, CheckCircle2, ChevronRight, Activity, ArrowRight } from "lucide-react";

interface AgentNode {
  id: string;
  name: string;
  role: string;
  icon: typeof Cpu;
  color: string;
  borderColor: string;
  bgColor: string;
  input: string;
  output: string;
  description: string;
  latency: string;
}

const AGENTS: AgentNode[] = [
  {
    id: "coordinator",
    name: "Coordinator Agent",
    role: "Session Triage & Intent Classifier",
    icon: Activity,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    bgColor: "bg-cyan-500/10",
    input: "Student Query or Quiz Response",
    output: "Dispatched Tasks to Diagnostic & Planner Agents",
    description:
      "Acts as the central conductor. Analyzes input context, course syllabus metadata, and routes the student's interaction to the appropriate sub-agent.",
    latency: "~40ms",
  },
  {
    id: "diagnostic",
    name: "Diagnostic Agent",
    role: "Knowledge Gap Detector",
    icon: ShieldCheck,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/40",
    bgColor: "bg-emerald-500/10",
    input: "Student Answer History & Misconceptions",
    output: "Identified Cognitive Deficit Matrix",
    description:
      "Distinguishes surface-level syntax mistakes from deep conceptual misunderstandings across 25+ B.Tech engineering syllabi.",
    latency: "~120ms",
  },
  {
    id: "planner",
    name: "Curriculum Planner",
    role: "Dynamic Remedial Synthesizer",
    icon: BookOpen,
    color: "text-blue-400",
    borderColor: "border-blue-500/40",
    bgColor: "bg-blue-500/10",
    input: "Identified Gaps + Target Syllabus Objectives",
    output: "Step-by-Step Personalized Remedial Path",
    description:
      "Dynamically reorganizes the curriculum. If a student struggles with matrix transformations, it injects linear algebra primers before advancing to 3D computer graphics.",
    latency: "~180ms",
  },
  {
    id: "rag",
    name: "RAG Evaluator (ChromaDB + Groq)",
    role: "Factual Grounding & Fast Inference",
    icon: Database,
    color: "text-purple-400",
    borderColor: "border-purple-500/40",
    bgColor: "bg-purple-500/10",
    input: "Course Reference PDFs & Vector Embeddings",
    output: "Hallucination-Proof Answer & Grading",
    description:
      "Queries ChromaDB vector collections for exact textbook passages and executes sub-second reasoning through Groq's Llama 3 LPU engine.",
    latency: "< 350ms",
  },
];

export default function SageCaseStudy() {
  const [activeAgent, setActiveAgent] = useState<AgentNode>(AGENTS[0]);
  const [simulatedPrompt, setSimulatedPrompt] = useState<string | null>(null);
  const [simulating, setSimulating] = useState(false);

  const testPrompts = [
    {
      q: "Explain Eigenvalues in Principal Component Analysis (PCA)",
      course: "B.Tech CSE - Machine Learning",
      diagnosis: "Student grasps dimensionality reduction but lacks matrix variance intuition.",
      plan: "Inject 2-minute visual geometric recap of variance maximization before calculus derivation.",
    },
    {
      q: "Difference between TCP and UDP transmission mechanisms",
      course: "B.Tech CSE/IT - Computer Networks",
      diagnosis: "Confusing packet acknowledgement with connection handshake overhead.",
      plan: "Present side-by-side handshake timing diagram with packet loss simulation.",
    },
    {
      q: "Thermodynamic cycles in internal combustion engines",
      course: "B.Tech Mechanical - Applied Thermodynamics",
      diagnosis: "Requires Otto vs Diesel cycle PV-diagram distinction.",
      plan: "Retrieve specific formula excerpts from indexed college course textbook via ChromaDB.",
    },
  ];

  const runSimulation = (prompt: typeof testPrompts[0]) => {
    setSimulating(true);
    setSimulatedPrompt(null);
    setTimeout(() => {
      setSimulatedPrompt(prompt.q);
      setSimulating(false);
    }, 400);
  };

  return (
    <section id="sage" className="relative py-24 px-4 sm:px-8 border-t border-white/5 bg-cyber-bg/50">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-300">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>FLAGSHIP ARCHITECTURE // AI TEAM LEAD</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            SAGE: Self-Adaptive Agentic Educational Engine
          </h2>
          <p className="max-w-3xl text-sm sm:text-base text-slate-400 mt-2">
            Led a 4-engineer team to construct a multi-agent tutoring platform that coordinates specialized AI agents to diagnose student learning gaps, assemble dynamic remedial study paths, and verify answers across 25+ B.Tech courses.
          </p>
        </div>

        {/* High-Impact Highlights Strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-xl border border-white/10 bg-cyber-surface/70 p-4">
            <span className="font-mono text-[11px] text-slate-400 uppercase">Architecture</span>
            <div className="text-xl font-bold font-display text-cyan-400 mt-1">4-Agent Mesh</div>
            <p className="text-[11px] font-mono text-slate-500 mt-0.5">Coordinator, Diagnostic, Planner, RAG</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-cyber-surface/70 p-4">
            <span className="font-mono text-[11px] text-slate-400 uppercase">Knowledge Base</span>
            <div className="text-xl font-bold font-display text-blue-400 mt-1">25+ Courses</div>
            <p className="text-[11px] font-mono text-slate-500 mt-0.5">CSE, AI/DS, ECE, Mech, Civil</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-cyber-surface/70 p-4">
            <span className="font-mono text-[11px] text-slate-400 uppercase">Inference Engine</span>
            <div className="text-xl font-bold font-display text-purple-400 mt-1">Groq + ChromaDB</div>
            <p className="text-[11px] font-mono text-slate-500 mt-0.5">Vector similarity & sub-second LLM</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-cyber-surface/70 p-4">
            <span className="font-mono text-[11px] text-slate-400 uppercase">Deployment</span>
            <div className="text-xl font-bold font-display text-emerald-400 mt-1">Local Wi-Fi Web App</div>
            <p className="text-[11px] font-mono text-slate-500 mt-0.5">Zero student cloud costs</p>
          </div>
        </div>

        {/* Interactive Architecture Console */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-cyber-surface/80 p-5 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                Interactive System Topology
              </span>
              <h3 className="font-display text-lg font-bold text-slate-100">
                Click any agent node to inspect its internal pipeline & contracts
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-500">
              Stack: Python • Django • ChromaDB • Groq LPU
            </span>
          </div>

          {/* 4 Agent Selection Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {AGENTS.map((agent) => {
              const Icon = agent.icon;
              const isSelected = activeAgent.id === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setActiveAgent(agent)}
                  className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-300 ${
                    isSelected
                      ? `${agent.borderColor} ${agent.bgColor} shadow-lg scale-[1.02]`
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className={`p-2 rounded-lg ${agent.bgColor}`}>
                      <Icon className={`h-5 w-5 ${agent.color}`} />
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">{agent.latency}</span>
                  </div>
                  <div className="mt-3 font-display text-sm font-bold text-slate-100">
                    {agent.name}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-400 line-clamp-1 font-mono">
                    {agent.role}
                  </div>
                  <div className="mt-3 flex items-center gap-1 font-mono text-[10px] text-cyan-400 font-medium">
                    <span>Inspect Specs</span>
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Panel for Active Agent */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAgent.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-6 rounded-xl border border-white/10 bg-cyber-bg/80 p-5 sm:p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <span className={`flex h-3 w-3 rounded-full ${activeAgent.bgColor} ${activeAgent.color} ring-4 ring-cyan-500/20`} />
                  <div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-slate-100">
                      {activeAgent.name} // <span className="text-slate-400 text-sm font-normal">{activeAgent.role}</span>
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-slate-500">Measured Latency:</span>
                  <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30">
                    {activeAgent.latency}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {activeAgent.description}
              </p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                  <span className="text-slate-500 uppercase text-[10px] font-semibold block mb-1">
                    Input Contract:
                  </span>
                  <span className="text-cyan-300">{activeAgent.input}</span>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                  <span className="text-slate-500 uppercase text-[10px] font-semibold block mb-1">
                    Dispatched Output:
                  </span>
                  <span className="text-emerald-300">{activeAgent.output}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Live Multi-Agent Simulation Sandbox */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                <Zap className="h-3.5 w-3.5" /> Real-time Simulation: Test SAGE on an Engineering Topic
              </span>
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">Tap any scenario</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {testPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => runSimulation(p)}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-mono text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-950/20 text-left"
                >
                  <span className="text-cyan-400 font-bold mr-1.5">&gt;</span>
                  {p.q}
                </button>
              ))}
            </div>

            {simulatedPrompt && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 rounded-xl border border-cyan-500/30 bg-cyber-surface/90 p-4 font-mono text-xs text-slate-300"
              >
                <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>SAGE 4-Agent Execution Complete (0.42s)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                  <div className="p-2.5 rounded bg-black/40 border border-white/5">
                    <span className="text-emerald-400 font-bold block mb-1">Diagnostic Agent Result:</span>
                    <p className="text-slate-400">
                      {testPrompts.find((tp) => tp.q === simulatedPrompt)?.diagnosis}
                    </p>
                  </div>
                  <div className="p-2.5 rounded bg-black/40 border border-white/5">
                    <span className="text-blue-400 font-bold block mb-1">Planner Agent Remedial Strategy:</span>
                    <p className="text-slate-400">
                      {testPrompts.find((tp) => tp.q === simulatedPrompt)?.plan}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

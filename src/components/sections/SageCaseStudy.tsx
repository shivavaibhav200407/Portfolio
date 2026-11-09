"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, CheckCircle2, Zap, Database, Brain, Sparkles } from "lucide-react";

interface AgentNode {
  id: string;
  name: string;
  role: string;
  icon: typeof Brain;
  color: string;
  borderColor: string;
  bgColor: string;
  input: string;
  output: string;
  description: string;
}

const AGENTS: AgentNode[] = [
  {
    id: "coordinator",
    name: "1. Question Coordinator",
    role: "Understands the Student's Question",
    icon: Brain,
    color: "text-[#FF3843]",
    borderColor: "border-[#FF1E27]/50",
    bgColor: "bg-[#FF1E27]/10",
    input: "Student's question or quiz reply",
    output: "Hands off to the right helper agent",
    description: "Figures out which subject (CSE, ECE, Mech, Civil) and topic the student is working on.",
  },
  {
    id: "diagnostic",
    name: "2. Gap Finder",
    role: "Finds What the Student is Stuck On",
    icon: Sparkles,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/50",
    bgColor: "bg-emerald-500/10",
    input: "Student's answer history",
    output: "List of weak topics that need review",
    description: "Instead of just saying 'wrong answer', it figures out the exact concept the student misunderstood.",
  },
  {
    id: "planner",
    name: "3. Study Planner",
    role: "Makes a Friendly Step-by-Step Path",
    icon: BookOpen,
    color: "text-amber-400",
    borderColor: "border-amber-500/50",
    bgColor: "bg-amber-500/10",
    input: "Identified gaps + course syllabus",
    output: "Short 3-step study roadmap",
    description: "Breaks big difficult topics into easy bite-sized practice steps so students don't feel stressed.",
  },
  {
    id: "rag",
    name: "4. Notes Searcher (ChromaDB + Groq)",
    role: "Fact-Checks Against College Textbooks",
    icon: Database,
    color: "text-purple-400",
    borderColor: "border-purple-500/50",
    bgColor: "bg-purple-500/10",
    input: "College syllabus PDFs and notes",
    output: "Accurate, syllabus-matching explanation",
    description: "Searches our uploaded college reference notes in ChromaDB so the AI doesn't hallucinate or give out-of-syllabus answers.",
  },
];

export default function SageCaseStudy() {
  const [activeAgent, setActiveAgent] = useState<AgentNode>(AGENTS[0]);
  const [simulatedPrompt, setSimulatedPrompt] = useState<string | null>(null);

  const sampleQuestions = [
    {
      q: "Explain Eigenvalues in PCA (Machine Learning)",
      course: "B.Tech CSE / AI&ML",
      gap: "Grasps reducing dimensions, but struggles with the matrix variance math.",
      plan: "Show a quick 2-minute visual diagram of variance before the formula.",
    },
    {
      q: "Difference between TCP and UDP (Computer Networks)",
      course: "B.Tech CSE / IT",
      gap: "Mixing up reliability handshakes with transmission speed.",
      plan: "Compare video streaming (UDP) vs sending an email (TCP) with a side-by-side table.",
    },
    {
      q: "Otto vs Diesel Engine Cycles (Applied Thermodynamics)",
      course: "B.Tech Mechanical Engineering",
      gap: "Confusing constant-volume vs constant-pressure heat addition.",
      plan: "Fetch the exact PV-diagram from our mechanical textbook notes in ChromaDB.",
    },
  ];

  return (
    <section id="sage" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-[#050204] transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-3 py-1 font-mono text-xs font-medium text-[#FF3843]">
            <Users className="h-3.5 w-3.5 text-[#FF1E27]" />
            <span>COLLEGE PROJECT // TEAM LEAD (TEAM OF 4)</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            SAGE — Self-Adaptive Agentic Educational Engine
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 mt-1">
            I led a team of 4 classmates to build an AI tutor that knows our college syllabus across 25+ B.Tech courses, running over campus Wi-Fi.
          </p>
        </div>

        {/* Real Highlights Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 font-mono">
          <div className="rounded-xl border border-white/10 bg-black/60 p-4 transition-all hover:border-[#FF1E27]/40">
            <span className="text-[11px] text-slate-400">My Leadership</span>
            <div className="text-lg font-bold font-display text-[#FF3843] mt-1">Team Lead</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Team of 4 students</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/60 p-4 transition-all hover:border-white/20">
            <span className="text-[11px] text-slate-400">Scope</span>
            <div className="text-lg font-bold font-display text-white mt-1">25+ Courses</div>
            <p className="text-[11px] text-slate-400 mt-0.5">CSE, AI, ECE, Mech, Civil</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/60 p-4 transition-all hover:border-[#FF1E27]/40">
            <span className="text-[11px] text-slate-400">Tech Stack</span>
            <div className="text-lg font-bold font-display text-[#FF3843] mt-1">Python + Groq</div>
            <p className="text-[11px] text-slate-400 mt-0.5">ChromaDB RAG + Django</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/60 p-4 transition-all hover:border-white/20">
            <span className="text-[11px] text-slate-400">Delivery</span>
            <div className="text-lg font-bold font-display text-slate-200 mt-1">Local Wi-Fi</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Free for all students</p>
          </div>
        </div>

        {/* Interactive Helper Inspection */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-black/80 p-5 sm:p-7 backdrop-blur-xl">
          <div className="border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-[#FF3843] font-semibold uppercase">
              How SAGE Works
            </span>
            <h3 className="font-display text-base sm:text-lg font-bold text-white mt-0.5">
              4 AI helpers collaborate so answers match our syllabus
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Click any helper below to see what it does:
            </p>
          </div>

          {/* Helper Tabs */}
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
                      ? `${agent.borderColor} ${agent.bgColor} shadow-[0_0_15px_rgba(255,30,39,0.2)]`
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-md ${agent.bgColor}`}>
                      <Icon className={`h-4 w-4 ${agent.color}`} />
                    </div>
                    <span className="font-display text-xs font-bold text-slate-200">
                      {agent.name}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400 line-clamp-1">
                    {agent.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Helper Detail */}
          <div className="mt-5 rounded-xl border border-white/10 bg-black p-4 sm:p-5">
            <div className="flex items-center gap-2 text-sm font-display font-bold text-white">
              <span className={`h-2.5 w-2.5 rounded-full ${activeAgent.bgColor} ${activeAgent.color} ring-2 ring-[#FF1E27]/30`} />
              <span>{activeAgent.name}: {activeAgent.role}</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeAgent.description}
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-slate-400 block text-[10px]">What goes in:</span>
                <span className="text-[#FF3843]">{activeAgent.input}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-slate-400 block text-[10px]">What comes out:</span>
                <span className="text-slate-200">{activeAgent.output}</span>
              </div>
            </div>
          </div>

          {/* Interactive Simulation / Test */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <span className="font-mono text-xs text-[#FF3843] font-semibold uppercase flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-[#FF1E27]" /> Try A Sample College Question
            </span>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setSimulatedPrompt(q.q)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-slate-300 hover:border-[#FF1E27]/40 hover:bg-[#FF1E27]/10 text-left transition-all"
                >
                  <span className="text-[#FF1E27] font-bold mr-1">&gt;</span>
                  {q.q}
                </button>
              ))}
            </div>

            {simulatedPrompt && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 rounded-xl border border-[#FF1E27]/40 bg-black/90 p-3.5 font-mono text-xs text-slate-300 shadow-[0_0_20px_rgba(255,30,39,0.15)]"
              >
                <div className="flex items-center gap-1.5 text-[#FF3843] font-bold mb-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>SAGE Helpers Answered Successfully:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-emerald-400 font-bold block mb-0.5">Gap Spotted:</span>
                    <p className="text-slate-400">
                      {sampleQuestions.find((s) => s.q === simulatedPrompt)?.gap}
                    </p>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-[#FF3843] font-bold block mb-0.5">Study Plan Suggested:</span>
                    <p className="text-slate-400">
                      {sampleQuestions.find((s) => s.q === simulatedPrompt)?.plan}
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

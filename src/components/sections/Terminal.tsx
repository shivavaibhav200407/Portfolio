"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Play, Sparkles } from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init",
      command: "init --system",
      time: "12:00:01",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-cyan-400 font-bold">
            [SYNAPSE OS v1.0.4] Initialized for candidate A. Shiva Vaibhav.
          </p>
          <p className="text-slate-400">
            Type <span className="text-cyan-300 font-mono">help</span> to view available commands, or tap the quick action chips below.
          </p>
        </div>
      ),
    },
  ]);

  const endOfLogsRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      endOfLogsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, logs]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const time = new Date().toLocaleTimeString();
    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-300 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] font-mono">
              <div><span className="text-cyan-400">whoami</span> — Candidate summary & education</div>
              <div><span className="text-cyan-400">sage</span> — SAGE multi-agent system specs</div>
              <div><span className="text-cyan-400">skills</span> — AI/ML, Python & design stack</div>
              <div><span className="text-cyan-400">posters</span> — S.A.C.C Chief Designer credentials</div>
              <div><span className="text-cyan-400">contact</span> — Email, phone & social coordinates</div>
              <div><span className="text-cyan-400">clear</span> — Wipe terminal logs</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-cyan-400 font-semibold">Name:</span> A. Shiva Vaibhav</p>
            <p><span className="text-cyan-400 font-semibold">Role:</span> B.Tech CSE (AI & ML) Student & Creative Builder</p>
            <p><span className="text-cyan-400 font-semibold">Institution:</span> Siddhartha Institute of Technology & Sciences (SITS), Hyderabad</p>
            <p><span className="text-cyan-400 font-semibold">Graduation:</span> Expected 2028 | <span className="text-emerald-400">CGPA: 8.02</span></p>
            <p><span className="text-cyan-400 font-semibold">Status:</span> Open for AI / Software Engineering Internships & Freelance</p>
          </div>
        );
        break;

      case "sage":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-300 font-bold">SAGE (Self-Adaptive Agentic Educational Engine):</p>
            <p className="text-slate-400">Role: Team Lead (Team of 4) | Stack: Python, Django, ChromaDB, Groq Llama 3</p>
            <ul className="list-disc pl-4 space-y-0.5 text-slate-300 text-[11px]">
              <li>Orchestrates 4 specialized agents: Coordinator, Diagnostic, Planner, Evaluator.</li>
              <li>Covers 25+ B.Tech courses across CSE, AI/DS, ECE, Mechanical & Civil.</li>
              <li>Uses RAG with ChromaDB vector search to eliminate model hallucinations.</li>
              <li>Engineered as a local Wi-Fi web application for zero-cost device accessibility.</li>
            </ul>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-300 font-semibold">Technical & Creative Core:</p>
            <p><span className="text-emerald-400 font-mono">[AI & Agents]:</span> Python, Multi-Agent Architecture, RAG, ChromaDB, Groq LPU, Prompt Engineering</p>
            <p><span className="text-blue-400 font-mono">[Web / App]:</span> Django, Next.js, TypeScript, Tailwind CSS, REST APIs, Git/GitHub</p>
            <p><span className="text-pink-400 font-mono">[Creative]:</span> Graphic & Poster Design, Swiss Typography, Event Identity, Figma</p>
            <p><span className="text-amber-400 font-mono">[Leadership]:</span> Team Lead (4 Engineers), S.A.C.C Chief Designer & Disciplinary Head</p>
          </div>
        );
        break;

      case "posters":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-300 font-semibold">Siddhartha Allied Clubs Council (S.A.C.C):</p>
            <p>Title: <span className="text-white font-medium">Chief Designer & Disciplinary Head</span></p>
            <p className="text-slate-400">Directs promotional posters, keynote banners, and visual identities for college-wide summits and technical symposiums.</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-300 font-semibold">Contact & Social Coordinates:</p>
            <p>Email: <a href="mailto:vaibhava344@gmail.com" className="text-cyan-400 underline">vaibhava344@gmail.com</a></p>
            <p>Phone: <span className="text-slate-200">+91 9493721105</span> (Hyderabad, India)</p>
            <p>Profiles: <a href="https://linkedin.com" target="_blank" className="text-blue-400 underline mr-3">LinkedIn</a> <a href="https://github.com" target="_blank" className="text-slate-300 underline">GitHub</a></p>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-cyan-300 font-mono">help</span> for available commands.
          </p>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: rawCmd,
        time,
        output,
      },
    ]);
    setInput("");
  };

  const quickCommands = ["whoami", "sage", "skills", "posters", "contact", "clear"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity">
      <div
        className={`flex flex-col rounded-2xl border border-cyan-500/40 bg-cyber-bg/95 shadow-[0_0_50px_rgba(0,240,255,0.2)] backdrop-blur-2xl transition-all duration-300 ${
          isMaximized
            ? "h-[94vh] w-[96vw]"
            : "h-[540px] w-full max-w-2xl"
        }`}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-cyber-surface/60 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="ml-2 flex items-center gap-1.5 font-mono text-xs text-slate-300">
              <TerminalIcon className="h-3.5 w-3.5 text-cyan-400" />
              <span>vaibhav@synapse-os:~$</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-slate-400 hover:text-white"
              aria-label="Maximize terminal"
            >
              {isMaximized ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white"
              aria-label="Close terminal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Logs Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <span className="text-cyan-400 font-bold">&gt;</span>
                <span className="text-cyan-200">{log.command}</span>
                <span className="ml-auto text-[10px] text-slate-600">{log.time}</span>
              </div>
              <div className="pl-4 border-l border-cyan-500/20">{log.output}</div>
            </div>
          ))}
          <div ref={endOfLogsRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="border-t border-white/5 bg-cyber-surface/40 px-4 py-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono uppercase text-slate-500 mr-1 flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5 text-cyan-400" /> Run:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="rounded-md border border-cyan-500/20 bg-cyan-950/30 px-2 py-0.5 text-[11px] font-mono text-cyan-300 transition-colors hover:border-cyan-400/50 hover:bg-cyan-900/50"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center gap-2 border-t border-white/10 bg-cyber-surface/90 px-4 py-3 rounded-b-2xl"
        >
          <span className="font-mono text-sm font-bold text-cyan-400">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (try 'whoami' or 'sage')..."
            className="flex-1 bg-transparent font-mono text-xs text-slate-100 placeholder-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-cyan-500/20 px-2.5 py-1 text-xs font-mono font-medium text-cyan-300 hover:bg-cyan-500/30"
          >
            Exec
          </button>
        </form>
      </div>
    </div>
  );
}

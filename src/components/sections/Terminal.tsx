"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles } from "lucide-react";

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
      command: "welcome",
      time: "12:00",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-cyan-400 font-bold">
            Hi! Welcome to Shiva Vaibhav&apos;s personal terminal.
          </p>
          <p className="text-slate-400">
            Type <span className="text-cyan-300 font-mono">help</span> or click the buttons below to learn more about me.
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
            <p className="text-cyan-300 font-semibold">Try these commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] font-mono">
              <div><span className="text-cyan-400">about</span> — Who I am, college & CGPA</div>
              <div><span className="text-cyan-400">sage</span> — About our AI tutoring team project</div>
              <div><span className="text-cyan-400">posters</span> — College posters I designed (S.A.C.C)</div>
              <div><span className="text-cyan-400">skills</span> — Python, AI tools, and web stack</div>
              <div><span className="text-cyan-400">contact</span> — My email and phone number</div>
              <div><span className="text-cyan-400">clear</span> — Clear the screen</div>
            </div>
          </div>
        );
        break;

      case "about":
      case "whoami":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-cyan-400 font-semibold">Name:</span> A. Shiva Vaibhav</p>
            <p><span className="text-cyan-400 font-semibold">Status:</span> B.Tech CSE (AI & ML) Student (Expected 2028)</p>
            <p><span className="text-cyan-400 font-semibold">College:</span> Siddhartha Institute of Technology & Sciences (SITS), Hyderabad</p>
            <p><span className="text-cyan-400 font-semibold">CGPA:</span> <span className="text-emerald-400 font-bold">8.02</span> (Current)</p>
            <p><span className="text-cyan-400 font-semibold">Goal:</span> Looking for an internship to learn and grow in AI & software development</p>
          </div>
        );
        break;

      case "sage":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-300 font-bold">SAGE (Self-Adaptive Agentic Educational Engine):</p>
            <p className="text-slate-400">Role: Team Lead (Team of 4) | Stack: Python, Django, ChromaDB, Groq</p>
            <ul className="list-disc pl-4 space-y-0.5 text-slate-300 text-[11px]">
              <li>Built an AI tutor that knows 25+ B.Tech courses across CSE, AI, ECE, Mech, Civil.</li>
              <li>Uses RAG with ChromaDB so it fact-checks answers against real syllabus textbooks.</li>
              <li>Runs as a web app on campus Wi-Fi so students can use it for free on any phone or laptop.</li>
            </ul>
          </div>
        );
        break;

      case "posters":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-300 font-semibold">Chief Designer & Disciplinary Head — S.A.C.C:</p>
            <p className="text-slate-300">I design posters and event banners for technical workshops, college fests, and hackathons at SITS Hyderabad, while helping manage discipline at council events.</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-emerald-400 font-mono">[Programming]:</span> Python (learning & practicing), AI coding assistants</p>
            <p><span className="text-blue-400 font-mono">[AI & RAG]:</span> ChromaDB, Groq Llama 3 API, multi-agent concepts</p>
            <p><span className="text-pink-400 font-mono">[Web & Design]:</span> Django, HTML/CSS, Tailwind, Poster Design, Canva/Figma</p>
            <p><span className="text-amber-400 font-mono">[Leadership]:</span> Team Lead (Team of 4), Disciplinary Head at S.A.C.C</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>Email: <a href="mailto:vaibhava344@gmail.com" className="text-cyan-400 underline">vaibhava344@gmail.com</a></p>
            <p>Phone: <span className="text-slate-200">+91 9493721105</span> (Hyderabad, India)</p>
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
            Command not recognized. Type <span className="text-cyan-300 font-mono">help</span> for commands.
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

  const quickCommands = ["about", "sage", "posters", "skills", "contact", "clear"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div
        className={`flex flex-col rounded-2xl border border-cyan-500/40 bg-cyber-bg/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
          isMaximized ? "h-[94vh] w-[96vw]" : "h-[480px] w-full max-w-xl"
        }`}
      >
        {/* Titlebar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-cyber-surface/60 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="ml-2 flex items-center gap-1.5 font-mono text-xs text-slate-300">
              <TerminalIcon className="h-3.5 w-3.5 text-cyan-400" />
              <span>shiva@college-laptop:~$</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-slate-400 hover:text-white"
            >
              {isMaximized ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </button>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Logs */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <span className="text-cyan-400 font-bold">&gt;</span>
                <span className="text-cyan-200">{log.command}</span>
                <span className="ml-auto text-[10px] text-slate-600">{log.time}</span>
              </div>
              <div className="pl-3.5 border-l border-cyan-500/20">{log.output}</div>
            </div>
          ))}
          <div ref={endOfLogsRef} />
        </div>

        {/* Pills */}
        <div className="border-t border-white/5 bg-cyber-surface/40 px-3.5 py-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono text-slate-400 mr-1 flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5 text-cyan-400" /> Click to run:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="rounded-md border border-cyan-500/20 bg-cyan-950/30 px-2 py-0.5 text-[11px] font-mono text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-900/50"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center gap-2 border-t border-white/10 bg-cyber-surface/90 px-4 py-2.5 rounded-b-2xl"
        >
          <span className="font-mono text-sm font-bold text-cyan-400">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'about' or 'sage'..."
            className="flex-1 bg-transparent font-mono text-xs text-slate-100 placeholder-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-cyan-500/20 px-2.5 py-1 text-xs font-mono font-medium text-cyan-300 hover:bg-cyan-500/30"
          >
            Run
          </button>
        </form>
      </div>
    </div>
  );
}

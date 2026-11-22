"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, FolderOpen } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { CERTIFICATES } from "@/data/certificates";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark?: boolean;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export default function Terminal({ isOpen, onClose, isDark = true }: TerminalProps) {
  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init",
      command: "welcome",
      time: "12:00",
      output: (
        <div className="space-y-1 text-xs font-mono">
          <p className="font-bold text-sky-600 dark:text-[#FF3843]">
            Hi! Welcome to {PROFILE.name}&apos;s interactive developer shell.
          </p>
          <p className="text-slate-400">
            Type <span className="font-semibold text-sky-500 dark:text-[#FF1E27]">help</span> or tap the quick pills below to explore my projects, leadership, and drive posters.
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
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            <p className="font-semibold uppercase text-[10px] tracking-wider text-sky-400 dark:text-[#FF3843]">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px]">
              <div><span className="text-sky-400 dark:text-[#FF1E27]">about</span> — Bio, college & academic CGPA</div>
              <div><span className="text-sky-400 dark:text-[#FF1E27]">sage</span> — SAGE multi-agent tutor architecture</div>
              <div><span className="text-sky-400 dark:text-[#FF1E27]">certs</span> — ML certification & workshops</div>
              <div><span className="text-sky-400 dark:text-[#FF1E27]">posters</span> — S.A.C.C posters + Google Drive link</div>
              <div><span className="text-sky-400 dark:text-[#FF1E27]">skills</span> — Technical toolbox</div>
              <div><span className="text-sky-400 dark:text-[#FF1E27]">contact</span> — Direct email and links</div>
              <div><span className="text-sky-400 dark:text-[#FF1E27]">clear</span> — Clear console output</div>
            </div>
          </div>
        );
        break;

      case "about":
      case "whoami":
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p><span className="font-semibold text-sky-400 dark:text-[#FF3843]">Name:</span> {PROFILE.name}</p>
            <p><span className="font-semibold text-sky-400 dark:text-[#FF3843]">Degree:</span> {PROFILE.education.degree} ({PROFILE.education.year})</p>
            <p><span className="font-semibold text-sky-400 dark:text-[#FF3843]">Campus:</span> {PROFILE.education.institution}</p>
            <p><span className="font-semibold text-sky-400 dark:text-[#FF3843]">Academics:</span> <span className="text-white font-bold">{PROFILE.education.cgpa} CGPA</span> (B.Tech) • {PROFILE.education.intermediate.score} (Inter) • {PROFILE.education.secondary.score} (10th)</p>
            <p><span className="font-semibold text-sky-400 dark:text-[#FF3843]">Roles:</span> Team Lead (SAGE) • {PROFILE.council.roles.join(" & ")} ({PROFILE.council.body})</p>
          </div>
        );
        break;

      case "certs":
      case "certificates":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            <p className="font-semibold uppercase text-[10px] tracking-wider text-sky-400 dark:text-[#FF3843]">Certificates & Workshops:</p>
            <ul className="space-y-1 text-[11px]">
              {CERTIFICATES.map((c) => (
                <li key={c.id} className="text-slate-300">
                  <span className="text-white font-bold">&gt; {c.title}</span> — {c.issuer} ({c.date}, {c.duration})
                </li>
              ))}
            </ul>
          </div>
        );
        break;

      case "sage":
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="font-bold text-sky-400 dark:text-[#FF3843]">SAGE (Multi-Agent AI Tutor for B.Tech Courses):</p>
            <p className="text-slate-400">Team Lead (Team of 4) | Built with AI coding tools</p>
            <p className="text-slate-400">Agents: Supervisor, Diagnostic, Curriculum, Evaluator, Verifier, Research</p>
            <p className="text-slate-400">Technologies used: Python, Django, ChromaDB, Groq, DuckDuckGo search</p>
          </div>
        );
        break;

      case "posters":
      case "drive":
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="font-semibold text-sky-400 dark:text-[#FF3843]">{PROFILE.council.roles.join(" & ")} — {PROFILE.council.body}:</p>
            <p className="text-slate-300">Designed many promotional posters and graphics for college clubs and events.</p>
            <p className="pt-1">
              Google Drive Vault: <a href={PROFILE.contact.drivePostersFolder} target="_blank" rel="noopener noreferrer" className="underline font-bold text-sky-400 dark:text-[#FF3843]">{PROFILE.contact.drivePostersFolder}</a>
            </p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p><span className="text-sky-400 dark:text-[#FF3843]">[Skills]:</span> Python (learning), AI-assisted development, Poster and graphic design, Team leadership</p>
            <p><span className="text-slate-300">[Technologies used in SAGE (built with AI tools)]:</span> Python, Django, ChromaDB, Groq, DuckDuckGo search</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p>Email: <a href={`mailto:${PROFILE.contact.email}`} className="underline text-sky-400 dark:text-[#FF3843]">{PROFILE.contact.email}</a></p>
            <p>Location: <span className="text-white font-mono">{PROFILE.location}</span></p>
            <p>GitHub: <a href={PROFILE.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 underline">{PROFILE.contact.github}</a></p>
            <p>LinkedIn: <a href={PROFILE.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 underline">{PROFILE.contact.linkedin}</a></p>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-xs text-red-400 font-mono">
            Command not recognized. Type <span className="font-bold text-sky-400 dark:text-[#FF3843]">help</span> for available commands.
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

  const quickCommands = ["about", "sage", "certs", "posters", "skills", "contact", "clear"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className={`flex flex-col rounded-2xl border bg-black/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 border-sky-500/40 dark:border-[#FF1E27]/40 ${
          isMaximized ? "h-[94vh] w-[96vw]" : "h-[480px] w-full max-w-xl"
        }`}
      >
        {/* Titlebar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-white/[0.02] rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full cursor-pointer bg-sky-500 dark:bg-[#FF1E27]" onClick={onClose} />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
            </div>
            <span className="font-mono text-xs text-slate-300 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="h-3.5 w-3.5 text-sky-400 dark:text-[#FF1E27]" />
              shiva@sits-devbox: ~
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              {isMaximized ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </button>
            <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Click Badges */}
        <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 border-b border-white/5 bg-white/[0.01]">
          <span className="font-mono text-[10px] text-slate-500 mr-1">Quick:</span>
          {quickCommands.map((c) => (
            <button
              key={c}
              onClick={() => handleCommand(c)}
              className="rounded px-2 py-0.5 font-mono text-[10px] text-slate-300 bg-white/[0.04] border border-white/5 hover:border-sky-400 hover:text-sky-300 dark:hover:border-[#FF1E27]/40 dark:hover:text-[#FF3843] transition-colors"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Logs Output Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                <span className="text-sky-400 dark:text-[#FF1E27]">&gt;</span>
                <span className="text-white font-bold">{log.command}</span>
                <span className="text-slate-600 text-[10px] ml-auto">{log.time}</span>
              </div>
              <div className="pl-4 border-l border-white/10 text-slate-300">
                {log.output}
              </div>
            </div>
          ))}
          <div ref={endOfLogsRef} />
        </div>

        {/* CLI Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center gap-2 border-t border-white/10 px-4 py-3 bg-black rounded-b-2xl"
        >
          <span className="font-mono text-xs font-bold text-sky-400 dark:text-[#FF1E27]">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="font-mono text-[10px] uppercase tracking-wider text-slate-400 hover:text-sky-400 dark:hover:text-[#FF3843]"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
}

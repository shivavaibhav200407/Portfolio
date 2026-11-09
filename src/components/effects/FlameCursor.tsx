"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export default function FlameCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view">("default");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const embersRef = useRef<Ember[]>([]);
  const lastPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only disable if device strictly has no mouse capability at all
    const isTouchOnly = window.matchMedia("(pointer: coarse) and (hover: none)").matches;
    if (isTouchOnly) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Accent Colors: Quantum Cyan, Sukuna Flame Coral, and White Core
    const flameColors = [
      "#00F0FF", // Quantum Cyan
      "#38BDF8", // Sky Blue
      "#FF553E", // Sukuna Flame Coral
      "#FFAA00", // Fiery Amber
      "#FFFFFF", // Hot White Core
    ];

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePos({ x, y });

      if (!isVisible) setIsVisible(true);

      // Spawn embers when moving
      const dist = Math.hypot(x - lastPosRef.current.x, y - lastPosRef.current.y);
      if (dist > 3) {
        const count = Math.min(Math.floor(dist / 4), 3);
        for (let i = 0; i < count; i++) {
          if (embersRef.current.length < 40) {
            embersRef.current.push({
              x: x + (Math.random() - 0.5) * 6,
              y: y + 12 + Math.random() * 4,
              vx: (Math.random() - 0.5) * 1.6,
              vy: -(Math.random() * 2.2 + 0.8), // Float upward like real fire embers
              size: Math.random() * 3 + 1.5,
              alpha: 0.95,
              color: flameColors[Math.floor(Math.random() * flameColors.length)],
            });
          }
        }
        lastPosRef.current = { x, y };
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        const type = interactive.getAttribute("data-cursor");
        if (type === "view" || type === "explore") {
          setCursorState("view");
          return;
        }
      }

      if (target.closest("button, a, input, [role='button']")) {
        setCursorState("hover");
        return;
      }

      setCursorState("default");
    };

    const onMouseDown = () => {
      setIsClicking(true);
      // Burst of flame embers on click
      for (let i = 0; i < 14; i++) {
        embersRef.current.push({
          x: mousePos.x,
          y: mousePos.y,
          vx: (Math.random() - 0.5) * 4.5,
          vy: (Math.random() - 0.5) * 4.5,
          size: Math.random() * 3.5 + 2,
          alpha: 1,
          color: flameColors[Math.floor(Math.random() * flameColors.length)],
        });
      }
    };

    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Particle render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = embersRef.current.length - 1; i >= 0; i--) {
        const p = embersRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.024;
        p.size *= 0.96;

        if (p.alpha <= 0 || p.size <= 0.4) {
          embersRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible, mousePos.x, mousePos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Embers Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden hidden md:block"
      />

      {/* Stylized Sukuna Flame-Arrow Pointer */}
      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
        <motion.div
          className="fixed top-0 left-0"
          animate={{
            x: mousePos.x,
            y: mousePos.y,
            scale: isClicking ? 0.8 : cursorState === "hover" ? 1.3 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 950,
            damping: 36,
            mass: 0.2,
          }}
          style={{ originX: 0, originY: 0 }}
        >
          {/* Flame Arrowhead SVG */}
          <div className="relative -top-1 -left-1">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_12px_rgba(0,240,255,0.9)]"
            >
              {/* Outer Cursed Flame Aura */}
              <path
                d="M3 2L15 29L18 18L29 15L3 2Z"
                fill="url(#sukunaFlameGrad)"
                stroke="#00F0FF"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Core White Blade */}
              <path
                d="M5 5L14 24L16 16L24 14L5 5Z"
                fill="#FFFFFF"
                fillOpacity="0.95"
              />
              {/* Inner Flame Spark (Coral / Cyan) */}
              <circle cx="12" cy="12" r="2.5" fill="#FF553E" className="animate-pulse" />

              <defs>
                <linearGradient id="sukunaFlameGrad" x1="3" y1="2" x2="29" y2="29" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00F0FF" />
                  <stop offset="0.45" stopColor="#38BDF8" />
                  <stop offset="0.8" stopColor="#FF553E" />
                  <stop offset="1" stopColor="#FFAA00" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Context "VIEW" Halo */}
          {cursorState === "view" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute -top-7 -left-7 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400 bg-cyan-950/85 shadow-[0_0_25px_rgba(0,240,255,0.7)] backdrop-blur-md"
            >
              <span className="font-mono text-[9px] font-black tracking-widest text-cyan-300">
                VIEW
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}

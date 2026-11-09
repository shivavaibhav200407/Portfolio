"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    // Disable on mobile/touch screens
    if (window.matchMedia("(pointer: coarse)").matches) return;

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

    const flameColors = [
      "#00F0FF", // Cyan flame
      "#38BDF8", // Sky blue flame
      "#60A5FA", // Blue flame
      "#FFFFFF", // White hot core
      "#818CF8", // Sukuna cursed indigo/violet flame
    ];

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePos({ x, y });
      if (!isVisible) setIsVisible(true);

      // Spawn embers when moving
      const dist = Math.hypot(x - lastPosRef.current.x, y - lastPosRef.current.y);
      if (dist > 4) {
        const count = Math.min(Math.floor(dist / 5), 4);
        for (let i = 0; i < count; i++) {
          if (embersRef.current.length < 35) {
            embersRef.current.push({
              x: x + (Math.random() - 0.5) * 8,
              y: y + 10 + Math.random() * 6,
              vx: (Math.random() - 0.5) * 1.5,
              vy: -(Math.random() * 2 + 1), // Drift upwards like real fire
              size: Math.random() * 3 + 1.5,
              alpha: 0.9,
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
      for (let i = 0; i < 12; i++) {
        embersRef.current.push({
          x: mousePos.x,
          y: mousePos.y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
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
        p.alpha -= 0.025;
        p.size *= 0.96;

        if (p.alpha <= 0 || p.size <= 0.5) {
          embersRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
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
      {/* Embers Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block"
      />

      {/* Stylized Sukuna Flame-Arrow Pointer */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
        <motion.div
          className="fixed top-0 left-0"
          animate={{
            x: mousePos.x,
            y: mousePos.y,
            scale: isClicking ? 0.85 : cursorState === "hover" ? 1.25 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 900,
            damping: 38,
            mass: 0.25,
          }}
          style={{ originX: 0, originY: 0 }}
        >
          {/* Flame Arrow SVG (Inspired by Sukuna's Flame Arrow) */}
          <div className="relative -top-1 -left-1">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_10px_rgba(0,240,255,0.85)]"
            >
              {/* Outer Cursed Flame Aura */}
              <path
                d="M3 2L13 25L16 16L25 13L3 2Z"
                fill="url(#sukunaFlameGrad)"
                stroke="#00F0FF"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              {/* Core Flame Arrowhead Blade */}
              <path
                d="M5 5L12 21L14 14L21 12L5 5Z"
                fill="#FFFFFF"
                fillOpacity="0.9"
              />
              {/* Inner Flame Spark */}
              <circle cx="11" cy="11" r="2" fill="#00F0FF" />

              <defs>
                <linearGradient id="sukunaFlameGrad" x1="3" y1="2" x2="25" y2="25" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00F0FF" />
                  <stop offset="0.5" stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#818CF8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Context-aware "VIEW" Flaming Halo */}
          {cursorState === "view" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute -top-6 -left-6 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400 bg-cyan-950/70 shadow-[0_0_20px_rgba(0,240,255,0.6)] backdrop-blur-sm"
            >
              <span className="font-mono text-[9px] font-extrabold tracking-widest text-cyan-300">
                VIEW
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}

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

export default function NeonRedCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view">("default");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const embersRef = useRef<Ember[]>([]);
  const lastPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only disable if device strictly has no mouse capability
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

    // Neon Red & Crimson Ember Colors
    const emberColors = [
      "#FF1E27", // Pure Neon Red
      "#FF3843", // Bright Neon Red
      "#FF6B74", // Soft Red Glow
      "#FFA2A8", // Hot Core Pinkish White
      "#B91C1C", // Deep Crimson
    ];

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePos({ x, y });

      if (!isVisible) setIsVisible(true);

      // Spawn subtle red embers when moving
      const dist = Math.hypot(x - lastPosRef.current.x, y - lastPosRef.current.y);
      if (dist > 3) {
        const count = Math.min(Math.floor(dist / 4), 3);
        for (let i = 0; i < count; i++) {
          if (embersRef.current.length < 35) {
            embersRef.current.push({
              x: x + (Math.random() - 0.5) * 6,
              y: y + 10 + Math.random() * 4,
              vx: (Math.random() - 0.5) * 1.5,
              vy: -(Math.random() * 2 + 0.8), // Float upwards
              size: Math.random() * 2.8 + 1.2,
              alpha: 0.9,
              color: emberColors[Math.floor(Math.random() * emberColors.length)],
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
      // Spark burst on click
      for (let i = 0; i < 14; i++) {
        embersRef.current.push({
          x: mousePos.x,
          y: mousePos.y,
          vx: (Math.random() - 0.5) * 4.5,
          vy: (Math.random() - 0.5) * 4.5,
          size: Math.random() * 3 + 2,
          alpha: 1,
          color: emberColors[Math.floor(Math.random() * emberColors.length)],
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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = embersRef.current.length - 1; i >= 0; i--) {
        const p = embersRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.026;
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
      {/* Crimson Embers Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden hidden md:block"
      />

      {/* Red Neon Outline Arrow Cursor */}
      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
        <motion.div
          className="fixed top-0 left-0"
          animate={{
            x: mousePos.x,
            y: mousePos.y,
            scale: isClicking ? 0.8 : cursorState === "hover" ? 1.25 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 950,
            damping: 36,
            mass: 0.2,
          }}
          style={{ originX: 0, originY: 0 }}
        >
          {/* Red Neon Outline Arrow SVG */}
          <div className="relative -top-1 -left-1">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-200 ${
                cursorState === "hover"
                  ? "filter drop-shadow-[0_0_16px_rgba(255,30,39,1)]"
                  : "filter drop-shadow-[0_0_10px_rgba(255,30,39,0.85)]"
              }`}
            >
              {/* Outer Neon Glow Stroke Path */}
              <path
                d="M3 2L13 27L16 17L26 14L3 2Z"
                fill="rgba(10, 2, 4, 0.75)"
                stroke="#FF1E27"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              {/* Inner High-Intensity Neon Core */}
              <path
                d="M6 6L13 22L15 15L22 13L6 6Z"
                fill="none"
                stroke="#FFA2A8"
                strokeWidth="0.8"
                strokeOpacity="0.85"
              />
              {/* Center Accent Point */}
              <circle cx="11" cy="11" r="2" fill="#FF1E27" />
            </svg>
          </div>

          {/* Context "VIEW" Halo */}
          {cursorState === "view" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute -top-7 -left-7 flex h-16 w-16 items-center justify-center rounded-full border border-[#FF1E27] bg-black/85 shadow-[0_0_25px_rgba(255,30,39,0.7)] backdrop-blur-md"
            >
              <span className="font-mono text-[9px] font-black tracking-widest text-[#FF3843]">
                VIEW
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}

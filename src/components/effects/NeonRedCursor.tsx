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
    const flameColors = ["#FF1E27", "#FF3843", "#FF6B74", "#FFFFFF", "#FFA2A8"];

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePos({ x, y });
      setIsVisible(true);

      // Spawn embers when moving
      const dist = Math.hypot(x - lastPosRef.current.x, y - lastPosRef.current.y);
      if (dist > 3 && embersRef.current.length < 35) {
        embersRef.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + 10 + Math.random() * 4,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -(Math.random() * 2 + 0.8),
          size: Math.random() * 3 + 1.5,
          alpha: 0.95,
          color: flameColors[Math.floor(Math.random() * flameColors.length)],
        });
        lastPosRef.current = { x, y };
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        setCursorState("view");
        return;
      }

      if (target.closest("button, a, input, [role='button']")) {
        setCursorState("hover");
        return;
      }

      setCursorState("default");
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Canvas particle render loop
    let animId: number;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);

      const render = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = embersRef.current.length - 1; i >= 0; i--) {
          const p = embersRef.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.025;
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
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Floating Embers Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[99998] overflow-hidden"
      />

      {/* Red Neon Outline Arrow Cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s" }}
      >
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
            mass: 0.18,
          }}
          style={{ originX: 0, originY: 0 }}
        >
          {/* Bold Red Neon Outline Arrow SVG */}
          <div className="relative -top-1 -left-1">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-200 ${
                cursorState === "hover"
                  ? "filter drop-shadow-[0_0_18px_rgba(255,30,39,1)]"
                  : "filter drop-shadow-[0_0_12px_rgba(255,30,39,0.9)]"
              }`}
            >
              {/* Outer Glow Stroke Arrow */}
              <path
                d="M4 3L14 30L18 19L29 15L4 3Z"
                fill="rgba(15, 0, 3, 0.85)"
                stroke="#FF1E27"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Inner High-Intensity Neon Core */}
              <path
                d="M7 7L14 24L17 17L24 14L7 7Z"
                fill="#FF1E27"
                fillOpacity="0.3"
                stroke="#FFA2A8"
                strokeWidth="1"
              />
              {/* Center Core Spark */}
              <circle cx="13" cy="13" r="2.5" fill="#FFFFFF" />
            </svg>
          </div>

          {/* Context "VIEW" Halo on Projects */}
          {cursorState === "view" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute -top-7 -left-7 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#FF1E27] bg-black/90 shadow-[0_0_30px_rgba(255,30,39,0.8)] backdrop-blur-md"
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

"use client";

import React, { useEffect, useRef, useState } from "react";

interface DualModeCursorProps {
  isDark?: boolean;
}

interface TrailPoint {
  x: number;
  y: number;
  age: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function DualModeCursor({ isDark = true }: DualModeCursorProps) {
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  // Theme colors ref for animation loop access
  const themeRef = useRef({
    isDark: true,
    primaryColor: "#FF1E27",
    glowColor: "rgba(255, 30, 39, 0.8)",
    sparkColor: "rgba(255, 80, 80, 0.85)",
  });

  useEffect(() => {
    themeRef.current = {
      isDark,
      primaryColor: isDark ? "#FF1E27" : "#0284C7",
      glowColor: isDark ? "rgba(255, 30, 39, 0.85)" : "rgba(2, 132, 199, 0.85)",
      sparkColor: isDark ? "rgba(255, 80, 80, 0.9)" : "rgba(56, 189, 248, 0.9)",
    };
  }, [isDark]);

  useEffect(() => {
    // Only run on devices with fine pointer and hover capability
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasHover) return;

    const canvas = canvasRef.current;
    const arrow = arrowRef.current;
    const label = labelRef.current;

    if (!canvas || !arrow) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Track canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse coordinates
    let mx = -100;
    let my = -100;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let activeLabel: string | null = null;

    // Trail and particle pools for tail lights
    const trailPoints: TrailPoint[] = [];
    const particles: Particle[] = [];
    const MAX_TRAIL_LENGTH = 16;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (!isVisible) {
        isVisible = true;
        document.body.classList.add("cursor-active");
        arrow.style.opacity = "1";
        canvas.style.opacity = "1";
      }

      // Add to tail lights ribbon trail
      trailPoints.push({ x: mx, y: my, age: 0 });
      if (trailPoints.length > MAX_TRAIL_LENGTH) {
        trailPoints.shift();
      }

      // Spawn luminous trailing spark particles (tail lights)
      if (Math.random() < 0.75) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 1.6;
        particles.push({
          x: mx,
          y: my,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 22 + Math.random() * 16,
          size: 1.6 + Math.random() * 2.2,
        });
      }

      // Check target element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorAttr) {
        const type = cursorAttr.getAttribute("data-cursor");
        if (type === "view" || type === "explore") {
          isHovering = true;
          if (activeLabel !== "VIEW") {
            activeLabel = "VIEW";
            setCursorLabel("VIEW");
          }
          return;
        }
        if (type === "copy") {
          isHovering = true;
          if (activeLabel !== "COPY") {
            activeLabel = "COPY";
            setCursorLabel("COPY");
          }
          return;
        }
      }

      if (target.closest("button, a, input, textarea, [role='button'], .clickable, .theme-toggle, .swatch, .o-toggle")) {
        isHovering = true;
        if (activeLabel !== null) {
          activeLabel = null;
          setCursorLabel(null);
        }
        return;
      }

      isHovering = false;
      if (activeLabel !== null) {
        activeLabel = null;
        setCursorLabel(null);
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      document.body.classList.remove("cursor-active");
      arrow.style.opacity = "0";
      canvas.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      document.body.classList.add("cursor-active");
      arrow.style.opacity = "1";
      canvas.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let animId: number;

    const render = () => {
      // 1. Direct hardware tracking for the Sleek Arrow Cursor
      const scale = isClicking ? 0.9 : isHovering ? 1.15 : 1.0;
      arrow.style.transform = `translate3d(${mx}px, ${my}px, 0) scale(${scale})`;

      // 2. Position label badge adjacent to arrow
      if (label) {
        label.style.transform = `translate3d(${mx + 20}px, ${my + 16}px, 0)`;
      }

      // 3. Render Tail Lights (Kinetic Ribbon & Spark Particles on Canvas)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { primaryColor, sparkColor } = themeRef.current;

      // Draw Smooth Kinetic Tail Lights Ribbon
      if (trailPoints.length > 2) {
        ctx.beginPath();
        ctx.moveTo(trailPoints[0].x, trailPoints[0].y);

        for (let i = 1; i < trailPoints.length - 1; i++) {
          const xc = (trailPoints[i].x + trailPoints[i + 1].x) / 2;
          const yc = (trailPoints[i].y + trailPoints[i + 1].y) / 2;
          ctx.quadraticCurveTo(trailPoints[i].x, trailPoints[i].y, xc, yc);
        }

        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = primaryColor;
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0; // Reset
      }

      // Age trail points
      for (let i = trailPoints.length - 1; i >= 0; i--) {
        trailPoints[i].age++;
        if (trailPoints[i].age > 16) {
          trailPoints.splice(i, 1);
        }
      }

      // Draw and update trailing tail light spark particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - progress);
        const radius = p.size * (1 - progress * 0.45);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = sparkColor.replace("0.9", `${alpha * 0.8}`);
        ctx.fill();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.body.classList.remove("cursor-active");
    };
  }, []);

  const primaryColor = isDark ? "#FF1E27" : "#0284C7";
  const arrowFill = isDark ? "#050505" : "#FFFFFF";
  const glowDropShadow = isDark
    ? "drop-shadow(0 0 7px rgba(255,30,39,0.85))"
    : "drop-shadow(0 0 7px rgba(2,132,199,0.85))";

  return (
    <>
      {/* 1. Kinetic Tail Lights Ribbon & Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[999997] transition-opacity duration-300"
        style={{ opacity: 0 }}
      />

      {/* 2. Sleek Studio Outline Arrow Cursor (from previous loved design) */}
      <div
        ref={arrowRef}
        className="pointer-events-none fixed top-0 left-0 z-[999999] transition-opacity duration-200"
        style={{
          opacity: 0,
          willChange: "transform",
          transformOrigin: "0 0",
        }}
      >
        <div className="relative -top-[2px] -left-[3px]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: glowDropShadow,
              transition: "filter 0.25s ease",
            }}
          >
            {/* Sleek Outline Arrow Path */}
            <path
              d="M3 2L11 23L14 15L22 12L3 2Z"
              fill={arrowFill}
              stroke={primaryColor}
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            {/* Center Precision Target Dot */}
            <circle cx="9.5" cy="9.5" r="1.3" fill={primaryColor} />
          </svg>
        </div>
      </div>

      {/* 3. Floating Contextual Badge (VIEW / COPY) */}
      <div
        ref={labelRef}
        className="pointer-events-none fixed top-0 left-0 z-[999999] flex items-center transition-opacity duration-200"
        style={{
          opacity: cursorLabel ? 1 : 0,
        }}
      >
        {cursorLabel && (
          <div
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 backdrop-blur-md shadow-lg ${
              isDark
                ? "border border-[#FF1E27]/80 bg-black/90 shadow-[0_0_15px_rgba(255,30,39,0.4)]"
                : "border border-sky-600/80 bg-white/95 shadow-[0_0_15px_rgba(2,132,199,0.3)]"
            }`}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: primaryColor }}
            />
            <span
              className="font-mono text-[9px] font-black tracking-widest uppercase select-none"
              style={{ color: isDark ? "#FFFFFF" : "#0F172A" }}
            >
              {cursorLabel}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
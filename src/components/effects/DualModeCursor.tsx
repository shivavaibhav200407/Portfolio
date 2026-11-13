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
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  // Theme colors ref for animation loop access
  const themeRef = useRef({
    isDark: true,
    primaryColor: "#FF1E27",
    glowColor: "rgba(255, 30, 39, 0.5)",
    sparkColor: "rgba(255, 80, 80, 0.8)",
  });

  useEffect(() => {
    themeRef.current = {
      isDark,
      primaryColor: isDark ? "#FF1E27" : "#0284C7",
      glowColor: isDark ? "rgba(255, 30, 39, 0.45)" : "rgba(2, 132, 199, 0.35)",
      sparkColor: isDark ? "rgba(255, 80, 80, 0.85)" : "rgba(56, 189, 248, 0.85)",
    };
  }, [isDark]);

  useEffect(() => {
    // Only run on devices with fine pointer and hover capability
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasHover) return;

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    if (!canvas || !dot || !ring) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Track canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse positions
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let targetSize = 28;
    let currentSize = 28;
    let isClicking = false;
    let isVisible = false;
    let activeLabel: string | null = null;

    // Trail and particle pools
    const trailPoints: TrailPoint[] = [];
    const particles: Particle[] = [];
    const MAX_TRAIL_LENGTH = 14;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (!isVisible) {
        isVisible = true;
        document.body.classList.add("cursor-active");
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        canvas.style.opacity = "1";
      }

      // Add to trail
      trailPoints.push({ x: mx, y: my, age: 0 });
      if (trailPoints.length > MAX_TRAIL_LENGTH) {
        trailPoints.shift();
      }

      // Spawn 1-2 luminous trailing spark particles when moving
      if (Math.random() < 0.65) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1.5;
        particles.push({
          x: mx,
          y: my,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 20 + Math.random() * 15,
          size: 1.5 + Math.random() * 2,
        });
      }

      // Inspect target element for interaction states
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorAttr) {
        const type = cursorAttr.getAttribute("data-cursor");
        if (type === "view" || type === "explore") {
          targetSize = 56;
          if (activeLabel !== "VIEW") {
            activeLabel = "VIEW";
            setCursorLabel("VIEW");
          }
          return;
        }
        if (type === "copy") {
          targetSize = 52;
          if (activeLabel !== "COPY") {
            activeLabel = "COPY";
            setCursorLabel("COPY");
          }
          return;
        }
      }

      if (target.closest("button, a, input, textarea, [role='button'], .clickable, .theme-toggle, .swatch")) {
        targetSize = 46;
        if (activeLabel !== null) {
          activeLabel = null;
          setCursorLabel(null);
        }
        return;
      }

      // Default state
      targetSize = 28;
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
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      canvas.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      document.body.classList.add("cursor-active");
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      canvas.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Initial position center offscreen until first move
    rx = window.innerWidth / 2;
    ry = window.innerHeight / 2;

    let animId: number;

    const render = () => {
      // 1. Direct hardware tracking for Center Dot (Zero Latency)
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%) scale(${
        isClicking ? 0.7 : 1
      })`;

      // 2. Trailing physics elastic lerp for Outer Ring (0.18 ease factor, matching reference site)
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      currentSize += (targetSize - currentSize) * 0.2;

      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${
        isClicking ? 0.88 : 1
      })`;
      ring.style.width = `${currentSize}px`;
      ring.style.height = `${currentSize}px`;

      // 3. Label position tracking
      if (label) {
        label.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }

      // 4. Kinetic Ribbon & Spark Particles Canvas Rendering
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { primaryColor, sparkColor } = themeRef.current;

      // Draw Smooth Kinetic Trail Ribbon
      if (trailPoints.length > 2) {
        ctx.beginPath();
        ctx.moveTo(trailPoints[0].x, trailPoints[0].y);

        for (let i = 1; i < trailPoints.length - 1; i++) {
          const xc = (trailPoints[i].x + trailPoints[i + 1].x) / 2;
          const yc = (trailPoints[i].y + trailPoints[i + 1].y) / 2;
          ctx.quadraticCurveTo(trailPoints[i].x, trailPoints[i].y, xc, yc);
        }

        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = primaryColor;
        ctx.shadowBlur = 8;
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

      // Draw and update trailing spark particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - progress);
        const radius = p.size * (1 - progress * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = sparkColor.replace("0.85", `${alpha * 0.75}`);
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
  const glowColor = isDark ? "rgba(255, 30, 39, 0.45)" : "rgba(2, 132, 199, 0.35)";

  return (
    <>
      {/* 1. Kinetic Particle & Ribbon Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[999997] transition-opacity duration-300"
        style={{ opacity: 0 }}
      />

      {/* 2. Pinpoint Center Target Dot (Instant Zero-Latency Tracking) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[999999] rounded-full transition-opacity duration-200"
        style={{
          width: 8,
          height: 8,
          backgroundColor: primaryColor,
          boxShadow: `0 0 10px ${primaryColor}, 0 0 20px ${glowColor}`,
          opacity: 0,
          willChange: "transform",
        }}
      />

      {/* 3. Trailing Physics Lerp Ring (Decoupled Follower) */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[999998] rounded-full transition-opacity duration-300 flex items-center justify-center"
        style={{
          border: `1.5px solid ${primaryColor}`,
          backgroundColor: cursorLabel ? glowColor : "transparent",
          boxShadow: cursorLabel
            ? `0 0 24px ${glowColor}`
            : `0 0 12px ${glowColor}`,
          opacity: 0,
          willChange: "transform, width, height",
          transitionProperty: "border-color, background-color, box-shadow, opacity",
          transitionDuration: "250ms",
        }}
      />

      {/* 4. Contextual Floating Label (VIEW / COPY) */}
      <div
        ref={labelRef}
        className="pointer-events-none fixed top-0 left-0 z-[999999] flex items-center justify-center transition-all duration-200"
        style={{
          opacity: cursorLabel ? 1 : 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        {cursorLabel && (
          <span
            className="font-mono text-[9px] font-black tracking-widest uppercase select-none drop-shadow"
            style={{ color: isDark ? "#FFFFFF" : "#0F172A" }}
          >
            {cursorLabel}
          </span>
        )}
      </div>
    </>
  );
}
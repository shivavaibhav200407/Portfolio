"use client";

import React, { useEffect, useRef, useState } from "react";

interface DualModeCursorProps {
  isDark?: boolean;
}

export default function DualModeCursor({ isDark = true }: DualModeCursorProps) {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // Store theme state for requestAnimationFrame
  const themeRef = useRef({ isDark });
  useEffect(() => {
    themeRef.current = { isDark };
  }, [isDark]);

  useEffect(() => {
    // Only initialize on desktop devices with mouse pointer & hover capability
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasHover) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    let isVisible = false;
    let isHovering = false;
    let isClicking = false;
    let isTextInput = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        document.body.classList.add("cursor-active");
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Detect text inputs
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        target.closest("input, textarea, [contenteditable='true']")
      ) {
        isTextInput = true;
        isHovering = false;
        return;
      }
      isTextInput = false;

      // Detect interactive click targets
      const interactive = target.closest(
        "a, button, [role='button'], input[type='submit'], input[type='button'], .clickable, [data-cursor], summary"
      );
      isHovering = Boolean(interactive);
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
    };

    const onMouseEnter = () => {
      isVisible = true;
      document.body.classList.add("cursor-active");
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let animId: number;

    const render = () => {
      // Direct hardware coordinate for inner precision dot (zero lag)
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      // Smooth buttery interpolation (damping lerp) for outer follower ring
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      // Scale calculations
      let ringScale = 1.0;
      let ringOpacity = 1.0;

      if (isTextInput) {
        ringOpacity = 0; // Seamlessly disappear over text boxes so cursor doesn't obstruct typing
      } else if (isClicking) {
        ringScale = isHovering ? 1.3 : 0.85;
      } else if (isHovering) {
        ringScale = 1.55;
      }

      ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0) scale(${ringScale})`;
      ring.style.opacity = isVisible ? `${ringOpacity}` : "0";

      // Dynamically toggle interactive styling class on the ring
      if (isHovering) {
        ring.classList.add("cursor-hovered");
      } else {
        ring.classList.remove("cursor-hovered");
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.body.classList.remove("cursor-active");
    };
  }, []);

  return (
    <>
      {/* 1. Precision Center Dot (Instant Hardware Tracking) */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[999999] h-1.5 w-1.5 rounded-full transition-opacity duration-150"
        style={{
          opacity: 0,
          backgroundColor: isDark ? "#FF1E27" : "#2563EB",
          boxShadow: isDark
            ? "0 0 8px rgba(255, 30, 39, 0.7)"
            : "0 0 6px rgba(37, 99, 235, 0.5)",
          willChange: "transform",
        }}
      />

      {/* 2. Fluid Follower Ring (Smooth Spring Interpolation & Magnetic Hover Expansion) */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[999998] h-8 w-8 rounded-full border transition-[border-color,background-color] duration-200 ${
          isDark
            ? "border-white/30 bg-white/[0.02] [&.cursor-hovered]:border-[#FF1E27] [&.cursor-hovered]:bg-[#FF1E27]/10 [&.cursor-hovered]:shadow-[0_0_16px_rgba(255,30,39,0.3)]"
            : "border-[#0B1B3A]/25 bg-[#2563EB]/[0.02] [&.cursor-hovered]:border-[#2563EB] [&.cursor-hovered]:bg-[#2563EB]/10 [&.cursor-hovered]:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
        }`}
        style={{
          opacity: 0,
          willChange: "transform, opacity",
        }}
      />
    </>
  );
}

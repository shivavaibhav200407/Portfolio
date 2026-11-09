"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<
    "default" | "hover" | "action" | "text" | "drag"
  >("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Sliders -> Drag State
      if (target.tagName === "INPUT" && target.getAttribute("type") === "range") {
        setCursorText("DRAG ↔");
        setCursorVariant("drag");
        return;
      }

      // 2. Custom data-cursor attributes
      const interactive = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        const type = interactive.getAttribute("data-cursor");
        if (type === "view") {
          setCursorText("VIEW");
          setCursorVariant("action");
        } else if (type === "explore") {
          setCursorText("EXPLORE");
          setCursorVariant("action");
        } else if (type === "copy") {
          setCursorText("COPY");
          setCursorVariant("action");
        } else if (type === "drag") {
          setCursorText("DRAG ↔");
          setCursorVariant("drag");
        } else {
          setCursorText("");
          setCursorVariant("hover");
        }
        return;
      }

      // 3. Clickable elements -> Grow Hover State
      if (target.closest("button, a, [role='button']")) {
        setCursorText("");
        setCursorVariant("hover");
        return;
      }

      // 4. Reading text -> Shrink State
      if (target.closest("p, li, blockquote")) {
        setCursorText("");
        setCursorVariant("text");
        return;
      }

      // Default State
      setCursorText("");
      setCursorVariant("default");
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Sizing by variant
  let width = 32;
  let height = 32;
  let borderColor = "rgba(0, 240, 255, 0.4)";
  let bgColor = "rgba(0, 240, 255, 0.08)";

  if (cursorVariant === "action") {
    width = 68;
    height = 68;
    borderColor = "rgba(0, 240, 255, 0.85)";
    bgColor = "rgba(0, 240, 255, 0.15)";
  } else if (cursorVariant === "drag") {
    width = 78;
    height = 36;
    borderColor = "rgba(59, 130, 246, 0.9)";
    bgColor = "rgba(59, 130, 246, 0.25)";
  } else if (cursorVariant === "hover") {
    width = 46;
    height = 46;
    borderColor = "rgba(0, 240, 255, 0.6)";
    bgColor = "rgba(0, 240, 255, 0.12)";
  } else if (cursorVariant === "text") {
    width = 16;
    height = 16;
    borderColor = "rgba(148, 163, 184, 0.5)";
    bgColor = "transparent";
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - width / 2,
          y: mousePosition.y - height / 2,
          width,
          height,
          borderColor,
          backgroundColor: bgColor,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.45 }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-300 select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Core Dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#00f0ff]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: cursorVariant === "text" ? 0.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40 }}
      />
    </div>
  );
}

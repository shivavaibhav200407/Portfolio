"use client";

import React, { useRef, useState, useEffect } from "react";
import { Trash2, Edit3 } from "lucide-react";

interface DoodlePlaygroundProps {
  isDark?: boolean;
}

export default function DoodlePlayground({ isDark = true }: DoodlePlaygroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentColor, setCurrentColor] = useState<string>("#FF1E27");
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(3);

  const colors = isDark
    ? ["#FF1E27", "#38BDF8", "#FBBF24", "#FFFFFF", "#4ADE80"]
    : ["#0284C7", "#DC2626", "#F59E0B", "#0F172A", "#10B981"];

  useEffect(() => {
    setCurrentColor(isDark ? "#FF1E27" : "#0284C7");
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = strokeWidth;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
  };

  return (
    <section id="playground" className="py-20 px-4 sm:px-8 border-t border-slate-200/60 dark:border-white/5">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-8">
          <span className="font-mono text-[11px] tracking-widest uppercase text-slate-500 dark:text-slate-400">
            06 / PLAYGROUND
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Leave a sketch or sign the board
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-sans max-w-xl">
            Draw something or drop a greeting on the canvas. Interactive creative space inspired by Haute Dev aesthetics.
          </p>
        </div>

        {/* Doodle Board Wrapper */}
        <div className="rounded-2xl border p-4 sm:p-6 backdrop-blur-md transition-all border-slate-200 bg-white/70 shadow-sm dark:border-white/10 dark:bg-black/60">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/60 dark:border-white/5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Edit3 className="h-3.5 w-3.5" />
                <span>Ink:</span>
              </span>
              <div className="flex items-center gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCurrentColor(c)}
                    aria-label={`Select color ${c}`}
                    className={`h-6 w-6 rounded-full border-2 transition-transform ${
                      currentColor === c ? "scale-125 border-slate-900 dark:border-white" : "border-transparent hover:scale-110"
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Stroke Width Selector */}
              <div className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                <button
                  type="button"
                  onClick={() => setStrokeWidth(2)}
                  className={`px-2 py-0.5 rounded border ${
                    strokeWidth === 2 ? "border-sky-500 bg-sky-50 text-sky-600 dark:border-[#FF1E27] dark:bg-[#FF1E27]/20 dark:text-[#FF4D55]" : "border-transparent"
                  }`}
                >
                  Thin
                </button>
                <button
                  type="button"
                  onClick={() => setStrokeWidth(4)}
                  className={`px-2 py-0.5 rounded border ${
                    strokeWidth === 4 ? "border-sky-500 bg-sky-50 text-sky-600 dark:border-[#FF1E27] dark:bg-[#FF1E27]/20 dark:text-[#FF4D55]" : "border-transparent"
                  }`}
                >
                  Medium
                </button>
                <button
                  type="button"
                  onClick={() => setStrokeWidth(7)}
                  className={`px-2 py-0.5 rounded border ${
                    strokeWidth === 7 ? "border-sky-500 bg-sky-50 text-sky-600 dark:border-[#FF1E27] dark:bg-[#FF1E27]/20 dark:text-[#FF4D55]" : "border-transparent"
                  }`}
                >
                  Bold
                </button>
              </div>

              {/* Clear Canvas */}
              <button
                type="button"
                onClick={clearCanvas}
                className="flex items-center gap-1.5 rounded-full border px-3.5 py-1 font-mono text-xs transition-colors border-slate-200 text-slate-600 hover:border-red-500 hover:text-red-500 dark:border-white/10 dark:text-slate-400 dark:hover:border-red-500 dark:hover:text-red-400"
              >
                <Trash2 className="h-3 w-3" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Interactive Drawing Canvas */}
          <div className="mt-4 relative w-full h-[280px] sm:h-[360px] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-50/50 dark:border-white/5 dark:bg-[#070709] cursor-crosshair">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-full touch-none"
            />
            {!isDrawing && (
              <div className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-slate-400 dark:text-slate-600 tracking-wider">
                TOUCH OR DRAG TO DOODLE
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
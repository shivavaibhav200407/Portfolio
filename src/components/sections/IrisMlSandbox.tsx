"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Sliders, BarChart3, Info } from "lucide-react";

export default function IrisMlSandbox() {
  const [sepalLength, setSepalLength] = useState(5.8);
  const [sepalWidth, setSepalWidth] = useState(3.0);
  const [petalLength, setPetalLength] = useState(4.2);
  const [petalWidth, setPetalWidth] = useState(1.3);

  const calculatePredictions = () => {
    if (petalLength < 2.5) {
      return { setosa: 98, versicolor: 2, virginica: 0, predicted: "Iris Setosa" };
    }
    if (petalLength > 4.8 && petalWidth > 1.6) {
      return { setosa: 0, versicolor: 7, virginica: 93, predicted: "Iris Virginica" };
    }
    if (petalLength > 5.0) {
      return { setosa: 0, versicolor: 15, virginica: 85, predicted: "Iris Virginica" };
    }
    return { setosa: 1, versicolor: 89, virginica: 10, predicted: "Iris Versicolor" };
  };

  const { setosa, versicolor, virginica, predicted } = calculatePredictions();

  return (
    <section id="ml-sandbox" className="relative py-20 px-4 sm:px-8 border-t transition-colors duration-500 border-[#DCE6F7] bg-[#F7FAFF] text-[#0B1B3A] dark:border-white/5 dark:bg-[#040404] dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-semibold border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] dark:border-[#FF1E27]/30 dark:bg-[#FF1E27]/10 dark:text-[#FF3843]">
              <Award className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#FF1E27]" />
              <span>03.1 // MACHINE LEARNING</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
              <Info className="h-3 w-3" />
              Illustrative demo
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#0B1B3A] dark:text-white mt-1">
            Iris Species Classification
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#5B6B8C] dark:text-slate-300 mt-1 font-sans">
            A machine learning project that classifies iris flowers into species. Completed with a certificate from Smartuter Research Center (Jan 2026).
          </p>
        </div>

        {/* Sandbox Console */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-2xl border p-5 sm:p-7 shadow-[0_4px_20px_-2px_rgba(37,99,235,0.06)] border-[#DCE6F7] bg-white dark:border-white/10 dark:bg-[#070707] dark:shadow-none">
          {/* Sliders */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-[#DCE6F7] dark:border-white/10">
              <span className="font-mono text-xs font-semibold flex items-center gap-2 text-[#0B1B3A] dark:text-white">
                <Sliders className="h-4 w-4 text-[#2563EB] dark:text-[#FF1E27]" />
                Feature Inputs (in centimeters)
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[#2563EB] dark:text-[#FF3843]">
                Illustrative demo
              </span>
            </div>

            {/* Slider: Sepal Length */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#5B6B8C] dark:text-slate-300">Sepal Length</span>
                <span className="font-bold text-[#2563EB] dark:text-[#FF3843]">{sepalLength.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="4.0"
                max="8.0"
                step="0.1"
                value={sepalLength}
                onChange={(e) => setSepalLength(parseFloat(e.target.value))}
                className="w-full accent-[#2563EB] dark:accent-[#FF1E27] h-1.5 rounded-lg bg-[#EAF2FF] dark:bg-white/10 cursor-pointer"
              />
            </div>

            {/* Slider: Sepal Width */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#5B6B8C] dark:text-slate-300">Sepal Width</span>
                <span className="font-bold text-[#2563EB] dark:text-[#FF3843]">{sepalWidth.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="4.5"
                step="0.1"
                value={sepalWidth}
                onChange={(e) => setSepalWidth(parseFloat(e.target.value))}
                className="w-full accent-[#2563EB] dark:accent-[#FF1E27] h-1.5 rounded-lg bg-[#EAF2FF] dark:bg-white/10 cursor-pointer"
              />
            </div>

            {/* Slider: Petal Length */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#5B6B8C] dark:text-slate-300">Petal Length</span>
                <span className="font-bold text-[#2563EB] dark:text-[#FF1E27]">{petalLength.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="7.0"
                step="0.1"
                value={petalLength}
                onChange={(e) => setPetalLength(parseFloat(e.target.value))}
                className="w-full accent-[#2563EB] dark:accent-[#FF1E27] h-1.5 rounded-lg bg-[#EAF2FF] dark:bg-white/10 cursor-pointer"
              />
            </div>

            {/* Slider: Petal Width */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#5B6B8C] dark:text-slate-300">Petal Width</span>
                <span className="font-bold text-[#2563EB] dark:text-[#FF1E27]">{petalWidth.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.5"
                step="0.1"
                value={petalWidth}
                onChange={(e) => setPetalWidth(parseFloat(e.target.value))}
                className="w-full accent-[#2563EB] dark:accent-[#FF1E27] h-1.5 rounded-lg bg-[#EAF2FF] dark:bg-white/10 cursor-pointer"
              />
            </div>

            {/* Presets */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="text-[11px] self-center text-[#5B6B8C] dark:text-slate-400">Presets:</span>
              <button
                onClick={() => {
                  setSepalLength(5.0);
                  setSepalWidth(3.5);
                  setPetalLength(1.4);
                  setPetalWidth(0.2);
                }}
                className="px-2.5 py-1 rounded border transition-colors border-[#DCE6F7] bg-[#EAF2FF] hover:border-[#2563EB] hover:text-[#2563EB] text-[#0B1B3A] dark:border-white/10 dark:bg-[#0C0C0C] dark:text-slate-300 dark:hover:border-[#FF1E27]/50 dark:hover:text-white"
              >
                Setosa
              </button>
              <button
                onClick={() => {
                  setSepalLength(5.9);
                  setSepalWidth(2.8);
                  setPetalLength(4.2);
                  setPetalWidth(1.3);
                }}
                className="px-2.5 py-1 rounded border transition-colors border-[#DCE6F7] bg-[#EAF2FF] hover:border-[#2563EB] hover:text-[#2563EB] text-[#0B1B3A] dark:border-white/10 dark:bg-[#0C0C0C] dark:text-slate-300 dark:hover:border-[#FF1E27]/50 dark:hover:text-white"
              >
                Versicolor
              </button>
              <button
                onClick={() => {
                  setSepalLength(6.5);
                  setSepalWidth(3.0);
                  setPetalLength(5.5);
                  setPetalWidth(2.0);
                }}
                className="px-2.5 py-1 rounded border transition-colors border-[#DCE6F7] bg-[#EAF2FF] hover:border-[#2563EB] hover:text-[#2563EB] text-[#0B1B3A] dark:border-white/10 dark:bg-[#0C0C0C] dark:text-slate-300 dark:hover:border-[#FF1E27]/50 dark:hover:text-white"
              >
                Virginica
              </button>
            </div>
          </div>

          {/* Model Output Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border p-5 font-mono border-[#DCE6F7] bg-[#F7FAFF] dark:border-white/10 dark:bg-[#0C0C0C]">
            <div>
              <div className="flex items-center justify-between border-b pb-3 border-[#DCE6F7] dark:border-white/10">
                <span className="text-xs flex items-center gap-1.5 text-[#0B1B3A] dark:text-slate-300">
                  <BarChart3 className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#FF1E27]" />
                  Inference Output
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono border border-[#DBEAFE] bg-[#EAF2FF] text-[#2563EB] font-bold dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                  Illustrative demo
                </span>
              </div>

              {/* Result Pill */}
              <div className="mt-4 p-4 rounded-xl border-l-4 border-y border-r border-[#2563EB] bg-white shadow-sm dark:border-l-4 dark:border-[#FF1E27] dark:border-y dark:border-r dark:border-white/10 dark:bg-black/60">
                <span className="text-[10px] uppercase tracking-widest block font-bold text-[#2563EB] dark:text-[#FF3843]">
                  Classified Species:
                </span>
                <div className="text-2xl font-heading font-bold mt-1 text-[#0B1B3A] dark:text-white">
                  {predicted}
                </div>
              </div>

              {/* Confidence Bars */}
              <div className="mt-4 space-y-2 text-xs">
                <div>
                  <div className="flex justify-between mb-1 text-[#5B6B8C] dark:text-slate-400">
                    <span>Setosa</span>
                    <span className="font-medium text-[#0B1B3A] dark:text-white">{setosa}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full overflow-hidden bg-[#EAF2FF] dark:bg-white/10">
                    <motion.div
                      className="h-full bg-[#5B6B8C] dark:bg-white"
                      animate={{ width: `${setosa}%` }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-[#5B6B8C] dark:text-slate-400">
                    <span>Versicolor</span>
                    <span className="font-medium text-[#0B1B3A] dark:text-white">{versicolor}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full overflow-hidden bg-[#EAF2FF] dark:bg-white/10">
                    <motion.div
                      className="h-full bg-[#2563EB] dark:bg-slate-300"
                      animate={{ width: `${versicolor}%` }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-[#5B6B8C] dark:text-slate-400">
                    <span>Virginica</span>
                    <span className="font-bold text-[#2563EB] dark:text-[#FF3843]">{virginica}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full overflow-hidden bg-[#EAF2FF] dark:bg-white/10">
                    <motion.div
                      className="h-full bg-[#2563EB] dark:bg-[#FF1E27]"
                      animate={{ width: `${virginica}%` }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Smartuter research center footer */}
            <div className="mt-5 pt-3 border-t flex items-center justify-between text-[11px] border-[#DCE6F7] text-[#5B6B8C] dark:border-white/10 dark:text-slate-400">
              <span className="text-[#0B1B3A] dark:text-slate-300">
                Smartuter Research Center (SRC)
              </span>
              <span className="font-mono text-[#5B6B8C] dark:text-slate-500">Jan 2026 Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

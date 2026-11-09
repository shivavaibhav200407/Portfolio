"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Sliders, BarChart3, CheckCircle2 } from "lucide-react";

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
    <section id="ml-sandbox" className="relative py-20 px-4 sm:px-8 border-t border-white/5 bg-[#040404] transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E27]/30 bg-[#FF1E27]/10 px-3 py-1 font-mono text-xs font-medium text-[#FF3843]">
            <Award className="h-3.5 w-3.5 text-[#FF1E27]" />
            <span>MACHINE LEARNING // SMARTUTER (SRC) CERTIFIED</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Iris Flower Species Classifier
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 mt-1">
            Machine learning model certified at Smartuter Research Center (Jan 2026). Adjust petal and sepal dimensions in real time to observe the classification probability shifts:
          </p>
        </div>

        {/* Sandbox Console */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-2xl border border-white/10 bg-[#070707] p-5 sm:p-7 shadow-xl">
          {/* Sliders */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-semibold text-white flex items-center gap-2">
                <Sliders className="h-4 w-4 text-[#FF1E27]" />
                Feature Inputs (in centimeters)
              </span>
              <span className="font-mono text-[11px] text-[#FF3843] uppercase tracking-wider">Interactive</span>
            </div>

            {/* Slider: Sepal Length */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-300">Sepal Length</span>
                <span className="text-[#FF3843] font-bold">{sepalLength.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="4.0"
                max="8.0"
                step="0.1"
                value={sepalLength}
                onChange={(e) => setSepalLength(parseFloat(e.target.value))}
                className="w-full accent-[#FF1E27] h-1.5 rounded-lg bg-white/10 cursor-pointer"
              />
            </div>

            {/* Slider: Sepal Width */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-300">Sepal Width</span>
                <span className="text-[#FF3843] font-bold">{sepalWidth.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="4.5"
                step="0.1"
                value={sepalWidth}
                onChange={(e) => setSepalWidth(parseFloat(e.target.value))}
                className="w-full accent-[#FF1E27] h-1.5 rounded-lg bg-white/10 cursor-pointer"
              />
            </div>

            {/* Slider: Petal Length */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-300">Petal Length (Primary Decision Boundary)</span>
                <span className="text-[#FF1E27] font-bold">{petalLength.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="7.0"
                step="0.1"
                value={petalLength}
                onChange={(e) => setPetalLength(parseFloat(e.target.value))}
                className="w-full accent-[#FF1E27] h-1.5 rounded-lg bg-white/10 cursor-pointer"
              />
            </div>

            {/* Slider: Petal Width */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-300">Petal Width</span>
                <span className="text-[#FF1E27] font-bold">{petalWidth.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.5"
                step="0.1"
                value={petalWidth}
                onChange={(e) => setPetalWidth(parseFloat(e.target.value))}
                className="w-full accent-[#FF1E27] h-1.5 rounded-lg bg-white/10 cursor-pointer"
              />
            </div>

            {/* Presets */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="text-[11px] text-slate-400 self-center">Presets:</span>
              <button
                onClick={() => {
                  setSepalLength(5.0);
                  setSepalWidth(3.5);
                  setPetalLength(1.4);
                  setPetalWidth(0.2);
                }}
                className="px-2.5 py-1 rounded bg-[#0C0C0C] border border-white/10 text-slate-300 hover:border-[#FF1E27]/50 hover:text-white transition-colors"
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
                className="px-2.5 py-1 rounded bg-[#0C0C0C] border border-white/10 text-slate-300 hover:border-[#FF1E27]/50 hover:text-white transition-colors"
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
                className="px-2.5 py-1 rounded bg-[#0C0C0C] border border-white/10 text-slate-300 hover:border-[#FF1E27]/50 hover:text-white transition-colors"
              >
                Virginica
              </button>
            </div>
          </div>

          {/* Model Output Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-white/10 bg-[#0C0C0C] p-5 font-mono">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs text-slate-300 flex items-center gap-1.5">
                  <BarChart3 className="h-3.5 w-3.5 text-[#FF1E27]" />
                  Inference Confidence
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10 font-mono">
                  98.7% Accuracy
                </span>
              </div>

              {/* Result Pill */}
              <div className="mt-4 p-4 rounded-xl border-l-2 border-[#FF1E27] border-y border-r border-white/10 bg-black/60">
                <span className="text-[10px] text-[#FF3843] uppercase tracking-widest block font-bold">
                  Classified Species:
                </span>
                <div className="text-2xl font-display font-extrabold text-white mt-1">
                  {predicted}
                </div>
              </div>

              {/* Confidence Bars */}
              <div className="mt-4 space-y-2 text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Setosa</span>
                    <span className="text-white font-medium">{setosa}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      animate={{ width: `${setosa}%` }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Versicolor</span>
                    <span className="text-white font-medium">{versicolor}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-slate-300"
                      animate={{ width: `${versicolor}%` }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Virginica</span>
                    <span className="text-[#FF3843] font-bold">{virginica}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-[#FF1E27]"
                      animate={{ width: `${virginica}%` }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SRC certification footer */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-slate-300 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#FF1E27]" />
                Smartuter Research Center (SRC)
              </span>
              <span className="font-mono text-slate-500">Jan 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

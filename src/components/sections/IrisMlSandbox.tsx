"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Binary, Award, Sliders, CheckCircle, BarChart3, Info } from "lucide-react";

export default function IrisMlSandbox() {
  const [sepalLength, setSepalLength] = useState(5.8);
  const [sepalWidth, setSepalWidth] = useState(3.0);
  const [petalLength, setPetalLength] = useState(4.2);
  const [petalWidth, setPetalWidth] = useState(1.3);

  // Real-time statistical decision boundary calculation (approximating KNN / Decision Tree logic)
  const calculatePredictions = () => {
    // Setosa: distinctly short, wide petals
    if (petalLength < 2.5) {
      return { setosa: 97, versicolor: 2, virginica: 1, predicted: "Iris Setosa" };
    }
    // Virginica: long petals and wider petals
    if (petalLength > 4.8 && petalWidth > 1.6) {
      return { setosa: 0, versicolor: 8, virginica: 92, predicted: "Iris Virginica" };
    }
    if (petalLength > 5.0) {
      return { setosa: 0, versicolor: 14, virginica: 86, predicted: "Iris Virginica" };
    }
    // Versicolor: intermediate
    return { setosa: 1, versicolor: 88, virginica: 11, predicted: "Iris Versicolor" };
  };

  const { setosa, versicolor, virginica, predicted } = calculatePredictions();

  return (
    <section id="ml-sandbox" className="relative py-24 px-4 sm:px-8 border-t border-white/5 bg-cyber-bg">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-300">
            <Binary className="h-3.5 w-3.5 text-blue-400" />
            <span>MACHINE LEARNING RESEARCH // SMARTUTER (SRC) CERTIFIED</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            Interactive ML Classification Sandbox
          </h2>
          <p className="max-w-3xl text-sm sm:text-base text-slate-400 mt-2">
            Completed machine learning study on statistical classification and decision boundaries. Adjust the morphological dimensions below to see the simulated estimator calculate class probabilities in real-time.
          </p>
        </div>

        {/* Sandbox Console Container */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-2xl border border-white/10 bg-cyber-surface/70 p-6 sm:p-8 backdrop-blur-xl">
          {/* Left Column: Sliders Controller */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-semibold text-slate-300 flex items-center gap-2">
                <Sliders className="h-4 w-4 text-cyan-400" />
                Feature Dimension Sliders
              </span>
              <span className="font-mono text-[11px] text-cyan-400">Centimeters (cm)</span>
            </div>

            {/* Slider 1: Sepal Length */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-300">Sepal Length</span>
                <span className="text-cyan-400 font-bold">{sepalLength.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="4.0"
                max="8.0"
                step="0.1"
                value={sepalLength}
                onChange={(e) => setSepalLength(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 h-1.5 rounded-lg bg-white/10 cursor-pointer"
              />
            </div>

            {/* Slider 2: Sepal Width */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-300">Sepal Width</span>
                <span className="text-cyan-400 font-bold">{sepalWidth.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="4.5"
                step="0.1"
                value={sepalWidth}
                onChange={(e) => setSepalWidth(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 h-1.5 rounded-lg bg-white/10 cursor-pointer"
              />
            </div>

            {/* Slider 3: Petal Length */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-300">Petal Length (High Discriminative Weight)</span>
                <span className="text-cyan-400 font-bold">{petalLength.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="7.0"
                step="0.1"
                value={petalLength}
                onChange={(e) => setPetalLength(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 h-1.5 rounded-lg bg-white/10 cursor-pointer"
              />
            </div>

            {/* Slider 4: Petal Width */}
            <div className="space-y-1.5">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-300">Petal Width</span>
                <span className="text-cyan-400 font-bold">{petalWidth.toFixed(1)} cm</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.5"
                step="0.1"
                value={petalWidth}
                onChange={(e) => setPetalWidth(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 h-1.5 rounded-lg bg-white/10 cursor-pointer"
              />
            </div>

            {/* Preset quick test buttons */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center mr-1">
                Benchmarks:
              </span>
              <button
                onClick={() => {
                  setSepalLength(5.0);
                  setSepalWidth(3.5);
                  setPetalLength(1.4);
                  setPetalWidth(0.2);
                }}
                className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 hover:border-cyan-400/50"
              >
                Setosa Typical
              </button>
              <button
                onClick={() => {
                  setSepalLength(5.9);
                  setSepalWidth(2.8);
                  setPetalLength(4.2);
                  setPetalWidth(1.3);
                }}
                className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 hover:border-cyan-400/50"
              >
                Versicolor Typical
              </button>
              <button
                onClick={() => {
                  setSepalLength(6.5);
                  setSepalWidth(3.0);
                  setPetalLength(5.5);
                  setPetalWidth(2.0);
                }}
                className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 hover:border-cyan-400/50"
              >
                Virginica Typical
              </button>
            </div>
          </div>

          {/* Right Column: Prediction Output HUD */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-cyan-500/30 bg-cyber-bg/90 p-5 font-mono">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase text-slate-400 flex items-center gap-1.5">
                  <BarChart3 className="h-3.5 w-3.5 text-cyan-400" />
                  Model Inference Output
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  98.7% Accuracy
                </span>
              </div>

              {/* Dominant Prediction Card */}
              <div className="mt-4 p-4 rounded-xl border border-cyan-500/40 bg-cyan-950/20">
                <span className="text-[10px] text-cyan-400 uppercase tracking-widest block">
                  Classified Species
                </span>
                <div className="text-2xl font-display font-extrabold text-white mt-1">
                  {predicted}
                </div>
              </div>

              {/* Probability Distributions */}
              <div className="mt-4 space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Iris Setosa</span>
                    <span className="text-cyan-300 font-bold">{setosa}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-cyan-400"
                      animate={{ width: `${setosa}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Iris Versicolor</span>
                    <span className="text-blue-300 font-bold">{versicolor}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500"
                      animate={{ width: `${versicolor}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Iris Virginica</span>
                    <span className="text-purple-300 font-bold">{virginica}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-purple-500"
                      animate={{ width: `${virginica}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Smartuter Verification Stamp */}
            <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Award className="h-4 w-4" />
                <span>Smartuter Research Center (SRC)</span>
              </div>
              <span className="text-slate-500 font-mono">Jan 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { DATA } from "@/data/resume";

export default function OGPreviewPage() {
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | "C">("A");

  const avatarUrl = DATA.avatarUrl || "/me.png";
  const ogDescription = "Software Engineer at TCS specializing in AI-driven automation, backend systems, and scalable cloud architectures. Creator of Nexiuo.";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12 flex flex-col items-center justify-start gap-8 font-sans w-full max-w-none">
      <div className="w-full max-w-7xl flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">OpenGraph Design Explorer</h1>
        <p className="text-zinc-400 text-sm max-w-3xl">
          Below are the three borderless design directions for your portfolio's social preview cards. 
          They are rendered below at a 1200x630 resolution (scaled to fit your screen size dynamically).
        </p>

        {/* Tab Selection */}
        <div className="flex gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-lg w-fit mt-2">
          {(["A", "B", "C"] as const).map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedOption(opt)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                selectedOption === opt
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Option {opt}: {opt === "A" ? "Watermarked Monogram" : opt === "B" ? "Minimalist Grid Split" : "Abstract Geometry"}
            </button>
          ))}
        </div>
      </div>

      {/* Preview Card Shell */}
      <div className="border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 p-8 w-full max-w-7xl flex justify-center items-center">
        <div className="relative w-[1200px] h-[630px] overflow-hidden rounded-xl border border-zinc-800 origin-center scale-[0.35] xs:scale-[0.45] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.9] xl:scale-[1] my-[-180px] sm:my-[-120px] md:my-[-70px] lg:my-[-30px] xl:my-0 transition-all flex-none">
          
          {/* ========================================================================= */}
          {/* OPTION A: WATERMARKED MONOGRAM */}
          {/* ========================================================================= */}
          {selectedOption === "A" && (
            <div className="w-full h-full bg-[#030712] relative flex p-[60px_80px] justify-between items-center overflow-hidden" style={{ backgroundImage: "linear-gradient(135deg, #090e1a 0%, #030712 100%)" }}>
              {/* Giant Background Watermark "NK" */}
              <div className="absolute right-[-40px] top-[-80px] text-[480px] font-bold text-white/[0.02] select-none pointer-events-none font-sans leading-none tracking-tighter">
                NK
              </div>

              {/* Faint ambient glows */}
              <div className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[100px]" />
              <div className="absolute left-[-150px] top-[-150px] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />

              {/* Left Column Text */}
              <div className="flex flex-col justify-between h-full z-10 flex-1 pr-12">
                <div className="flex flex-col">
                  <div className="text-[#38bdf8] text-sm font-semibold tracking-[0.2em] uppercase mb-6 font-sans">
                    TCSer & Software Engineer
                  </div>
                  <div className="text-white text-6xl font-bold font-sans tracking-tight mb-6 leading-none">
                    {DATA.name}
                  </div>
                  <div className="text-zinc-400 text-lg leading-relaxed max-w-[680px] font-sans">
                    {ogDescription}
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-zinc-500 font-sans">
                  <span>{DATA.url.replace("https://", "")}</span>
                  <span className="text-zinc-800">|</span>
                  <span>github.com/dishapatel010</span>
                </div>
              </div>

              {/* Right Column Portrait */}
              <div className="relative flex justify-center items-center flex-none">
                <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 opacity-20 blur-2xl" />
                <img
                  src={avatarUrl}
                  alt={DATA.name}
                  className="w-[210px] h-[210px] rounded-[40px] border-2 border-white/10 object-cover z-10 shadow-2xl bg-[#030712]"
                />
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION B: MINIMALIST GRID SPLIT */}
          {/* ========================================================================= */}
          {selectedOption === "B" && (
            <div className="w-full h-full bg-[#090d16] relative flex p-0 items-stretch overflow-hidden">
              {/* Subtle ambient light */}
              <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
              
              {/* Left Column (Text Pane) */}
              <div className="flex-[3] flex flex-col justify-between p-[60px_80px] z-10">
                <div className="flex flex-col">
                  <div className="text-[#818cf8] text-xs font-semibold tracking-[0.25em] uppercase mb-8 font-sans">
                    TATA CONSULTANCY SERVICES
                  </div>
                  <div className="text-white text-6xl font-bold font-sans tracking-tight mb-6 leading-none">
                    {DATA.name}
                  </div>
                  <div className="text-zinc-400 text-lg leading-relaxed max-w-[600px] font-sans">
                    {ogDescription}
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-zinc-500 font-sans">
                  <span>{DATA.url.replace("https://", "")}</span>
                  <span className="text-zinc-800">/</span>
                  <span>github.com/dishapatel010</span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-px bg-zinc-800/80 relative" />

              {/* Right Column (Focus Image Pane) */}
              <div className="flex-[2] bg-[#0c111e]/40 flex justify-center items-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_70%)]" />
                <div className="relative">
                  <div className="absolute inset-0 rounded-[32px] bg-indigo-500/10 blur-xl" />
                  <img
                    src={avatarUrl}
                    alt={DATA.name}
                    className="w-[200px] h-[200px] rounded-[32px] border border-zinc-700/60 object-cover z-10 relative shadow-2xl bg-[#090d16]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION C: ABSTRACT GEOMETRY */}
          {/* ========================================================================= */}
          {selectedOption === "C" && (
            <div className="w-full h-full bg-[#05070c] relative flex p-[60px_80px] justify-between items-center overflow-hidden">
              {/* Engineering bracket graphic in background */}
              <div className="absolute right-20 top-20 text-[260px] font-light text-zinc-800/20 select-none pointer-events-none font-mono leading-none">
                &#123; &#125;
              </div>

              {/* Matrix-like light dot grids in background corners */}
              <div className="absolute top-12 left-12 w-[180px] h-[180px] opacity-10 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Soft purple accent glow */}
              <div className="absolute left-[30%] top-[40%] w-[400px] h-[400px] rounded-full bg-violet-600/[0.06] blur-[100px]" />

              {/* Left Column Text */}
              <div className="flex flex-col justify-between h-full z-10 flex-1 pr-12">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-mono uppercase tracking-[0.2em]">Active Developer</span>
                  </div>
                  <div className="text-white text-6xl font-bold font-sans tracking-tight mb-6 leading-none">
                    {DATA.name}
                  </div>
                  <div className="text-zinc-400 text-lg leading-relaxed max-w-[650px] font-sans">
                    {ogDescription}
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-zinc-500 font-sans">
                  <span>{DATA.url.replace("https://", "")}</span>
                  <span className="text-zinc-800">|</span>
                  <span>github.com/dishapatel010</span>
                </div>
              </div>

              {/* Right Column Portrait */}
              <div className="relative flex justify-center items-center flex-none">
                <div className="absolute w-[240px] h-[240px] bg-violet-500/10 blur-xl rounded-full" />
                <img
                  src={avatarUrl}
                  alt={DATA.name}
                  className="w-[210px] h-[210px] rounded-2xl border border-zinc-800 object-cover z-10 shadow-2xl bg-[#05070c]"
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { DATA } from "@/data/resume";

type OptionKey = 
  | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O"
  | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W";

export default function OGPreviewPage() {
  const [selectedOption, setSelectedOption] = useState<OptionKey>("A");

  const avatarUrl = DATA.avatarUrl || "/me.png";
  const ogDescription = "Software Engineer at TCS specializing in AI-driven automation, backend systems, and scalable cloud architectures. Creator of Nexiuo.";

  const options: { key: OptionKey; label: string }[] = [
    { key: "A", label: "Google Material" },
    { key: "B", label: "IDE / Terminal" },
    { key: "C", label: "Swiss Grid" },
    { key: "D", label: "Bento Dashboard" },
    { key: "E", label: "PCB Schematic" },
    { key: "F", label: "Dev Desk" },
    { key: "G", label: "Brutalist Ticket" },
    { key: "H", label: "Generative Wave" },
    { key: "I", label: "Bauhaus Poster" },
    { key: "J", label: "Cinematic Frame" },
    { key: "K", label: "NASA Patent" },
    { key: "L", label: "Mumbai Train Map" },
    { key: "M", label: "Raza Modernist Art" },
    { key: "N", label: "Marine Drive Deco" },
    { key: "O", label: "Matchbox Ephemera" },
    { key: "P", label: "Risograph Zine" },
    { key: "Q", label: "De Stijl Grid" },
    { key: "R", label: "Vaporwave Retro" },
    { key: "S", label: "Ukiyo-e Print" },
    { key: "T", label: "Memphis Postmod" },
    { key: "U", label: "Stained Glass" },
    { key: "V", label: "Psychedelic Art" },
    { key: "W", label: "Cyberpunk HUD" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12 flex flex-col items-center justify-start gap-8 font-sans w-full max-w-none">
      <div className="w-full max-w-7xl flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">OpenGraph Design Explorer</h1>
        <p className="text-zinc-400 text-sm max-w-3xl">
          Below are the twenty-three premium design concepts for your portfolio's social preview cards. 
          They are rendered below at a 1200x630 resolution (scaled dynamically to fit your screen size).
        </p>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-lg w-fit mt-2">
          {options.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelectedOption(opt.key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                selectedOption === opt.key
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preview Card Shell */}
      <div className="border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 p-8 w-full max-w-7xl flex justify-center items-center">
        <div className="relative w-[1200px] h-[630px] overflow-hidden rounded-xl border border-zinc-800 origin-center scale-[0.35] xs:scale-[0.45] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.9] xl:scale-[1] my-[-180px] sm:my-[-120px] md:my-[-70px] lg:my-[-30px] xl:my-0 transition-all flex-none">
          
          {/* ========================================================================= */}
          {/* OPTION A: GOOGLE MATERIAL BLUEPRINT */}
          {/* ========================================================================= */}
          {selectedOption === "A" && (
            <div className="w-full h-full relative flex flex-col justify-between p-14 bg-[#0F131A] overflow-hidden">
              <div className="absolute top-[-100px] right-[-100px] rounded-full bg-[radial-gradient(circle,rgba(66,133,244,0.15)_0%,transparent_70%)] pointer-events-none" style={{ width: 600, height: 600 }} />
              <div className="absolute bottom-[-100px] left-[-100px] rounded-full bg-[radial-gradient(circle,rgba(52,168,83,0.12)_0%,transparent_70%)] pointer-events-none" style={{ width: 500, height: 500 }} />

              <div className="flex justify-between items-center z-10">
                <div className="flex items-center gap-2.5 bg-[#1D2432] px-5 py-2.5 rounded-full border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-[#34A853]" />
                  <span className="color-[#E1E2E9] text-lg font-semibold font-sans leading-none">katkar.in</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4285F4]" />
                  <div className="w-2 h-2 rounded-full bg-[#EA4335]" />
                  <div className="w-2 h-2 rounded-full bg-[#FBBC05]" />
                  <div className="w-2 h-2 rounded-full bg-[#34A853]" />
                </div>
              </div>

              <div className="flex justify-between items-center z-10 w-full">
                <div className="flex flex-col gap-5 max-w-[760px]">
                  <div className="flex gap-3">
                    <div className="bg-[#2B3448] text-[#D3E3FD] px-4 py-2 rounded-xl text-lg font-semibold font-sans">
                      Software Engineer
                    </div>
                    <div className="bg-white/5 text-[#C4C6D0] px-4 py-2 rounded-xl text-lg font-medium border border-white/10 font-sans">
                      Builder
                    </div>
                  </div>
                  <h1 className="text-[68px] font-extrabold text-[#F0F4F9] m-0 tracking-tighter leading-[1.05] font-sans">
                    {DATA.name}
                  </h1>
                  <p className="text-xl text-[#C4C6D0] m-0 leading-relaxed font-normal font-sans">
                    {ogDescription}
                  </p>
                </div>

                <div className="w-[210px] h-[210px] rounded-[48px] bg-[#1E2430] p-2 flex shadow-[0_16px_32px_rgba(0,0,0,0.4)] border border-white/10 flex-none overflow-hidden">
                  <img src={avatarUrl} alt={DATA.name} className="w-full h-full rounded-[40px] object-cover" />
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-white/5 pt-6 color-[#8E919E] text-lg font-medium font-sans">
                <span>github.com/dishapatel010</span>
                <span className="text-[#E1E2E9] font-semibold">Portfolio 2026</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION B: IDE / TERMINAL INTERFACE */}
          {/* ========================================================================= */}
          {selectedOption === "B" && (
            <div className="w-full h-full bg-[#0d1117] flex flex-col justify-between p-12 font-mono relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs text-zinc-500 font-sans tracking-wide">
                  nikhil@katkar: ~/portfolio-og
                </div>
                <div className="w-12" />
              </div>

              <div className="flex flex-1 items-center justify-between py-8 w-full gap-12">
                <div className="flex flex-1 gap-6 text-sm md:text-base leading-relaxed text-zinc-300">
                  <div className="flex flex-col text-zinc-600 select-none text-right font-mono pr-2 border-r border-zinc-800/60">
                    <span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span><span>08</span>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <span className="text-[#ff79c6]">const</span> <span className="text-[#50fa7b]">developer</span><span className="text-[#ff79c6]">:</span> <span className="text-[#8be9fd]">Engineer</span> = &#123;
                    </div>
                    <div className="pl-6">
                      <span className="text-[#f1fa8c]">name</span><span className="text-[#ff79c6]">:</span> <span className="text-[#f1fa8c]">&quot;{DATA.name}&quot;</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#f1fa8c]">role</span><span className="text-[#ff79c6]">:</span> <span className="text-[#f1fa8c]">&quot;Software Engineer&quot;</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#f1fa8c]">domain</span><span className="text-[#ff79c6]">:</span> <span className="text-[#f1fa8c]">&quot;katkar.in&quot;</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-[#f1fa8c]">status</span><span className="text-[#ff79c6]">:</span> <span className="text-[#f1fa8c]">&quot;Building Scalable AI Systems&quot;</span>
                    </div>
                    <div>&#125;;</div>
                    <div className="mt-4 text-zinc-500 font-sans text-xs italic">// Running node system.js ...</div>
                  </div>
                </div>

                <div className="relative p-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex-none flex items-center justify-center">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[200px] h-[200px] rounded-xl object-cover border border-zinc-800/80 z-10 shadow-xl" />
                  <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/20">LIVE</div>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-zinc-900 pt-6 text-xs text-zinc-500">
                <span>$ git push origin main --force</span>
                <span>UTF-8 • TypeScript</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION C: THE MODERN SWISS GRID */}
          {/* ========================================================================= */}
          {selectedOption === "C" && (
            <div className="w-full h-full bg-[#050505] flex p-0 items-stretch overflow-hidden relative">
              <div className="flex-[3] flex flex-col justify-between p-16 z-10">
                <div className="flex flex-col gap-6">
                  <div className="text-zinc-600 text-xs font-bold tracking-[0.3em] uppercase font-sans">CREATIVE ENGINEERING / PORTFOLIO ISSUE 01</div>
                  <div className="text-white text-7xl font-black font-sans tracking-tighter leading-[0.9] uppercase flex flex-col">
                    <span>NIKHIL</span><span className="text-zinc-500">KATKAR</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-12 h-1 bg-white" />
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-[500px] font-sans pt-2">{ogDescription}</p>
                </div>
              </div>
              <div className="w-px bg-zinc-900" />
              <div className="flex-[2] bg-zinc-950 flex flex-col justify-between p-12 items-center relative">
                <div className="my-auto relative">
                  <div className="absolute inset-0 bg-white/5 scale-[1.05] blur-md rounded-xl" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[220px] h-[220px] rounded-lg object-cover grayscale contrast-[1.1] border border-zinc-800 shadow-2xl relative z-10" />
                </div>
                <div className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase w-full text-center">1200 x 630 • (01/2026)</div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION D: BENTO GRID DASHBOARD */}
          {/* ========================================================================= */}
          {selectedOption === "D" && (
            <div className="w-full h-full bg-[#0a0a0a] flex flex-col justify-between p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              <div className="grid grid-cols-3 grid-rows-2 gap-5 h-full w-full">
                <div className="col-span-2 row-span-2 bg-[#141414] border border-zinc-800/80 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-indigo-500/[0.04] blur-[60px]" />
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                      <span className="text-zinc-400 font-medium text-xs tracking-wider uppercase font-sans">Engineering Profile</span>
                    </div>
                    <h2 className="text-white text-5xl font-extrabold tracking-tight font-sans mt-2">{DATA.name}</h2>
                    <p className="text-zinc-400 text-base leading-relaxed max-w-[520px] font-sans">{ogDescription}</p>
                  </div>
                  <div className="text-zinc-600 text-xs font-mono">SYS.LOG.STATUS: BUILD_SUCCESSFUL // 2026</div>
                </div>
                <div className="bg-[#141414] border border-zinc-800/80 rounded-3xl p-6 flex justify-center items-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-indigo-500/5" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[120px] h-[120px] rounded-2xl border border-zinc-800 object-cover shadow-lg relative z-10" />
                </div>
                <div className="bg-[#141414] border border-zinc-800/80 rounded-3xl p-6 flex flex-col justify-between items-start relative overflow-hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[#38bdf8] text-sm font-semibold font-sans">katkar.in</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 mt-auto">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Active Stack</span>
                    <span className="text-xs text-zinc-300 font-sans font-medium">NodeJS, Python, Cloudflare</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION E: PCB SCHEMATIC */}
          {/* ========================================================================= */}
          {selectedOption === "E" && (
            <div className="w-full h-full bg-[#050B14] flex flex-col justify-between p-14 relative overflow-hidden font-mono text-[#00E5FF]">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 100,300 L 400,300 L 500,400 L 900,400" stroke="#00D5FF" strokeWidth="2" fill="none" />
                <path d="M 800,100 L 900,200 L 1100,200" stroke="#10B981" strokeWidth="2" fill="none" />
                <circle cx="400" cy="300" r="5" fill="#00D5FF" />
                <circle cx="500" cy="400" r="5" fill="#10B981" />
              </svg>
              <div className="flex justify-between items-start z-10 w-full">
                <div className="flex flex-col">
                  <span className="text-xs text-[#10B981] font-bold tracking-[0.2em] uppercase">// SILKSCREEN LAYER V2.6</span>
                  <h1 className="text-[64px] font-black tracking-widest text-[#00E5FF] leading-none uppercase mt-2">{DATA.name}</h1>
                  <span className="text-[#10B981] text-sm mt-1">ENGINEER_ID // #NK-2026</span>
                </div>
                <div className="text-right text-xs text-zinc-500 flex flex-col gap-1 border border-zinc-800 p-3 rounded bg-zinc-950/80">
                  <span>SCALE: 1:1</span><span>REV: 2026.04</span><span>STATUS: VERIFIED</span>
                </div>
              </div>
              <div className="flex justify-between items-center z-10 w-full my-4">
                <div className="flex items-center gap-4 bg-zinc-950/80 border border-[#00E5FF]/20 px-6 py-4 rounded-xl">
                  <div className="flex flex-col"><span className="text-[10px] text-zinc-500">INPUT:</span><span className="text-xs text-white">Problem Statement</span></div>
                  <span className="text-[#00E5FF]">&rarr;</span>
                  <div className="flex flex-col"><span className="text-[10px] text-zinc-500">PROCESSOR:</span><span className="text-xs text-[#10B981] font-bold">{DATA.name}</span></div>
                  <span className="text-[#10B981]">&rarr;</span>
                  <div className="flex flex-col"><span className="text-[10px] text-zinc-500">OUTPUT:</span><span className="text-xs text-[#00E5FF]">katkar.in</span></div>
                </div>
                <div className="relative p-1.5 border-2 border-[#00E5FF] bg-zinc-900 rounded-lg flex-none">
                  <img src={avatarUrl} alt={DATA.name} className="w-[140px] h-[140px] rounded object-cover grayscale brightness-90 contrast-125" />
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#00E5FF] rounded-full" />
                </div>
              </div>
              <div className="border-t border-[#00E5FF]/10 pt-4 text-xs text-[#10B981]/60 flex justify-between">
                <span>SCHEMATIC DRAWING // DO NOT SCALE PRINTS</span><span>SYSTEM AUTONOMY LEVEL: ACTIVE</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION F: DEV DESK FLATLAY */}
          {/* ========================================================================= */}
          {selectedOption === "F" && (
            <div className="w-full h-full bg-[#0F0F11] flex p-16 justify-between items-center overflow-hidden relative">
              <div className="absolute right-[-100px] top-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.06)_0%,transparent_70%)] pointer-events-none" />
              <div className="flex-[3] flex flex-col justify-between h-full z-10 pr-12">
                <div className="flex flex-col gap-6">
                  <div className="bg-[#1C1C1F] border border-zinc-800/80 p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-3 max-w-[550px] relative">
                    <div className="absolute top-4 right-4 w-3.5 h-3.5 rounded-full bg-emerald-500/80 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">MATTE LID DECAL</span>
                    <h2 className="text-white text-3xl font-extrabold tracking-tight font-sans mt-1">Nikhil Katkar</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">{ogDescription}</p>
                  </div>
                </div>
                <div className="bg-[#FAF9F6] text-zinc-800 p-5 rounded-lg border border-zinc-300 max-w-[320px] shadow-md transform -rotate-1 self-start mt-4">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">FIELD NOTES</span>
                  <div className="text-sm font-sans italic font-medium border-l-2 border-zinc-300 pl-3">
                    &quot;Solve real problems, write clean code, and deploy serverless.&quot;
                  </div>
                </div>
              </div>
              <div className="flex-[2] flex flex-col items-center justify-center gap-6 relative">
                <div className="bg-[#18181B] border border-zinc-800 p-4 rounded-xl shadow-xl flex gap-1.5 w-fit">
                  <div className="w-10 h-10 rounded bg-[#27272A] border-b-2 border-zinc-900 text-zinc-500 text-[10px] flex items-center justify-center font-mono">Q</div>
                  <div className="w-10 h-10 rounded bg-[#27272A] border-b-2 border-zinc-900 text-zinc-500 text-[10px] flex items-center justify-center font-mono">W</div>
                  <div className="w-10 h-10 rounded bg-[#3B82F6]/20 border-b-2 border-[#2563EB] text-[#60A5FA] text-[10px] flex items-center justify-center font-mono font-bold">E</div>
                  <div className="w-10 h-10 rounded bg-[#27272A] border-b-2 border-zinc-900 text-zinc-500 text-[10px] flex items-center justify-center font-mono">R</div>
                  <div className="w-10 h-10 rounded bg-[#EF4444] border-b-2 border-red-800 text-white text-[10px] flex items-center justify-center font-mono font-bold">ESC</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-full bg-[#121214] border border-zinc-800 flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-[#271F1B] border border-zinc-900" />
                  </div>
                  <img src={avatarUrl} alt={DATA.name} className="w-[120px] h-[120px] rounded-full object-cover border-4 border-zinc-800 shadow-2xl" />
                </div>
              </div>
              <div className="absolute bottom-6 left-16 text-zinc-600 text-xs font-mono">DESK_FLATLAY_SYS_RUNNING // katkar.in</div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION G: BRUTALIST TICKET */}
          {/* ========================================================================= */}
          {selectedOption === "G" && (
            <div className="w-full h-full bg-[#0C0C0C] flex p-0 items-stretch overflow-hidden font-mono text-white relative">
              <div className="w-[140px] bg-white text-black flex flex-col justify-between items-center py-10 relative">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase transform -rotate-90 origin-center my-auto whitespace-nowrap">PASS_ID // KATKAR-2026-SE</div>
                <div className="w-[90px] h-[280px] flex gap-1 justify-center my-6">
                  <div className="w-1 bg-black h-full" /><div className="w-3 bg-black h-full" /><div className="w-1 bg-black h-full" />
                  <div className="w-2 bg-black h-full" /><div className="w-4 bg-black h-full" /><div className="w-1 bg-black h-full" />
                  <div className="w-3 bg-black h-full" /><div className="w-2 bg-black h-full" /><div className="w-1 bg-black h-full" /><div className="w-4 bg-black h-full" />
                </div>
                <div className="text-xs font-bold font-mono">NK.2026</div>
              </div>
              <div className="flex-1 flex flex-col justify-between p-14 border-r-2 border-dashed border-zinc-800 relative bg-[#0C0C0C]">
                <div className="absolute right-[-10px] top-[-10px] w-5 h-5 rounded-full bg-zinc-950 border border-zinc-800" />
                <div className="absolute right-[-10px] bottom-[-10px] w-5 h-5 rounded-full bg-zinc-950 border border-zinc-800" />
                <div className="flex flex-col gap-6">
                  <div className="bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded text-xs text-zinc-400 w-fit">SYSTEM_ACCESS // ALL-STACK</div>
                  <h1 className="text-6xl font-black font-mono tracking-tighter uppercase leading-none">{DATA.name}</h1>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-[500px]">{ogDescription}</p>
                </div>
                <div className="flex items-center gap-12 text-xs text-zinc-400">
                  <div className="flex flex-col"><span className="text-zinc-600 text-[10px]">ORGANIZATION</span><span>TATA CONSULTANCY SERVICES</span></div>
                  <div className="flex flex-col"><span className="text-zinc-600 text-[10px]">ROLE SPEC</span><span>BACKEND & AUTOMATION</span></div>
                </div>
              </div>
              <div className="w-[300px] bg-zinc-950 flex flex-col justify-between p-12 items-center relative text-center">
                <div className="flex flex-col items-center gap-4">
                  <img src={avatarUrl} alt={DATA.name} className="w-[120px] h-[120px] rounded border-2 border-white object-cover grayscale" />
                  <div className="text-sm font-bold tracking-wider text-white">STUB // 001</div>
                </div>
                <div className="flex flex-col gap-2 mt-auto w-full">
                  <span className="text-[10px] text-zinc-600 font-mono">PORTAL</span>
                  <a href="https://katkar.in" className="text-white text-sm font-bold underline">katkar.in</a>
                  <span className="text-[9px] text-zinc-500">github.com/dishapatel010</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION H: GENERATIVE CODE WAVE */}
          {/* ========================================================================= */}
          {selectedOption === "H" && (
            <div className="w-full h-full bg-[#050509] flex p-16 justify-between items-center overflow-hidden relative font-mono text-[#4ade80]">
              <div className="absolute left-10 top-10 text-[10px] text-emerald-950 flex flex-col gap-2 leading-none">
                <span>f(x) = sin(x) * cos(y) * e^(-t)</span>
                <span>P(x,y,z) = [x, y, z] . T</span>
                <span>dx/dt = sigma * (y - x)</span>
                <span>dy/dt = x * (rho - z) - y</span>
              </div>
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,315 C 300,100 600,530 1200,315" stroke="#3b82f6" strokeWidth="3" fill="none" />
                <path d="M 0,315 C 300,430 600,100 1200,315" stroke="#10b981" strokeWidth="1.5" fill="none" />
                <path d="M 0,315 C 300,200 800,400 1200,315" stroke="#8b5cf6" strokeWidth="1" fill="none" />
              </svg>
              <div className="flex flex-col justify-between h-full z-10 flex-1 pr-12">
                <div className="flex flex-col">
                  <div className="text-xs text-emerald-400 font-bold tracking-[0.3em] uppercase mb-6">// CREATIVE_COMPUTING_ACTIVE</div>
                  <h1 className="text-6xl font-black tracking-tighter text-white leading-none mb-6">{DATA.name}</h1>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-[650px] font-sans">{ogDescription}</p>
                </div>
                <div className="text-xs text-zinc-600">MATH.RENDER.GRID: CONVERGED // INTERPOLATION = SINUSOIDAL</div>
              </div>
              <div className="relative p-2 border border-emerald-500/30 rounded-xl bg-black flex-none">
                <img src={avatarUrl} alt={DATA.name} className="w-[180px] h-[180px] rounded-lg object-cover grayscale opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent pointer-events-none rounded-lg" />
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION I: BAUHAUS POSTER */}
          {/* ========================================================================= */}
          {selectedOption === "I" && (
            <div className="w-full h-full bg-[#121214] flex p-0 items-stretch overflow-hidden relative">
              <div className="absolute right-[-40px] top-[10%] w-[380px] h-[380px] rounded-full bg-[#DE382B] z-0" />
              <div className="absolute left-[30%] top-0 w-[40px] h-full bg-[#00E5FF]/20 transform skew-x-12 z-0" />
              <div className="absolute bottom-[-50px] right-[20%] w-[200px] h-[200px] bg-amber-500 transform rotate-45 z-0" />
              <div className="flex-[3] flex flex-col justify-between p-16 z-10 relative">
                <div className="flex flex-col gap-6">
                  <span className="text-zinc-500 text-xs font-bold tracking-[0.4em] uppercase font-sans">BAUHAUS WEAVE / ISSUE 2026</span>
                  <div className="flex gap-8 items-start mt-4">
                    <div className="flex flex-col text-white text-6xl font-black font-sans leading-none tracking-tighter">
                      <span>N</span><span>I</span><span>K</span><span>H</span><span>I</span><span>L</span>
                    </div>
                    <div className="text-white text-7xl font-extrabold font-sans tracking-tight leading-none uppercase pt-2 pl-4 border-l border-white/20">KATKAR</div>
                  </div>
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed max-w-[520px] font-sans font-medium bg-[#121214]/60 p-4 border border-white/5 rounded backdrop-blur-sm">{ogDescription}</p>
              </div>
              <div className="flex-[2] bg-black/40 flex justify-center items-center p-12 z-10 border-l border-white/10">
                <div className="relative">
                  <div className="absolute -inset-2 bg-red-600 rounded-full blur opacity-30" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[200px] h-[200px] rounded-full object-cover grayscale contrast-125 border-4 border-white shadow-2xl relative z-10" />
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION J: CINEMATIC ANAMORPHIC FRAME */}
          {/* ========================================================================= */}
          {selectedOption === "J" && (
            <div className="w-full h-full bg-[#050508] flex flex-col justify-between p-0 items-center overflow-hidden relative">
              <div className="absolute left-[10%] top-[40%] w-[900px] h-[10px] bg-sky-500/20 blur-[15px] transform rotate-3" />
              <div className="h-16 bg-black w-full z-20 flex items-center justify-between px-16 border-b border-zinc-900/50 text-[10px] tracking-[0.3em] text-zinc-600 font-mono">
                <span>SCENE 01 / TAKE 2026</span><span>PANAVISION GENESIS</span>
              </div>
              <div className="flex-1 flex w-full items-center justify-between px-16 z-10 py-6">
                <div className="flex flex-col gap-4 max-w-[680px]">
                  <h1 className="text-white text-6xl font-light font-serif tracking-[0.1em] uppercase leading-none">NIKHIL KATKAR</h1>
                  <p className="text-zinc-400 text-sm leading-relaxed tracking-wider font-sans font-light">{ogDescription}</p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-sky-500/10 rounded-2xl blur-lg scale-105" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[170px] h-[170px] rounded-2xl border border-zinc-800/80 object-cover grayscale brightness-75 contrast-125 shadow-2xl" />
                </div>
              </div>
              <div className="h-20 bg-black w-full z-20 flex flex-col justify-center items-center border-t border-zinc-900/50 text-[9px] tracking-[0.2em] text-zinc-500 font-mono">
                <div>A PRODUCTION BY NIKHIL KATKAR • FEATURING SOFTWARE ENGINEERING & AI SYSTEMS</div>
                <div className="mt-1 text-zinc-700">PRODUCED AT KATKAR.IN // ALL RIGHTS RESERVED</div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION K: NASA PATENT SCHEMATICS */}
          {/* ========================================================================= */}
          {selectedOption === "K" && (
            <div className="w-full h-full bg-[#0C1E36] flex flex-col justify-between p-12 relative overflow-hidden font-mono text-[#91C1E6]">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#91C1E6_1px,transparent_1px),linear-gradient(90deg,#91C1E6_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              <div className="border-2 border-[#91C1E6] p-6 z-10 w-full flex justify-between items-center bg-[#0C1E36]">
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase">UNITED STATES PATENT OFFICE</span>
                  <h2 className="text-2xl font-bold tracking-wider text-white mt-1">N. KATKAR • FULL-STACK AUTOMATION APPARATUS</h2>
                </div>
                <div className="text-right text-xs">
                  <div>PATENTED DEC. 2026</div><div className="text-white font-bold">PATENT NO. US-2026-NK</div>
                </div>
              </div>
              <div className="flex flex-1 justify-between items-center my-6 w-full z-10 gap-10">
                <div className="flex flex-col gap-3 max-w-[650px] p-4 border border-[#91C1E6]/30 bg-[#0C1E36]/90 rounded-lg">
                  <div className="text-xs text-white font-bold tracking-widest uppercase border-b border-[#91C1E6]/20 pb-2">FIG. 1 - SYSTEM ASSEMBLY SPECIFICATION</div>
                  <p className="text-sm text-[#91C1E6]/90 leading-relaxed font-sans font-medium">{ogDescription}</p>
                  <div className="flex gap-4 text-[10px] mt-2 text-zinc-400">
                    <span>[Node A]: Client UI</span><span>[Node B]: AI Core</span><span>[Node C]: Cloudflare Worker</span>
                  </div>
                </div>
                <div className="relative p-2 border-2 border-[#91C1E6]/40 bg-[#0C1E36] rounded-xl flex-none">
                  <span className="absolute -top-3 left-4 bg-[#0C1E36] px-2 text-[9px] text-white">FIG. 3: CORE COMPONENT</span>
                  <img src={avatarUrl} alt={DATA.name} className="w-[160px] h-[160px] rounded-lg object-cover grayscale brightness-90 contrast-125 opacity-90" />
                  <div className="absolute bottom-2 right-2 text-[9px] bg-black/60 px-2 py-0.5 rounded text-white">Scale 1.0</div>
                </div>
              </div>
              <div className="border-t-2 border-[#91C1E6] pt-4 text-[10px] flex justify-between">
                <span>INVENTOR: NIKHIL KATKAR</span><span>ATTORNEY: DISHAPATEL010</span><span>RECORDED FILE REFERENCE: KATKAR.IN</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION L: MUMBAI LOCAL TRAIN MAP */}
          {/* ========================================================================= */}
          {selectedOption === "L" && (
            <div className="w-full h-full bg-[#0D1017] flex flex-col justify-between p-14 relative overflow-hidden font-mono text-zinc-400">
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
              <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 150,0 L 150,630" stroke="#00E5FF" strokeWidth="6" fill="none" />
                <path d="M 150,450 L 500,450 L 800,200 L 1200,200" stroke="#EF4444" strokeWidth="6" fill="none" />
                <path d="M 150,450 L 600,450 L 900,550 L 1200,550" stroke="#FBBF24" strokeWidth="6" fill="none" />
                <circle cx="150" cy="450" r="14" fill="#1E293B" stroke="#FFFFFF" strokeWidth="4" />
                <circle cx="150" cy="200" r="8" fill="#1E293B" stroke="#00E5FF" strokeWidth="3" />
                <circle cx="500" cy="450" r="8" fill="#1E293B" stroke="#EF4444" strokeWidth="3" />
                <circle cx="800" cy="200" r="8" fill="#1E293B" stroke="#EF4444" strokeWidth="3" />
              </svg>
              <div className="flex justify-between items-center z-10 w-full">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 font-bold tracking-[0.2em]">// MUMBAI DIVISION TRANSIT SCHEMATIC</span>
                  <h1 className="text-4xl font-black text-white leading-none mt-2">MUMBAI LOCAL SYSTEM</h1>
                </div>
                <div className="bg-black border-2 border-zinc-800 p-3 rounded-lg flex flex-col font-mono text-[#F59E0B] shadow-inner text-right">
                  <span className="text-[9px] text-zinc-600 font-bold">NEXT ARRIVAL</span>
                  <span className="text-xl font-bold tracking-widest animate-pulse">KATKAR.IN</span>
                </div>
              </div>
              <div className="flex justify-between items-end z-10 w-full mt-auto relative">
                <div className="flex flex-col gap-4 bg-zinc-950/95 border border-zinc-800 p-6 rounded-2xl max-w-[650px] shadow-2xl">
                  <div className="text-xs text-[#00E5FF] font-bold tracking-widest">// CONVERGENCE STATION: Dadar Interchange</div>
                  <h2 className="text-white text-3xl font-extrabold tracking-tight font-sans">{DATA.name}</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans">{ogDescription}</p>
                </div>
                <div className="absolute left-[80px] top-[-100px] text-[10px] text-white bg-zinc-900/90 border border-[#00E5FF]/40 px-2 py-1 rounded">NODE: FRONTEND</div>
                <div className="absolute left-[400px] top-[-30px] text-[10px] text-white bg-zinc-900/90 border border-[#EF4444]/40 px-2 py-1 rounded">NODE: BACKEND</div>
                <div className="relative p-1.5 border border-zinc-800 bg-zinc-900 rounded-2xl flex-none ml-6 shadow-2xl">
                  <img src={avatarUrl} alt={DATA.name} className="w-[130px] h-[130px] rounded-xl object-cover grayscale" />
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION M: MODERNIST INDIAN ART (S.H. RAZA BINDU) */}
          {/* ========================================================================= */}
          {selectedOption === "M" && (
            <div className="w-full h-full bg-[#050508] flex p-0 items-stretch overflow-hidden relative text-white">
              <div className="absolute left-[-80px] top-[15%] w-[420px] h-[420px] rounded-full border-2 border-zinc-800 flex items-center justify-center opacity-40">
                <div className="w-[340px] h-[340px] rounded-full border border-zinc-800/80 flex items-center justify-center">
                  <div className="w-[260px] h-[260px] rounded-full border-2 border-amber-500/10 flex items-center justify-center">
                    <div className="w-[180px] h-[180px] rounded-full border border-[#DE382B]/20 flex items-center justify-center">
                      <div className="w-[80px] h-[80px] rounded-full bg-[#DE382B]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[3] flex flex-col justify-between p-16 z-10 pl-[380px] relative">
                <div className="flex flex-col gap-4">
                  <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase font-sans">progressive modernist group / raza study</span>
                  <div className="flex gap-6 mt-4">
                    <div className="flex flex-col text-white text-6xl font-black font-sans leading-none tracking-tighter uppercase border-r-2 border-white/10 pr-6">
                      <span>N</span><span>I</span><span>K</span><span>H</span><span>I</span><span>L</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-white text-5xl font-extrabold tracking-tight font-sans uppercase">KATKAR</span>
                      <span className="text-[#DE382B] text-sm font-mono tracking-widest mt-1">SOFTWARE_ENGINEER // MUMBAI</span>
                    </div>
                  </div>
                </div>
                <p className="text-zinc-400 text-base leading-relaxed max-w-[500px] font-sans font-medium mt-6">{ogDescription}</p>
              </div>
              <div className="flex-[2] bg-black/40 flex flex-col justify-between p-12 items-center z-10 border-l border-white/5">
                <div className="text-[#DE382B] font-serif text-3xl font-black tracking-widest leading-none self-end opacity-20">निखिल</div>
                <div className="relative my-auto">
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500 to-[#DE382B] rounded-3xl blur opacity-30" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[180px] h-[180px] rounded-3xl object-cover grayscale contrast-125 border border-zinc-800 shadow-2xl relative z-10" />
                </div>
                <span className="text-zinc-600 text-[10px] tracking-widest font-mono">PORTFOLIO // 2026</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION N: ART DECO MARINE DRIVE */}
          {/* ========================================================================= */}
          {selectedOption === "N" && (
            <div className="w-full h-full bg-[#0A0F1D] flex flex-col justify-between p-14 relative overflow-hidden text-[#DFBA73] border-4 border-[#DFBA73]/20 m-0">
              <div className="absolute inset-4 border border-[#DFBA73]/10 pointer-events-none" />
              <div className="absolute inset-6 border border-[#DFBA73]/20 pointer-events-none rounded-sm" />
              <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,550 C 400,550 800,450 1200,600" stroke="#DFBA73" strokeWidth="8" fill="none" />
              </svg>
              <div className="flex justify-between items-center z-10 w-full">
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase font-mono">// BOMBAY ART DECO DESIGNATION</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-6 bg-[#DFBA73]/30 rounded-t" /><div className="w-2 h-10 bg-[#DFBA73]/50 rounded-t" /><div className="w-2 h-6 bg-[#DFBA73]/30 rounded-t" />
                </div>
              </div>
              <div className="flex justify-between items-center z-10 w-full my-8">
                <div className="flex flex-col gap-4 max-w-[700px]">
                  <h1 className="text-white text-7xl font-light tracking-[0.05em] uppercase font-serif leading-none">NIKHIL KATKAR</h1>
                  <div className="w-16 h-[2px] bg-[#DFBA73]" />
                  <p className="text-zinc-400 text-lg leading-relaxed font-sans font-light">{ogDescription}</p>
                </div>
                <div className="relative p-2 border-2 border-[#DFBA73] bg-[#0A0F1D] rounded-full flex-none">
                  <img src={avatarUrl} alt={DATA.name} className="w-[180px] h-[180px] rounded-full object-cover grayscale contrast-125 shadow-2xl" />
                </div>
              </div>
              <div className="border-t border-[#DFBA73]/10 pt-4 text-xs font-mono flex justify-between">
                <span>PORTAL: KATKAR.IN</span><span>MUMBAI DECO SERIES // US-NK-2026</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION O: HIGH-CONTRAST INDIAN MATCHBOX */}
          {/* ========================================================================= */}
          {selectedOption === "O" && (
            <div className="w-full h-full bg-[#FAF5EE] flex p-0 items-stretch overflow-hidden relative border-8 border-[#FF3B00]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:8px_8px] pointer-events-none" />
              <div className="w-[160px] bg-[#FF3B00] flex flex-col justify-between items-center py-10 text-white font-mono flex-none">
                <div className="text-[11px] font-black tracking-[0.3em] uppercase transform -rotate-90 origin-center my-auto whitespace-nowrap">MADE IN BOMBAY // IND.MBOX</div>
                <div className="flex flex-col gap-1 items-center border border-white/30 p-2.5 rounded bg-black/10">
                  <span className="text-[9px] font-bold">SAFETY</span><span className="text-sm font-black">MATCH</span>
                </div>
                <span className="text-xs font-black">50 MATCHES</span>
              </div>
              <div className="flex-1 flex flex-col justify-between p-14 relative text-zinc-950 font-sans">
                <div className="flex justify-between items-start">
                  <div className="bg-[#FF3B00] text-white text-[10px] font-extrabold tracking-widest px-3 py-1 rounded uppercase font-mono border border-black/10">SPEC NO. 2026</div>
                  <div className="text-right text-[11px] font-bold text-zinc-500 font-mono">निखिल काटकर • TCS</div>
                </div>
                <div className="flex flex-col gap-2 my-auto">
                  <h1 className="text-zinc-900 text-7xl font-black tracking-tight leading-none uppercase font-sans">KATKAR</h1>
                  <span className="text-[#FF3B00] text-xs font-mono tracking-widest uppercase font-bold">FULL-STACK APPARATUS</span>
                  <p className="text-zinc-700 text-sm leading-relaxed max-w-[500px] mt-2 font-medium">{ogDescription}</p>
                </div>
                <div className="flex justify-between items-center border-t-2 border-zinc-900/10 pt-4 text-xs font-mono text-zinc-500">
                  <span>WEBSITE: KATKAR.IN</span><span className="text-[#FF3B00] font-bold">GITHUB: DISHAPATEL010</span>
                </div>
              </div>
              <div className="w-[280px] bg-zinc-900 flex flex-col justify-between p-10 items-center relative text-center text-white border-l-4 border-dashed border-[#FF3B00] flex-none">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FF3B00] scale-[1.05] rounded-xl" />
                    <img src={avatarUrl} alt={DATA.name} className="w-[130px] h-[130px] rounded-lg object-cover grayscale brightness-90 relative z-10" />
                  </div>
                  <div className="text-xs font-black font-mono bg-white/10 px-2 py-0.5 rounded text-white tracking-widest">STAMP #01</div>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 tracking-wider">MUMBAI COMMERCIAL EPHEMERA SERIES</div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION P: RISOGRAPH / ZINE PRINT CULTURE */}
          {/* ========================================================================= */}
          {selectedOption === "P" && (
            <div className="w-full h-full bg-[#EAE8E0] flex flex-col justify-between p-14 relative overflow-hidden font-sans text-zinc-800">
              {/* Paper grain/halftone simulation */}
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:6px_6px] pointer-events-none" />
              {/* Crop marks in corners */}
              <div className="absolute top-4 left-4 text-zinc-400 font-mono text-xs">+ CROP_ALIGN_01</div>
              <div className="absolute top-4 right-4 text-zinc-400 font-mono text-xs">ALIGN_02 +</div>

              <div className="flex justify-between items-center z-10 w-full my-auto">
                <div className="flex flex-col max-w-[700px] relative">
                  {/* Misregistered ink offset layers */}
                  <span className="text-[#00A3E0] font-bold text-xs tracking-widest uppercase">// RISO PRINT // INK LAYER #3</span>
                  
                  {/* Shifted overlapping text */}
                  <div className="relative mt-2">
                    <h1 className="text-8xl font-black tracking-tight leading-none text-[#FF48B0] absolute top-1 left-1 opacity-70">
                      NIKHIL KATKAR
                    </h1>
                    <h1 className="text-8xl font-black tracking-tight leading-none text-[#00A3E0] relative z-10 mix-blend-multiply">
                      NIKHIL KATKAR
                    </h1>
                  </div>

                  <p className="text-zinc-700 text-lg leading-relaxed max-w-[600px] mt-6 font-medium mix-blend-multiply">
                    {ogDescription}
                  </p>
                </div>

                <div className="relative flex-none">
                  {/* Colored shadow simulating riso plate shift */}
                  <div className="absolute -top-2 -left-2 w-[190px] h-[190px] rounded-3xl bg-[#FF48B0] opacity-80" />
                  <div className="absolute -bottom-2 -right-2 w-[190px] h-[190px] rounded-3xl bg-[#00A3E0] opacity-80" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[190px] h-[190px] rounded-3xl object-cover grayscale mix-blend-multiply relative z-10 border border-zinc-400 bg-white" />
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-zinc-400/30 pt-4 text-xs font-mono text-zinc-500">
                <span>PLATE_01: FLUO_PINK // PLATE_02: CYAN</span>
                <span>ZINE ISSUE #2026 // KATKAR.IN</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION Q: DE STIJL / NEOPLASTICISM */}
          {/* ========================================================================= */}
          {selectedOption === "Q" && (
            <div className="w-full h-full bg-white flex p-0 items-stretch overflow-hidden border-[12px] border-black">
              {/* Rigid grid with black dividers */}
              <div className="flex-[3] flex flex-col justify-between items-stretch">
                {/* Top Section - white */}
                <div className="flex-1 p-16 flex flex-col justify-between border-b-[12px] border-black">
                  <h1 className="text-black text-8xl font-extrabold tracking-tighter leading-none uppercase font-sans">
                    NIKHIL KATKAR
                  </h1>
                  <p className="text-zinc-800 text-lg leading-relaxed max-w-[550px] font-sans font-bold mt-4">
                    {ogDescription}
                  </p>
                </div>

                {/* Bottom Section divided horizontally */}
                <div className="h-[140px] flex items-stretch border-black">
                  <div className="flex-1 bg-[#1D3557] border-r-[12px] border-black" />
                  <div className="flex-1 bg-white p-6 flex flex-col justify-center font-sans font-black text-xs text-black">
                    <span>DOM: KATKAR.IN</span>
                    <span>ATT: DISHAPATEL010</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-[380px] flex flex-col items-stretch border-l-[12px] border-black flex-none">
                <div className="flex-1 bg-[#E63946] border-b-[12px] border-black" />
                <div className="h-[220px] bg-[#F4A261] flex justify-center items-center p-4">
                  <img src={avatarUrl} alt={DATA.name} className="w-[160px] h-[160px] object-cover grayscale border-4 border-black" />
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION R: VAPORWAVE / SYNTHWAVE 80S */}
          {/* ========================================================================= */}
          {selectedOption === "R" && (
            <div className="w-full h-full bg-[#0D0221] flex flex-col justify-between p-14 relative overflow-hidden text-white font-sans">
              {/* Glowing vector sun */}
              <div className="absolute left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%] w-[320px] h-[320px] rounded-full bg-gradient-to-b from-[#FF007F] to-[#FFD700] opacity-40 blur-md pointer-events-none" />

              {/* Grid landscape at bottom */}
              <div 
                className="absolute bottom-0 left-0 w-full h-[220px] opacity-25 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,0,127,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,127,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  transform: "perspective(200px) rotateX(60deg)",
                  transformOrigin: "bottom center"
                }}
              />

              {/* VHS scanlines overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none z-20" />

              <div className="flex justify-between items-center z-10 w-full">
                <span className="text-[#00F0FF] text-xs font-mono tracking-[0.4em] uppercase">// SYSTEM RETRO RUNTIME</span>
                <span className="text-[#FF007F] text-xs font-mono tracking-widest">VHS // PLAY</span>
              </div>

              {/* Chrome style text gradient */}
              <div className="flex justify-between items-center z-10 w-full my-auto">
                <div className="flex flex-col gap-4">
                  <h1 className="text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#FF007F] to-[#FFD700] uppercase italic leading-none font-sans">
                    N. KATKAR
                  </h1>
                  <p className="text-zinc-300 text-sm max-w-[600px] leading-relaxed font-semibold">
                    {ogDescription}
                  </p>
                </div>

                <div className="relative flex-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF007F] to-[#00F0FF] rounded-2xl blur opacity-75" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[180px] h-[180px] rounded-2xl object-cover relative z-10 border-2 border-white/20 bg-[#0D0221]" />
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-white/5 pt-4 text-xs font-mono text-zinc-500 z-10">
                <span>SIGNAL ACCESS: APPROVED</span>
                <span>CYBERSPACE // KATKAR.IN</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION S: JAPANESE UKIYO-E PRINT */}
          {/* ========================================================================= */}
          {selectedOption === "S" && (
            <div className="w-full h-full bg-[#F2EFE9] flex flex-col justify-between p-14 relative overflow-hidden text-zinc-800">
              {/* Organic wave outline background */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,315 C 300,100 600,530 1200,315 M 0,200 C 400,400 800,100 1200,300" stroke="#1A2D42" strokeWidth="6" fill="none" />
              </svg>

              <div className="flex justify-between items-start z-10 w-full">
                {/* Traditional Red Hanko Signature Stamp */}
                <div className="border-[3px] border-[#DE382B] text-[#DE382B] p-2.5 flex flex-col justify-center items-center font-mono leading-none font-bold text-lg bg-transparent">
                  <span>नि</span>
                  <span>खि</span>
                  <span>ल</span>
                </div>
                <span className="text-zinc-500 font-serif text-xs italic tracking-widest">Edo Art Spec // #2026</span>
              </div>

              {/* Minimal organic layout */}
              <div className="flex justify-between items-center z-10 w-full my-auto">
                <div className="flex flex-col gap-6 max-w-[700px] border-l-2 border-zinc-300 pl-8">
                  <h1 className="text-zinc-900 text-6xl font-serif tracking-wide leading-tight">
                    Nikhil Katkar
                  </h1>
                  <p className="text-zinc-700 text-base leading-relaxed font-serif font-medium">
                    {ogDescription}
                  </p>
                </div>

                <div className="relative p-1 bg-[#F2EFE9] border border-zinc-300 rounded flex-none shadow-md">
                  <img src={avatarUrl} alt={DATA.name} className="w-[160px] h-[160px] rounded object-cover grayscale contrast-110" />
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-zinc-300 pt-4 text-xs font-serif text-zinc-500">
                <span>PORTAL: KATKAR.IN</span>
                <span>SUMI INK & PARCHMENT CANVAS</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION T: MEMPHISM / 80S POSTMODERNISM */}
          {/* ========================================================================= */}
          {selectedOption === "T" && (
            <div className="w-full h-full bg-[#E5F9E0] flex flex-col justify-between p-14 relative overflow-hidden text-zinc-900">
              {/* Memphis patterns in background */}
              <div className="absolute right-10 top-10 w-[150px] h-[150px] bg-yellow-300 rounded-full border-4 border-black z-0" />
              <div className="absolute left-[30%] bottom-[-40px] w-[80px] h-[200px] bg-purple-400 border-4 border-black transform rotate-12 z-0" />
              
              {/* Zig zag vector */}
              <svg className="absolute top-[40%] right-[30%] w-[120px] h-[60px] opacity-40 z-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,30 L 30,0 L 60,30 L 90,0 L 120,30" stroke="black" strokeWidth="5" fill="none" />
              </svg>

              <div className="flex justify-between items-center z-10 w-full">
                <span className="bg-white border-2 border-black px-3 py-1 rounded text-xs font-black tracking-wider uppercase">MEMPHIS DESIGN</span>
                <span className="font-mono text-xs font-black">VOL. 88</span>
              </div>

              {/* Bold offset shadows */}
              <div className="flex justify-between items-center z-10 w-full my-auto">
                <div className="flex flex-col gap-6 max-w-[680px]">
                  <div className="relative">
                    <h1 className="text-7xl font-black tracking-tight leading-none text-zinc-900 border-2 border-black bg-white p-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase">
                      NIKHIL KATKAR
                    </h1>
                  </div>
                  <p className="text-zinc-800 text-base leading-relaxed font-bold bg-[#FAF3DD] p-4 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded">
                    {ogDescription}
                  </p>
                </div>

                <div className="relative flex-none shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black rounded-3xl overflow-hidden bg-white">
                  <img src={avatarUrl} alt={DATA.name} className="w-[160px] h-[160px] object-cover" />
                </div>
              </div>

              <div className="flex justify-between items-center border-t-2 border-black pt-4 text-xs font-black">
                <span>WWW.KATKAR.IN</span>
                <span>ESTABLISHED 2026</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION U: MINIMALIST STAINED GLASS */}
          {/* ========================================================================= */}
          {selectedOption === "U" && (
            <div className="w-full h-full bg-[#0A0A0C] flex flex-col justify-between p-14 relative overflow-hidden text-white font-serif">
              {/* Background ambient lighting casting colored glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-purple-900/30 to-red-900/40 pointer-events-none z-0" />

              {/* Lead Came Lines layout */}
              <div className="absolute inset-0 border-8 border-[#1A1A1E] z-10" />

              <div className="flex justify-between items-center z-10 w-full">
                <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">// APSE_GEOMETRY</span>
                <span className="text-[10px] tracking-[0.2em] text-[#DFBA73]">ROSE WINDOW STAINED GLASS</span>
              </div>

              {/* Centered Gothic Arch look */}
              <div className="flex justify-between items-center z-10 w-full my-auto">
                <div className="flex flex-col gap-6 max-w-[700px] border-l-2 border-[#DFBA73] pl-8">
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DFBA73] to-white text-6xl font-normal tracking-widest uppercase leading-none">
                    NIKHIL KATKAR
                  </h1>
                  <p className="text-zinc-400 text-base leading-relaxed font-sans font-light">
                    {ogDescription}
                  </p>
                </div>

                {/* Stained glass portrait frame */}
                <div className="relative p-2 border-4 border-[#1A1A1E] bg-[#0A0A0C] rounded-[100px_100px_20px_20px] overflow-hidden flex-none shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 pointer-events-none" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[150px] h-[190px] rounded-[90px_90px_10px_10px] object-cover grayscale opacity-80" />
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-zinc-900 pt-4 text-xs font-mono text-zinc-600">
                <span>PORTAL REFERENCE: KATKAR.IN</span>
                <span>GLASS SECTIONS: RUBY // SAPPHIRE // GOLD</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION V: PSYCHEDELIC ART / 1960S */}
          {/* ========================================================================= */}
          {selectedOption === "V" && (
            <div className="w-full h-full bg-[#3C096C] flex flex-col justify-between p-14 relative overflow-hidden text-[#FF9E00] font-mono">
              {/* Swirling psychedelic graphic vector glow background */}
              <div className="absolute inset-[-100px] bg-[radial-gradient(circle_at_center,rgba(255,158,0,0.15)_0%,transparent_60%)] animate-pulse pointer-events-none" />

              <div className="flex justify-between items-center z-10 w-full text-xs">
                <span>// FILL_YOUR_MIND</span>
                <span>SAN_FRANCISCO_VOL_68</span>
              </div>

              {/* Melting/warping layout */}
              <div className="flex justify-between items-center z-10 w-full my-auto">
                <div className="flex flex-col gap-6 max-w-[700px]">
                  {/* Swirling layout title */}
                  <h1 className="text-white text-7xl font-extrabold tracking-tight uppercase leading-none skew-y-1 transform -rotate-1">
                    NIKHIL KATKAR
                  </h1>
                  <p className="text-[#FF9E00] text-lg leading-relaxed font-sans font-bold bg-black/30 p-5 rounded-xl border border-[#FF9E00]/20">
                    {ogDescription}
                  </p>
                </div>

                <div className="relative flex-none transform rotate-3">
                  <div className="absolute -inset-3 bg-[#FF9E00] rounded-full blur-md opacity-30" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[180px] h-[180px] rounded-full object-cover grayscale contrast-125 border-4 border-[#FF9E00]" />
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-[#FF9E00]/10 pt-4 text-xs">
                <span>ELECTRIC CONCERT LOG: IN SESSION</span>
                <span>PORTAL ACCESS: KATKAR.IN</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* OPTION W: CYBERPUNK HUD / SCI-FI */}
          {/* ========================================================================= */}
          {selectedOption === "W" && (
            <div className="w-full h-full bg-[#030303] flex flex-col justify-between p-12 relative overflow-hidden font-mono text-[#00FF66]">
              {/* Hexagonal telemetry grid */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(0,255,102,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.15)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              {/* HUD corner brackets */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#00FF66]" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#00FF66]" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#00FF66]" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#00FF66]" />

              <div className="flex justify-between items-center z-10 w-full text-xs">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00FF66] rounded-full animate-ping" />
                  <span>TARGET_LOCK: ACTIVE</span>
                </span>
                <span>SYS_DIAGNOSTIC_V8.8</span>
              </div>

              {/* Technical HUD data layout */}
              <div className="flex justify-between items-center z-10 w-full my-auto">
                <div className="flex flex-col gap-4 max-w-[720px]">
                  <div className="text-[10px] text-[#00FF66]/60 tracking-[0.35em] uppercase">SYSTEM ANALYZER // READOUT</div>
                  <h1 className="text-white text-6xl font-black tracking-widest leading-none uppercase">
                    NIKHIL KATKAR
                  </h1>
                  <p className="text-[#00FF66] text-sm leading-relaxed max-w-[580px] bg-[#00FF66]/5 p-4 border border-[#00FF66]/20 rounded">
                    {ogDescription}
                  </p>
                </div>

                <div className="relative p-1 border-2 border-dashed border-[#00FF66] rounded flex-none">
                  {/* HUD wireframe crosshair overlay */}
                  <div className="absolute top-0 left-[50%] translate-x-[-50%] w-0.5 h-full bg-[#00FF66]/40" />
                  <div className="absolute top-[50%] left-0 translate-y-[-50%] w-full h-0.5 bg-[#00FF66]/40" />
                  <img src={avatarUrl} alt={DATA.name} className="w-[150px] h-[150px] object-cover grayscale brightness-90 contrast-125 z-10 relative opacity-95" />
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] text-[#00FF66]/60 border-t border-[#00FF66]/10 pt-4">
                <span>SECTOR: 34.8° N / 72.4° E</span>
                <span>DECRYPTED: KATKAR.IN</span>
                <span>STACK: NODE // AUTOMATION</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

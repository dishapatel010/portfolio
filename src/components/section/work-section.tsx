/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 border border-border/40 rounded-md bg-muted flex-none" />
    );
  }

  const isTCS = src.includes("TCS-logo");
  const isDark = mounted && resolvedTheme === "dark";

  // Use the official white logo in dark mode
  const finalSrc = (isTCS && isDark)
    ? "https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/media-kit/TCS-logo-white.svg"
    : src;

  return (
    <img
      src={finalSrc}
      alt={alt}
      className="size-8 md:size-10 border border-border/40 rounded-md overflow-hidden object-contain flex-none bg-background"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <div className="w-full flex flex-col">
      {DATA.work.map((work, index) => (
        <div
          key={work.company}
          className="flex gap-4 md:gap-6"
        >
          <div className="flex flex-col items-center">
            <LogoImage src={work.logoUrl} alt={work.company} />
            {index < DATA.work.length - 1 && (
              <div className="w-px bg-border flex-1 min-h-[20px] mt-2" />
            )}
          </div>
          <div className="flex-1 pb-6 last:pb-0 grid gap-2">
            <div className="flex items-start justify-between w-full text-left gap-4">
              <div className="flex flex-col gap-0.5">
                <div className="font-semibold leading-none">
                  {work.company}
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {work.title}
                </div>
              </div>
              <div className="text-xs tabular-nums text-muted-foreground text-right flex-none pt-0.5">
                {work.start} - {work.end ?? "Present"}
              </div>
            </div>
            {work.description && (
              <div className="text-xs sm:text-sm text-muted-foreground">
                {work.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  const isTCS = src.includes("TCS-logo");

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none",
        isTCS && "dark:invert"
      )}
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <div className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <div
          key={work.company}
          className="w-full grid gap-2"
        >
          <div className="flex items-center gap-x-3 justify-between w-full text-left">
            <div className="flex items-center gap-x-3 flex-1 min-w-0">
              <LogoImage src={work.logoUrl} alt={work.company} />
              <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                <div className="font-semibold leading-none">
                  {work.company}
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {work.title}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
              <span>
                {work.start} - {work.end ?? "Present"}
              </span>
            </div>
          </div>
          {work.description && (
            <div className="ml-11 md:ml-13 text-xs sm:text-sm text-muted-foreground">
              {work.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


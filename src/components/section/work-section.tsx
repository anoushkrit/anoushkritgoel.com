/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <div className="w-full flex flex-col gap-y-8 max-w-[800px] mx-auto">
      {DATA.work.map((work) => (
        <div
          key={work.company}
          className="w-full flex gap-x-4 items-start group"
        >
          <LogoImage src={work.logoUrl} alt={work.company} />
          <div className="flex-1 flex flex-col gap-y-1">
            <div className="flex items-center justify-between w-full text-left">
              <div className="font-semibold text-base leading-none text-foreground group-hover:text-primary transition-colors">
                {work.company}
              </div>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground">
                {work.start} - {work.end ?? "Present"}
              </div>
            </div>
            
            <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {work.title}
            </div>

            <p className="text-sm text-muted-foreground/90 leading-relaxed mt-1 font-sans">
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

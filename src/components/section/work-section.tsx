"use client";

import { DATA } from "@/data/resume";
import { LogoImage } from "@/components/ui/logo-image";
import { Badge } from "@/components/ui/badge";

export default function WorkSection() {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6">
      {DATA.work.map((work) => {
        const isCurrent = work.end === "Present" || work.end?.toLowerCase() === "current";

        return (
          <div
            key={work.company + work.title}
            className="w-full p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group flex flex-col sm:flex-row items-start gap-4"
          >
            <LogoImage src={work.logoUrl} alt={work.company} className="size-12" />

            <div className="flex-1 flex flex-col gap-1.5 min-w-0 w-full">
              <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-cyan-400 transition-colors">
                    {work.company}
                  </h3>
                  {isCurrent && (
                    <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold py-0.5 px-2">
                      Current Role
                    </Badge>
                  )}
                  {work.location && (
                    <span className="text-xs text-muted-foreground/80 font-mono">
                      • {work.location}
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-cyan-400/90 bg-cyan-500/5 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                  {work.start} — {work.end ?? "Present"}
                </div>
              </div>

              <div className="text-sm font-semibold text-indigo-400">
                {work.title}
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground/95 leading-relaxed mt-1 font-sans">
                {work.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

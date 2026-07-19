"use client";

import { DATA } from "@/data/resume";
import { LogoImage } from "@/components/ui/logo-image";
import { Trophy } from "lucide-react";

export default function AwardsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6 w-full">
      <div className="flex flex-col gap-y-4 items-center justify-center text-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="border border-border/80 bg-card z-10 rounded-full px-4 py-1 flex items-center gap-2 shadow-xs">
            <Trophy className="size-4 text-amber-400" />
            <span className="text-foreground text-xs font-semibold uppercase tracking-wider">
              Honors & Recognition
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Awards & Incubation Grants
          </h2>
          <p className="text-muted-foreground md:text-base text-balance max-w-2xl">
            National incubation grants, fellowships, and startup recognitions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full">
        {DATA.awards.map((award) => (
          <div
            key={award.title}
            className="w-full p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 group flex items-start gap-4"
          >
            <LogoImage alt={award.issuer} type="award" className="size-11" />
            <div className="flex-1 flex flex-col gap-1 min-w-0">
              <div className="flex items-center justify-between gap-2 w-full">
                <h3 className="font-bold text-base text-foreground group-hover:text-amber-400 transition-colors">
                  {award.title}
                </h3>
                <span className="text-xs font-mono text-amber-400/90 flex-none">
                  {award.date}
                </span>
              </div>
              <div className="text-xs font-semibold text-emerald-400">
                {award.issuer}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed mt-1 font-sans">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

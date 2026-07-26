"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BookOpen, Building2, Cpu, Hospital, TrendingUp } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  subtext: string;
  icon: React.ElementType;
  badge?: string;
}

const STATS: StatItem[] = [
  {
    label: "Peer-Reviewed Papers",
    value: "5 Papers",
    subtext: "2x ICPR '24, 1x ISBI '25, 2x ISBI '26",
    icon: BookOpen,
    badge: "SOTA Outperformance",
  },
  {
    label: "Deep Tech & Research",
    value: "7+ Years",
    subtext: "Spatial AI, Point Clouds & Neuro",
    icon: Cpu,
    badge: "IIT Mandi M.Tech",
  },
  {
    label: "Industrial AI & OCR",
    value: "35% TAT",
    subtext: "Outperformed DocAI & Gemini Pro",
    icon: TrendingUp,
    badge: "Attentive.AI",
  },
  {
    label: "Clinical AI Deployment",
    value: "SlicerTracto",
    subtext: "Deployed at PGI Chandigarh",
    icon: Hospital,
    badge: "PGI Chandigarh",
  },
  {
    label: "Entrepreneurship",
    value: "1x Founder",
    subtext: "Tensr.AI (SIIC IITK & HTIC IITM)",
    icon: Building2,
    badge: "Incubated",
  },
];

export default function ExecutiveStatsBar() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <BlurFade key={stat.label} delay={0.05 * idx}>
              <div className="group relative p-4 rounded-xl border border-border/80 bg-card/60 backdrop-blur-xl hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <Icon className="size-4" />
                  </div>
                  {stat.badge && (
                    <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                      {stat.badge}
                    </span>
                  )}
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight block">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground block mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] font-mono text-red-400/90 block mt-1">
                    {stat.subtext}
                  </span>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}

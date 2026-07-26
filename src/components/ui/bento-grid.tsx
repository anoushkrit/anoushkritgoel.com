"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glow?: "red" | "cyan" | "indigo" | "emerald" | "amber" | "none";
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({ children, className, glow = "none" }: BentoCardProps) {
  const glowStyles = {
    red: "hover:border-rose-500/30 hover:shadow-[0_0_20px_-5px_rgba(225,29,72,0.15)]",
    cyan: "hover:border-rose-500/30 hover:shadow-[0_0_20px_-5px_rgba(225,29,72,0.15)]",
    indigo: "hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.25)]",
    emerald: "hover:border-emerald-500/40 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.25)]",
    amber: "hover:border-amber-500/40 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.25)]",
    none: "hover:border-primary/30 hover:shadow-md",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 backdrop-blur-xl transition-all duration-300",
        glowStyles[glow],
        className
      )}
    >
      {children}
    </div>
  );
}

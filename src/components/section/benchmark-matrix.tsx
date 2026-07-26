"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { CheckCircle2, Flame, ShieldAlert, Trophy } from "lucide-react";

interface BenchmarkRow {
  domain: string;
  myModel: string;
  legacyBenchmark: string;
  result: string;
  gainMetric: string;
  deployment: string;
}

const BENCHMARKS: BenchmarkRow[] = [
  {
    domain: "3D Diffusion MRI Tractography",
    myModel: "TractoGPT & TrackletGPT (Point Cloud Transformer)",
    legacyBenchmark: "Harvard Medical School (TractCloud) & SCIL Canada (FIESTA)",
    result: "Outperformed SOTA Benchmark",
    gainMetric: "+14.2% Tract Segmentation F1",
    deployment: "Published (ICPR'24, ISBI'25, ISBI'26)",
  },
  {
    domain: "Document Plan Callout Extraction",
    myModel: "ArchGlyphOCR (Region Proposal + Dense Vector OCR)",
    legacyBenchmark: "Google DocAI & Gemini 3.1 Pro API",
    result: "Outperformed SOTA Commercial Models",
    gainMetric: "Higher Callout Accuracy @ 0 API Cost",
    deployment: "Production (Attentive.AI)",
  },
  {
    domain: "Vector Path Symbol Detection",
    myModel: "DEIMv2 (DINOv3 Backbone Tokenization)",
    legacyBenchmark: "Standard Image-based Raster Detectors",
    result: "SOTA Macro-F1",
    gainMetric: "+7% Macro-F1 & 35% TAT Reduction",
    deployment: "Production (Attentive.AI)",
  },
  {
    domain: "Clinical Neuro-Radiology Workflow",
    myModel: "SlicerTracto (3D Slicer Extension)",
    legacyBenchmark: "Manual Multi-Tool Scripts & Slicer Default",
    result: "Full Automated Pipeline",
    gainMetric: "Zero-Click End-to-End Tracking",
    deployment: "Hospital Deployed (PGI Chandigarh)",
  },
];

export default function BenchmarkMatrix() {
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="size-5 text-red-500" />
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
              Proven SOTA Outperformance & Benchmarks
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Empirical empirical results across 3D Spatial AI, Neuroimaging, and High-Throughput Vision OCR.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs font-bold">
          <Flame className="size-3.5" />
          <span>Empirical Proof</span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-border/70 bg-muted/40 font-mono uppercase text-[10px] text-muted-foreground tracking-wider">
              <th className="py-3.5 px-4 font-bold">Domain & Task</th>
              <th className="py-3.5 px-4 font-bold text-red-400">Architectural Solution</th>
              <th className="py-3.5 px-4 font-bold">Baseline Benchmark</th>
              <th className="py-3.5 px-4 font-bold text-red-400">Impact & Gains</th>
              <th className="py-3.5 px-4 font-bold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {BENCHMARKS.map((row, idx) => (
              <tr
                key={row.domain}
                className="hover:bg-red-500/5 transition-colors group"
              >
                <td className="py-4 px-4 font-semibold text-foreground">
                  {row.domain}
                </td>
                <td className="py-4 px-4 font-bold text-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-red-500 shrink-0" />
                    <span>{row.myModel}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-muted-foreground font-mono text-xs">
                  {row.legacyBenchmark}
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-red-500/10 border border-red-500/30 text-red-300 font-mono text-xs font-bold">
                    {row.gainMetric}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold uppercase">
                    {row.deployment}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ArrowUpRight, Box, Brain, Building2, ChevronRight, Cpu, Layers, Sparkles, Terminal, FileCode2 } from "lucide-react";
import Link from "next/link";

interface ExpertisePillar {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accentColor: string;
  highlightBadge: string;
  metrics: string[];
  description: string;
  highlights: string[];
  techStack: string[];
  featuredLink?: { label: string; href: string };
}

const PILLARS: ExpertisePillar[] = [
  {
    id: "spatial-ai",
    title: "3D Spatial AI & Point Cloud Transformers",
    subtitle: "SOTA Sequence & Geometry Modeling",
    icon: Box,
    accentColor: "border-red-500/40 text-red-400 bg-red-500/10",
    highlightBadge: "SOTA Research",
    metrics: ["3D Point Cloud Transformers", "PointGPT & Dual-Masking", "3D Streamlines"],
    description:
      "Architecting next-generation 3D spatial representations. Expert in 3D point cloud tokenization, sequence transformers for diffusion MRI fiber streamlines, and interactive 3D rendering engines (Open3D, Fury.gl, PyTorch3D).",
    highlights: [
      "Outperformed Harvard Medical School (TractCloud) & SCIL Canada (FIESTA) on diffusion MRI tractography.",
      "Novel dual-masking pretraining and multi-embedding representation learning for 3D streamlines.",
      "Published at ICPR 2024 (TractoEmbed, TractRL-former) & ISBI 2026 (TrackletGPT).",
    ],
    techStack: ["PyTorch3D", "PointGPT", "Open3D", "Fury.gl", "ONNX", "Protobuf"],
    featuredLink: { label: "View ICPR / ISBI Papers", href: "#achievements" },
  },
  {
    id: "medical-ai",
    title: "Medical AI & Clinical Neuro-Radiology",
    subtitle: "Hospital-Deployed Neuroimaging Pipelines",
    icon: Brain,
    accentColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    highlightBadge: "Hospital Deployed",
    metrics: ["PGI Chandigarh Deployed", "3D Slicer Extension", "White Matter Tractography"],
    description:
      "Bridging deep learning research and clinical utility. Developed and deployed open-source medical software extensions directly into clinical neuro-radiology workflows for non-invasive brain surgery planning.",
    highlights: [
      "Created SlicerTracto: Open-source 3D Slicer extension for automated brain MRI tracking & reconstruction.",
      "Deployed at Post Graduate Institute of Medical Education and Research (PGIMER Chandigarh).",
      "Accelerated diffusion MRI tract segmentation from hours of manual tracing to seconds.",
    ],
    techStack: ["3D Slicer", "VTK/ITK", "dMRI", "SimpleITK", "Dipy", "PyTorch"],
    featuredLink: { label: "Explore SlicerTracto", href: "#software-tools" },
  },
  {
    id: "vector-ocr",
    title: "Industrial Vector AI & Document Geometry OCR",
    subtitle: "High-Throughput Architectural Plan Parsing",
    icon: FileCode2,
    accentColor: "border-red-500/40 text-red-400 bg-red-500/10",
    highlightBadge: "Commercial Production",
    metrics: ["ArchGlyphOCR", "DEIMv2 (DINOv3 Backbone)", "35% TAT Reduction"],
    description:
      "Engineering high-performance industrial computer vision pipelines. Trained zero-shot vector path segmentors and dense document OCR models that beat commercial cloud APIs at scale.",
    highlights: [
      "Architected ArchGlyphOCR: Dense plan text-region proposal pipeline beating Google DocAI & Gemini 3.1 Pro.",
      "Trained DEIMv2 for multi-class vector path segmentation and geometry dimension estimation.",
      "Reduced total annotation time (TAT) for commercial HVAC blue-print plans to 35% of baseline.",
    ],
    techStack: ["DEIMv2", "DINOv3", "PDF → SVG Pathing", "TFLite", "ONNX Runtime", "Python/C++"],
    featuredLink: { label: "View Attentive.AI Impact", href: "#work" },
  },
  {
    id: "entrepreneurship",
    title: "Deep Tech Entrepreneurship & Reinforcement Learning",
    subtitle: "Startup Leadership & Incubated Ventures",
    icon: Building2,
    accentColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    highlightBadge: "1x Entrepreneur",
    metrics: ["Tensr.AI Founder", "SIIC IIT Kanpur Incubated", "HTIC IIT Madras Incubated"],
    description:
      "7+ years of experience leading cross-functional deep tech engineering teams, raising startup incubation grants, and building production reinforcement learning environments.",
    highlights: [
      "Founded Tensr.AI: Incubated at SIIC IIT Kanpur, HTIC IIT Madras, and IIT Mandi Catalyst.",
      "Developed custom RL agent environments (Gymnasium) for procedural spatial control and games.",
      "Track record of taking complex deep learning models from math formulation to production deployment.",
    ],
    techStack: ["Reinforcement Learning", "Gymnasium", "System Architecture", "Leadership", "PyTorch"],
    featuredLink: { label: "View Startup Journey", href: "#work" },
  },
];

export default function ExpertiseBentoMatrix() {
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold">
          <Sparkles className="size-3.5" />
          <span>Core Domain Mastery</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Areas of Deep Expertise & Technological Mastery
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-3xl">
          A high-density breakdown of my technical domain authority across 3D Spatial AI, Clinical Radiology Tools, Commercial Vision OCR, and Startup Leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <BlurFade key={pillar.id} delay={0.08 * idx}>
              <div className="bento-card group h-full flex flex-col justify-between space-y-4 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute -top-12 -right-12 size-36 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-all pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${pillar.accentColor} transition-transform group-hover:scale-105`}>
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400">
                      {pillar.highlightBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-foreground group-hover:text-red-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-mono text-red-400 font-semibold block mt-0.5">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                        <ChevronRight className="size-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Stack & Action */}
                <div className="pt-3 border-t border-border/50 space-y-3 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md border border-border/80 bg-background/80 text-muted-foreground text-[10px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {pillar.featuredLink && (
                    <Link
                      href={pillar.featuredLink.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-red-400 hover:text-red-300 hover:underline transition-colors pt-1"
                    >
                      <span>{pillar.featuredLink.label}</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}

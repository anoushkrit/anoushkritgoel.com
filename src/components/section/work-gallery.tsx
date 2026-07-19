/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { Maximize2, X } from "lucide-react";

interface GalleryItem {
  url: string;
  org: string;
  title: string;
  category: string;
  glow: "cyan" | "indigo" | "emerald" | "amber";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    url: "https://brainsuite.org/wp-content/uploads/2015/02/tracts2.png",
    org: "IIT Mandi",
    title: "3D Brain Tractography & Point Clouds",
    category: "3D Spatial AI",
    glow: "cyan",
  },
  {
    url: "https://assets.cadbull.com/product_img/original/2024/HAVCequipmentandductingsectiondetailsinAutoCADdwgfileWedOct2022093132.jpg",
    org: "Attentive.AI",
    title: "HVAC Vector Path & Geometry Estimation",
    category: "Vector AI",
    glow: "cyan",
  },
  {
    url: "https://prod-images-static.radiopaedia.org/images/45173030/101e4b11d9d079646ebea213875a48_gallery.jpeg",
    org: "xtLytics LLC",
    title: "CADtnet Ultrasound Breast Cancer Triage",
    category: "Medical AI",
    glow: "emerald",
  },
  {
    url: "https://bimkit.eu/wp-content/uploads/2023/08/Texterkennung-OCR-in-plaenen.webp",
    org: "Attentive.AI",
    title: "ArchGlyphOCR Blueprint Plan Parsing",
    category: "Document OCR",
    glow: "indigo",
  },
  {
    url: "https://i0.wp.com/livefiredev.com/wp-content/uploads/2023/04/ocr_table_tool_1_contours.jpg?ssl=1",
    org: "xtLytics LLC",
    title: "Invoice OCR Table Contouring",
    category: "Document Layout",
    glow: "indigo",
  },
  {
    url: "https://mlr.cdn-apple.com/media/fig1_84b4ceb42b.png",
    org: "IIT Mandi",
    title: "PointGPT Streamline Foundation Models",
    category: "3D Spatial AI",
    glow: "amber",
  },
];

export default function WorkGallery() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <div className="w-full mt-6 flex flex-col gap-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
            Research & Industry AI Showcase
          </span>
          <Badge variant="outline" className="text-[10px] font-mono border-cyan-500/30 text-cyan-400">
            6 Core Domains
          </Badge>
        </div>
        <div className="flex-1 h-px bg-border/50 hidden sm:block" />
      </div>

      <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GALLERY_ITEMS.map((item, idx) => (
          <BlurFade key={idx} delay={0.08 + idx * 0.04} className="h-full">
            <BentoCard
              glow={item.glow}
              className="p-0 overflow-hidden group cursor-pointer aspect-video h-full"
            >
              <div
                className="relative w-full h-full"
                onClick={() => setActiveImage(item)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* High Contrast Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-4 flex flex-col justify-between transition-opacity duration-300">
                  <div className="flex justify-between items-start">
                    <Badge className="text-[10px] font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {item.org}
                    </Badge>
                    <div className="p-1 rounded-full bg-black/50 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Maximize2 className="size-3.5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                      {item.category}
                    </span>
                    <h4 className="text-white text-xs sm:text-sm font-semibold leading-snug mt-0.5 line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            </BentoCard>
          </BlurFade>
        ))}
      </BentoGrid>

      {/* Lightbox Zoom Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-border/80 rounded-2xl p-4 overflow-hidden shadow-2xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-border/60 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400">{activeImage.category}</span>
                <h3 className="text-base sm:text-lg font-bold text-foreground">{activeImage.title}</h3>
                <p className="text-xs text-muted-foreground">{activeImage.org}</p>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-hidden rounded-xl border border-border/50 bg-black">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

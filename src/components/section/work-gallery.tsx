/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import BlurFade from "@/components/magicui/blur-fade";

interface GalleryItem {
  url: string;
  title: string;
  subtitle: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    url: "https://brainsuite.org/wp-content/uploads/2015/02/tracts2.png",
    title: "IIT Mandi",
    subtitle: "Research Reference",
  },
  {
    url: "https://assets.cadbull.com/product_img/original/2024/HAVCequipmentandductingsectiondetailsinAutoCADdwgfileWedOct2022093132.jpg",
    title: "Attentive AI",
    subtitle: "Work Reference",
  },
  {
    url: "https://prod-images-static.radiopaedia.org/images/45173030/101e4b11d9d079646ebea213875a48_gallery.jpeg",
    title: "xtLytics LLC",
    subtitle: "Work Reference",
  },
  {
    url: "https://bimkit.eu/wp-content/uploads/2023/08/Texterkennung-OCR-in-plaenen.webp",
    title: "Attentive.ai",
    subtitle: "OCR Work Reference",
  },
  {
    url: "https://i0.wp.com/livefiredev.com/wp-content/uploads/2023/04/ocr_table_tool_1_contours.jpg?ssl=1",
    title: "xtLytics LLC",
    subtitle: "Work Reference",
  },
  {
    url: "https://mlr.cdn-apple.com/media/fig1_84b4ceb42b.png",
    title: "IIT Mandi",
    subtitle: "3D Point Cloud Research Reference",
  },
];

export default function WorkGallery() {
  return (
    <div className="w-full mt-4 flex flex-col gap-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
          Core AI Verticals & Research Areas
        </span>
        <div className="flex-1 h-px bg-border/60" />
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 w-full">
        {GALLERY_ITEMS.map((item, idx) => (
          <BlurFade key={idx} delay={0.1 + idx * 0.05} className="h-full">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border/80 bg-muted group shadow-xs hover:shadow-md hover:border-border transition-all duration-300">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <h4 className="text-white text-xs md:text-sm font-semibold tracking-tight leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-zinc-300 mt-0.5 leading-none">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

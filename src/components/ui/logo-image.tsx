/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Building2, GraduationCap, Award } from "lucide-react";

interface LogoImageProps {
  src?: string;
  alt: string;
  domain?: string;
  type?: "company" | "education" | "award";
  className?: string;
}

export function LogoImage({
  src,
  alt,
  domain,
  type = "company",
  className,
}: LogoImageProps) {
  const [imageError, setImageError] = useState(false);

  // Auto-resolve domain if not explicitly passed
  let resolvedDomain = domain || "";
  if (!resolvedDomain && alt) {
    const lower = alt.toLowerCase();
    if (lower.includes("attentive")) resolvedDomain = "attentive.ai";
    else if (lower.includes("jio") || lower.includes("reliance")) resolvedDomain = "jio.com";
    else if (lower.includes("gamezop")) resolvedDomain = "gamezop.com";
    else if (lower.includes("tensr")) resolvedDomain = "tensr.ai";
    else if (lower.includes("mandi")) resolvedDomain = "iitmandi.ac.in";
    else if (lower.includes("madras")) resolvedDomain = "iitm.ac.in";
    else if (lower.includes("kanpur")) resolvedDomain = "iitk.ac.in";
    else if (lower.includes("shiv nadar") || lower.includes("snu")) resolvedDomain = "snu.edu.in";
    else if (lower.includes("fedex")) resolvedDomain = "fedex.com";
    else if (lower.includes("statusneo")) resolvedDomain = "statusneo.com";
    else if (lower.includes("xtlytics")) resolvedDomain = "xtlytics.com";
    else if (lower.includes("dpiit") || lower.includes("government")) resolvedDomain = "india.gov.in";
  }

  const finalSrc =
    src || (resolvedDomain ? `https://www.google.com/s2/favicons?sz=128&domain=${resolvedDomain}` : "");

  if (!finalSrc || imageError) {
    const IconComponent =
      type === "education" ? GraduationCap : type === "award" ? Award : Building2;
    return (
      <div
        className={cn(
          "size-10 rounded-xl border border-border bg-muted/50 p-2 flex items-center justify-center flex-none shadow-xs text-muted-foreground",
          className
        )}
      >
        <IconComponent className="size-5" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "size-10 rounded-xl border border-border/80 bg-card p-1.5 shadow-xs ring-1 ring-border/30 overflow-hidden flex items-center justify-center flex-none transition-transform duration-200 group-hover:scale-105",
        className
      )}
    >
      <img
        src={finalSrc}
        alt={alt}
        className="size-full object-contain"
        onError={() => setImageError(true)}
        loading="lazy"
      />
    </div>
  );
}

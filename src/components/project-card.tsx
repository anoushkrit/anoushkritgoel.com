/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Copy, Check, CodeXml } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  bibtex?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  bibtex,
  links,
  className,
}: Props) {
  const hasMedia = !!(video || image);
  const [copied, setCopied] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  const defaultBibtex = `@inproceedings{goel${dates.toLowerCase().replace(/[^a-z0-9]/g, "")},
  title={${title}},
  author={Goel, Anoushkrit and others},
  booktitle={${dates}},
  year={2025}
}`;

  const finalBibtex = bibtex || defaultBibtex;

  const handleCopyBibtex = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(finalBibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isRankA = description.includes("Rank: A") || description.includes("Rank A");

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border/80 bg-card/70 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group",
        className
      )}
    >
      {hasMedia && (
        <div className="relative shrink-0 overflow-hidden">
          <Link
            href={href || "#"}
            className="block"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <ProjectImage src={image!} alt={title} />
            )}
          </Link>
          {links && links.length > 0 && (
            <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 z-10">
              {links.map((linkItem, idx) => (
                <Link
                  href={linkItem.href}
                  key={idx}
                  target={linkItem.href.startsWith("/") ? "_self" : "_blank"}
                  rel={linkItem.href.startsWith("/") ? undefined : "noopener noreferrer"}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge
                    className="flex items-center gap-1.5 text-xs bg-black/80 text-white backdrop-blur-md hover:bg-black"
                    variant="default"
                  >
                    {linkItem.icon}
                    {linkItem.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Link href={href || "#"} className="hover:underline">
                <h3 className="font-bold text-base sm:text-lg leading-snug text-foreground group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>{title}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
              </Link>
              {isRankA && (
                <Badge className="bg-amber-500/10 text-amber-500 border border-amber-500/30 text-[10px] font-semibold py-0 px-2">
                  Rank A
                </Badge>
              )}
            </div>
            <time className="text-xs font-mono text-cyan-400">{dates}</time>
          </div>

          <div className="flex items-center gap-1.5 flex-none">
            {!hasMedia && links && links.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {links.map((linkItem, idx) => (
                  <Link
                    href={linkItem.href}
                    key={idx}
                    target={linkItem.href.startsWith("/") ? "_self" : "_blank"}
                    rel={linkItem.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Badge
                      className="flex items-center gap-1 text-[10px] font-semibold bg-secondary text-secondary-foreground hover:bg-muted py-0.5 px-2 rounded-md border border-border/60"
                    >
                      {linkItem.icon}
                      {linkItem.type}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}

            {bibtex && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBibtex(!showBibtex);
                }}
                title="View BibTeX Citation"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1 font-mono text-xs border border-border/60"
              >
                <CodeXml className="size-4 text-cyan-400" />
                <span className="text-[10px] font-semibold text-muted-foreground">BibTeX</span>
              </button>
            )}
          </div>
        </div>

        <div className="text-xs sm:text-sm flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground/90 dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>

        {/* BibTeX Expandable Drawer */}
        {showBibtex && (
          <div className="relative mt-2 p-3 bg-muted/60 dark:bg-muted/30 border border-border/80 rounded-xl font-mono text-[11px] text-muted-foreground overflow-x-auto">
            <button
              onClick={handleCopyBibtex}
              className="absolute top-2 right-2 p-1 rounded-md bg-background border border-border hover:bg-muted text-foreground flex items-center gap-1 text-[10px]"
            >
              {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
              {copied ? "Copied" : "Copy"}
            </button>
            <pre className="whitespace-pre-wrap">{finalBibtex}</pre>
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/50">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[10px] font-medium border border-border/60 h-5 w-fit px-2 bg-muted/40 text-muted-foreground"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

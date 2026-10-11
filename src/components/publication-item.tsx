"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronDown, Copy, Check, CodeXml } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

interface Props {
  title: string;
  authors?: string;
  venue?: string;
  year?: string;
  dates: string;
  description: string;
  bibtex?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function PublicationItem({
  title,
  authors,
  venue,
  year,
  dates,
  description,
  bibtex,
  links,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const defaultBibtex = `@inproceedings{goel${dates.toLowerCase().replace(/[^a-z0-9]/g, "")},
  title={${title}},
  author={Goel, Anoushkrit and others},
  booktitle={${dates}},
  year={${year ?? "2025"}}
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
        "border border-border/80 bg-card/70 backdrop-blur-xl rounded-xl overflow-hidden hover:border-rose-500/30 transition-colors duration-300",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start sm:items-center justify-between gap-3 p-4 sm:p-5 text-left"
      >
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-sm sm:text-base leading-snug text-foreground">
              {title}
            </h3>
            {isRankA && (
              <Badge className="bg-amber-500/10 text-amber-500 border border-amber-500/30 text-[10px] font-semibold py-0 px-2">
                Rank A
              </Badge>
            )}
          </div>
          {authors && (
            <p className="text-xs text-muted-foreground/90 truncate">{authors}</p>
          )}
          <div className="flex items-center gap-2 flex-wrap text-xs font-mono text-rose-400/90">
            {year && <span>{year}</span>}
            {venue && (
              <>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-muted-foreground">{venue}</span>
              </>
            )}
            <span className="text-muted-foreground/40">·</span>
            <span className="text-muted-foreground">{dates}</span>
          </div>
        </div>

        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform duration-200 mt-1",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 flex flex-col gap-3 border-t border-border/50 pt-3">
          <div className="text-xs sm:text-sm prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground/90 dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {links &&
              links.map((linkItem, idx) => (
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

            {bibtex && (
              <button
                onClick={handleCopyBibtex}
                title="Copy BibTeX Citation"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-1 font-mono text-xs border border-border/60"
              >
                {copied ? (
                  <Check className="size-3.5 text-emerald-400" />
                ) : (
                  <CodeXml className="size-3.5 text-rose-400" />
                )}
                <span className="text-[10px] font-semibold text-muted-foreground">
                  {copied ? "Copied" : "BibTeX"}
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

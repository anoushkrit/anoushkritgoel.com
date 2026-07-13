/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ issuer }: { issuer: string }) {
  const [imageError, setImageError] = useState(false);

  // Map issuer name to a domain for favicons
  let domain = "";
  const lowerIssuer = issuer.toLowerCase();
  if (lowerIssuer.includes("mandi")) {
    domain = "iitmandi.ac.in";
  } else if (lowerIssuer.includes("madras")) {
    domain = "iitm.ac.in";
  } else if (lowerIssuer.includes("kanpur")) {
    domain = "iitk.ac.in";
  } else if (lowerIssuer.includes("dpiit") || lowerIssuer.includes("government")) {
    domain = "india.gov.in";
  }

  const logoSrc = domain ? `https://www.google.com/s2/favicons?sz=128&domain=${domain}` : "";

  if (!logoSrc || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex items-center justify-center flex-none">
        <Trophy className="size-4 text-muted-foreground" />
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt={issuer}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
      onError={() => setImageError(true)}
    />
  );
}

export default function AwardsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6 w-full">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">Honors & Awards</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Awards & Incubation</h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            Incubation support and fellowship recognitions from government bodies and premier institutes.
          </p>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full grid gap-4 max-w-[800px] mx-auto">
        {DATA.awards.map((award) => (
          <AccordionItem
            key={award.title}
            value={award.title}
            className="w-full border-b-0 grid gap-2"
          >
            <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
              <div className="flex items-center gap-x-3 justify-between w-full text-left">
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  <LogoImage issuer={award.issuer} />
                  <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                    <div className="font-semibold leading-none flex items-center gap-2 text-foreground">
                      {award.title}
                      <span className="relative inline-flex items-center w-3.5 h-3.5">
                        <ChevronRight
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                            "translate-x-0 opacity-0",
                            "group-hover:translate-x-1 group-hover:opacity-100",
                            "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0 rotate-0",
                            "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                          )}
                        />
                      </span>
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {award.issuer}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>{award.date}</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {award.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

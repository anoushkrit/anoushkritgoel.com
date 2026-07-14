/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { Trophy } from "lucide-react";

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
      <div className="size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex items-center justify-center flex-none">
        <Trophy className="size-4 text-muted-foreground" />
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt={issuer}
      className="size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
      onError={() => setImageError(true)}
    />
  );
}

export default function AwardsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6 w-full max-w-[800px] mx-auto">
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

      <div className="w-full flex flex-col gap-y-8 mt-4">
        {DATA.awards.map((award) => (
          <div
            key={award.title}
            className="w-full flex gap-x-4 items-start group"
          >
            <LogoImage issuer={award.issuer} />
            <div className="flex-1 flex flex-col gap-y-1">
              <div className="flex items-center justify-between w-full text-left">
                <div className="font-semibold text-base leading-none text-foreground group-hover:text-primary transition-colors">
                  {award.title}
                </div>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground">
                  {award.date}
                </div>
              </div>

              <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {award.issuer}
              </div>

              <p className="text-sm text-muted-foreground/90 leading-relaxed mt-1 font-sans">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

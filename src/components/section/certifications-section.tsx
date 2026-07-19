"use client";

import { DATA } from "@/data/resume";
import { LogoImage } from "@/components/ui/logo-image";
import { ArrowUpRight, Award } from "lucide-react";
import Link from "next/link";

export default function CertificationsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6 w-full">
      <div className="flex flex-col gap-y-4 items-center justify-center text-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="border border-border/80 bg-card z-10 rounded-full px-4 py-1 flex items-center gap-2 shadow-xs">
            <Award className="size-4 text-emerald-400" />
            <span className="text-foreground text-xs font-semibold uppercase tracking-wider">
              Specialized Credentials
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Professional Certifications
          </h2>
          <p className="text-muted-foreground md:text-base text-balance max-w-2xl">
            Verified specialization and coursework credentials in deep learning, reinforcement learning, and PyTorch.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {DATA.certifications.map((cert) => {
          const isLinkable = cert.url && cert.url !== "#";

          const CardContent = (
            <div className="flex items-start gap-3 p-4 border border-border/70 bg-card/60 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 rounded-2xl h-full relative group">
              <LogoImage alt={cert.issuer} type="award" className="size-10" />
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full gap-2">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm leading-snug text-foreground group-hover:text-emerald-400 transition-colors flex items-start gap-1 pr-3">
                    {cert.title}
                    {isLinkable && (
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 mt-0.5" />
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{cert.issuer}</p>
                </div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground border-t border-border/50 pt-2 font-mono">
                  <span>{cert.date}</span>
                  {cert.credentialId && cert.credentialId !== "N/A" && (
                    <span className="text-emerald-400/90">ID: {cert.credentialId}</span>
                  )}
                </div>
              </div>
            </div>
          );

          if (isLinkable) {
            return (
              <Link
                href={cert.url}
                key={cert.title}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {CardContent}
              </Link>
            );
          }

          return (
            <div key={cert.title} className="h-full">
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}

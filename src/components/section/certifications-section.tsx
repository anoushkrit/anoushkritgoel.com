/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { ArrowUpRight, Award } from "lucide-react";
import Link from "next/link";

function LogoImage({ issuer }: { issuer: string }) {
  const [imageError, setImageError] = useState(false);

  let domain = "";
  const lowerIssuer = issuer.toLowerCase();
  if (lowerIssuer.includes("coursera")) {
    domain = "coursera.org";
  } else if (lowerIssuer.includes("udacity")) {
    domain = "udacity.com";
  }

  const logoSrc = domain ? `https://logo.clearbit.com/${domain}` : "";

  if (!logoSrc || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex items-center justify-center flex-none">
        <Award className="size-4 text-muted-foreground" />
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

export default function CertificationsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6 w-full">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">Certifications</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Certifications</h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            Verified specialization and coursework credentials in deep learning, reinforcement learning, and PyTorch.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
        {DATA.certifications.map((cert) => {
          const isLinkable = cert.url && cert.url !== "#";
          
          const CardContent = (
            <div className="flex items-start gap-x-3 p-4 border border-border bg-card hover:bg-accent/20 transition-all duration-200 rounded-xl shadow-xs min-h-[110px] w-full h-full relative group">
              <LogoImage issuer={cert.issuer} />
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full gap-1">
                <div>
                  <h3 className="font-semibold text-sm leading-tight text-foreground flex items-start gap-1 pr-4">
                    {cert.title}
                    {isLinkable && (
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 mt-0.5" />
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                </div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground mt-2 border-t pt-1.5">
                  <span>{cert.date}</span>
                  {cert.credentialId && cert.credentialId !== "N/A" && (
                    <span className="font-mono">ID: {cert.credentialId}</span>
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

          return <div key={cert.title} className="h-full">{CardContent}</div>;
        })}
      </div>
    </div>
  );
}

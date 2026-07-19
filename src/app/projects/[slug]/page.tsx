/* eslint-disable @next/next/no-img-element */
import { getProjectBySlug, ALL_PROJECTS_DETAILS } from "@/data/resume";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Globe,
  CodeXml,
  Check,
  Building2,
  Sparkles,
  Layers,
} from "lucide-react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

export function generateStaticParams() {
  return ALL_PROJECTS_DETAILS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const categoryColors = {
    Paper: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    "Software & Tool": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    "Startup Product": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    "Course Project": "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    "Employment Project": "bg-teal-500/10 text-teal-400 border-teal-500/30",
    "Side Project": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  };

  return (
    <main className="min-h-dvh flex flex-col gap-8 relative pt-4 max-w-4xl mx-auto">
      {/* Back Button */}
      <div>
        <Link
          href={project.orgSlug ? `/work/${project.orgSlug}` : "/#achievements"}
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded-lg bg-card/60 border border-border/60"
        >
          <ArrowLeft className="size-3.5" />
          <span>{project.orgSlug ? `Back to ${project.organization}` : "Back to Overview"}</span>
        </Link>
      </div>

      {/* Main Project Card */}
      <BlurFade delay={0.04}>
        <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl flex flex-col gap-6 shadow-xl">
          {/* Header Area */}
          <div className="flex flex-col gap-3 border-b border-border/50 pb-6">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <Badge className={`text-xs font-semibold px-3 py-1 border ${categoryColors[project.category]}`}>
                {project.category}
              </Badge>
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400/90 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                {project.dates}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-cyan-400">{project.subtitle}</p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mt-1">
              <Building2 className="size-3.5 text-muted-foreground" />
              <span>Organization: </span>
              {project.orgSlug ? (
                <Link
                  href={`/work/${project.orgSlug}`}
                  className="text-foreground hover:text-cyan-400 font-semibold underline underline-offset-2 transition-colors"
                >
                  {project.organization}
                </Link>
              ) : (
                <span className="text-foreground font-semibold">{project.organization}</span>
              )}
            </div>
          </div>

          {/* Optional Media Preview */}
          {project.image && (
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-border/60 bg-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-semibold border border-white/20 transition-colors"
              >
                <Github className="size-3.5" />
                <span>GitHub Repository</span>
              </Link>
            )}

            {project.arxivUrl && (
              <Link
                href={project.arxivUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-semibold border border-cyan-500/30 transition-colors"
              >
                <Globe className="size-3.5" />
                <span>ArXiv Preprint</span>
              </Link>
            )}

            {project.paperUrl && (
              <Link
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-xs font-semibold border border-indigo-500/30 transition-colors"
              >
                <ExternalLink className="size-3.5" />
                <span>Official Paper Link</span>
              </Link>
            )}
          </div>

          {/* Results Highlight Box */}
          {project.results && (
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex flex-col gap-1 text-xs sm:text-sm">
              <span className="font-bold uppercase tracking-wider text-[10px] text-emerald-400 font-mono">
                Key Result & Impact Benchmark
              </span>
              <p className="font-semibold leading-relaxed">{project.results}</p>
            </div>
          )}

          {/* Full Description */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Layers className="size-4 text-cyan-400" />
              Technical Overview
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground/95 leading-relaxed font-sans">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Sparkles className="size-4 text-cyan-400" />
                Key Technical Highlights
              </h2>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-muted-foreground/95 space-y-1.5 leading-relaxed">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Authentic BibTeX Section */}
          {project.bibtex && (
            <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <CodeXml className="size-4 text-cyan-400" />
                  BibTeX Citation
                </h2>
              </div>
              <div className="p-4 rounded-xl border border-border/80 bg-muted/40 font-mono text-xs text-muted-foreground overflow-x-auto relative">
                <pre className="whitespace-pre-wrap">{project.bibtex}</pre>
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
            <span className="text-xs uppercase font-mono tracking-wider text-muted-foreground">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs font-medium border-border/80 bg-muted/30 text-muted-foreground px-2.5 py-0.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </main>
  );
}

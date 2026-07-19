import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Microscope, ExternalLink } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="achievements" className="w-full">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center text-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="border border-border/80 bg-card z-10 rounded-full px-4 py-1 flex items-center gap-2 shadow-xs">
              <Microscope className="size-4 text-cyan-400" />
              <span className="text-foreground text-xs font-semibold uppercase tracking-wider">
                Research Milestones
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>

          <div className="flex flex-col gap-y-2 items-center justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Peer-Reviewed Publications
            </h2>
            <p className="text-muted-foreground md:text-base text-balance max-w-2xl">
              Acceptances and key contributions across 3D Spatial AI, Brain MRI Tractography, and Reinforcement Learning.
            </p>

            {/* Conference Source Links Badge Row */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              <span className="text-xs font-mono text-muted-foreground">Peer-Reviewed Papers:</span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold">
                <span>(2)</span>
                <Link
                  href="https://icpr2024.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-amber-200 inline-flex items-center gap-1"
                >
                  <span>ICPR 2024</span>
                  <ExternalLink className="size-3" />
                </Link>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold">
                <span>(1)</span>
                <Link
                  href="https://2025.biomedicalimaging.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-cyan-200 inline-flex items-center gap-1"
                >
                  <span>ISBI 2025</span>
                  <ExternalLink className="size-3" />
                </Link>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold">
                <span>(2)</span>
                <Link
                  href="https://biomedicalimaging.org/2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-emerald-200 inline-flex items-center gap-1"
                >
                  <span>ISBI 2026</span>
                  <ExternalLink className="size-3" />
                </Link>
              </div>
            </div>
          </div>

          {DATA.researchIntro && (
            <div className="w-full max-w-3xl border-l-4 border-cyan-500/50 bg-card/60 backdrop-blur-md p-4 rounded-r-2xl border-border/60 text-left mt-2">
              <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed font-sans italic">
                "{DATA.researchIntro}"
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full auto-rows-fr">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                bibtex={project.bibtex}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

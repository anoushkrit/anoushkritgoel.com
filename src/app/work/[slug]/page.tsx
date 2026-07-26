import { getWorkBySlug, getProjectsByWorkSlug, DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import { LogoImage } from "@/components/ui/logo-image";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

export function generateStaticParams() {
  return DATA.work.map((work) => ({
    slug: work.slug,
  }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const projects = getProjectsByWorkSlug(slug);
  const isCurrent = work.end === "Present" || work.end?.toLowerCase() === "current";

  return (
    <main className="min-h-dvh flex flex-col gap-10 relative pt-4">
      {/* Back Button */}
      <div>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 hover:text-rose-300 transition-colors p-2 rounded-lg bg-card/60 border border-border/60"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* Header Section */}
      <BlurFade delay={0.04}>
        <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl flex flex-col gap-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <LogoImage src={work.logoUrl} alt={work.company} className="size-14" />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">{work.company}</h1>
                  {isCurrent && (
                    <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                      Current Role
                    </Badge>
                  )}
                </div>
                <p className="text-base font-semibold text-rose-400 mt-0.5">{work.title}</p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-muted-foreground">
              <span className="text-rose-400 font-semibold bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                {work.start} — {work.end}
              </span>
              <span className="flex items-center gap-1 mt-1">
                <MapPin className="size-3 text-muted-foreground" />
                {work.location}
              </span>
            </div>
          </div>

          <div className="border-t border-border/50 pt-4 flex flex-col gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Briefcase className="size-4 text-rose-500" />
              Role Overview & Impact
            </h2>
            <ul className="list-disc pl-5 text-sm text-muted-foreground/95 space-y-2 leading-relaxed font-sans">
              {work.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>

          {work.href && work.href !== "#" && (
            <div className="pt-2">
              <Link
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-rose-400 transition-colors"
              >
                <span>Visit {work.company} Website</span>
                <ExternalLink className="size-3.5" />
              </Link>
            </div>
          )}
        </div>
      </BlurFade>

      {/* Associated Projects Section */}
      {projects.length > 0 && (
        <section className="flex flex-col gap-6">
          <BlurFade delay={0.08}>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <h2 className="text-xl font-bold text-foreground">Projects & Initiatives at {work.company}</h2>
                <p className="text-xs text-muted-foreground">Detailed technical models and systems built during this tenure</p>
              </div>
              <Badge variant="outline" className="font-mono text-xs border-rose-500/20 text-rose-400">
                {projects.length} {projects.length === 1 ? "Project" : "Projects"}
              </Badge>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full">
            {projects.map((project, idx) => (
              <BlurFade key={project.slug} delay={0.1 + idx * 0.05} className="h-full">
                <ProjectCard
                  href={`/projects/${project.slug}`}
                  title={project.title}
                  description={project.shortDescription}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  bibtex={project.bibtex}
                  links={[
                    {
                      type: "Details",
                      href: `/projects/${project.slug}`,
                      icon: <Briefcase className="size-3.5" />,
                    },
                    ...(project.githubUrl
                      ? [
                          {
                            type: "GitHub",
                            href: project.githubUrl,
                            icon: <ExternalLink className="size-3.5" />,
                          },
                        ]
                      : []),
                  ]}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

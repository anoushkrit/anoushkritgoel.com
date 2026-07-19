/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import TypingAnimation from "@/components/magicui/typing-animation";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import type { ComponentType } from "react";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import AwardsSection from "@/components/section/awards-section";
import CertificationsSection from "@/components/section/certifications-section";
import WorkGallery from "@/components/section/work-gallery";
import { LogoImage } from "@/components/ui/logo-image";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { ArrowUpRight, GraduationCap, Briefcase, Cpu, Layers, Sparkles, Code2, ExternalLink } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-16 relative">
      {/* Hero Section */}
      <section id="hero" className="w-full pt-4">
        <div className="mx-auto w-full space-y-6">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
              <Sparkles className="size-3.5" />
              <span>Available for Research & AI Collaborations</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              <TypingAnimation text={`Hi, I'm ${DATA.name}`} speed={70} />
            </h1>

            <BlurFadeText
              className="text-muted-foreground max-w-4xl text-base sm:text-xl font-medium leading-relaxed"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* Publications Card with Direct Conference Source Links */}
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="p-3.5 rounded-xl border border-border/70 bg-card/60 backdrop-blur-xl flex flex-col gap-1 shadow-xs hover:border-cyan-500/40 transition-colors">
                <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                  Publications
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground">
                  5 Papers
                </span>
                <div className="text-[10px] font-semibold text-cyan-400/90 flex flex-wrap items-center gap-1">
                  <span>(2)</span>
                  <Link
                    href="https://icpr2024.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-cyan-300 font-bold inline-flex items-center gap-0.5"
                  >
                    <span>ICPR 2024</span>
                    <ExternalLink className="size-2.5" />
                  </Link>
                  <span>, (1)</span>
                  <Link
                    href="https://2025.biomedicalimaging.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-cyan-300 font-bold inline-flex items-center gap-0.5"
                  >
                    <span>ISBI 2025</span>
                    <ExternalLink className="size-2.5" />
                  </Link>
                  <span>, (2)</span>
                  <Link
                    href="https://biomedicalimaging.org/2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-cyan-300 font-bold inline-flex items-center gap-0.5"
                  >
                    <span>ISBI 2026</span>
                    <ExternalLink className="size-2.5" />
                  </Link>
                </div>
              </div>
            </BlurFade>

            {/* Experience Card */}
            <BlurFade delay={BLUR_FADE_DELAY * 2.1}>
              <div className="p-3.5 rounded-xl border border-border/70 bg-card/60 backdrop-blur-xl flex flex-col gap-0.5 shadow-xs hover:border-cyan-500/40 transition-colors">
                <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                  Experience
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground">
                  7+ Years
                </span>
                <span className="text-[10px] font-semibold text-cyan-400/90">
                  AI & Startups
                </span>
              </div>
            </BlurFade>

            {/* Core Focus Card */}
            <BlurFade delay={BLUR_FADE_DELAY * 2.2}>
              <div className="p-3.5 rounded-xl border border-border/70 bg-card/60 backdrop-blur-xl flex flex-col gap-0.5 shadow-xs hover:border-cyan-500/40 transition-colors">
                <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                  Core Focus
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground">
                  3D Spatial AI
                </span>
                <span className="text-[10px] font-semibold text-cyan-400/90">
                  Neuro & Medical AI
                </span>
              </div>
            </BlurFade>
          </div>

          {/* Work Showcase Gallery */}
          <WorkGallery />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex items-center gap-2">
              <Layers className="size-4 text-cyan-400" />
              <h2 className="text-xl font-bold text-foreground">About & Vision</h2>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl prose max-w-full font-sans leading-relaxed text-muted-foreground/95 dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Industrial Experience Section */}
      <section id="work" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex items-center gap-2">
              <Briefcase className="size-4 text-cyan-400" />
              <h2 className="text-xl font-bold text-foreground">Industrial & Entrepreneurial Experience</h2>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      {/* Academic Experience Section */}
      <section id="education" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4 text-cyan-400" />
              <h2 className="text-xl font-bold text-foreground">Academic Credentials</h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                className="h-full"
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group h-full flex flex-col justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <LogoImage alt={education.school} type="education" className="size-11" />
                      <div className="flex-1 min-w-0 flex flex-col gap-1">
                        <div className="font-bold text-base text-foreground group-hover:text-cyan-400 transition-colors flex items-center justify-between gap-2">
                          <span>{education.school}</span>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground leading-snug">
                          {education.degree}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400/90 border-t border-border/50 pt-3">
                      <span>{education.start} — {education.end}</span>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section id="skills" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-cyan-400" />
              <h2 className="text-xl font-bold text-foreground">Skills & Technology Stack</h2>
            </div>
          </BlurFade>
          <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl">
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.02}>
                  {(() => {
                    const SkillIcon = ("icon" in skill
                      ? skill.icon
                      : undefined) as ComponentType<{ className?: string }> | undefined;
                    return (
                      <div className="border border-border/80 bg-background/80 hover:border-cyan-500/40 rounded-xl h-8 w-fit px-3 flex items-center gap-2 shadow-xs transition-colors">
                        {SkillIcon ? <SkillIcon className="size-4 rounded overflow-hidden object-contain" /> : null}
                        <span className="text-foreground text-xs sm:text-sm font-medium">{skill.name}</span>
                      </div>
                    );
                  })()}
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Peer-Reviewed Publications Section */}
      <section id="achievements">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* Open Source Software & Tools Section */}
      <section id="software-tools" className="w-full">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex flex-col gap-y-4 items-center justify-center text-center">
              <div className="flex items-center w-full">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="border border-border/80 bg-card z-10 rounded-full px-4 py-1 flex items-center gap-2 shadow-xs">
                  <Code2 className="size-4 text-emerald-400" />
                  <span className="text-foreground text-xs font-semibold uppercase tracking-wider">
                    Open Source Software & Tools
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
              </div>
              <div className="flex flex-col gap-y-2 items-center justify-center">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Open Source Software & AI Tools
                </h2>
                <p className="text-muted-foreground md:text-base text-balance max-w-2xl">
                  Standalone extensions, 3D Slicer tools, and multimodal spatial editing frameworks.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full">
            {DATA.softwareTools.map((tool, id) => (
              <BlurFade
                key={tool.title}
                delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                className="h-full"
              >
                <ProjectCard
                  href={tool.href}
                  title={tool.title}
                  description={tool.description}
                  dates={tool.dates}
                  tags={tool.technologies}
                  links={tool.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Honors & Awards Section */}
      <section id="awards">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <AwardsSection />
        </BlurFade>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <CertificationsSection />
        </BlurFade>
      </section>

      {/* News & Timeline Section */}
      <section id="research">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <HackathonsSection />
        </BlurFade>
      </section>

      {/* Contact Footer Section */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}

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
import { ArrowUpRight, GraduationCap, Briefcase, Cpu, Layers, Sparkles } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const quickStats = [
    { label: "Publications", value: "5 Papers", highlight: "ISBI'26 Rank A" },
    { label: "Experience", value: "6+ Years", highlight: "AI & Startups" },
    { label: "Incubation Grants", value: "$100K+", highlight: "SIIC / HTIC / Catalyst" },
    { label: "Core Focus", value: "3D Spatial AI", highlight: "Neuro & Medical AI" },
  ];

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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {quickStats.map((stat, idx) => (
              <BlurFade key={stat.label} delay={BLUR_FADE_DELAY * 2 + idx * 0.03}>
                <div className="p-3.5 rounded-xl border border-border/70 bg-card/60 backdrop-blur-xl flex flex-col gap-0.5 shadow-xs hover:border-cyan-500/40 transition-colors">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-semibold text-cyan-400/90">
                    {stat.highlight}
                  </span>
                </div>
              </BlurFade>
            ))}
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

      {/* Honors & Awards Section */}
      <section id="awards">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <AwardsSection />
        </BlurFade>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <CertificationsSection />
        </BlurFade>
      </section>

      {/* News & Timeline Section */}
      <section id="research">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <HackathonsSection />
        </BlurFade>
      </section>

      {/* Contact Footer Section */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}

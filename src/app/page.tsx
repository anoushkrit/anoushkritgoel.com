import BlurFade from "@/components/magicui/blur-fade";
import TypingAnimation from "@/components/magicui/typing-animation";
import { PublicationItem } from "@/components/publication-item";
import { DATA } from "@/data/resume";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
      {children}
    </h2>
  );
}

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-12 relative max-w-3xl mx-auto w-full">
      {/* Hero */}
      <section id="hero" className="w-full pt-4 flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs font-semibold">
          <Sparkles className="size-3.5" />
          <span>{DATA.seekingPhD}</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
          <TypingAnimation text={DATA.name} highlightWord="Goel" speed={70} />
        </h1>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {DATA.shortBio}
          </p>
        </BlurFade>
        {DATA.cvUrl ? (
          <Link
            href={DATA.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-rose-400 hover:text-rose-300 w-fit"
          >
            Download CV
          </Link>
        ) : null}
      </section>

      {/* Research interests */}
      <section id="about" className="flex flex-col gap-3">
        <SectionHeading>Research Interests</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {DATA.researchInterests.map((interest) => (
            <span
              key={interest}
              className="border border-border/80 bg-card/60 rounded-xl px-3 py-1 text-xs sm:text-sm text-foreground"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="achievements" className="flex flex-col gap-3">
        <SectionHeading>Publications</SectionHeading>
        <div className="flex flex-col gap-2">
          {DATA.projects.map((paper) => (
            <PublicationItem
              key={paper.title}
              title={paper.title}
              authors={paper.authors}
              venue={paper.venue}
              year={paper.year}
              dates={paper.dates}
              description={paper.description}
              bibtex={paper.bibtex}
              links={paper.links}
            />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="flex flex-col gap-3">
        <SectionHeading>Experience</SectionHeading>
        <ul className="flex flex-col divide-y divide-border/60">
          {DATA.work.map((job) => (
            <li key={job.slug}>
              <Link
                href={`/work/${job.slug}`}
                className="flex items-baseline justify-between gap-4 py-2.5 group"
              >
                <span className="text-sm text-foreground">
                  <span className="font-semibold group-hover:text-rose-400 transition-colors">
                    {job.company}
                  </span>
                  <span className="text-muted-foreground"> · {job.title}</span>
                </span>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                  {job.start} – {job.end}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section id="education" className="flex flex-col gap-3">
        <SectionHeading>Education</SectionHeading>
        <ul className="flex flex-col divide-y divide-border/60">
          {DATA.education.map((edu) => (
            <li
              key={edu.school}
              className="flex items-baseline justify-between gap-4 py-2.5"
            >
              <span className="text-sm text-foreground">
                <span className="font-semibold">{edu.school}</span>
                <span className="text-muted-foreground"> · {edu.degree}</span>
              </span>
              <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                {edu.start} – {edu.end}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-border/60 pt-6"
      >
        <Link
          href={`mailto:${DATA.contact.email}`}
          className="text-sm font-mono text-foreground hover:text-rose-400 transition-colors underline underline-offset-4"
        >
          {DATA.contact.email}
        </Link>
        <Link
          href="/details"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400 hover:text-rose-300"
        >
          Full profile: projects, software, awards
          <ArrowRight className="size-4" />
        </Link>
      </section>
    </main>
  );
}

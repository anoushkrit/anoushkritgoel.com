"use client";

import Link from "next/link";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { EXTRA_PROJECT_PAGES, FACETS, PAPERS, PROJECTS, ROLES, type Figure, type Project } from "@/data/home";
import { SiteHeader } from "@/components/site-header";
import "./one-page.css";

const FILTERS: { key: "All" | Project["kind"]; label: string }[] = [
  { key: "All", label: "All" },
  { key: "Software", label: "Software" },
  { key: "Industry", label: "Industry" },
];

const PAPER_FILTERS = [
  { key: "All", label: "All" },
  { key: "First", label: "First author" },
  { key: "Co", label: "Co-author" },
] as const;

// A photo slot: an entry starting with "/" is an image under public/, anything else is a placeholder caption.
function Photo({ item, label = "" }: { item: string; label?: string }) {
  if (item.startsWith("/")) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={item} alt="" loading="lazy" className="op-ph op-ph-img" />;
  }
  return <div className="op-ph">[{label}{item}]</div>;
}

function Authors({ authors, me }: { authors: string[]; me: number }) {
  const before = authors.slice(0, me).join(", ");
  const after = authors.slice(me + 1).join(", ");
  return (
    <p className="op-authors">
      {before && `${before}, `}
      <strong>{authors[me]}</strong>
      {after && `, ${after}`}
    </p>
  );
}

// A real figure from the paper or repo, with its source caption. Nothing is drawn when there is none.
function Shot({ figure }: { figure?: Figure }) {
  if (!figure) return null;
  return (
    <figure className="op-shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={figure.src} alt={figure.caption} loading="lazy" />
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}

export function OnePage() {
  const [facetId, setFacetId] = useState(FACETS[0].id);
  const [paperId, setPaperId] = useState(PAPERS[0].id);
  const [paperFilter, setPaperFilter] = useState<(typeof PAPER_FILTERS)[number]["key"]>("All");
  const [projectId, setProjectId] = useState(PROJECTS[0].id);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("All");
  const [roleId, setRoleId] = useState("iitmandi");

  const fi = Math.max(0, FACETS.findIndex((f) => f.id === facetId));
  const facet = FACETS[fi];
  const paper = PAPERS.find((p) => p.id === paperId) ?? PAPERS[0];
  const visiblePapers = PAPERS.filter((p) => paperFilter === "All" || (paperFilter === "First") === (p.me === 0));
  const project = PROJECTS.find((p) => p.id === projectId) ?? PROJECTS[0];
  const visible = PROJECTS.filter((p) => filter === "All" || p.kind === filter);
  const role = ROLES.find((r) => r.id === roleId) ?? ROLES[0];
  const social = DATA.contact.social;

  // Show a project in the Projects pane; the link's #projects hash does the scroll.
  const openProject = (id: string) => {
    setFilter("All");
    setProjectId(id);
  };
  const openPaper = (id: string) => {
    setPaperFilter("All");
    setPaperId(id);
  };

  return (
    <div className="op">
      <SiteHeader onHome />

      <main className="op-main">
        <section id="about" aria-label="About" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span className="op-badge">{DATA.seekingPhD}</span>
            <h1 className="op-hero-title">
              {DATA.name}
              <br />
              <span className="op-is">is a </span>
              <span className="op-noun">{facet.noun}</span>
              <span className="op-is">.</span>
            </h1>
            <div role="group" aria-label="Facets" className="op-tabs">
              {FACETS.map((f) => (
                <button key={f.id} type="button" className="op-tab" aria-pressed={f.id === facet.id} onClick={() => setFacetId(f.id)}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="op-facet" aria-live="polite">
            <div className="op-facet-dark">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span className="op-kicker">0{fi + 1} / 0{FACETS.length} · {facet.label}</span>
                <p className="op-statement">{facet.statement}</p>
              </div>
              <div className="op-stats">
                {facet.stats.map((s) => (
                  <div key={s.label} className="op-stat"><b>{s.value}</b><span>{s.label}</span></div>
                ))}
              </div>
            </div>
            <div className="op-facet-light">
              <div className="op-photos">
                {facet.media.map((m, i) => <Photo key={i} item={m} />)}
              </div>
              <ul className="op-list">
                {facet.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {facet.href && <a href={facet.href} className="op-btn op-btn-primary">{facet.cta} →</a>}
            </div>
          </div>

          <div className="op-socials">
            <a href={social.GitHub.url}>GitHub</a>
            <a href={social.LinkedIn.url}>LinkedIn</a>
            <a href={social.Scholar.url}>Google Scholar</a>
            <a href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a>
          </div>
        </section>

        <section id="research">
          <div className="op-section-head">
            <span className="op-kicker">Research</span>
            <h2>Publications</h2>
            <p>Pick a paper to see the abstract in brief, the authors and the links.</p>
          </div>
          <div className="op-split">
            <aside aria-label="Publication list" className="op-aside">
              <div role="group" aria-label="Filter publications" className="op-filters">
                {PAPER_FILTERS.map((f) => (
                  <button key={f.key} type="button" className="op-filter" aria-pressed={f.key === paperFilter} onClick={() => setPaperFilter(f.key)}>
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="op-cards">
                {visiblePapers.map((c) => (
                  <button key={c.id} type="button" className="op-card" aria-pressed={c.id === paper.id} onClick={() => setPaperId(c.id)}>
                    <span className="op-card-top"><span className="op-card-title">{c.short}</span><span className="op-card-when">{c.venue}</span></span>
                    <span className="op-card-sub">{c.blurb}</span>
                    <span className="op-card-foot"><i aria-hidden="true" />{c.org}<em>{c.me === 0 ? "First author" : "Co-author"}</em></span>
                  </button>
                ))}
              </div>
            </aside>

            <div className="op-pane" aria-live="polite">
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span className="op-kicker">{paper.venue} · {paper.me === 0 ? "First author" : "Co-author"}</span>
                <h3>{paper.short}</h3>
                <p className="op-paper-title">{paper.title}</p>
                <Authors authors={paper.authors} me={paper.me} />
              </div>
              <Shot figure={paper.figure} />
              <p className="op-desc">{paper.desc}</p>
              <ul className="op-bullets">
                {paper.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="op-row">
                {paper.links.map(([label, url], i) => (
                  <a key={url} href={url} className={i === 0 ? "op-btn op-btn-primary" : "op-btn"}>{label}</a>
                ))}
                {paper.slug && <Link href={`/projects/${paper.slug}`} className="op-btn">Full write-up</Link>}
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="op-section-head">
            <span className="op-kicker">Projects</span>
            <h2>Things I have built</h2>
            <p>Pick a card to see what it is, where it was built, and the links.</p>
          </div>
          <div className="op-split">
            <aside aria-label="Project list" className="op-aside">
              <div role="group" aria-label="Filter projects" className="op-filters">
                {FILTERS.map((f) => (
                  <button key={f.key} type="button" className="op-filter" aria-pressed={f.key === filter} onClick={() => setFilter(f.key)}>
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="op-cards">
                {visible.map((c) => (
                  <button key={c.id} type="button" className="op-card" aria-pressed={c.id === project.id} onClick={() => setProjectId(c.id)}>
                    <span className="op-card-top"><span className="op-card-title">{c.title}</span><span className="op-card-when">{c.when}</span></span>
                    <span className="op-card-sub">{c.blurb}</span>
                    <span className="op-card-foot"><i aria-hidden="true" />{c.org}<em>{c.kind}</em></span>
                  </button>
                ))}
              </div>
            </aside>

            <div className="op-pane" aria-live="polite">
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span className="op-kicker">{project.kind}</span>
                <h3>{project.title}</h3>
                <div className="op-pane-meta">
                  <span>Built at <strong>{project.org}</strong></span>
                  <span>{project.when}</span>
                </div>
              </div>
              <Shot figure={project.figure} />
              <p className="op-desc">{project.desc}</p>
              <ul className="op-bullets">
                {project.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="op-row">
                {project.links.map(([label, url], i) => (
                  <a key={url} href={url} className={i === 0 ? "op-btn op-btn-primary" : "op-btn"}>{label}</a>
                ))}
                {project.slug && <Link href={`/projects/${project.slug}`} className="op-btn">Full write-up</Link>}
                {project.links.length === 0 && <span className="op-note">Code is private. Available on request.</span>}
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="op-section-head">
            <span className="op-kicker">Experience</span>
            <h2>Where I have worked</h2>
            <p>Seven years across research, startups and industry.</p>
          </div>
          <div className="op-split">
            <aside aria-label="Roles" className="op-aside">
              <div className="op-cards">
                {ROLES.map((r) => (
                  <button key={r.id} type="button" className="op-card" aria-pressed={r.id === role.id} onClick={() => setRoleId(r.id)}>
                    <span className="op-card-top"><span className="op-card-title">{r.org}</span><span className="op-card-when">{r.when}</span></span>
                    <span style={{ fontSize: 13.5 }}>{r.role}</span>
                    <span className="op-card-sub">{r.focus}</span>
                  </button>
                ))}
              </div>
            </aside>

            <div className="op-pane" aria-live="polite">
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span className="op-kicker">{role.when} · {role.place}</span>
                <h3>{role.org}</h3>
                <span className="op-role">{role.role}</span>
              </div>
              <div className="op-gallery">
                {role.photos.map((ph, i) => <Photo key={i} item={ph} label="Photo: " />)}
              </div>
              <p className="op-desc">{role.summary}</p>
              <ul className="op-bullets">
                {role.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              {role.projects.length > 0 && (
                <div className="op-chips">
                  <span className="op-kicker">Projects built here</span>
                  <div className="op-row" style={{ gap: 8 }}>
                    {role.projects.map((name) => {
                      const paperHit = PAPERS.find((p) => p.short === name);
                      if (paperHit) {
                        return <a key={name} href="#research" className="op-chip" onClick={() => openPaper(paperHit.id)}>{name} →</a>;
                      }
                      const hit = PROJECTS.find((p) => p.title === name);
                      if (hit) {
                        return <a key={name} href="#projects" className="op-chip" onClick={() => openProject(hit.id)}>{name} →</a>;
                      }
                      const slug = EXTRA_PROJECT_PAGES[name];
                      return slug
                        ? <Link key={name} href={`/projects/${slug}`} className="op-chip">{name} ↗</Link>
                        : <span key={name} className="op-chip">{name}</span>;
                    })}
                  </div>
                </div>
              )}
              <Link href={`/work/${role.slug}`} className="op-btn">More about this role</Link>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="op-section-head">
            <span className="op-kicker">Education</span>
          </div>
          <div className="op-edu">
            <div className="op-edu-item">
              <b>IIT Mandi</b>
              <span>M.Tech (Research), Intelligent Systems · 9.47/10</span>
              <span>2023 – 2025</span>
            </div>
            <div className="op-edu-item">
              <b>Shiv Nadar University</b>
              <span>B.Tech Electronics, Minor in Design · 7.61/10</span>
              <span>2015 – 2019</span>
            </div>
          </div>
        </section>

        <section id="contact" className="op-contact">
          <a href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a>
          <span className="op-row" style={{ gap: 22 }}>
            <Link href="/details">Full profile</Link>
            <Link href="/blog">Blog</Link>
            <a href="#about">Back to top ↑</a>
          </span>
        </section>
      </main>
    </div>
  );
}

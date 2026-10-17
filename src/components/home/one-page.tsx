"use client";

import Link from "next/link";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { EXTRA_PROJECT_PAGES, FACETS, PAPERS, PROJECTS, ROLES, type Project } from "@/data/home";
import { VizFigure } from "./viz";
import "./one-page.css";

const FILTERS: { key: "All" | Project["kind"]; label: string }[] = [
  { key: "All", label: "All" },
  { key: "Paper", label: "Papers" },
  { key: "Software", label: "Software" },
  { key: "Industry", label: "Industry" },
];

const NAV = [
  ["#about", "About"],
  ["#research", "Research"],
  ["#projects", "Projects"],
  ["#experience", "Experience"],
  ["#education", "Education"],
  ["#contact", "Contact"],
];

function Authors({ p }: { p: Project }) {
  if (!p.authors || p.me === undefined) return null;
  const before = p.authors.slice(0, p.me).join(", ");
  const after = p.authors.slice(p.me + 1).join(", ");
  return (
    <p className="op-authors">
      {before && `${before}, `}
      <strong>{p.authors[p.me]}</strong>
      {after && `, ${after}`}
    </p>
  );
}

export function OnePage({ fontClass }: { fontClass: string }) {
  const [facetId, setFacetId] = useState(FACETS[0].id);
  const [projectId, setProjectId] = useState(PROJECTS[0].id);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("All");
  const [roleId, setRoleId] = useState("iitmandi");

  const fi = Math.max(0, FACETS.findIndex((f) => f.id === facetId));
  const facet = FACETS[fi];
  const project = PROJECTS.find((p) => p.id === projectId) ?? PROJECTS[0];
  const visible = PROJECTS.filter((p) => filter === "All" || p.kind === filter);
  const role = ROLES.find((r) => r.id === roleId) ?? ROLES[0];
  const social = DATA.contact.social;

  // Show a project in the Projects pane; the link's #projects hash does the scroll.
  const openProject = (id: string) => {
    setFilter("All");
    setProjectId(id);
  };

  return (
    <div className={`op ${fontClass}`}>
      <header className="op-header">
        <nav aria-label="Site" className="op-nav">
          <a href="#about" className="op-brand">{DATA.name}</a>
          <div className="op-links">
            {NAV.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
        </nav>
      </header>

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
                {facet.media.map((m, i) => <div key={i} className="op-ph">[{m}]</div>)}
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
          </div>
          <div className="op-papers">
            {PAPERS.map((p) => (
              <div key={p.id} className="op-paper">
                <span className="op-paper-venue">{p.venue}</span>
                <div className="op-paper-body"><b>{p.title}</b><span>{p.authors}</span></div>
                <span className="op-paper-links">
                  {PROJECTS.some((x) => x.id === p.id) && (
                    <a href="#projects" onClick={() => openProject(p.id)}>Details</a>
                  )}
                  <a href={p.url}>arXiv</a>
                </span>
              </div>
            ))}
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
                <Authors p={project} />
                <div className="op-pane-meta">
                  <span>Built at <strong>{project.org}</strong></span>
                  <span>{project.when}</span>
                </div>
              </div>
              <VizFigure id={project.id} viz={project.viz} />
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
                {role.photos.map((ph, i) => <div key={i} className="op-ph">[Photo: {ph}]</div>)}
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

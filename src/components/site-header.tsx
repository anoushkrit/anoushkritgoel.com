import Link from "next/link";
import { DATA } from "@/data/resume";
import "@/components/home/one-page.css";

const SECTIONS = [
  ["about", "About"],
  ["research", "Research"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["contact", "Contact"],
];

// Pinned top menu. On the homepage links are in-page anchors; elsewhere they go to "/#section".
export function SiteHeader({ onHome = false }: { onHome?: boolean }) {
  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  return (
    <header className="op-header">
      <nav aria-label="Site" className="op-nav">
        {onHome ? (
          <a href="#about" className="op-brand">{DATA.name}</a>
        ) : (
          <Link href="/" className="op-brand">{DATA.name}</Link>
        )}
        <div className="op-links">
          {SECTIONS.map(([id, label]) => (
            <a key={id} href={href(id)}>{label}</a>
          ))}
          {!onHome && <Link href="/blog">Blog</Link>}
        </div>
      </nav>
    </header>
  );
}

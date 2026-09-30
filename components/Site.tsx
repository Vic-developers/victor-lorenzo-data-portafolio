import Link from 'next/link';
import type { Project } from '../data/projects';

export function SiteHeader() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="brand" href="/">VICTOR ELVIS LORENZO — DATA ANALYST</Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/#work">WORK</Link>
          <Link href="/#toolbox">TOOLBOX</Link>
          <Link href="/#process">PROCESS</Link>
          <Link href="/#notes">NOTES</Link>
          <Link href="/#contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <strong style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'var(--ink)' }}>Victor Elvis Lorenzo</strong>
          <br />Data Analyst
        </div>
        <nav className="links" aria-label="Footer">
          <Link href="/#work">Projects</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <div>© 2026 Victor Elvis Lorenzo</div>
      </div>
    </footer>
  );
}

export function Bars({ values, label }: { values: number[]; label: string }) {
  return (
    <div className="mini-viz" role="img" aria-label={label}>
      {values.map((v, i) => (
        <i key={i} style={{ height: `${v}%` }} />
      ))}
    </div>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link className="project-card" href={`/projects/${p.slug}/`} aria-label={`View case study: ${p.title}`}>
      <span className="num">{p.num}</span>
      <span className="cat">{p.category}</span>
      <h3>{p.title}</h3>
      <span className="stack">{p.stack.join(' · ').toUpperCase()}</span>
      <Bars values={p.bars} label={`${p.title} preview chart`} />
      <span className="cta">VIEW CASE STUDY →</span>
    </Link>
  );
}

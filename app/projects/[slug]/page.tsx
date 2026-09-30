import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '../../../components/Reveal';
import { SiteHeader, SiteFooter, Bars } from '../../../components/Site';
import { projects } from '../../../data/projects';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return { title: 'Proyecto no encontrado' };
  return {
    title: `${p.num} ${p.title} | Victor Elvis Lorenzo`,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary, type: 'article' },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <div className="wrap" style={{ paddingTop: 32 }}>
        <Link href="/" style={{ display: 'inline-block', marginBottom: 16, fontSize: 12, letterSpacing: '0.12em', color: 'var(--muted)' }}>
          ← VOLVER A TRABAJOS
        </Link>
        <p className="kicker">{p.num} — {p.category}</p>
        <h1 style={{ fontSize: 'clamp(44px, 8vw, 88px)', marginBottom: 8 }}>{p.title}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: 12, fontSize: 13, color: 'var(--muted)' }}>
          {p.stack.map((s) => (
            <span key={s} style={{ border: '1px solid var(--line)', padding: '6px 12px', background: '#fff' }}>{s.toUpperCase()}</span>
          ))}
        </div>
        <p className="lead" style={{ marginTop: 20 }}>{p.summary}</p>
      </div>

      <Reveal as="section" className="wrap block">
        <h2 className="big">EL PROBLEMA</h2>
        <p className="lead">{p.problem}</p>
      </Reveal>

      <Reveal as="section" className="wrap block">
        <h2 className="big">LOS DATOS</h2>
        <div className="case-meta">
          {p.dataset.map((d, i) => (
            <div key={i}><small>{d.label}</small><strong>{d.value}</strong></div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap block">
        <h2 className="big">EL PROCESO</h2>
        <div className="process">
          {['DATOS CRUDOS', 'LIMPIEZA', 'EXPLORACIÓN', 'ANÁLISIS', 'VISUALIZACIÓN', 'INSIGHTS'].map((s, i) => (
            <div className="step" key={s}><b>{i + 1}</b><p>{s}</p></div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap block">
        <h2 className="big">PREGUNTAS CLAVE</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px' }}>
          {p.questions.map((q, i) => (
            <li key={i} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '14px', color: 'var(--muted)', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '-28px', top: '0', fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, color: 'var(--accent)' }}>{i + 1}</span>
              {q}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="wrap block">
        <h2 className="big">DASHBOARD</h2>
        <div style={{ border: '1px solid var(--line)', background: '#fff', aspectRatio: '16 / 9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: 14, position: 'relative', overflow: 'hidden' }}>
          <img 
            src={p.dashboardImage} 
            alt={`Dashboard de ${p.title}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: 16, flexWrap: 'wrap' }}>
          <a 
            href={p.file} 
            download
            style={{
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '10px 16px', 
              border: '1px solid var(--accent)', 
              color: 'var(--accent)', 
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.08em',
              transition: 'all 200ms ease'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            DESCARGAR ARCHIVO DE ANÁLISIS (.xlsx)
          </a>
        </div>
      </Reveal>

      <Reveal as="section" className="wrap block">
        <h2 className="big">INSIGHTS CLAVE</h2>
        <div className="kpi-row">
          {p.insights.map((k, i) => (
            <div className="kpi" key={i}><b>{k.value}</b><span>{k.label}</span></div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 24, marginTop: 16 }}>
          {p.insights.map((k, i) => (
            <p key={i} style={{ margin: '10px 0', paddingLeft: '16px', borderLeft: '2px solid var(--accent)', color: 'var(--muted)' }}>
              {k.label}: {k.value}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap block">
        <h2 className="big">CONCLUSIÓN</h2>
        <p className="lead">{p.conclusion}</p>
      </Reveal>

      <Reveal as="section" className="wrap block contact">
        <h2 style={{ fontSize: 'clamp(44px, 8vw, 88px)' }}>¿SIGUIENTE PROYECTO?</h2>
        <p className="lead" style={{ marginTop: 12 }}>Explora otro análisis o contáctame para discutir tu desafío de datos.</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: 16 }}>
          <Link className="btn" href="/#work">VER TODOS LOS TRABAJOS</Link>
          <Link className="btn" style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)' }} href="/#contact">CONTACTAR</Link>
        </div>
      </Reveal>
    </>
  );
}
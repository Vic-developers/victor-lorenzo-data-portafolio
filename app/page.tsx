import Link from 'next/link';
import Reveal from '../components/Reveal';
import { ProjectCard } from '../components/Site';
import { projects, tools, notes } from '../data/projects';
import { ProjectSearch } from '../components/ProjectSearch';

const heroRows = [
  { id: '01', w: 88 }, { id: '02', w: 46 }, { id: '03', w: 97 },
  { id: '04', w: 62 }, { id: '05', w: 100 },
];

export default function Home() {
  return (
    <>
      <div className="wrap hero">
        <p className="eyebrow">VICTOR ELVIS LORENZO — DATA ANALYST</p>
        <h1><span>DATA</span><span>ANALYST</span></h1>
        <p className="hero-sub">Transformo datos en insights que hacen la complejidad más fácil de entender.</p>
        <div className="hero-meta">
          <span><i className="dot" />SQL · POWER BI · EXCEL · PYTHON</span>
          <span>SCROLLEA PARA EXPLORAR ↓</span>
        </div>

        <div className="viz-card" role="img" aria-label="Visualización abstracta de datos tipo data-art">
          <div className="viz-head"><span>FIG.01 — SEÑAL / RUIDO</span><span>N=1.248 · EN VIVO</span></div>
          <div className="bars">
            {heroRows.map((r) => (
              <div className="bar-row" key={r.id}>
                <span>{r.id}</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${r.w}%` }} /></div>
                <span>{r.w}.0</span>
              </div>
            ))}
          </div>
          <div className="scatter" aria-hidden="true">
            {[14, 26, 10, 32, 18, 40, 22, 12, 30, 16, 36, 20, 28, 24, 34, 15, 38, 21].map((h, i) => (
              <i key={i} style={{ height: `${h}px`, opacity: 0.35 + (i % 4) * 0.18 }} />
            ))}
          </div>
        </div>
      </div>

      <Reveal as="section" className="wrap block">
        <p className="kicker">01 — PREMISA</p>
        <h2 className="big">LOS DATOS ESTÁN EN TODAS PARTES.<br />LA PREGUNTA ES QUÉ HACES CON ELLOS.</h2>
        <p className="lead">Trabajo con datos para encontrar patrones, entender comportamientos, medir resultados y convertir información dispersa en historias claras.</p>
      </Reveal>

      <Reveal as="section" className="wrap block" >
        <div id="about" />
        <p className="kicker">02 — PERFIL</p>
        <h2 className="big">UN POCO SOBRE MÍ</h2>
        <p className="lead">Soy Data Analyst con formación en tecnología y experiencia trabajando con plataformas digitales, procesos educativos y sistemas de información.</p>
        <p className="lead" style={{ marginTop: 12 }}>Mi enfoque combina análisis, visualización y pensamiento crítico para convertir datos en información comprensible y útil.</p>
        <div className="stats">
          <div className="stat"><b>8+</b><span>AÑOS — EXPERIENCIA DIGITAL / LMS</span></div>
          <div className="stat"><b>05</b><span>HERRAMIENTAS — CORE ANALÍTICO</span></div>
          <div className="stat"><b>∞</b><span>PREGUNTAS — POR EXPLORAR</span></div>
        </div>
      </Reveal>

      <Reveal as="section" className="wrap block">
        <div id="toolbox" />
        <p className="kicker">03 — CAJA DE HERRAMIENTAS</p>
        <h2 className="big">MI CAJA DE HERRAMIENTAS</h2>
        <p className="lead">Analista de datos enfocado en transformar datos complejos en información clara, visualizaciones útiles e insights accionables mediante análisis exploratorio, SQL, Excel, Power BI y Python.</p>
        <div className="tools">
          {tools.map((t) => (
            <div className="tool" key={t.name}>{t.name}<small>{t.tag}</small></div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap block">
        <div id="work" />
        <p className="kicker">04 — TRABAJOS SELECCIONADOS</p>
        <h2 className="big">TRABAJOS SELECCIONADOS</h2>
        <p className="lead">Una selección de problemas, conjuntos de datos e insights.</p>
        <div className="projects">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
        <ProjectSearch />
      </Reveal>

      <Reveal as="section" className="wrap block">
        <div id="process" />
        <p className="kicker">05 — CÓMO PIENSO</p>
        <h2 className="big">UN BUEN ANÁLISIS EMPIEZA CON BUENAS PREGUNTAS.</h2>
        <div className="process">
          {[
            ['01 PREGUNTA', 'Plantea el problema de negocio antes de tocar los datos.'],
            ['02 DATOS', 'Localiza fuentes, define granularidad, verifica cobertura.'],
            ['03 LIMPIEZA', 'Perfila, deduplica, estandariza, documenta supuestos.'],
            ['04 EXPLORA', 'Distribuciones, cohortes, outliers, correlaciones.'],
            ['05 ANALIZA', 'Contrasta hipótesis con SQL + Python.'],
            ['06 VISUALIZA', 'Una página, una pregunta. Power BI para decisiones.'],
            ['07 INSIGHT', 'Recomienda acciones, no solo gráficos.'],
          ].map(([t, d]) => (
            <div className="step" key={t}><b>{t}</b><div><strong>{t.split(' ')[1]}</strong><p>{d}</p></div></div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap block">
        <div id="notes" />
        <p className="kicker">06 — NOTAS DE DATOS</p>
        <h2 className="big">NOTAS DE DATOS</h2>
        <div className="notes">
          {notes.map((n) => (
            <article className="note" key={n.title}>
              <small>{n.meta}</small>
              <h3>{n.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14 }}>{n.text}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="wrap block contact">
        <div id="contact" />
        <p className="kicker">07 — CONTACTO</p>
        <h2>HABLEMOS DE DATOS.</h2>
        <p className="lead">¿Tienes un conjunto de datos, un dashboard o un problema analítico que explorar?</p>
        <Link className="btn" href="mailto:hola@victorlorenzo.dev">PONTE EN CONTACTO →</Link>
        <div className="links">
          <a href="mailto:hola@victorlorenzo.dev">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </Reveal>
      
      {/* Search filter - will be initialized by script after page loads */}
      <div id="project-search-container" style={{ marginTop: '16px', padding: '12px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <input
          type="text"
          id="project-search"
          placeholder="Buscar proyecto... (industria, categoría, keywords)"
          aria-label="Buscar proyecto"
          style={{
            width: '300px',
            padding: '8px 12px',
            border: '1px solid var(--line)',
            borderRadius: '4px',
            fontSize: '13px',
            color: 'var(--ink)',
            background: '#fff'
          }}
        />
      </div>
    </>
  );
}
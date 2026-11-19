import Link from 'next/link'

/* Shared layout for the legal pages: title, effective date, contents list, numbered sections */
export default function LegalPage({ eyebrow = 'Legal', title, updated, intro, sections, aside }) {
  return (
    <article className="lg">
      <div className="mx lg-grid">
        <header className="lg-head">
          <p className="lg-eyebrow">{eyebrow}</p>
          <h1 className="lg-h1">{title}</h1>
          {updated && <p className="lg-date">Effective {updated}</p>}
          {intro && <div className="lg-intro">{intro}</div>}
        </header>
        <nav className="lg-toc" aria-label="On this page">
          <p>On this page</p>
          <ol>{sections.map((s) => <li key={s.id}><a href={'#' + s.id}>{s.h}</a></li>)}</ol>
          {aside}
          <div className="lg-other">
            <Link href="/privacy">Privacy &amp; Cookies</Link>
            <Link href="/terms">Terms &amp; Disclaimer</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </nav>
        <div className="lg-body">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="lg-sec">
              <h2><span>{String(i + 1).padStart(2, '0')}</span>{s.h}</h2>
              {s.body}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}

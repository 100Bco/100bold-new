import Link from 'next/link'
import { siteGroups } from '@/data/sitemap'
import '@/styles/legal.css'

export const metadata = {
  title: 'Sitemap | 100Bold',
  description: 'Every page on the 100Bold website: services, industries, work, insights and legal pages.',
  alternates: { canonical: '/sitemap' },
}

export default function Page() {
  return (
    <article className="lg">
      <div className="mx">
        <header className="lg-head lg-head-wide">
          <p className="lg-eyebrow">Legal</p>
          <h1 className="lg-h1">Sitemap</h1>
          <div className="lg-intro"><p>Every page on 100bold.co. Search engines can use our <a href="/sitemap.xml">XML sitemap</a>.</p></div>
        </header>
        <div className="sm-grid">
          {siteGroups.map((g) => (
            <section key={g.h} className="sm-col">
              <h2>{g.h}</h2>
              <ul>{g.links.map((l) => <li key={l.path}><Link href={l.path}>{l.name}</Link></li>)}</ul>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}

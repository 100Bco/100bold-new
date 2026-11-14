import IndHero from '@/components/industry/IndHero'
import IndWho from '@/components/industry/IndWho'
import IndFlip from '@/components/industry/IndFlip'
import IndServices from '@/components/industry/IndServices'
import CaseCard from '@/components/service/CaseCard'
import Faq from '@/components/home/Faq'
import Closing from '@/components/home/Closing'
import { bySlug } from '@/data/industries'
import '@/styles/services.css'
import '@/styles/service-detail.css'
import '@/styles/industries.css'

const d = bySlug['real-estate']

export const metadata = {
  title: d.title,
  description: d.description,
  alternates: { canonical: '/industries/' + d.slug },
}

const schema = [
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Marketing for ' + d.name.toLowerCase(), description: d.hero.line, url: 'https://100bold.co/industries/' + d.slug, audience: { '@type': 'BusinessAudience', name: d.name }, provider: { '@type': 'Organization', name: '100Bold', url: 'https://100bold.co' }, areaServed: 'United States' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: d.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://100bold.co/' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://100bold.co/industries' },
    { '@type': 'ListItem', position: 3, name: d.name, item: 'https://100bold.co/industries/' + d.slug },
  ] },
]

export default function Page() {
  return (
    <main id="main" className="sd-page">
      <IndHero d={d} />
      <IndWho d={d.who} />
      <IndFlip items={d.pains} />
      <IndServices items={d.services} name={d.name} />
      {d.result && <CaseCard d={d.result} />}
      <Faq data={{ h2: 'Questions', items: d.faq }} />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}

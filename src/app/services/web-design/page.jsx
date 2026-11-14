import DetailHero from '@/components/service/DetailHero'
import Shift from '@/components/service/Shift'
import GetGrid from '@/components/service/GetGrid'
import Terms from '@/components/service/Terms'
import Measure from '@/components/service/Measure'
import AiReady from '@/components/service/AiReady'
import OwnBand from '@/components/service/OwnBand'
import Journey from '@/components/service/Journey'
import Creative from '@/components/service/Creative'
import CaseCard from '@/components/service/CaseCard'
import ChatgptBand from '@/components/service/ChatgptBand'
import Who from '@/components/service/Who'
import Faq from '@/components/home/Faq'
import Closing from '@/components/home/Closing'
import { web as d } from '@/data/serviceDetail'
import '@/styles/services.css'
import '@/styles/service-detail.css'

export const metadata = {
  title: d.title,
  description: d.description,
  alternates: { canonical: '/services/' + d.slug },
}

const schema = [
  { '@context': 'https://schema.org', '@type': 'Service', name: d.name, description: d.hero.line, url: 'https://100bold.co/services/' + d.slug, provider: { '@type': 'Organization', name: '100Bold', url: 'https://100bold.co' }, areaServed: 'United States' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: d.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://100bold.co/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://100bold.co/services' },
    { '@type': 'ListItem', position: 3, name: d.name, item: 'https://100bold.co/services/' + d.slug },
  ] },
]

export default function Page() {
  return (
    <main id="main" className="sd-page">
      <DetailHero d={d} />
      <GetGrid d={d.get} />
      <AiReady d={d.ai} />
      <OwnBand d={d.own} />
      <Journey d={d.steps} />
      <CaseCard d={d.result} />
      <Who d={d.who} />
      <Faq data={d.faq} />
      <Closing data={d.closing} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}

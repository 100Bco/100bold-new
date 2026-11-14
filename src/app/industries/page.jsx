import IndHubHero from '@/components/industry/IndHubHero'
import IndPanels from '@/components/industry/IndPanels'
import Closing from '@/components/home/Closing'
import { industries, hub } from '@/data/industries'
import '@/styles/services.css'
import '@/styles/service-detail.css'
import '@/styles/industries.css'

export const metadata = {
  title: 'Industries We Serve | 100Bold',
  description: '100Bold works with $5M+ service businesses in personal injury law, PI medical, real estate, construction and trades, and local services.',
  alternates: { canonical: '/industries' },
}

const schema = [
  { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Industries We Serve', url: 'https://100bold.co/industries', hasPart: industries.map((d) => ({ '@type': 'WebPage', name: d.name, url: 'https://100bold.co/industries/' + d.slug })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://100bold.co/' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://100bold.co/industries' },
  ] },
]

export default function IndustriesPage() {
  return (
    <main id="main" className="sd-page">
      <IndHubHero />
      <IndPanels />
      <section className="idfloor"><div className="mx"><p>{hub.floor}</p></div></section>
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}

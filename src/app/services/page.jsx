import ServicesHero from '@/components/services/ServicesHero'
import ServiceStack from '@/components/services/ServiceStack'
import Together from '@/components/services/Together'
import Closing from '@/components/home/Closing'
import { offers } from '@/data/services'
import '@/styles/services.css'

export const metadata = {
  title: 'Services | SEO, AI Search, Meta Ads, Web Design | 100Bold',
  description: 'How 100Bold grows $5M+ service businesses: SEO and AI search, web design, Meta ads, The Mark for CEOs, and Portal, our AI production studio.',
  alternates: { canonical: '/services' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Services',
  url: 'https://100bold.co/services',
  hasPart: offers.map((o) => ({
    '@type': 'Service',
    name: o.name,
    description: o.line,
    url: 'https://100bold.co' + o.to,
    provider: { '@type': 'Organization', name: '100Bold', url: 'https://100bold.co' },
  })),
}

export default function ServicesPage() {
  return (
    <main id="main" className="sv-page">
      <ServicesHero />
      <ServiceStack />
      <Together />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}

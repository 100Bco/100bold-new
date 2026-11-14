import Hero from '@/components/about/Hero'
import { Founder, Why, Principles, Network, Tech } from '@/components/about/AboutBody'
import Closing from '@/components/home/Closing'
import { about } from '@/data/about'
import '@/styles/services.css'
import '@/styles/service-detail.css'
import '@/styles/industries.css'
import '@/styles/about.css'

export const metadata = { title: about.title, description: about.description, alternates: { canonical: '/about' } }

const site = 'https://100bold.co'
const schema = [
  { '@context': 'https://schema.org', '@type': 'AboutPage', name: about.title, url: site + '/about' },
  { '@context': 'https://schema.org', '@type': 'Organization', name: '100Bold', url: site, description: 'Growth agency for $5M+ service businesses. SEO and AI search, Meta ads, and LinkedIn for CEOs.', founder: { '@type': 'Person', name: 'Minh Mac' }, address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' } },
  { '@context': 'https://schema.org', '@type': 'Person', name: 'Minh Mac', jobTitle: 'Founder', worksFor: { '@type': 'Organization', name: '100Bold' }, image: site + about.founder.photo, url: site + '/about' },
]

export default function AboutPage() {
  return (
    <main id="main" className="sd-page">
      <Hero d={about.hero} />
      <Founder />
      <Why />
      <Principles />
      <Network />
      <Tech />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}

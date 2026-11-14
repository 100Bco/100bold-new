import PortalHero from '@/components/portal/PortalHero'
import PortalPieces from '@/components/portal/PortalPieces'
import PortalMake from '@/components/portal/PortalMake'
import Journey from '@/components/service/Journey'
import Faq from '@/components/home/Faq'
import Closing from '@/components/home/Closing'
import { portalPage, pieces, how, portalFaq, portalClosing } from '@/data/portal'
import '@/styles/services.css'
import '@/styles/service-detail.css'
import '@/styles/industries.css'
import '@/styles/portal.css'

export const metadata = {
  title: portalPage.title,
  description: portalPage.description,
  alternates: { canonical: '/portal' },
}

const site = 'https://100bold.co'
const schema = [
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Portal, AI video production', serviceType: 'AI video production', description: portalPage.hero.line, url: site + '/portal', provider: { '@type': 'Organization', name: '100Bold', url: site } },
  ...pieces.map((p) => ({ '@context': 'https://schema.org', '@type': 'VideoObject', name: p.title + ' | ' + p.client, description: p.description, thumbnailUrl: site + p.poster, contentUrl: site + p.src, ...(p.transcript ? { transcript: p.transcript } : {}), creator: { '@type': 'Organization', name: '100Bold' } })),
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: portalFaq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site + '/' }, { '@type': 'ListItem', position: 2, name: 'Portal', item: site + '/portal' }] },
]

export default function PortalPage() {
  return (
    <main id="main" className="sd-page pt-page">
      <PortalHero />
      <PortalPieces />
      <PortalMake />
      <Journey d={how} className="svt-sand" />
      <Faq data={portalFaq} />
      <Closing data={portalClosing} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}

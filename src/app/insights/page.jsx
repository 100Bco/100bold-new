import Hero from '@/components/about/Hero'
import InsightsBody from '@/components/about/Insights'
import Closing from '@/components/home/Closing'
import { insights } from '@/data/about'
import '@/styles/services.css'
import '@/styles/service-detail.css'
import '@/styles/industries.css'
import '@/styles/about.css'

export const metadata = { title: insights.title, description: insights.description, alternates: { canonical: '/insights' } }

const schema = { '@context': 'https://schema.org', '@type': 'Blog', name: '100Bold Insights', url: 'https://100bold.co/insights', author: { '@type': 'Person', name: 'Minh Mac' }, publisher: { '@type': 'Organization', name: '100Bold' } }

export default function InsightsPage() {
  return (
    <main id="main" className="sd-page">
      <Hero d={insights.hero} cta={false} />
      <InsightsBody />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}

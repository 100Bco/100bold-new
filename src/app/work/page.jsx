import WorkHero from '@/components/work/WorkHero'
import WorkCases from '@/components/work/WorkCases'
import WorkMore from '@/components/work/WorkMore'
import WorkMark from '@/components/WorkMark'
import Closing from '@/components/home/Closing'
import { cases } from '@/data/work'
import '@/styles/services.css'
import '@/styles/service-detail.css'
import '@/styles/industries.css'
import '@/styles/work-mark.css'
import '@/styles/work.css'

export const metadata = {
  title: 'Client Results and Case Studies | 100Bold',
  description: 'Results, with names and numbers: case studies from Dang Law Group, T98 Rehab, LT Commercial Group, Bee Construction, and more.',
  alternates: { canonical: '/work' },
}

const schema = [
  { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Client Results and Case Studies', url: 'https://100bold.co/work', hasPart: cases.map((c) => ({ '@type': 'Article', headline: c.client + ': ' + c.big + ' ' + c.label, url: 'https://100bold.co' + c.to })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://100bold.co/' },
    { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://100bold.co/work' },
  ] },
]

export default function WorkPage() {
  return (
    <main id="main" className="sd-page">
      <WorkHero />
      <WorkCases />
      <WorkMore />
      <WorkMark />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  )
}

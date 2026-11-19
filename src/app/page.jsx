import HeroStream from '@/components/home/HeroStream'
import Logos from '@/components/home/Logos'
import WhatWeDo from '@/components/home/WhatWeDo'
import Results from '@/components/home/Results'
import Mark from '@/components/home/Mark'
import Portal from '@/components/home/Portal'
import Founder from '@/components/home/Founder'
import ProcessGauge from '@/components/home/ProcessGauge'
import Faq from '@/components/home/Faq'
import Closing from '@/components/home/Closing'
import { faq } from '@/data/home'

export const metadata = {
  title: '100Bold | Growth Agency for $5M+ Service Businesses',
  description: '100Bold helps $5M+ service businesses win more of the right clients through SEO and AI search, Meta ads, and LinkedIn for CEOs. Based in Austin, Texas.',
  alternates: { canonical: '/' },
  openGraph: {
    title: '100Bold | Growth Agency for $5M+ Service Businesses',
    description: 'Growth agency for $5M+ service businesses. SEO and AI search, Meta ads, and LinkedIn for CEOs.',
    url: 'https://100bold.co',
    siteName: '100Bold',
    type: 'website',
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: '100Bold: SEO, AI search, ads, video and LinkedIn in one growth system' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og/home.png'] },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function HomePage() {
  return (
    <main id="main" className="nk-home">
      <HeroStream />
      <Logos />
      <WhatWeDo />
      <Results />
      <Mark />
      <Portal />
      <Founder />
      <ProcessGauge />
      <Faq />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}

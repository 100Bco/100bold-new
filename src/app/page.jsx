import Hero from '@/components/home/Hero'
import Router from '@/components/home/Router'
import Logos from '@/components/home/Logos'
import WhatWeDo from '@/components/home/WhatWeDo'
import Results from '@/components/home/Results'
import Mark from '@/components/home/Mark'
import Portal from '@/components/home/Portal'
import Founder from '@/components/home/Founder'
import Process from '@/components/home/Process'
import Faq from '@/components/home/Faq'
import Closing from '@/components/home/Closing'
import { faq } from '@/data/home'

export const metadata = {
  title: '100Bold | Growth Agency for $5M+ Service Businesses',
  description: '100Bold helps $5M+ service businesses win more of the right clients through SEO and AI search, Meta ads, and LinkedIn for CEOs. Based in Austin, Texas.',
  alternates: { canonical: '/' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function HomePage() {
  return (
    <main id="main" className="nk-home">
      <Hero />
      <Router />
      <Logos />
      <WhatWeDo />
      <Results />
      <Mark />
      <Portal />
      <Founder />
      <Process />
      <Faq />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}

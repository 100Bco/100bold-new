import Hero from '../components/home/Hero'
import Router from '../components/home/Router'
import Logos from '../components/home/Logos'
import WhatWeDo from '../components/home/WhatWeDo'
import Results from '../components/home/Results'
import Mark from '../components/home/Mark'
import Portal from '../components/home/Portal'
import Founder from '../components/home/Founder'
import Process from '../components/home/Process'
import Faq from '../components/home/Faq'
import Closing from '../components/home/Closing'

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
    </main>
  )
}

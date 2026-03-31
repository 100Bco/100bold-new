import { useReveal } from './hooks/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import Services from './components/Services'
import MinAI from './components/MinAI'
import Cases from './components/Cases'
import SocialProof from './components/SocialProof'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <Nav />
      <Hero />
      <LogoBar />
      <Services />
      <MinAI />
      <Cases />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

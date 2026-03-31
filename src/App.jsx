import { useEffect } from 'react'
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
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) x.target.classList.add('vis')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )
    document.querySelectorAll('.rv').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <LogoBar />
      <Services />
      <MinAI />
      <Cases />
      <SocialProof />
      <CTA />
      <Footer />
    </>
  )
}

export default App

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
import WaveDivider from './components/WaveDivider'

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
      <WaveDivider from="#FEFCF9" to="#1A1816" variant="wave" />
      <LogoBar />
      <WaveDivider from="#1A1816" to="#FEFCF9" variant="curve" />
      <Services />
      <WaveDivider from="#FEFCF9" to="#F7F3ED" variant="slant" />
      <MinAI />
      <WaveDivider from="#F7F3ED" to="#1A1816" variant="wave" />
      <Cases />
      <WaveDivider from="#1A1816" to="#F7F3ED" variant="curve" />
      <SocialProof />
      <WaveDivider from="#F7F3ED" to="#FEFCF9" variant="slant" />
      <CTA />
      <WaveDivider from="#FEFCF9" to="#1A1816" variant="wave" />
      <Footer />
    </>
  )
}

export default App

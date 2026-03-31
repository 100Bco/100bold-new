import Hero from '../components/Hero'
import LogoBar from '../components/LogoBar'
import IndustriesPreview from '../components/IndustriesPreview'
import Services from '../components/Services'
import MinAI from '../components/MinAI'
import Cases from '../components/Cases'
import CTA from '../components/CTA'
import WaveDivider from '../components/WaveDivider'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WaveDivider from="#FEFCF9" to="#1A1816" variant="wave" />
      <LogoBar />
      <WaveDivider from="#1A1816" to="#FEFCF9" variant="curve" />
      <IndustriesPreview />
      <WaveDivider from="#FEFCF9" to="#FEFCF9" variant="slant" />
      <Services />
      <WaveDivider from="#FEFCF9" to="#F7F3ED" variant="slant" />
      <MinAI />
      <WaveDivider from="#F7F3ED" to="#1A1816" variant="wave" />
      <Cases />
      <WaveDivider from="#1A1816" to="#FEFCF9" variant="curve" />
      <CTA />
    </>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WaveDivider from './components/WaveDivider'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IndustriesPage from './pages/IndustriesPage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import MinAIPage from './pages/MinAIPage'
import LocalServicesPage from './pages/industries/LocalServicesPage'
import ConstructionPage from './pages/industries/ConstructionPage'
import RealEstatePage from './pages/industries/RealEstatePage'
import LawFirmsPage from './pages/industries/LawFirmsPage'
import RehabChiroPage from './pages/industries/RehabChiroPage'
import PlumbingRoofingPage from './pages/industries/PlumbingRoofingPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function RevealObserver() {
  const { pathname } = useLocation()
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((x) => { if (x.isIntersecting) x.target.classList.add('vis') }),
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )
    document.querySelectorAll('.rv').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RevealObserver />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/local-services" element={<LocalServicesPage />} />
        <Route path="/industries/construction" element={<ConstructionPage />} />
        <Route path="/industries/real-estate" element={<RealEstatePage />} />
        <Route path="/industries/law-firms" element={<LawFirmsPage />} />
        <Route path="/industries/rehab-chiro" element={<RehabChiroPage />} />
        <Route path="/industries/plumbing-roofing" element={<PlumbingRoofingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/minai" element={<MinAIPage />} />
      </Routes>
      <WaveDivider from="var(--white)" to="#1A1816" variant="wave" />
      <Footer />
    </BrowserRouter>
  )
}

export default App

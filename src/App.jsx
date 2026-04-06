import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WaveDivider from './components/WaveDivider'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IndustriesPage from './pages/IndustriesPage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import MinAIPage from './pages/MinAIPage'
import ContactPage from './pages/ContactPage'
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

const pageTitles = {
  '/': '100Bold — Start Brave. Stay Bold.',
  '/about': 'About Us — 100Bold | Operators, Not Marketers',
  '/industries': 'Industries We Serve — 100Bold',
  '/industries/local-services': 'Local Service Contractors — 100Bold | HVAC, Plumbing, Roofing',
  '/industries/construction': 'General Contractors & Construction — 100Bold',
  '/industries/real-estate': 'Real Estate Developers — 100Bold',
  '/industries/law-firms': 'Personal Injury Law Firms — 100Bold',
  '/industries/rehab-chiro': 'PI Chiropractors & Rehab Clinics — 100Bold',
  '/industries/plumbing-roofing': 'Plumbing, Roofing & Trades — 100Bold',
  '/services': 'Services — 100Bold | Google Domination & LinkedIn CEO Authority',
  '/work': 'Work — 100Bold | Proven Results, Real Clients',
  '/minai': 'MinAI — The Engine Behind 100Bold',
  '/contact': 'Contact — 100Bold | Let\'s Talk',
}

function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = pageTitles[pathname] || '100Bold — Start Brave. Stay Bold.'
  }, [pathname])
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
      <PageTitle />
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
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WaveDivider from="var(--white)" to="#1A1816" variant="wave" />
      <Footer />
      <Analytics />
    </BrowserRouter>
  )
}

export default App

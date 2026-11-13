import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IndustriesPage from './pages/IndustriesPage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import LocalServicesPage from './pages/industries/LocalServicesPage'
import ConstructionTradesPage from './pages/industries/ConstructionTradesPage'
import RealEstatePage from './pages/industries/RealEstatePage'
import PILawFirmsPage from './pages/industries/PILawFirmsPage'
import PIMedicalPage from './pages/industries/PIMedicalPage'
import ComingSoonPage from './pages/ComingSoonPage'
import SmoothScroll from './lib/SmoothScroll'
import MobileCTA from './components/MobileCTA'
import Cursor from './components/Cursor'

const pageTitles = {
  '/': '100Bold | Growth Agency for $5M+ Service Businesses',
  '/about': 'About 100Bold | Run by Operators',
  '/industries': 'Industries We Serve | 100Bold',
  '/industries/personal-injury-law-firms': 'Marketing for Personal Injury Law Firms | 100Bold',
  '/industries/pi-medical-providers': 'Marketing for PI Medical Providers | 100Bold',
  '/industries/real-estate': 'Real Estate Marketing | 100Bold',
  '/industries/construction-trades': 'Construction and Trades Marketing | 100Bold',
  '/industries/local-services': 'Local Services Marketing | 100Bold',
  '/services': 'Services | SEO, AI Search, Meta Ads, Web Design | 100Bold',
  '/services/seo-ai-search': 'AI SEO and Local SEO Services for Service Businesses | 100Bold',
  '/services/web-design': 'Web Design for Law Firms, Clinics, and Contractors | 100Bold',
  '/services/meta-ads': 'Meta Ads for Service Businesses | Facebook and Instagram | 100Bold',
  '/portal': 'Portal | AI Video Production | 100Bold',
  '/the-mark': 'The Mark | Done-for-You LinkedIn Growth for Founders and CEOs',
  '/insights': 'Insights on AI Search, SEO, and Growth | 100Bold',
  '/work': 'Client Results and Case Studies | 100Bold',
  '/contact': 'Contact 100Bold | Book a Call',
  '/privacy': 'Privacy | 100Bold',
}

function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = pageTitles[pathname] || '100Bold — Start Brave. Stay Bold.'
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `https://100bold.co${pathname === '/' ? '' : pathname}`
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
      <SmoothScroll />
      <Cursor />
      <PageTitle />
      <RevealObserver />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/personal-injury-law-firms" element={<PILawFirmsPage />} />
        <Route path="/industries/pi-medical-providers" element={<PIMedicalPage />} />
        <Route path="/industries/real-estate" element={<RealEstatePage />} />
        <Route path="/industries/construction-trades" element={<ConstructionTradesPage />} />
        <Route path="/industries/local-services" element={<LocalServicesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/seo-ai-search" element={<ComingSoonPage title="SEO and AI Search" />} />
        <Route path="/services/web-design" element={<ComingSoonPage title="Web design" />} />
        <Route path="/services/meta-ads" element={<ComingSoonPage title="Meta ads" />} />
        <Route path="/portal" element={<ComingSoonPage title="Portal" />} />
        <Route path="/the-mark" element={<ComingSoonPage title="The Mark" />} />
        <Route path="/insights" element={<ComingSoonPage title="Insights" />} />
        <Route path="/privacy" element={<ComingSoonPage title="Privacy" />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<ComingSoonPage title="Case study" />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <MobileCTA />
      <Analytics />
    </BrowserRouter>
  )
}

export default App

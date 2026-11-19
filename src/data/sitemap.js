import { serviceLinks, industryLinks } from './nav'

/* One list of public pages: drives the /sitemap page and sitemap.xml */
export const siteGroups = [
  { h: 'Main', links: [
    { path: '/', name: 'Home' },
    { path: '/work', name: 'Work' },
    { path: '/insights', name: 'Insights' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Book a call' },
  ] },
  { h: 'Services', links: [{ path: '/services', name: 'All services' }, ...serviceLinks.filter((l) => l.path)] },
  { h: 'LinkedIn for CEOs', links: [
    { path: '/services/linkedin-for-ceos/case-studies', name: 'Case studies' },
    { path: '/services/linkedin-for-ceos/case-studies/tung-cao', name: 'Tung Cao' },
    { path: '/services/linkedin-for-ceos/case-studies/loc-dang', name: 'Loc Dang' },
    { path: '/services/linkedin-for-ceos/about', name: 'About the program' },
    { path: '/services/linkedin-for-ceos/apply', name: 'Apply' },
  ] },
  { h: 'Industries', links: [{ path: '/industries', name: 'All industries' }, ...industryLinks] },
  { h: 'Legal', links: [
    { path: '/privacy', name: 'Privacy & Cookie Policy' },
    { path: '/terms', name: 'Terms of Use & Disclaimer' },
    { path: '/sitemap', name: 'Sitemap' },
  ] },
]

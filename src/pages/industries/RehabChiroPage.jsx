import IndustryPageTemplate from './IndustryPageTemplate'

export default function RehabChiroPage() {
  const data = {
    label: 'PI CHIROPRACTORS, REHABILITATION CENTERS',
    headline: <>Get More Attorney<br/>Referrals <span className="accent">On Autopilot.</span></>,
    subtitle: "Attorneys refer to clinics they trust — and trust starts with a dominant Google presence and 5-star reviews they can see themselves.",
    stats: [
      { num: '12 Hrs', label: 'First Lead Closed' },
      { num: '47+', label: '5-Star Reviews Generated' },
      { num: '3', label: 'Locations Scaling' },
    ],
    painPoints: [
      "Attorneys don't know you exist",
      'Your Google profile has fewer reviews than competitors',
      'No system to collect reviews after every patient visit',
      "Relying on word-of-mouth alone isn't scalable",
    ],
    solutionIntro: 'We dominate your Google profile so attorneys refer to you first.',
    solutions: [
      {
        title: 'GBP Domination',
        desc: "Full profile optimization, weekly posts, and local SEO. When attorneys search for PI chiropractors, you're the first name they see.",
        iconPath: '<path d="M11 19a8 8 0 100-16 8 8 0 000 16z"/><path d="M21 21l-4.35-4.35"/>',
      },
      {
        title: 'Review Engine',
        desc: 'Automated review requests after every visit. Build the 5-star reputation that makes attorneys confident sending their clients to you.',
        iconPath: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      },
      {
        title: 'Social Content',
        desc: 'Turn your best reviews and patient outcomes into scroll-stopping content across all platforms.',
        iconPath: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
      },
      {
        title: 'MinAI Lead Capture',
        desc: 'AI chatbot on your website qualifies leads 24/7. CRM keeps every referral organized and followed up.',
        iconPath: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
      },
    ],
    services: ['GBP Domination', 'Review Engine', 'Social Content', 'MinAI'],
    shortName: 'Rehab & Chiro',
    ctaIndustry: 'rehab clinic',
  }

  return <IndustryPageTemplate data={data} />
}

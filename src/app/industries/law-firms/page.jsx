import IndustryPageTemplate from '@/components/IndustryPageTemplate'

export const metadata = {
  title: 'Personal Injury Law Firms',
}

export default function LawFirmsPage() {
  const data = {
    label: 'PERSONAL INJURY ATTORNEYS, TRIAL LAWYERS',
    lottie: '/law-red.json',
    headline: <>Sign Cases Before<br/>Competitors <span className="accent">Answer The Phone.</span></>,
    subtitle: "When someone searches 'car accident lawyer near me' at 11 PM, the firm that responds first wins. That should be you — every single time.",
    stats: [
      { num: '30%', label: 'Intake Automated' },
      { num: '24/7', label: 'AI Lead Response' },
      { num: '<5s', label: 'Average Response Time' },
    ],
    painPoints: [
      'Leads calling after hours go to voicemail — and then to competitors',
      "Your Google reviews don't reflect the quality of your results",
      'Intake process is manual, slow, and drops leads',
      'Paying for ads without a strong organic foundation',
    ],
    solutionIntro: 'We build the review engine and lead funnel that signs cases while you sleep.',
    solutions: [
      {
        title: 'Google Domination',
        desc: 'Dominate local search for PI in your market. Optimized profile, weekly content, and keyword-rich review responses.',
        iconPath: '<path d="M11 19a8 8 0 100-16 8 8 0 000 16z"/><path d="M21 21l-4.35-4.35"/>',
      },
      {
        title: 'MinAI Voice AI',
        desc: 'Every call answered instantly — 24/7. AI qualifies leads, books consultations, and texts back missed calls automatically.',
        iconPath: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>',
      },
      {
        title: 'Review Engine',
        desc: 'Automated SMS and email sequences request reviews from past clients. More 5-star reviews = more signed cases.',
        iconPath: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      },
      {
        title: 'Intake Automation',
        desc: 'Leads from web, phone, and social flow into one CRM. No lead falls through the cracks. 30% of intake automated from day one.',
        iconPath: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
      },
    ],
    services: ['Google Domination', 'Paid Ads', 'MinAI Voice AI', 'Review Engine'],
    shortName: 'Law Firms',
    ctaIndustry: 'law firm',
  }

  return <IndustryPageTemplate data={data} />
}

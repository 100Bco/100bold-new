// Homepage copy — source: 100Bold_Website_v1.0.md (do not edit wording here without approval)
export const hero = {
  h1Lines: ['The growth agency', 'for $5M+ service', 'businesses'],
  sub: 'We get you found on Google and in AI search, turn ad spend into signed clients, and make your CEO the best-known name in your market.',
  tagline: ['Start Brave.', 'Stay Bold.'],
  proof: [
    { pre: 'Top ', num: 3, post: " in Google's AI results", who: 'Dang Law Group, personal injury law' },
    { pre: '$', num: 2, post: 'M+ lead in 72 hours', who: 'Bee Construction, general contractor' },
    { pre: 'First lead closed in ', num: 12, post: ' hours', who: 'T98 Rehab, injury chiropractic' },
  ],
}

export const router = {
  h2: 'What do you run?',
  items: [
    { title: 'A personal injury law firm', line: 'More signed cases. Fewer bought leads.', to: '/industries/personal-injury-law-firms', img: '/works/DANG LAW GROUP.png' },
    { title: 'A medical practice that treats injury patients', line: 'More attorney referrals and more patients.', to: '/industries/pi-medical-providers', img: '/works/T98%20REHAB%20%26%20CHIROPRACTIC.png' },
    { title: 'A real estate company', line: 'Deal flow from people who already know your name.', to: '/industries/real-estate', img: '/works/LT COMMERCIAL GROUP.png' },
    { title: 'A construction or trades company', line: 'More bids and booked jobs from search.', to: '/industries/construction-trades', img: '/works/BEE CONSTRUCTION.png' },
    { title: 'A local service business', line: 'Be the first call in your city.', to: '/industries/local-services' },
    { title: "I'm the founder or CEO", line: "Build your own name, not just the company's.", to: '/the-mark' },
  ],
}

export const logos = {
  label: 'Trusted by service businesses across Texas and beyond',
  items: [
    { name: 'Dang Law Group' },
    { name: 'LT Commercial Group', src: '/LT Commercial group logo.png' },
    { name: 'T98 Rehab', src: '/t98-rehab-red-logo-400x299.png' },
    { name: 'Bee Construction', src: '/Bee Con Logo.png' },
    { name: 'Dacy Business Park', src: '/Logo Dacy.jpg' },
  ],
}

export const services = {
  h2: 'What we do',
  items: [
    { title: 'SEO and AI Search', to: '/services/seo-ai-search', gif: '/works/GIF 1.gif', desc: 'Your buyers ask Google and ChatGPT who to hire. We make your business the answer and keep you at the top of Google Maps.' },
    { title: 'Web design', to: '/services/web-design', gif: '/works/GIF 2.gif', desc: 'A fast website that wins the client before the first call, built so Google and AI can read every page.' },
    { title: 'Meta ads', to: '/services/meta-ads', gif: '/works/GIF 3.gif', desc: 'Facebook and Instagram ads tracked to the calls and clients they bring in. You see cost per signed client, not cost per click.' },
    { title: 'Portal', to: '/portal', gif: '/works/GIF 4.gif', desc: 'Our AI production studio. Short films, ads, and social content people choose to watch, delivered in days.' },
  ],
}

export const work = {
  h2: 'Results, with names',
  items: [
    { client: 'Dang Law Group', industry: 'personal injury law', img: '/works/DANG LAW GROUP.png', alt: 'Dang Law Group billboard in Austin featuring Dang-Man', result: "Top 3 in Google's AI results for a target search", desc: "Search, Meta ads, automated intake, and Dang-Man, the firm's own AI superhero.", to: '/work/dang-law-group' },
    { client: 'T98 Rehab', industry: 'pi medical provider', img: '/works/T98%20REHAB%20%26%20CHIROPRACTIC.png', alt: 'T98 Rehab clinic team with a patient', result: '12 hours from launch to first lead closed', desc: 'Google profiles, lead capture, and reviews for an injury chiropractic practice growing across three locations.', to: '/work/t98-rehab' },
    { client: 'LT Commercial Group', industry: 'real estate', img: '/works/LT COMMERCIAL GROUP.png', alt: 'Guests at the Dacy Business Park launch event', result: '3 leads for leasing within 24 hours of launch', desc: "A project brand, website, and launch campaign for Dacy Business Park, plus ongoing content and the CEO's LinkedIn.", to: '/work/lt-commercial-group' },
  ],
}

export const mark = {
  eyebrow: 'The Mark, for founders and CEOs',
  h2: 'Your company has a brand. Do you?',
  body: 'The Mark is our fully managed LinkedIn service for founders and CEOs. We build your presence in your voice, so decision-makers know your name before the first meeting.',
  cta: 'Explore The Mark',
  results: [
    { who: 'Tung Cao, Co-Founder, 100B Global', text: 'Zero to 1M+ impressions in 12 months, with 2 speaking invitations.', big: '1M+', bigLabel: 'impressions' },
    { who: 'Loc Dang, Founder, Dang Law Group', text: '3,596 followers in 4 months, starting from no social media presence.', big: '3,596', bigLabel: 'followers' },
  ],
}

export const portal = {
  eyebrow: 'Portal, AI production',
  h2: 'We built a law firm its own superhero',
  body: 'Dang-Man started as an idea for one personal injury firm. He now stars in their social content, ads, billboards, and short films. Portal is the studio that made him.',
  cta: 'Watch the work',
  imgAlt: 'Dang-Man, the AI superhero created for Dang Law Group',
}

export const founder = {
  h2: 'Run by an operator',
  quote: [
    'I spent ', { hl: 'four years in private equity' }, ', then built a marketing platform to ',
    { hl: '1.6 million users' }, ' and a cafe franchise to ', { hl: '36 locations' },
    '. I judge marketing the way an owner does: by what it brings in.',
  ],
  who: 'Minh Mac, Founder',
  cta: 'About 100Bold',
  imgAlt: 'Minh Mac, Founder of 100Bold',
}

export const process = {
  h2: 'How we work',
  steps: [
    { title: 'Audit', text: 'We review your search presence, ads, and website, and show you where clients are being lost.' },
    { title: 'Build', text: 'We fix the foundation: the site, the tracking, and your profiles.' },
    { title: 'Run', text: 'We run your search, ads, and content every week.' },
    { title: 'Report', text: 'Each month you see calls, clients, and revenue. You own every account and all the data.' },
  ],
}

export const faq = {
  h2: 'Questions',
  items: [
    { q: 'What does 100Bold do?', a: '100Bold is a growth agency for service businesses. We run SEO and AI search optimization, web design, and Meta ads, manage LinkedIn for founders and CEOs through The Mark, and produce video through Portal, our AI production studio.' },
    { q: 'Who do you work with?', a: 'Service businesses with $5M or more in annual revenue. Our clients are personal injury law firms, the medical practices that treat injury patients, real estate companies, construction and trades companies, and local service businesses.' },
    { q: 'Do you work with businesses under $5M?', a: 'Our services are built for companies at $5M and above. If you are close and growing fast, book a call and we will tell you honestly whether we are a fit.' },
    { q: 'Where are you based?', a: 'Austin, Texas. We work with clients across the United States.' },
    { q: 'What is AI search optimization?', a: "It is the work of getting your business named when people ask ChatGPT, Google's AI, and other assistants who to hire. It is also called GEO, for generative engine optimization." },
    { q: 'How do you measure results?', a: 'By signed clients and booked jobs. We track every lead from the first search or ad click to the signed contract.' },
    { q: 'Do I own my website and ad accounts?', a: 'Yes. Your website, domain, ad accounts, and data are yours from day one.' },
    { q: 'How do we start?', a: 'Book a 30-minute call. We will review where you stand and tell you what we would do first.' },
  ],
}

export const closing = {
  h2: 'Be the name they find first',
  body: 'Book a 30-minute call. We will review where you stand and tell you what we would do first.',
  cta: 'Book a call',
}

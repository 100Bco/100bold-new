/* Service detail pages. Structure and headlines follow the Content Blueprint. Proof uses only named, confirmed results. */

const industries = [
  { name: 'Personal injury law firms', to: '/industries/personal-injury-law-firms' },
  { name: 'PI medical providers', to: '/industries/pi-medical-providers' },
  { name: 'Real estate', to: '/industries/real-estate' },
  { name: 'Construction and trades', to: '/industries/construction-trades' },
  { name: 'Local services', to: '/industries/local-services' },
]

export const seo = {
  slug: 'seo-ai-search',
  name: 'SEO and AI Search',
  title: 'AI SEO and Local SEO Services for Service Businesses | 100Bold',
  description: 'We run SEO and AI search optimization (GEO and AEO) for $5M+ service businesses. Rank in Google and Google Maps, and get named by ChatGPT and Google AI.',
  hero: {
    h1: ['Be the business', 'Google and ChatGPT', 'recommend'],
    line: 'We run SEO and AI search optimization, also called GEO or AEO, for $5M+ service businesses. You rank in Google and Google Maps, and AI assistants name you when buyers ask who to hire.',
    cta: 'Get an AI search audit',
    visual: 'chat',
  },
  shift: {
    eyebrow: 'The shift',
    h2: 'Buyers now ask AI who to hire',
    text: 'Your next client may never scroll a page of results. They ask ChatGPT or Google’s AI who to call, and they get one or two names back. If your business is not one of them, you are not in the running.',
  },
  get: {
    h2: 'What you get',
    items: [
      { t: 'Google and Maps rankings', d: 'Your site and Google Business Profile built to rank for the searches that bring in clients, in every city you serve.', icon: 'pin' },
      { t: 'AI visibility', d: 'Clear, consistent facts about you across the web, so ChatGPT and Google’s AI can name you with confidence.', icon: 'spark' },
      { t: 'Review generation', d: 'A steady flow of new reviews, each one answered, because reviews feed both Maps and AI answers.', icon: 'star' },
      { t: 'A site built to be read by AI', d: 'Pages, structure, and schema that let search engines and AI assistants understand exactly what you do.', icon: 'code' },
    ],
  },
  terms: {
    h2: 'SEO, GEO, and AEO in plain English',
    items: [
      { k: 'SEO', full: 'Search engine optimization', d: 'Getting your business to rank in Google search and Google Maps when buyers look for what you do.' },
      { k: 'GEO', full: 'Generative engine optimization', d: 'Getting AI tools like ChatGPT, Gemini, and Google’s AI Overviews to name and cite your business in their answers.' },
      { k: 'AEO', full: 'Answer engine optimization', d: 'Shaping your content so it becomes the direct answer to the questions buyers type or ask out loud.' },
    ],
  },
  measure: {
    h2: 'How we measure it',
    lead: 'Rankings are a means. We report the things that pay your bills.',
    items: [
      { k: 'Calls', d: 'Tracked calls from search and Maps' },
      { k: 'Form fills', d: 'Every inquiry from the site' },
      { k: 'Signed clients', d: 'Leads that turned into revenue' },
      { k: 'AI mentions', d: 'How often AI assistants name you' },
    ],
  },
  result: {
    client: 'Dang Law Group', industry: 'Personal injury law', big: 'Top 3', label: "in Google's AI results for a target search",
    text: 'Search, Meta ads, automated intake, and Dang-Man, the firm’s own AI superhero.',
    img: '/works/DANG LAW GROUP.png', alt: 'Dang Law Group billboard in Austin featuring Dang-Man', to: '/work/dang-law-group',
  },
  who: { h2: 'Who this is for', items: industries },
  faq: {
    h2: 'Questions',
    items: [
      { q: 'What is GEO?', a: 'GEO, or generative engine optimization, is the work of getting AI assistants such as ChatGPT, Gemini, and Google’s AI Overviews to name and cite your business when buyers ask who to hire.' },
      { q: 'How is GEO different from SEO?', a: 'SEO is about ranking in Google’s list of results and in Google Maps. GEO is about being named inside the answer an AI gives. They use many of the same signals, so we run them together.' },
      { q: 'How do I get my business recommended by ChatGPT?', a: 'AI assistants draw on what the web says about you: your website, your Google Business Profile, your reviews, directories, and mentions on other sites. We make those sources clear, consistent, and specific, so the answer points to you.' },
      { q: 'How long does local SEO take?', a: 'It depends on your market and your starting point. We show you movement every month and report on calls, form fills, and signed clients, not just rankings.' },
      { q: 'Which businesses do you do AI SEO for?', a: 'Service businesses with $5M+ in yearly revenue: personal injury law firms, PI medical providers, real estate companies, contractors, and high-ticket local services.' },
      { q: 'Do I need a new website?', a: 'Not always. We start with an audit of your search presence, your site, and your profiles, and tell you what to fix first.' },
    ],
  },
  closing: { h2: 'Be the name AI recommends', body: 'Get an AI search audit. We will show you where you rank, where AI names your competitors, and what we would do first.', cta: 'Get an AI search audit' },
}

export const web = {
  slug: 'web-design',
  name: 'Web design',
  title: 'Web Design for Law Firms, Clinics, and Contractors | 100Bold',
  description: 'We design and build fast websites for service businesses, structured so Google and AI can read every page. You own the site, the domain, and the logins.',
  hero: {
    h1: ['A website that wins', 'the client before', 'the first call'],
    line: 'We design and build fast websites for service businesses, structured so Google and AI can read every page.',
    cta: 'Book a call',
    visual: 'build',
  },
  get: {
    h2: 'What you get',
    items: [
      { t: 'Design that earns trust', d: 'A site that looks like the firm you are, so buyers feel sure before they pick up the phone.', icon: 'eye' },
      { t: 'Copy written for buyers', d: 'Pages written around what clients search for and ask AI, in plain words.', icon: 'pen' },
      { t: 'Fast on every phone', d: 'Built light and quick, because most of your buyers find you on mobile.', icon: 'bolt' },
      { t: 'Leads that land somewhere', d: 'Forms and calls routed straight to your team and CRM, so no inquiry is lost.', icon: 'inbox' },
    ],
  },
  ai: {
    eyebrow: 'Built for search and AI from day one',
    h2: 'Every page is written for people and readable by machines',
    points: [
      'One page for each service and each city you serve',
      'Schema markup that tells Google and AI what you do, where, and for whom',
      'Clear answers to the questions buyers ask',
      'Fast load times and clean code',
      'Connected to your Google Business Profile and reviews',
    ],
  },
  own: { h2: 'You own the site, the domain, and the logins', text: 'No lock-in and no hostage websites. Everything we build is yours from day one, and you can take it anywhere.' },
  steps: {
    h2: 'How we build it',
    items: [
      { k: 'Discover', by: 'Week one', text: 'We learn your business, your buyers, and what they search for.' },
      { k: 'Design', by: 'Your look', text: 'You see the design and the words before anything is built.' },
      { k: 'Build', by: 'Fast and clean', text: 'We build the site for speed, search, and AI.' },
      { k: 'Launch', by: 'And after', text: 'We launch, track every lead, and keep improving.' },
    ],
  },
  result: {
    client: 'LT Commercial Group', industry: 'Real estate', big: '3 leads', label: 'for leasing within 24 hours of launch',
    text: 'A project brand, website, and launch campaign for Dacy Business Park.',
    img: '/works/LT COMMERCIAL GROUP.png', alt: 'Guests at the Dacy Business Park launch event', to: '/work/lt-commercial-group',
  },
  who: { h2: 'Who this is for', items: industries },
  faq: {
    h2: 'Questions',
    items: [
      { q: 'Who builds websites for personal injury law firms?', a: '100Bold designs and builds websites for personal injury law firms and other service businesses, written for clients and built so Google and AI can read every page.' },
      { q: 'What should a contractor website include?', a: 'A clear page for each service and each area you cover, real project photos, reviews, a fast way to call or request a bid, and the details Google and AI need to recommend you.' },
      { q: 'How much does a law firm website cost?', a: 'It depends on the number of pages, locations, and features. We give you a fixed quote after a short call.' },
      { q: 'Who owns the website?', a: 'You do. The site, the domain, the content, and every login are yours from day one.' },
      { q: 'Can you redesign our site without losing rankings?', a: 'Yes. We map your current pages, keep what already ranks, and redirect old addresses so you keep the traffic you have earned.' },
      { q: 'Do you write the content?', a: 'Yes. We write every page around what your buyers search for and ask AI, and you approve it before launch.' },
    ],
  },
  closing: { h2: 'A site that wins the first call', body: 'Book a 30-minute call. We will look at your current site and tell you what we would change first.', cta: 'Book a call' },
}

export const ads = {
  slug: 'meta-ads',
  name: 'Meta ads',
  title: 'Meta Ads for Service Businesses | Facebook and Instagram | 100Bold',
  description: 'We run Facebook and Instagram ads for service businesses and track every dollar to the calls and clients it brings in. You own the ad account.',
  hero: {
    h1: ['Stop paying', 'for leads that', 'never sign'],
    line: 'We run Facebook and Instagram ads for service businesses and track every dollar to the calls and clients it brings in.',
    cta: 'Book a call',
    visual: 'funnel',
  },
  get: {
    h2: 'What you get',
    items: [
      { t: 'Campaigns built to sign', d: 'Targeting, offers, and forms set up for the clients you want, not the cheapest clicks.', icon: 'target' },
      { t: 'Creative that stops the scroll', d: 'Video and image ads made by Portal, our AI production studio.', icon: 'play' },
      { t: 'Tracking to the signed client', d: 'Every lead followed from the ad to the call, the consult, and the signed client.', icon: 'chart' },
      { t: 'A report you can read', d: 'Cost per signed client, every month, in plain numbers.', icon: 'doc' },
    ],
  },
  steps: {
    h2: 'Tracking from ad to signed client',
    lead: 'Most agencies stop counting at the click. We follow every lead to the end.',
    items: [
      { k: 'Ad', by: 'Facebook and Instagram', text: 'The right people see the right offer.' },
      { k: 'Lead', by: 'Call or form', text: 'Every call and form is tracked back to the ad that drove it.' },
      { k: 'Consult', by: 'Your intake', text: 'We see which leads became real conversations.' },
      { k: 'Signed', by: 'Revenue', text: 'You see cost per signed client, not cost per click.' },
    ],
  },
  own: { h2: 'You own the ad account', text: 'Your account, your pixel, your data, and your audiences. If we ever part ways, everything stays with you.' },
  creative: {
    eyebrow: 'Creative made by Portal',
    h2: 'Ads people actually watch',
    text: 'Portal, our AI production studio, makes the video and image ads. Film-quality work, delivered in days, so you can test more ideas for less.',
    cta: 'Visit Portal', to: '/portal',
    video: '/portal/dang-man-v2.mp4', poster: '/portal/dang-man-v2-poster.jpg', alt: 'Dang-Man, the AI superhero made for Dang Law Group',
  },
  result: {
    client: 'Bee Construction', industry: 'Construction', label: 'Meta ads for a general contractor',
    text: 'Facebook and Instagram campaigns built to bring in project leads for Bee Construction.',
    img: '/works/BEE CONSTRUCTION.png', alt: 'Bee Construction project', to: '/work/bee-construction',
  },
  chatgpt: {
    tag: 'Early access',
    h2: 'ChatGPT ads',
    text: 'Ads inside ChatGPT are new and still rolling out. We are setting up early access for our clients, so you can be in front of buyers at the moment they ask AI who to hire.',
    cta: 'Ask about early access',
  },
  who: { h2: 'Who this is for', items: industries },
  faq: {
    h2: 'Questions',
    items: [
      { q: 'Do Facebook ads work for law firms?', a: 'They can, when the ads, the intake, and the tracking work together. We judge every campaign by cost per signed client, not by clicks or leads.' },
      { q: 'Who runs Meta ads for contractors?', a: '100Bold runs Facebook and Instagram ads for contractors and other service businesses, with every lead tracked to the bid or job it brings in.' },
      { q: 'Who owns the ad account?', a: 'You do. The ad account, the pixel, the audiences, and the data stay with you.' },
      { q: 'Who makes the ads?', a: 'Portal, our AI production studio, makes the video and image ads, so new creative is ready in days.' },
      { q: 'Can you advertise on ChatGPT?', a: 'Ads in ChatGPT are new and still rolling out. We are setting up early access for clients and will tell you when it fits your market.' },
      { q: 'How do you report results?', a: 'Every month you see spend, leads, consults, and signed clients, and what each signed client cost.' },
    ],
  },
  closing: { h2: 'Pay for clients, not clicks', body: 'Book a 30-minute call. We will look at your ads and tracking and tell you what we would fix first.', cta: 'Book a call' },
}

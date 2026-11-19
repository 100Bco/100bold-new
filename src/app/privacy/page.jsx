import LegalPage from '@/components/LegalPage'
import CookieSettingsLink from '@/components/CookieSettingsLink'
import { company as c } from '@/data/company'
import '@/styles/legal.css'

export const metadata = {
  title: 'Privacy & Cookie Policy | 100Bold',
  description: 'How 100Bold collects, uses and protects your information, which cookies our site uses, and the privacy rights you have under US state laws.',
  alternates: { canonical: '/privacy' },
}

const mail = <a href={'mailto:' + c.email}>{c.email}</a>
const phone = <a href={'tel:' + c.tel}>{c.phone}</a>

const cookies = [
  ['bold_consent', '100Bold', 'Remembers your cookie choice', 'Essential', '6 months'],
  ['Vercel hosting and analytics', 'Vercel', 'Delivers pages securely; counts page views without cookies or personal profiles', 'Essential', 'No cookie set'],
  ['Contact and booking forms', 'MinAI (LeadConnector)', 'Runs the forms and calendar you use to reach us', 'Essential', 'Session to 1 year'],
  ['Video player', 'Wistia', 'Plays our videos and remembers playback settings', 'Essential', 'Up to 1 year'],
  ['_ga, _ga_*', 'Google Analytics', 'Shows which pages are visited and how people found us', 'Analytics (opt-in)', 'Up to 2 years'],
  ['TikTok post embeds', 'TikTok', 'Shows TikTok posts on our AI Production page; TikTok may recognise you across sites', 'Marketing (opt-in)', 'Set by TikTok'],
]

const sections = [
  { id: 'who', h: 'Who we are', body: <>
    <p>{c.name} (“{c.name},” “we,” “us”) is a growth agency based in Austin, Texas. This policy explains how we handle personal information when you visit {c.site.replace('https://', '')} (the “Site”), contact us, or book a call. It does not cover the services we provide to clients under a separate written agreement.</p>
  </> },
  { id: 'collect', h: 'Information we collect', body: <>
    <p><b>Information you give us.</b> Your name, email, phone number, company, website, budget range and message when you fill in a form, book a call, apply for a program or email us.</p>
    <p><b>Information collected automatically.</b> Device and browser type, approximate location from your IP address, pages viewed, referring site and time on page. Some of this is collected through cookies, described in section 6.</p>
    <p><b>Information from others.</b> Details from scheduling and CRM tools we use, and public business information (for example, from LinkedIn or your website) when you ask us to review your marketing.</p>
    <p>We do not ask for sensitive personal information such as health, financial account or government ID numbers through the Site. Please do not send it.</p>
  </> },
  { id: 'use', h: 'How we use it', body: <>
    <ul>
      <li>To reply to you, schedule and hold calls, and send proposals you ask for.</li>
      <li>To provide and improve the Site and understand which pages are useful.</li>
      <li>To send occasional updates, if you agree. You can unsubscribe from any email.</li>
      <li>To keep the Site secure, prevent fraud and meet legal obligations.</li>
    </ul>
  </> },
  { id: 'share', h: 'How we share it', body: <>
    <p>We share personal information only with service providers that help us run our business, under contracts that limit how they use it: website hosting (Vercel), forms, CRM, calendar and messaging (MinAI / LeadConnector), video hosting (Wistia), analytics (Google, only if you allow it) and email. We may also disclose information to comply with the law, protect our rights, or as part of a merger or sale of the business.</p>
    <p><b>We do not sell your personal information</b>, and we do not share it for cross-context behavioral advertising. If you turn on marketing cookies, embedded TikTok posts may collect information directly under TikTok’s own policy.</p>
  </> },
  { id: 'sms', h: 'Text messages and email', body: <>
    <p>If you give us your mobile number and agree to receive texts, we may send messages about your inquiry, appointment reminders and follow-ups. Message frequency varies. Message and data rates may apply. Reply <b>STOP</b> to opt out or <b>HELP</b> for help. Consent to texts is not a condition of any purchase.</p>
    <p>We do not share or sell your mobile number or text-messaging consent with third parties or affiliates for their marketing purposes.</p>
    <p>Marketing emails include an unsubscribe link, and we honor requests promptly as required by the CAN-SPAM Act.</p>
  </> },
  { id: 'cookies', h: 'Cookie Policy', body: <>
    <p>Cookies are small files a website stores on your device. Similar technologies include local storage and pixels. We group them by purpose:</p>
    <ul>
      <li><b>Essential</b>: needed for the Site to work, such as security, page delivery, forms and remembering your cookie choice. These are always on.</li>
      <li><b>Analytics</b>: help us understand how the Site is used. Off until you click “Accept” or turn them on.</li>
      <li><b>Marketing</b>: content from social platforms that may track you across sites. Off until you allow them.</li>
    </ul>
    <div className="lg-table-wrap">
      <table className="lg-table">
        <thead><tr><th>Cookie or tool</th><th>Provider</th><th>Purpose</th><th>Type</th><th>Duration</th></tr></thead>
        <tbody>{cookies.map((r) => <tr key={r[0]}>{r.map((x, i) => <td key={i}>{x}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <p><b>Managing cookies.</b> Change your choice at any time with <CookieSettingsLink className="lg-link" />, also found at the bottom of every page. You can also block or delete cookies in your browser settings; blocking essential cookies may stop parts of the Site from working.</p>
  </> },
  { id: 'gpc', h: 'Global Privacy Control and Do Not Track', body: <>
    <p>We honor the <b>Global Privacy Control (GPC)</b> signal. If your browser sends it, we treat it as a request to opt out of the sale or sharing of your information and of targeted advertising, and we keep marketing cookies off.</p>
    <p>There is no common standard for “Do Not Track” signals, so we respond to GPC instead.</p>
  </> },
  { id: 'rights', h: 'Your privacy rights', body: <>
    <p>Depending on where you live, including California, Texas, Virginia, Colorado, Connecticut, Utah, Oregon and other states with consumer privacy laws, you may have the right to:</p>
    <ul>
      <li>Know what personal information we hold about you and get a copy of it.</li>
      <li>Correct inaccurate information.</li>
      <li>Delete your information.</li>
      <li>Opt out of the sale or sharing of your information, targeted advertising and profiling.</li>
      <li>Appeal our decision if we decline your request.</li>
      <li>Not be treated differently for using these rights.</li>
    </ul>
    <p>To make a request, email {mail} with the subject “Privacy request,” or call {phone}. We will verify your identity before acting and respond within 45 days. You may use an authorized agent with your written permission. If we deny your request, reply to our decision to appeal; if you are still not satisfied, you may contact your state attorney general.</p>
    <p><b>California residents.</b> In the past 12 months we collected identifiers, contact and commercial information, internet activity and approximate location, for the purposes in section 3. We have not sold or shared personal information, and we do not knowingly sell or share information of anyone under 16.</p>
  </> },
  { id: 'children', h: 'Children', body: <>
    <p>The Site is for businesses and is not directed to children under 13. We do not knowingly collect information from children. If you believe a child has sent us information, contact us and we will delete it.</p>
  </> },
  { id: 'keep', h: 'How long we keep it and how we protect it', body: <>
    <p>We keep personal information only as long as needed for the purposes above, for example for the length of a conversation or client relationship plus any period required for legal, tax or accounting reasons. We use reasonable administrative, technical and physical safeguards, but no system is completely secure.</p>
  </> },
  { id: 'links', h: 'Other websites', body: <>
    <p>The Site links to other sites and shows content from platforms such as TikTok, LinkedIn and Wistia. Their privacy practices are governed by their own policies.</p>
  </> },
  { id: 'changes', h: 'Changes and contact', body: <>
    <p>We may update this policy. The effective date at the top shows when it last changed. Questions or requests: {mail}, {phone}, or {c.name}, {c.address}.</p>
  </> },
]

export default function Page() {
  return (
    <LegalPage
      title="Privacy & Cookie Policy"
      updated={c.effective}
      intro={<p>The short version: we collect what you send us and basic site analytics, we use it to reply and improve the site, we never sell it, and non-essential cookies stay off until you say yes.</p>}
      sections={sections}
      aside={<CookieSettingsLink className="lg-toc-btn" />}
    />
  )
}

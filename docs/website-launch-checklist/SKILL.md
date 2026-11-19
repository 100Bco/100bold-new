---
name: website-launch-checklist
description: Checklist bắt buộc khi thiết kế, xây dựng, redesign hoặc launch bất kỳ website nào cho 100Bold hoặc khách hàng của 100Bold (DLG, T98, LTCG, Bee Construction, MinAI, Rocha's...). Dùng ngay từ đầu dự án và trước mỗi lần đẩy lên production, để không bỏ sót: thumbnail gửi link (Open Graph) riêng cho từng trang, banner cookie và các trang pháp lý (Privacy, Cookie, Terms, Disclaimer, Sitemap) theo luật nơi khách kinh doanh, hero section có hiệu ứng, SEO và schema, tốc độ, mobile, form và tracking, và dòng "Powered by 100Bold" ở footer. Trigger khi người dùng nói "làm web", "build website", "redesign", "landing page", "launch web", "web mới cho khách", "kiểm tra web trước khi lên", "website checklist", hoặc bắt đầu một repo website mới.
---

# Website launch checklist (100Bold)

Đây là bộ tiêu chuẩn tối thiểu cho mọi website 100Bold làm. Đọc hết **trước khi viết dòng code đầu tiên**, lập kế hoạch theo đúng thứ tự dưới đây, và chạy lại phần "Kiểm tra trước khi lên production" mỗi lần deploy.

Cách làm việc với người dùng:
- Việc thiết kế lớn (hero, bố cục, ý tưởng ảnh) → đưa đề xuất + ảnh chụp màn hình cho duyệt trước, rồi mới làm.
- Việc rõ ràng, cụ thể → làm luôn, chụp màn hình kiểm tra, báo kết quả.
- Không bịa số liệu, kết quả case study, tên pháp nhân, địa chỉ. Thiếu thì hỏi.
- Nhận xét bằng tiếng Việt; nội dung website theo ngôn ngữ thị trường của khách.

---

## 0. Thu thập thông tin trước khi làm

Hỏi hoặc tìm trong tài liệu khách cung cấp. Ghi vào một file dữ liệu dùng chung (ví dụ `src/data/company.js`) để mọi trang lấy từ một nguồn:

- Tên pháp nhân đầy đủ (vd "XYZ LLC"), tên thương hiệu, tên miền.
- Địa chỉ, điện thoại, email liên hệ (NAP phải giống hệt Google Business Profile).
- **Quốc gia/bang kinh doanh** → quyết định luật áp dụng ở mục 2.
- Ngành nghề có quy định riêng không: luật sư (quảng cáo luật sư, không hứa kết quả), y tế (HIPAA: không thu thông tin bệnh qua form thường), tài chính, bất động sản (Fair Housing).
- Công cụ bên thứ ba sẽ dùng: analytics, pixel quảng cáo, CRM/form (MinAI...), chat, video (Wistia/YouTube), mạng xã hội nhúng. → quyết định danh sách cookie.
- Có gửi SMS/email marketing không → cần điều khoản SMS/CAN-SPAM.
- Logo (bản nền trong suốt, bản sáng và bản tối), màu thương hiệu, font, ảnh thật của khách.

---

## 1. Thumbnail gửi link (Open Graph) cho TỪNG trang

Mục tiêu: gửi link trang nào qua Messenger/Zalo/iMessage/LinkedIn/Slack, người nhận **nhìn thumbnail là hiểu nội dung chính của trang đó** trước khi bấm.

- Mỗi trang chính có ảnh riêng: trang chủ, từng dịch vụ, từng ngành, Work/case study, About, Contact, blog/insights, trang tổng (Services, Industries).
- **Ảnh chân thực (realistic photo), thể hiện đúng nội dung trang.** Không dùng icon/illustration; không dùng ảnh case study cho trang dịch vụ.
- Ưu tiên dùng lại hero image của trang nếu nó đã nói đúng nội dung. Nếu không có → tạo ảnh mới (Higgsfield `gpt_image_2_6`, 16:9, chừa 40% bên trái trống cho chữ), đưa 2-3 phương án cho người dùng chọn.
- **Ít chữ**: chỉ logo + tên trang ngắn. Không nhồi mô tả, tên miền (nền tảng chat tự hiện title/description bên dưới).
- Khổ 1200×630, PNG/JPG, < 1 MB. Chữ phải đọc được khi thu nhỏ còn ~300px.
- Cách làm trong Next.js App Router: xem `references/og-thumbnails.md` (một hàm render dùng chung + file `opengraph-image.jsx` cho mỗi route).
- Kiểm tra: `curl` trang, xem thẻ `og:image` trỏ đúng ảnh của trang đó; trang nào chưa có ảnh riêng phải rơi về ảnh mặc định của site (logo), không rơi về ảnh của trang khác.
- Sau khi deploy: nhắc người dùng làm mới cache bằng Facebook Sharing Debugger và LinkedIn Post Inspector.

---

## 2. Cookie consent + trang pháp lý

Chi tiết luật, cấu trúc banner, dàn ý từng trang: `references/legal.md`.

Tối thiểu cho mọi site:
- **Banner cookie** ngay lần đầu vào: "essential cookies" luôn bật; analytics + marketing **chỉ chạy sau khi khách đồng ý**. Nút: Accept / Reject non-essential / Preferences (bật tắt từng nhóm). Lưu lựa chọn 6 tháng. Link "Cookie settings" ở footer để đổi lại.
- **Tôn trọng Global Privacy Control (GPC)** (bắt buộc ở CA, CO, CT, TX và nhiều bang Mỹ).
- Script analytics/pixel **không được tải** trước khi có consent (kiểm tra bằng network log, không chỉ tin vào code).
- Trang pháp lý, gộp còn 2-3 trang:
  - **Privacy & Cookie Policy** (gồm bảng cookie thật của site, quyền theo luật bang, SMS, GPC).
  - **Terms of Use & Disclaimer** (gồm disclaimer kết quả, nội dung AI, trademark, luật áp dụng, accessibility).
  - **Sitemap** (trang HTML) + `sitemap.xml` tự sinh từ cùng một danh sách trang.
- Redirect các URL quen thuộc: `/privacy-policy`, `/cookie-policy`, `/terms-of-use`, `/terms-and-conditions`, `/disclaimer`.
- Footer: Privacy & Cookies · Terms & Disclaimer · Sitemap · Cookie settings.
- Luôn ghi ngày hiệu lực và khuyên người dùng nhờ luật sư xem lại. Không tự bịa tên pháp nhân.

---

## 3. Hero section hấp dẫn

- Hero phải nói được 3 điều trong 3 giây: **làm gì, cho ai, kết quả gì** + một nút hành động chính (Book a call...).
- Có chuyển động có chủ đích: scroll effect (GSAP + ScrollTrigger, Lenis smooth scroll), chữ hiện dần, ảnh/video chuyển động nhẹ, số liệu đếm lên. Đưa 2-3 hướng ý tưởng (có ảnh mẫu) cho người dùng chọn trước khi dựng.
- **Vừa đúng 1 màn hình** (`100svh`) ở mọi kích thước: kiểm tra tối thiểu 375×667, 390×844, 768×1024, 1280×720, 1440×900, 1920×1080.
- Tôn trọng `prefers-reduced-motion` (tắt hiệu ứng, vẫn hiện nội dung đầy đủ).
- Video hero: nén nhỏ, `muted playsinline`, có poster; host ở Wistia/CDN, không để file video lớn trong repo/Vercel.
- Không để hiệu ứng làm chậm LCP: ảnh/chữ chính hiện ngay, hiệu ứng chạy sau.

---

## 4. SEO, AI search và structured data

- Mỗi trang: `title` (≤ 60 ký tự, có từ khóa + thương hiệu), `meta description` (≤ 155), `canonical`, 1 thẻ H1 duy nhất.
- `robots.txt` + `sitemap.xml` đúng URL thật (không trỏ tới URL đã redirect).
- Đổi URL → luôn thêm redirect 301 từ URL cũ; không redirect nhầm thư mục ảnh/font.
- Schema JSON-LD: Organization, LocalBusiness (NAP khớp GBP), WebSite, BreadcrumbList, Service, FAQPage (nếu có FAQ), Person (founder), Article (blog).
- **VideoObject phải đủ trường bắt buộc**: `name`, `description`, `thumbnailUrl`, `uploadDate` (ISO 8601), `contentUrl` hoặc `embedUrl`; `creator` có `url`. Thiếu `uploadDate` → Google Search Console báo lỗi nghiêm trọng.
- Kiểm tra mọi schema bằng Rich Results Test trước khi lên.
- AI search: nội dung trả lời trực tiếp câu hỏi (FAQ), `llms.txt`, thông tin thương hiệu nhất quán trên web/GBP/mạng xã hội.
- Ảnh có `alt` mô tả thật; tên file có nghĩa.
- Sau launch: thêm site vào Google Search Console + Bing Webmaster, gửi sitemap.

---

## 5. Tốc độ (Core Web Vitals)

- Mục tiêu Lighthouse mobile ≥ 90; LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Ảnh: WebP/AVIF, đúng kích thước hiển thị, `loading="lazy"` cho ảnh dưới màn hình đầu, có `width`/`height`.
- Font: tải đúng các weight dùng, `display=swap`.
- Script bên thứ ba: `lazyOnload` hoặc chỉ tải khi cần (và sau consent).
- Video nặng không host trên Vercel.

---

## 6. Mobile và trải nghiệm

- Không có cuộn ngang ở bất kỳ trang nào (kiểm tra bằng Playwright: `scrollWidth > clientWidth`).
- Nút bấm ≥ 44px, chữ body ≥ 15px trên mobile.
- Menu mobile, form, popup đều dùng được bằng một tay.
- Các hàng thẻ dài trên mobile → chuyển thành slider ngang có chấm chỉ vị trí, thay vì xếp dọc quá dài.
- Trang 404 có thiết kế riêng và link về trang chủ/liên hệ.
- Favicon, apple-touch-icon, `theme-color`.

---

## 7. Form, CRM và tracking

- Form gửi được thật, vào đúng CRM (MinAI), có thông báo/trang cảm ơn, có email tự động xác nhận.
- Nếu thu số điện thoại để nhắn tin: ô đồng ý SMS riêng, không tick sẵn, có link Privacy Policy, ghi "Msg & data rates may apply. Reply STOP to opt out."
- Không thu dữ liệu nhạy cảm qua form thường (sức khỏe, số tài khoản, SSN).
- Analytics (GA4) và pixel quảng cáo gắn sau consent; đặt conversion event cho: gửi form, đặt lịch, bấm gọi, bấm email.
- Link `tel:` và `mailto:` đúng.

---

## 8. Accessibility (ADA / WCAG 2.1 AA)

- Tương phản chữ đủ (4.5:1 cho chữ thường).
- Dùng được bằng bàn phím, có focus rõ ràng; popup/banner có `role="dialog"`.
- Ảnh có alt, nút có `aria-label` khi chỉ có icon.
- Video có phụ đề nếu có lời nói.
- Có mục Accessibility trong Terms (cam kết + email liên hệ).

---

## 9. Nội dung và hình ảnh

- Không bịa số liệu, testimonial, kết quả. Số liệu case study lấy từ khách và ghi rõ nguồn/thời điểm nếu cần.
- Ảnh AI: không giả mạo người thật là khách hàng; nhân vật thật (founder, luật sư...) phải dùng ảnh thật làm tham chiếu và được họ duyệt.
- Logo khách hàng chỉ dùng khi được phép; trademark bên thứ ba (Google, Meta, LinkedIn...) không dùng logo của họ làm hình chính.
- Chính tả, tên riêng, số điện thoại kiểm tra 2 lần.

---

## 10. Bảo mật và vận hành

- HTTPS, chuyển hướng `www` ↔ không `www` thống nhất.
- Security headers cơ bản (X-Content-Type-Options, Referrer-Policy, frame-ancestors).
- Không commit secret/API key; dùng biến môi trường.
- Mỗi thay đổi: build sạch → chụp màn hình desktop + mobile → commit → deploy. Production deploy theo quy trình người dùng đã quy định (vd đẩy cả branch và main).

---

## 11. Footer: "Powered by 100Bold"

- **Mọi website 100Bold làm cho khách đều có dòng "Powered by 100Bold"** ở hàng cuối footer (cạnh dòng copyright hoặc các link pháp lý). Không áp dụng cho chính website 100bold.co.
- Chữ "100Bold" là link tới `https://100bold.co`, mở tab mới: `<a href="https://100bold.co" target="_blank" rel="noopener">100Bold</a>`.
- Chữ nhỏ, cùng màu và cỡ với dòng copyright; không dùng logo to, không làm lệch thiết kế của khách.
- Nếu hợp đồng của khách yêu cầu không ghi credit thì hỏi người dùng trước khi bỏ.

---

## Kiểm tra trước khi lên production

Chạy và báo kết quả thật (pass/fail kèm bằng chứng):

1. `next build` (hoặc build tương ứng) không lỗi.
2. Mọi trang trả 200; mọi URL cũ redirect 301 đúng.
3. Mỗi trang chính có `og:image` riêng; tải ảnh về xem bằng mắt.
4. Banner cookie hiện lần đầu; network log: không có request tới analytics/pixel trước khi Accept, có sau khi Accept; GPC → marketing bị khóa.
5. Trang Privacy, Terms, Sitemap có nội dung thật, footer có đủ link + Cookie settings.
6. `sitemap.xml`, `robots.txt` đúng; schema qua Rich Results Test.
7. Hero vừa 1 màn hình ở 6 kích thước; không cuộn ngang trên mobile ở mọi trang.
8. Lighthouse mobile ≥ 90 cho trang chủ và 1 trang dịch vụ.
9. Form gửi thử thành công vào CRM.
10. Footer có "Powered by 100Bold" link đúng tới https://100bold.co (trừ site 100bold.co).
11. Nhắc người dùng: Search Console + Bing, làm mới cache OG, luật sư xem trang pháp lý.

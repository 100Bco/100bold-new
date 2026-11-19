# Cookie consent và trang pháp lý

Không phải tư vấn pháp lý. Đây là chuẩn thực hành tốt để dựng nhanh; luôn nhắc người dùng nhờ luật sư xem lại, đặc biệt với khách ngành luật, y tế, tài chính.

## Chọn luật theo thị trường

| Thị trường | Mô hình cookie | Bắt buộc chính |
|---|---|---|
| **Mỹ** | Opt-out theo luật bang; best practice là opt-in cho analytics/marketing (giảm rủi ro kiện pixel/wiretap như CIPA) | Privacy Policy (CalOPPA áp cho mọi site có khách California); quyền theo luật bang (CA CCPA/CPRA, TX TDPSA, VA, CO, CT, UT, OR, MT...); tôn trọng **GPC**; "Do Not Sell or Share" nếu có bán/chia sẻ dữ liệu cho quảng cáo; COPPA (trẻ < 13); CAN-SPAM (email); TCPA + 10DLC (SMS); ADA (accessibility) |
| **EU/UK** | Opt-in bắt buộc (GDPR + ePrivacy) | Banner chặn toàn bộ cookie không thiết yếu trước khi đồng ý, nút Reject ngang hàng Accept, cơ sở pháp lý, DPO/đại diện, quyền GDPR, chuyển dữ liệu ra ngoài EU |
| **Canada** | PIPEDA, Quebec Law 25 (opt-in) | Privacy officer, consent rõ ràng |
| **Việt Nam** | Nghị định 13/2023 về bảo vệ dữ liệu cá nhân | Đồng ý rõ ràng trước khi xử lý dữ liệu, thông báo mục đích, quyền của chủ thể dữ liệu |

Nếu site nhắm nhiều thị trường → áp mức chặt nhất (opt-in).

## Banner cookie (chuẩn 100Bold)

Câu chữ mẫu (Mỹ):
> We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve your experience and understand site traffic. By clicking "Accept," you agree to our use of cookies as described in our Cookie Policy. You can change your choice at any time from "Cookie settings" at the bottom of every page.

- Nút: **Accept**, **Reject non-essential**, **Preferences**.
- Preferences: Essential (Always on), Analytics (toggle), Marketing (toggle; tự khóa khi có GPC).
- Lưu cookie first-party `<brand>_consent` = `{v, analytics, marketing, ts}`, 180 ngày, `SameSite=Lax; Secure`. Đổi `v` khi danh sách cookie thay đổi để hỏi lại.
- Khi khách rút consent analytics → xóa `_ga*`.
- GA4/pixel chỉ được chèn vào trang khi `consent.analytics`/`consent.marketing` = true (render có điều kiện, không chỉ dùng Consent Mode default-denied).
- Nội dung nhúng có theo dõi (TikTok, Instagram, YouTube không dùng nocookie) → hiện placeholder cho đến khi khách cho phép marketing.
- Vị trí: góc dưới trái desktop (≤ 440px), full width dưới đáy trên mobile; không che nút hành động chính quá lâu; `role="dialog"`, dùng được bằng bàn phím.

Mẫu code tham khảo (Next.js): repo 100bold-new, các file `src/lib/consent.js`, `src/components/CookieBanner.jsx`, `src/components/CookieSettingsLink.jsx`, `src/styles/cookie.css`.

## Trang 1: Privacy & Cookie Policy (`/privacy`)

1. Who we are (pháp nhân, phạm vi: website, không phải hợp đồng dịch vụ)
2. Information we collect (khách tự cung cấp / tự động / từ bên thứ ba); không thu dữ liệu nhạy cảm
3. How we use it
4. How we share it (liệt kê nhà cung cấp thật: hosting, CRM/form, video, analytics, email); "We do not sell your personal information" (chỉ ghi nếu đúng)
5. Text messages and email (SMS: tần suất, rates, STOP/HELP, không chia sẻ số điện thoại/consent SMS cho bên thứ ba để marketing; CAN-SPAM)
6. **Cookie Policy** (`id="cookies"`): định nghĩa, 3 nhóm, **bảng cookie thật của site** (tên, nhà cung cấp, mục đích, loại, thời hạn), cách quản lý + nút Cookie settings
7. Global Privacy Control and Do Not Track
8. Your privacy rights (biết, sửa, xóa, mang đi, opt-out bán/chia sẻ/quảng cáo/profiling, kháng nghị, không phân biệt đối xử; cách gửi yêu cầu; xác minh; trả lời trong 45 ngày; người đại diện); đoạn riêng cho California
9. Children
10. Retention and security
11. Other websites
12. Changes and contact

Thêm cho ngành đặc thù:
- Y tế: không nhận thông tin bệnh qua form; nếu là covered entity thì link Notice of Privacy Practices (HIPAA).
- Luật sư: gửi form không tạo quan hệ luật sư-khách hàng; không gửi thông tin bí mật qua form.

## Trang 2: Terms of Use & Disclaimer (`/terms`)

1. Using this site (chấp nhận điều khoản, đối tượng)
2. Our services (form/booking không tạo hợp đồng; hợp đồng riêng ưu tiên)
3. Content and trademarks (bản quyền; logo khách hàng; trademark bên thứ ba, không liên kết)
4. Acceptable use
5. **Disclaimer** (`id="disclaimer"`): thông tin chung không phải tư vấn; kết quả không đảm bảo (case study, testimonial); nội dung tạo bằng AI; ngành luật/y tế
6. Third-party sites and tools
7. No warranties ("as is")
8. Limitation of liability
9. Indemnity
10. Governing law (bang + quận nơi đặt trụ sở)
11. Accessibility (cam kết WCAG 2.1 AA + email)
12. Changes and contact

Ngành luật (Mỹ): thêm "Attorney Advertising", "Prior results do not guarantee a similar outcome", "No attorney-client relationship is formed by using this site", tên luật sư chịu trách nhiệm nội dung nếu luật bang yêu cầu (vd Texas Bar Rule 7.02).

## Trang 3: Sitemap (`/sitemap`)

- Danh sách nhóm theo menu (Main, Services, Industries, Work, Legal...), lấy từ cùng một file dữ liệu sinh ra `sitemap.xml`.
- Link tới `/sitemap.xml` cho công cụ tìm kiếm.

## Redirect nên có

`/privacy-policy → /privacy`, `/cookie-policy` và `/cookies → /privacy#cookies`, `/terms-of-use` và `/terms-and-conditions → /terms`, `/disclaimer → /terms#disclaimer`.

## Tham khảo

- danglawgroup.com: Privacy Policy, Terms of Use, Cookie Policy, Disclaimer tách riêng 4 trang (cách tách riêng cũng được nếu khách muốn).
- rochastowing.com: mẫu banner essential cookies + Preferences.

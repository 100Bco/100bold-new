# Thumbnail gửi link (Open Graph) cho từng trang

## Nguyên tắc chọn ảnh

1. Ảnh chân thực, thể hiện **đúng nội dung cốt lõi của trang**:
   - Dịch vụ SEO → tay cầm điện thoại, bản đồ, doanh nghiệp đứng #1.
   - Web design → laptop + điện thoại hiển thị website.
   - Quảng cáo Meta → điện thoại hiện quảng cáo "Sponsored" + thông báo "New lead".
   - Video/AI production → máy quay điện ảnh, màn hình, phim trường.
   - LinkedIn cho CEO → điện thoại đầy thông báo (connection request, post reached X people, speaking invitation).
   - Trang ngành → hero image của ngành (văn phòng luật, phòng khám, công trình...).
   - Trang tổng → một ảnh bao quát (vd bàn làm việc agency có đủ laptop dashboard, điện thoại bản đồ, máy quay; Austin nhìn từ trên cao có ghim đỏ).
2. Không dùng: icon/illustration, ảnh case study của khách cho trang dịch vụ, ảnh ghép nhiều dải (khó nhìn).
3. Dùng lại hero image nếu đã đúng nội dung; nếu không, tạo mới.
4. Trang chưa có ảnh riêng → dùng ảnh mặc định của site (logo), đặt trong `layout` metadata.

## Prompt tạo ảnh (Higgsfield, model `gpt_image_2_6`, aspect 16:9)

Khung prompt:
```
Photorealistic cinematic photo for [service/page]. [Chủ thể chính và chi tiết chứng minh nội dung]. [Bối cảnh, ánh sáng golden hour, shallow depth of field]. Main subject on the right 60% of the frame; the left 40% is calm, softly blurred background reserved for text. [Bảng màu thương hiệu, vd warm cream, gold, charcoal and crimson #C8102E], gentle film grain, premium editorial look. [Spell all text exactly. / No readable text], no brand logos, no watermarks.
```
Tạo 2-3 phương án → gửi ảnh ghép đánh số → người dùng chọn.

## Bố cục thumbnail

- 1200×630, ảnh tràn khung.
- Lớp gradient tối bên trái (`rgba(20,18,16,.82)` → trong suốt ở ~60%).
- Logo bản sáng góc trên trái (~120px rộng), tên trang chữ đậm màu kem góc dưới trái (~68px, tối đa 2 dòng).
- Không thêm mô tả, nhãn, tên miền.

## Cài đặt (Next.js App Router)

- `src/og-assets/fonts/*.ttf` (font thương hiệu, tải từ Google Fonts dạng TTF), `src/og-assets/logo-light.png`, `src/og-assets/img/*.jpg` (ảnh đã cắt sẵn 1200×630).
- `src/lib/og.jsx`: hàm `renderPhotoOg({ title, img })` dùng `ImageResponse` từ `next/og`, đọc file bằng `fs` từ `process.cwd()`.
- Mỗi route: `src/app/<route>/opengraph-image.jsx`
  ```jsx
  import { renderPhotoOg, ogSize, ogContentType } from '@/lib/og'
  export const alt = 'Meta ads by 100Bold'
  export const size = ogSize
  export const contentType = ogContentType
  export default function Image() { return renderPhotoOg({ title: 'Meta ads', img: 'svc-ads.jpg' }) }
  ```
- Xóa `openGraph.images` cứng trong `page.jsx` của route đó (nếu có), vì nó sẽ ghi đè file `opengraph-image`.
- Giữ `openGraph.images` mặc định (logo) trong `layout.jsx` cho các trang không có ảnh riêng.

Mẫu code đầy đủ: repo 100bold-new, `src/lib/og.jsx` và các file `opengraph-image.jsx` trong `src/app/services/*`, `src/app/industries/*`.

## Kiểm tra

```bash
curl -s localhost:3000/services/meta-ads | grep -o '<meta property="og:image"[^>]*>'
curl -s localhost:3000/services/meta-ads/opengraph-image -o og.png   # mở xem bằng mắt
```
Sau deploy: Facebook Sharing Debugger (Scrape Again), LinkedIn Post Inspector.

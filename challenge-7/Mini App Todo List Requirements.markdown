# Mini App: Todo List App

Ứng dụng cho phép người dùng quản lý công việc (thêm, xóa, cập nhật trạng thái) và đồng bộ dữ liệu với một API công khai (JSONPlaceholder). Mục tiêu là tạo một giao diện đẹp, responsive và xử lý bất đồng bộ hiệu quả.

---

## Mô tả

**Todo List App** là một ứng dụng web cho phép người dùng:
- Xem danh sách công việc được lấy từ API.
- Thêm công việc mới thông qua form nhập liệu.
- Đánh dấu công việc hoàn thành/chưa hoàn thành.
- Xóa công việc.
- Xử lý lỗi (như lỗi mạng hoặc API) và hiển thị thông báo.

Ứng dụng sẽ có giao diện thân thiện, sử dụng **Tailwind CSS** để tạo style nhanh và đẹp, và **JavaScript** để xử lý logic bất đồng bộ.

---

## Tính năng chính

1. **Hiển thị danh sách công việc**:
   - Lấy danh sách công việc từ API JSONPlaceholder (`https://jsonplaceholder.typicode.com/todos`).
   - Hiển thị công việc trong danh sách với tiêu đề và trạng thái (hoàn thành/chưa hoàn thành).

2. **Thêm công việc mới**:
   - Cung cấp một form để nhập tiêu đề công việc.
   - Gửi yêu cầu POST đến API để thêm công việc.
   - Cập nhật giao diện để hiển thị công việc mới.

3. **Cập nhật trạng thái công việc**:
   - Cho phép người dùng đánh dấu công việc là hoàn thành/chưa hoàn thành thông qua checkbox.
   - Gửi yêu cầu PUT đến API để cập nhật trạng thái.
   - Cập nhật giao diện để phản ánh trạng thái mới.

4. **Xóa công việc**:
   - Cung cấp nút xóa cho mỗi công việc.
   - Gửi yêu cầu DELETE đến API để xóa công việc.
   - Xóa công việc khỏi giao diện.

5. **Xử lý lỗi**:
   - Hiển thị thông báo lỗi nếu API thất bại (ví dụ: lỗi mạng, URL không hợp lệ).
   - Đảm bảo ứng dụng không bị crash khi xảy ra lỗi.

---

## Công nghệ sử dụng

- **HTML**:
  - Cấu trúc giao diện với form nhập liệu, danh sách công việc, và khu vực thông báo lỗi.
  - Sử dụng các thẻ semantic (`header`, `main`, `footer`) để tăng tính truy cập.

- **CSS (Tailwind CSS)**:
  - Sử dụng Tailwind CSS qua CDN (`https://cdn.tailwindcss.com`) để tạo style responsive.
  - Áp dụng các class như `flex`, `grid`, `bg-`, `rounded`, `shadow` để tạo giao diện đẹp.
  - Tùy chỉnh thêm CSS nếu cần (ví dụ: hiệu ứng hover, animation).

- **JavaScript**:
  - **Callback functions**: Xử lý sự kiện như submit form, click checkbox, và click nút xóa.
  - **Promises**: Gửi yêu cầu POST (thêm công việc) và DELETE (xóa công việc).
  - **Async/await**: Lấy danh sách công việc (GET) và cập nhật trạng thái (PUT).
  - **Fetch API**: Giao tiếp với API JSONPlaceholder để quản lý công việc.
  - **Xử lý lỗi**: Sử dụng try-catch trong async/await hoặc `.catch` trong Promises để hiển thị thông báo lỗi.

- **API**:
  - Sử dụng JSONPlaceholder (`https://jsonplaceholder.typicode.com/todos`) để mô phỏng quản lý công việc.
  - Hỗ trợ các phương thức GET, POST, PUT, DELETE.

---

## Giao diện gợi ý

Giao diện nên đơn giản, hiện đại, và responsive, sử dụng các class Tailwind CSS để định kiểu. Dưới đây là mô tả giao diện:

- **Header**:
  - Tiêu đề ứng dụng ("Todo List") với nền xanh (`bg-blue-600 text-white p-4 text-center`).
  - Font lớn, đậm (`text-2xl font-bold`).

- **Form thêm công việc**:
  - Một input để nhập tiêu đề và nút submit (`flex gap-2 p-4`).
  - Input: Viền bo tròn, focus ring (`border rounded p-2 focus:ring-2 focus:ring-blue-500`).
  - Nút: Nền xanh, hover tối hơn (`bg-green-500 text-white p-2 rounded hover:bg-green-600`).

- **Danh sách công việc**:
  - Danh sách dạng card, mỗi công việc là một mục (`li`) với nền trắng, viền bóng (`bg-white p-3 rounded shadow`).
  - Mỗi mục chứa checkbox, tiêu đề, và nút xóa (`flex items-center justify-between`).
  - Công việc hoàn thành có gạch ngang và mờ (`text-decoration: line-through opacity-0.7`).

- **Thông báo lỗi**:
  - Một div ẩn/hiện với nền đỏ (`bg-red-500 text-white p-2 rounded`).
  - Hiển thị trong 3 giây rồi tự ẩn.

- **Footer**:
  - Chân trang với nền tối, chữ trắng (`bg-gray-800 text-white p-4 text-center`).
  - Hiển thị thông tin như "Built with HTML, Tailwind CSS, and JavaScript".

---

## Cách thực hiện

Để xây dựng mini app Todo List, bạn có thể làm theo các bước sau:

1. **Khởi tạo dự án**:
   - Tạo một thư mục dự án (ví dụ: `todo-app`).
   - Tạo ba file: `index.html`, `styles.css`, và `script.js`.
   - Thêm Tailwind CSS qua CDN trong `index.html`: `<script src="https://cdn.tailwindcss.com"></script>`.

2. **Xây dựng HTML**:
   - Tạo cấu trúc với `header`, `main`, và `footer`.
   - Trong `main`, thêm form nhập liệu (`input` và `button`), danh sách công việc (`ul`), và div thông báo lỗi.
   - Liên kết `styles.css` và `script.js` trong `index.html`.

3. **Style với Tailwind CSS**:
   - Sử dụng các class Tailwind để định kiểu header, form, danh sách, và thông báo lỗi theo gợi ý giao diện.
   - Thêm hiệu ứng như hover cho nút (`hover:bg-green-600`) và transition cho danh sách công việc.

4. **Viết JavaScript**:
   - **Callback**: 
     - Thêm event listener cho form submit để xử lý thêm công việc.
     - Thêm event listener cho checkbox để cập nhật trạng thái.
     - Thêm event listener cho nút xóa để xóa công việc.
   - **Fetch API**:
     - Sử dụng `fetch` với `async/await` để lấy danh sách công việc (GET `/todos?_limit=10`).
     - Sử dụng `fetch` với Promises để gửi yêu cầu POST khi thêm công việc.
     - Sử dụng `fetch` với `async/await` để gửi yêu cầu PUT khi cập nhật trạng thái.
     - Sử dụng `fetch` với Promises để gửi yêu cầu DELETE khi xóa công việc.
   - **Xử lý lỗi**:
     - Dùng try-catch trong `async/await` hoặc `.catch` trong Promises để phát hiện lỗi API.
     - Hiển thị thông báo lỗi trong div và tự ẩn sau vài giây.
   - **Cập nhật giao diện**:
     - Viết hàm để hiển thị danh sách công việc từ dữ liệu API.
     - Viết hàm để thêm, xóa, hoặc cập nhật công việc trên giao diện mà không tải lại trang.

5. **Kiểm tra**:
   - Mở `index.html` trong trình duyệt (hoặc dùng Live Server trong VS Code).
   - Kiểm tra giao diện responsive trên các kích thước màn hình.
   - Kiểm tra các tính năng: thêm, xóa, cập nhật công việc, và xử lý lỗi (thử ngắt mạng hoặc dùng URL sai).

---

## Gợi ý mở rộng

Để nâng cao ứng dụng và thực hành thêm, bạn có thể triển khai các tính năng sau:

- **Lọc công việc**:
  - Thêm các nút lọc để hiển thị công việc hoàn thành, chưa hoàn thành, hoặc tất cả.
  - Sử dụng hàm `filter` trong JavaScript để lọc danh sách.

- **Lưu trữ cục bộ**:
  - Sử dụng `localStorage` để lưu danh sách công việc khi API không khả dụng.
  - Đồng bộ lại với API khi có kết nối.

- **Phân trang**:
  - Tải công việc theo trang bằng query `?_page=1&_limit=10` trong API.
  - Thêm nút "Next" và "Previous" để chuyển trang.

- **Hiệu ứng giao diện**:
  - Thêm animation khi thêm/xóa công việc (sử dụng CSS keyframes hoặc thư viện như Animate.css).
  - Tùy chỉnh Tailwind CSS để có hiệu ứng mượt mà hơn (ví dụ: `transition-all`).

- **Xác nhận xóa**:
  - Hiển thị hộp thoại xác nhận trước khi xóa công việc (sử dụng `confirm` hoặc modal tùy chỉnh). 

---

## Lưu ý

- **API JSONPlaceholder**:
  - Đây là API giả, không thực sự lưu dữ liệu (POST/PUT/DELETE chỉ trả về phản hồi mô phỏng).

- **Tailwind CSS**:
  - Sử dụng CDN để đơn giản, nhưng có thể tích hợp Tailwind CLI nếu muốn tối ưu kích thước CSS.
  - Đọc tài liệu Tailwind (`https://tailwindcss.com/docs`) để tìm hiểu thêm về các class như `flex`, `grid`, hoặc `transition`.

- **JavaScript bất đồng bộ**:
  - Đảm bảo xử lý lỗi kỹ lưỡng để ứng dụng không crash (dùng try-catch hoặc `.catch`).
  - Kiểm tra trạng thái phản hồi API (`response.ok`) trước khi xử lý dữ liệu.

- **Responsive**:
  - Kiểm tra giao diện trên cả desktop và mobile để đảm bảo các class Tailwind hoạt động đúng.
  - Sử dụng các class như `max-w-md mx-auto` để giới hạn chiều rộng trên màn hình lớn.

- **Thực hành**:
  - Thử áp dụng các bài tập JavaScript về callback, Promises, async/await, và fetch API (từ danh sách trước) vào ứng dụng này.
  - Ví dụ: Tích hợp bài "Retry Promise" để thử lại yêu cầu API khi thất bại.

---

## Lời khuyên để thực hành

- **Bắt đầu đơn giản**: Xây dựng từng tính năng (hiển thị danh sách, thêm, xóa, cập nhật) trước khi mở rộng.
- **Debug**: Sử dụng `console.log` để kiểm tra dữ liệu API và trạng thái giao diện.
- **Tài liệu tham khảo**:
  - Tailwind CSS: `https://tailwindcss.com/docs`
  - Fetch API: `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API`
  - JSONPlaceholder: `https://jsonplaceholder.typicode.com`
- **Thử nghiệm mở rộng**: Sau khi hoàn thành, thử thêm các tính năng mở rộng để rèn luyện kỹ năng.
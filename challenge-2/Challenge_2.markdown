# Bài tập JavaScript: Vẽ Hình dạng với Logic Nâng cao

Danh sách bài tập JavaScript tập trung vào việc vẽ các hình dạng như tam giác, thang, hình đối xứng, v.v., sử dụng các kỹ thuật logic nâng cao với các hàm `for`, `while`, `if`, `forEach`, `map`, `filter`. Các bài tập yêu cầu tư duy tổ chức mã, xử lý vị trí ký tự, và tạo mẫu hình học phức tạp.

---

## Cấp độ Trung bình (5 bài)

Các bài tập này yêu cầu tư duy logic để xử lý khoảng cách và vị trí ký tự, sử dụng các vòng lặp và điều kiện.

### 1. Vẽ tam giác sao thẳng đứng

- **Yêu cầu**: Viết hàm `drawRightTriangle(n)` in tam giác sao (`*`) thẳng đứng với chiều cao `n`. Dùng `for` lồng nhau.
- **Ví dụ**:
  ```
  drawRightTriangle(4)
  *
  **
  ***
  ****
  ```
- **Gợi ý**:
  - Dùng vòng `for` ngoài để duyệt qua các hàng.
  - Vòng `for` trong để thêm ký tự `*` dựa trên số hàng.

### 2. Vẽ tam giác sao ngược

- **Yêu cầu**: Viết hàm `drawReverseTriangle(n)` in tam giác sao ngược với chiều cao `n`. Dùng `for`.
- **Ví dụ**:
  ```
  drawReverseTriangle(4)
  ****
  ***
  **
  *
  ```
- **Gợi ý**:
  - Vòng `for` ngoài duyệt từ 1 đến `n`.
  - Vòng trong in số sao giảm dần từ `n` xuống.

### 3. Vẽ thang sao căn giữa

- **Yêu cầu**: Viết hàm `drawCenteredLadder(n)` in thang sao căn giữa với chiều cao `n`. Dùng `for` và `map`.
- **Ví dụ**:
  ```
  drawCenteredLadder(3)
    *
   ***
  *****
  ```
- **Gợi ý**:
  - Tính số khoảng trắng và sao cho mỗi hàng.
  - Dùng `map` để tạo mảng các hàng, rồi nối lại.

### 4. Vẽ hình chữ nhật rỗng

- **Yêu cầu**: Viết hàm `drawHollowRectangle(w, h)` in hình chữ nhật rỗng kích thước `w` (chiều rộng) x `h` (chiều cao) bằng ký tự `*`. Dùng `for`.
- **Ví dụ**:
  ```
  drawHollowRectangle(5, 3)
  *****
  *   *
  *****
  ```
- **Gợi ý**:
  - In đầy `*` cho hàng đầu và cuối.
  - Hàng giữa chỉ in `*` ở hai đầu, khoảng trắng ở giữa.

### 5. Vẽ tam giác số tăng dần

- **Yêu cầu**: Viết hàm `drawNumberTriangle(n)` in tam giác số tăng dần từ 1 với chiều cao `n`. Dùng `for`.
- **Ví dụ**:
  ```
  drawNumberTriangle(3)
  1
  1 2
  1 2 3
  ```
- **Gợi ý**:
  - Dùng vòng `for` trong để in các số từ 1 đến số hàng hiện tại.
  - Thêm khoảng cách giữa các số để dễ đọc.

---

## Cấp độ Nâng cao (10 bài)

Các bài tập này yêu cầu logic phức tạp để xử lý đối xứng, khoảng cách, và mẫu hình học tinh vi.

### 6. Vẽ kim cương sao

- **Yêu cầu**: Viết hàm `drawDiamond(n)` in hình kim cương sao với chiều cao `2n-1` (n là số hàng của nửa trên). Dùng `for` và `map`.
- **Ví dụ**:
  ```
  drawDiamond(3)
    *
   ***
  *****
   ***
    *
  ```
- **Gợi ý**:
  - Chia thành hai phần: nửa trên tăng sao, nửa dưới giảm sao.
  - Tính số khoảng trắng và sao cho mỗi hàng.
  - Dùng `map` để tạo mảng các hàng.

### 7. Vẽ tam giác Pascal

- **Yêu cầu**: Viết hàm `drawPascalTriangle(n)` in tam giác Pascal với chiều cao `n`. Dùng `for` và logic tính toán.
- **Ví dụ**:
  ```
  drawPascalTriangle(4)
       1
      1 1
     1 2 1
    1 3 3 1
  ```
- **Gợi ý**:
  - Tính giá trị của tam giác Pascal bằng công thức tổ hợp (`C(n, k) = n! / (k! * (n-k)!)`).
  - Dùng vòng lặp để căn giữa và in các số.

### 8. Vẽ hình xoắn ốc số

- **Yêu cầu**: Viết hàm `drawSpiral(n)` in ma trận xoắn ốc số kích thước `n x n`, bắt đầu từ 1. Dùng `while` và logic xoắn ốc.
- **Ví dụ**:
  ```
  drawSpiral(3)
  1 2 3
  8 9 4
  7 6 5
  ```
- **Gợi ý**:
  - Duyệt theo hướng: phải → xuống → trái → lên.
  - Dùng biến kiểm soát ranh giới và hướng đi.

### 9. Vẽ hình chữ thập đối xứng

- **Yêu cầu**: Viết hàm `drawCross(n)` in hình chữ thập đối xứng với kích thước `n x n` (n lẻ) bằng `*`. Dùng `for`.
- **Ví dụ**:
  ```
  drawCross(5)
  *   *
   * *
    *
   * *
  *   *
  ```
- **Gợi ý**:
  - In `*` trên đường chéo chính và phụ.
  - Các vị trí khác là khoảng trắng.

### 10. Vẽ cây thông sao

- **Yêu cầu**: Viết hàm `drawChristmasTree(n)` in cây thông sao với chiều cao `n` (bao gồm thân cây). Dùng `for` và `filter`.
- **Ví dụ**:
  ```
  drawChristmasTree(3)
    *
   ***
  *****
    #
    #
  ```
- **Gợi ý**:
  - In phần lá như tam giác căn giữa.
  - In thân cây bằng ký tự `#` với chiều cao cố định.

### 11. Vẽ hình vuông rỗng đối xứng

- **Yêu cầu**: Viết hàm `drawHollowSquare(n)` in hình vuông rỗng kích thước `n x n` với các đường viền `*` và đường chéo chính/phụ. Dùng `for`.
- **Ví dụ**:
  ```
  drawHollowSquare(5)
  *****
  **  *
  * * *
  *  **
  *****
  ```
- **Gợi ý**:
  - In `*` cho viền và đường chéo.
  - Các vị trí khác trong hình vuông là khoảng trắng.

### 12. Vẽ tam giác sao rỗng

- **Yêu cầu**: Viết hàm `drawHollowTriangle(n)` in tam giác sao rỗng với chiều cao `n`. Dùng `for`.
- **Ví dụ**:
  ```
  drawHollowTriangle(4)
    *
    * *
  *   *
  *******
  ```
- **Gợi ý**:
  - In `*` cho viền ngoài (đỉnh, hai cạnh, đáy).
  - Các vị trí bên trong là khoảng trắng, trừ hàng cuối in đầy `*`.

### 13. Vẽ hình ziczac

- **Yêu cầu**: Viết hàm `drawZigzag(n)` in mẫu ziczac với chiều cao `n` bằng ký tự `*`. Dùng `for` và `map`.
- **Ví dụ**:
  ```
  drawZigzag(3)
  *
    *
  *
  ```
- **Gợi ý**:
  - Xác định vị trí `*` dựa trên hàng và cột.
  - Dùng `map` để tạo các hàng với khoảng trắng và `*`.

### 14. Vẽ lưới số tăng dần

- **Yêu cầu**: Viết hàm `drawNumberGrid(n)` in lưới `n x n` với số tăng dần theo hàng, căn chỉnh số. Dùng `for` và `forEach`.
- **Ví dụ**:
  ```
  drawNumberGrid(3)
  01 02 03
  04 05 06
  07 08 09
  ```
- **Gợi ý**:
  - Tạo ma trận số tăng dần.
  - Dùng `forEach` để in từng hàng, thêm số 0 vào trước các số < 10 để căn chỉnh.

### 15. Vẽ hình bướm sao

- **Yêu cầu**: Viết hàm `drawButterfly(n)` in hình bướm sao với chiều cao `2n` (n là chiều cao mỗi cánh). Dùng `for` và `filter`.
- **Ví dụ**:
  ```
  drawButterfly(3)
  *    *
  **  **
  ******
  ******
  **  **
  *    *
  ```
- **Gợi ý**:
  - Chia thành hai phần: cánh trên và cánh dưới.
  - Tính số sao và khoảng trắng giữa hai cánh mỗi hàng.

---

## Lời khuyên để học nhanh

- **Tư duy logic**: Chia bài toán thành các phần nhỏ (khoảng trắng, ký tự, hàng).
- **Debug**: Dùng `console.log` để kiểm tra từng hàng hoặc giá trị trung gian.
- **Tái sử dụng**: Áp dụng các hàm như `repeat()`, `map`, `filter` để tối ưu mã.
- **Thực hành**: Thử thay đổi ký tự hoặc kích thước để hiểu sâu hơn.

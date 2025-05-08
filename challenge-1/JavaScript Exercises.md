# Bài tập JavaScript: Cơ bản, Trung bình, Nâng cao

Danh sách bài tập JavaScript được chia thành **20 bài cơ bản**, **10 bài trung bình**, và **5 bài nâng cao**, tập trung vào logic và các hàm như `if`, `for`, `while`, `switch-case`, `forEach`, `map`, `filter`.

---

## Cấp độ Cơ bản (20 bài)

Các bài tập này tập trung vào cú pháp cơ bản và logic đơn giản, giúp bạn làm quen với `if`, `for`, `while`, `switch-case`.

### 1. Kiểm tra số dương

- **Yêu cầu**: Viết hàm `isPositive(num)` trả về `true` nếu số là số dương, `false` nếu không. Dùng `if`.
- **Ví dụ**: `isPositive(5) // true`, `isPositive(-3) // false`
- **Gợi ý**: Kiểm tra `num > 0` bằng `if`.

### 2. Tính bình phương

- **Yêu cầu**: Viết hàm `square(num)` trả về bình phương của số `num`. Dùng `if` để kiểm tra số âm.
- **Ví dụ**: `square(4) // 16`, `square(-2) // 4`
- **Gợi ý**: Nhân `num` với chính nó, kiểm tra số âm để đảm bảo kết quả dương.

### 3. In số từ 1 đến 10

- **Yêu cầu**: Viết hàm `printNumbers()` in các số từ 1 đến 10. Dùng `for`.
- **Ví dụ**: `printNumbers() // 1, 2, ..., 10`
- **Gợi ý**: Dùng vòng lặp `for` với biến chạy từ 1 đến 10.

### 4. Tính tổng số lẻ

- **Yêu cầu**: Viết hàm `sumOdd(n)` tính tổng các số lẻ từ 1 đến `n`. Dùng `for`.
- **Ví dụ**: `sumOdd(5) // 1 + 3 + 5 = 9`
- **Gợi ý**: Kiểm tra số lẻ bằng `i % 2 !== 0`.

### 5. Kiểm tra chia hết cho 5

- **Yêu cầu**: Viết hàm `divisibleByFive(num)` trả về `true` nếu số chia hết cho 5, `false` nếu không. Dùng `if`.
- **Ví dụ**: `divisibleByFive(10) // true`, `divisibleByFive(7) // false`
- **Gợi ý**: Dùng toán tử `%`.

### 6. Đếm số chẵn

- **Yêu cầu**: Viết hàm `countEven(n)` đếm số lượng số chẵn từ 1 đến `n`. Dùng `while`.
- **Ví dụ**: `countEven(6) // 3 (2, 4, 6)`
- **Gợi ý**: Khởi tạo biến `count`, dùng `while` để kiểm tra `% 2 === 0`.

### 7. In số chia hết cho 3

- **Yêu cầu**: Viết hàm `printDivisibleByThree(n)` in các số từ 1 đến `n` chia hết cho 3. Dùng `for`.
- **Ví dụ**: `printDivisibleByThree(10) // 3, 6, 9`
- **Gợi ý**: Dùng `if` trong vòng `for` để kiểm tra.

### 8. Kiểm tra năm nhuận

- **Yêu cầu**: Viết hàm `isLeapYear(year)` trả về `true` nếu là năm nhuận, `false` nếu không. Dùng `if`.
- **Ví dụ**: `isLeapYear(2020) // true`, `isLeapYear(2021) // false`
- **Gợi ý**: Năm nhuận chia hết cho 4 nhưng không chia hết cho 100, trừ khi chia hết cho 400.

### 9. Phân loại tuổi

- **Yêu cầu**: Viết hàm `ageCategory(age)` trả về "Trẻ em" (<13), "Thanh niên" (13-18), "Người lớn" (>18). Dùng `switch-case`.
- **Ví dụ**: `ageCategory(15) // "Thanh niên"`
- **Gợi ý**: Dùng `switch (true)` với các điều kiện.

### 10. Tính giai thừa

- **Yêu cầu**: Viết hàm `factorial(n)` tính giai thừa của `n`. Dùng `for`.
- **Ví dụ**: `factorial(5) // 5! = 120`
- **Gợi ý**: Khởi tạo `result = 1`, nhân dần với các số từ 1 đến `n`.

### 11. Kiểm tra nguyên âm

- **Yêu cầu**: Viết hàm `isVowel(char)` trả về `true` nếu ký tự là nguyên âm (a, e, i, o, u), `false` nếu không. Dùng `if`.
- **Ví dụ**: `isVowel('a') // true`, `isVowel('b') // false`
- **Gợi ý**: So sánh với danh sách nguyên âm, không phân biệt hoa thường.

### 12. Tính tổng mảng

- **Yêu cầu**: Viết hàm `sumArray(arr)` tính tổng các phần tử trong mảng. Dùng `for`.
- **Ví dụ**: `sumArray([1, 2, 3]) // 6`
- **Gợi ý**: Duyệt mảng và cộng từng phần tử.

### 13. In dãy số ngược

- **Yêu cầu**: Viết hàm `printReverse(n)` in các số từ `n` về 1. Dùng `while`.
- **Ví dụ**: `printReverse(5) // 5, 4, 3, 2, 1`
- **Gợi ý**: Giảm dần biến trong `while`.

### 14. Kiểm tra số hoàn hảo

- **Yêu cầu**: Viết hàm `isPerfectNumber(num)` trả về `true` nếu số hoàn hảo (tổng các ước nhỏ hơn nó bằng chính nó). Dùng `for`.
- **Ví dụ**: `isPerfectNumber(6) // true (1 + 2 + 3 = 6)`
- **Gợi ý**: Tìm các ước và tính tổng.

### 15. Chuyển đổi nhiệt độ

- **Yêu cầu**: Viết hàm `celsiusToFahrenheit(c)` chuyển độ C sang độ F. Dùng `if` kiểm tra `c` không âm.
- **Ví dụ**: `celsiusToFahrenheit(0) // 32`
- **Gợi ý**: Công thức: `F = C * 9/5 + 32`.

### 16. Đếm ký tự chuỗi

- **Yêu cầu**: Viết hàm `countChar(str)` đếm số ký tự trong chuỗi. Dùng `for`.
- **Ví dụ**: `countChar("hello") // 5`
- **Gợi ý**: Duyệt chuỗi và tăng biến đếm.

### 17. In tam giác số

- **Yêu cầu**: Viết hàm `printTriangle(n)` in tam giác số từ 1 đến `n`. Dùng `for` lồng nhau.
- **Ví dụ**: `printTriangle(3) // 1\n1 2\n1 2 3`
- **Gợi ý**: Dùng hai vòng `for` để in từng hàng.

### 18. Kiểm tra số âm

- **Yêu cầu**: Viết hàm `isNegative(num)` trả về `true` nếu số âm, `false` nếu không. Dùng `if`.
- **Ví dụ**: `isNegative(-5) // true`, `isNegative(0) // false`
- **Gợi ý**: Kiểm tra `num < 0`.

### 19. Tính tổng chia hết cho 7

- **Yêu cầu**: Viết hàm `sumDivisibleBySeven(n)` tính tổng các số từ 1 đến `n` chia hết cho 7. Dùng `while`.
- **Ví dụ**: `sumDivisibleBySeven(14) // 7 + 14 = 21`
- **Gợi ý**: Kiểm tra `% 7 === 0`.

### 20. Phân loại ngày

- **Yêu cầu**: Viết hàm `dayType(day)` nhận số từ 1-7 và trả về "Ngày thường" (1-5), "Cuối tuần" (6-7). Dùng `switch-case`.
- **Ví dụ**: `dayType(6) // "Cuối tuần"`
- **Gợi ý**: Dùng `switch` với các case từ 1 đến 7.

---

## Cấp độ Trung bình (10 bài)

Các bài tập này yêu cầu kết hợp nhiều khái niệm, sử dụng `forEach`, `map`, `filter`.

### 1. Lọc số lớn hơn 10

- **Yêu cầu**: Viết hàm `filterGreaterThanTen(arr)` trả về mảng các số lớn hơn 10. Dùng `filter`.
- **Ví dụ**: `filterGreaterThanTen([5, 12, 8, 15]) // [12, 15]`
- **Gợi ý**: Dùng `filter` với điều kiện `num > 10`.

### 2. Nhân ba giá trị

- **Yêu cầu**: Viết hàm `tripleArray(arr)` trả về mảng mới với mỗi phần tử nhân ba. Dùng `map`.
- **Ví dụ**: `tripleArray([1, 2, 3]) // [3, 6, 9]`
- **Gợi ý**: Dùng `map` để nhân mỗi phần tử với 3.

### 3. In mảng kèm chỉ số

- **Yêu cầu**: Viết hàm `printIndexed(arr)` in mỗi phần tử kèm chỉ số. Dùng `forEach`.
- **Ví dụ**: `printIndexed(['a', 'b']) // Index 0: a, Index 1: b`
- **Gợi ý**: Dùng `forEach` với `(element, index)`.

### 4. Tìm số lớn nhất

- **Yêu cầu**: Viết hàm `findMax(arr)` trả về số lớn nhất trong mảng. Dùng `for`.
- **Ví dụ**: `findMax([3, 8, 2, 10]) // 10`
- **Gợi ý**: So sánh từng phần tử với giá trị lớn nhất hiện tại.

### 5. Xóa số âm

- **Yêu cầu**: Viết hàm `removeNegatives(arr)` trả về mảng chỉ chứa số không âm. Dùng `filter`.
- **Ví dụ**: `removeNegatives([-1, 2, -3, 4]) // [2, 4]`
- **Gợi ý**: Dùng `filter` với `num >= 0`.

### 6. Đếm số nguyên tố

- **Yêu cầu**: Viết hàm `countPrimes(arr)` đếm số lượng số nguyên tố trong mảng. Dùng `forEach`.
- **Ví dụ**: `countPrimes([4, 7, 10, 11]) // 2 (7, 11)`
- **Gợi ý**: Viết hàm phụ kiểm tra số nguyên tố, dùng `forEach` để đếm.

### 7. Chuyển chuỗi thành mảng

- **Yêu cầu**: Viết hàm `stringToArray(str)` chuyển chuỗi thành mảng các ký tự. Dùng `map`.
- **Ví dụ**: `stringToArray("hello") // ['h', 'e', 'l', 'l', 'o']`
- **Gợi ý**: Chuyển chuỗi thành mảng rồi dùng `map`.

### 8. Tìm số nhỏ nhất

- **Yêu cầu**: Viết hàm `findMin(arr)` trả về số nhỏ nhất trong mảng. Dùng `for`.
- **Ví dụ**: `findMin([3, 8, 2, 10]) // 2`
- **Gợi ý**: So sánh từng phần tử với giá trị nhỏ nhất hiện tại.

### 9. Lọc chuỗi dài hơn 3

- **Yêu cầu**: Viết hàm `filterLongStrings(arr)` trả về mảng các chuỗi có độ dài lớn hơn 3. Dùng `filter`.
- **Ví dụ**: `filterLongStrings(['cat', 'dog', 'horse']) // ['horse']`
- **Gợi ý**: Dùng `filter` với `str.length > 3`.

### 10. Tổng bình phương

- **Yêu cầu**: Viết hàm `sumSquares(arr)` tính tổng bình phương các phần tử trong mảng. Dùng `map` và `forEach`.
- **Ví dụ**: `sumSquares([1, 2, 3]) // 1 + 4 + 9 = 14`
- **Gợi ý**: Dùng `map` để tính bình phương, `forEach` để cộng.

---

## Cấp độ Nâng cao (5 bài)

Các bài tập này yêu cầu tư duy logic phức tạp và kết hợp nhiều kỹ thuật.

### 1. Tìm chuỗi con chung dài nhất

- **Yêu cầu**: Viết hàm `longestCommonPrefix(strs)` trả về chuỗi con chung dài nhất của mảng các chuỗi. Dùng `for`.
- **Ví dụ**: `longestCommonPrefix(['flower', 'flow', 'flight']) // 'fl'`
- **Gợi ý**: So sánh từng ký tự của các chuỗi.

### 2. Gộp mảng sắp xếp

- **Yêu cầu**: Viết hàm `mergeSortedArrays(arr1, arr2)` gộp hai mảng đã sắp xếp thành một mảng sắp xếp. Dùng `while`.
- **Ví dụ**: `mergeSortedArrays([1, 3, 5], [2, 4, 6]) // [1, 2, 3, 4, 5, 6]`
- **Gợi ý**: Dùng hai con trỏ để so sánh và gộp.

### 3. Tìm cặp số tổng bằng target

- **Yêu cầu**: Viết hàm `findPairSum(arr, target)` trả về cặp số có tổng bằng `target`. Dùng `for`.
- **Ví dụ**: `findPairSum([2, 7, 11, 15], 9) // [2, 7]`
- **Gợi ý**: Dùng `Set` để lưu số đã duyệt.

### 4. Đảo ngược mảng không dùng hàm

- **Yêu cầu**: Viết hàm `reverseArray(arr)` đảo ngược mảng mà không dùng hàm có sẵn. Dùng `for`.
- **Ví dụ**: `reverseArray([1, 2, 3]) // [3, 2, 1]`
- **Gợi ý**: Hoán đổi phần tử từ hai đầu mảng.

### 5. Tính số Fibonacci tối ưu

- **Yêu cầu**: Viết hàm `fibonacciOptimized(n)` trả về số Fibonacci thứ `n` với độ phức tạp O(n). Dùng `for`.
- **Ví dụ**: `fibonacciOptimized(5) // 5`
- **Gợi ý**: Lưu hai số trước để tính số tiếp theo.

---

## Lời khuyên để học nhanh

- **Thực hành**: Tự code từng bài trước khi tìm đáp án. Chia vấn đề thành các bước nhỏ nếu gặp khó.
- **Hiểu hàm**:
  - `if`: Kiểm tra điều kiện.
  - `for`/`while`: Lặp để xử lý nhiều phần tử.
  - `switch-case`: Thay thế nhiều `if-else` khi so sánh giá trị.
  - `forEach`: Duyệt mảng để thực hiện hành động (không trả về).
  - `map`: Tạo mảng mới từ mảng cũ với giá trị biến đổi.
  - `filter`: Lọc các phần tử thỏa mãn điều kiện.
- **Debug**: Dùng `console.log` để kiểm tra giá trị trung gian.
- **Tăng độ khó**: Làm từ cơ bản đến nâng cao để xây dựng tư duy logic.

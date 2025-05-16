# Bài tập JavaScript

Danh sách **20 bài tập JavaScript nâng cao mới**, tập trung vào tư duy logic phức tạp và sử dụng các hàm `for`, `while`, `if`, `forEach`, `map`, `filter`, cùng các cấu trúc dữ liệu như `Set`, `Map`, hàng đợi, ngăn xếp, và các thuật toán như BFS, DFS, lập trình động. Các bài được thiết kế với độ khó cao để thách thức khả năng phân tích và tối ưu hóa.

---

## Cấp độ Nâng cao (20 bài)

Các bài tập này yêu cầu tư duy logic sâu sắc, kỹ thuật tối ưu hóa, và khả năng kết hợp nhiều khái niệm.

### 1. Tìm số đảo ngược lớn thứ k
- **Yêu cầu**: Viết hàm `kthLargestReverse(arr, k)` trả về số lớn thứ `k` sau khi đảo ngược các số trong mảng. Dùng `map` và `sort`.
- **Ví dụ**: `kthLargestReverse([123, 456, 789], 2) // 654 (đảo ngược 456)`
- **Gợi ý**: Dùng `map` để đảo ngược từng số, sắp xếp giảm dần, lấy phần tử thứ `k-1`.

### 2. Tìm chuỗi con có tổng chữ số lớn nhất
- **Yêu cầu**: Viết hàm `maxDigitSumSubstring(s, k)` trả về chuỗi con dài `k` có tổng chữ số lớn nhất. Dùng `for`.
- **Ví dụ**: `maxDigitSumSubstring("123456", 3) // "456" (4+5+6=15)`
- **Gợi ý**: Dùng cửa sổ trượt để duyệt các chuỗi con dài `k`, tính tổng chữ số mỗi chuỗi.

### 3. Kiểm tra mảng có thể chia thành hai tập hợp bằng nhau
- **Yêu cầu**: Viết hàm `canPartition(arr)` kiểm tra xem mảng có thể chia thành hai tập hợp có tổng bằng nhau không. Dùng `for` và lập trình động.
- **Ví dụ**: `canPartition([1, 5, 11, 5]) // true ([1, 5, 5] và [11])`
- **Gợi ý**: Tính tổng mảng, kiểm tra nếu tổng chia hết cho 2, dùng DP để tìm tập hợp có tổng bằng nửa.

### 4. Tìm số lần di chuyển tối thiểu
- **Yêu cầu**: Viết hàm `minMoves(arr, target)` trả về số lần di chuyển tối thiểu để tất cả phần tử bằng `target` (mỗi bước tăng/giảm 1). Dùng `for`.
- **Ví dụ**: `minMoves([1, 2, 3], 2) // 2 (1->2, 3->2)`
- **Gợi ý**: Tính khoảng cách tuyệt đối từ mỗi phần tử đến `target`, lấy tổng.

### 5. Tìm chuỗi con tăng dài nhất
- **Yêu cầu**: Viết hàm `longestIncreasingSubsequence(arr)` trả về độ dài của dãy con tăng dài nhất. Dùng `for` và lập trình động.
- **Ví dụ**: `longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]) // 4 ([2, 3, 7, 101])`
- **Gợi ý**: Dùng mảng DP để lưu độ dài dãy tăng dài nhất kết thúc tại mỗi vị trí.

### 6. Tìm số lượng đảo ngược trong mảng
- **Yêu cầu**: Viết hàm `countInversions(arr)` đếm số cặp `(i, j)` sao cho `i < j` nhưng `arr[i] > arr[j]`. Dùng `for` và merge sort.
- **Ví dụ**: `countInversions([2, 4, 1, 3, 5]) // 3 ([2,1], [4,1], [4,3])`
- **Gợi ý**: Sửa đổi thuật toán merge sort để đếm số đảo ngược trong quá trình gộp.

### 7. Tìm số lượng đường đi trong lưới
- **Yêu cầu**: Viết hàm `uniquePaths(m, n)` trả về số lượng đường đi từ `[0,0]` đến `[m-1,n-1]` trong lưới `m x n` (chỉ đi xuống hoặc sang phải). Dùng `for`.
- **Ví dụ**: `uniquePaths(3, 2) // 3`
- **Gợi ý**: Dùng lập trình động, lưu số đường đi đến mỗi ô trong mảng 2D.

### 8. Kiểm tra chuỗi có thể tạo thành palindrome
- **Yêu cầu**: Viết hàm `canFormPalindrome(s)` kiểm tra xem các ký tự trong chuỗi có thể sắp xếp thành palindrome không. Dùng `forEach` và `Map`.
- **Ví dụ**: `canFormPalindrome("aabb") // true`, `canFormPalindrome("abc") // false`
- **Gợi ý**: Đếm tần suất ký tự, kiểm tra có tối đa một ký tự xuất hiện số lẻ lần.

### 9. Tìm số lượng tam giác hợp lệ
- **Yêu cầu**: Viết hàm `triangleCount(arr)` đếm số bộ ba số trong mảng tạo thành tam giác (tổng hai cạnh lớn hơn cạnh còn lại). Dùng `for` và `sort`.
- **Ví dụ**: `triangleCount([2, 2, 3, 4]) // 3 ([2,2,3], [2,3,4], [2,3,4])`
- **Gợi ý**: Sắp xếp mảng, dùng ba con trỏ để kiểm tra điều kiện tam giác.

### 10. Tìm chuỗi con có k ký tự khác nhau
- **Yêu cầu**: Viết hàm `longestSubstringKDistinct(s, k)` trả về độ dài chuỗi con dài nhất có tối đa `k` ký tự khác nhau. Dùng `for` và `Map`.
- **Ví dụ**: `longestSubstringKDistinct("eceba", 2) // 3 ("ece")`
- **Gợi ý**: Dùng cửa sổ trượt, dùng `Map` để theo dõi số lượng ký tự khác nhau.

### 11. Tìm số lượng đỉnh bìa trong đồ thị
- **Yêu cầu**: Viết hàm `countLeafNodes(edges, n)` nhận danh sách cạnh của đồ thị cây với `n` đỉnh và trả về số đỉnh bìa (đỉnh có bậc 1). Dùng `for` và `Map`.
- **Ví dụ**: `countLeafNodes([[0, 1], [1, 2], [1, 3]], 4) // 3 (đỉnh 0, 2, 3)`
- **Gợi ý**: Tạo danh sách kề từ danh sách cạnh, đếm đỉnh có đúng một cạnh nối.

### 12. Tìm chuỗi con cân bằng
- **Yêu cầu**: Viết hàm `balancedSubstring(s)` trả về độ dài chuỗi con dài nhất có số chữ cái và số bằng nhau. Dùng `for` và `Map`.
- **Ví dụ**: `balancedSubstring("a1b2c3") // 4 ("a1b2")`
- **Gợi ý**: Gán chữ cái = 1, số = -1, dùng tiền tố tổng và `Map` để tìm chuỗi con có tổng bằng 0.

### 13. Tìm số bước tối thiểu để đạt tổng
- **Yêu cầu**: Viết hàm `minStepsToSum(arr, target)` trả về số bước tối thiểu để đạt tổng `target` bằng các số trong mảng. Dùng `while` và hàng đợi.
- **Ví dụ**: `minStepsToSum([1, 2, 3], 5) // 2 ([2, 3])`
- **Gợi ý**: Dùng BFS, lưu các tổng có thể đạt được và số bước.

### 14. Tìm số lượng chuỗi con palindrome
- **Yêu cầu**: Viết hàm `countPalindromicSubstrings(s)` đếm số chuỗi con là palindrome. Dùng `for` và mở rộng trung tâm.
- **Ví dụ**: `countPalindromicSubstrings("aaa") // 6 ("a", "a", "a", "aa", "aa", "aaa")`
- **Gợi ý**: Duyệt từng vị trí, mở rộng ra hai bên để đếm palindrome lẻ và chẵn.

### 15. Tìm số lượng mảng con chia hết cho k
- **Yêu cầu**: Viết hàm `subarraysDivByK(arr, k)` đếm số dãy con liên tục có tổng chia hết cho `k`. Dùng `for` và `Map`.
- **Ví dụ**: `subarraysDivByK([4, 5, 0, -2, -3, 1], 5) // 7`
- **Gợi ý**: Dùng tiền tố tổng, lưu số dư khi chia cho `k` trong `Map`.

### 16. Tìm chu kỳ nhỏ nhất của chuỗi
- **Yêu cầu**: Viết hàm `smallestCycle(s)` trả về độ dài chu kỳ nhỏ nhất của chuỗi (chuỗi lặp lại). Dùng `for`.
- **Ví dụ**: `smallestCycle("ababab") // 2 ("ab")`
- **Gợi ý**: Kiểm tra các độ dài chu kỳ từ 1 đến `s.length/2`, xem chuỗi có lặp lại không.

### 17. Tìm số lượng đỉnh liên thông
- **Yêu cầu**: Viết hàm `countConnectedComponents(edges, n)` nhận danh sách cạnh và số đỉnh, trả về số thành phần liên thông. Dùng `for` và DFS.
- **Ví dụ**: `countConnectedComponents([[0, 1], [2, 3]], 4) // 2`
- **Gợi ý**: Tạo danh sách kề, dùng DFS để đếm số lần cần bắt đầu một DFS mới.

### 18. Tìm số lượng cách chia mảng
- **Yêu cầu**: Viết hàm `countArraySplits(arr, k)` đếm số cách chia mảng thành `k` mảng con liên tục không rỗng. Dùng `for` và lập trình động.
- **Ví dụ**: `countArraySplits([1, 2, 3], 2) // 2 ([1] và [2,3], [1,2] và [3])`
- **Gợi ý**: Dùng DP để lưu số cách chia cho mỗi tiền tố của mảng với `i` đoạn.

### 19. Tìm số bước tối thiểu để sắp xếp
- **Yêu cầu**: Viết hàm `minSwaps(arr)` trả về số bước hoán đổi tối thiểu để sắp xếp mảng tăng dần. Dùng `for` và `Map`.
- **Ví dụ**: `minSwaps([4, 3, 1, 2]) // 3`
- **Gợi ý**: Tạo mảng ánh xạ vị trí đúng, đếm số chu trình trong đồ thị hoán đổi.

### 20. Tìm lợi nhuận tối đa với giới hạn giao dịch
- **Yêu cầu**: Viết hàm `maxProfitWithK(prices, k)` nhận mảng giá và số giao dịch tối đa `k`, trả về lợi nhuận tối đa từ mua bán. Dùng `for` và lập trình động.
- **Ví dụ**: `maxProfitWithK([2, 4, 1], 2) // 2 (mua 2, bán 4)`
- **Gợi ý**: Dùng DP để lưu lợi nhuận tối đa cho mỗi ngày với số giao dịch đã dùng.

---

## Lời khuyên để học nhanh
- **Tư duy logic**: Chia bài toán thành các bước nhỏ, vẽ sơ đồ hoặc viết pseudocode trước khi code.
- **Debug**: Sử dụng `console.log` để kiểm tra giá trị trung gian, đặc biệt với các bài về đồ thị hoặc chuỗi.
- **Tái sử dụng**: Áp dụng các cấu trúc như `Set`, `Map`, hàng đợi, hoặc ngăn xếp để tối ưu hóa.
# Bài tập JavaScript: 20 Bài về Callbacks, Promises, Async/Await, và Fetch API

Danh sách **20 bài tập JavaScript mới**, tập trung vào **callback functions**, **Promises**, **async/await**, và **fetch API**, với 10 bài dễ, 5 bài trung bình, và 5 bài khó. Các bài sử dụng các hàm `for`, `while`, `if`, `forEach`, `map`, `filter`, và được thiết kế để rèn luyện xử lý bất đồng bộ. Nội dung bao gồm ít nhất 5 bài về callback và 3 bài về fetch API, không trùng lặp với bất kỳ bài tập nào từ các yêu cầu trước.

---

## Cấp độ Dễ (10 bài)

Các bài tập này giới thiệu cơ bản về callback, Promises, async/await, và fetch API.

### 1. Callback cơ bản
- **Yêu cầu**: Viết hàm `processWithCallback(value, cb)` nhận giá trị và callback, gọi callback với giá trị nhân đôi sau 1 giây. Dùng `setTimeout`.
- **Ví dụ**:
  ```javascript
  processWithCallback(5, result => console.log(result)); // 10 (sau 1 giây)
  ```
- **Gợi ý**: Dùng `setTimeout` để trì hoãn, gọi `cb` với `value * 2`.

### 2. Tạo Promise đơn giản
- **Yêu cầu**: Viết hàm `simplePromise(value)` trả về Promise resolve giá trị cộng 1 sau 500ms. Dùng `setTimeout`.
- **Ví dụ**:
  ```javascript
  simplePromise(5).then(result => console.log(result)); // 6 (sau 500ms)
  ```
- **Gợi ý**: Dùng `new Promise` với `setTimeout` để resolve `value + 1`.

### 3. Callback xử lý lỗi
- **Yêu cầu**: Viết hàm `errorCallback(value, cb)` nhận giá trị và callback, gọi callback với lỗi nếu giá trị âm, ngược lại trả về giá trị. Dùng `if`.
- **Ví dụ**:
  ```javascript
  errorCallback(-1, (err, result) => console.log(err)); // "Invalid value"
  errorCallback(2, (err, result) => console.log(result)); // 2
  ```
- **Gợi ý**: Kiểm tra `value < 0`, gọi `cb` với lỗi hoặc kết quả.

### 4. Async/await cơ bản
- **Yêu cầu**: Viết hàm `asyncSquare(num)` dùng async/await để trả về Promise bình phương số sau 1 giây. Dùng `setTimeout`.
- **Ví dụ**:
  ```javascript
  asyncSquare(4).then(result => console.log(result)); // 16 (sau 1 giây)
  ```
- **Gợi ý**: Dùng async, tạo Promise trong hàm, await và trả về `num * num`.

### 5. Fetch API đơn giản
- **Yêu cầu**: Viết hàm `fetchPost(id)` dùng fetch để lấy bài viết JSON từ API với ID cho trước. Dùng async/await.
- **Ví dụ**:
  ```javascript
  fetchPost(1).then(data => console.log(data.title));
  // "sunt aut facere..." (từ https://jsonplaceholder.typicode.com/posts/1)
  ```
- **Gợi ý**: Dùng async/await với `fetch`, gọi `.json()` để lấy dữ liệu.

### 6. Callback tuần tự
- **Yêu cầu**: Viết hàm `sequentialCallback(values, cb)` nhận mảng giá trị và callback, gọi callback với mỗi giá trị cách nhau 500ms. Dùng `for`.
- **Ví dụ**:
  ```javascript
  sequentialCallback([1, 2], result => console.log(result)); // 1, 2 (cách 500ms)
  ```
- **Gợi ý**: Dùng vòng `for` với `setTimeout` để gọi `cb` tuần tự.

### 7. Promise resolve tức thì
- **Yêu cầu**: Viết hàm `instantResolve(value)` trả về Promise resolve ngay lập tức với giá trị đầu vào. Dùng `Promise.resolve`.
- **Ví dụ**:
  ```javascript
  instantResolve("Test").then(result => console.log(result)); // "Test"
  ```
- **Gợi ý**: Dùng `Promise.resolve` để tạo Promise hoàn thành ngay.

### 8. Xử lý lỗi async/await
- **Yêu cầu**: Viết hàm `safeAsyncCall(task)` nhận hàm Promise, trả về kết quả hoặc chuỗi "Failed" nếu lỗi. Dùng try-catch.
- **Ví dụ**:
  ```javascript
  const task = () => Promise.reject("Error");
  safeAsyncCall(task).then(result => console.log(result)); // "Failed"
  ```
- **Gợi ý**: Dùng async, bọc `task` trong try-catch, trả về "Failed" trong catch.

### 9. Promise chain cơ bản
- **Yêu cầu**: Viết hàm `basicChain(value)` tạo chuỗi Promise trừ 1, rồi nhân 3. Dùng `.then`.
- **Ví dụ**:
  ```javascript
  basicChain(5).then(result => console.log(result)); // 12 ((5-1)*3)
  ```
- **Gợi ý**: Dùng `Promise.resolve`, liên kết hai `.then` để thực hiện phép tính.

### 10. Callback với nhiều tham số
- **Yêu cầu**: Viết hàm `multiParamCallback(a, b, cb)` nhận hai số và callback, gọi callback với tổng và tích của chúng. Dùng `if`.
- **Ví dụ**:
  ```javascript
  multiParamCallback(2, 3, (sum, product) => console.log(sum, product)); // 5, 6
  ```
- **Gợi ý**: Tính `a + b` và `a * b`, gọi `cb` với hai giá trị.

---

## Cấp độ Trung bình (5 bài)

Các bài tập này kết hợp callback, Promises, async/await, và fetch API với xử lý lỗi hoặc chuỗi xử lý.

### 11. Callback xử lý mảng
- **Yêu cầu**: Viết hàm `processArrayCallbacks(arr, processor, cb)` nhận mảng, hàm xử lý callback, và callback cuối, trả về mảng kết quả qua `cb`. Dùng `forEach`.
- **Ví dụ**:
  ```javascript
  const processor = (x, cb) => setTimeout(() => cb(null, x * 2), 100);
  processArrayCallbacks([1, 2], processor, (err, results) => console.log(results));
  // [2, 4]
  ```
- **Gợi ý**: Dùng `forEach` để gọi `processor` cho mỗi phần tử, thu thập kết quả vào mảng.

### 12. Fetch với xử lý lỗi
- **Yêu cầu**: Viết hàm `fetchSafe(url)` lấy dữ liệu JSON từ API, trả về dữ liệu hoặc `{ error: "Fetch failed" }` nếu lỗi. Dùng async/await và try-catch.
- **Ví dụ**:
  ```javascript
  fetchSafe('https://jsonplaceholder.typicode.com/invalid')
    .then(result => console.log(result)); // { error: "Fetch failed" }
  ```
- **Gợi ý**: Dùng async, gọi `fetch` trong try-catch, trả về object lỗi nếu thất bại.

### 13. Promise all với timeout
- **Yêu cầu**: Viết hàm `allWithTimeout(tasks, ms)` nhận mảng hàm Promise và thời gian chờ, trả về mảng kết quả hoặc lỗi timeout. Dùng `Promise.race`.
- **Ví dụ**:
  ```javascript
  const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 100))
  ];
  allWithTimeout(tasks, 80).then(results => console.log(results)); // [1, "Timeout"]
  ```
- **Gợi ý**: Bọc mỗi Promise trong `Promise.race` với timeout, dùng `Promise.all` để chạy tất cả.

### 14. Async/await tuần tự với callback
- **Yêu cầu**: Viết hàm `sequentialWithCallback(tasks, cb)` nhận mảng hàm Promise và callback, chạy tuần tự và gọi callback với mảng kết quả. Dùng `for` và async/await.
- **Ví dụ**:
  ```javascript
  const tasks = [
    () => Promise.resolve(1),
    () => Promise.resolve(2)
  ];
  sequentialWithCallback(tasks, results => console.log(results)); // [1, 2]
  ```
- **Gợi ý**: Dùng async, vòng `for` để chờ từng Promise, gọi `cb` với kết quả.

### 15. Retry callback
- **Yêu cầu**: Viết hàm `retryCallback(task, retries, cb)` nhận hàm callback, số lần thử, và callback, gọi callback với kết quả khi thành công hoặc lỗi cuối. Dùng `while`.
- **Ví dụ**:
  ```javascript
  let count = 0;
  const task = cb => cb(count++ === 1 ? null : "Fail", "Success");
  retryCallback(task, 2, (err, result) => console.log(result)); // "Success"
  ```
- **Gợi ý**: Dùng `while` để thử lại, gọi `task` cho đến khi thành công hoặc hết lượt.

---

## Cấp độ Khó (5 bài)

Các bài tập này yêu cầu quản lý nhiều callback/Promise/fetch đồng thời, xử lý dữ liệu lớn, hoặc logic phức tạp.

### 16. Fetch nhiều API với retry
- **Yêu cầu**: Viết hàm `fetchWithRetries(urls, retries)` nhận mảng URL và số lần thử, lấy dữ liệu JSON từ tất cả API, thử lại nếu lỗi. Dùng `for` và async/await.
- **Ví dụ**:
  ```javascript
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/invalid'
  ];
  fetchWithRetries(urls, 2).then(results => console.log(results));
  // [{ id: 1, ... }, { error: "Fetch failed" }]
  ```
- **Gợi ý**: Dùng vòng `for` trong async, thử lại mỗi `fetch` với vòng lặp, trả về lỗi nếu hết lượt.

### 17. Callback phân cấp
- **Yêu cầu**: Viết hàm `nestedCallbacks(tasks, cb)` nhận mảng hàm callback trả về mảng giá trị, gọi tuần tự và trả về mảng kết quả phẳng qua `cb`. Dùng `for`.
- **Ví dụ**:
  ```javascript
  const tasks = [
    cb => setTimeout(() => cb(null, [1, 2]), 100),
    cb => setTimeout(() => cb(null, [3, 4]), 100)
  ];
  nestedCallbacks(tasks, (err, results) => console.log(results)); // [1, 2, 3, 4]
  ```
- **Gợi ý**: Dùng vòng `for` để gọi từng `task`, tích lũy kết quả vào mảng phẳng.

### 18. Promise với giới hạn đồng thời
- **Yêu cầu**: Viết hàm `limitedConcurrentPromises(tasks, limit)` nhận mảng hàm Promise và giới hạn số Promise đồng thời, trả về mảng kết quả. Dùng `while`.
- **Ví dụ**:
  ```javascript
  const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 100)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 50))
  ];
  limitedConcurrentPromises(tasks, 1).then(results => console.log(results)); // [1, 2]
  ```
- **Gợi ý**: Dùng hàng đợi, chạy tối đa `limit` Promise bằng `Promise.all`, thêm Promise mới khi hoàn thành.

### 19. Async/await với callback và retry
- **Yêu cầu**: Viết hàm `retryAsyncCallback(task, retries, cb)` nhận hàm callback, số lần thử, và callback, chạy bất đồng bộ và trả về kết quả qua `cb`. Dùng `for` và async/await.
- **Ví dụ**:
  ```javascript
  let count = 0;
  const task = cb => setTimeout(() => cb(count++ === 1 ? null : "Fail", "Success"), 100);
  retryAsyncCallback(task, 2, result => console.log(result)); // "Success"
  ```
- **Gợi ý**: Dùng async, vòng `for` để thử lại, chuyển callback thành Promise để await.

### 20. Kết hợp callback và fetch API
- **Yêu cầu**: Viết hàm `fetchAndProcess(urls, processor, cb)` nhận mảng URL, hàm xử lý callback, và callback, lấy dữ liệu JSON và xử lý qua `processor`, trả về kết quả qua `cb`. Dùng `Promise.all`.
- **Ví dụ**:
  ```javascript
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2'
  ];
  const processor = (data, cb) => cb(null, data.id);
  fetchAndProcess(urls, processor, (err, results) => console.log(results));
  // [1, 2]
  ```
- **Gợi ý**: Dùng `Promise.all` để fetch, gọi `processor` cho mỗi dữ liệu, thu thập kết quả qua `cb`.

---

## Lời khuyên để học nhanh
- **Tư duy bất đồng bộ**: Hiểu callback, Promise, và async/await đều giải quyết vấn đề bất đồng bộ nhưng khác về cú pháp và cách dùng.
- **Callback**: Tập trung vào bài 1, 3, 6, 10 (dễ), 11, 15 (trung bình), 17, 19, 20 (khó) để nắm cách truyền và xử lý callback.
- **Debug**: Dùng `console.log` để kiểm tra kết quả trung gian, đặc biệt trong callback chain hoặc fetch API.
- **Xử lý lỗi**: Luôn thêm `.catch`, try-catch, hoặc kiểm tra lỗi trong callback, đặc biệt trong bài fetch (12, 16, 20).
- **Thực hành fetch**: Sử dụng API công khai như JSONPlaceholder (`https://jsonplaceholder.typicode.com`) cho bài 5, 12, 16, 20.
- **Tăng độ khó**: Bắt đầu với bài dễ, sau đó thử bài trung bình và khó để quản lý callback/Promise/fetch đồng thời.

Nếu cần giải thích chi tiết hoặc đáp án cho bài nào, hãy yêu cầu!
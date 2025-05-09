// Bài 6

function drawDiamond(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  if (n <= 1) {
    return "Please enter the number greater than 3";
  }
  const upperPart = [];
  for (let i = 0; i < n; i++) {
    const spaces = " ".repeat(n - i - 1);
    const stars = "*".repeat(2 * i + 1);
    upperPart.push(spaces + stars);
  }

  const lowerPart = [];
  // Trừ 1 dòng chung
  for (let i = n - 2; i >= 0; i--) {
    const spaces = " ".repeat(n - i - 1);
    const stars = "*".repeat(2 * i + 1);
    lowerPart.push(spaces + stars);
  }

  return upperPart.join("\n") + "\n" + lowerPart.join("\n");
}

console.log(drawDiamond(4));

// Bài 7

function factorial(num) {
  if (typeof num !== "number") {
    return "Please enter the number";
  }

  if (num < 0) {
    return "Please enter the positive number";
  }
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

function drawPascalTriangle(n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      row.push(factorial(i) / (factorial(j) * factorial(i - j)));
    }

    result += " ".repeat(n - i - 1) + row.join(" ") + "\n";
  }
  return result;
}

console.log(drawPascalTriangle(4));

// Bài 8: Mở rộng thuật toán: Xoắn ốc hình chữ nhật theo chiều từ phải sang trái

function drawSpiral(m, n) {
  if (typeof m !== "number" || typeof n !== "number") {
    return "Please input the number for m and n";
  }

  if (n < 0 || m < 0) {
    return "Please input the negative value for m and n";
  }

  const matrix = Array.from({ length: m }, () => Array(n).fill(0));

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;
  let num = 1;

  while (top <= bottom && left <= right) {
    // turn right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // Go down
    if (top <= bottom) {
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
    }

    // Turn left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }

    // Go up
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }

  return matrix.map((row) => row.join(" ")).join("\n");
}

console.log(drawSpiral(3, 5));

// Bài 9

function drawCross(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  if (n % 2 === 0) {
    return "Please enter the odd number";
  }

  if (n <= 1) {
    return "Please enter the number greater than 3";
  }

  const lines = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Điều kiện 2 đường chéo
      if (i === j || i + j === n - 1) {
        lines.push("*");
      } else {
        lines.push(" ");
      }
    }
    lines.push("\n");
  }

  return lines.join("");
}

console.log(drawCross(5));

// Bài 10
function drawChristmasTree(n) {
  if (typeof n !== "number") {
    return "Please enter the natural number";
  }

  if (n < 3) {
    return "Please enter the number greater than 3";
  }

  const tree = [];
  
  for (let i = 0; i < n; i++) {
    // spaces là khoảng trắng từ rìa tính vào
    const spaces = " ".repeat(n - i - 1);
    // stars là số dấu "*" tương ứng với số dòng
    const stars = "*".repeat(2 * i + 1);
    tree.push(spaces + stars);
  }
  
  // trunkSpaces là khoảng trắng từ rìa tính vào
  const trunkSpaces = " ".repeat(n - 1);
  tree.push(trunkSpaces + "#");
  tree.push(trunkSpaces + "#");

  return tree.join("\n");
}
console.log(drawChristmasTree(5));

// Bài 11

function drawHollowSquare(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 4 điều kiện đầu dùng để vẽ hình vuông, i === j dùng để vẽ đường chéo
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1 || i === j) {
        result += "*";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  return result;
}
console.log(drawHollowSquare(5));

// Bài 12

function drawHollowTriangle(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  const triangle = [];
  for(let i = 0; i < n; i++) {
    const spaces = " ".repeat(n - i - 1);
    // Bắt đầu với 1 "*"
    if (i === 0) {
      triangle.push(spaces + "*");
    }  
    // Nếu là dòng cuối thì fill full "*"
    else if (i === n - 1) {
      triangle.push(spaces + "*".repeat(2 * i + 1));
    } 
    // Nếu không phải dòng đầu và cuối thì in dấu "*" ở đầu và cuối dòng, ở giữa là khoảng trắng
    else {
      const stars = "*" + " ".repeat(2 * i - 1) + "*";
      triangle.push(spaces + stars);
    }
  }
  return triangle.join("\n");
}
console.log(drawHollowTriangle(5));

// Bài 13

function drawZigzag(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  return Array.from({ length: n }, (_, i) => {
    // Nếu số dòng chẵn thì không có khoảng trắng từ rìa tính vào
    // Nếu số dòng lẻ thì có khoảng trắng từ rìa tính vào
    const spaces = " ".repeat(i % 2 === 0 ? 0 : 2);
    return spaces + "*";
  }).join("\n");
}
console.log(drawZigzag(10));

// Bài 14
// 

function drawNumberGrid(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  const matrix = []; // tạo ma trận rỗng
  let num = 1; // tạo biến bắt đầu

  for (let i = 0; i < n; i++) {
    const row = []; // tạo hàng mảng của ma trận
    for (let j = 0; j < n; j++) {
      //Nếu số nhỏ hơn 10 thì thêm 0 vào trước số đó
      row.push(num < 10 ? "0" + num : num);
      num++;
    }
    matrix.push(row);
  }

  // Chuyển ma trận thành chuỗi và in ra màn hình
  return matrix.map(row => row.join(" ")).join("\n");
}

console.log(drawNumberGrid(4));

// Bài 15
// Ta thấy số sao tương ứng với số dòng, khoảng trắng thì tương ứng với 2(n-số sao)

function drawButterfly(n) {
    let upperWing = "";
    let lowerWing = "";

    // Phần trên thì chạy từ 1 đến n
    for (let i = 1; i <= n; i++) {
        const stars = '*'.repeat(i);
        const spaces = ' '.repeat(2 * (n - i));
        upperWing += stars + spaces + stars + "\n";
        
    }
    // Phần dưới thì chạy từ n đến 1
    for (let i = n; i >= 1; i--) {
        const stars = '*'.repeat(i);
        const spaces = ' '.repeat(2 * (n - i));
        lowerWing += stars + spaces + stars + "\n";
    }
    return upperWing + lowerWing;
}

console.log(drawButterfly(3));

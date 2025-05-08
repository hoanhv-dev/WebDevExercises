// Bài 1

function drawRightTriangle(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

console.log(drawRightTriangle(4));

// Bài 2

function drawReverseTriangle(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

console.log(drawReverseTriangle(4));

// Bài 3

function drawCenteredLadder(n) {
  const ladder = Array.from({ length: n }).map((_, i) => {
    const space = " ".repeat(n - i - 1);
    const stars = "*".repeat(2 * i + 1);
    return space + stars;
  });

  return ladder.join("\n");
}

console.log(drawCenteredLadder(3));

// Bài 4

function drawHollowRectangle(w, h) {
  let result = "";
  for (let i = 0; i < h; i++) {
    if (i === 0 || i === h - 1) {
      result += "*".repeat(w);
    } else {
      result += "*" + " ".repeat(w - 2) + "*";
    }
    result += "\n";
  }
  return result;
}

console.log(drawHollowRectangle(5, 3));

// Bài 5

function drawNumberTriangle(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j + " ";
    }
    result += "\n";
  }
  return result;
}

console.log(drawNumberTriangle(3));

// Bài 6

function drawDiamond(n) {
  const upperPart = Array.from({ length: n }).map((_, i) => {
    const spaces = " ".repeat(n - i - 1);
    const stars = "*".repeat(2 * i + 1);
    return spaces + stars;
  });

  const lowerPart = Array.from({ length: n - 1 }).map((_, i) => {
    const spaces = " ".repeat(i + 1);
    const stars = "*".repeat(2 * (n - i - 2) + 1);
    return spaces + stars;
  });

  return [...upperPart, ...lowerPart].join("\n");
}

console.log(drawDiamond(3));

// Bài 7

function factorial(num) {
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
  if(n<0||m<0){
    return "Please input the negative value for m and n"
  }

  const matrix = Array.from({ length: m }, () => Array(n).fill(0));

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;
  let num = 1;

  while (top <= bottom && left <= right) {
    // turn left
    for (let i = right; i >= left; i--) {
      matrix[top][i] = num++;
    }
    top++;

    // Go down
    if (top <= bottom) {
      for (let i = top; i <= bottom; i++) {
        matrix[i][left] = num++;
      }
      left++;
    }

    // Turn right
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }

    // Go up
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][right] = num++;
      }
      right--;
    }
  }

  return matrix.map((row) => row.join(" ")).join("\n");
}

console.log(drawSpiral(3, 5));

// Bài 9

function drawCross(n) {
  if (n % 2 === 0) {
    return "Please enter the odd number";
  }

  if (n <= 1) {
    return "Please enter the number greater than 3";
  }

  const lines = Array.from({ length: n }).map((_, i) => {
    return Array.from({ length: n })
      .map((_, j) => (i === j || i + j === n - 1 ? "*" : " "))
      .join("");
  });

  return lines.join("\n");
}

console.log(drawCross(5));

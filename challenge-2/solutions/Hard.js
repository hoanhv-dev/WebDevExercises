// Bài 6

// Function to create a string of characters by for loop
function buildChar(char, count) {
  let str = "";
  for (let i = 0; i < count; i++) {
    str += char;
  }
  return str;
}

function drawDiamond(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  if (n <= 0) {
    return "Please enter a positive number";
  }

  const result = [];


  // Draw the diamond
  for (let i = -n + 1; i < n; i++) {
    const row = Math.abs(i);
    const spaces = buildChar(" ", row);
    const stars = buildChar("*", 2 * (n - row) - 1);
    result.push(spaces + stars);
  }

  return result.join("\n");
}

console.log(drawDiamond(4));

// Bài 7
// Recheck
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
  if (typeof n !== "number") {
    return "Please enter the number";
  }
  if (n <= 0) {
    return "Please enter the positive number";
  }

  // Find the max width of any number in the triangle
  let maxWidth = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      const num = factorial(i) / (factorial(j) * factorial(i - j));
      const numStr = num.toString();
      const numWidth = numStr.length;
      if (numWidth > maxWidth) {
        maxWidth = numWidth;
      }
    }
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      const num = factorial(i) / (factorial(j) * factorial(i - j));
      // Pad each number to the same width
      const numStr = num.toString();
      const paddedNumStr = numStr.padStart(maxWidth);
      row.push(paddedNumStr);
    }

    let spaces = "";
    for (let k = 0; k < (n - i - 1) * ((maxWidth + 1) / 2); k++) {
      spaces += " ";
    }
    result += spaces + row.join(" ") + "\n";
  }
  return result;
}

console.log(drawPascalTriangle(10));

// Bài 8: Mở rộng thuật toán: Xoắn ốc hình chữ nhật theo chiều từ phải sang trái

function drawSpiral(m, n) {
  if (typeof m !== "number" || typeof n !== "number") {
    return "Please input the number for m and n";
  }

  if (n < 0 || m < 0) {
    return "Please input the negative value for m and n";
  }

  // const matrix = Array.from({length: m}, () => Array(n).fill(0));

  const matrix = []; // create an empty matrix
  for (let i = 0; i < m; i++) {
    matrix.push(Array(n).fill(0));
  }
  
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

  // return matrix.map((row) => row.join(" ")).join("\n"); //callback function tạo array và join thành chuỗi

  let result = "";
  for (let i = 0; i < m; i++) {
    let row = matrix[i];
    let rowString = "";

    for(let j= 0; j < row.length; j++) {
      rowString += row[j];
      if(j < row.length - 1) {
        rowString += " "; 
      }
    }
    result += rowString + "\n";
  }
  return result;
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


// Function to create a string of characters by for loop
function buildChar(char, count) {
  let str = "";
  for (let i = 0; i < count; i++) {
    str += char;
  }
  return str;
}


function drawChristmasTree(n) {
  if (typeof n !== "number") {
    return "Please enter the natural number";
  }

  if (n < 3) {
    return "Please enter the number greater than 3";
  }

  const tree = [];

  // Draw the tree
  for (let i = 0; i < n; i++) {
    const spaces = buildChar(" ", n - i - 1);
    const stars = buildChar("*", 2 * i + 1);
    tree.push(spaces + stars);
  }

  // Draw the tree (2 lines "#")
  const trunk = buildChar(" ", n - 1) + "#";
  tree.push(trunk);
  tree.push(trunk);

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
      //Condition for upper and lower edge
      if (i === 0 || i === n - 1) {
        result += "*";
      } 
      //Condition for left and right edge
      else if (j === 0 || j === n - 1) {
        result += "*";
      } 
      //Condition for diagonal
      else if (i === j) {
        result += "*";
      } 
      //Fill space
      else {
        result += " ";
      }
    }
    result += "\n";
  }
  return result;
}
console.log(drawHollowSquare(5));

// Bài 12
// Recheck
function drawHollowTriangle(n) {
  if (typeof n !== "number") {
    return "Please enter a number";
  }

  const triangle = [];

  // Create a string of characters by for loop
  function buildChar(char, count) {
    let str = "";
    for (let i = 0; i < count; i++) {
      str += char;
    }
    return str;
  }

  for (let i = 0; i < n; i++) {
    const spaces = buildChar(" ", n - i - 1);

    if (i === 0) {
      triangle.push(spaces + "*"); // First row
    } else if (i === n - 1) {
      const fullStars = buildChar("*", 2 * n - 1);
      triangle.push(fullStars); // Last row
    } else {
      const innerSpaces = buildChar(" ", 2 * i - 1);
      triangle.push(spaces + "*" + innerSpaces + "*"); // Middle row
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

    // return Array.from({ length: n }, (_, i) => {
  //   // Nếu số dòng chẵn thì không có khoảng trắng từ rìa tính vào
  //   // Nếu số dòng lẻ thì có khoảng trắng từ rìa tính vào
  //   const spaces = " ".repeat(i % 2 === 0 ? 0 : 2);
  //   return spaces + "*";
  // }).join("\n");

  let result = "";
  for (let i = 0; i < n; i++) {
    // Create spaces for odd lines
    let spaces = "";
    if (i % 2 !== 0) {
      for (let j = 0; j < 2; j++) {
        spaces += " ";
      }
    }
    result += spaces + "*\n";
  }
  return result;
}
console.log(drawZigzag(10));

// Bài 14
// 

function drawNumberGrid(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  const matrix = []; // create an empty matrix
  let num = 1; // create a variable to start

  for (let i = 0; i < n; i++) {
    const row = []; // create a row of the matrix
    for (let j = 0; j < n; j++) {
      //If the number is less than 10, add 0 in front of the number
      row.push(num < 10 ? "0" + num : num);
      num++;
    }
    matrix.push(row);
  }

  // Convert the matrix to a string and print it on the screen
  return matrix.map(row => row.join(" ")).join("\n");
}

console.log(drawNumberGrid(4));

// Bài 15
// The number of stars is equal to the number of rows, the space is equal to 2(n-number of stars)
// Recheck
function drawButterfly(n) {
  let result = "";

  // Function to create a part of the butterfly
  function makeLine(i) {
      let stars = "";
      for (let j = 0; j < i; j++) {
          stars += "*";
      }

      let spaces = "";
      for (let j = 0; j < 2 * (n - i); j++) {
          spaces += " ";
      }

      return stars + spaces + stars + "\n";
  }

  // Top part
  for (let i = 1; i <= n; i++) {
      result += makeLine(i);
  }

  // Bottom part
  for (let i = n; i >= 1; i--) {
      result += makeLine(i);
  }

  return result;
}

console.log(drawButterfly(3));

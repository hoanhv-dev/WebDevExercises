// Bài 1

function drawRightTriangle(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  if (n <= 0) {
    return "Please enter the positive number";
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "\n";
  }

  return result;
}

console.log("Right Triangle");
console.log(drawRightTriangle(4));

// Bài 2

function drawReverseTriangle(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  if (n <= 0) {
    return "Please enter the positive number";
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i ; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

console.log("Reverse Triangle");
console.log(drawReverseTriangle(5));

// Bài 3

function drawCenteredLadder(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }

  if (n <= 0) {
    return "Please enter the positive number";
  }
  
  function buildChar(char, count) {
    let str = "";
    for (let i = 0; i < count; i++) {
      str += char;
    }
    return str;
  }

  let result = "";  
  for (let i = 0; i < n; i++) {
    const spaces = buildChar(" ", n - i - 1);
    const stars = buildChar("*", 2 * i + 1);
    result += spaces + stars + "\n";
  }
  return result;
}

console.log("Centered Ladder");
console.log(drawCenteredLadder(3));

// Bài 4

function drawHollowRectangle(w, h) {
  if (typeof w !== "number" || typeof h !== "number") {
    return "Please enter the number";
  }

  if (w <= 0 || h <= 0) {
    return "Please enter the positive number";
  }

  // same as Bài 3
  let result = "";
  for (let rowIndex = 0; rowIndex < h; rowIndex++) {
    for (let colIndex = 0; colIndex < w; colIndex++) {
      if(rowIndex === 0 || rowIndex === h - 1 || colIndex === 0 || colIndex === w - 1) {
        result += "*";
      }
      else {
        result += " ";
      }
    }
    result += "\n";
  }
  return result;
}

console.log("Hollow Rectangle");
console.log(drawHollowRectangle(5, 3));

// Bài 5

function drawNumberTriangle(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }
  if (n <= 0) {
    return "Please enter the positive number";
  }

  let result = "";
  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    for (let colIndex = 0; colIndex <= rowIndex; colIndex++) {
      result += colIndex + 1 + " ";
    }
    result += "\n";
  }
  return result;
}

console.log("Number Triangle");
console.log(drawNumberTriangle(5));
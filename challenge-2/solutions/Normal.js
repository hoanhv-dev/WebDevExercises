// Bài 1

function drawRightTriangle(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }
  if (n < 0) {
    return "Please enter the positive number";
  }

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
  if (typeof n !== "number") {
    return "Please enter the number";
  }
  if (n < 0) {
    return "Please enter the positive number";
  }

  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= n - i ; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

console.log(drawReverseTriangle(5));

// Bài 3

function drawCenteredLadder(n) {
  if (typeof n !== "number") {
    return "Please enter the number";
  }
  if (n < 0) {
    return "Please enter the positive number";
  }

  const ladder = [];
  for (let i = 0; i < n; i++) {
    const space = " ".repeat(n - i - 1);
    const stars = "*".repeat(2 * i + 1);
    ladder.push(space + stars);
  }
  return ladder.join("\n");
}

console.log(drawCenteredLadder(3));

// Bài 4

function drawHollowRectangle(w, h) {
  if (typeof w !== "number" || typeof h !== "number") {
    return "Please enter the number";
  }
  if (w < 0 || h < 0) {
    return "Please enter the positive number";
  }

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
  if (typeof n !== "number") {
    return "Please enter the number";
  }
  if (n < 0) {
    return "Please enter the positive number";
  }

  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j + " ";
    }
    result += "\n";
  }
  return result;
}

console.log(drawNumberTriangle(5));


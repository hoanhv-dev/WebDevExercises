// Cấp độ Cơ bản
// Bài 1

function isPositive(num) {
  if (typeof num !== "number") {
    return "Input must be a number";
  }
  return num > 0; 
}

console.log(isPositive(5));

// Bài 2
function square(num) {
  if (typeof num !== "number") {
    return "Input must be a number";
  } 
  return num * num;
}

console.log(square(-4));

// Bài 3

function printNumbers(start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    return "Input must be a number";
  }
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

console.log(printNumbers(1, 10)); // solve

// Bài 4

function sumOdd(n) {
  if (typeof n !== "number") {
    return "Input must be a number";
  }

  if (n < 1) {
    return "Do not have any odd numbers";
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      // Check if number is odd
      sum += i;
    }
  }

  return sum;
}

console.log(sumOdd(9));

// Bài 5

function divisibleByFive(num) {
  if (typeof num !== "number") {
    return "Input must be a number";
  }
  return Boolean(num % 5);
}

console.log(divisibleByFive(11));

// Bài 6

function countEven(n) {
  if (typeof n !== "number") {
    return "Input must be a number";
  }

  let count = 0;
  let i = 1;
  while (i <= n) {
    i % 2 && (count += 1);
    i += 1;
  }

  return count;
}

console.log(countEven(10));

// Bài 7

function printDivisibleByThree(n) {
  if (typeof n !== "number") {
    return "Input must be a number";
  }

  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(printDivisibleByThree(10));

// Bài 8

function isLeapYear(year) {
  if (typeof year !== "number") {
    return "Input must be a number";
  }

  if (year < 0) {
    return "Input must be a positive number";
  }

  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

console.log(isLeapYear(2022));

// Bài 9

function ageCategory(age) {
  if (typeof age !== "number") {
    return "Input must be a number";
  }

  if (age < 0) {
    return "Input must be a positive number";
  }

  switch (true) {
    case age < 13:
      return "Trẻ em";
      break;
    case age <= 18:
      return "Thanh niên";
      break;
    case age > 18:
      return "Người lớn";
  }
}

console.log(ageCategory(14));

// Bài 10

function factorial(n) {
  if (typeof n !== "number") {
    return "Input must be a number";
  }

  if (n < 0) {
    return "Do not have any factorial for negative numbers";
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(-5));

// Bài 11
function isVowel(char) {
  if (typeof char !== "string") {
    return "Input must be a string";
  }

  return "ueoaiUeOAi".includes(char);

  // if (
  //   char === "u" ||
  //   char === "e" ||
  //   char === "o" ||
  //   char === "a" ||
  //   char === "i" ||
  //   char === "U" ||
  //   char === "E" ||
  //   char === "O" ||
  //   char === "A" ||
  //   char === "I"
  // ) {
  //   return true;
  // }
  // return false;
}

console.log(isVowel("e"));

// Bài 12

function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const number = [1, 2, 3, 4, 5];
console.log(sumArray(number));

// Bài 13

function printReverse(n) {
  if (typeof n !== "number") {
    return "Input must be a number";
  }

  const arr = [];
  let i = n;
  while (i >= 1) {
    arr.push(i);
    i--;
  }
  return arr;
}

console.log(printReverse(5));

// Bài 14

function isPerfectNumber(num) {
  if (typeof num !== "number" || num <= 0) {
    return false;
  }

  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

console.log(isPerfectNumber(6));

// Bài 15

function celsiusToFahrenheit(c) {
  if (typeof c !== "number") {
    return "Input must be a number";
  }
  return (c * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(1));

// Bài 16

function countChar(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    (str[i] !== " ") && (count += 1);
  }
  return count;
}

console.log(countChar("hello Tom"));

// Bài 17

function printTriangle(n) {
  if (typeof n !== "number") {
    return "Input must be a number";
  }

  const result = [];
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    result.push(row.trim());
  }
  return result;
}
console.log(printTriangle(3));

// Bài 18

function isNegative(num) {
  if (typeof num !== "number") {
    return "Input must be a number";
  }
  return num < 0;
}

console.log(isNegative(-5));

// Bài 19

function sumDivisibleBySeven(n) {
  if (typeof n !== "number") {
    return "Input must be a number";
  }

  let sum = 0;
  let i = 1;
  while (i <= n) {
    (i % 7 === 0) && (sum += i);
    i++;
  }

  return sum;
}

console.log(sumDivisibleBySeven(14));

// Bài 20

function dayType(day) {
  if (typeof day !== "number" || day <= 0) {
    return "Input must be a positive number";
  }

  switch (true) {
    case day <= 5:
      return "Ngày thường";
    case day <= 7:
      return "Cuối tuần";
    default:
      return "Ngày không hợp lệ";
  }
}

console.log(dayType(7));

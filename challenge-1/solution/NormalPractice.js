// Cấp độ trung bình
// Bài 1

function filterGreaterThenTen(arr) {
  if (arr.length === 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      result.push(arr[i]);
    }
  }
  return result;

  // return arr.filter((numberInArray) => numberInArray > 10);

}

console.log(filterGreaterThenTen([5, 12, 16, 4]));

// Bài 2

function tripleArray(arr) {
  if (arr.length === 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 3);
  }
  return result;

  // return arr.map((elementInArray) => elementInArray * 3);
}

console.log(tripleArray([1, 2, 3]));

// Bài 3

function printIndexed(arr) {
  if (arr.length === 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(`Index ${i}: ${arr[i]}`);
  }
  // arr.forEach((item, index) => {
  //   result.push(`Index ${index}: ${item}`);
  // });

  return result;
}

console.log(printIndexed(["apple", "banana"])); 

// Bài 4

function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([3, 4, 5, 6, 1]));

// Bài 5

function removeNagatives(arr) {
  if (arr.length === 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result.push(arr[i]);
    }
  }
  return result;
  
  // return arr.filter((numInArray) => numInArray >= 0);
}

console.log(removeNagatives([-1, -2, 3, 4]));

// Bài 6

function isPrime(num) {
  if (typeof num !== "number") {
    return "Input must be a number";
  }

  if (num < 2) {
    return false;
  }
  
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrimes(arr) {
  if (!arr || arr.length === 0) {
    return { count: 0, primes: [] };
  }

  const primes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primes[primes.length] = arr[i];
    }
  }
  
  return {
    count: primes.length,
    primes: primes
  };
}

console.log(countPrimes([1, 2, 5, 7, 6, 11]));

// Bài 7

function stringToArray(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  return result;
  // return str.split("").map((char) => char);
}

console.log(stringToArray("hello"));

// Bài 8

function findMin(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin([1, 3, 4, 5, 2]));

// Bài 9

function filterLongStrings(arr) {
  if (arr.length === 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      result.push(arr[i]);
    }
  }
  return result;
  // return arr.filter((str) => str.length > 3);
}

console.log(filterLongStrings(["hello", "cat"]));

// Bài 10

function sumSquares(arr) {
  if (arr.length === 0) {
    return [];
  }

  const square = arr.map((item) => item * item);
  let sum = 0;
  for (let i = 0; i < square.length; i++) {
    sum += square[i];
  }
  // square.forEach((num) => {
  //   sum += num;
  // });
  return {
    arr,
    sum,
  };
}

console.log(sumSquares([3, 4, 2]));

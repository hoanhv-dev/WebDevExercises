// Cấp độ Nâng cao
// Bài 1

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let strHasMaxLength = "";
  for (let i = 0; i < strs.length; i++) {
    if (strHasMaxLength.length < strs[i].length) {
      strHasMaxLength = strs[i];
    }
  }

  return strHasMaxLength;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// Bài 2

function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  let i = 0,
    j = 0;
  const merge = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merge.push(arr1[i]);
      i++;
    } else {
      merge.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merge.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merge.push(arr2[j]);
    j++;
  }

  return merge;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6, 8, 10])); // arr2 is longer
console.log(mergeSortedArrays([1, 3, 5, 7, 9], [2, 4])); // arr1 is longer
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // equal length

// Bài 3

function findPairSum(arr, target) {
  let seen = new Set();
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (seen.has(complement)) {
      pairs.push([complement, arr[i]]);
    }
    seen.add(arr[i]);
  }
  return pairs.length > 0 ? pairs : null;
}

console.log(findPairSum([2, 7, 11, 15, 3, 6], 9));
console.log(findPairSum([1, 2, 3, 4, 5], 7));

// Bài 4

function reverseArray(arr) {
  let lastIndex = arr.length - 1;
  let tempArr = [...arr];
  for (let i = 0; i <= lastIndex; i++) {
    tempArr[i] = arr[lastIndex - i];
  }

  return tempArr;
}

console.log(reverseArray([1, 2, 3]));

// Bài 5

function fibonacciOptimized(n) {
  if (n < 0) {
    return "Input must be a positive integer";
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let next = previous + current;
    previous = current;
    current = next;
  }

  return current;
} //solved
console.log(fibonacciOptimized(5));

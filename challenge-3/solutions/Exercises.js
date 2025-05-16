// Exercise 1
function kthLargestReverse(arr, k) {
    if (!Array.isArray(arr) || typeof k !== "number") {
        return "Please enter valid input";
    }

    // Check all numbers are positive integers
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || arr[i] <= 0 || !Number.isInteger(arr[i])) {
            return "All elements in the array must be positive integers";
        }
    }

    if (k <= 0 || k > arr.length) {
        return "k is out of range";
    }

    // Reverse each number in the array
    const reversedNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let reversed = 0;
        while (num > 0) {
            reversed = reversed * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        reversedNumbers.push(reversed);
    }    

    // Sort in descending order
    for (let i = 0; i < reversedNumbers.length; i++) {
        for (let j = i + 1; j < reversedNumbers.length; j++) {
            if (reversedNumbers[i] < reversedNumbers[j]) {
                [reversedNumbers[i], reversedNumbers[j]] = [reversedNumbers[j], reversedNumbers[i]];
            }
        }
    }

    // Return the kth largest number (index k-1)
    return reversedNumbers[k - 1];
}

  console.log("Exercise 1");

  console.log(kthLargestReverse([20, 100, 200], 2)); 
  console.log(kthLargestReverse([123, 456, 798], 1)); 
  console.log(kthLargestReverse([123, 456, 789], 3)); 

  // Exercise 2

function maxDigitSumSubstring(s, k) {
    if (typeof s !== "string" || typeof k !== "number") {
        return "Please enter valid input";
    }

    for (let i = 0; i < s.length; i++) {
        const check = s.charCodeAt(i);
        if (check < 48 || check > 57) {
            return "Input string must contain only digits";
        }
    }
    
    if (k <= 0 || k > s.length) {
        return "k is out of range";
    }

    let maxSum = 0;
    let maxSubstring = "";

    for (let i = 0; i <= s.length - k; i++) {
        let sum = 0;
        for (let j = 0; j < k; j++) {
            sum += parseInt(s[i + j]);
        }
        if (sum > maxSum) {
            maxSum = sum;
            maxSubstring = s.substr(i, k);
        }
    }

    return maxSubstring;
}

console.log(maxDigitSumSubstring("123456789", 3));      
console.log(maxDigitSumSubstring("1237%%%89456", 3));  

// Exercise 3

function canPartition(arr) {
    if (!Array.isArray(arr)) {
        return "Please enter valid input";
    }

    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    if (totalSum % 2 !== 0) {
        return false;
    }

    const targetSum = totalSum / 2;
    const dp = new Array(targetSum + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < arr.length; i++) {
        for (let j = targetSum; j >= arr[i]; j--) {
            dp[j] = dp[j] || dp[j - arr[i]];
        }
    }

    return dp[targetSum];
}

console.log("Exercise 3");
console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));

// Exercise 4

function minMoves(arr, target) {
    if (!Array.isArray(arr) || typeof target !== "number") {
        return "Please enter valid input";
    }

    let moves = 0;
    for (let i = 0; i < arr.length; i++) {
        moves += Math.abs(arr[i] - target);
    }

    return moves;
}

console.log("Exercise 4");

console.log(minMoves([1, 2, 3], 2));
console.log(minMoves([1, 10, 2, 9], 7));

// Exercise 5

function longestIncreasingSubsequence(arr) {
    if (!Array.isArray(arr)) {
        return "Please enter valid input";
    }
    
    const dp = [];
    for (let i = 0; i < arr.length; i++) {
        dp[i] = 1;
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log("Exercise 5");
console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(longestIncreasingSubsequence([0, 1, 0, 3, 2, 3]));
console.log(longestIncreasingSubsequence([7, 7, 7, 7, 7, 7, 7]));

// Exercise 6

function countInversions(arr) {
    if (!Array.isArray(arr)) {
        return "Please enter valid input";
    }
    const temp = [...arr];
    let invCount = 0;

    const mergeSort = (arr, temp, left, right) => {
        if (left >= right) {
            return;
        }

        const mid = Math.floor((left + right) / 2);
        
        mergeSort(arr, temp, left, mid);
        mergeSort(arr, temp, mid + 1, right);

        merge(arr, temp, left, mid, right);
    }

    const merge = (arr, temp, left, mid, right) => {
        let i = left;
        let j = mid + 1;
        let k = left;

        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
                invCount += (mid - i + 1);
            }
        }

        while (i <= mid) {
            temp[k++] = arr[i++];
        }

        while (j <= right) {
            temp[k++] = arr[j++];
        }

        for (let i = left; i <= right; i++) {
            arr[i] = temp[i];
        }
    }

    mergeSort(arr, temp, 0, arr.length - 1);
    return invCount;
}

console.log("Exercise 6");

console.log(countInversions([2, 4, 1, 3, 5])); 
console.log(countInversions([1, 2, 3, 4, 5])); 
console.log(countInversions([5, 4, 3, 2, 1])); 
console.log(countInversions([1, 3, 2, 3, 1])); 

// Exercise 7

function uniquePaths(m, n) {
    if (typeof m !== "number" || typeof n !== "number") {
        return "Please enter valid input";
    }
    
    // const matrix = new Array.from({length: m}, () => new Array(n).fill(0)); callback function
    const matrix = [];
    for (let i = 0; i < m; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }

    // Initialize first row and first column with 1
    for (let i = 0; i < m; i++) {
        matrix[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        matrix[0][j] = 1;
    }
    
    // Fill the rest of the matrix
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
        }
    }
    
    return matrix[m-1][n-1];
}

console.log("Exercise 7");

console.log(uniquePaths(3, 2)); 
console.log(uniquePaths(3, 3)); 
console.log(uniquePaths(2, 2)); 
console.log(uniquePaths(1, 1)); 

// Exercise 8

function canFormPalindrome(s) {
    if (typeof s !== "string") {
        return "Please enter valid input";
    }
    
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

console.log("Exercise 8");

console.log(canFormPalindrome("carrace"));
console.log(canFormPalindrome("daily")); 
console.log(canFormPalindrome("aab")); 



// Exercise 9

function triangleCount(arr) {
    if (!Array.isArray(arr)) {
        return "Please enter valid input";
    }

    // Sort array in ascending order
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    
    let count = 0;
    const arrayLength = arr.length;
    
    // Use three pointers: i, j, k
    // i is the index of the first number
    // j is the index of the second number
    // k is the index of the third number
    for (let i = 0; i < arrayLength - 2; i++) {
        let k = i + 2;  // Start k from i+2
        
        for (let j = i + 1; j < arrayLength - 1; j++) {
            // Find the largest k where arr[i] + arr[j] > arr[k]
            while (k < arrayLength && arr[i] + arr[j] > arr[k]) {
                k++;
            }
            // Add the count of valid triangles
            count += k - j - 1;
        }
    }
    
    return count;
}

console.log("Exercise 9");

console.log(triangleCount([2, 2, 3, 4])); 
console.log(triangleCount([4, 2, 3, 4])); 
console.log(triangleCount([1, 2, 3, 4, 5])); 
console.log(triangleCount([2, 2, 2])); 
console.log(triangleCount([1, 1, 1])); 

// Exercise 10

function longestSubstringKDistinct(s, k) {
    if (typeof s !== "string" || typeof k !== "number") {
        return "Please enter valid input";
    }
    
    const charCount = {};
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        charCount[rightChar] = (charCount[rightChar] || 0) + 1;

        while (Object.keys(charCount).length > k) {
            const leftChar = s[left];
            charCount[leftChar]--;
            if (charCount[leftChar] === 0) {
                delete charCount[leftChar];
            }
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log("Exercise 10");

console.log(longestSubstringKDistinct("eceba", 2));
console.log(longestSubstringKDistinct("aa", 1));
console.log(longestSubstringKDistinct("abaccc", 2));







// Exercise 11

function countLeafNodes(edges, n) {
    if (!Array.isArray(edges) || typeof n !== "number") {
        return "Please enter valid input";
    }

    // Create adjacency list using Map
    const adjacencyList = new Map();
    
    // Initialize adjacency list for all nodes
    for (let i = 0; i < n; i++) {
        adjacencyList.set(i, []);
    }
    
    // Build adjacency list from edges
    for (let [u, v] of edges) {
        adjacencyList.get(u).push(v);
        adjacencyList.get(v).push(u);
    }
    
    // Count leaf nodes (nodes with exactly one neighbor)
    let leafCount = 0;
    for (let [, neighbors] of adjacencyList) {
        if (neighbors.length === 1) {
            leafCount++;
        }
    }
    
    return leafCount;
}

console.log("Exercise 11");

console.log(countLeafNodes([[0, 1], [1, 2], [1, 3]], 4)); 
console.log(countLeafNodes([[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]], 7)); 
console.log(countLeafNodes([[0, 1], [1, 2]], 3)); 
console.log(countLeafNodes([[0, 1]], 2)); 

// Exercise 13

function minStepsToSum(arr, target) {
    if (!Array.isArray(arr) || typeof target !== "number") {
        return "Please enter valid input";
    }

    // Queue to store [currentSum, steps]
    const queue = [[0, 0]];
    // Set to store visited sums
    const visited = new Set([0]);
    
    while (queue.length > 0) {
        const [currentSum, steps] = queue.shift();
        
        // If we reached target, return steps
        if (currentSum === target) {
            return steps;
        }
        
        // Try adding each number in array
        for (let num of arr) {
            const newSum = currentSum + num;
            
            // If new sum is not visited and not exceeding target
            if (!visited.has(newSum) && newSum <= target) {
                visited.add(newSum);
                queue.push([newSum, steps + 1]);
            }
        }
    }
    
    // If we can't reach target
    return "Cannot reach target";
}

console.log("Exercise 13");

console.log(minStepsToSum([1, 2, 3], 5)); 
console.log(minStepsToSum([1, 2, 3], 6)); 
console.log(minStepsToSum([2, 3], 7)); 
console.log(minStepsToSum([1, 2], 3)); 
console.log(minStepsToSum([2, 3], 1));

// Exercise 16

function smallestCycle(s) {
    if (typeof s !== "string") {
        return "Please enter valid input";
    }

    const stringLength = s.length;
    
    // Try all possible cycle lengths from 1 to n/2
    for (let cycleLength = 1; cycleLength <= stringLength/2; cycleLength++) {
        // Check if string length is divisible by cycle length
        if (stringLength % cycleLength !== 0) continue;
        
        // Get the potential cycle
        const cycle = s.substring(0, cycleLength);
        let isCycle = true;
        
        // Check if the cycle repeats throughout the string
        for (let i = cycleLength; i < stringLength; i += cycleLength) {
            const currentSubstring = s.substring(i, i + cycleLength);
            if (currentSubstring !== cycle) {
                isCycle = false;
                break;
            }
        }
        
        if (isCycle) {
            return cycleLength;
        }
    }
    
    // If no cycle found, return the string length
    return stringLength;
}

console.log("Exercise 16");

console.log(smallestCycle("ababab")); 
console.log(smallestCycle("abcabc")); 
console.log(smallestCycle("aaaa")); 
console.log(smallestCycle("abcd"));
console.log(smallestCycle("abababab")); 

// Exercise 17

function countConnectedComponents(edges, n) {
    if (!Array.isArray(edges) || typeof n !== "number") {
        return "Please enter valid input";
    }

    // Create adjacency list
    const graph = []
    for(let i = 0; i < n; i++) {
        graph[i] = [];
    }
    
    // Build graph from edges
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);  // Undirected graph
    }
    
    // Array to track visited nodes
    const visited = new Array(n).fill(false);
    let components = 0;
    
    // DFS function to mark all connected nodes
    const dfs = (node) => {
        visited[node] = true;
        
        // Visit all neighbors
        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    };
    
    // Count components by starting DFS from each unvisited node
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            components++;
            dfs(i);
        }
    }
    
    return components;
}

console.log("Exercise 17");
console.log(countConnectedComponents([[0, 1], [2, 3]], 4));
console.log(countConnectedComponents([[0, 1], [1, 2], [3, 4]], 5)); 
console.log(countConnectedComponents([[0, 1], [1, 2], [2, 3], [3, 4]], 5)); 
console.log(countConnectedComponents([], 3));
console.log(countConnectedComponents([[0, 1]], 3)); 

// Exercise 18

function countArraySplits(arr, k) {
    if (!Array.isArray(arr) || typeof k !== "number") {
        return "Please enter valid input";
    }

    const n = arr.length;
    
    // dp[i][j] represents number of ways to split first i elements into j parts
    const dp = new Array(n + 1).fill().map(() => new Array(k + 1).fill(0));
    
    // Base case: one way to split empty array into 0 parts
    dp[0][0] = 1;
    
    // Fill dp table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            // For each possible split point
            for (let split = 0; split < i; split++) {
                dp[i][j] += dp[split][j - 1];
            }
        }
    }
    
    return dp[n][k];
}

console.log("Exercise 18");

console.log(countArraySplits([1, 2, 3], 2)); 
console.log(countArraySplits([1, 2, 3], 3)); 
console.log(countArraySplits([1, 2, 3, 4], 2)); 
console.log(countArraySplits([1, 2, 3, 4], 3)); 
console.log(countArraySplits([1, 2, 3, 4], 4)); 

// Exercise 19

function minSwaps(arr) {
    if (!Array.isArray(arr)) {
        return "Please enter valid input";
    }

    const n = arr.length;
    
    // Create array of pairs [value, original index]
    const pairs = [];
    for(let i = 0; i < n; i++) {
        pairs.push([arr[i], i]);
    }
    
    // Sort pairs based on values
    pairs.sort((a, b) => a[0] - b[0]);
    
    // Create map to store correct positions
    const positionMap = new Map();
    for (let i = 0; i < n; i++) {
        positionMap.set(pairs[i][1], i);
    }
    
    // Array to track visited elements
    const visited = new Array(n).fill(false);
    let swaps = 0;
    
    // Find cycles and count swaps
    for (let i = 0; i < n; i++) {
        if (visited[i] || positionMap.get(i) === i) {
            continue;
        }
        
        let cycleSize = 0;
        let j = i;
        
        // Traverse the cycle
        while (!visited[j]) {
            visited[j] = true;
            j = positionMap.get(j);
            cycleSize++;
        }
        
        // Add swaps needed for this cycle
        swaps += (cycleSize - 1);
    }
    
    return swaps;
}

console.log("Exercise 19");

console.log(minSwaps([4, 3, 1, 2])); 
console.log(minSwaps([1, 5, 4, 3, 2])); 
console.log(minSwaps([2, 4, 1, 3])); 
console.log(minSwaps([1, 2, 3, 4])); 
console.log(minSwaps([5, 4, 3, 2, 1])); 

// Exercise 20

function maxProfitWithK(prices, k) {
    if (!Array.isArray(prices) || typeof k !== "number") {
        return "Please enter valid input";
    }

    const n = prices.length;
    if (n < 2) return 0;

    // dp[i][j] represents max profit on day i with j transactions
    const dp = [];
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j <= k; j++) {
            dp[i][j] = 0;
        }
    }

    // For each transaction
    for (let t = 1; t <= k; t++) {
        // For each day
        for (let i = 1; i < n; i++) {
            // Initialize max profit for current day
            let maxProfit = dp[i-1][t];
            
            // Check all possible buy days
            for (let j = 0; j < i; j++) {
                // Calculate profit if we buy on day j and sell on day i
                let profit = prices[i] - prices[j];
                if (j > 0) {
                    profit += dp[j-1][t-1];
                }
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
            
            dp[i][t] = maxProfit;
        }
    }

    return dp[n-1][k];
}

console.log("Exercise 20");

console.log(maxProfitWithK([2, 4, 1], 2)); 
console.log(maxProfitWithK([3, 2, 6, 5, 0, 3], 2));
console.log(maxProfitWithK([1, 2, 3, 4, 5], 2)); 
console.log(maxProfitWithK([7, 6, 4, 3, 1], 2)); 
console.log(maxProfitWithK([1, 2, 4, 2, 5, 7, 2, 4, 9, 0], 2)); 

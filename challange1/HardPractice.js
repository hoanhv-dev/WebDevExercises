// Cấp độ Nâng cao
// Bài 1

function longestCommonPrefix(strs){
    let firstStr = strs[0]
    let prefix = ''

    for(let i = 0; i<firstStr.length;i++){
        let char = firstStr[i]
        for(let j = 0; j<strs.length;j++){
            if(i>=strs[j].length || strs[j][i] != char){
                return prefix
            }
        }
        prefix+=char
    }
    return prefix
}

console.log(longestCommonPrefix(['flower','flow','flight']))

// Bài 2

function mergeSortedArrays(arr1, arr2){
    let i = 0, j=0
    let merge = []

    while(i<arr1.length && j <arr2.length){
        if(arr1[i]<arr2[j]){
            merge.push(arr1[i])
            i++
        }
        else{
            merge.push(arr2[j])
            j++
        }
    }

    while(i<arr1.length){
        merge.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        merge.push(arr2[j])
        j++
    }

    return merge
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]))

// Bài 3

function findPairSum(arr, target){
    let seen = new Set()

    for(let i = 0; i< arr.length; i++){
        let complement = target - arr[i]
        if(seen.has(complement)){
            return[complement, arr[i]]
        }
        seen.add(arr[i])
    }
    return null
}

console.log(findPairSum([2,7,11,15],9))

// Bài 4

function reverseArray(arr){
    let n = arr.length

    for(let i = 0; i<n; i++){
        let j = n - 1 - i
        if(j<i){
            break
        }

        let temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }

    return arr
}

console.log(reverseArray([1,2,3]))

// Bài 5

function fibonacciOptimized(n){
    if(n===0) return 0
    if(n===1) return 1

    let prev = 0
    let cont = 1

    for(let i = 2; i<=n; i++){
        let next = prev + cont
        prev = cont
        cont = next
    }

    return cont
}
console.log(fibonacciOptimized(5))
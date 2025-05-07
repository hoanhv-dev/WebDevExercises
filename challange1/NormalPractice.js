// Cấp độ trung bình
// Bài 1

function filterGreaterThenTen(arr){
    const betterThenTen = arr.filter(items => items>10)
    console.log(betterThenTen)
}

filterGreaterThenTen([5,12,16,4])

// Bài 2

function tripleArray(arr){
    const triple = arr.map(items => items *3)
    console.log(triple)
}

tripleArray([1,2,3])

// Bài 3

function printIndexed(arr){
    const print = arr.forEach((item, index)=>{
        console.log("Index " + index +": "+ item)
    })
}

printIndexed(['a','b'])

// Bài 4

function findMax(arr){
    if(arr.length==0) return undefined
    let max = []
    for(let i = 1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

console.log(findMax([3,4,5,6,1]))

// Bài 5

function removeNagatives(arr){
    const remove = arr.filter(item => item >= 0)
    console.log(remove)
}

removeNagatives([-1,-2,3,4])

// Bài 6

function isPrime(num){
    if(num<2) return false
    for(let i = 2; i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }
    return true
}
function countPrimes(arr){
    const primes = []
    let count = 0
    arr.forEach(num =>{
        if(isPrime(num)){
            primes.push(num)
        }
    })
    return {
        count: primes.length,
        primes: primes
    }
}

console.log(countPrimes([1,2,5,7,6,11]))


// Bài 7

function stringToArray(str){
    const arr = []
    for(let i = 0; i<str.length;i++){
        arr.push(str[i])
    }
    return arr.map(char => char)
}

console.log(stringToArray('hello'))

// Bài 8

function findMin(arr){
    const min = arr[0]
    for(let i = 0; i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min;
}

console.log(findMin([1,3,4,5,2]))

// Bài 9

function filterLongStrings(arr){
    return arr.filter(str => str.length>3)
}

console.log(filterLongStrings(['hello','cat']))

// Bài 10

function sumSquares(arr){
    const square = arr.map(item => item*item)
    let sum=0
    square.forEach(num =>{
        sum+=num
    })
    return {
        arr,
        sum
    }
}

console.log(sumSquares([3,4,2]))
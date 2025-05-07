// Cấp độ Cơ bản
// Bài 1

function isPositive(num) {
    return num>0 //solved
}
console.log(isPositive(5))

// Bài 2

function square(num){
    if(typeof num !== "number"){
        return "Input must be a number"
    } //solved
    
    if(num<0){
        num=-num
    } //solved
    return num*num
}

console.log(square(4))

// Bài 3

function printNumbers(start, end) {
    let result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}

console.log(printNumbers(1,10)) // solve

// Bài 4

function sumOdd(n){
    let sum = 0
    let end = n > 0 ? n : -n
    for(let i=1; i<=end; i++){
        if(i%2!==0){
            sum += i
        }
    }

    return sum //solved
} //added ternary operator for the end is negative number

console.log(sumOdd(9))

// Bài 5

function divisibleByFive(num){
    return num%5===0 //solved
} 

console.log(divisibleByFive(11))

// Bài 6

function countEven(n){
    let count = 0
    let i = 1
    while (i<=n){
        if(i%2===0){
            count+=1
        }
        i+=1
    }

    return count
} // the requirement is using while loop :(((

console.log(countEven(10))

// Bài 7

function printDivisibleByThree(n){
    let arr= []
    for(let i=1;i<=n;i++){
        if(i%3===0){
            arr.push(i)
        }
    }
    return arr //added array
}

console.log(printDivisibleByThree(10))


// Bài 8

function isLeapYear(year){
    if(year%400===0){
        return true
    } else if (year%100===0){
        return false
    } else if (year%4===0){
        return true
    } else {
        return false
    }
} //solved

console.log(isLeapYear(2022))

// Bài 9

function ageCategory(age){
    switch(true){
        case age < 13: return "Trẻ em"
            break
        case age >= 13 && age <= "18": return "Thanh niên"
            break
        case age > 18: return "Người lớn"
    }
} //solved

console.log(ageCategory(14))

// Bài 10

function factorial(n){
    let result = 1;
    if(n < 0){
        return "Do not have any factorial for negative numbers" 
    }
    for(let i = 1; i <= n; i++){
        result *= i;
    }

    return result
} //solved

console.log(factorial(-5))

// Bài 11
function isVowel(char){
    var char;
    if(char === 'u'||char === 'e'||char === 'o'||char === 'a'||char === 'i'||char === 'U'||char === 'E'||char === 'O'||char === 'A'||char === 'I'){
        return true;
    } else{
        return false;
    } 
} //solved
        

console.log(isVowel("e"))

// Bài 12

function sumArray(arr){
    if(Array.isArray(arr) || arr.length===0){
        return 0
    }
    
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }

    return sum
} //solved

const number =[1,2,3,4,5]
console.log(sumArray(number))

// Bài 13

function printReverse(n){
    let arr = []
    let i = n
    while (i>=1){
        arr.push(i)
        i--
    }
    return arr
} //solved

console.log(printReverse(5))

// Bài 14

function isPerfectNumber(num){
    if(typeof num !== "number"  || num<= 0){
        return false
    }
    
    let sum =0
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum+=i
        }

    }
    return sum === num
} //solved

console.log(isPerfectNumber(6))


// Bài 15

function celsiusToFahrenheit(c){
    let f = 0;
    if(c>0){
        f = c * 9/5 +32
        return f
    }
}

console.log(celsiusToFahrenheit(1))

// Bài 16

function countChar(str){
    let count = 0
    for(let i = 0; i<str.length; i++){
        if(str[i] !== " "){
            count++}
    }
    return count;
} //solved

console.log(countChar("hello Tom"))

// Bài 17

function printTriangle(n){
    for(let i=1; i<=n; i++){
        let row = ""
        for(let j=1; j<=i;j++){
            row +=j + " ";
        }
        return row
    }
}
console.log(printTriangle(3))

// Bài 18

function isNegative(num){
    return num<0
} //solved

console.log(isNegative(-5))

// Bài 19

function sumDivisibleBySeven(n){
    let sum = 0
    let i = 1
    while (i<=n){
        if(i%7==0){
            sum+=i
        }
        i++
    }

    return sum
}

console.log(sumDivisibleBySeven(14))

// Bài 20 

function dayType(day){
    switch(true){
        case day >=1 && day <=5: return "Ngày thường";
            break
        case day >=6 && day <=7: return"Cuối tuần";
            break
    }    
} //solved

dayType("7")
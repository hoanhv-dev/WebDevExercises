// Cấp độ Cơ bản
// Bài 1

function isPositive(num) {
    if(num>0){
        return true;
    }

    else return false;
}
console.log(isPositive(5))

// Bài 2

function square(num){
    if(num<0)
        num=-num
    return num*num
}

console.log(square(4))

// Bài 3

function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

printNumbers();

// Bài 4

function sumOdd(n){
    let sum=0
    for(let i=1; i<=n; i++){
        if(i%2!==0){
            sum+=i
        }
    }

    console.log(sum)
}

sumOdd(9)

// Bài 5

function divisibleByFive(num){
    if(num%5==0){
        return true
    }

    else return false

}

console.log(divisibleByFive(11))

// Bài 6

function countEven(n){
    let count = 0
    let i = 1
    while (i<=n){
        if(i%2==0){
            count+=1
        }
        i+=1
    }

    console.log(count)
}

countEven(10);

// Bài 7

function printDivisibleByThree(n){
    for(let i=1;i<=n;i++){
        if(i%3==0){
            console.log(i)
        }
    }
}

printDivisibleByThree(10)


// Bài 8

function isLeapYear(year){
    if(year%4==0&&year%400==0){
        return true
    }
    else return false
}

console.log(isLeapYear(2022))

// Bài 9

function ageCategory(age){
    var age;
    switch(true){
        case age < "13": console.log("Trẻ em")
            break
        case age >= "13" && age <= "18": console.log("Thanh niên")
            break
        case age > "18": console.log("Người lớn")
    }
}

ageCategory(14)

// Bài 10

function factorial(n){
    let rs = 1;
    for(let i=1; i<=n;i++){
        rs*=i;
    }

    console.log(rs)
}

factorial(5)

// Bài 11
function isVowel(char){
    var char;
    if(char!="a, e, i, o ,u"){
        return true;
    }

    else return false;
}

console.log(isVowel("e"))

// Bài 12

function sumArray(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }

    return sum
}

const number =[1,2,3,4,5]
console.log(sumArray(number))

// Bài 13

function printReverse(n){
    let i = n
    while (i>=1){
        console.log(i)
        i--
    }
}

printReverse(5)

// Bài 14

function isPerfectNumber(num){
    let sum =0
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum+=i
        }

    }
    return sum === num
}

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
    for(let i = 1; i<=str.length; i++){
        count++
    }
    return count;
}

console.log(countChar("hello"))

// Bài 17

function printTriangle(n){
    for(let i=1; i<=n; i++){
        let row = ""
        for(let j=1; j<=i;j++){
            row +=j + " ";
        }
        console.log(row)
    }
}
printTriangle(3)

// Bài 18

function isNegative(num){
    if(num<0){return true}
    else return false
}

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

    console.log(sum)
}

sumDivisibleBySeven(14)

// Bài 20 

function dayType(day){
    var day;
    switch(true){
        case day >="1" && day <="5": console.log("Ngày thường");
            break
        case day >="6" && day <="7": console.log("Cuối tuần")
            break
    }    
}

dayType("7")
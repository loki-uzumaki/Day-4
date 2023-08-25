// 2.Arrow functions

// a.odd numbers in an array

let oddnumbers = (numbers) => {
    let array = []
    for (let number of numbers) {
        if (number % 2 !== 0) {
            array.push(number)
        }
    }
    return array
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(oddnumbers(numbers))


// b.Convert all the strings to title caps in a string array

let stringArray = ["hello world", "goodbye moon", "welcome back"];
let titleCaseArray = stringArray.map(str => str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }));

console.log(titleCaseArray);


// c.
// Sum of all numbers in an array

let numbersa = [1, 2, 3, 4, 5];
let sum = numbersa.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);


// d.
// Return all the prime numbers in an array

let numberst = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

let primeNumbers = numberst.filter(isPrime);

console.log(primeNumbers);

// e.
// Return all the palindromes in an array

let strings = ["racecar", "hello", "level", "world", "deified"];

let isPalindrome = str => {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};

let palindromeStrings = strings.filter(isPalindrome);

console.log(palindromeStrings); 
// 1.Anonymous function

// a.
// Odd numbers in array

let numbersin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let findoddnumbers = function (numbersin) {
    array = []
    for (let number of numbersin) {
        if (number % 2 !== 0) {
            array.push(number)
        }
    }
    return array
}
console.log(findoddnumbers(numbersin))


// b.
// All the strings to title caps in a string array

let stringArray = ["hello world", "good morning", "javascript is fun"];

let titleCaseArray = stringArray.map(function (str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
});

console.log(titleCaseArray);


// c.
// Sum of all numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function add(numbers) {
    let sum = 0;
    array = []
    for (index = 0; index < numbers.length; index++) {
        array.push(sum += numbers[index]);
    }
    return sum;

}
console.log(add(numbers))


// d.
// Return all the prime numbers in an array

let numbersof = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = numbersof.filter(function (num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false; // Multiples of 2 and 3 are not prime

    // Check for prime using 6k +/- 1 rule
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
});

console.log(primeNumbers);


// e.
// Return all the palindromes in an array

let isPalindrome = function (str) {
    return str === str.split('').reverse().join('');
};

let findPalindromes = function (arr) {
    return arr.filter(function (item) {
        return isPalindrome(item);
    });
};

let myArray = ["racecar", "hello", "level", "world", "deified"];

let palindromes = findPalindromes(myArray);
console.log(palindromes);



// f.
// Return median of two sorted arrays of the same size.

let findMedianSortedArrays = function (nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let n = merged.length;

    if (n % 2 === 0) {
        let mid1 = merged[n / 2 - 1];
        let mid2 = merged[n / 2];
        return (mid1 + mid2) / 2;
    } else {
        return merged[Math.floor(n / 2)];
    }
};

let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];
let result = findMedianSortedArrays(nums1, nums2);
console.log(result);



// g.
// Remove duplicates from an array

let removeDuplicates = function (arr) {
    return arr.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index;
    });
};

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);



// h.
// Rotate an array by k times

let rotateArray = function (arr, k) {
    k = k % arr.length;
    let rotatedPart = arr.slice(-k);
    let restPart = arr.slice(0, arr.length - k);
    return [...rotatedPart, ...restPart];
};

let originalArray = [1, 2, 3, 4, 5];
let k = 3;
let rotatedArray = rotateArray(originalArray, k);
console.log(rotatedArray);




// // 1.IIFE

// // a.
// // Odd numbers in array


(() => {
    let numbersin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let findoddnumbers = function (numbersin) {
        array = []
        for (let number of numbersin) {
            if (number % 2 !== 0) {
                array.push(number)
            }
        }
        return array
    }
    console.log(findoddnumbers(numbersin))

})()


// // b.
// // All the strings to title caps in a string array

let stringArray = ["hello world", "good morning", "javascript is fun"];

(() => {
    let titleCaseArray = stringArray.map(function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    });

    console.log(titleCaseArray);
})()


//     // c.
//     // Sum of all numbers in an array

let numbersa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    (() => {
        function add(numbers) {
            let sum = 0;
            array = []
            for (index = 0; index < numbersa.length; index++) {
                array.push(sum += numbersa[index]);
            }
            return sum;

        }
        console.log(add(numbersa))


    })()

// // d.
// // Return all the prime numbers in an array

let numbersin = [2, 3, 4, 5, 6, 7, 8, 9, 10];
(() => {
    let primeNumbers = numbersin.filter(function (num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }

        return true;
    });

    console.log(primeNumbers);
})()


    //     // e.
    //     // Return all the palindromes in an array

    (() => {
        let isPalindrome = function (str) {
            return str === str.split('').reverse().join('');
        };

        let findPalindromes = function (arr) {
            return arr.filter(function (item) {
                return isPalindrome(item);
            });
        };

        let myArray = ["racecar", "hello", "level", "world", "deified"];

        let palindromes = findPalindromes(myArray);
        console.log(palindromes);

    })()


    //     // f.
    //     // Return median of two sorted arrays of the same size.

    (() => {
        let findMedianSortedArrays = function (nums1, nums2) {
            let merged = [...nums1, ...nums2].sort((a, b) => a - b);
            let n = merged.length;

            if (n % 2 === 0) {
                let mid1 = merged[n / 2 - 1];
                let mid2 = merged[n / 2];
                return (mid1 + mid2) / 2;
            } else {
                return merged[Math.floor(n / 2)];
            }
        };

        let nums1 = [1, 2, 3];
        let nums2 = [4, 5, 6];
        let result = findMedianSortedArrays(nums1, nums2);
        console.log(result);
    })()


    //     // g.
    //     // Remove duplicates from an array

    (() => {
        let removeDuplicates = function (arr) {
            return arr.filter(function (item, index, inputArray) {
                return inputArray.indexOf(item) === index;
            });
        };

        let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
        let uniqueArray = removeDuplicates(arrayWithDuplicates);
        console.log(uniqueArray);

    })()


    //     // h.
    //     // Rotate an array by k times

    (() => {
        let rotateArray = function (arr, k) {
            k = k % arr.length;
            let rotatedPart = arr.slice(-k);
            let restPart = arr.slice(0, arr.length - k);
            return [...rotatedPart, ...restPart];
        };

        let originalArray = [1, 2, 3, 4, 5];
        let k = 3;
        let rotatedArray = rotateArray(originalArray, k);
        console.log(rotatedArray);

    })()
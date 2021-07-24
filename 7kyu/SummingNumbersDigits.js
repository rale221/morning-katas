// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.
number = -32

function sumDigits(number){
     let arr = number.toString().split('').filter((a) => !isNaN(a)).map(Number)
     console.log(arr)
     const res = arr.reduce((a, b) => a+b)
     return res
}


// Solution 2

function sumDigits(number) {
     return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
   }
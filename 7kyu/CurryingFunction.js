// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

list = [2, 3, 4]
n = [2]

function multiplyAll(list){

     return function end(n){
         let a =  list.map((e) => e*n)
         return a

}}


// Solution 1 & 2

// multiplyAll = a => x => a.map(e => e * x);

// const multiplyAll = arr => n => arr.map(x => n * x);
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

// Write a function that takes an integer as input, 
// and returns the number of bits that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
n = 1234

function countBits(n){
let base = n.toString(2).split('')
let result = base.reduce((a, b) => a + Number(b), 0)
return result
}
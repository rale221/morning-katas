// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11 

number = 34234

// function digitalRoot(number) {
//      let sum = number
//      let arr = []
//      let reducer = (a,b) => parseInt(a) + parseInt(b)
  
//      while (sum > 9) {
//         arr = sum.toString().split('')
//         sum = arr.reduce(reducer)
//      }
  
//      return sum
//   }

  // SOLUTION 2

  function digitalRoot(number){
       return (number - 1) % 9 + 1
  }
//https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
// and their sum is 15. Every other number occurs twice.

arr = [4,5,7,5,4,8]
// SOLUTION 1 4LOOP

function repeats(arr){

     return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);

   };


//    // SOLUTION 2 4LOOP

//    function repeats(arr) {
//      let i;
//      let sum = 0;
//      arr.sort((a, b) => {
//        return a - b;
//      });
//      for (i = 0; i < arr.length; i += 2) {
//        if (arr[i] !== arr[i + 1]) {
//          sum += arr[i];
//          i--;
//        }
//      }
   
//      return sum;
//    };
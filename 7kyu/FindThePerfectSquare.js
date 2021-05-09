// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect square

// SOLUTION 1

function findNextSquare(sq) {
     return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
   }


   // SOLUTION 2

   function findNextSquare(sq) {
     let number = Math.sqrt(sq);
     if(Math.round(number) === number) {
       return Math.pow(++number, 2)
     }
     return -1;
   }

   // SOLUTION 3

   function findNextSquare(sq) {
     // Return the next square if sq if a perfect square, -1 otherwise
     let root = Math.sqrt(sq);
     if (Number.isInteger(root)) {
       return Math.pow(root + 1, 2);
     } else {
       return -1;
     }
   }

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript


// Given an array of integers, 
// find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

// SOLUTION 1 ^XOR 

// function findOdd(arr){

//      let count = arr.reduce((a, b) => a ^ b )
//      return count
     
     
// }



// SOLUTION 2 SORT

// function findOdd(arr) {
//      let result, num = 0;
   
//      arr = arr.sort();
//      for ( i = 0; i < arr.length; i++) {
//        if (arr[i] === arr[i+1]) {
//          num++;
//        } else {
//          num++;
//          if (num % 2 != 0) {
//            result = arr[i];
//            break;
//          }
//        }
//      }
//      return result;
//    }


   // SOLUTION 3

//    function findOdd(arr){
//         let res = 0
//         let count = 0

//         for (i=0; i<arr.length; i++){
//              if (arr[i] === arr[i + 1]){
//                   count++
//              }
//              else {
//                   count++
//                   if( count % 2 !== 0){
//                        result = arr[i]
//                   }
//              }
//         }
//         return result
//    }

   // SOLUTION 4 Find

   function findOdd(arr) {
     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
   }
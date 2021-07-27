// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

arr = ["Keep", "Remove", "Keep", "Remove", "Keep"]

function removeEveryOther(arr){

     for (i=1; i< arr.length; i+=1){
          arr.splice(i, 1)
     }
     return arr

}

// solution 2 using filter

function removeEveryOther(arr){
     return arr.filter(function(elem, index) {
       return index % 2 === 0;
     });
   }

   
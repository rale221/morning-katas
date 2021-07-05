// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

a = [1,2,2,2,3]
b = [2]

function arrayDiff(a, b){

     for (i = 0; i < a.length; i++){
          for (j = 0; j < b.length; j++){
               if (a[i] === b[j]){
                    return true
               }        
          }
     }
     return false

}
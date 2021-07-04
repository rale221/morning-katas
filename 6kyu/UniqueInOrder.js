// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements,
// with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

iterable = 'AAAABBBCCDAABBB'

function uniqueInOrder(iterable){
     
     let res = []
     let last

     for (i = 0; i< iterable.length; i++){
          if (iterable[i] !== last) {
               res.push(last = iterable[i])
          }
     }
     return res
}


// Solution 2 and 3

// var uniqueInOrder = function (iterable)
// {
//   return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
// }

// var uniqueInOrder=function(iterable){
//      return [...iterable].filter((a, i) => a !== iterable[i-1])
//  }

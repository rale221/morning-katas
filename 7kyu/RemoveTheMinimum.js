// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// Given an array of integers, remove the smallest value. 
// Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with a lower index. 
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// Examples

// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

numbers = [1,2,3,4,5]

// SOLUTION 1

function removeSmallest(numbers) {
     let indexOfMin = numbers.indexOf(Math.min(...numbers));
     return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
   }

   // SOLUTION 2 

let removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
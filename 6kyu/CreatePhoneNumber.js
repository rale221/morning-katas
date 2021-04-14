// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

numbers = [1,2,3,4,5,6,7,8,9,0]

function createPhoneNumber(numbers){

     let area = numbers.splice(0, 3).join('')
     let middle = numbers.splice(0, 3).join('')
     let end = numbers.splice(0,4).join('')
     return '(' + area + ')' + ' ' + middle + '-' + end
}

// SOLUTION 2 SUBSTRING METHOD
// The substring() method extracts the characters from a string, 
// between two specified indices, and returns the new sub string.

function createPhoneNumber(numbers){
     numbers = numbers.join('');
     return '(' + numbers.substring(0, 3) + ') ' 
         + numbers.substring(3, 6) 
         + '-' 
         + numbers.substring(6);
   }

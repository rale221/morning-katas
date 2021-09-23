// https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

s = "yes"
function ensureQuestion(s) {
     
 let stringLenght = s.length
 console.log(stringLenght)
if (s.charAt(stringLenght -1) === '?'){
     return s
} else {
     return s + '?'
}

   }
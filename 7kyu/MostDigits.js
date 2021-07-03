// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

array = [1, 10, 44447, 1446, 1533, 2448, 24440]
// array = [31122, 71240]


// Solution 1

// function findLongest(array){
// if (array.length == 2 && array[0].length == array[1].length){
//      return array[0]
// }
// const numString = array.map((e) => e.toString()).sort((a, b) => b.length - a.length)
// const integer = parseInt(numString[0])
// return integer
// }

//Solution 2

const findLongest = (array) => {
     return array.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a)
}


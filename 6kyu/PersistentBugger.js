// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

//EXAMPLES:

//persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

//persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

//persistence(4) === 0 // because 4 is already a one-digit number

num = 339;

// function persistence(num) {
// 	arr = num
// 		.toString()
// 		.split('')
// 		// .map((n) => Number(n));

// 	let count = 0;
// 	let result;
// 	while (arr.length > 1) {
// 		 result = arr.reduce((sum, currentValue) => sum * currentValue);
// 		count++;
// 		arr = result.toString().split('');
// 	}
// 	return count

// }


function persistance(num){
	let count = 2
	arr = num.toString().split('')
	while ( arr.length >1){
		count ++
		arr = arr.map(Number).reduce((a, b) => a * b ).toString()
	}
	return count
}
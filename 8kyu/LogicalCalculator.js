// https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript

// Given an array of Boolean values and a logical operator,
// return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples

// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input

// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output

// A Boolean value (True or False).

function logicalCalc(array, op) {
	//your code here
	// primam niz boolean-a to je arrayy
	// primam operator - to je op
	// treba da vratim rezultat koga dobijem tako sto na sve elemente niza primenim ovaj operator i rez ce biti ili true ili false
	let res = array[0];

	for (i = 1; i < array.length; i++) {
		if (op === 'AND') {
			//      res = array[i] && array[i + 1];
			res = res && array[i];
		}
		if (op === 'OR') {
			console.log('elemnt', array[i] || array[i + 1]);
			//      res = array[i] || array[i + 1];
			res = res || array[i];
		}
		if (op === 'XOR') {
			// res = !(array[i] == array[i + 1]);
			res = res != array[i];
		}
	}
	if (typeof res === 'number') {
		res = 1 ? true : false;
	}
	return res;
}

// function logicalCalc(array, op) {
// 	//your code here
// 	// primam niz boolean-a to je arrayy
// 	// primam operator - to je op
// 	// treba da vratim rezultat koga dobijem tako sto na sve elemente niza primenim ovaj operator i rez ce biti ili true ili false
// 	let res= array[0];

// 	for (i = 0; i < array.length; i++) {
// 		if (op === 'AND') {
// // 			res = array[i] && array[i + 1];
//       res = res && array[i]
// 		}
// 		if (op === 'OR') {
// 			console.log('elemnt', array[i] || array[i + 1]);
// // 			res = array[i] || array[i + 1];
//       res = res || array[i]
// 		}
// 		if (op === 'XOR') {
// 			// res = !(array[i] == array[i + 1]);
// 			res = res != array[i];

// 		}
// 	}
// 	if (typeof res === 'number') {
// 		res = 1 ? true : false;
// 	}
// 	return res;
// }

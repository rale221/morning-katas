// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

// Write a function that returns a sequence (index begins with 1) of all the even characters from a string.
// If the string is smaller than two characters or longer than 100 characters,
// the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

string = 'abcdefghijklm';

// Solution 1

function evenChars(string) {
	return string.length < 2 || string.length > 100
		? 'invalid string'
		: [...string].filter((x, i) => i % 2);
}

// Solution 2

const evenChars = (string) =>
	string.length < 2 || string.length > 100
		? `invalid string`
		: [...string].filter((_, idx) => idx % 2);

// Solution 3

function evenChars(s) {
	if (s.length < 2 || s.length > 100) return 'invalid string';
	var output = [];
	for (var i = 1; i < s.length; i += 2) {
		output.push(s[i]);
	}
	return output;
}

// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

// Write a function that returns a sequence (index begins with 1) of all the even characters from a string.
// If the string is smaller than two characters or longer than 100 characters,
// the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

string = 'abcdefghijklm';

function evenChars(string) {
	let s = string.split('');
	if (s.length < 2 || s.length > 100) {
		return 'invalid string';
	} else {
		s.split('')
			.filter(function (item, pos, self) {
				return self.indexOf(item) == pos;
			})
			.join('');
	}
}

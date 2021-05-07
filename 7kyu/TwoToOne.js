// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:

s1 = 'xyaabbbccccdefww';
s2 = 'xxxxyyyyabklmopq';
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// SOLUTION 1

function longest(s1, s2) {
	let str = s1.concat(s2);
	let arr = str.split('');
	let uniq = arr.filter((e, i) => arr.indexOf(e) == i);
	let res = uniq.sort();
	return res.join('');
}

// SOLUTION 2

function longest(s1, s2) {
	return Array.from(new Set(s1 + s2))
		.sort()
		.join('');
}

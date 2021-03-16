// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function solution(str) {
	let reverse = '';
	for (let i = str.lenght - 1; i >= 0; i--) {
		reverse = reverse + str[i];
	}
	return reverse;
}

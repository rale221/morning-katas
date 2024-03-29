// https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript

//Your job at E-Corp is both boring and difficult.
// It isn't made any easier by the fact that everyone constantly wants to have a meeting with you,
// and that the meeting rooms are always taken!

// In this kata, you will be given an array.
// Each value represents a meeting room. Your job?
// Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy 'O' --> empty

// If all rooms are busy, return -1.
// If all rooms are busy, return 'None available!'.
// x = ['2', '4', '1', '8', '9'];
x = ['X', 'O', 'X'];
x1 = ['O', 'X', 'X', 'X', 'X'];
x2 = ['X', 'X', 'X', 'X', 'X'];

function meeting(x) {
	let roomNumber = x.indexOf('O');

	if (roomNumber === -1) {
		return 'None available!';
	} else {
		return roomNumber;
	}
}

// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

// Your online store likes to give out coupons for special occasions.
// Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date.
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

enteredCode = '123';
correctCode = '123';
currentDate = 'July 1, 2015';
expirationDate = 'July 2, 2015';

// SOLUTION 1

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	let current = new Date(currentDate);
	let expiration = new Date(expirationDate);
	if (enteredCode !== correctCode) {
		return false;
	} else if (current > expiration) {
		return false;
	} else {
		return true;
	}
}

// SOLUTION 2

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	return (
		enteredCode === correctCode &&
		Date.parse(expirationDate) >= Date.parse(currentDate)
	);
}

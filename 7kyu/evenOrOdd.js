// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

//https://www.codewars.com/kata/57f7b8271e3d9283300000b4

//Solution 1 with for loop
function evenOrOdd(str) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0) {
            sumEven += Number(str[i]);
        } else {
            sumOdd += Number(str[i]);
        }
    }
    if (sumEven > sumOdd) {
        return "Even is greater than Odd";
    } else if (sumOdd > sumEven) {
        return "Odd is greater than Even";
    } else {
        return "Even and Odd are the same";
    }
}

//Solution 1 different variation
function evenOrOdd(str) {
    let odd = 0;
    let even = 0;
    let numbers = str.split("");
    for (number of numbers) {
        if (number % 2 === 0) {
            even += number * 1;
        } else {
            odd += number * 1;
        }
    }
    if (odd > even) {
        return "Odd is greater than Even";
    } else if (even > odd) {
        return "Even is greater than Odd";
    } else {
        return "Even and Odd are the same";
    }
}

//Solution 2 with .filter() and .reduce()
function evenOrOdd(str) {
    let even = str
        .split("")
        .filter((e) => e % 2 === 0)
        .reduce((acc, val) => Number(acc) + Number(val));
    let odd = str
        .split("")
        .filter((o) => o % 2 !== 0)
        .reduce((acc, val) => Number(acc) + Number(val));

    if (even > odd) {
        return "Even is greater than Odd";
    } else if (odd > even) {
        return "Odd is greater than Even";
    } else {
        return "Even and Odd are the same";
    }
}
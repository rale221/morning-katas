// You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.

// Good thing you can code!

// Create change_count() to return a dollar amount of how much change you have!

// Valid types of change include:

// penny: 0.01
// nickel: 0.05
// dime: 0.10
// quarter: 0.25
// dollar: 1.00
// These amounts are already preloaded as floats into the CHANGE object for you to use!

// You should return the total in the format $x.xx.

// Examples:

// changeCount('nickel penny dime dollar') == '$1.16'
// changeCount('dollar dollar quarter dime dime') == '$2.45'
// changeCount('penny') == '$0.01'
// changeCount('dime') == '$0.10'
// Warning, some change may amount to over $10.00!

//https://www.codewars.com/kata/57e1857d333d8e0f76002169

//Solution 1 without CHANGE dictionary
function changeCount(change) {
    let arr = change.split(" ");
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "penny") total += 0.01;
        if (arr[i] == "nickel") total += 0.05;
        if (arr[i] == "dime") total += 0.1;
        if (arr[i] == "quarter") total += 0.25;
        if (arr[i] == "dollar") total += 1;
    }
    return "$" + total.toFixed(2);
}

//Solution 2 with CHANGE dictionary and for loop
function changeCount(change) {
    let arr = change.split(" ");
    let tal = 0;
    for (i = 0; i < arr.length; i++) {
        tal += CHANGE[arr[i]];
    }
    return "$" + tal.toFixed(2);
}

//Solution 3 one liner and solution3 broken down into variables
function changeCount(change) {
    return (
        "$" +
        change
            .split(" ")
            .map((x) => CHANGE[x])
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
    );

    // let makeArr = change.split(' ')

    // let numberValues = makeArr.map(element => CHANGE[element])

    // let sumVal = numberValues.reduce((acc, val)=> acc+ val,0)

    // return `$${sumVal.toFixed(2)}`
}
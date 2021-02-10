// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

//Solution 1
function filter_list(l) {
    let newArr = [];
    for (let i of l) {
        if (Number.isInteger(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}

//Solution 2 with filter
function filter_list(l) {
    return l.filter((currEl) => typeof currEl === "number");
    // return l.filter((currEl) => typeof currEl !== "string");
    // return l.filter((currEl) => currEl === parseInt(currEl));
}

//Solution 3 with reduce
function filter_list(l) {
    return l.reduce(function (acc, val) {
        if (typeof val === "number") acc.push(val);
        return acc;
    }, []);
}
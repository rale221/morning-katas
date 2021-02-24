// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// var moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
//   }




//   var moveZeros = function (arr) {
//     var filtedList = arr.filter(function (num){return num !== 0;});
//     var zeroList = arr.filter(function (num){return num === 0;});
//     return filtedList.concat(zeroList);
//   }





//   var moveZeros = function (arr) {
//     return arr
//       .filter((val) => val !== 0)
//       .concat(arr.filter((val) => val === 0));
//   }


var moveZeros = function (arr) {
    let flag = arr.length
    let z = 0
    let offset = 0
    for (i = 0; i < flag; i++) {
        if (arr[i - offset] === 0) {
            arr.splice(i - offset, 1)
            z++
            offset++
        }
    }
    for (i = 0; i < z; i++) { arr.push(0) }
    return arr
}




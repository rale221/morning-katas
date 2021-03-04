//You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and retruns the array.

//The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

function moveElementToEnd(array, toMove) {
    return (array.sort((a, b) => { return a == toMove ? 0 : -1 }))
}





function moveElementToEnd(array, toMove) {
    // Write your code here.
}

  //moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)
  //Expected Output: [4, 1, 3, 2, 2, 2, 2, 2]

  //moveElementToEnd([1, 2, 4, 5, 6], 3)
  //Expected Output: [1, 2, 4, 5, 6]

  //moveElementToEnd([1, 2, 4, 5, 3], 3)
  //Expected Output: [1, 2, 4, 5, 3]

  //moveElementToEnd([5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12], 5)
  //Expected Output: [12, 1, 2, 11, 10, 3, 4, 6, 7, 9,  8,  5, 5, 5, 5, 5, 5]
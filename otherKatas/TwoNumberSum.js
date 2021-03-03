//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
//If no two numbers sum has to be obtained by summing two different integers in the array, you can't add a single integer to itself in order to obtain the target sum.
//You can assume that there will be at most one pair of numbers summing up to the target sum.


function twoNumberSum(array, targetSum) {
    //Your code goes here
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                return [array[i], array[j]]
            }
        }
    }
    return []

}


//twoNumberSum([3,5,-4,8,11,-1,6],10)
//Expected Output : [11,-1]

//twoNumberSum([4,6],10)
//Expected Output : [4,6]

//twoNumberSum([4,6,1,-3],3)
//Expected Output : [6,-3]

//twoNumberSum([43,5,-4,8,11,1,-1,6],15)
//Expected Output : []

//twoNumberSum([15],15)
//Expected Output : []
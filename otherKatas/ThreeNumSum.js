//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
//If no three numbers sum up to the target sum, the function should return an empty array.

function threeNumSum(array, targetSum) {
    //Your code goes here
}

//threeNumSum([12,3,1,2,-6,5,-8,6],0) 
//Expected Output :
//[ 
//	[ -8, 2, 6 ], 
//	[ -8, 3, 5 ], 
//	[ -6, 1, 5 ] 
//]

//threeNumSum([1,2,3],7)
//Expected Output :
//[]

//threeNumSum([12,3,1,2,-6,5,0,-8,-1,6],0)
//[
// [ -8, 2, 6 ],
// [ -8, 3, 5 ],
// [ -6, 0, 6 ],
// [ -6, 1, 5 ],
// [ -1, 0, 1 ]
//]

//threeNumSum([1,2,3,4,5,6,7,8,9,15],29)
//Expected Output :
//[ 
// [ 5, 9, 15 ],
// [ 6, 8, 15 ]
//]

//threeNumSum([1,2,3,4,5,6,7,8,9,15],5)
//Expected Output :
//[]
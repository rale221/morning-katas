// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
// that checks whether the two arrays have the "same" elements, 
// with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, 
// regardless of the order.

// Examples

// Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. 
// It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

// Invalid arrays

// If, for example, we change the first number to something else, 
// comp may not return true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

function compare(a, b){
     let arr1 = a.map((e) => e*e)

     let sort1 = arr1.sort()
     let sort2 = b.sort()
     console.log(sort1)
     console.log(sort2)

     if ( sort1 === sort2){
          return true
     }
     else {
          return false
     }
     

}
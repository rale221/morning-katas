// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between including them too and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples

// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

a = 2
b = 7

function GetSum( a,b ){
     
 if (a>b) {
   return ((a -b) + 1)*(b+a) / 2
 } else if (a<b) {
  return ((b -a) + 1)*(a+b) / 2
 }
 else {
   return a
 }
  
  
  
   
}

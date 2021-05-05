// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.


//SOLUTION 1

function addBinary(a, b){
     return (a+b).toString(2)
}


//SOLUTION 2

function addBinary(a,b) {
     var c = a + b;
     var res = '';
     while (c >= 1) {
       var res = c % 2 + res;
       c = Math.floor(c / 2);
     }
     return res;
   }
// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// The rgb function is incomplete. 
// Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
// Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

//Solution 1

function rgb(r, g, b){
     return toHex(r)+toHex(g)+toHex(b);
   }
   
   function toHex(d) {
       if(d < 0 ) {return "00";}
       if(d > 255 ) {return "FF";}
       return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
   }

   // Solution 2

   function rgb(r, g, b){
     return [r,g,b].map(function(x) {
       return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
     }).join('').toUpperCase();
   }
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.

// Example:

// 348597 => [7,9,5,8,4,3]
    n = 348597 
function digitize(n) {
     let array = n.toString().split('')
     let rev = array.reverse()
     console.log(rev)
     let final = []
     for (i=0; i<rev.length; i++){
       final.push(parseInt(rev[i]))
       
     }
     return final
     
     

   }

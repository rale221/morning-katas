n = 12

function addTwoDigits(n) {
     let digits = n.toString().split('').map((e) => parseInt(e))
     let sum = digits.reduce((a, b) => a+b)
     return sum
     
 
 }
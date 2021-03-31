// https://www.codewars.com/kata/55d24f55d7dd296eb9000030
let niz = [11,25,3,24,5,63]

function suma (niz, broj) {
     let sum = 0
     // Code here
     niz.map((e, index) =>  {
          if(index < broj) {
               console.log(`element je ${e} a njegov indeks je ${index}`)
               sum += e
          }
     })

     return sum
   }
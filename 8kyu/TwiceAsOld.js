// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

dadYearsOld = 36
sonYearsOld = 7

function twiceAsOld(dadYearsOld, sonYearsOld) {

     if ( (dadYearsOld / sonYearsOld) > 2 ){
          return dadYearsOld - (sonYearsOld *2)
     } else {
          return (sonYearsOld *2) - dadYearsOld
     }
     

   }
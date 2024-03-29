// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; 
// month 6 (June), is part of the second quarter; 
// and month 11 (November), is part of the fourth quarter.

month = 4

function quaterOf(month){
     if ( month < 4){
          return 'First Quater'
     } if ( month > 3 && month < 7){
          return 'Secon Quater'
     } if ( month > 6 && month < 10){
          return 'Tird Quater'
     } else {
          return 'Fourth Quater'
     }
}


// solution using math.cell

const quarterOf = m => Math.ceil(m/3);
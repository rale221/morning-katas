// https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript


// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes

// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

letters = "abc"
coords = [1,1]

// solution 1

function lastSurvivor(letters, coords) {
     letters = letters.split('')
     for (i=0; i<coords.length; i++){
          letters.splice(coords[i], 1)
     }
     return letters.join('')
     
}

// solution 2

function lastSurvivor(letters, coords) {
     let result = letters.split('');
     for (let i of coords) {
         result.splice(i, 1);
     }
     
     return result.join('');
   }
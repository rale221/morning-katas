// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

str = 'abajHSgabAA'
// Solution 1 set method

function isIsogram(str){
     const lowerCase = str.toLowerCase().split('')
     const s = new Set(lowerCase)
     if (lowerCase.length !== s.size){
          return false
     } else {
          return true
     }
}


// Solution 2 4loop
function isIsogram(str){
     var i, j;
     str = str.toLowerCase();
     for(i = 0; i < str.length; ++i)
       for(j = i + 1; j < str.length; ++j)
         if(str[i] === str[j])
           return false;
     return true;
   }

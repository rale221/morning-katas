// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

string = 'aba'

// Solution 1

function count(string){
     let c = {}
     string.split('').forEach(e => {
          c[e] ? c[e]++ : c[s] = 1
     });
     return c

}



//Solution 2

function count (string) {  
     var obj = {};
     string = string.split('').forEach(function(x){
       obj[x] = obj[x] ? obj[x] + 1 : 1;
     });
     return obj;
   }
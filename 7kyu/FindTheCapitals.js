// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Write a function that takes a single string (word) as argument. 
// The function must return an ordered list containing the indexes of all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Solution 1

// word = 'CodEWaRs'
// function capitals(word){

//      let array = word.split('')//.filter((e) => e.toLowerCase() !== e )
//      let index = []
//      for (i=0; i < array.length; i++){
//           if ( array[i].toLowerCase()!== array[i]){
//                index.push(array.indexOf(array[i]))
//           }
//      }
     
              
//      return index

// }


//Solution 2

function capitals(word){
     let index = [];
     for(var i = 0; i < word.length; i++) {
       if(word[i].toUpperCase() == word[i]) index.push(i);
     }
     return index;
   }

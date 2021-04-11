// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

str = 'abracadabra'

// COUNT how many vowels is in the string
// RETURN number of the vowels in the string

function getCount(str){
     let vowels = ['a', 'A', 'e', 'E', 'i' , 'I', 'o', 'O', 'u', 'U']
     let string = str.split('')
     let vowelsCount = string.filter((e)=>{
          if (vowels.includes(e) == true){
               return string.slice(e)
          }
          
     } )
     return vowelsCount.length
     
}



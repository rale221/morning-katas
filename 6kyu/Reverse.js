// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"

 // string = "This is a test"
 string = "Welcome"

function spinWords(string){
     const arrayOfWords = string.split(' ')
     console.log(arrayOfWords)
     if (arrayOfWords.length > 1) {
     const reveresedWords = arrayOfWords.map((e) =>{
          if (e.length > 5){
          e.split('').reverse().join('')
     }})} else {
          const reveresedWords = string.split(' ')
     }

     return reveresedWords 
    
}
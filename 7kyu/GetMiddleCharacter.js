// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, 
// return the middle character. 
// If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// s = 'test'
s = 'testing'
// s = 'middle'
// s = 'A'

// If the word's length is odd -> Return the middle character NEPARNI
// If the word's length is even -> Return the middle 2 characters PARNI

function getMiddle(s){
     word = s.split('')
     if (word.length % 2 === 0){
          i = word.length / 2
          return word[i -1] + word[i]
     } else{
          i = (word.length -1) / 2
          return word[i]
     }

}
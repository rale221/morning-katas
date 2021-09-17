// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

// Write a function that checks if a given string (case insensitive) is a palindrome.
x = 'Palidrome'

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

// solution 2

function isPalindrome(x) {
     x = x.toLowerCase()
     let a = 0
     let b = x.length
     while (a < b) {
       if (x[a] != x[b-1])
         return false
       a++
       b--
     }
     return true
   }
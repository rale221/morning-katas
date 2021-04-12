// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

s ='bitcoin take over the world maybe who knows perhaps'
// FIND shortest word in the string
// RETURN length of the shortest word


function findShort(s){

     // SORT Metoda
     // Kod ove metode, uz pomoc sort-a mozemo da napravimo niz, 
     // koji ce da poredja reci od njamanje ka najvecoj i obnuto
     // i kada znamo niz, onda uz pomoc indexa mozemo da nadjemo i najmanju rec

     // let string = s.split(' ')
     // let word = string.sort((a, b)=> a.length - b.length)
     // return word[0].length
     

// --------------------------------------------------
     // MAP method
     // Kod ove metode, uz pomoc map-a smo prosli kroz array
     // dobili smo duzinu svake reci, i zatim uz pomoc
     // Math min ili max dobili najduzu ili u nasem slucaju najkracu rec
     let string = s.split(' ')
     let lenghtOfEachWord = string.map(item => item.length)
     let word = Math.min(...lenghtOfEachWord)
     return word
     


     
     
     

}
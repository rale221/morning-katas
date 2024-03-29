//tps://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

nbPetals = 7
let phrase = {    
     0: "not at all",
     1: "I love you",
     2: "a little",
     3: "a lot",
     4: "passionately",
     5: "madly"
   }
function howMuchILoveYou(nbPetals) {
     return phrase[nbPetals%6]
   }


   // solution 2

  let phrases = [ 'I love you',
     'a little',
     'a lot',
     'passionately',
     'madly',
     'not at all',
 ]
 
 function howMuchILoveYou(n) {
      return phrases[(n - 1) % phrases.length] 
 }




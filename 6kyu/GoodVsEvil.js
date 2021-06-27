// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript



// Middle Earth is about to go to war. 
// The forces of good will have many battles with the forces of evil. Different races will certainly be involved. 
// Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:

// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:

// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

good = '3 5 2 3 8 4'
evil = '6 2 5 1 2 4 1'
function goodVsEvil(good, evil){

 const powerOfGood = [1, 2, 3, 3, 4, 10]
 const powerOfEvil = [1, 2, 2, 2, 3, 5, 10]
     const arrGood = good.split(' ').map(e=>Number(e)).map((e, i) =>{
          return e * powerOfGood[i]
     })
     const arrEvil = evil.split(' ').map(e=>Number(e)).map((e, i) =>{
          return e * powerOfEvil[i]
     })
     
     const sumOfGood = arrGood.reduce((a, b) => a + b)
     const sumOfEvil = arrEvil.reduce((a, b) => a + b)

     if (sumOfGood > sumOfEvil){
          return "Battle Result: Good triumphs over Evil"
     } else if (sumOfGood < sumOfEvil){
          return "Battle Result: Evil eradicates all trace of Good"
     } else {
          return "Battle Result: No victor on this battle field"
     }
}


// // Solution 2 OBJECT

// var app = {}

// //Added arrays so that if / when then Ents come to battle
// app.good = [{ Name : "Hobbits", Strength : 1},
//             { Name : "Men", Strength : 2 },
//             { Name : "Elves", Strength : 3},
//             { Name : "Dwarves", Strength : 3},
//             { Name : "Eagles", Strength : 4},
//             { Name : "Wizards", Strength : 10}]
            
// app.evil = [{ Name : "Orcs", Strength : 1},
//            { Name : "Men", Strength : 2 },
//            { Name : "Wargs", Strength : 2},
//            { Name : "Goblins", Strength : 2},
//            { Name : "Uruk Hai", Strength : 3},
//            { Name : "Trolls", Strength : 5},
//            { Name : "Wizards", Strength : 10} ]
           
// app.battleResults = [{ Won : "Evil", Message : "Battle Result: Evil eradicates all trace of Good"},
//                      { Won : "Good", Message : "Battle Result: Good triumphs over Evil"},
//                      { Won : "Tie", Message : "Battle Result: No victor on this battle field"}];

// app.getBattleResultMessage = function(s) { return this.battleResults[this.battleResults.map(function(e) { return e.Won; }).indexOf(s)].Message; }

// function goodVsEvil(good, evil){
//   var goodArmy = good.split(' ');
//   var evilArmy = evil.split(' ');
//   var goodRoll = 0;
//   var evilRoll = 0;
  
//   for(var i = 0; i < goodArmy.length; i++){
//     goodRoll += app.good[i].Strength * goodArmy[i];    
//   }
//   for(var i = 0; i < evilArmy.length; i++){
//     evilRoll += app.evil[i].Strength * evilArmy[i];
//   }
  
//   if(evilRoll > goodRoll){
//     return app.getBattleResultMessage('Evil');
//   }else if(evilRoll < goodRoll){
//     return app.getBattleResultMessage('Good');
//   }else{
//     return app.getBattleResultMessage('Tie');
//   }
// }
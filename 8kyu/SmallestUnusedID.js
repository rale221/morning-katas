// https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript


// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

// function nextId(ids){
//     //this will be awesome! - NO NO NOPE
//     for (i=0; i<=ids.length; i++) {     
//       if (!ids.some((element => element === i))) 
//         {
//         return i
//         }
//      }
//   }

//   function nextId(ids){
//     let filteredArr = ids.filter(elm => {
//       return ids.indexOf(elm) === ids.lastIndexOf(elm)
//     })
//     let uniqueArr = ids.filter(elm => {
//       return ids.indexOf(elm) != ids.lastIndexOf(elm)
//     })
//     for (id of uniqueArr) {
//       if (filteredArr.includes(id)) {

//       } else {
//         filteredArr.push(id)
//       }
//     }
//     let sortedArr = filteredArr.sort((a, b) => a - b)
//   //Haha maybe include 
//     for (let i = 0; i <= sortedArr.length; i++) {
//       if (sortedArr[i] != i) {
//         return i
//       }
//     }
//   }







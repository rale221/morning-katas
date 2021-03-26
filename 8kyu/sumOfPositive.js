// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

//Solution

arr = [1,-2, 3, 4, 5]
function positiveSum(arr) {

    // filter positive numbers
    // return total

    // let total = 0

    // for (let i = 0; i < arr.length; i++) {
    //     total += arr[i] * (arr[i] > 0)

        //   if(arr[i]> 0){
        //     total += arr[i]
        //   }

    //     arr[i] > 0 ? total += arr[i] : total

    //     total += (arr[i] > 0 ? arr[i] : 0)
    // }
    // return total

    // return arr.reduce((total, eachElement) => {
    //   return total + ((eachElement >0)? eachElement : 0)
    // },0 )
   
//     let total = 0
//     for (let i=0; i < arr.length; i++){
//         if (arr[i] > 0) {
//             total +=arr[i]
//         } 
     
        
//     }
//         return total

        let positive = arr.filter(function(number){
            return number >0
        })
 }

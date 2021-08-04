// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

// Solution 1

function nextBigger(n){
     console.log(n);
     var chars = n.toString().split('');
     var i = chars.length-1;
     while(i > 0) {
       if (chars[i]>chars[i-1]) break;
       i--;
     }
     if (i == 0) return -1;
     var suf = chars.splice(i).sort();
     var t = chars[chars.length-1];
     for (i = 0; i < suf.length; ++i) {
       if (suf[i] > t) break;
     }
     chars[chars.length-1] = suf[i]
     suf[i] = t;
     var res = chars.concat(suf);
     var num = parseInt(res.join(''));
     console.log("->" +num);
     return num;
   }

   // Sulution 2

   const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){
  
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}


// Solution 3

function getIndex(arr) {
     let leftMostIndexOfNumsToChange = 0;
     
     // finds index starting from right most digit then comparing to digit to the left.
     // once we find a left digit that is smaller than the right digit, break loop and return the index of left digit
     for (let i = arr.length - 1; i >= 0; i--) {
       if (arr[i] > arr[i - 1]) {
         leftMostIndexOfNumsToChange = i - 1;
         break;
       };
     }
     
     return leftMostIndexOfNumsToChange;
   }
   
  //  function getClosestGreaterNum(numToCompareTo, arr) {
  //    let greaterNum = 10;
  //    let indexOfClosestGreaterNum = -1;
     
  //    arr.forEach((digit, i) => {
  //      if (digit > numToCompareTo && digit < greaterNum) {
  //        greaterNum = digit;
  //        indexOfClosestGreaterNum = i;
  //      };
  //    });
     
  //    return indexOfClosestGreaterNum;
  //  }
   
   function nextBigger(n){
     // make number an array of single digits
     const arr = n.toString().split('');
     // get index of left most digit that will need to be shuffled around
     const leftMostIndex = getIndex(arr);
     // store left most number for later comparison
     const numToCompareTo = arr[leftMostIndex];
     // create new array by taking out digits that will shift from old array (we'll combine these later) and sort the digits from smallest to biggest
     let availableDigitsToShift = arr.splice(leftMostIndex, arr.length).sort();
     // get the index of the array digit that is the closest greater number compared to the smallest number
     const indexOfClosestGreaterNum = getClosestGreaterNum(numToCompareTo, availableDigitsToShift);
     // move closest greater num digit to front and shift the rest right
     availableDigitsToShift.splice(0, 0, availableDigitsToShift.splice(indexOfClosestGreaterNum, 1)[0]);
     // combine both arrays, turn to string and then to number
     const final = parseInt(arr.concat(availableDigitsToShift).join(''));
     
     return (final > n ? final : -1);
   }
   
   // overview
   // 10755
   // 15057
   // find out what numbers are going to need to be shuffled by looking at last number (5) and compare to next digit to the left. 5 is <= to 5 so move left again. 5 is <= 7 so move left again. 7 is not >= 0 so we know 0755 will all need to shift around.
   // the numbers shifting/sorting is first based on the 0. we find the next largest available number that is greater than 0. that's 5. next we place the remaining numbers from smallest to largest after the 5 (057).

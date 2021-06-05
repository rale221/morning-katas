// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

// Examples

// Valid inputs:

// 1.2.3.4
//str ='123.45.67.89'
// Invalid inputs:

// 1.2.3
str = '12.255.56.1'
//str ='12.34.56'
// 123.456.78.90
// str ='\n1.2.3.4'
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

function isValidIP(str){
     let arr = str.split('')
     let dotCheck = arr.map((e) => e === '.').filter(Boolean).length
     if (dotCheck !== 3){
          return false
     }
    
     let lengthCheck = str.split('.')
     if (lengthCheck.length !== 4){
          return false
     }

     let numberCheck = lengthCheck.map((e) => parseInt(e) >= 0 && parseInt(e) < 256).filter(Boolean).length
     console.log(numberCheck)
     if (numberCheck !== 4){
          return false
     }

     let zeroCheck = str.split('.').map((e) => e.length > 1 && e.startsWith(0) || e.startsWith(' ') || e.endsWith(' ')).filter(Boolean).length
     console.log(zeroCheck)
     if (zeroCheck !==0){
          return false
     }
     
     let numberCheckTwo = lengthCheck.map((e) => isNaN(parseInt(e))).filter(Boolean).length
     if (numberCheckTwo !==0){
          return false
     } else{
          return true
     }
}

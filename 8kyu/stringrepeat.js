// Write a function called repeat_str which repeats the given string src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// https://www.codewars.com/kata/56200d610758762fb0000002/train/javascript


// Option: 1
unction repeatStr (n, s) {
    let str = '';
     for(i=0; i <n ; i++){
     str += s
     }
    return str;
    return s.repeat(n)
    
  }

// Option: 2
const repeatStr = (n, s) => s.repeat(n)
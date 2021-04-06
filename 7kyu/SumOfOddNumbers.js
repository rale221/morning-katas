//  https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript


n = 10

function rowSumOddNumbers(n){
     let start = n*(n-1) + 1
     let row = [start]
     let sum = 0
     for (i = 0; i < n - 1; i ++) {
          row.push(row[i] +2)
     }
     for (i=0; i< row.length; i++){
          sum += row[i]
     }
     return sum

}
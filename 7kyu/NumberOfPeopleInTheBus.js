// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

// There is a bus moving in the city, 
// and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). 
// Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
// Even though it is the last bus stop, 
// the bus is not empty and some people are still in the bus, 
// and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
// So the return integer can't be negative.

// The second value in the first integer array is 0, 
// since the bus is empty in the first bus stop.

// busStops = [[10,0],[3,5],[5,8]]
busStops = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]

 function number(busStops){

// Number in the array is how many ppl walked in the buss FIRST NUMBER
// SECOND NUMBER how many ppl get out from the bus
// EACH TWO NUMBERS are one bus stop
// RETURN how many ppl are still in the bus after last stop
let sum =0
for (i =0; i < busStops.length; i++){
     sum += busStops[i].reduce((a, b) => a - b)
}
return sum

     
   }
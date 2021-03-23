// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

//Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, 
//he sometimes has to face the problem of not enough space left on the bus! 
//He wants you to write a simple program telling him if he will be able to fit all the passengers.
cap = 10
on = 5
wait = 3

function enough(cap, on, wait) {
 
     //Buss can hold CAP passengers, if ON number of people is in the buss
     // CAP - ON is how many seats is avalible in the buss
     // WAIT is number of people wanting to enter the bus
     return Math.max(wait + on - cap, 0)
     
   }
   


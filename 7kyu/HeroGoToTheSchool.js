// https://www.codewars.com/kata/58b63cb2b7d86adb650000b7/train/javascript

// Hero wants to go to his school by bus, and he has only 2$, but he wants to save as much as he can out of them.
// But he also can't be late to school, so he decided to play a game.
// Given the buses he can wait without being late, you should tell him which to take.

// Notes:

// Not all buses are going to Hero's school.
// There are two kinds of buses: "blue" -> which costs 2$, "red" -> which costs 1$ (cheaper, right?)
// Hero MUST take one of those buses, even if he will pay 2$.

// Hero should take the first bus that goes to his school and costs less than others, 
// i.e. if he can take a red bus, he will take the first one, if he can't, he should take the first blue one.

// Example

// For busesColors = ["red","red","blue"], goingToSchool = [true, true, true], the result should be 0.

// Because the 0th bus is red and goes to his school.

// For busesColors = ["red","red","red","blue"], goingToSchool = [false, false, false, true], the result should be 3.

// Because only the 3rd bus goes to his school.
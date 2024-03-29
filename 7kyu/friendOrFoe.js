// `Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Anna", "Angel", "Brito", "Lisa", "Val", "Niko"],
// Ex Output = ["Anna", "Lisa", "Niko"]`;

// https://www.codewars.com/kata/55b42574ff091733d900002f

//solution 1 with for loop
function friend(friends) {
    let chingoo = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            chingoo.push(friends[i]);
        }
    }
    return chingoo;
}

//solution 2 with filter
function friend(friends) {
    return friends.filter((eachName) => eachName.length === 4);
}
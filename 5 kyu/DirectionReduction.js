//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

// Once upon a time, on a way through the old wild mountainous west,…

// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.

// The directions given to the man are, for example, the following (depending on the language):


function dirReduc(arr) {
    let testArr = arr.map(direct => direct.toUpperCase());
    remover(testArr);
    remover(testArr);
    return testArr;
}
function remover(arr2) {
    for (i = 0; i < arr2.length - 1; i++) {
        if (arr2[i] == "NORTH" && arr2[i + 1] == "SOUTH") {
            arr2.splice(i, 2);
        } else if (arr2[i] == "SOUTH" && arr2[i + 1] == "NORTH") {
            arr2.splice(i, 2);
        } else if (arr2[i] == "EAST" && arr2[i + 1] == "WEST") {
            arr2.splice(i, 2);
        } else if (arr2[i] == "WEST" && arr2[i + 1] == "EAST") {
            arr2.splice(i, 2);
        }
    } return arr2;
}
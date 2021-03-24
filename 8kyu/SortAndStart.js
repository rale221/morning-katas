// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
s = ['fist', 'second', 'and', 'four']

function twoSort(s){
     let sortirano = s.sort()
     return sortirano[0].split('').join('*')

}

// Ovde smo prvo koristili metodu sort, koja sortira po Alphabetu.
// Zatim smo prvu rec iz Array splitovali
// I onda pomocu join spojili i dodali ***
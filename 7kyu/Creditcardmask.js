// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript


// Examples

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"


cc = '123457326321832187'

function maskify(cc){
let arr = cc.split('')
for (i = 0; i< arr.length - 4; i++){
     arr[i] = '#'
}
return arr.join('')

}
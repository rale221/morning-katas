//You will be given a number and you will need to return it as a string in Expanded Form. For example:

//expandedForm(12); // Should return '10 + 2'
//expandedForm(42); // Should return '40 + 2'
//expandedForm(70304); // Should return '70000 + 300 + 4'

// function expandedForm(num) {
//   return num.toString()
//     .split("")
//   .reverse()
//   .map((x, i)=> x > 0 ? (x+ '0'.repeat(i)) : null)
//   .filter(x => x)
//   .reverse()
//   .join(" + ")

// }

function expandedForm(num) {
    return num.toString().split('').reverse().map((x, i) => x * (10 ** i))
        .filter(x => x != 0).reverse().join(' + ')
}
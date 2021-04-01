// https://www.codewars.com/kata/59564f3bcc15b5591a00004a

const words = ['jedan', 'dva', 'tri', 'kuca', 'mama', 'tata'];

function filterEvenLengthWords(words) {
	// your code here

	let parni = words.filter((e) => e.length % 2 === 0);
	return parni;

	// return words.filter((e) => e.length % 2 === 0)
}

// const filterEvenLengthWords2 = (words) => words.filter((e) => e.length %2 === 0)

// arrow
// (param1, param2) => {
//         ...filterEvenLengthWords..
//         puno linija koda
//         return povratnaVrednost
//    }

//    (param1, oaram2) => return povratnaVrednost  ---- samo 1 linija koda  i odmah je pisemo, bez return

// (param) => {
//      ...puno linija koda
//      return povratnaVrednost
// }

// isto sto i ovo:
// param => {...filterEvenLengthWords.apply.call.}

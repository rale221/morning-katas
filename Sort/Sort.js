niz = [
	'take',
	'over',
	'the',
	'world',
	'bitcoin',
	'maybe',
	'who',
	'knows',
	'perhaps',
];

broj = [2, 3, 5, 6, 7, 8];

// function twoSortDiscending(niz) {
// 	// return niz.sort((a, b) => a - b); // niz.sort() -rastuce
// 	// niz.sort((a,b)=> b-a )// opdajauce)

// 	niz.sort((a, b) => {
// 		if (a > b) {
// 			return -1;
// 		}
// 		if (a < b) {
// 			return 1;
// 		}

// 		// names must be equal
// 		return 0;
// 	});
// 	return niz;
// }

function twoSortAcrnding(niz) {
	// return niz.sort((a, b) => a - b); // niz.sort() -rastuce
	// niz.sort((a,b)=> b-a )// opdajauce)

	niz.sort((a, b) => {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}

		// names must be equal
		return 0;
	});
	console.log('niz je', niz);
	let prvi = niz[0]; // let prvi= "bitcoin" - posmatram ga kao niz tip
	let izmenjeniString = '';
	for (i = 0; i < prvi.length; i++) {
		izmenjeniString += prvi[i] + '***'; // izmenjeniString = izmenjeniString + prvi[i] + '***';
	}
	return izmenjeniString;
}

// ako a-b < 0 onda je redosled a,b
// ako je a-b > 0 onda reodled b,a
// ako a-b=0, onda su ista slova

// .. fja kojja je unutar sort se naziva compare fja
// i uu zavisnosti sta ta fja vraca. sort tako sortira

// a-b  < 0 compare vraca -1
// a-b > 0 compare vraca 1
// ako a-b = 0  onda su jednaki

/// PRISTUPANJE OBJEKTIMA
// objekat.imePropertija
// ili objekat["imePropertija"]
// const objekat = {a:1, b:2}
// objekat.a
// objekat["a"]

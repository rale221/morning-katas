niz = [1, 2, 3, 4];

function mnozenje(niz) {
	const aaaa = niz.reduce((a, b) => {
		// console.log(accumulator, currentValue, currentIndex, array);
		return a * b;
	});
	return aaaa;
}

const mnozenje2 = (niz) => {
	const aaaa = niz.reduce((a, b) => {
		// console.log(accumulator, currentValue, currentIndex, array);

		return a * b;
	});
	return aaaa;
};

module.exports = (arr) => {
	let noSwap;
	for (let i = arr.length - 1; i > 0; i--) {
		noSwap = true;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				// Swap
				[ arr[j + 1], arr[j] ] = [ arr[j], arr[j + 1] ];
				noSwap = false;
			}
    }
    // If last check is no swap
    // Don't need to check the remaining order
    // Because it has been already sorted
		if (noSwap) break;
	}
	return arr;
};

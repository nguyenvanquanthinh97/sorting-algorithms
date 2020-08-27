/**
 * This function will choose the first element as a pivot.
 * All the elements which are smaller than pivot will be placed on the left side of pivot,
 * and vice versa for the larger
 * @function pivot
 * @param {Array} arr - input array
 * @param {Number} start - startIdx
 * @param {Number} end - endIdx
 * @returns pivotIdx
 */
const pivot = (arr, start = 0, end = arr.length) => {
	let pivotIdx = start;

	for (let i = start + 1; i < end; i++) {
		if (arr[start] > arr[i]) {
			++pivotIdx;
			[ arr[pivotIdx], arr[i] ] = [ arr[i], arr[pivotIdx] ];
		}
	}

	if (pivotIdx !== start) {
		// Swap
		[ arr[start], arr[pivotIdx] ] = [ arr[pivotIdx], arr[start] ];
	}
	return pivotIdx;
};

const sort = (arr, start = 0, end = arr.length) => {
	if (end - start < 1) {
		return arr;
	}
	const pivotIdx = pivot(arr, start, end);
	sort(arr, start, pivotIdx);
	sort(arr, pivotIdx + 1, end);
};

module.exports = {
	pivot,
	sort
};

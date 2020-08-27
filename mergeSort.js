/**
 * This function take in 2 sorted array and return an combined sorted array
 * @function merge2Arrays
 * @param {Array} arr1 - sorted array1
 * @param {Array} arr2 - sorted array2
 * @returns {Array}
 */
const merge2Arrays = (arr1, arr2) => {
	const result = [];
	let idx1 = 0;
	let idx2 = 0;
	while (idx1 < arr1.length && idx2 < arr2.length) {
		if (arr1[idx1] < arr2[idx2]) {
			result.push(arr1[idx1]);
			++idx1;
		} else {
			result.push(arr2[idx2]);
			++idx2;
		}
	}

	if (idx1 < arr1.length) {
		result.push(...arr1.slice(idx1));
	}

	if (idx2 < arr2.length) {
		result.push(...arr2.slice(idx2));
	}

	return result;
};

const mergeSort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}
	const pivot = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, pivot));
	const right = mergeSort(arr.slice(pivot));
	return merge2Arrays(left, right);
};

module.exports = {
	merge2Arrays,
	sort: mergeSort
};

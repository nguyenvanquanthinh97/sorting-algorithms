/**
 * We use divide and conquer algorithms to find a number in sorted array
 * @function search 
 * @param {Array} sortedArray - input a sorted array
 * @param {Number} findNumber - number need to find Idx
 * @returns {Number} index return
 */
const binarySearch = (sortedArray, findNumber) => {
	let minIdx = 0;
	let maxIdx = sortedArray.length - 1;

	while (minIdx <= maxIdx) {
		const midIdx = Math.floor((minIdx + maxIdx) / 2);

		if (sortedArray[midIdx] > findNumber) {
			maxIdx = midIdx - 1;
		} else if (sortedArray[midIdx] < findNumber) {
			minIdx = midIdx + 1;
		} else {
			return midIdx;
		}
	}
	return -1;
};

module.exports = {
	binarySearch
};

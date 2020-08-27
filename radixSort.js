const getDigit = (number, place) => {
	return Math.floor(Math.abs(number) / 10 ** place) % 10;
};

const digitCount = (digit) => {
	// return String(Math.abs(digit)).length;

	if (digit === 0) return 1;
	return Math.floor(Math.log10(Math.abs(digit))) + 1;
};

const mostDigits = (nums) => {
	const max = Math.max(...nums);
	const min = Math.min(...nums);

	return Math.max(digitCount(max), digitCount(min));
};

const sort = (nums) => {
	for (let k = 0; k < mostDigits(nums); k++) {
		let digitBuckets = Array.from({ length: 10 }, (el) => (el = []));
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
};

/**
 * This sort function has been updated to be able to sort both negative and positive number
 * @function radixSort
 * @param {Array} nums - input arrays
 */
const radixSort = (nums) => {
	let negativeNums = nums.filter((num) => num < 0);
	let positiveNums = nums.filter((num) => num >= 0);

	negativeNums = sort(negativeNums);
	positiveNums = sort(positiveNums);

	return [ ...negativeNums.reverse(), ...positiveNums ];
};

module.exports = radixSort;

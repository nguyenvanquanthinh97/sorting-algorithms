/**
 * @function countUniqueValue
 * @param {Array} arr - Input Array 
 */
const countUniqueValue = (arr) => {
	if (arr.length === 0) {
		return 0;
	}
	if (arr.length === 1) {
		return 1;
	}

	let starter = 0;
	let checker = starter + 1;

	const result = [ arr[starter] ];

	while (checker < arr.length) {
		if (arr[starter] !== arr[checker]) {
			result.push(arr[checker]);
			starter = checker;
		}
		checker++;
	}
	console.log(result);
	return result.length;
};

module.exports = {
	countUniqueValue
};

/**
 * @function countUniqueValue
 * @param {Array} arr - Input Array 
 */
const countUniqueValue = (arr) => {
	// This solution only can solve sorted Array

	// if (arr.length === 0) {
	// 	return 0;
	// }
	// if (arr.length === 1) {
	// 	return 1;
	// }

	// let starter = 0;
	// let checker = starter + 1;

	// const result = [ arr[starter] ];

	// while (checker < arr.length) {
	// 	if (arr[starter] !== arr[checker]) {
	// 		result.push(arr[checker]);
	// 		starter = checker;
	// 	}
	// 	checker++;
	// }
	// console.log(result);
	// return result.length;

	// -----------------------------
	// My solution, can solve both sorted or unsorted array
	const uniqueArray = [ ...new Set(arr) ];
	console.log(uniqueArray);
	return uniqueArray.length;
};

module.exports = {
	countUniqueValue
};

const maxSubarraySum = (arr, num) => {
	let maxSum = 0;

	// check if arr.length is < num
	if (arr.length <= num) {
		return arr.reduce((total, item) => total + item, 0);
	}

	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	let tmpSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tmpSum = tmpSum - arr[i - num] + arr[i];
		maxSum = Math.max(tmpSum, maxSum);
	}
	return maxSum;
};

module.exports = {
	maxSubarraySum
};

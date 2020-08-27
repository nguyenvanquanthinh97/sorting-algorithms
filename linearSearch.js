const searchNumber = (arr, number) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === number) return i;
	}
	return -1;
};

const searchSubstring = (str1, str2) => {
	const longString = str1.length >= str2.length ? str1 : str2;
	const shortString = longString === str1 ? str2 : str1;

	let count = 0;
	for (let i = 0; i < longString.length; i++) {
		if (longString[i] === shortString[0]) {
			++count;
			for (let j = 0; j < shortString.length; j++) {
				if (longString[i + j] !== shortString[j]) {
					--count;
					break;
				}
			}
		}
	}

	return count;
};

module.exports = {
	searchNumber,
	searchSubstring
};

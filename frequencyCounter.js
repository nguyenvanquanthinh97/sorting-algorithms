/**
 * Check to see if str2 is an anagram of str1 or not
 * @param {String} str1 - Target String
 * @param {String} str2 - Check if this string is anagram of str1
 * @return {Boolean}
 */
module.exports = {
	anagram: (str1, str2) => {
		const freq1 = {};
		const freq2 = {};

		for (let letter of str1) {
			freq1[letter] = ++freq1[letter] || 1;
		}

		for (let letter of str2) {
			freq2[letter] = ++freq2[letter] || 1;
		}

		for (let key in freq1) {
			if (!(key in freq2)) {
				return false;
			}
			if (freq1[key] !== freq2[key]) {
				return false;
			}
		}
		return true;
	}
};

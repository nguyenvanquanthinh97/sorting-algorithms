/**
 * This function will return a hash number from your input key
 * @function hash
 * @param {String} key - String key
 * @param {Number} arrLength - range the number in and it should be prime
 * @returns {Number} hash number
 */
const hash = (key, arrLength) => {
	let total = 0;
	let WEIRD_PRIME_NUMBER = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let code = key.charCodeAt(i) - 96;
		total = (total * WEIRD_PRIME_NUMBER + code) % arrLength;
	}
	return total;
};

class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	// Same as hash function above
	_hash(key) {
		return hash.call(this, key, this.keyMap.length);
		// let total = 0;
		// let WEIRD_PRIME_NUMBER = 31;
		// for (let i = 0; i < Math.min(key.length, 100); i++) {
		// 	let code = key.charCodeAt(i);
		// 	total = (total * WEIRD_PRIME_NUMBER + code) % this.keyMap.length;
		// }
		// return total;
	}

	/**
   * This function use Separate chaining to solve conflict
   * @function set
   * @param {String} key 
   * @param {*} value 
   */
	set(key, value) {
		const hashKey = this._hash(key);

		if (!this.keyMap[hashKey]) {
			this.keyMap[hashKey] = [];
		}

		let existedKeyItem = this.keyMap[hashKey].find((item) => item[0] === key);
		if (existedKeyItem) {
			existedKeyItem[1] = value;
		} else {
			this.keyMap[hashKey].push([ key, value ]);
		}
	}

	/**
   * This function use Separate chaining to solve conflict
   * @function get
   * @param {String} key 
   * @returns {[key, value]}
   */
	get(key) {
		const hashKey = this._hash(key);
		if (!this.keyMap[hashKey]) return undefined;
		const result = this.keyMap[hashKey].find((item) => item[0] === key);
		return result[1];
	}
	keys() {
		const result = [];
		for (let item of this.keyMap) {
			if (item) {
				for (let i = 0; i < item.length; i++) {
					result.push(item[i][0]);
				}
			}
		}
		return [ ...new Set(result) ];
	}
	values() {
		const result = [];
		for (let item of this.keyMap) {
			if (item) {
				for (let i = 0; i < item.length; i++) {
					result.push(item[i][1]);
				}
			}
		}
		return [ ...new Set(result) ];
	}
}

module.exports = HashTable;

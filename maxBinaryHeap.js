class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	/**
   * This function help to insert value in an appropriate index position
   * @function insert
   * @param {Number} value - input value
   * @returns {Array}
   */
	insert(value) {
		this.values.push(value);
		this.bubbleUp();
		return this.values;
	}
	/**
   * This function help to sort last index of values in an appropriate position
   * @funtion bubbleUp
   */
	bubbleUp() {
		let insertedIdx = this.values.length - 1;
		const value = this.values[insertedIdx];

		// its parent index is (n-1) / 2
		let parentIdx;
		while (insertedIdx >= 0) {
			parentIdx = Math.floor((insertedIdx - 1) / 2);
			if (value > this.values[parentIdx]) {
				[ this.values[insertedIdx], this.values[parentIdx] ] = [
					this.values[parentIdx],
					this.values[insertedIdx]
				];
				insertedIdx = parentIdx;
			} else {
				break;
			}
		}
	}

	/**
   * This function help you to extract max value in max heap tree
   * @function extractMax
   * @return {*} - max value
   */
	extractMax() {
		// Swap the root and last item
		let lastIdx = this.values.length - 1;
		[ this.values[0], this.values[lastIdx] ] = [ this.values[lastIdx], this.values[0] ];

		// remove old root in array
		const oldRoot = this.values.pop();

		// Swap root with max value and choose place for last index
		this.sinkDown();

		return oldRoot;
	}

	/**
   * This function help to sink down root if it not the largest
   * @function sinkDown
   */
	sinkDown() {
		// Swap root with max value and choose place for last index
		let parent = 0;
		let left, right;

		// in Heap tree, priority adding node in left
		while (this.values[parent * 2 + 1]) {
			left = parent * 2 + 1;
			right = parent * 2 + 2;
			let maxChild = Math.max(this.values[left], this.values[right]);

			if (this.values[parent] > maxChild) {
				break;
			}

			if (this.values[left] === maxChild) {
				[ this.values[parent], this.values[left] ] = [ this.values[left], this.values[parent] ];
				parent = left;
			} else {
				[ this.values[parent], this.values[right] ] = [ this.values[right], this.values[parent] ];
				parent = right;
			}
		}
	}
}

module.exports = MaxBinaryHeap;

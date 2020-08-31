class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}
	/**
   * This function help to insert node in an appropriate index position
   * @function enqueue
   * @param {*} val - input value
   * @param {Number} priority - input priority
   * @returns {Array}
   */
	enqueue(val, priority) {
		let node = new Node(val, priority);
		this.values.push(node);
		this.bubbleUp();
		return this;
	}
	/**
   * This function help to sort last index of values in an appropriate position
   * @function bubbleUp
   */
	bubbleUp() {
		let insertedIdx = this.values.length - 1;
		const insertedNode = this.values[insertedIdx];

		// its parent index is (n-1) / 2
		let parentIdx;
		while ((parentIdx = Math.floor((insertedIdx - 1) / 2)) >= 0) {
			if (insertedNode.priority > this.values[parentIdx].priority) {
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
   * This function help you to extract highest priority in max heap tree
   * @function dequeue
   * @return {Node} - highest priority node
   */
	dequeue() {
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
   * This function help to sink down root if it not the largest priority
   * @function sinkDown
   */
	sinkDown() {
		let parent = 0;
		let left, right;

		// in Heap tree, priority adding node in left
		while (this.values[(left = parent * 2 + 1)]) {
			right = parent * 2 + 2;

			let highestPriority;
			if (this.values.right) {
				highestPriority = Math.max(this.values[left].priority, this.values[right].priority);
			} else {
				highestPriority = this.values[left].priority;
			}

			if (this.values[parent].priority >= highestPriority) {
				break;
			}

			if (this.values[left].priority === highestPriority) {
				[ this.values[parent], this.values[left] ] = [ this.values[left], this.values[parent] ];
				parent = left;
			} else {
				[ this.values[parent], this.values[right] ] = [ this.values[right], this.values[parent] ];
				parent = right;
			}
		}
	}
}

module.exports = PriorityQueue;

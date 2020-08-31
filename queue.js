/**
 * Interface for node instance
 */
class Node {
	constructor(value, next) {
		this.value = value;
		this.next = null;
	}
}

/**
 * Interface for Queue instance
 */
class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	/**
	 * This function will insert item at the end of single link list (FIFO)
	 * @function enqueue
	 * @param {*} value - input value
	 * @returns {Number} - length
	 */
	enqueue(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		return ++this.length;
	}
	/**
	 * This function will remove first node in Queue (FIFO)
	 * @function pop
	 * @return {*} - removed node value
	 */
	dequeue() {
		const removeNode = this.head;
		if (this.length === 0) {
			return undefined;
		}

		if (this.length === 1) {
			this.head = this.tail = null;
			this.length = 0;
		} else {
			this.head = this.head.next;
			--this.length;
		}

		removeNode.next = null;
		return removeNode.value;
	}
	/**
	 * This function loop through all instances in queue
	 * @function traverse
	 * @returns {void}
	 */
	traverse() {
		let current = this.head;
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
	/**
	 * This function help to get the item at position index in queue
	 * @function get
	 * @param {Numer} index - index position of node 
	 * @returns {Node}
	 */
	get(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}
		let current = this.head;
		for (let step = 0; step < index; step++) {
			current = current.next;
		}
		return current;
	}
}

module.exports = Queue;

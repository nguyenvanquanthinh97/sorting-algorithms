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
 * Interface for Stack instance
 */
class Stack {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	/**
	 * This function will remove first node in Stack (LIFO)
	 * @function pop
	 * @return {*} - removed node value
	 */
	pop() {
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
	 * This function will insert item at the top of Stack (LIFO)
	 * @function push
	 * @param {*} value - input value
	 * @returns {Number} stack length
	 */
	push(value) {
		const newNode = new Node(value);
		++this.length;
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		return this.length;
	}
	/**
	 * This function help to get the item at position index in Stack
	 * @function get
	 * @param {Numer} index - index position of node 
	 * @returns {*} node value
	 */
	get(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}
		let current = this.head;
		for (let step = 0; step < index; step++) {
			current = current.next;
		}
		return current.value;
	}
	/**
	 * This function loop through all instances in Stack
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
}

module.exports = Stack;

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
 * Interface for SingleLinkList instance
 */
class SingleLinkList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	/**
	 * This function will insert item to single link list at the end
	 * @function push
	 * @param {*} value - input value
	 * @return {SingleLinkList}
	 */
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		++this.length;
		return this;
	}
	/**
	 * This function loop through all instances in single link list
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
	 * This function will remove item at the end of single link list
	 * @function pop
	 * @returns {Node} - removed node
	 */
	pop() {
		let popNode;
		if (this.length === 0) {
			return undefined;
		}
		if (this.length === 1) {
			popNode = this.head;
			this.head = this.tail = null;
			this.length = 0;
		} else {
			let current = this.head;
			while (current.next.next) {
				current = current.next;
			}
			popNode = this.tail;
			this.tail = current;
			this.tail.next = null;
			--this.length;
		}
		return popNode;
	}
	/**
	 * This function will remove first node in single link list
	 * @function shift
	 * @return {Node} - removed node
	 */
	shift() {
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
		return removeNode;
	}
	/**
	 * This function will insert item at the top of single link list
	 * @function unshift
	 * @param {*} value - input value
	 * @returns {SingleLinkList}
	 */
	unshift(value) {
		const newNode = new Node(value);
		++this.length;
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		return this;
	}
	/**
	 * This function help to get the item at position index in single link list
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
	/**
	 * This function help to set value again at node position index in single link list
	 * @function set
	 * @param {*} value - input value
	 * @param {Number} index - index postion to set value
	 * @return {Boolean} - true - Success, false - Fail
	 */
	set(value, index) {
		const updatedNode = this.get(index);
		if (!updatedNode) {
			return false;
		}
		updatedNode.value = value;
		return true;
	}
	/**
	 * This function help to insert value at position in single link list
	 * @function insert
	 * @param {*} value - input value
	 * @param {Number} index - index position in single link list
	 * @returns {Boolean} - true - Success, false - Fail
	 */
	insert(value, index) {
		if (index < 0 || index > this.length) {
			return false;
		}
		if (index === 0) {
			return Boolean(this.unshift(value));
		}
		if (index === this.length) {
			return Boolean(this.push(value));
		}
		const prevNode = this.get(index - 1);
		const newNode = new Node(value);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
		++this.length;
		return true;
	}
	/**
	 * This function help to remove node at the position of index in single link list
	 * @function remove
	 * @param {Number} index - Index position in single link list
	 * @returns {Node} - removed node
	 */
	remove(index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}
		if (index === 0) {
			return this.shift();
		}
		if (index === this.length - 1) {
			return this.pop();
		}

		const prevNode = this.get(index - 1);
		const removeNode = prevNode.next;
		prevNode.next = removeNode.next;
		removeNode.next = null;
		--this.length;
		return removeNode;
	}

	/**
	 * This function help to revert single link list
	 * @function reverse
	 */
	reverse() {
		if (this.length === 0 || this.length === 1) {
			return;
		}
		/**
		 * My solution for reverse single link list
		 */
		// Swap the head and the tail
		// let tmp = this.tail;
		// this.tail = this.head;
		// this.head = tmp;

		// let node = this.tail;
		// let prev = node.next;
		// let next = null;

		// while (prev) {
		// 	let prevPrev = prev.next;
		// 	node.next = next;
		// 	prev.next = node;

		// 	next = node;
		// 	node = prev;
		// 	prev = prevPrev;
		// }
		// ---------------------------------------------

		/**
		 * Better Solution
		 */
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;

			prev = node;
			node = next;
		}
	}
}

module.exports = SingleLinkList;

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoubleLinkList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	/**
   * Add node at the end of list
   * @function push
   * @param {*} value - input value
   * @returns {DoubleLinkList}
   */
	push(value) {
		const node = new Node(value);
		if (this.length === 0) {
			this.head = this.tail = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		++this.length;
		return this;
	}
	/**
   * This function help to remove node at the end of list
   * @function pop
   * @return {Node} - node remove
   */
	pop() {
		if (this.length === 0) {
			return undefined;
		}

		let removedNode = this.tail;
		if (this.length === 1) {
			this.head = this.tail = null;
		} else {
			this.tail = removedNode.prev;
			this.tail.next = null;
			removedNode.prev = null;
		}
		--this.length;
		return removedNode;
	}
	/**
   * This function help to remove node at the begining of list
   * @function pop
   * @return {Node} - node remove
   */
	shift() {
		if (this.length === 0) {
			return undefined;
		}

		const oldHead = this.head;
		if (this.length === 1) {
			this.head = this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		--this.length;
		return oldHead;
	}
	/**
   * Add node at the begining of list
   * @function push
   * @param {*} value - input value
   * @returns {DoubleLinkList}
   */
	unshift(value) {
		const node = new Node(value);
		if (this.length === 0) {
			this.head = this.tail = node;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		++this.length;
		return this;
	}
	/**
	 * This function help to get the item at position index in single link list
	 * @function get
	 * @param {Numer} index - index position of node 
	 * @returns {Node} - node found
	 */
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let current;
		if (index > this.length / 2) {
			current = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				current = current.prev;
			}
		} else {
			current = this.head;
			for (let i = 0; i < index; i++) {
				current = current.next;
			}
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
		if (index < 0 || index > this.length) return false;

		if (index === 0) {
			return Boolean(this.unshift(value));
		}

		if (index === this.length) {
			return Boolean(this.push(value));
		}

		const prev = this.get(index - 1);
		const next = prev.next;

		const node = new Node(value);
		prev.next = node;
		node.prev = prev;

		next.prev = node;
		node.next = next;
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
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const removeNode = this.get(index);
		const prev = removeNode.prev;
		const next = removeNode.next;

		removeNode.next = removeNode.prev = null;
		prev.next = next;
		next.prev = prev;

		--this.length;
		return removeNode;
	}
}

module.exports = DoubleLinkList;

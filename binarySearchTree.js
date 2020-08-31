class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	/**
   * This function will add value at appropriate position in BST
   * @function insert
   * @param {*} value - input value
   */
	insert(value) {
		const node = new Node(value);
		if (!this.root) {
			this.root = node;
			return this;
		}

		let current = this.root;
		let parent;
		while (current) {
			if (current.value === value) return undefined;

			parent = current;
			if (value > current.value) {
				current = current.right;
			} else {
				current = current.left;
			}
		}
		if (value > parent.value) {
			parent.right = node;
		} else {
			parent.left = node;
		}
		return this;
	}
	/**
   * This function helps you to search a node whose value is equal to the input value
   * @function find
   * @param {*} value - search value
   * @returns {Node} found node 
   */
	find(value) {
		if (!this.root) {
			return null;
		}
		let current = this.root;
		while (current) {
			if (value === current.value) {
				return current;
			}
			if (value > current.value) {
				current = current.right;
			} else {
				current = current.left;
			}
		}
		return undefined;
	}
	/**
	 * This function will traverse bst with bfs method (visit sibling nodes first)
	 * @function bfs - breadth first search
	 * @returns {Array} visited values
	 */
	bfs() {
		let queue = [];
		let visited = [];
		let current;

		if (!this.root) return [];

		queue.push(this.root);
		while (queue.length > 0) {
			current = queue.shift();
			visited.push(current.value);

			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push(current.right);
			}
		}

		return visited;
	}
	/**
	 * This function will traverse bst with dfs_preorder method (visit from root to left child first than right)
	 * @function dfsPreorder - depth first search Preorder
	 * @returns {Array} - visited values
	 */
	dfsPreorder() {
		const visited = [];
		const traverse = (node) => {
			visited.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return visited;
	}
	/**
	 * This function will traverse dfs with dfs_postorder method (left child - right child - parent)
	 * @function dfsPostorder - depth first search Postorder
	 * @returns {Array} - visited values
	 */
	dfsPostorder() {
		const visited = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visited.push(node.value);
		};
		traverse(this.root);
		return visited;
	}
	/**
	 * This function will traverse dfs with dfs_inorder method (leftchild - parent - right child)
	 * @function Inorder - depth first search Inorder
	 * @returns {Array} - visited values
	 */
	dfsInorder() {
		const visited = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			visited.push(node.value);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return visited;
	}
}

module.exports = BinarySearchTree;

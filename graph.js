// This graph will store vertex and edges in Adjacency list
// This is a undirected unweighted graph
class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	/**
   * @function addVertex
   * @param {String, Number} key 
   */
	addVertex(key) {
		if (!this.adjacencyList[key]) {
			this.adjacencyList[key] = [];
		}
	}
	/**
   * This function add connection (edge) between 2 vertexes
   * @function addEdge
   * @param {String, Number} v1 - vertex
   * @param {String, Number} v2 - vertex
   */
	addEdge(v1, v2) {
		if (!this.adjacencyList[v1]) this.addVertex(v1);
		if (!this.adjacencyList[v2]) this.addVertex(v2);
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}
	/**
   * This function help to remove connection between 2 vertex
   * @function removeEdge
   * @param {String, Number} v1 - vertex
   * @param {String, Number} v2 - vertex
   */
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((vertex) => vertex !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((vertex) => vertex !== v1);
	}
	/**
   * This function help to remove vertex and its edges
   * @function removeVertex
   * @param {String, Number} vertex - vertex
   */
	removeVertex(vertex) {
		const edges = this.adjacencyList[vertex];
		edges.forEach((item) => this.removeEdge(vertex, item));
		delete this.adjacencyList[vertex];
	}
	/**
	 * This function traverse all vertex in graph with DFS recursively
	 * @function dephthFirstRecursive
	 * @param {String, Number} start - vertex
	 * @returns {Array}
	 */
	dephthFirstRecursive(start) {
		const result = [];
		const visited = {};
		const DFS = (vertex) => {
			if (visited[vertex]) {
				return;
			}
			visited[vertex] = true;
			result.push(vertex);
			this.adjacencyList[vertex].forEach((neighbor) => DFS(neighbor));
		};
		DFS(start);
		return result;
	}
	/**
	 * This function traverse all vertex in graph with DFS iteratively
	 * @function depthFirstIterate
	 * @param {String, Number} start - vertex
	 * @returns {Array}
	 */
	depthFirstIterate(start) {
		const result = [];
		const visited = {};
		const stack = [ start ];

		let vertex;
		while (stack.length) {
			vertex = stack.pop();
			if (visited[vertex]) continue;
			visited[vertex] = true;
			result.push(vertex);
			stack.push(...this.adjacencyList[vertex]);
		}
		return result;
	}
	/**
	 * This function traverse all vertex in graph with BFS iteratively
	 * @function breadthFirstIterative
	 * @param {String, Number} start - Vertex
	 * @return {Array}
	 */
	breadthFirstIterative(start) {
		const result = [];
		const visited = {};

		const queue = [ start ];
		visited[start] = true;

		let vertex;
		while (queue.length) {
			vertex = queue.shift();
			result.push(vertex);

			this.adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}

module.exports = Graph;

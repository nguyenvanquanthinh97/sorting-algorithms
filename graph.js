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
}

module.exports = Graph;

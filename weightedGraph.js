const PriorityQueue = require('./priorityQueue');

class WeightedClass {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2, weight) {
		this.adjacencyList[v1].push({ val: v2, weight });
		this.adjacencyList[v2].push({ val: v1, weight });
	}

	/**
	 * This function will return shortest path
	 * @param {String, Number} start - Vertex
	 * @param {String, Number} end - Vertex
	 * @return {Array}
	 */
	Dijkstra(start, end) {
		const distances = {};
		const previous = {};
		const queue = new PriorityQueue();
		let smallest;
		let shortestPath = [];

		// set initial values
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				queue.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				queue.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		while (queue.values.length) {
			smallest = queue.dequeue();
			if (smallest.val === end) {
				// End in here
				break;
				// From here we will handle both previous and distances. This will return shortest path;
				// console.log(previous);
				// console.log(distances);
			}
			this.adjacencyList[smallest.val].forEach((neighbor) => {
				let candidate = distances[smallest.val] + neighbor.weight;
				if (candidate < distances[neighbor.val]) {
					distances[neighbor.val] = candidate;
					previous[neighbor.val] = smallest.val;
					queue.enqueue(neighbor.val, distances[neighbor.val]);
				}
			});
		}
		let key = end;
		while (previous[key]) {
			shortestPath.push(key);
			key = previous[key];
		}
		shortestPath.push('A');
		// if we want to return cost, use distance[end];
		return shortestPath.reverse();
	}
}

module.exports = WeightedClass;

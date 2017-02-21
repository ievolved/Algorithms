

// Create an undirected graph
//
//  [ ] .containsNode() returns whether the node exists
//  [ ] .addNode() adds a new node to the graph
//  [ ] .removeNode() remove the node from the graph, and any connected edges
//  [ ] .containsEdge() returns whether two nodes are connected
//  [ ] .addEdge() creates a connection between two existing nodes
//  [ ] .removeEdge() removes the connection between two nodes
//  [ ] .printGraph() prints the contents of the graph
//
//  [ ] What is the Big-O time complexity of each function?
//
//
//
//  Extra Credit (not for the faint of heart)
//
//  [ ] You already implemented an adjacency list.  Research adjacency matrix, implement a new graph using it
//  [ ] Research Depth-First Search (DFS).  Implement it with one of the two graphs you wrote.
//      [ ] with the other graph you wrote
//  [ ] Research Breadth-First Search (BFS).  Implement it with one of the two graphs you wrote.
//      [ ] with othe other graph you wrote
//

function Graph() {
  this.node_list = [];
}

function Node(value) {
  this.edge_list = [];
  this.value = value;
}




Array.prototype.contains = function(value) {
  var i = this.length;
  while (i--) {
    if (this[i].value === value) {
      return true;
    }
  }
  return false;
};

Node.prototype.addEdge = function(end) {
  this.edge_list.push(end);
};




Graph.prototype.containsNode = function(value) {
  ...
};

Graph.prototype.addNode = function(value) {
  ...
};

Graph.prototype.removeNode = function(value) {
  ...
};




Graph.prototype.containsEdge = function(start, end) {
  ...
};

Graph.prototype.addEdge = function(start, end) {
  ...
};

Graph.prototype.removeEdge = function(start, end) {
  ...
};


Graph.prototype.printGraph = function() {
  ...
};




// -------------- TEST -------------

var graph = new Graph();
graph.addNode("start");
graph.addNode("end");
graph.addNode("here");
graph.addNode("there");
graph.addNode("up");
graph.addNode("down");
graph.addNode("left");
graph.addNode("right");

graph.addEdge("start", "end");
graph.addEdge("start", "finish");
graph.addEdge("here", "there");
graph.addEdge("up", "down");
graph.addEdge("up", "left");
graph.addEdge("up", "right");

graph.removeEdge("up", "right");
graph.removeNode("up");

graph.containsEdge("start", "end");
graph.containsEdge("alpha", "omega");

graph.printGraph();


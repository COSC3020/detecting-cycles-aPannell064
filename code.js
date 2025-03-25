function hasCycle(graph) {
    var visited = new Array(graph.length).fill(false)
    //Try each node as a start becasue we don't know where the graph starts
    for (var startNode = 0; startNode < graph.length; startNode++) {
        if(dfTraversal(graph, visited, startNode)) {return true;}
    }
    return false;  
}

function dfTraversal(graph, visited, startNode) {  
    if (visited[startNode]) {return true;}
    visited[startNode] = true;
    //Check each edge with a depth-first traversal
    var toCheck = [...graph[startNode]];
    while(toCheck.length) { 
        if(dfTraversal(graph, visited, toCheck.shift())) {return true;}
    }
    //Reset the visited for that node if the stack resolves
    visited[startNode] = false;
    return false;
}
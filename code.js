
function hasCycle(graph) {
    //Array for all nodes that have been fully processed
    var processed = new Array(graph.length).fill(false)
    //Array for all nodes that are visited in each recurrsion stack
    var visited = new Array(graph.length).fill(false)
    
    //Try each node as a start becasue we don't know where the graph starts
    for (var startNode = 0; startNode < graph.length; startNode++) {
        if(dfTraversal(graph, visited, startNode, processed)) {return true;}
    }
    return false;  
}

function dfTraversal(graph, visited, startNode, processed) {
    //If node has been completely proccessed already, return false
    if(processed[startNode]) {return false;}
    //If node has been visited, return true  
    if (visited[startNode]) {return true;}
    visited[startNode] = true;

    //Check each edge with a depth-first traversal
    var toCheck = [...graph[startNode]];
    while(toCheck.length) { 
        if(dfTraversal(graph, visited, toCheck.shift(), processed)) {return true;}
    }

    //Reset visited for that node since the stack resolved without returning true
    visited[startNode] = false;
    //Mark node as completely processed
    processed[startNode] = true;
    return false;
}
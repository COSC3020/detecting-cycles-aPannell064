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
    console.log(visited)
    var toCheck = [...graph[startNode]];
    
    while(toCheck.length) { 
        if(dfSearch(graph, visited, toCheck.shift())) {return true;}
    }
    visited[startNode] = false;
    return false;
}

console.log(hasCycle([[1,2,5], [4], [3,5], [4], [], [6], []]));
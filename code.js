function hasCycle1(graph) {
    var toVisit;
    var current;
    var copy = JSON.parse(JSON.stringify(graph));
    //Try every start position
    for(var i = 0; i < graph.length; i++) {
        current = i;
        toVisit = [...copy[current]];
        copy[current] = []

        //Visit each vertex
        while(toVisit.length) {
            current = toVisit.shift()
            if(current == i) {return true;}

            //Add all edges to list of vertices to visit
            while (copy[current].length) {
                toVisit.unshift(copy[current].pop())
            }
        }
    }  
    return false;
}

function hasCycle(graph) {
    var visited = new Array(graph.length).fill(false)
    for (var startNode = 0; startNode < graph.length; startNode++) {
        if(dfSearch(graph, visited, startNode)) {return true;}
    }
    return false;  
}

function dfSearch(graph, visited, startNode) {
    
    if (visited[startNode]) {return true;}
    visited[startNode] = true;
    console.log(visited)
    var toCheck = [...graph[startNode]];

    while(toCheck.length) { 
        if(dfSearch(graph, visited, toCheck.shift())) {
            return true;
        }   
    }
    visited[startNode] = false;
    return false;
}

console.log(hasCycle([[1,2,5], [4], [3,5], [4], [], [6], []]));
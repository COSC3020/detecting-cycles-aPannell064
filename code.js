function hasCycle(graph) {
    var toVisit;
    var current;
    var copy;
    //Try every start position
    for(var i = 0; i < graph.length; i++) {
        current = i;
        copy = JSON.parse(JSON.stringify(original));
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

console.log(hasCycle([[]]))
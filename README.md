# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

My implementation detects cycles by doing a depth-first traversal on the graph. This
is where the bulk of the work comes from. To do this, it adds all edges of a given vertex
to a stack. It then calls the function again for each vertex in the stack. If a vertex is 
visited twice within the same recursive stack, the function returns true as this means there is
a cycle. 

In the worst case, there are no cycles, so the entire graph has to be traversed. There is 
a for-loop in the hasCycle function. Its purpose is to ensure that every node is checked as 
a start node because the start node is not given. However, the processed array ensures that no 
redundant work is done by marking the nodes, as well as any paths that branch off from them, 
as being already processed. dfTraversal calls on nodes that have already been processed run 
in constant time. Because of this, dfTraversal will only do significant work once for each 
vertex. For each vertex, it will recursively process each of its outgoing edges. Since, each
vertex only has to be processed once, each of its edges also only have to be processed once in
the worst case. Therefore, the asymptotic complexity is $\Theta(|V| + |E|)$. 

## Additional Help

I had to use https://medium.com/@programinbasic/how-to-copy-clone-an-array-in-javascript-2eb2011451b
to figure out how to properly copy an array because I had some problems with how arrays are handled 
in JavaScript.

I also used https://www.w3schools.com/nodejs/met_assert.asp to help me with the test code as 
this is the first exercise that I have actually written the tests for. I looked at the workflows
from previous exercises to figure out how to get it to automatically run when pushed to GitHub. 

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."

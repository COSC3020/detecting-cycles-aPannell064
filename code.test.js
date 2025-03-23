const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//Empty Graph
assert.strictEqual(hasCycle([]), false, "Empty graph should not have cycles");

//Basic graph with no cycles
assert.strictEqual(hasCycle([[1], []]), false, "This graph should not have any cycles");

//Basic graph with a cycle
assert.strictEqual(hasCycle([[1], [2], [0]]), true, "This graph should have a cycle");

//More complex graph with no cycles
assert.strictEqual(hasCycle([[1,3,5], [4], [3,5], [4], [], [6], []]), false, "This graph should not have any cycles");

//More complex graph with cycles
assert.strictEqual(hasCycle([[1,2,5], [4], [3,5], [4], [6], [6], [1]]), true, "This graph should have a cycle");

//More complex undirected graph
assert.strictEqual(hasCycle([[1,2,5], [0,4], [0,3,5], [2,4], [1,3], [0,2,6], [5]]), true, "This graph should have a cycke");
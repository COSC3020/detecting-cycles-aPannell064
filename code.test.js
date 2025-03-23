const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//Empty Graph
assert.strictEqual(hasCycle([]), false, "Empty graph should not have cycles");

//Basic graph with no cycles
assert.strictEqual(hasCycle([[1], []]), false, "This graph should not have any cycles");

//Basic graph with a cycle
assert.strictEqual(hasCycle([[1], [2], [0]]), true, "This graph should have a cycle");
//jsc.assert(hasCycle([[1], [2], [0]]) == true);

//More complex graph with no cycles

//More complex graph with cycles
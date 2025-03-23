const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

//Empty Graph
jsc.assert(hasCycle([]) == false);

//Basic Graph with no cycles
jsc.assert(hasCycle([[1], []]) == false);

//Basic graph with a cycle
jsc.assert(hasCycle([[1], [2], [0]]) == true);

//More complex graph with no cycles

//More complex graph with cycles
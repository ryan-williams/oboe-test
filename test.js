
var fs = require('fs');
var oboe = require('oboe');

var nodes = [];
oboe(fs.createReadStream('input')).node('!', function(n) {
  nodes.push(n);
}).done(function(o) {
  console.log("done() called after %d nodes", nodes.length);
});

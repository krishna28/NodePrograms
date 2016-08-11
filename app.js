var Emitter = require('./customevent');

var emtr = new Emitter();

emtr.on('onsave', function () {
	console.log("saved");

});
emtr.on('onsave', function () {
	console.log("saved again");

});

console.log("hello")
emtr.emit('onsave')
var fs = require('fs');

console.log("starting");

fs.readFile("sample.txt",function(err,data){

console.log("contents of a file is "+ data);

});

console.log("called after callback");

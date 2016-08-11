
var exec = require('child_process').exec; 
exec('notepad', function(err, stdout, stderr) {   
if (err) {           
   console.log('child process exited with error code', err.code);  
      return;    }  
  console.log(stdout); });

var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3025;


var app = express();

app.use(morgan('dev'));


//serving static files
app.use(express.static(__dirname + '/public'));

//listen
app.listen(port, hostname,function(){
console.log(`Server running at http://${hostname}:${port}`);
});

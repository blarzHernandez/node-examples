var express = require('express');//express framework
var http = require('http');//http module

var hostname = 'localhost';
var port = 3024;


var app = express();

//use
app.use(function(req,res,next){
  console.log(req.headers);//get headers

  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('<html><body><h1>Hello World!</h1></body></html>');
});


//creating server
var server = http.createServer(app);

//listen
server.listen(port, hostname,function(){
  console.log(`Server runnig at http://${hostname}:${port}/`);
});

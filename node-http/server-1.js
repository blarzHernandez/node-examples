//include http module
var http = require('http');

//Hostaname
var hostname  = 'localhost';
var port      =  3000;

//Create server
var server = http.createServer(function(req,res){
  console.log(req.headers);
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('<h1>Hello World!</h1>');
});

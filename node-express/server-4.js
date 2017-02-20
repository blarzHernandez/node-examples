var express = require('express');
var morgan = require('morgan');
var bodyParser = require("body-parser");

var hostname = 'localhost';
var port = 3031;
var app = express();


app.use(morgan('dev'));

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

//Use Router
dishRouter.route('/')
.all(function(req,res,next){
  res.write(200,{'Content-Type':'text/plain'});
  next();
})
.get(function(req,res,next){
  res.end("Will send all the dishes to you!");
})
.post(function(req,res,next){
  res.end("Will add the dish: " + req.body.name + " with details : " + req.body.description)

})
.delete(function(req,res, next){
  res.end('Deleting all dishes');
});



app.use(express.static(__dirname + '/public'));


app.listen(port,hostname,function(){
console.log(`Server running at http://${hostname}:${port}`);
});

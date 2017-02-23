var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//Set hostname
var hostname = 'localhost';

//set port
var port = 3046;

//create instance of express
var app = express();
app.use(morgan('dev'));

var dRouter = express.Router();
dRouter.use(bodyParser.json());

//For collections
dRouter.route('/')
.all(function(req,res,next){
  res.writeHead(200,{'Content-Type':'text/plain'});
  next();

})
.get(function(req,res,next){
  res.end("Will send all the dishes for you");
})
.post(function(req,res,next){
  res.end("Will add the dish: " + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req,res,next){
  res.end("Deleting all dishes");
});

//For item
dRouter.route('/:dishId')
  .all(function(req,res,next){
      res.writeHead(200, {'Content-Type':'text/plain'});
      next();
  })
  .get(function(req,res,next){
      res.end('Will send details about the dish: ' + req.params.dishId + ' for you');
  })
  .put(function(req,res,next){
      res.write('We are updating the dish: ' + req.params.dishId + '\n');
      res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
  }).
  delete(function(req,res,next){
      res.end("Deleting dish: " + req.params.dishId);
  });

//Attach Router
app.use('/dishes',dRouter);
app.use(express.static(__dirname + "/public"));


app.listen(port,hostname,function(){
  console.log(`Server running at http://${hostname}:${port}`);
});

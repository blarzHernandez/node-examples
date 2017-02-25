var express = require('express');
//create instance of express
var app = express();
var dRouter = express.Router();

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

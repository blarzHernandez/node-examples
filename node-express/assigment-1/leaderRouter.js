var express = require('express');
var leadRouter = express.Router();


//For collections
leadRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(res, req, next){
    res.end("Getting all leaderships");
})
.post(function(req, res, next) {
    res.end("We are creating the leaderships: " + req.body.leadName + " with detail: " +req.body.leadDescription );
})
.delete(function(req, res, next){
    res.end("Deleting all leaderships");
});


//item
leadRouter.route('/:leadId')
  .all(function(req, res, next){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      next();
  })
  .get(function(req, res, next){
      res.end("We are getting the leadership: " + req.params.leadId);
  })
  .put(function(req, res, next){
      res.write('We are updating the leadership: ' + req.params.leadId + "\n" );
      res.end("Will update the leadership: " + req.body.leadName + " With details: " + req.body.leadDescription);
  })
  .delete(function(req, res, next){
      res.end("Deleting the leadership: " + req.params.leadId);
  });

  //Export de module
  module.exports = leadRouter;

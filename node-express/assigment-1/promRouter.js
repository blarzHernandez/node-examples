var express = require('express');
var promRouter = express.Router();

//Get collections
promRouter.route('/')
    .all(function(req,res,next){
        res.writeHead(200,{'Content-Type':'text/plain'});
        next();
    })
    .get(function(req,res,next){
        res.end("Getting all promotions");
    })
    .post(function(req,res,next){
        res.end("Adding a new promotion: " + req.body.promName + " with details : " + req.body.promDescription);
    })
    .delete(function(req,res,next){
        res.end("Deleting all promotions");
    });

//Get item
promRouter.route('/:promotionId')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end("We are getting the promotion: " + req.params.promotionId);
})
.put(function(req,res,next){
    res.write("We are updating the promotion: " + req.params.promotionId + '\n');
    res.end("Will update the promotion : " + req.body.promName + " With details: " + req.body.promDescription);
})
.delete(function(req,res,next){
    res.end("We are deleting the promotion : " + req.params.promotionId);
});




//Export module
module.exports = promRouter;

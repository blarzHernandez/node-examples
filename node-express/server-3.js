var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');


var hostname = 'localhost';
var port = 3030;



var app = express();

app.use(morgan('use'));
app.use(bodyParser.json());

// ALl dishes
app.all('/dishes',function(req,res,next){
  res.writeHead(200,{'Content-Type':'text/plain'});
  next();
});

// GET method
app.get('/dishes',function(req,res,next) {
  res.end("Will send all the dishes to you");
});

//POST method
app.post('/dishes',function(req,res,next) {
  res.end("Will add the dish: " + req.body.name + " with details: "
          + req.body.description);
});

//GET with a once dish (dishId)
app.get('/dishes/:dishId',function(req,res,next) {
  res.end("Will send details of the dish: " + req.params.dishId + ' to you!')
});

//PUT method
app.put('/dishes/:dishId',function (req,res,next) {
  res.write("Updating the dish: " + req.params.dishId + '\n');
  res.end("Will update the dish: " + req.body.name +
  ' with details : ' + req.body.description );
});

//DELETE with specific dish
app.delete('/dishes/:dishId',function(req,res,next) {
  res.end('Deleting dish: ' + req.params.dishId);
});




//DELETE method
app.delete('/dishes',function(req,res,next) {
  res.end("Deleting all dishes");
});


app.use(express.static(__dirname + "/public"));



//listen
app.listen(port,hostname,function(){
console.log(`Server running at http://${hostname}:${port}`);
});

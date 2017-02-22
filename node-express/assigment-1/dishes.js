var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//Set hostname
var hostname = 'localhost';

//set port
var port = 3041;

//create instance of express
var app = express();
app.use(morgan('dev'));

var dRouter = express.Router();
dRouter.use(bodyParser.json());

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

//Attach Router
app.use('/dishes',dRouter);
app.use(express.static(__dirname));


app.listen(port,hostname,function(){
  console.log(`Server running at http://${hostname}:${port}`);
});

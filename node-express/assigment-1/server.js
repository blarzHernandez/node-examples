var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouter = require('./dishRouter.js');
var promRouter = require('./promRouter.js');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//Set hostname
var hostname = 'localhost';
//set port
var port = 3061;

app.use('/dishes',dishRouter);
app.use('/promotions',promRouter);


app.listen(port,hostname,function(){
  console.log(`Server running at http://${hostname}:${port}`);
});

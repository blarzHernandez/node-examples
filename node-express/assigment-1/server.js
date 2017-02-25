var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var dishRouter = require('./dishRouter.js');
var promRouter = require('./promRouter.js');
var leadRouter = require('./leaderRouter.js');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//Set hostname
var hostname = 'localhost';
//set port
var port = 3000;

app.use('/dishes',dishRouter);//Dishes
app.use('/promotions',promRouter);//promotions
app.use('/leadership', leadRouter); // leadership


app.listen(port,hostname,function(){
  console.log(`Server running at http://${hostname}:${port}`);
});

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var disRouter = require('./dishRouter.js')

//create instance of express
var app = express();
var dRouter = express.Router();

//Set hostname
var hostname = 'localhost';

//set port
var port = 3046;
app.use(morgan('dev'));
dRouter.use(bodyParser.json());
//Attach Router
app.use('/dishes',disRouter);



app.listen(port,hostname,function(){
  console.log(`Server running at http://${hostname}:${port}`);
});

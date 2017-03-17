var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');

var index = require('routes/index');

var hostname = 'localhost';
var port = 3000;

var app = express();

//view engine
app.set("views", path.join(__dirname,'views'));
app.set('view engine' , 'ejs');
app.engine('html',require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname,'client')));

//Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Routing
app.use('/',index);

//Server  listining
app.listen(port, hostname, function(){
    console.log(`Server running at: http://${hostname}:${port}`);
});

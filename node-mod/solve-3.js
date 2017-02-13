var argv = require("yargs")
            .usage('Usage: node $0 --l=[num] --b=[num]')
            .demand(['l','b'])
            .argv;

//require
var rect = require('./rectangle-2');

//solveRect function
function solveRect(l,b){


  rect(l,b,function(err,rectang){
    if(err){
      console.log(err);
    }else{
      console.log("The area of a rectangle of dimensions length = " + l + " and breadth ="+b+ " is "+
        rectang.area());

        console.log("The perimeter of a rectangle of dimensions length = " + l + " and breadth ="+b+ " is "+
          rectang.perimeter());
    }

  });
}



//Call
solveRect(argv.l,argv.b);

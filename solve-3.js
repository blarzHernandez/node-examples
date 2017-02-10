var argv = require("yargs")
            .usage('Usage: node $0 --l=[num] --b=[num]')
            .demand(['l','b'])
            .argv;


var rect = require('./rectangle-2');

function solveRect(l,b){


  rect(l,b,function(err,rectang){
      console.log("The area of a rectangle of dimensions length = " + l + " and breadth ="+b+ " is "+
        rectang.area());

        console.log("The perimeter of a rectangle of dimensions length = " + l + " and breadth ="+b+ " is "+
          rectang.perimeter());
  });
}



//Call
solveRect(argv.l,argv.b);

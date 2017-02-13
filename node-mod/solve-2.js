//Require node module
var rect = require('./rectangle-2');
//Main function
function solveRect(l,b){
  console.log("Solving for rectangle with l = " + l + " and b =  "+ b);

//Using callback
  rect(l,b,function(err, rectang){
      if(err){
        console.log(err);
      }else {
        console.log("The area of a rectangle of dimensions length = " + l + " and breadth = "+ b +" is "+ rectang.area());
        console.log("The perimeter of a rectangle of dimensions length = " + l + " and breadth = " + b + " is " + rectang.perimeter());
      }
  });
}


//call
solveRect(2,3);
solveRect(3,5);
solveRect(-3,5);

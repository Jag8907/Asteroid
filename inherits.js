(function (root){  
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});
  
  Object.prototype.inherits = function(superclass){
    superclass.surrogate = superclass.surrogate || function Surrogate(){};
    superclass.surrogate.prototype = superclass.prototype;
    this.prototype = new superclass.surrogate();
  };

})(this);

// function MovingObject() {}
//
// function Ship () {}
// Ship.inherits(MovingObject);
//
// function Asteroid () {}
// Asteroid.inherits(MovingObject);
//
// MovingObject.prototype.move = function(){console.log('it moves');};
//
// Ship.prototype.shoot = function(){console.log('pew pew');};
//
// Asteroid.prototype.explodes = function(){console.log('booom');};
//
// var ship = new Ship();
// var asteroid = new Asteroid();
// var mover = new MovingObject();
//
// console.log("testing ship");
// ship.move();
// ship.shoot();
//
// console.log("\ntesting asteroid");
// asteroid.move();
// asteroid.explodes();
//
// console.log("\ntesting move object");
// mover.move();
//
// console.log("\ntesting non exist");
// // ship.explodes();
// // asteroid.shoot();
// // mover.explodes();
// console.log(MovingObject.prototype);
// console.log(Ship.prototype);
// console.log(Ship.prototype.__proto__);
// console.log(Asteroid.prototype);
// console.log(Asteroid.prototype.__proto__);



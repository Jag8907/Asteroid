(function (root){  
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});
  var MovingObject = AsteroidsGame.MovingObject;
  var Asteroid = AsteroidsGame.Asteroid = function (pos, vel) {
    MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
  };
  
  Asteroid.inherits(MovingObject);
  
  Asteroid.RADIUS = 30;
  Asteroid.COLOR = "brown";
  
  Asteroid.randomAsteroid = function(dimX, dimY){
    var posX = Math.floor(Math.random() * dimX);
    var posY = Math.floor(Math.random() * dimY);
    var randomPos = [posX, posY];
    var randomVel = Asteroid.randomVel(dimX, dimY);
    return new Asteroid(randomPos, randomVel);
  };
  
  Asteroid.randomVel = function(dimX, dimY, intensity){
    intensity = intensity || 1; 
    var rangeX = (intensity * dimX) / 75; 
    var rangeY = (intensity * dimY) / 75; 
    var xDirection = Math.random() < 0.5 ? -1 : 1;
    var yDirection = Math.random() < 0.5 ? -1 : 1;
    var randomDx = (Math.floor(Math.random() * rangeX) + 1) * xDirection;
    var randomDy = (Math.floor(Math.random() * rangeY) + 1) * yDirection;
    return [randomDx, randomDy];
  };
  
})(this);
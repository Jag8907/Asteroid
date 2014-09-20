(function (root){  
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});
  var Asteroid = AsteroidsGame.Asteroid;
  var Turret = AsteroidsGame.Turret;
  var Ship = AsteroidsGame.Ship;
  
  var Game = AsteroidsGame.Game = function(ctx){
    this.ctx = ctx; 
    this.asteroids = this.addAsteroids(2);
    this.bullets = [];
    this.ship = new Ship();
    this.turret = new Turret(this.ship);
  };
  
  Game.DIM_X = 500;
  Game.DIM_Y = 500; 
  Game.FPS = 30; 
  
  Game.prototype.addAsteroids = function(numAsteroids){
    var output = [];
    for (var i = 0; i < numAsteroids; i++){
      output.push(Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    }
    return output; 
  };
  
  Game.prototype.draw = function(){
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var that = this;
    this.asteroids.forEach(function(asteroid){
      asteroid.draw(that.ctx);
    });
    this.ship.draw(this.ctx); 
    this.turret.draw(this.ctx);
    this.bullets.forEach(function(bullet){
      if (bullet.availableDistance > 0){
        bullet.draw(that.ctx);
      } else {
        that.bullets[that.bullets.indexOf(bullet)] = null;
      }
    });
    this.bullets = this.bullets.filter(function(item) { return item !== null });
  };
  
  Game.prototype.move = function(){
    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    });
    this.ship.move();
    this.turret.place();
    this.bullets.forEach(function(bullet){
      bullet.move();
      bullet.availableDistance -= 20;
    });
  };
  
  Game.prototype.step = function(){
    this.bindKeyHandlers();
    this.move();
    this.draw();
    this.checkCollisions();
  };
  
  Game.prototype.start = function(){
    var interval = Math.floor(1000/Game.FPS);
    var that = this;
    this.intervalID = window.setInterval(that.step.bind(that), interval);
  };
  
  Game.prototype.checkCollisions = function(){
    var ship = this.ship; 
    var that = this; 
    this.asteroids.forEach(function(asteroid){
      if (asteroid.isCollidedWith(ship)) {
        alert("You lose!");
        that.stop();
      }
    });
  };
  
  Game.prototype.stop = function(){
    clearInterval(this.intervalID);
  };
  
  Game.prototype.bindKeyHandlers = function(){
    var ship = this.ship;
    var turret = this.turret;
    var game = this;
    
    key('s', function(){ ship.power([0, 0.01]); });
    key('w', function(){ ship.power([0, -0.01]); });
    key('a', function(){ ship.power([-0.01, 0]); });
    key('d', function(){ ship.power([0.01, 0]); });
    
    key('j', function(){ turret.rotate(-0.1); });
    key('l', function(){ turret.rotate(0.1); });
    
    key('space', function(){
      if (game.bullets.length < 1){
        debugger;
        game.bullets.push(turret.fireBullet());
      }
    });
  };
  
})(this);  













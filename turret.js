(function (root){  
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});
  var MovingObject = AsteroidsGame.MovingObject;
  var Ship = AsteroidsGame.Ship;
  var Turret = AsteroidsGame.Turret = function (ship){
    MovingObject.call(this, Turret.START, [0, 0], Turret.RADIUS, Turret.COLOR);
    this.degree = 90;
    this.ship = ship;
  };
  
  Turret.START = [Ship.CENTER[0], (Ship.CENTER[1] - Ship.RADIUS)];
  Turret.COLOR = 'red';
  Turret.RADIUS = 3;
  
  Turret.inherits(MovingObject);

  Turret.prototype.rotate = function(impulse){
    this.degree = (this.degree - impulse) % 360; 
  };
  
  Turret.prototype.place = function(){
    var ship = this.ship;
    var shipX = ship.pos[0]; 
    var shipY = ship.pos[1];
    
    var distX = Ship.RADIUS * Math.cos(toRadians(this.degree));
    var distY = Ship.RADIUS * Math.sin(toRadians(this.degree));
    
    this.pos = [shipX + distX, shipY - distY];
  };
  
  var toRadians = AsteroidsGame.toRadians = function(degrees){
    return degrees * (Math.PI / 180);
  };
  
  Turret.prototype.fireBullet = function(){
    return new AsteroidsGame.Bullet(this);
  };

})(this);
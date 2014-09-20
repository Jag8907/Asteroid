(function (root){  
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});
  var MovingObject = AsteroidsGame.MovingObject;
  
  var Bullet = AsteroidsGame.Bullet = function (turret){
    MovingObject.call(this, turret.pos, setVel(turret), Bullet.RADIUS, Bullet.COLOR);
    this.turret = turret;
    this.availableDistance = 400;
  };
  
  Bullet.SPEED = 20;
  Bullet.COLOR = 'black';
  Bullet.RADIUS = 2;
  
  
  var toRadians = AsteroidsGame.toRadians; 
  
  var setVel = function(turret){
    var velX = Bullet.SPEED * Math.cos(toRadians(turret.degree));
    var velY = -(Bullet.SPEED * Math.sin(toRadians(turret.degree)));
    return [velX, velY];
  };
  
  Bullet.inherits(MovingObject);

  

})(this);
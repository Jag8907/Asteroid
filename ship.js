(function (root){  
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});
  
  var MovingObject = AsteroidsGame.MovingObject;
  var Ship = AsteroidsGame.Ship = function(){
    MovingObject.call(this, Ship.CENTER, [0, 0], Ship.RADIUS, Ship.COLOR);
  };
    
  Ship.RADIUS = 10;
  Ship.COLOR = 'blue';
  Ship.CENTER = [250, 250];
  Ship.MAXSPEED = 10;
  
  Ship.inherits(MovingObject);
  
  Ship.prototype.power = function(impulse){
    var newVelX = this.vel[0] + impulse[0];
    var newVelY = this.vel[1] + impulse[1];
    if (Math.abs(newVelX) >= Ship.MAXSPEED){
      newVelX = newVelX >= 0 ? Ship.MAXSPEED : - Ship.MAXSPEED; 
    } 
    if (Math.abs(newVelY) >= Ship.MAXSPEED){
      newVelY = newVelY >= 0 ? Ship.MAXSPEED : - Ship.MAXSPEED;
    }
    
    this.vel = [newVelX, newVelY];
  };
  

  

})(this);

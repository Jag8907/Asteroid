(function (root){  
  var AsteroidsGame = root.AsteroidsGame = (root.AsteroidsGame || {});
  
  var MovingObject = AsteroidsGame.MovingObject = function(pos, vel, radius, color){
    this.pos = pos; 
    this.vel = vel;
    this.color = color;
    this.radius = radius;
  };

  MovingObject.prototype.move = function(){
    var newX = (this.pos[0] + this.vel[0]) % 500;
    var newY = (this.pos[1] + this.vel[1]) % 500;
    
    if (newX <= 0){
      newX = 500;
    }
    if (newY <= 0){
      newY = 500;
    }
    this.pos = [newX, newY];
  };

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function(otherObject){
    var thisX = this.pos[0];
    var thisY = this.pos[1];
    var othX = otherObject.pos[0];
    var othY = otherObject.pos[1];
  
    var difX = Math.abs(thisX - othX);
    var difY = Math.abs(thisY - othY);
  
    var sum = Math.pow(difX, 2) + Math.pow(difY, 2);
    var distance = Math.sqrt(sum);
  
    return (distance <= (this.radius + otherObject.radius));
  };
  
  

})(this);











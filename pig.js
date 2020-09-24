class Pig extends BaseClass{
 constructor(xPos, yPos) {
  super(xPos,yPos,50,50);
  this.image = loadImage("sprites/enemy.png");
   this.visibility = 255
 }
  display() { 
    if (this.body.speed < 2.5) {
     super.display(); 
    }
    else {
      World.remove(world, this.body);
      push();
      tint(255,this.visibility);
      image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
      this.visibility = this.visibility - 5
      pop();
    }
  }
}
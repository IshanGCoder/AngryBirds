class Slingshot {
  constructor(bodyA,pointB) {
    var options ={
     bodyA: bodyA,
     pointB: pointB,
     length: 10,
     stiffness: 0.04
    }
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    this.sling1 = loadImage("sprites/sling1.png")
    this.sling2 = loadImage("sprites/sling2.png")
    this.sling3 = loadImage("sprites/sling3.png")
  }
   fly() {
    this.sling.bodyA = null 
   }
  attach(bodyA) {
   this.sling.bodyA = bodyA
  }
  display() {
   if (this.sling.bodyA) {
     var a = this.sling.bodyA.position;
     push()
    strokeWeight(15);
    stroke ("#301608");
    line(a.x-20,a.y,this.sling.pointB.x-10,this.sling.pointB.y);
    line(a.x+30,a.y,this.sling.pointB.x+30,this.sling.pointB.y-3);
    image(this.sling3,a.x-30,a.y-10,15,30);
     pop()
  }
   image(this.sling1,200,270);
   image(this.sling2,170,270);
  }
}
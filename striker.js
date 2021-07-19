class Striker
{
  constructor(x,y,radius)
 {
  var options=
  {
   isStatic:true,
   restitution:0.5,
   friction:0.2   
  }
  this.body=Bodies.circle(x,y,radius,options);
  this.radius=radius;
  this.image=loadImage("striker.png");
  World.add(world,this.body); 
 }
  display()
  {
   var angle = this.body.angle;
   push();
   translate(this.body.position.x, this.body.position.y);
   rotate(angle);
   imageMode(CENTER);
   ellipseMode(RADIUS);
   image(this.image, 0,0,this.radius*1.5,this.radius*1.5);
   pop();
  }
  

}
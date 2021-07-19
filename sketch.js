const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "onSling"; 
var bgImg;
var striker;


function preload()
{
 bgImg = loadImage("bg.png");
 strikerImg = loadImage("striker.png")


}
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  //striker=createSprite(400, 490, 50, 50);
  // striker.scale=0.09;
  // striker.addImage(strikerImg);

  striker=new Striker(400,490,20);

  slingShot1 = new SlingShot(striker.body,{x:400,y:490});

  
}

function draw() {

  Engine.update(engine);
  background(bgImg);
 
striker.display();
slingShot1.display();




}
// function keyPressed()
// {
//  if(keyCode===39)
//  {
  
//    Matter.Body.translate(striker.body,{x:0,y:5})
//    Matter.Body.setStatic(striker.body,false)
//  } 
 
//  if(keyCode===37)
//  {
 
//   Matter.Body.translate(striker.body,{x:0,y:-5})
//   Matter.Body.setStatic(striker.body,false)
//  } 
//  if(keyCode===32)
//  {
  
//   //Matter.Body.applyForce(striker.body,striker.body.position,{x:5,y:5})
//   Matter.Body.setStatic(striker.body,false)
// }   
// }

function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot1.fly();
}
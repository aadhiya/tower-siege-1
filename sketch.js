const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonimg;

function preLoad(){
  polygonimg=loadImage("polygon.png")
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
 polygon=Bodies.circle(50,200,20);
 World.add(world,polygon)
  

  ground1=new Ground(375,275,200,20);
  //bottom
  block1=new Block(300,275,30,40)
  block2=new Block(330,275,30,40)
  block3=new Block(360,275,30,40)
  block4=new Block(390,275,30,40)
  block5=new Block(420,275,30,40)
  block6=new Block(450,275,30,40)
  block7=new Block(480,275,30,40)
  //level two
  block8=new Block(330,235,30,40)
  block9=new Block(360,235,30,40)
  block10=new Block(390,235,30,40)
  block11=new Block(420,235,30,40)
  block12=new Block(450,235,30,40)
//level three
block13=new Block(360,195,30,40)
block14=new Block(390,195,30,40)
block15=new Block(420,195,30,40)
//top
block16=new Block(390,155,30,50)

slingshot=new Slingshot(this.polygon,{x:100,y:200}); 

}

function draw() {
  background(180);  
  Engine.update(engine);
 drawSprites();

  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();

  imageMode(CENTER)
  image(polygonimg,polygon.position.x,polygon.position.y,40,40)
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var ground,sling;
var hexagon;

function setup() {

	engine = Engine.create();
	world = engine.world;

  createCanvas(1200,800);
  box1=new Box(400,400,40,40);
  box2=new Box(400,400,40,40);
  box3=new Box(400,400,40,40);
  box4=new Box(400,400,40,40);
  box5=new Box(400,400,40,40);
  box6=new Box(400,400,40,40);
  box7=new Box(400,400,40,40);
  box8=new Box(400,400,40,40);
  box9=new Box(400,400,40,40);
  box10=new Box(400,400,40,40);
  box11=new Box(400,400,40,40);
  box12=new Box(400,400,40,40);
  box13=new Box(400,400,40,40);

  hexagon=Bodies.polygon(100,100,6,20);
  World.add(world,hexagon);

  ground=new Ground(900,650,100,10);

  sling= new SlingShot(hexagon.body,{x:100,y:100})

 // Engine.run(engine);

}

function draw() {

  Engine.update(engine);
  background(255,255,255);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  
  hexagon.display();

  sling.display();

  ground.display();
  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
  }



function mouseReleased(){
  sling.fly();
}
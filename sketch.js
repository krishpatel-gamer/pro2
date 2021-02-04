
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	box1 = new Box(500,383,140,17);
	box2 = new Box(578,322,17,140);
	box3 = new Box(430,322,17,140);
	paper1 = new Paper(300,320,30,30);
  
}


function draw() {
  
  background("blue");
  
  Engine.update(engine);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  keyPressed();
}

function keyPressed() {
	if (keycode === UP_ARROW) {

Matter.body.applyForce(paperObject.body,paperObject.body.position ,{x:85,y:-85});
	}
}


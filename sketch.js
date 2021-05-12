
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 590);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof(800, 50, 600, 40);
	bob1 = new Bob(560, 520, 100);
	bob2 = new Bob(680, 520, 100);
	bob3 = new Bob(800, 520, 100);
	bob4 = new Bob(920, 520, 100);
	bob5 = new Bob(1040, 520, 100);

	rope1 = new Rope(bob1.body, roof.body, -240, 0);
	rope2 = new Rope(bob2.body, roof.body, -120, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 120, 0);
	rope5 = new Rope(bob5.body, roof.body, 240, 0);

	
  
}


function draw() {
  rectMode(CENTER);
 background(255);
 Engine.update(engine);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
 
}

function keyPressed()
{
	 if(keyCode===UP_ARROW)
	{     
		Matter.Body.applyForce(bob1.body,{x:bob2.body.position.x,y:bob2.body.position.y},{x:-250,y:-250});
		
	}
}
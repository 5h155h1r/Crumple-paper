
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var wall1, wall2, wall3;
function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	paper = new Paper(200,100,40);
	ground = new Ground(600,height,1200,5);
	wall1 = new Log(600,670, 20, 100 );
	wall2 = new Log(520,670, 20, 100);
	wall3 = new Log(560, 690, 100, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85})
	}
}



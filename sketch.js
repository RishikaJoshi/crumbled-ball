
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function setup() {
	createCanvas(1000,650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,600,width,150);
	dustbinObj=new dustbin(800,550); 
	paper = new Paper(200,400);
	Engine.run(engine); 
  
}




function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paper.display();
  dustbinObj.display();
}
 
function keyPressed () {

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:135,y:-145}) 
	}
}

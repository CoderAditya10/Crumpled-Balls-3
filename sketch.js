const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject, thrower;	
var world;
var gameState;


function setup() {
	createCanvas(1250, 580);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,570,width,20);
	dustbinObj=new Dustbin(1100,550);
	thrower = new slingshot(paperObject.body, {x: 200, y: 200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
   
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  thrower.display();

}

function keyPressed() {
   if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-135});
  	}
}

function mouseDragged(){
	Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
	thrower.fly();
	gameState = "launched";
  }
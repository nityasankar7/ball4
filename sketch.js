
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var paper1;
var ground1;
//var dustbin40;

function preload()
{
//dustbin40=loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=new dustbin(500,650,200,20);
	dustbin2=new dustbin(400,610,20,100);
	dustbin3=new dustbin(600,610,20,100);
	paper1=new paper(100,600,20);
	ground1=new Ground(400,690,800,30)
	//dustbin40= createSprite(200,200,50,50);


	Engine.run(engine);
  
}


function draw() {
 
  background("black");
  
  drawSprites();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  ground1.display();

}
function keyPressed(){
if(keyCode=== UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-55})
}

}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var D1,D2,D3;


function preload(){
	dustbinImage=loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	ground=new GROUND(400,590,800,20);
	paper=new PAPERCLASS(200,200,50);
	D1=new DUSTBIN(600,570,200,20)
	D2=new DUSTBIN(500,530,20,100);
	D3=new DUSTBIN(700,530,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	background("lightgreen");

  paper.display();
  ground.display();
  fill("black");
  D1.display();
  D2.display();
  D3.display();
  drawSprites();
	imageMode(CENTER);
  image(dustbinImage,600,500,250,200);
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-350})
	}
}




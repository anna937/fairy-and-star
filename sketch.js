var fairy , fairyIMG, star, starIMG
var starBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	fairyIMG=loadImage("fairy.png")
	starIMG=loadImage("star.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	fairy=createSprite(120, 80, 10,10);
	fairy.addImage(fairyIMG)
	fairy .scale=0.2

	star=createSprite(width/2, 200, 10,10);
	star.addImage(starIMG)
	star.scale=0.6

	
	engine = Engine.create();
	world = engine.world;

	star= Bodies.star(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, starBody);
	

	//Create a Ground
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.mouseY=World.mouseY
  drawSprites();
 
}


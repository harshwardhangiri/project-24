var ground,ball1,squ1,squ2,squ3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	squ1Sprite=createSprite(1150,460,200,20);
	squ1Sprite.shapeColor=color(255, 48, 48)	
	squ2Sprite=createSprite(1240,420,20,60);
	squ2Sprite.shapeColor=color(255, 48, 48)	
	squ3Sprite=createSprite(1060,420,20,60);
	squ3Sprite.shapeColor=color(255, 48, 48)	
	
	groundSprite=createSprite(width/2,480,8000,20);
	groundSprite.shapeColor=color(100, 255, 33)	
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,480,1400,20);
    ball1 = new Ball(100,150);
	box1 = new Box(1150,460,200,20);
	box2 = new Box(1240,420,20,60);
	box3 = new Box(1060,420,20,60);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
 keypressed();
  ground.display();
  ball1.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keypressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:-40});
}




if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:40});
}


if(keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:30,y:0});
}
if(keyCode === LEFT_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-30,y:0});
}

}



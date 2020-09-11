
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ball,b2,b3,b4,b5;
var g;
var c1,c2,c3,c4,c5,c6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	g=new base(370,250,450,20);
	 ball=new bx(200,500,50);
	 b2=new bx(275,500,50);
	 b3=new bx(350,500,50);
	 b4=new bx(430,500,50);
	 b5=new bx(500,500,50);

  c1=new Chain(ball.body,{x:200,y:250});
  c2=new Chain(b2.body,{x:275,y:250});
  c3=new Chain(b3.body,{x:350,y:250});
  c4=new Chain(b4.body,{x:430,y:250});
  c5=new Chain(b5.body,{x:500,y:250});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(206, 98, 252);
  Engine.update(engine);
  ball.display();
  g.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x : -85,y:-10})	
  }}
  




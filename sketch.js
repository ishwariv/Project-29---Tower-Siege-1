//Physics Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,polygon1;
var stand1;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var sling;
var engine,world;

function preload(){
  polygonImg=loadImage("sprites/polygon.png");
}

function setup(){
  createCanvas(900,400);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(450,380,900,30);
  stand1 = new Ground(450,270,260,10);

  b1 = new Block(360,245,30,40);
  b2 = new Block(390,245,30,40);
  b3 = new Block(420,245,30,40);
  b4 = new Block(450,245,30,40);
  b5 = new Block(480,245,30,40);
  b6 = new Block(510,245,30,40);
  b7 = new Block(540,245,30,40);

  b8 = new Block(390,205,30,40);
  b9 = new Block(420,205,30,40);
  b10 = new Block(450,205,30,40);
  b11 = new Block(480,205,30,40);
  b12 = new Block(510,205,30,40);

  b13 = new Block(420,165,30,40);
  b14 = new Block(450,165,30,40);
  b15 = new Block(480,165,30,40);

  b16 = new Block(450,125,30,40);

  polygon1 = Bodies.circle(100,250,25);
  World.add(world,polygon1);

  sling = new SlingShot(this.polygon1,{x:100,y:250});

  Engine.run(engine);
}

function draw(){
  Engine.update(engine);
  background(0);
  ground.display();
  stand1.display();
  
  push();
  fill(173,216,230);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  pop();
  
  push();
  fill(173,156,250);
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  pop();
  
  push();
  fill(133,156,250);
  b13.display();
  b14.display();
  b15.display();
  pop();
  
  push();
  fill('purple');
  b16.display();
  pop();

  imageMode(CENTER);
  image(polygonImg ,polygon1.position.x,polygon1.position.y,40,40);
  
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon1,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}
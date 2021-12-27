
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bloco1, bloco2, bloco3;
var solo;
var solo_options, bloco_options;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	solo_options = {
	isStatic: true
	}
	bloco_options = {
	restitution:0.7,
	
	}

	bloco1 = Bodies.circle(400, 350, 30, bloco_options);
	World.add(world,bloco1);
	bloco2 = Bodies.rectangle(200, 200, 60, 60, bloco_options);
	World.add(world,bloco2);
	bloco3 = Bodies.rectangle(600, 450, 100, 60, bloco_options);
	World.add(world,bloco3);
	solo = Bodies.rectangle(600, 580, 1200, 10, solo_options);
	World.add(world,solo);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(bloco1.position.x, bloco1.position.y, 30);
  rect(bloco2.position.x, bloco2.position.y, 60, 60);
  rect(bloco3.position.x, bloco3.position.y, 100, 60);
  rect(solo.position.x, solo.position.y, 1200, 10);

  drawSprites();
 
}




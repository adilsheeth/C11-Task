
var trex ,trex_running;
var ground, groundAni;
function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundAni = loadAnimation("ground2.png");
}

function setup(){
  createCanvas(600,400)
  
  edges = createEdgeSprites();

  trex = createSprite(50,350,50,50);
  trex.addAnimation("running",trex_running);
  trex.scale =0.5;
  ground = createSprite(0,380,600,20);
  ground.addAnimation("ground",groundAni);
 
}

function draw(){
  background("lightgrey")

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 1;

  trex.collide(ground);

  
  drawSprites();

}

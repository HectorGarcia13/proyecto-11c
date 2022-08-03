var sea, seaImage, invisibleSea;
var ship, shipAnimation;

function preload(){
seaImage = loadImage("sea.png");
shipAnimation = loadAnimation("ship-1.png","ship-1.png", "ship-2.png","ship-1.png");

}

function setup(){
  createCanvas(400,400);

background("blue");

sea = createSprite(200,200,40,40);
sea.addImage("sea",seaImage );
sea.scale=1;
sea.x = sea.width /2;
sea.velocityX=-4;

ship = createSprite(100,300,30,30);
ship.addAnimation("movingShip", shipAnimation);
ship.scale=0.25;



}

function draw() {
  background("blue");
if(sea.x < 0){
sea.x = sea.width /2;
}

 drawSprites();
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var snow = [];
var maxSnow = 100;
var bg
var body,boyImg;
function preload(){
  boyImg =loadImage("boy.jpeg");
  bg =loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;

}
function draw() {
  background(bg);

  Engine.update(engine);
  boy=createSprite(200,300,20,20);
  boy.addImage(boyImg);
  if(keyDown(RIGHT_ARROW)){
boy.velocityX=boy.velocityX+3;
  }  
  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-3;
      }  
      for(var i = 0; i < maxSnow; i++){
        snow.push(new createSnow(random(0,500), random(0,500)));
     }
  for(var i = 0; i < maxSnow; i++){
    snow[i].display();
    snow[i].update();
}

  drawSprites();
}
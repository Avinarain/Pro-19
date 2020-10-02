var bananaImage
var obstacleImage
var obstacleGroup
var background
var score
var invisibleGround
var monkey

function preload(){
  backImg=loadImage("jungle.jpg");
  player_running=loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png")
  
 bananaImage=loadImage("banana.png") 
 obstacleImage=loadImage("stone.png") 
}


function setup() {
  createCanvas(400, 400);
  background = createSprite(200,200,400,400)
  background = addImage("bg",backImg)
  background.x = ground.width /2;
  background.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  monkey.addAnimation("monkey",player_running)
}

function draw() {
  background(220);
  if (background.x < 0){
    background.x = background.width/2;
  }
}

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground


var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,600);
  var survialTime=0;
  monkey=createSprite(85,315,20,20);
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,800,10)
  ground.velocity=-4;
  ground.x=ground.width/2
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  score=0;

  
}


function draw() {
 background(255);
  if(ground.x<0){
    ground.x=ground.width/2  
  }
  if(keyDown("space"))
}







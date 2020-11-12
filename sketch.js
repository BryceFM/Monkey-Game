var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x)
}


function draw() {
  background("white");

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + survivalTime, 100,50);
  
  if (keyDown("space")) {
      monkey.velocityY = -10;
      
      }
  monkey.velocityY = monkey.velocityY + 0.8
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
  drawSprites();
}

function bananas() {
  //write code here to spawn the bananas
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
        
    //add each banana to the group
    FoodGroup.add(bananaloud);
  }
}

function spawnObstacles(){
 if (frameCount % 300  === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage(obstacleImage);  
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

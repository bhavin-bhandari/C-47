var player ,player1 , player2 , player3 , player_running;
var obstacle1 , obstacle2;
var obstacle01 , obstacle02 ; 
var ball, ballImg;
var background , backImg ;
var obstaclesGroup; 
var score=0;

function preload (){
obstacle01 = loadImage("../images/cube.jpeg");
obstacle02 = loadImage("../images/dash.jpeg");
backImg= loadImage("../images/Background.jpeg");
ballImg=loadImage("../images/balls.jpeg");
player_running=loadAnimation("player1.jpg","player2.jpg","player3.jpg");
}
function setup() {
  createCanvas(1535,730);
  

player= createSprite(200,200,10,10);
player.addAnimation('running' , player_running);
player.scale=0.5;

edges=createEdgeSprites();

obstaclesGroup=createGroup();


}

function draw() {
  background( backImg);  
  text("SCORE:" + score,100,100);
  

  if(keyDown("space")&& player.y>=300){
    player.velocityY=-25;
  }
  player.velocityY=player.velocityY+0.8;
  
player.collide(edges[3]);

  spawnObstacles();
  score=score+Math.round(frameCount/150);
  drawSprites();

  if(obstaclesGroup.isTouching(player)){
    text("You Lost The Game",700,350);
    textSize(100);
    obstaclesGroup.setVelocityXEach(0);
    //obstaclesGroup.visible=false;
    player.velocityY=0;
  }
}

function spawnObstacles(){
if (frameCount%150===0){
  var obstacle= createSprite(1100,630,10,10); 
obstacle.velocityX=-5;
 var rand = Math.round(random(1,3));
 switch(rand){
case 1: obstacle.addImage(obstacle01);
break;
case 2: obstacle.addImage(obstacle02);
break;
case 3: obstacle.addImage(ballImg);
break;
default:break;
 }
 obstacle.scale=1;
 obstaclesGroup.add(obstacle);
  }

}



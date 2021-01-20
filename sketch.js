let flappy,flappyImage;
let board1;
let board2,boardGroup;
let box;
let ground;
let score=0;
let highscore=0;
let gameState="waiting";

function preload(){
  flappyImage= loadImage("Flappy.png")
}
  function setup(){
  createCanvas(600,600)
  flappy= createSprite(100,300,20,20)
  flappy.shapeColor="red";
    flappy.addImage(flappyImage)
    flappy.scale=0.12
    //flappy.debug=true
    flappy.setCollider("circle",0,0,190)
 boardGroup= new Group();
  ground=createSprite(100,590,1900,20)
  ground.shapeColor="green";
  // play= createButton("play","green")
}

function draw(){
  background("skyblue");
  if(gameState==="waiting"){
  
   stroke("yellow")
    textSize(20)
    fill("yellow")
  text("Touch To Fly",250,300)
    if(mouseIsPressed&& gameState==="waiting"){
      gameState="play"
    }
  }
  if(gameState==="play"){
  if(mouseIsPressed){
    flappy.velocityY=-6;
  } 
  
    score+=0.3
    if(flappy.isTouching(boardGroup)){
      gameState="end"
    }
  
  flappy.velocityY+=0.8;
  flappy.collide(ground);
  Rest();
  }
  if(gameState==="end"){
    background(0)
    flappy.visible=false;
    stroke("yellow")
    noFill()
    textSize(60)
    text("GAME OVER!!!!",100,100)
    text("PRESS SPACE TO" +"\n" +"RESTART",0,300)
    boardGroup.destroyEach()
    if(keyDown("space")){
      redo()
      score=0;
  gameState="waiting"
  flappy.visible=true;
      flappy.y=300;
      flappy.velocityY=0;
      
    }
  }
  drawSprites();
  //nsole.log(boardGroup.length)
  textSize(20)
  stroke(50,73,06)
  fill(50,73,06)
  text("Score: "+Math.round(score),30,40)
  
  
}

function Rest(){
  if(frameCount%60===0){
  board1= createSprite(600,30,30,random(160,370))
  board2= createSprite(board1.x,board1.y+560,30,random(360,670))
  board1.velocityX=-10
    board2.velocityX=-10
    board2.shapeColor="black"
     board1.shapeColor="black"
    boardGroup.add(board1);
     boardGroup.add(board2);
    board1.lifetime=255;
    board2.lifetime=255;
    
  }
}

function redo(){
   
 
}
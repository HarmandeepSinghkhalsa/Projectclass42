var bcg, bird, bee, insect, stone, turtle, robo, man, mario,mj,ground_run,win;
var bcgImage, birdImage, insectImage, stoneImage, turtleImage, roboImage, manImage, humanImage, winImage, gameOverImage,restartImage,flagImage,beeImage;
var gameState = "play";
var survivalTime=0;
var rs, gameOver;
var obstacleGroup;
var flag;
var stoneGroup,beeGroup;

function preload()
{

    beeImage=loadImage("beeimage.jpg");
    //flagImage=loadImage("mariowin.jpg");
    restartImage=loadImage("resetbuttonimage.jpg");
    gameOverImage=loadImage("gameoverimage.jpg");
    humanImage=loadImage("mariostandingimage.png");
    //mj=loadImage("mariojumpingimage.png");
    stoneImage=loadImage("stoneImage.jpg");
    bcgImage=loadImage("backgroundimage.jpg");
  
}

function setup() 
{
  
    createCanvas(windowWidth,windowHeight); 

    bcg = createSprite(0,0,width,height);
    bcg.addImage("back",bcgImage);
    bcg.scale =4;
    bcg.velocityX = -4;

    mario = createSprite(30,400,10,10);
    mario.addImage("move",humanImage);
    mario.scale =0.5;
    mario.velocityX = 0.5;

    ground_run = createSprite(40,450,width,height-20);
    ground_run.visible = false;

   /* win = createSprite(width/2,height/2,10,10);
    win.addImage("happy",winImage);
    win.scale=0.5;
    win.visible = false;*/

    gameOver=createSprite(width/2,height/2);
    gameOver.addImage("over",gameOverImage);
    gameOver.scale=0.8;
    gameOver.visible = false;

    rs=createSprite(width/2,height/2);
    rs.addImage("reset",restartImage);
    rs.scale=1;
    rs.visible = false;

    stoneGroup = new Group();
    beeGroup = new Group();
  
}

function draw() 
{
  
  background("black");
  stroke("green");
  strokeWeight(3);
  fill("yellow")
  //textFont("Courier New",30,80);
  textSize(22);
  text("Mario's Survival Time:"+ survivalTime,50,80);
  
  if(gameState === "play")
     {       
       //spawnBird();
       //spawnRobot();
       spawnBees();
       //spawnTurtle();
       //spawnInsect();
       spawnStones();   
       
     survivalTime = survivalTime + 1; 
       
     if (bcg.x < 0)
        {
         bcg.x = bcg.width/2; 
        }
       
     if(keyDown("space"))
       {
         mario.velocityY = -10;
         //mario.changeImage("move",mj) ;           
       }
       
       mario.velocityY = mario.velocityY + 0.8; 
       
  if(obstacleGroup.isTouching(mario))
      {
        gameState = "end";
      }
    if(touches.length > 0 || keyDown ("space") && mario.velocityY >= -10)
    
     {
        mario.velocityY = -10;
        mario.velocityY = mario.velocityY + 0.8
        touches = [];
     }     
     }
  
  if(gameState === "end")
     {
              bcg.velocityX = 0;
              obstacleGroup.setLifetimeEach(0);
              mario.velocityX= 0;
              rs.visible = true;
              gameOver.visible = true;
            }
  
  if(mousePressedOver(rs) && gameState === "end") 
           {
            gameState = "play";
            gameOver.visible = false;
            rs.visible = false;
            win.visible = false;
            bcg.velocityX = -4;
            survivalTime=0;
           }
  
  mario.collide(ground_run);
  drawSprites();
  
}

/*function spawnBird()
{
  
  if(frameCount % 150 === 0)
    {
      bird = createSprite(300,200,10,10);
      bird.addImage("fly",birdImage);
      bird.scale =0.06;
      bird.velocityX = -2;
      bird.lifetime = 150;
      obstacleGroup.add(bird);
    }
  
}*/

/*function spawnRobot()
{
  if(frameCount % 270 === 0)
    {    
      robo = createSprite(440,450,10,10);
      robo.addImage("machine",roboImage);
      robo.scale =0.2;
      robo.collide(ground_run);
      robo.velocityX = -2;
      robo.lifetime = 200;
      obstacleGroup.add(robo);
    }
}*/

function spawnBees()
{
  if(frameCount % 600 === 0)
  {
    bee = createSprite(440,400,10,10);
    bee.addImage("bees",beeImage);
    bee.scale =0.3;
    bee.velocityX = -2;
    bee.lifetime = 150;
    beeGroup.add(bee);
  }
}

/*function spawnTurtle()
{
   if(frameCount % 250 == 0)
      {
        turtle = createSprite(550,450,10,10);
        turtle.addImage("snail",turtleImage);
        turtle.scale =0.03;
        turtle.collide(ground_run);
        turtle.velocityX = -2;
        turtle.lifetime = 150;
        obstacleGroup.add(turtle);
      }
}*/

/*function spawnInsect()
{
   if(frameCount % 600 == 0)
    {
      insect = createSprite(500,450,10,10);
      insect.addImage("bee",insectImage);
      insect.scale =0.04;
      insect.collide(ground_run);
      insect.velocityX = -2;
      insect.lifetime = 200;
      obstacleGroup.add(insect);
    }
}*/

function spawnStones()
 {
   if(frameCount % 720 === 0)
    {
      stone = createSprite(400,450,10,10);
      stone.addImage("stones",stoneImage);
      stone.scale = 0.1;
      stone.collide(ground_run);
      stone.velocityX = -2;
      stone.lifetime = 200;
      stoneGroup.add(stone);
    }
 }

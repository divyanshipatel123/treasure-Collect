//change - added one more treasure in the game THE RUBY 

var path,boy,cash,diamonds,jwellery,sword,ruby;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,endImg,rubyImg;
var gameState='play';
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,rubyG;
var gameOver
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  rubyImg = loadImage("ruby.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.debug=true;
boy.setCollider('circle',0,30,200);
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
rubyG=new Group();

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();

  if(gameState==='play') {
 
   boy.collide(edges);
  
   //code to reset the background
   if(path.y > 400 ){
     path.y = height/2; 
    }
  
   // create the sword and treasue only in play state
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createRuby();

    // if boy touches nay treasure score will increase  
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+10;
    }

     if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+20;
   }
      
     if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+30;
    }
     if(rubyG.isTouching(boy)) {
      rubyG.destroyEach();
      treasureCollection=treasureCollection+50
   }
  
    // if boy touches the sword gameState should be over
    if(swordGroup.isTouching(boy)) {
      swordGroup.destroyEach();
      gameState='over';
    }
  }
  
  // if the gamestate is over every thing should disappear     and path should stop and gameOver sign should appear 
 if(gameState==='over'){
    //path will stop moving
    path.velocityY=0;
    // characters will be destroyed
    boy.destroy();
    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    swordGroup.destroyEach();
    rubyG.destroyEach();
      
   // gameover sign will appear
   gameOver=createSprite(200,200,20,20);
   gameOver.addAnimation('gameover',endImg);
  }
  

 drawSprites();
 textSize(20);
 fill('black');
 text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
 if (World.frameCount % 100 == 0) {
   var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
   cash.addImage(cashImg);
   cash.scale=0.12;
   cash.velocityY = 3;
   cash.lifetime = 150;
   cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 150 == 0) {
   var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
   diamonds.addImage(diamondsImg);
   diamonds.scale=0.03;
   diamonds.velocityY = 3;
   diamonds.lifetime = 150;
   diamondsG.add(diamonds);
  }
}

function createJwellery() {
  if (World.frameCount % 200 == 0) {
   var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
   jwellery.addImage(jwelleryImg);
   jwellery.scale=0.13;
   jwellery.velocityY = 3;
   jwellery.lifetime = 150;
   jwelleryG.add(jwellery);
  }
}
function createRuby() {
  if (World.frameCount % 300 == 0) {
   var ruby = createSprite(Math.round(random(50, 350),40, 10, 10));
   ruby.addImage(rubyImg);
   ruby.scale=0.08;
   ruby.velocityY = 3;
   ruby.lifetime = 150;
   rubyG.add(ruby);
  }
}
 
function createSword(){
  if (World.frameCount % 90 == 0) {
   var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
   sword.addImage(swordImg);
   sword.scale=0.1;
   sword.velocityY = 3;
   sword.lifetime = 150;
   swordGroup.add(sword);
  }
}
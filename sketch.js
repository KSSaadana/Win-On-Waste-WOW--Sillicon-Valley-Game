var gameState="serve";
var garbage1, garbage2, garbage3, garbage4, g1Img, g2Img, g3Img, g4Img, garbageGroup1, garbageGroup2, garbageGroup3, garbageGroup4;
var ground;
var o1, o2, o3, o4;
var sButton, pButton1, pButton2, sbImg, pbImg; 
var b1, b2, b3, b4;
var b1Img, b2Img, b3Img, b4Img;
var homeButton, hbImg;
var reusableMaterials, reusableGroup, nonReusableMaterials, nonReusableGroup;
var rm1Img, rm2Img, nrm1Img, nrm2Img;
var happy_earth, happy_earthImg;
var clickSound, correctSound, wrongSound, cheerSound;
var score=0;
var score2=0;

//To load all the images
function preload(){
  g1Img= loadImage("images/paperImg.png");
  g2Img= loadImage("images/plastic-bag.png");
  g3Img= loadImage("images/glass.png");
  g4Img= loadImage("images/metal.png");
  sbImg= loadImage("images/simulation.png");
  pbImg= loadImage("images/play.png");
  b1Img=loadImage("images/bin1.png");
  b2Img=loadImage("images/bin2.png");
  b3Img=loadImage("images/bin3.png");
  b4Img=loadImage("images/bin4.png");
  hbImg=loadImage("images/homeButton.png");
  rm1Img=loadImage("images/can.png");
  rm2Img=loadImage("images/cardboard.png");
  nrm1Img=loadImage("images/paper plate.png");
  nrm2Img=loadImage("images/syringe.png");
  happy_earthImg=loadImage("images/happyEarth.jpg")
  clickSound = loadSound("sound/openSound.mp3");
  correctSound = loadSound("sound/right_answer.mp3");
  wrongSound = loadSound("sound/wrong_Sound.wav");
  cheerSound = loadSound("sound/cheerSound.wav");
}
//To create sprites objects and groups
function setup(){
  createCanvas(900,670);


b1=createSprite(117.5, 500);
b1.addImage(b1Img);
b1.scale=1.2;

b2=createSprite(340, 495);
b2.addImage(b2Img);
b2.scale=1.2;
b3=createSprite(560, 500);
b3.addImage(b3Img);
b3.scale=1.2;
b4=createSprite(782.5, 500);
b4.addImage(b4Img);
b4.scale=1.2;

o1=createSprite(117.5, 370, 200, 15);
o1.shapeColor="blue";
o2=createSprite(340, 370, 200, 15);
o2.shapeColor="orange";
o3=createSprite(560, 370, 200, 15);
o3.shapeColor="green";
o4=createSprite(782.5, 370, 200, 15);
o4.shapeColor="red";
 
sButton=createSprite(250, 500);
sButton.addImage(sbImg);
sButton.scale=0.3;


pButton1=createSprite(650, 500);
pButton1.addImage(pbImg);
pButton1.scale=0.3;

pButton2=createSprite(-650, 500);
pButton2.addImage(pbImg);
pButton2.scale=0.3;

homeButton=createSprite(750,35);
homeButton.addImage(hbImg);
homeButton.scale=0.4;

happy_earth=createSprite(-100,500);
happy_earth.addImage(happy_earthImg);
happy_earth.scale=1;
happy_earth.visible=false;

garbageGroup1= new Group();
garbageGroup2= new Group();
garbageGroup3= new Group();
garbageGroup4= new Group();
reusableGroup= new Group();
nonReusableGroup= new Group();
}

function draw(){
  background("white");
  if(mousePressedOver(sButton)){
    clickSound.play();
    gameState="simulation";
  }
  if(mousePressedOver(pButton1)){
    clickSound.play();
    gameState="play";
  }
  if(mousePressedOver(homeButton)){
    clickSound.play();
    gameState="serve";
  }
  if(mousePressedOver(pButton2)){
    clickSound.play();
    gameState="level2";
    }
    //serve state
if(gameState==="serve"){
  fill("green");
  textSize(23);
  text("Hello there,",50,100);
  fill("blue");
  textSize(17);
  text("After you play this game you will become more responsible.",50,130);
  text("You might wonder 'how?'. Yes, we are going to see ways to reduce the trash going to landfills.",50,155);
  text("You might know that the pollution levels are increasing.",50,180);
  text("If we are able to reduce the amount of waste going to landfills we will be able to succeed on this issue.",50,205);
  fill("red");
  text("Now, we will see the instructions.",50, 235);
  text("1st level: You have to segregate the waste with the 4 basic segregation(Paper, plastic, glass and metal)",50,260);
  text("In simulation, if u click the trash it will automatically fall inside the right dustbin.", 85,285)
  text("In the real game, you have to click on the trash and it will fall into the dustbin which is just at the bottom.", 85, 310)
  text("If it is right then you get a point.", 85, 335);
  text("2nd level: You have to catch the reusable materials in the bin(to move the bin use arrow keys) to score points.", 50, 360);
  text("If you collect the non-reusable materials you lose a point.", 85, 385);
  fill("orange");
  text("Let's start with the 1st level! Click on simulate button to understand the game and play button to start the game.",50,410);

o1.visible=false;
o2.visible=false;
o3.visible=false;
o4.visible=false;
b1.visible=false;
b2.visible=false;
b3.visible=false;
b4.visible=false;


garbageGroup1.destroyEach();
garbageGroup2.destroyEach();
garbageGroup3.destroyEach();
garbageGroup4.destroyEach();
reusableGroup.destroyEach();
nonReusableGroup.destroyEach();
score=0;
score2=0;
sButton.x=250;
sButton.visible=true;
pButton1.x=650;
pButton1.visible=true;
pButton2.x=-650;
pButton2.visible=false;
happy_earth.visible=false;
  o1.width=230;
  o1.height=15;
  o1.x=117.5;
  o1.y=370;

  o2.width=230;
  o2.height=15;
  o2.x=340;
  o2.y=370;

  o3.width=230;
  o3.height=15;
  o3.x=560;
  o3.y=370;

  o4.width=230;
  o4.height=15;
  o4.x=782.5;
  o4.y=370;
b1.x=117.5;

}
//Simulation level
if(gameState==="simulation"){

  fill("blue");
  text("Click on home to reach the main page/start from 1st.", 610, 80);
  sButton.x=-100;
  sButton.visible=false;
  pButton1.x=-100;
  pButton1.visible=false;
  pButton2.visible=false;

  o1.visible=true;
  o2.visible=true;
  o3.visible=true;
  o4.visible=true;
  b1.visible=true;
  b2.visible=true;
  b3.visible=true;
  b4.visible=true;
//To create garbage
if (frameCount % 200 === 0) {
  garbage1 = createSprite(random(0, 100),random(50, 150) , 0, 100, 100);
  garbage1.velocityX = 3;
garbage1.addImage(g1Img)
garbage1.scale=0.5;

  garbageGroup1.add(garbage1);

}

//To create garbage
if (frameCount % 100 === 0) {
  garbage2 = createSprite(random(0, 100),random(200, 300) , 0, 100, 100);
  garbage2.velocityX = 3;
garbage2.addImage(g2Img);
garbage2.scale=0.2;

  garbageGroup2.add(garbage2);

  
}

//To create garbage
if (frameCount % 400 === 0) {
  garbage3 = createSprite(random(0, 100),random(100, 200) , 0, 100, 100);
  garbage3.velocityX = 3;
   garbage3.addImage(g3Img);
      garbage3.scale=0.2;

  garbageGroup3.add(garbage3);

  
}

//To create garbage
if (frameCount % 300 === 0) {
  garbage4 = createSprite(random(0, 100),random(150, 250) , 0, 100, 100);
  garbage4.velocityX = 3;
 garbage4.addImage(g4Img);
garbage4.scale=0.2;

  garbageGroup4.add(garbage4);

  
}
textSize(20);
text("Paper", 90,630);
text("Plastic", 310,630);
text("Glass", 540,630);
text("Metal", 770,630);
// To open the lid and play the click sound when the garbage is segregated properly.
      if(mousePressedOver(garbage1)){
        clickSound.play();
        o1.width=15;
        o1.height=180;
        o1.x=230;
        o1.y=300;
        garbage1.x=120;
        garbage1.velocityX=0;
        garbage1.velocityY=3;
      }
      if(o1.width===15 && o1.height===180 && o1.x===230 && o1.y===300){
        text("Paper disposed properly.", width-580, 45);
      }

      if(mousePressedOver(garbage2)){
        clickSound.play();
        o2.width=15;
        o2.height=180;
        o2.x=450;
        o2.y=300;
        garbage2.x=340;
        garbage2.velocityX=0;
        garbage2.velocityY=3;
      }
      if(o2.width===15 && o2.height===180 && o2.x===450 && o2.y===300){
        text("Plastic disposed properly.", width-580, 65);
      }

      if(mousePressedOver(garbage3)){
        clickSound.play();
        o3.width=15;
        o3.height=180;
        o3.x=670;
        o3.y=300;
        garbage3.x=560;
        garbage3.velocityX=0;
        garbage3.velocityY=3;
      }
      if(o3.width===15 && o3.height===180 && o3.x===670 && o3.y===300){
        text("Glass disposed properly.", width-580, 85);
      }

      if(mousePressedOver(garbage4)){
        clickSound.play();
        o4.width=15;
        o4.height=180;
        o4.x=890;
        o4.y=300;
        garbage4.x=780;
        garbage4.velocityX=0;
        garbage4.velocityY=3;
      }
      if(o4.width===15 && o4.height===180 && o4.x===890 && o4.y===300){
        text("Metal disposed properly.", width-580, 105);
      }

// To close the lid and play the correct sound when the garbage is segregated properly.
      if(garbageGroup1.isTouching(b1)){
        correctSound.play();
        o1.width=230;
        o1.height=15;
        o1.x=117.5;
        o1.y=370;
        score+=1;
        garbageGroup1.destroyEach();
      }
      if(garbageGroup2.isTouching(b2)){
        correctSound.play();
        o2.width=230;
        o2.height=15;
        o2.x=340;
        o2.y=370;
        score+=1;
        garbageGroup2.destroyEach();
      }
      if(garbageGroup3.isTouching(b3)){
        correctSound.play();
        o3.width=230;
        o3.height=15;
        o3.x=560;
        o3.y=370;
        score+=1;
        garbageGroup3.destroyEach();
      }
      if(garbageGroup4.isTouching(b4)){
        correctSound.play();
        o4.width=230;
        o4.height=15;
        o4.x=782.5;
        o4.y=370;
        score+=1;
        garbageGroup4.destroyEach();
      }
}

// Real game
if(gameState==="play"){
  fill("blue");
  text("Click on home to reach the main page/start from 1st.", 610, 80);
textSize(20);
fill("red");
  text("Score: "+score , width-680 , 45);
sButton.x=-100;
sButton.visible=false;
pButton1.x=-100;
pButton1.visible=false;
pButton2.x=-650;
pButton2.visible=false;

o1.visible=true;
o2.visible=true;
o3.visible=true;
o4.visible=true;
b1.visible=true;
b2.visible=true;
b3.visible=true;
b4.visible=true;
//To create garbage
if (frameCount % 200 === 0) {
  garbage1 = createSprite(random(0, 100),random(50, 150) , 0, 100, 100);
  garbage1.velocityX = 3;
garbage1.addImage(g1Img)
garbage1.scale=0.5;

  garbageGroup1.add(garbage1);

  
}

//To create garbage
if (frameCount % 100 === 0) {
  garbage2 = createSprite(random(0, 100),random(200, 300) , 0, 100, 100);
  garbage2.velocityX = 3;
garbage2.addImage(g2Img);
garbage2.scale=0.2;

  garbageGroup2.add(garbage2);

  
}

//To create garbage
if (frameCount % 400 === 0) {
  garbage3 = createSprite(random(0, 100),random(100, 200) , 0, 100, 100);
  garbage3.velocityX = 3;
   garbage3.addImage(g3Img);
      garbage3.scale=0.2;

  garbageGroup3.add(garbage3);

  
}

//To create garbage
if (frameCount % 300 === 0) {
  garbage4 = createSprite(random(0, 100),random(150, 250) , 0, 100, 100);
  garbage4.velocityX = 3;
 garbage4.addImage(g4Img);
garbage4.scale=0.2;

  garbageGroup4.add(garbage4);

  
}
if(score>=0 && score<15){
textSize(20);
text("Paper", 90,630);
text("Plastic", 310,630);
text("Glass", 540,630);
text("Metal", 770,630);
}
// To open the lid and play the click sound when the garbage is segregated properly.
      if(mousePressedOver(garbage1) && garbage1.x>25 && garbage1.x<215){
        clickSound.play();
        o1.width=15;
        o1.height=180;
        o1.x=230;
        o1.y=300;
        garbage1.velocityX=0;
        garbage1.velocityY=3;
      }
      else if(mousePressedOver(garbage1)){
        text("Wrong, Try again!", width-580,45);
        wrongSound.play();
      }
      if(o1.width===15 && o1.height===180 && o1.x===230 && o1.y===300){
        text("Paper disposed properly.", width-580, 45);
      }


      if(mousePressedOver(garbage2) && garbage2.x>245 && garbage2.x<435){
        clickSound.play();
        o2.width=15;
        o2.height=180;
        o2.x=450;
        o2.y=300;
        garbage2.velocityX=0;
        garbage2.velocityY=3;
      }
      else if(mousePressedOver(garbage2)){
        text("Wrong, Try again!", width-580,65);
        wrongSound.play();
      }
      if(o2.width===15 && o2.height===180 && o2.x===450 && o2.y===300){
        text("Plastic disposed properly.", width-580, 65);
      }


      if(mousePressedOver(garbage3) && garbage3.x>465 && garbage3.x<655){
        clickSound.play();
        o3.width=15;
        o3.height=180;
        o3.x=670;
        o3.y=300;
        garbage3.velocityX=0;
    garbage3.velocityY=3;
      }
      else if(mousePressedOver(garbage3)){
        text("Wrong, Try again!", width-580,85);
        wrongSound.play();
      }
      if(o3.width===15 && o3.height===180 && o3.x===670 && o3.y===300){
        text("Glass disposed properly.", width-580, 85);
      }


      if(mousePressedOver(garbage4) && garbage4.x>685 && garbage4.x<875){
        clickSound.play();
        o4.width=15;
        o4.height=180;
        o4.x=890;
        o4.y=300;
        garbage4.velocityX=0;
        garbage4.velocityY=3;
      }
      else if(mousePressedOver(garbage4)){
        text("Wrong, Try again!", width-580,105);
        wrongSound.play();
      }
      if(o4.width===15 && o4.height===180 && o4.x===890 && o4.y===300){
        text("Metal disposed properly.", width-580, 105);
      }

// To close the lid and play the correct sound when the garbage is segregated properly.
      if(garbageGroup1.isTouching(b1)){
        correctSound.play();
        o1.width=230;
        o1.height=15;
        o1.x=117.5;
        o1.y=370;
        score+=1;
        garbageGroup1.destroyEach();
      }
      if(garbageGroup2.isTouching(b2)){
        correctSound.play();
        o2.width=230;
        o2.height=15;
        o2.x=340;
        o2.y=370;
        score+=1;
        garbageGroup2.destroyEach();
      }
      if(garbageGroup3.isTouching(b3)){
        correctSound.play();
        o3.width=230;
        o3.height=15;
        o3.x=560;
        o3.y=370;
        score+=1;
        garbageGroup3.destroyEach();
      }
      if(garbageGroup4.isTouching(b4)){
        correctSound.play();
        o4.width=230;
        o4.height=15;
        o4.x=782.5;
        o4.y=370;
        score+=1;
        garbageGroup4.destroyEach();
      }

//When the score equals 15, the message should be displayed and a play button should be created to play 2nd level.
if(score===15){
garbageGroup1.destroyEach();
garbageGroup2.destroyEach();
garbageGroup3.destroyEach();
garbageGroup4.destroyEach();

o1.width=230;
o1.height=15;
o1.x=117.5;
o1.y=370;

o2.width=230;
o2.height=15;
o2.x=340;
o2.y=370;

o3.width=230;
o3.height=15;
o3.x=560;
o3.y=370;

o4.width=230;
o4.height=15;
o4.x=782.5;
o4.y=370;

o1.visible=false;
o2.visible=false;
o3.visible=false;
o4.visible=false;

b1.visible=false;
b2.visible=false;
b3.visible=false;
b4.visible=false;

text("Congratulations! You have won the 1st level! Now, you know the basic segregation method.", 50, 120);
fill("orange");
text("Now, let's start with the 2nd level!", 50, 150);
fill("red");
text("In this, you have to catch the reusable materials in the bin(to move the bin use arrow keys) to score points.", 50, 180);
fill("orange");
text("Click on play button to start the game.",50,210);

pButton2.visible=true;
pButton2.x= 400;
pButton2.y= 340;
}
}
//To introduce 2nd level 
if(gameState==="level2"){
  fill("blue");
  text("Click on home to reach the main page/start from 1st.", 610, 80);
  pButton2.visible=false;
  textSize(20);
fill("red");
  text("Score: "+score2 , width-680 , 45);
  b1.visible=true;

  o1.y=380;
  o1.width=200;
  if(keyDown("right")) {
    b1.x+=10;
    o1.x+=10;
}
if(keyDown("left")) {
    b1.x-=10;
    o1.x-=10;
}
//To create reusable materials
if (frameCount % 100 === 0) {
  reusableMaterials = createSprite(random(75, 825),random(0, 180) , 0, 100, 100);
  reusableMaterials.velocityY = 3;
  var rand = Math.round(random(1,2));
  switch(rand){
      case 1: reusableMaterials.addImage(rm1Img);
      break;
      case 2: reusableMaterials.addImage(rm2Img);
      break;     
  }
reusableMaterials.scale=0.25;
reusableGroup.add(reusableMaterials);

}

//To create not reusable materials
if (frameCount % 200 === 0) {
  nonReusableMaterials = createSprite(random(75, 825),random(120, 300) , 0, 100, 100);
  nonReusableMaterials.velocityY = 3;
  var rand = Math.round(random(1,2));
  switch(rand){
      case 1: nonReusableMaterials.addImage(nrm1Img);
      break;
      case 2: nonReusableMaterials.addImage(nrm2Img);
      break;
  }
nonReusableMaterials.scale=0.35;
nonReusableGroup.add(nonReusableMaterials);

  
}
//To add score when reusable material is collected.
if(reusableGroup.isTouching(o1)){
  score2+=1;
  correctSound.play();
  reusableGroup.destroyEach();
}
//To deduct score when non-reusable material is collected.
if(nonReusableGroup.isTouching(o1)){
  score2-=1;
  wrongSound.play();
  nonReusableGroup.destroyEach(); 
}
if(score2<15){
textSize(22);
fill("red");
text("Catch reusable materials only!!!", 320, 650);
}
//To make the materials come back of the bin
reusableGroup.depth=nonReusableGroup.depth=b1.depth;
b1.depth+=1;

//To display the text and the happy earth image when the score equals 15
if(score2===15){
  reusableGroup.destroyEach();
  nonReusableGroup.destroyEach();
  b1.visible=false;
  fill("violet");
  text("Congratulations!!! You win! You passed the 2nd level too.",50,100);
  fill("purple");
  text("Now you have learnt the concepts of segregation of waste",50,130);
  fill("lightblue");
  text("You also achieved learning about reusing materials in deep",50, 160);
  fill("lightgreen");
  text("You can use these concepts and techniques daily to make our earth safe and happy", 50,190);
  fill("yellow");
  text("I am sure we can do this, if all of us follow this! The better the today, the better the future!", 50, 220);
  fill("orange");
  text("Click on the image below, if you will make our earth safe and happy!", 50, 250);
  fill("red");
  text("Thank you!",50, 280);
happy_earth.x=425;
happy_earth.visible=true;

//To play the sound whenever clicked on the happy earth image.
if(mousePressedOver(happy_earth)){
  cheerSound.play();
}
}
}

  drawSprites();
}


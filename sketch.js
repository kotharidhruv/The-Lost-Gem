var Rob
var King
var canvas
var kingMessageImg
var exitDoor
var gameState = 0
var wizard1
var backgroundImage;

function preload() {
 kingMessageImg = loadImage("Image/KingMessage.png")
 kingImg = loadImage("Image/kingImage.png")
 tutorialImage = loadImage("Image/tutorial1.png")
 backgroundImage = loadImage("Image/background0.png")
}

function setup() {
canvas = createCanvas(1000, 600)
Rob = createSprite(400, 300, 50, 50)
King = createSprite(500, 300, 50, 50)
King.addImage("king", kingImg)
exitDoor = createSprite(950, 300, 70, 100)
wizard1 = createSprite(950, 60, 50, 50)
wizard2 = createSprite(100, 60, 50, 50)
wizard3 = createSprite(100, 540, 50, 50)
wizard4 = createSprite(950, 540, 50 , 50)
tutorialMan = createSprite(500, 300, 50, 50)
}

function draw() {

 background(backgroundImage);

if(keyDown(UP_ARROW)){
  Rob.y = Rob.y - 5
}

if(keyDown(DOWN_ARROW)){
  Rob.y = Rob.y + 5
}

if(keyDown(LEFT_ARROW)){
  Rob.x = Rob.x - 5
}

if(keyDown(RIGHT_ARROW)){
  Rob.x = Rob.x + 5
}

if(Rob.x >= 550 && gameState === 0){
  image(kingMessageImg,450,100)
}

if(Rob.isTouching(exitDoor)){
  gameState = 1
  //background will change
}

if(gameState === 0){
  wizard1.visible = false
  wizard2.visible = false
  wizard3.visible = false
  wizard4.visible = false
  tutorialMan.visible = false
}

if(gameState === 1){
  King.remove()
  wizard1.visible = true
  wizard2.visible = true
  wizard3.visible = true
  wizard4.visible = true
  tutorialMan.visible = true
  image(tutorialImage, 450, 100)
}

drawSprites()
}




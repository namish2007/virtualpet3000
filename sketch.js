//Create variables here
var dog, happyDog,dogsprite,database, foodS, foodStock;
function preload()
{
   dog = loadImage("images/dogImg.png");
   happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dogsprite = createSprite(200,450);
  dogsprite.addImage(dog);
  //dogsprite.addImage("images/dogImg1.png");
database = firebase.database();
foodStock = database.ref('Food');
foodStock.on("value",readStock);
dogsprite.scale = 0.5;
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dogsprite.addImage(happyDog);
}
  drawSprites();
  //add styles here
textSize(10);
fill("white");
stroke("black");
text("Note: Press UP_ARROW Key to feed Drago Milk");

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}




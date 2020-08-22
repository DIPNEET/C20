
var moving,fixed;

function setup() {
  createCanvas(800,400);
  
  fixed=createSprite(400,200,80,60);
  fixed.shapeColor="green";
  fixed.debug=true;

  moving=createSprite(100,200,80,60);
  moving.shapeColor="green";
  moving.debug=true;

}

function draw() {
  background(25,70,60); 
  
  moving.x=mouseX;
  moving.y=mouseY;

  textSize(25);

  isTouching()


  drawSprites();
}

function isTouching(){
  
  if(moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<moving.width/2+fixed.width/2 &&
    moving.y-fixed.y<moving.height/2+fixed.height/2 && fixed.y-moving.y<moving.height/2+fixed.height/2  ){

   text("It's Touching",350,50)
   moving.shapeColor="red"
  } 
  else{

    text("It's Not Touching",350,50)
    moving.shapeColor="green"
  }
}
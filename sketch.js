
  var fixed , fixed2;



function setup() {
  createCanvas(800,400);
fixed =createSprite(400, 200, 50, 50);
  fixed.velocityX=2;
  fixed.velocityY=2;
  fixed.shaecolor="red";
 fixed2 =createSprite(200,200,50,50);
 fixed2.velocityX=3;
 fixed2.velocityY=3;
 fixed2.shapecolor="blue";


}

function draw() {
  background(500,200,400);  
  drawSprites();

  fixed2.y=mouseY;
  fixed2.x=mouseX;

  if(fixed.x-fixed2.x<=(fixed.width)/2+(fixed2.width)/2 && fixed2.x-fixed.x<=(fixed.width)/2+(fixed2.width)/2){
    fixed.velocityX=fixed.velocityX*-1;
    fixed2.velocityX=fixed2.velocityX*-1;
  }
  if(fixed.y-fixed2.y<=(fixed.height)/2+(fixed2.height)/2 && fixed2.y-fixed.y<=(fixed.height)/2+(fixed2.height)/2){
    fixed.velocityY=fixed.velocityY*-1;
    fixed2.velocityY=fixed2.velocityY*-1;
  }
}
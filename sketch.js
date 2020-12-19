var rect_fixed,rect_moving;

function setup() {
  createCanvas(800,400);
  rect_fixed = createSprite(100, 100, 50, 50);
  rect_fixed.shapeColor = "red"
  rect_fixed.velocityX = 4
  rect_moving = createSprite(700,100,50,50)
  rect_moving.shapeColor = "blue"
  rect_moving.velocityX = -4
}

function draw() {
  background(0); 
  
  if(rect_moving.y-rect_fixed.y <= rect_moving.height/2 + rect_fixed.height/2
    &&rect_fixed.y-rect_moving.y <= rect_moving.height/2 + rect_fixed.height/2){
      rect_fixed.velocityY = rect_fixed.velocityY * (-1)
      rect_moving.velocityY = rect_moving.velocityY * (-1)
    }

    if(rect_moving.x-rect_fixed.x <= rect_moving.width/2 + rect_fixed.width/2
      &&rect_fixed.x-rect_moving.x <= rect_moving.width/2 + rect_fixed.width/2){
        rect_fixed.velocityX = rect_fixed.velocityX * (-1)
        rect_moving.velocityX = rect_moving.velocityX * (-1)
      }

  

  drawSprites();
}
var move;
var fix;

function setup() {
  createCanvas(800,400);
  move = createSprite(400, 200, 50, 50);
  fix = createSprite(100,200,100,100);
}

function draw() {
  background("mediumspringgreen");  
  move.x = mouseX;
  move.y = mouseY;
  if (move.x-fix.x<move.width/2+fix.width/2 && fix.x-move.x<move.width/2+fix.width/2 && move.y-fix.y<move.height/2+fix.height/2 && fix.y-move.y<move.height/2+fix.height/2){
    move.shapeColor = "red";
    fix.shapeColor = "yellow"
  }else {
    move.shapeColor = "blue";
    fix.shapeColor = "brown";
  }

  drawSprites();
}
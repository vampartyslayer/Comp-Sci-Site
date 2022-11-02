


// three {
//   border:solid 1px #0003;
// }
// var canvas
// function setup(
//   canvas = createCanvas(500, 500);
//   canvas.position (0,0);
//   canvas.style 3
  
// )

var canvas = document.getElementById('work');
var ctx = canvas.getContext('2d');
float circleX;
float xspeed;
float circleY;
float yspeed;
float size;

function setup() {
ctx.createCanvas(500, 500); 
ctx.canvas.position(0,0):
ctx.canvas.style('z-index', '-1')
}


void setup() {
  ctx.size(640, 360); 
  ctx.circleX = 1;
  ctx.xspeed = 5;
  ctx.circleY = 15;
  ctx.yspeed = 1;
  ctx.size = 32;
  ctx.ellipseMode(RADIUS);
}


void draw() {
  ctx.background(51); 
  ctx.display();
  ctx.move();
  ctx.bounce();
}

void display() {
  ctx.fill(102);
  ctx.stroke(255);
  ctx.ellipse(circleX, circleY, size, size);
}
void move() {
  ctx.circleX += xspeed;
  ctx.circleY += yspeed;
}  

void bounce() {
  if ((circleX > width -size) || (circleX < 0)) {
    xspeed = xspeed * -1;
  }
  if ((circleY >= height -size) || (circleY < 0)) {
    yspeed = yspeed * -1; 
  }
}
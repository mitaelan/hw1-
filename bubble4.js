var x;
var y;
var radius;

function setup() {
  createCanvas(600, 400);
  x = random(width);
  y = random(height);
  radius = 50;
}

function draw() {
  background(25);

  //if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = mouseX; (width);
      y = mouseY; (height);
    //}
    fill(255, 200, 50, 200);
  }
  else {
    fill(20, 220, 200, 200);
  }

  ellipse(x, y, radius * 5);
  x += random(-10, 10);
  y += random(-10, 10);

}

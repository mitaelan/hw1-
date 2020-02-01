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
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(255, 200, 50, 200);
  }
  else {
    fill(20, 220, 200, 200);
  }

  ellipse(x, y, radius * 5);
  x += random(-1, 1);
  y += random(-1, 1);

}

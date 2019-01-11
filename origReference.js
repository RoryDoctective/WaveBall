var R = 180;
var circleVertexNum = 360;
var rectNum = 10;
var rectW = 400 / rectNum;
var t = 0;
var hue1 = 0;
var br1 = 100;
var hue2 = 180;
var br2 = 100;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(255);

  colorMode(HSB, 360, 100, 100);
  if (sin(radians(3 * 20 + t)) == -1) {
    hue1 = random(360);
    br1 = random(50, 100);
  }
  if (sin(radians(3 * 20 + t)) == 1) {
    hue2 = random(360);
    br2 = random(50, 100);
  }

  noStroke();
  fill(hue1, 100, br1);
  rect(width / 2, height / 4, width, height / 2);
  fill(hue2, 100, br2);
  rect(width / 2, height * 3 / 4, width, height / 2);
  colorMode(RGB, 255, 255, 255);

  fill(0, 0, 0);
  noStroke();
  for (var i = 0; i < rectNum; i++) {
    rect(i * rectW + rectW / 2, height / 2 + 100 * sin(radians(i * 20 + t)), rectW, height * 0.8);
  }

  t++;

  fill(255);
  noStroke();
  push();
  translate(width / 2, height / 2);
  beginShape();
  vertex(-width / 2, -height / 2);
  vertex(width / 2, -height / 2);
  vertex(width / 2, height / 2);
  vertex(-width / 2, height / 2);
  beginContour();
  for (var j = circleVertexNum; j > 0; j--) {
    vertex(R * cos(radians(360 * j / circleVertexNum)), R * sin(radians(360 * j / circleVertexNum)));
  }
  endContour();
  endShape(CLOSE);
  pop();

  stroke(0);
  strokeWeight(10);
  noFill();
  ellipse(width / 2, height / 2, R * 2, R * 2);
}
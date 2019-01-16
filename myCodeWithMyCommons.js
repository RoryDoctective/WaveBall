/* 
will use class infinied In allClass.js

var c(component);'/ 

(call setup once)
(calls draw many times())
*/
var R = 180;
var circleVertexNum = 360;
var rectNum = 10;
var rectW = 400 / rectNum;
var t = 0;

var hue1 = 0;
var br1 = 100;
var hue2 = 180;
var br2 = 100;
// width 和 height 的defualt = 400,整个过程中都没有变
var canvWid = 400;
var canvHei = 400;
let saturation = 100

function setup() {
  createCanvas(canvWid , canvHei);
  rectMode(CENTER);
}

// draw() loops forever, until stopped
function draw() {
  // background(255);  // Setting the background to white（这一步似乎根本没用）

  colorMode(HSB, 360, 100, 100); // hue saturation brightness


  // set the  var hue1 br1 hue2 br2 第一个是下面的每过t=210，210+360 的二个是上面的没过 t= 30，30+360
  if (sin(radians(3 * 20 + t)) == -1) {
    hue1 = random(360);
    br1 = random(50, 100);
  }

  if (sin(radians(3 * 20 + t)) == 1) {
    hue2 = random(360);
    br2 = random(50, 100);
  }

  // no stroke
  noStroke(); 

  // fill group1 draw rectangle, then do the same to group two
  fill(hue1, saturation, br1); 
  rect(width / 2, height / 4, width, height / 2); // rect(x, y, width, height)
  // 200 100 400 200 
  fill(hue2, saturation, br2);

  rect(width / 2, height * 3 / 4, width, height / 2);
  // 200 300 400 200

  // change color mode  
  colorMode(RGB, 255, 255, 255);
  fill(0, 0, 0);
  //noStroke();
  
  // 0~rectNum(10), do 
  // recW=40
  // rect i*40 + 20, 200 + 100*sin(), 40, 320
  for (var i = 0; i < rectNum; i++) {
    rect(i * rectW + rectW / 2, height / 2 + 100 * sin(radians(i * 20 + t)), rectW, height * 0.8);
  }

  // t = t+1
  t++;

  // fill white 无边缘
  fill(255);
  //noStroke();

  /*
  push() stores information related to the current transformation state and 
  style settings controlled by the following functions: fill(), stroke(), tint(), 
  strokeWeight(), strokeCap(), strokeJoin(), imageMode(), rectMode(), ellipseMode(), 
  colorMode(), textAlign(), textFont(), textMode(), textSize(), textLeading().
  */
  push();
  translate(width / 2, height / 2); // 现在corrodinate的（0，0）= （200，200），这一步必须在beginshap前
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
  noFill(); // 必要
  ellipse(width / 2, height / 2, R * 2, R * 2);
  // 200,200  360,360


}






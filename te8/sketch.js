let r;
let g;
let b;

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent('sketch-holder');
  // background(220);
  drawHair();
  drawPonytail();
  drawFace();
  drawNeck();
  drawEyes();
  drawBrows();
  drawNose();
  drawMouth();
  
  button = createButton('Click To Generate BG Color');
  button.parent('button-holder');
  button.mousePressed(buttonPressed);
}

function draw() {
}

function buttonPressed() {
   r = random(50, 250);
   g = random(50, 80);
   b = random(50, 200);
   background(r, g, b);
   drawHair();
   drawPonytail();
   drawFace();
   drawNeck();
   drawEyes();
   drawBrows();
   drawNose();
   drawMouth();
}

function drawHair() {
  noStroke();
  fill(0);
  ellipse(300, 225, 400, 350);
}

function drawPonytail() {
  noStroke();
  fill(0);
  ellipse(300, 450, 200, 300);
}

function drawFace() {
  fill(255, 221, 204);
  ellipse(300, 250, 300, 300);
}

function drawNeck() {
  fill(255, 221, 204);
  rect(250, 400, 100, 200);
}

function drawBrows() {
  strokeWeight(1);
  stroke(0);
  line(200, 175, 250, 175);
  
  strokeWeight(1);
  stroke(0);
  line(350, 175, 400, 175);
}

function drawEyes() {
  fill(0);
  ellipse(225, 225, 50, 50);
  
  fill(0);
  ellipse(375, 225, 50, 50);  
}

function drawNose() {
  noStroke();
  fill(255, 187, 153);
  rect(285, 250, 30, 50);
  
  noStroke();
  fill(255, 187, 153);
  ellipse(300, 300, 50, 50);
}

function drawMouth() {
  stroke(0);
  line(250, 350, 350, 350);
}
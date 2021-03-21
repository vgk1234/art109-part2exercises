function setup() {
    createCanvas(710, 400, WEBGL);
  }
  
  function draw() {
    background(250);
  
    translate(-240, -100, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(102, 153, 255);
    box(70, 70, 70);
    pop();
  
    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(255, 0, 255);
    box(70, 70, 70);
    pop();
  
    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(51, 102, 153);
    box(70, 70, 70);
    pop();
  
    translate(-240 * 2, 200, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(51, 102, 153);
    box(70, 70, 70);
    pop();
  
    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(102, 153, 255);
    box(70, 70, 70);
    pop();
  
    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(255, 0, 255);
    box(70, 70, 70);
    pop();
  }
  
  

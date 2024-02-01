let trails, dayTemp, savedTime, minTemp, secTemp, arrows;
let totalTime = 100;
let hourChange = false;
let bgColor = 0;
let tickHappened = false;
let tickCircle = 300;


function setup() {
  noCursor();

  createCanvas(windowWidth, windowHeight);
  createTrails(day());
  background(bgColor);
  strokeWeight(month());
  dayTemp = day();
  minTemp = minute();
  secTemp = second();

  v0 = createVector(100, 100);
  v1 = createVector(70, 0);
}


function draw() {
  dayChange(day());
  strokeWeight(month());
  background(bgColor, month());
  // filter(BLUR, 0.05);

  for(const trail of trails){
    trail.step();
    trail.draw();
  }

  if(secTemp != second()) {
    push();
    noStroke();
    let c = RandomMix(day(), month(), year(), 0);
    fill(c.R, c.G, c.B, 175);
    circle(random(width), random(height), minute());
    pop();
    secTemp = second()
  }

  if(minTemp != minute()) {
    tick(minute());
    minTemp = minute();
    tickHappened = true;
  }
  if(tickHappened && tickCircle != 0) {
    push();
    noStroke();
    fill(0, 10);
    circle(width / 2, height / 2, tickCircle);
    pop();
    tickCircle--;
  } else if(tickHappened && tickCircle == 0) {
    tickHappened = false
    tickCircle = 300;
  }
}
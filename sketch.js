let trails, dayTemp, minTemp, secTemp, hourTemp, arrows;
let totalTime = 100;
let hourChange = false;
let bgColor = 0;
let tickHappened = false;
let tickCircle = 300;
let pendelumX;
let pendelumY = 0;
let angleNext = 0;
let angleInc = 0.05;
let radPendelum;
let pendelumDone = 0;


function setup() {
  noCursor();

  createCanvas(windowWidth, windowHeight);
  createTrails(day());
  background(bgColor);
  strokeWeight(month());
  dayTemp = day();
  minTemp = minute();
  secTemp = second();
  hourTemp = hour();

  pendelumX = windowWidth / 2;
  radPendelum = windowWidth / 4;

  // v0 = createVector(100, 100);
  v1 = createVector(70, 0);
}


function draw() {
  dayChange(day());
  strokeWeight(month());
  background(bgColor, month());
  // filter(BLUR, 0.05);

  for(const trail of trails){
    trail.logic();
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

  if(hourTemp != hour()) {
    hourChange = true;
    hourTemp = hour()
  }

  if(hourChange && pendelumDone != 100) {
    push();
    line(width / 2, 0, 
        pendelumX + radPendelum * cos(angleNext), 
        pendelumY + radPendelum * sin(angleNext))
    noStroke();
    circle( pendelumX + radPendelum * cos(angleNext), 
            pendelumY + radPendelum * sin(angleNext),
            60);
    angleNext += angleInc;
    pendelumDone++
    pop();
  } else if (hourChange && pendelumDone == 100) {
    hourChange = false;
    pendelumX = width / 2;
    pendelumY = 0;
    angleNext = 0;
    angleInc = 0.05;
    radPendelum = width / 4;
    pendelumDone = 0;
  }
}
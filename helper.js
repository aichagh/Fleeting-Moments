/* helper functions */
function dayChange (day){
  if (dayTemp != day) {
    createTrails(day);
    dayTemp = day
  }
}

function tick(min) {
  let angle = 0;
  if(!(min == 0)) {
    
    let angleShift = PI / min
    if(!(min == 1)) {
      angleShift = PI / (min - 1)
    }

    for(let x = 0; x < min; x++ ) {
      v1.rotate(angle);
      drawArrow(v1, 'white');
      angle += angleShift
    }
  }
}

function drawArrow(vec, myColor) {
  push();
  // colors / stroke
  stroke(myColor);
  strokeWeight(2);
  fill(myColor);

  // move the base of the arrow to the center of the canvas
  translate(width / 2, height / 2);
  let rand = random(3,6); // adds variation to the length of the arrows

  // draw the first line
  line(0, 0, vec.x * rand, vec.y * rand);
  rotate(vec.heading());

  let headSize = 7; // size of the arrow head
  translate(vec.mag() * rand - headSize, 0);
  triangle(0, headSize / 2, 0, - headSize / 2, headSize, 0);

  pop();
}

function createTrails(day) {
  trails = [];
  for(let i = 0; i < day; i++){
    trails.push(new Trail(random(width), random(height)));
  }
}
class Trail {

  constructor(x, y){
    this.color = RandomMix(day(), month(), year(), 0.5);

    this.x = x;
    this.y = y;

    this.heading = 0;

    this.speed = random(5);
    this.offset = random(100);
    this.loopingSpeed = random(.025, .1);

    this.looping = false;
    this.maybeDoneLooping = false;
  }

  logic() {

    if(this.looping){
      this.heading += this.loopingSpeed + sin(this.offset + frameCount * .1) * .05;
      this.heading = this.heading % TWO_PI;

      if(!this.maybeDoneLooping){
       if(abs(this.heading - PI) < .1){
         this.maybeDoneLooping = true;
       }
      }

      if(this.maybeDoneLooping && (this.heading < TWO_PI * .05 || this.heading > TWO_PI * .95)){
        this.looping = false;
        this.maybeDoneLooping = false;
        this.loopingSpeed = random(.025, .1);
      }
    } else {
      // not looping
      this.heading = randomGaussian() * .1 + sin(this.offset + frameCount * .1) * .25;
      this.heading = this.heading % TWO_PI;

      if(this.x > width * .25 && random(1) < .01){
        this.looping = true;
      }
    }

    this.prevX = this.x;
    this.prevY = this.y;
    this.x += cos(this.heading) * this.speed;
    this.y += sin(this.heading) * this.speed;

    // respawn if off screen
    if(this.x < 0 || this.x > width || this.y < 0 || this.y >height){
      this.x = random(width);
      this.y = random(height);
      this.prevX = this.x;
      this.prevY = this.y;
      this.heading = 0;
    }
  }

  draw() {
    stroke(this.color.R, this.color.G, this.color.B);
    point(this.x, this.y)
  }
}
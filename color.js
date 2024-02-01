class Color {
  constructor(red, green, blue){
     this.R = red;
     this.G = green;
     this.B = blue; 
  }
}

// Palette generator
// adapted from http://devmag.org.za/2012/07/29/how-to-choose-colours-procedurally-algorithms/

// takes 3 colors to generate a palette

function RandomMix(day, month, year, greyControl)
 {
    let randomIndex = random(0, 3);
 
    let mixRatio1 = (randomIndex == 0) ? random() * greyControl : random();
    let mixRatio2 = (randomIndex == 1) ? random() * greyControl : random();
    let mixRatio3 = (randomIndex == 2) ? random() * greyControl : random();
 
    let sum = mixRatio1 + mixRatio2 + mixRatio3;
 
    mixRatio1 /= sum;
    mixRatio2 /= sum;
    mixRatio3 /= sum;

    let color1 = generateColor(day, month, year);
    let color2 = generateColor(day, month, year);
    let color3 = generateColor(day, month, year);
 
    let finalColor = new Color(
       (mixRatio1 * color1.R + mixRatio2 * color2.R + mixRatio3 * color3.R),
       (mixRatio1 * color1.G + mixRatio2 * color2.G + mixRatio3 * color3.G),
       (mixRatio1 * color1.B + mixRatio2 * color2.B + mixRatio3 * color3.B));
    
    return finalColor;
}

function generateColor(day, month, year) {
  let red = round(map(day, 1, 31, 0, 255, true) * random(1,2)) % 255;
  let green = round(map(month, 1, 12, 0, 255, true) * random(1,2)) % 255;
  let blue = year % 255
  return new Color(red, green, blue);
}

let noiseOFFset = 0.0;
let strokeWidth = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(2, 72, 115);

}


function draw() {

  background(2, 72, 115,20);
  strokeWeight(strokeWidth);


  noiseOFFset += 0.07;
  strokeWidth = noise(noiseOFFset) * 53;



  stroke(map(mouseX, 0, 600, 0, 255, true))
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);

}

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    // clear the image
    clear();




  }

  return false;
}

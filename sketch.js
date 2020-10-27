
let noiseOFFset = 0.5;
let strokeWidth = 30;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);

}


function draw() {

  background(101, 74, 100,0);
  strokeWeight(strokeWidth);


  noiseOFFset += 0.01;
  strokeWidth = noise(noiseOFFset) * 100;



  //stroke(map(mouseX, 0, 600, 0, 255, true))//
  stroke(map(mouseX,  0, 600, 0, 255, true))
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

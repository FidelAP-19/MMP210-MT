let img;
let ufo = {x: -100, y: -100, width: 100};
let UFOx = -100
let UFOy = -100
let ufoSound;
let stars;

function preload(){
  img = loadImage('2k_earth_daymap.jpeg');
  stars = loadImage('stars.jpeg')
  ufoSound= loadSound('ufo-landing.mp3');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() { 
  //background(0); 
  image(stars,-200,-200,400,400);
  drawUfo();
  
 
  //EARTH
  noStroke();
  translate(100,100);
  push();
  rotate(PI/8, [1,1,0]);
  rotateY(millis() / 3000);
  sphere(50);
  pop();
  texture(img);
  textureMode(IMAGE);
   
}
  
function drawUfo() {
  push();
  noStroke();
  fill("gray")
  ellipse(ufo.x, ufo.y, ufo.width, 20)
  ellipse(ufo.x, ufo.y - 10, ufo.width / 2, 25)
   if (mouseIsPressed === true) {
  fill("#98AFC7")
  triangle(190, 295, UFOx, UFOy, 295, 205);
   ufoSound.play();  
    ufoSound.setVolume(0.1); 
   }
  pop();
 
}
  

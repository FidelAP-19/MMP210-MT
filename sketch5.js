let img;
let stars;
let mars;
let ufo = {x: -100, y: -100, width: 100};
let UFOx = -100
let UFOy = -100

function preload(){
  img = loadImage('2k_earth_daymap.jpeg');
  stars = loadImage('stars.jpeg')
  mars = loadImage('mars.jpeg')
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
}

function draw() { 
 
     image(stars,-200,-200,400,400);


   
  noStroke();
  push();
  translate(-150,100);    
  rotate(PI/8, [1,1,0]);
  rotateY(millis() / 3000);
  let x = map(mouseX, width, 10, 140, 10, true);
  texture(mars);
  sphere(x,50);
  pop();

 

    
  drawUfo();
  drawEarth();
  
   
}

function drawEarth() {
     
  //EARTH
  noStroke();
  translate(100,100);
  push();
  rotate(PI/8, [1,1,0]);
  rotateY(millis() / 3000);
  let x = map(mouseX, 10, width, 140, 10, true);
  texture(img);
  sphere(x, 50);
  pop();
 

}  
function drawUfo() {
  push();
  noStroke();
  fill("gray")
  ellipse(ufo.x, ufo.y, ufo.width, 20)
  ellipse(ufo.x, ufo.y - 10, ufo.width / 2, 25)
  pop();
 
}
  

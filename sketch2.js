let img;
let sphinx;
let camel;
let col1,col2;
let ufo = {x: 100, y: -30, width: 100};
//let camelSound;

function preload(){
  img = loadImage('Pyramids.png');
  sphinx = loadImage('sphinx.png');
  camel = loadImage('camel.png');
  //soundFormats('mp3', 'ogg');
 // camelSound= loadSound('camel.mp3');
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
 background(250, 213, 165);
  image(img,0, 50, 390, 400);
  image(camel,40, 290, 100, 100);


 if (mouseIsPressed === true) {
   col1 = color(160, 209, 230);
  col2 = color(250, 213, 165);
  
  for(let y=0; y<height; y++){
     n = map(y,0,height,0,1);
    
    let newcolor = lerpColor(col1,col2,n);
    
    stroke(newcolor);
    line(0,y,width, y);}
  //background(160, 209, 230);
   push()
  fill("#98AFC7")
  triangle(290, 295, 300, 40, 355, 275);
  pop()
  image(img,0, 50, 390, 400);
  image(sphinx,250, 250, 150, 150);
  drawSun();
  drawUfo();
  image(camel,40, 290, 100, 100);
 // camelSound.play();  

}


}

function drawSun() {

  fill(245, 187, 87);
  stroke(245, 187, 87);
  push();
  translate(70, 80);
  rotate(radians(frameCount / 2));
  ellipse(0, 0, 60, 60);
  line(0, -60, 0, -40);
  line(0, 40, 0, 60);
  line(-45, -45, -30, -30);
  line(45, -45, 30, -30);
  line(-60, 0, -40, 0);
  line(40, 0, 60, 0);
  line(-45, 45, -30, 30);
  line(45, 45, 30, 30);
  pop();
  noFill();
}

function drawUfo() {
  push();
  noStroke();
  translate(200, 80);
  fill("gray");
  ellipse(ufo.x, ufo.y, ufo.width, 20)
  ellipse(ufo.x, ufo.y - 10, ufo.width / 2, 25)
 pop();
 
}
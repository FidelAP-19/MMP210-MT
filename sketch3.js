let b1, b2, b3, b4, b5, b6, b7, b9;
let img;
let col1,col2;
let ufo = {x: 100, y: -30, width: 100};

function preload(){
  img = loadImage('SOL.png');
}


function setup() {
  createCanvas(400, 400);
  
  col1 = color(135, 206, 235);
  col2 = color(253, 94, 83);
  
  for(let y=0; y<height; y++){
     n = map(y,0,height,0,1);
    
    let newcolor = lerpColor(col1,col2,n);
    
    stroke(newcolor);
    line(0,y,width, y);
  }
  
  b1=new Building();
  b1.position=0;
  b1.floors=29;
    
  b2=new Building();
  b2.position=1;
  b2.floors=40;

  b3=new Building();
  b3.position=2;
  b3.floors=25;

  b4=new Building();
  b4.position=3;
  b4.floors=30;

  b5=new Building();
  b5.position=4;
  b5.floors=28;

  b6=new Building();
  b6.position=5;
  b6.floors=32;
  
  b7=new Building();
  b7.position=6;
  b7.floors=40;
  
  b8=new Building();
  b8.position=7;
  b8.floors=35;
  
  b9=new Building();
  b9.position=8;
  b9.floors=22;
  
  fill(0);
  noStroke();

}

function draw() {
  image(img, 0, 0);
  translate(25,150);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  drawUfo();
  


}

function drawUfo() {
  push();
  noStroke();
  fill("gray");
  ellipse(ufo.x, ufo.y, ufo.width, 20)
  ellipse(ufo.x, ufo.y - 10, ufo.width / 2, 25)
 pop();
 
}



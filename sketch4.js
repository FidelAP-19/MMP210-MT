let ufo = {x: -100, y: -100, width: 100};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(155, 186, 189);
  
  

  stroke(255);
  strokeWeight(1);
  
  //mountains
   fill(220)
  noStroke();
  triangle(-80, 400, 400, 400, 180, 100);
  
  fill(200)
  noStroke();
  triangle(200, 400, 500, 400, 350, 200);
  
  //tip
  fill(245);
  strokeWeight(225);
	beginShape();
		vertex(180, 100);
		vertex(228, 171);
		vertex(196, 164);
		vertex(170, 190);
  	vertex(147, 170);
  	vertex(98, 200);
	endShape(CLOSE);
  
  
  
  //GROUND
  fill(60, 145, 57);
  noStroke();
	ellipse(50, 500, 980, 380);
  
  fill(69, 168, 66);
    noStroke();
  ellipse(440, 500, 1000, 400);
  
  //sun
  translate(-50,-100);
 noStroke();
  fill(255, 240,102);
  ellipse(75, 150, 100, 100);
 
  drawUfo();

}

function drawUfo() {
  push();
  translate(420,340)
  noStroke();
  fill("gray")
  ellipse(ufo.x, ufo.y, ufo.width, 20)
  ellipse(ufo.x, ufo.y - 10, ufo.width / 2, 25)
  pop();
 
}
  

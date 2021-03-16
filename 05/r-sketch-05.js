// Following The Coding Train 2.2: Variables in p5.js (Define Your Own) - p5.js Tutorial + 2.4: random() Function - p5.js Tutorial



let circleSize;
let lineWidth;
let strokeColor;
let fillColor;


function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	background(255);
	
	
}

function keyPressed(){
	background(255);
}


function draw(){

	circleSize = random (100);
	lineWidth = random(2,10);
	strokeColor = random(0,255);
	fillColor = random(250);
	
	strokeWeight(lineWidth);
	stroke(strokeColor);
	fill(fillColor);
	circle(mouseX, mouseY, circleSize);


}


// function mousePressed() {
// 	saveCanvas("sketch-04","png")
// }

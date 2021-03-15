// Following The Coding Train 2.2: Variables in p5.js (Define Your Own) - p5.js Tutorial + 2.4: random() Function - p5.js Tutorial



let circleSize;
let rectSize
let lineWidth;
let strokeColor;
let legWidth;


function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	background(255);
	
	// angleMode(DEGREES);
}

// function mousePressed(){
// 	circleX = 100;
// }


function draw(){

	circleSize = random (5,350);
	lineWidth = random(2,10);
	strokeColor = random(0,255);
	
	strokeWeight(lineWidth);
	stroke(strokeColor);
	noFill();
	circle(500, 400, circleSize);

	rectSize = random(5,665)

	rect(250,215,150,rectSize);


	legWidth = random (1,150)

	strokeCap(PROJECT);
	strokeWeight(legWidth);
	stroke(strokeColor)
	line(440, 620, 620, 775);


}

function mousePressed() {
	saveCanvas("sketch-04","png")
}
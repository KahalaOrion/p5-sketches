// Reference: Caroline Record Diagonal Lines in a For Loop p5.js

// let circleSize = 600; 
var slant;

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	angleMode(DEGREES);
	slant = 565;
	background(255)
	
	
}

function draw(){
	
	// background(255);
	strokeWeight(1);
	stroke(0);

// line(x1, y1, x2, y2)

	// circleSize = circleSize - 10;
	// ellipse(400, 275, circleSize, 550); <-- this is how I was doing the circle before getting the forloop code for it

	const totalSteps = 37;
	const startingEllipse = 350;
	const stepDistance = 12;

	noFill()
	for(i = 0; i < totalSteps; i++){
		ellipse(400, 275, startingEllipse + i*stepDistance, 550);
	}

	fill(255)
	rect(0,0,402,height)

		
	for (var x = 0; x <= 404;  x += 6){
		line(x, 0, x, height);
		}

	for(var offset = 0; offset < 441; offset += 9){
		line(402, 550, offset + slant, height);
	}

}

function mousePressed() {
	saveCanvas("sketch-06","png")
}
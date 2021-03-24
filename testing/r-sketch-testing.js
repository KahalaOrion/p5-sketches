

let angle = 0;
let xSize = 0;
let wSize = 0;
let x = 50;
let y = 0;


function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	angleMode(DEGREES);
	background(0);


}

function draw(){
	
	angle = angle + 1;
	y = y + 1
	x = x + 10
	// xSize = xSize + 1
	// ySize = ySize +1

	if (x < 500){
	translate (x, 400);
	rotate(angle+500);
	noFill();
	stroke(255);
	ellipse(0, 0, 100, 50);
	}
}

// function mousePressed() {
// 	saveCanvas("sketch-01","png")
// }
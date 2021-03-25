

// let angle = 0;
// // let xSize = 0;
// // let wSize = 0;
// let x = 50;
// let y = 0;
// let ellipseStroke = 0;


let value = 50

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	angleMode(DEGREES);
	background(255);



}

function draw(){
	
	// angle = angle + 100;
	// y = y + 1
	// x = x + 100
	// ellipseStroke = ellipseStroke + 5;
	// xSize = xSize + 1
	// ySize = ySize +1

	// if (x < 900){
	// translate (x, 400);
	// rotate(angle+500);
	// noFill();
	// stroke(0,0,ellipseStroke);
	// rect(0, 0, 100, 50);
	// }

	// for (i = 0; i < 10; i++){
	// 	noFill();
	// 	stroke(0);
	// 	push()

	// 	translate (x, 10);
	// 	rotate(angle);
	// 	rect(500, 500, i, i);
	// 	pop()

	// }
	
	rect(500, 500, value, value);
	// if (mouseisClicked){
	// 	ellipse(500, 500, 100, 100);
	// }


}

function mouseClicked(){
	if (value == 50){
		value = 200;
	}

	else{
			value = 50;
		}
}

// function mousePressed() {
// 	saveCanvas("sketch-01","png")
// }
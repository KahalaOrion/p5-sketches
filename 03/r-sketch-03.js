//Following The Coding Train 9.1: Transformations Pt.1 (Translate, Rotate, Push/Pop) - p5.js Tutorial 


let angle = 0;
let x = 405;
let y = 200;


function setup() {
	createCanvas(1000, 1000);
	print("setup function!");
	angleMode(DEGREES);
	rectMode(CENTER);
	background(0);

	
}

function draw(){
	
	fill(0);
	rect(500, 950, 1000, 200);

	push();
	translate (550, 390);
	rotate(angle);
	fill(0);
	stroke(255);
	rect(0, 0, 220, 220);
	pop();

	push();
	translate(380, y);
	rotate(angle)
	fill(0);
	stroke(255);
	rect(0, 0, 100, 50);
	pop();

	push();
	translate(x, y + 300);
	rotate(angle)
	fill(0);
	stroke(255);
	rect(0, 0, 100, 50);
	pop();


	angle = angle + 5;
	y = y + 5;
	x = x + 5;


}

// function mousePressed() {
// 	saveCanvas("sketch-03","png")
// }
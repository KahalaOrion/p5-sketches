

let angle = 0;
let x = 400;
let y = 200;


function setup() {
	createCanvas(1000, 1000);
	print("setup function!");
	angleMode(DEGREES);
	rectMode(CENTER);
	background(0);


	
}

function draw(){

	angle = angle + 250;
	y = y + 5;
	x = x + 5;
	
	
	// fill(0);
	// rect(500, 950, 1000, 200);

	// push();
	// translate (550, 390);
	// rotate(angle+100);
	// fill(0);
	// stroke(255);
	// ellipse(0, 0, 150, 50);
	// pop();
	

	// push();
	// translate (550, 390);
	// rotate(angle+500);
	// noFill();
	// stroke(255);
	// ellipse(0, 0, 400, 100);
	// pop();

strokeWeight(2)

if (y < 842){
	push();

	translate(330, y);
	rotate(angle)
	fill(0);
	stroke(255);
	ellipse(0, 0, 150, 50);
	pop();
	}

	if(angle < 10500) {
	push();
	translate (510, 360);
	rotate(angle+100);
	fill(0);
	stroke(255);
	ellipse(0, 0, 400, 175);
	pop();
	}	


if(x < 794){	
	push();
	
	translate(x, y + 250);
	rotate(angle)
	fill(0);
	stroke(255);
	ellipse(0, 0, 150, 50);

	pop();
	}


	


}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-14","png")

}

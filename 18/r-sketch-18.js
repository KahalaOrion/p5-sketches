//Reference CLASS RECORDING— Friday, March 19

let R;

let angle = 0;
let x = 400;
let y = 200;


function preload(){
	R = loadImage('assets/R.png');
}

function setup() {
	print("setup function!")
	angleMode(DEGREES);
	rectMode(CENTER);
	createCanvas(1000,1000);
	background(255);
	// image (R, 0,0);
	stroke(0)
	// fill(0);

	
	// unitSize = 20;
	// for (i = 0; i < height; i = i + unitSize) {
	// 	for (j = 0; j < width; j = j + unitSize) {
	// 		pixelColor = R.get(j,i);
			
			

	// 		if(JSON.stringify(pixelColor) == JSON.stringify([107, 189, 69, 255])){
				
	// 			angle = angle + 1;
	// 			// y = y -1 ;
	// 			// x = x - 1;
			
			
	// 			push();

	// 			translate(j, i);
	// 			rotate(angle);
	// 			// noFill();
	// 			fill(0)
	// 			stroke(255);
	// 			// randomSize = random(10,30);
	// 			ellipse(0, 0, 40, 70);
	// 			// stroke(255);
	// 			// ellipse(0, 0, 150, 50);
	// 			pop();
				
	// 			}
	// 			// randomPosx = random(325,650)
	// 			// randomPosy = random(250,450)

	// 		else{

				
	// 			// fill(255);
	// 			// stroke(0)
	// 			// strokeWeight(.5)

	// 			// randomSize2 = random(40,120);
	// 			// ellipse (j, i, 40, 70);
	// 		}	
			

			
	// 	}
	// }



}

function draw(){
		background(255);

	unitSize = 30;
	for (i = 0; i <= height; i = i + unitSize) {
		for (j = 0; j <= width; j = j + unitSize) {
			pixelColor = R.get(j,i);
			
			

			if(JSON.stringify(pixelColor) == JSON.stringify([107, 189, 69, 255])){
				
				angle = angle + 1;
				// y = y -1 ;
				// x = x - 1;
			
			
				push();

				translate(j, i);
				rotate(angle);
				noFill();
				// fill(0)
				stroke(0);
				strokeWeight(4)
				// randomSize = random(10,30);
				ellipse(0, 0, 70, 90);
				// stroke(255);
				// ellipse(0, 0, 150, 50);
				pop();
				
				}
				// randomPosx = random(325,650)
				// randomPosy = random(250,450)

			else{

				angle = angle - 1;
				// y = y -1 ;
				// x = x - 1;
			
			
				push();

				translate(j, i);
				rotate(angle);
				noFill();
				// rFill = random(255)
				// fill(0)
				stroke(0);
				// randomSize = random(10,30);
				ellipse(0, 0, 70, 90);
				// stroke(255);
				// ellipse(0, 0, 150, 50);
				pop();
				// fill(255);
				// stroke(0)
				// strokeWeight(.5)

				// randomSize2 = random(40,120);
				// ellipse (j, i, 40, 70);
			}	
			

			
		}
	}

}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-18","png")

}

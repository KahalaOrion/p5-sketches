//Reference CLASS RECORDING— Friday, March 19

let R;

function preload(){
	R = loadImage('assets/R.png');
}

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	background(0,31,102);
	// image (R, 0,0);
	stroke(0)
	// fill(0);

	
	// unitSize = 25;
	// for (i = 0; i <= height; i = i + unitSize) {
	// 	for (j = 0; j <= width; j = j + unitSize) {
	// 		pixelColor = R.get(j,i);
	// 		console.log(pixelColor)
			

	// 		if(JSON.stringify(pixelColor) == JSON.stringify([107, 189, 69, 255])){
				
	// 			gRandom = random(120,255);

	// 			fill(0,200,gRandom,220);
	// 			stroke(255,255,255,120)

	// 			randomSize = random(10,70);
	// 			ellipse (j, i, randomSize, randomSize);
	// 			}
				
	// 			// fill(255,255,255,180);
	// 			// // stroke(255)
	// 			// ellipse (j+5, i-5, 3, 9);
	// 			// }

			


	// 		else{
	// 			gRandom = random(190,255);
	// 			fill(0,200,gRandom,100);
	// 			noStroke();

	// 			randomSize2 = random(1,20);
	// 			ellipse (j, i, randomSize2, randomSize2);
	// 		}	
			

			
	// 	}
	// }


}

function draw(){
	background(0,31,102);

	unitSize = 25;
	for (i = 0; i <= height; i = i + unitSize) {
		for (j = 0; j <= width; j = j + unitSize) {
			pixelColor = R.get(j,i);
			console.log(pixelColor)
			

			if(JSON.stringify(pixelColor) == JSON.stringify([107, 189, 69, 255])){
				
				gRandom = random(120,255);

				fill(0,200,gRandom,220);
				stroke(255,255,255,120)

				randomSize = random(5,70);
				ellipse (j, i, randomSize, randomSize);
				}
				
				// fill(255,255,255,180);
				// // stroke(255)
				// ellipse (j+5, i-5, 3, 9);
				// }

			


			else{
				gRandom = random(190,255);
				fill(0,200,gRandom,100);
				noStroke();

				randomSize2 = random(1,20);
				ellipse (j, i, randomSize2, randomSize2);
			}	
			

			
		}
	}

}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-16","png")

}

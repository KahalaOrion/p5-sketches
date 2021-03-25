//Reference CLASS RECORDING— Friday, March 19

let R;

function preload(){
	R = loadImage('assets/R.png');
}

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	background(0);
	// image (R, 0,0);
	stroke(255)
	// fill(0);

	
	unitSize = 19;
	for (i = 0; i < height; i = i + unitSize) {
		for (j = 0; j < width; j = j + unitSize) {
			pixelColor = R.get(j,i);
			

			if(JSON.stringify(pixelColor) == JSON.stringify([107, 189, 69, 255])){
				
				gRandom = random(50,200);

				fill(0,gRandom,0);

				// randomSize = random(10,15);
				// ellipse (j, i, randomSize, randomSize);
				// randomPos = random(1000)
				triangle(j, i, j, i, 500, 400)
			}

			
		}
	}


}

function draw(){

}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-12","png")

}

// 


let R;

function preload(){
	R = loadImage('assets/R.png');
}

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	background(255);
	// image (R, 0,0);
	noStroke();

	
	unitSize = 10;
	for (i = 0; i < height; i = i + unitSize) {
		for (j = 0; j < width; j = j + unitSize) {
			pixelColor = R.get(j,i);

			fill(pixelColor);
			randomSize = random(1,5);

			rect (j, i, randomSize, randomSize);
		}
	}


}

function draw(){

}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-11","png")

}

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
	// noStroke();

	for (i = 0; i < height; i = i + 5) {
		for (j = 0; j < width; j = j + 5) {
			pixelColor = R.get(j,i);

			fill(pixelColor);
			randomSize = random(10,50);
			ellipse (j, i, randomSize, randomSize)
		}
	}


}

function draw(){

}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-11","png")

}

//Reference CLASS RECORDING— Friday, March 19

let R;
var xoff = 0;

function preload(){
	R = loadImage('assets/R.png');
}

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	background(0);
	frameRate(3);
	// image (R, 0,0);


	

}

function draw(){
	background(0)
	unitSize = 19;
	for (i = 0; i < height; i = i + unitSize) {
		for (j = 0; j < width; j = j + unitSize) {
			pixelColor = R.get(j,i);
			

			if(JSON.stringify(pixelColor) == JSON.stringify([107, 189, 69, 255])){
				
			

				
				// fill(255,255,255,100);
				noStroke()

				var randomSize = random(0,35);
				ellipse (j, i, randomSize, randomSize);
				randomOpacity = random(0,255)
				fill(255,255,255,randomOpacity)
				stroke(255,255,255,randomOpacity)
				triangle(j, i, j, i, 500, 400)
			}

			
		}
	}

}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-24","png")

}

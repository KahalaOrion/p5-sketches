//Reference The Coding Train I.5: 2D Noise - Perlin Noise and p5.js Tutorial

let R;

function preload(){
	R = loadImage('assets/R.png');
}

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	background(255);
	// image (R, 0,0);


	

}

function draw(){
	background(255)
	
	// noiseDetail(10,.08);
	var yoff = 0
	var inc = 0.08;


	unitSize = 5;
	for (y = 0; y <= height; y = y + unitSize) {
		var xoff = 0
		for (x = 0; x <= width; x = x + unitSize) {
			pixelColor = R.get(x,y);
			
		if(JSON.stringify(pixelColor) == JSON.stringify([107, 189, 69, 255])){
			
	
			var r = noise(xoff,yoff)*255;


			noStroke();
			fill(r)
			ellipse(x,y,14,14)

			xoff += inc;

			
			}
			else{
			noStroke();
			var r = noise(xoff,yoff)*100;
			fill(r)
			ellipse(x,y,14,14)

			xoff += inc;
			}
			
		}
		yoff += inc;
	}
}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-25","png")

}

//Reference CLASS RECORDING— Friday, March 19

let R;

function preload(){
	R = loadImage('assets/R.png');
}

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	background(0,79,118);
	// image (R, 0,0);
	stroke(0)
	// fill(0);

	
	unitSize = 40;
	for (i = 0; i < height; i = i + unitSize) {
		for (j = 0; j < width; j = j + unitSize) {
			pixelColor = R.get(j,i);
			console.log(pixelColor)
			

			if(JSON.stringify(pixelColor) == JSON.stringify([107, 189, 69, 255])){
				
				gRandom = random(100,255);

				fill(0,200,gRandom,200);
				noStroke();

				randomSize = random(10,80);
				ellipse (j, i, randomSize, randomSize);
				
				noFill()
				stroke(255)
				randomSize = random(50,60);
				ellipse (j, i, randomSize, randomSize);
				}
			

				// randomPosx = random(325,650)
				// randomPosy = random(250,450)

			else{
				// fill(0,1,200);
				// stroke(255);

				// randomSize2 = random(1,10);
				// ellipse (j, i, randomSize2, randomSize2);
			}	
			

			
		}
	}


}

function draw(){

}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-21493205","png")

}

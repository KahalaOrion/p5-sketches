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
	stroke(0)
	// fill(0);

	
	unitSize = 11;
	for (i = 0; i <= height; i = i + unitSize) {
		for (j = 0; j <= width; j = j + unitSize) {
			pixelColor = R.get(j,i);
			console.log(pixelColor)
			

			if(JSON.stringify(pixelColor) == JSON.stringify([107, 189, 69, 255])){
				

				fill(0);
				// strokeWeight(1)

				randomSize = random(10,30);
				ellipse (j, i, randomSize, randomSize);
				}
				// randomPosx = random(325,650)
				// randomPosy = random(250,450)

			else{

				
				fill(0);
				stroke(255)
				strokeWeight(.5)

				randomSize2 = random(40,120);
				ellipse (j, i, randomSize2, randomSize2);
			}	
			

			
		}
	}


}

function draw(){

}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-15","png")

}

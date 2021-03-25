

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	angleMode(DEGREES);
	slant = 565;
	background(0)
}

function draw(){


	// rect(x,y,width,height)
	// arc(x, y, w, h, startAngle, stopANgle, [mode], [detail])
	// line(x1, y1, x2, y2)



		for(var offset = 0; offset < 600; offset ++){
		stroke(0+offset/3)
		line(340, 400, offset + slant, height);
	}

	for (var x = 0; x <= 400;  x++){
		stroke(0+x/1.5)
		line(x, 0, x, height);
		}




	const totalSteps = 500;
	const startingEllipse = 1;
	const stepDistance = 1;

	noFill()
	for(i = 0; i < totalSteps; i++){
		stroke(0+i-290)
		ellipse(500, 300,startingEllipse + i*stepDistance, 10 + i*stepDistance)
	}


}

function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-10","png")

}

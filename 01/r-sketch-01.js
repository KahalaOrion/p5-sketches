function setup() {
	var c = createCanvas(1000,1000);
	print("setup function!")
	angleMode(DEGREES);
}

function draw(){
	fill (0);
	noStroke (255);


	// rect(x,y,width,height)
	// arc(x, y, w, h, startAngle, stopANgle, [mode], [detail])
	// line(x1, y1, x2, y2)

	rect(250,190,110,640);
	noFill();
	stroke (0);
	strokeWeight(100);
	strokeCap(PROJECT);
	arc(410, 377, 350, 275, 270, 90);
	// ellipse(500,400,350,350);
	
	line(500, 550, 620, 760);
	// rect(250,300,100,350)
	// fill(255)
	// ellipse (260,230,75,75)

	// var i = 0;
	// stroke(0)
	// while (i<100) {

	// 		ellipse(10*i,10*i,250,250)

	// 	i=i+1;
	// }



}

function mousePressed() {
	saveCanvas("sketch-01","png")
}
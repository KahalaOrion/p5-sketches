function setup() {
	var c = createCanvas(1000,1000);
	print("setup function!")
}

function draw(){
	fill (0);
	noStroke (255);


		// (x,y,width,height)

	rect(250,200,100,600);
	noFill();
	stroke (0);
	strokeWeight(80);
	strokeCap(PROJECT);
	arc(300, 400, 350, 350, 20,10, PI + QUARTER_PI, OPEN);
	// ellipse(500,400,350,350);
	
	line(380, 570, 590, 750);
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

// function mousePressed() {
// 	saveCanvas("sketch-01","png")
// }
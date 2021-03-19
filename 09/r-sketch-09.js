// Reference: The Coding Train- Coding Challenge #59: Steering Behaviors and xin xin- 1.1: Intro to textToPoints() - Experimental Typography - p5.js Tutorial

var klimaHeavy;

function preload() {
  klimaHeavy = loadFont('assets/klimaHeavy.ttf');
}

function setup() {
	createCanvas(1000,1000);
	background(255);

	// textFont(heavyHeap);
	// textSize(800);
	// fill(0);
	// noStroke();
	// text('R', 400, 700);

	let fontSize = 1000;
	var points = klimaHeavy.textToPoints('R', 180, 850,fontSize, {
		sampleFactor:0.3
	});

	for (var i = 0; i < points.length; i++){
		
		var pt = points[i];
		strokeWeight(1);
		stroke(0);
		
		noFill();
		// stroke(0,0,255);
		ellipse(pt.x, pt.y, 240, 200);
		// stroke(255,0,0);
		// ellipse(pt.x+5, pt.y+5, 240, 200)
		// stroke(0,255,0);
		// ellipse(pt.x-5, pt.y-5, 240, 200)

		
		
	}
		

}


// function mousePressed() {
// 	saveCanvas("sketch-08","png")
// }
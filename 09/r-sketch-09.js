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

	let fontSize = 900;
	var points = klimaHeavy.textToPoints('R', 200, 820,fontSize, {
		sampleFactor:0.09
	});

	for (var i = 0; i < points.length; i++){
		
		var pt = points[i];
		strokeWeight(1);
		noStroke();
		
		fill(0+i++);
		// stroke(0,0,255);
		// line(pt.y, 240, 100);
		ellipse(pt.x, pt.y,120,100)

		

		
		
	}
		

}


// function mousePressed() {
// 	saveCanvas("sketch-08","png")
// }
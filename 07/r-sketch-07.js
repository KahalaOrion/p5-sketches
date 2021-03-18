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
	var points = klimaHeavy.textToPoints('R', 200, 850,fontSize, {
		sampleFactor:0.08
	});

	for (var i = 0; i < points.length; i++){
		
		var pt = points[i];
		strokeWeight(1);
		stroke(0);
		line(pt.x, pt.y, 100, 390);
		// rect(pt.x, pt.y, 250, 50)
		// rect(pt.x, pt.y, 200, 50)
		// rect(pt.x, pt.y, 20, 20)
	}
		

}


// function mousePressed() {
// 	saveCanvas("sketch-07","png")
// }

var klimaHeavy;
let r = 0;

function preload() {
  klimaHeavy = loadFont('assets/klimaHeavy.ttf');
}

function setup() {
	createCanvas(1000,1000);
	background(0);
	colorMode(HSB,100);

	// textFont(heavyHeap);
	// textSize(800);
	// fill(0);
	// noStroke();
	// text('R', 400, 700);

}
function draw(){

	background(0)
	let fontSize = 1000;
	var points = klimaHeavy.textToPoints('R', 200, 850,fontSize, {
		sampleFactor:0.05
	});

for (var i = 0; i < points.length; i++){

	noFill()
	stroke(255)
	// strokeWeight(2)
	push();
	translate(points[i].x, points[i].y);
	rotate(r)
	r= r+1
	ellipse(0,0,100,50)
	pop();
	}
}



function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-22","png")

}
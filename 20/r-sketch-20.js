
var klimaHeavy;

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
		sampleFactor:0.9
	});



	for (var i = 0; i < points.length; i++){
		
		var pt = points[i];
		strokeWeight(.5);
		rStroke = random (20)
		stroke(rStroke,100,100);
		xRandom = random(400,500)
		yRandom = random(250,350)
		line(pt.x, pt.y, 260, yRandom);
	}
}



function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-20","png")

}
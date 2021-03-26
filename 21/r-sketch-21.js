
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
		sampleFactor:0.5
	});



	for (var i = 0; i < 1320; i++){
		
		var pt = points[i];
		strokeWeight(1);
		noStroke()
		fill(i/15,i,i)
		ellipse(pt.x, pt.y, 20, 20);
	}
}



function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-21","png")

}
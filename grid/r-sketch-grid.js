// Reference: The Coding Train 6.6: Nested Loops - Processing Tutorial

let rectColor;

function setup() {
	print("setup function!")
	createCanvas(1000,1000);
	rectMode(CENTER)
	background(0);
	stroke(255);
	

	

}

function draw(){
	
// rectColor=random(255)
	for (y = 0; y <= height; y = y + 50){
		for (x = 0; x <= width; x = x + 50){
			fill(0)
			// if(mouseClicked){
			// 	fill(rectColor)
			// }
			rect(mouseX, mouseY, 50, 50);
			
		}
	}

}

function mouseClicked(){
	rectColor=random(255)
	
		for (y = 0; y <= height; y = y + 50){
		for (x = 0; x <= width; x = x + 50){
		fill(rectColor)
		rect(x, y, 50, 50);
		}
	}
}




function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-15","png")

}
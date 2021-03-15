// Drawing with mouse

function setup() {
	print("setup function!")
	var c = createCanvas(1000,1000);
	background(0)
}

function draw(){
// (x,y,width,height)
stroke(250)
strokeWeight(1)
line(mouseX, mouseY, 500, 500)

}
	

// function mousePressed() {
// 	saveCanvas("sketch-02","png")
// }
// Reference: xin xin- 1.3 textToPoints() + Javascript splice()

let klimaHeavy;
let points;
let alphabet = [];
let bot = []

function preload() {
  klimaHeavy = loadFont('assets/klimaHeavy.ttf');
}

function setup() {
	createCanvas(1000,1000);
	rectMode (CENTER)
	// background(255);



	let fontSize = 1000;
	points = klimaHeavy.textToPoints('R', 150, 850, fontSize, {sampleFactor:0.2});

	for (let i = 0; i < points.length; i++){
		alphabet[i]= new Alphabet(points[i].x, points[i].y);
	}

	for (let i = 0; i < 20; i++){
		bot[i] = new Bot();
	}

	}

function draw() {
	background(255);

	 for (let i = 0; i < points.length; i++) {
	 	noFill()
	 	stroke(255,0,0)
	 	ellipse(points[i].x, points[i].y, 20, 20);
   		
		}

	 for (let i = 0; i < alphabet.length; i++) {
   		alphabet[i].show();
		}

	 for (let i = 0; i < 20; i++){
		bot[i].show();
		bot[i].move();
		bot[i].collisionDetection();

  }
		

		
	}

class Alphabet {

	constructor (x, y){
		this.x = x;
		this.y = y;

	}

	show() {
		fill (0);
		stroke(255);
		rect(this.x, this.y, 50, 30);
		}
		
	}

class Bot {

	constructor(){
		this.x = random(250,700);
		this.y = random (250, 800);
		this.direction = random(-1, 1);
		this.direction1 = random(-1, 1);
		this.d;
		}

	
	show(){

		// noFill();
		// noStroke();
		rect(this.x, this.y, 50, 30);
		}

	move(){

		this.x = this.x + this.direction;
		this.y = this.y + this.direction1;

		if (this.x > width || this.x < 0){
			this.direction = -this.direction;
			}

		if (this.y > height || this.y < 0){
			this.direction1 = -this.direction1;
			}

		}

	collisionDetection(){

		for (let i = 0; i < alphabet.length; i++){

			//this takes 2 parameters - x1, y1, x2, y2
			this.d = dist(alphabet[i].x, alphabet[i].y, this.x, this.y);

			if (this.d < 5){
				this.direction = -this.direction
				this.direction1 = -this.direction1

				alphabet.splice(i, 5);

				}
			}


		}

	}


function keyPressed(saveWork){
	if (saveWork.key == 's')
		saveCanvas("sketch-09","png")

}

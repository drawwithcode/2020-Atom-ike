var stars = [];
let myText = "You wish for Balance";
let myOtherText = "Balance is the key to everything.\nWhat we do, think, say, eat, fell,\nthey all require awareness\nand through this awareness we can grow.\nCreate your own safe balance.";
let nSlider;
let outerRadiusSlider;
let innerRadiusSlider;
let buttonSound;
// let rotationSlider;

function preload() {
buttonSound = loadSound("./assets/sounds/symbols_sound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  buttonSound.setVolume(0.07);
  buttonSound.play();

  push();
  buttonBack = createButton("BACK");
  buttonBack.position(windowWidth/5.5-buttonBack.width/2, windowHeight*13/14-buttonBack.height/2);
  buttonBack.mousePressed(changeSketchOne);
  pop();

  push();
  buttonSave = createButton("SAVE");
  buttonSave.position(windowWidth/2.0-buttonSave.width/2, windowHeight*13/14-buttonSave.height/2);
  buttonSave.mousePressed(saveCard);
  pop();

  push();
  buttonDone = createButton("DONE");
  buttonDone.position(windowWidth * 0.815-buttonDone.width/2, windowHeight*13/14-buttonDone.height/2);
  buttonDone.mousePressed(changeSketchTwo);
  pop();

  nSlider = createSlider (4, 20, 4, 1);
  nSlider.position(windowWidth * 7 / 22, windowHeight* 23/33);
  nSlider.size(200);
  outerRadiusSlider = createSlider (25, 100, 100, 1);
  outerRadiusSlider.position(windowWidth * 7 / 22, windowHeight* 25/33);
  outerRadiusSlider.size(200);
  innerRadiusSlider = createSlider (25, 100, 25, 1);
  innerRadiusSlider.position(windowWidth * 7 / 22, windowHeight* 27/33);
  innerRadiusSlider.size(200);
  // rotationSlider = createSlider (0, TAU, 0, PI/6);

  p1 = createP("POINTS");
  p1.position(windowWidth * 4 / 22, windowHeight* 22.55/33);

  p2 = createP("OUTER RADIUS");
  p2.position(windowWidth * 2 / 22, windowHeight* 24.55/33);

  p3 = createP("INNER RADIUS");
  p3.position(windowWidth * 2 / 22, windowHeight* 26.55/33);


  for (var i = 0; i < 100; i++) {
  stars[i] = new Star();
}


}


function draw() {
  background(9, 14, 36);

  for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}

  push();
  stroke(255);
  strokeWeight(1.5);
  // fill(193, 200, 232, 100);
  fill(255, 246, 210, 140);
  nPointedStar(width/2, height/2.1, nSlider.value(), outerRadiusSlider.value(), innerRadiusSlider.value());
  pop();

  push();
  fill(9, 14, 36);
  noStroke();
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight / 16.5, 230, 18);
  pop();

  push();
  fill(9, 14, 36);
  noStroke();
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight * 5.3/33, 300, 90);
  pop();

  //titolo
  push();
  textFont("Prata");
  textSize(20);
  textAlign(CENTER);
  fill("white");
  stroke(0, 14, 36);
  strokeWeight(1);
  text(myText, windowWidth / 2, windowHeight / 14);
  pop();


  //titolo
  push();
  textFont("Roboto Mono");
  textSize(13);
  textAlign(CENTER);
  fill("white");
  stroke(0, 14, 36);
  strokeWeight(1);
  text(myOtherText, windowWidth / 2, windowHeight * 4/33);
  pop();


  push();
  noStroke();
  fill(9, 14, 36);
  rectMode(CENTER);
  rect(windowWidth/5.5, windowHeight*13/14, 80, 40);
  pop();

  push();
  noStroke();
  fill(9, 14, 36);
  rectMode(CENTER);
  rect(windowWidth/2.0, windowHeight*13/14, 80, 40);
  pop();

  push();
  noStroke();
  fill(9, 14, 36);
  rectMode(CENTER);
  rect(windowWidth * 0.815, windowHeight*13/14, 80, 40);
  pop();

   }


 // star class //
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.025, 0.1);
		this.t = random(TAU);
	}

	draw() {
		this.t += 0.02;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}

function nPointedStar(x, y, n, outerRadius, innerRadius) {
  let theta = TAU / n;
  beginShape();

  for(let i = 0; i < n; i++) {
    vertex(x + cos(i * theta) * outerRadius, y + sin(i * theta) * outerRadius);
    vertex(x + cos((i + 0.5) * theta) * innerRadius, y + sin((i + 0.5) * theta) * innerRadius);
  }

  endShape(CLOSE);
}

function changeSketchOne() {
  window.open('symbols.html', '_self');
}

function changeSketchTwo() {
  window.open('movingsky.html', '_self');
}


function saveCard() {
  if (mouseIsPressed) save("Your_Wish");
}






function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// costanti stelle random + stelle cadenti
var fromX, fromY;
var toX, toY;
var step = 2.5;
let myTitle = "De-siderium";
let buttonSound;

function preload() {
buttonSound = loadSound("./assets/sounds/Sound_effect_1.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(9, 14, 36);


  //enter button
  push();
  buttonEnter = createButton("ENTER THE GALAXY");
  buttonEnter.position(windowWidth/2-buttonEnter.width/2, windowHeight*8/9-buttonEnter.height/2);
  buttonEnter.mousePressed(playSound);
  pop();
}


function draw() {
  // background("#090e24");
  background(9, 14, 36, 1);

  // stelle random + stelle cadenti
  if (random() > 0.92) {
    stroke(255);
    ellipse(random(width), random(height), random(0.1, 1.5));
  }

  if (random() > 0.95 && step >= 2.5) {
    fromX = random(width);
    fromY = random(height / 2);
    toX = random(fromX + 10, -width);
    toY = random(fromY + 10, -height / 2);
    step = 0;
  }

  if (step < 2.5) {
    let nextStep = step + 0.02;
    strokeWeight(3);
    stroke(9, 14, 36, 100);
    line(fromY, fromX, toY, toX);
    strokeWeight(0.7);

    if (step < 1) {
      stroke(255, (1 - step) * 200);
      line(lerp(fromY, toY, step), lerp(fromX, toX, step),
        lerp(fromY, toY, nextStep), lerp(fromX, toX, nextStep));
    }
    step = nextStep;
  }

  push();
  fill(9, 14, 36);
  noStroke();
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight / 2.1, 250, 50);
  pop();

  // testo Titolo
  push();
  fill("#dddddb");
  noStroke();
  textSize(40);
  textAlign(CENTER);
  textFont("Prata");
  text(myTitle, windowWidth / 2, windowHeight / 2);
  pop();

  push();
  noStroke();
  fill(9, 14, 36);
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight*8/9, 180, 40);
  pop();

}





  function playSound() {

  // If the user clicks on the button, play the sound!
if(buttonSound.isPlaying() == false){

buttonSound.play();
}   window.open('concept.html', '_self');
  }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

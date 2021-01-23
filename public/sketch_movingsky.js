//classe stelle
var stars = [];
var speed;
let timer = 5;
//testo
let myText = "Your wish is\nentering the galaxy";
//suono
let buttonSound;

function preload() {

  //suono
  buttonSound = loadSound("./assets/sounds/Sound_effect_1.mp3");
}

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }
  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);
    var r = map(this.z, 0, width, 6, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  }
}

function setup() {

  //suono
  buttonSound.setVolume(0.50);
  buttonSound.play();

  createCanvas(windowWidth, windowHeight);

  setTimeout(changeSketch, 5000);

  star = new Star();


  for (var i = 0; i < 500; i++) {
    stars[i] = new Star();
  }
}

function draw() {

  background(9, 14, 36);

  //testo
  push();
  textAlign(CENTER);
  textFont("Roboto Mono");
  textSize(15);
  fill("white");
  stroke(0, 14, 36);
  strokeWeight(3);
  text(myText, windowWidth / 2, windowHeight / 1.75);
  pop();

  //count
  push();
  textAlign(CENTER, CENTER);
  textFont("Prata");
  textSize(35);
  text(timer, width / 2, height / 2);
  pop();

  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }

  speed = map(50, 0, width, 5, 10);
  translate(width / 2, height / 2);

  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}


function changeSketch() {
  window.open('finalindex.html', '_self');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

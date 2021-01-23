//bottone enter
let buttonEnter;

//concept spiegazione
let data = "Welcome to the New Year's sky,\na place for introspection, where\nyour dreams are guarded.\n\nYou are not the only one who has\nhopes and goals for your future\nself: interact with the others\nby creating links between\nthe stars.\n\nWhich are your desires?\nPick one and express it!\n\nBut remember...\n\ndon't say it out loud,\nor it won't come true! \n\n\nAre your ready?";

// //suono
let buttonSound;

function preload() {

  //suono
  buttonSound = loadSound("./assets/sounds/Sound_effect_1.mp3");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(9, 14, 36);

  //suono
  buttonSound.setVolume(0.50);
  buttonSound.play();

  //typewriter
  typeWriter(data, 0, windowWidth * 2.8 / 22, windowHeight * 4 / 33, 50);

  //enter button
  push();
  buttonEnter = createButton("MAKE A WISH");
  buttonEnter.position(windowWidth / 2 - buttonEnter.width / 2, windowHeight * 8 / 9 - buttonEnter.height / 2);
  buttonEnter.mousePressed(changeSketch);
  pop();

}

function draw() {


}

function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    textFont("Roboto Mono");
    textSize(15);
    fill("white");
    stroke(9, 14, 36);
    strokeWeight(5);
    text(sentence.substring(0, n + 1), x, y);
    n++;

    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed)
    }, speed);
  }
}

function changeSketch() {
  window.open('symbols.html', '_self');
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

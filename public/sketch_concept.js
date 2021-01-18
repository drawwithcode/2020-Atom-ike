//bottone enter
let buttonEnter;
//testo 1
let myText = "MAKE A WISH";
//concept spiegazione
let data = "Welcome to the New Year's sky:\nhere your dreams are carefully\nguarded.\n\nNavigate and see the links\nbetween everyone's desires:\nyou are not the only one who\nhas hopes and goals for\nyour-future-self.\n\nWhich are your desires?\nPick one and express it!\n\nBut remember...\ndon't say it out loud,\nor it won't come true! \n\n\nAre your ready?";
// //suono
let buttonSound;



function preload() {
  //suono
  buttonSound = loadSound("./assets/sounds/Sound_effect_1.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(9, 14, 36);

  buttonSound.setVolume(0.10);
  buttonSound.play();


  //typewriter
  typeWriter(data, 0, windowWidth * 2.8 / 22, windowHeight * 4 / 33, 50);

  //enter button
  push();
  buttonEnter = createButton("MAKE A WISH");
  buttonEnter.position(windowWidth / 2 - buttonEnter.width / 2, windowHeight * 8 / 9 - buttonEnter.height / 2);
  // buttonEnter.center();
  // buttonEnter.center();
  // buttonEnter.position(0, 0);
  buttonEnter.mousePressed(changeSketch);
  pop();

}

function draw() {


  // push();
  // rectMode(CENTER);
  // fill("red");
  // rect(windowWidth/2, windowHeight/2, 400, 400);
  // pop();

  // push();
  // fill("#dddddb");
  // textSize(12);
  // textAlign(CENTER);
  // textFont("Roboto Mono");
  // text(myText, windowWidth / 2, windowHeight / 5);
  // pop();

  // push();
  // noStroke();
  // fill(9, 14, 36);
  // rectMode(CENTER);
  // rect(windowWidth/2, windowHeight*8/9, 180, 40);
  // pop();

}

function typeWriter(sentence, n, x, y, speed) {
  if (n < (sentence.length)) {
    textFont("Roboto Mono");
    textSize(16);
    // textAlign(CENTER);
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

// function playSound() {
//
//   // If the user clicks on the button, play the sound!
//   if (buttonSound.isPlaying() == false) {
//
//     buttonSound.play();
//   }
//   window.open('symbols.html', '_self');
// }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

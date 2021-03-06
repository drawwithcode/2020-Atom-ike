//testo
let myText = "Choose your type of wish:";

//bottoni
let buttonAutonomy;
let buttonGrowth;
let buttonOvercoming;
let buttonDiscovery;
let buttonExpression;
let buttonOpenness;
let buttonBalance;
let buttonInteraction;
let buttonAbundance;
let buttonSelflove;
let buttonRomance;
let buttonCloseness;
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

  //_____________________________

  //autonomy button
  autonomybutton = createImg('./assets/images/autonomy_1.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 1 / 22, windowHeight * 4 / 33);
  autonomybutton.mousePressed(changeSketchOne);

  //growth button
  growthbutton = createImg('./assets/images/growth_2.png');
  growthbutton.size(110, 110);
  growthbutton.position(windowWidth * 8 / 22, windowHeight * 4 / 33);
  growthbutton.mousePressed(changeSketchTwo);

  //overcoming button
  overcomingbutton = createImg('./assets/images/overcoming_3.png');
  overcomingbutton.size(110, 110);
  overcomingbutton.position(windowWidth * 15 / 22, windowHeight * 4 / 33);
  overcomingbutton.mousePressed(changeSketchThree);

  //discovery button
  discoverybutton = createImg('./assets/images/discovery_4.png');
  discoverybutton.size(110, 110);
  discoverybutton.position(windowWidth * 1 / 22, windowHeight * 11 / 33);
  discoverybutton.mousePressed(changeSketchFour);

  //expression button
  expressionbutton = createImg('./assets/images/expression_5.png');
  expressionbutton.size(110, 110);
  expressionbutton.position(windowWidth * 8 / 22, windowHeight * 11 / 33);
  expressionbutton.mousePressed(changeSketchFive);

  //openness button
  opennessbutton = createImg('./assets/images/openness_6.png');
  opennessbutton.size(110, 110);
  opennessbutton.position(windowWidth * 15 / 22, windowHeight * 11 / 33);
  opennessbutton.mousePressed(changeSketchSix);

  //balance button
  balancebutton = createImg('./assets/images/balance_7.png');
  balancebutton.size(110, 110);
  balancebutton.position(windowWidth * 1 / 22, windowHeight * 18 / 33);
  balancebutton.mousePressed(changeSketchSeven);

  //interaction button
  interactionbutton = createImg('./assets/images/interaction_8.png');
  interactionbutton.size(110, 110);
  interactionbutton.position(windowWidth * 8 / 22, windowHeight * 18 / 33);
  interactionbutton.mousePressed(changeSketchEight);

  //abundance button
  abundancebutton = createImg('./assets/images/abundance_9.png');
  abundancebutton.size(110, 110);
  abundancebutton.position(windowWidth * 15 / 22, windowHeight * 18 / 33);
  abundancebutton.mousePressed(changeSketchNine);

  //selflove button
  selflovebutton = createImg('./assets/images/selflove_10.png');
  selflovebutton.size(110, 110);
  selflovebutton.position(windowWidth * 1 / 22, windowHeight * 25 / 33);
  selflovebutton.mousePressed(changeSketchTen);

  //romance button
  romancebutton = createImg('./assets/images/romance_11.png');
  romancebutton.size(110, 110);
  romancebutton.position(windowWidth * 8 / 22, windowHeight * 25 / 33);
  romancebutton.mousePressed(changeSketchEleven);

  //closeness button
  closenessbutton = createImg('./assets/images/closeness_12.png');
  closenessbutton.size(110, 110);
  closenessbutton.position(windowWidth * 15 / 22, windowHeight * 25 / 33);
  closenessbutton.mousePressed(changeSketchTwelve);
}


function draw() {

  push();
  fill(9, 14, 36);
  noStroke();
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight / 16.5, 240, 18);
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

}

//categories pages

function changeSketchOne() {
  window.open('autonomy.html', '_self');
}

function changeSketchTwo() {
  window.open('growth.html', '_self');
}

function changeSketchThree() {
  window.open('overcoming.html', '_self');
}

function changeSketchFour() {
  window.open('discovery.html', '_self');
}

function changeSketchFive() {
  window.open('expression.html', '_self');
}

function changeSketchSix() {
  window.open('openness.html', '_self');
}

function changeSketchSeven() {
  window.open('balance.html', '_self');
}

function changeSketchEight() {
  window.open('interaction.html', '_self');
}

function changeSketchNine() {
  window.open('abundance.html', '_self');
}

function changeSketchTen() {
  window.open('selflove.html', '_self');
}

function changeSketchEleven() {
  window.open('romance.html', '_self');
}

function changeSketchTwelve() {
  window.open('closeness.html', '_self');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

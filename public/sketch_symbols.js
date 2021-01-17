// classe cards
// let myCards = [];
//testo
let myText = "Choose your type of wish:";
// // //suono bottone
// let buttonSound;

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

function preload() {
  buttonSound = loadSound("./assets/sounds/Sound_effect_1.mp3");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(9, 14, 36);

  //autonomy button
  autonomybutton = createImg('./assets/images/autonomy_1.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 1 / 22, windowHeight * 4 / 33);
  autonomybutton.mousePressed(changeSketchOne);

  //growth button
  autonomybutton = createImg('./assets/images/growth_2.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 8 / 22, windowHeight * 4 / 33);
  autonomybutton.mousePressed(changeSketchTwo);

  //overcoming button
  autonomybutton = createImg('./assets/images/overcoming_3.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 15 / 22, windowHeight * 4 / 33);
  autonomybutton.mousePressed(changeSketchThree);

  //discovery button
  autonomybutton = createImg('./assets/images/discovery_4.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 1 / 22, windowHeight * 11 / 33);
  autonomybutton.mousePressed(changeSketchFour);

  //expression button
  autonomybutton = createImg('./assets/images/expression_5.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 8 / 22, windowHeight * 11 / 33);
  autonomybutton.mousePressed(changeSketchFive);

  //openness button
  autonomybutton = createImg('./assets/images/openness_6.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 15 / 22, windowHeight * 11 / 33);
  autonomybutton.mousePressed(changeSketchSix);

  //balance button
  autonomybutton = createImg('./assets/images/balance_7.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 1 / 22, windowHeight * 18 / 33);
  autonomybutton.mousePressed(changeSketchSeven);

  //interaction button
  autonomybutton = createImg('./assets/images/interaction_8.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 8 / 22, windowHeight * 18 / 33);
  autonomybutton.mousePressed(changeSketchEight);

  //abundance button
  autonomybutton = createImg('./assets/images/abundance_9.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 15 / 22, windowHeight * 18 / 33);
  autonomybutton.mousePressed(changeSketchNine);

  //selflove button
  autonomybutton = createImg('./assets/images/selflove_10.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 1 / 22, windowHeight * 25 / 33);
  autonomybutton.mousePressed(changeSketchTen);

  //romance button
  autonomybutton = createImg('./assets/images/romance_11.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 8 / 22, windowHeight * 25 / 33);
  autonomybutton.mousePressed(changeSketchEleven);

  //closeness button
  autonomybutton = createImg('./assets/images/closeness_12.png');
  autonomybutton.size(110, 110);
  autonomybutton.position(windowWidth * 15 / 22, windowHeight * 25 / 33);
  autonomybutton.mousePressed(changeSketchTwelve);


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

//   //classe
//   buildCards();
//   for (i = 0; i <= myCards.length; i++) {
//     myCards[i].display();
//   }
// }

// function buildCards() {
//
//   //cards
//   Autonomy = new Card(windowWidth * 1 / 22, windowHeight * 4 / 33, './assets/images/autonomy_1.png');
//   myCards.push(Autonomy);
//   Growth = new Card(windowWidth * 8 / 22, windowHeight * 4 / 33, './assets/images/growth_2.png');
//   myCards.push(Growth);
//   Overcoming = new Card(windowWidth * 15 / 22, windowHeight * 4 / 33, './assets/images/overcoming_3.png');
//   myCards.push(Overcoming);
//   Discovery = new Card(windowWidth * 1 / 22, windowHeight * 11 / 33, './assets/images/discovery_4.png');
//   myCards.push(Discovery);
//   Expression = new Card(windowWidth * 8 / 22, windowHeight * 11 / 33, './assets/images/expression_5.png');
//   myCards.push(Expression);
//   Openness = new Card(windowWidth * 15 / 22, windowHeight * 11 / 33, './assets/images/openness_6.png');
//   myCards.push(Openness);
//   Balance = new Card(windowWidth * 1 / 22, windowHeight * 18 / 33, './assets/images/balance_7.png');
//   myCards.push(Balance);
//   Interaction = new Card(windowWidth * 8 / 22, windowHeight * 18 / 33, './assets/images/interaction_8.png');
//   myCards.push(Interaction);
//   Abundance = new Card(windowWidth * 15 / 22, windowHeight * 18 / 33, './assets/images/abundance_9.png');
//   myCards.push(Abundance);
//   Selflove = new Card(windowWidth * 1 / 22, windowHeight * 25 / 33, './assets/images/selflove_10.png');
//   myCards.push(Selflove);
//   Romance = new Card(windowWidth * 8 / 22, windowHeight * 25 / 33, './assets/images/romance_11.png');
//   myCards.push(Romance);
//   Closeness = new Card(windowWidth * 15 / 22, windowHeight * 25 / 33, './assets/images/closeness_12.png');
//   myCards.push(Closeness);
//
// }
//
// //classe
// function Card(xpos, ypos, card) {
//   this.x = xpos;
//   this.y = ypos;
//   this.card = card;
//
//
//   this.display = function() {
//     button = createImg(this.card);
//     button.size(60 * 1.8, 60 * 1.8);
//     button.position(this.x, this.y);
//     noFill();
//     noStroke();
//     rect(this.x + 70, this.y + 50);
//   }
//
//   this.clicked = function(){
//     var d = dist(mouseX, mouseY, this.x+55, this.y+50);
//     if (d<65){
//       this.th.play();
//     }
//   }
// }


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

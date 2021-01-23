// Create a new connection using socket.io (imported in index.html)
let socket = io();
let myColor = "white";
// let buttonSend;
var backgroundSound;
//classe stars
let stars = [];
//message variabili
var currX;
var currY;
var prevX = -1;
var prevY = -1;

// define the function that will be called on a new newConnection
socket.on("connect", newConnection);
socket.on("mouseBroadcast", otherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer);


function newPlayer() {
  // console.log(newPlayerColor);
  push();
  fill(9, 14, 36);
  rectMode(CENTER);
  noStroke();
  rect(width / 2, height / 10.5, 270, 25);
  textFont("Prata");
  textSize(18);
  textAlign(CENTER);
  fill("white");
  noStroke();
  text("Someone else is making a wish", width / 2, height / 10);
  pop();
}

function setColor(assignedColor) {
  myColor = assignedColor;
}

function newConnection() {
  console.log("your id:", socket.id);
}

// Define which function should be called when a new message
// comes from the server with type "mouseBroadcast"

function preload() {
  //suono
  backgroundSound = loadSound("./assets/sounds/background_sound.mp3");

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(9, 14, 36);

  //paragraphs
  // p = createP("Zoom in to find your galaxy");
  // p.position(windowWidth / 2 - 100, windowHeight * 6 / 7);

  p = createP("Tap on the sky to create");
  p.position(windowWidth / 2 - 90, windowHeight * 6.3 / 7);

  p = createP("constellations with other users");
  p.position(windowWidth / 2 - 115, windowHeight * 6.5 / 7);

  //categories
  p1 = createDiv("Autonomy");
  p1.position(windowWidth / 2.4, windowHeight / 1.9);

  p2 = createDiv("Balance");
  p2.position(windowWidth / 4, windowHeight / 5.9);

  p3 = createDiv("Expression");
  p3.position(windowWidth / 10, windowHeight / 3.2);

  p4 = createDiv("Overcoming");
  p4.position(windowWidth / 6, windowHeight * 1.9/3);

  p5 = createDiv("Romance");
  p5.position(windowWidth * 3/4, windowHeight * 2 / 3);

  p6 = createDiv("Self love");
  p6.position(windowWidth * 4 / 5, windowHeight / 3.6);

  p7 = createDiv("Interaction");
  p7.position(windowWidth / 2, windowHeight / 2.9);

  p8 = createDiv("Closeness");
  p8.position(windowWidth * 3 / 5, windowHeight / 6.1);

  p9 = createDiv("Abundance");
  p9.position(windowWidth * 0.2, windowHeight * 4/5);

  p10 = createDiv("Openness");
  p10.position(windowWidth * 3.5 / 5, windowHeight * 6.5 / 8);

  p11 = createDiv("Discovery");
  p11.position(windowWidth * 3.9 / 5, windowHeight / 2.2);

  p12 = createDiv("Growth");
  p12.position(windowWidth / 13, windowHeight / 2.2);

  //suono
  backgroundSound.setVolume(0.10);
  backgroundSound.play();
  backgroundSound.loop();

  for (let i = 0; i < 180; i++) {
    stars.push(new Constellation());
  }
}

// Callback function called when a new message comes from the server
// Data parameters will contain the received data

function otherMouse(data) {
  console.log("received:", data);

  push();
  strokeWeight(4);
  stroke(93, 133, 213);
  point(data.x, data.y);
  pop();

  push();
  strokeWeight(0.5);
  stroke(93, 133, 213);
  line(data.x, data.y, data.x2, data.y2);
  pop();

}

function mouseClicked() {
  console.log("sending: ", currX, currY, prevX, prevY);

  currX = mouseX;
  currY = mouseY;

  push();
  strokeWeight(4);
  stroke(255);
  point(currX, currY);
  pop();

  strokeWeight(0.5);
  stroke(255);

  var message;

  if (prevX == -1) {
    line(currX, currY, currX, currY);

    let message = {
      x: currX,
      y: currY,
      x2: currX,
      y2: currY,
    };
  } else {
    line(currX, currY, prevX, prevY);

    let message = {
      x: currX,
      y: currY,
      x2: prevX,
      y2: prevY,
    };

    socket.emit("mouse", message);
  }

  prevX = currX;
  prevY = currY;


}


function draw() {

  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
  }
}



class Constellation {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.d = random(0.8, 1.8);
    this.clicked = false;
  }

  display() {
    noStroke();
    if (this.clicked == true) {
      ellipse(this.x, this.y, this.d + 3.5);
    } else {
      ellipse(this.x, this.y, this.d);
    }
  }
}

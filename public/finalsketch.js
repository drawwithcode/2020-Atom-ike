// Create a new connection using socket.io (imported in index.html)
let socket = io();
let myColor = "white";
let buttonBack;
var backgroundSound;


// define the function that will be called on a new newConnection
socket.on("connect", newConnection);
socket.on("mouseBroadcast", otherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer);


function newPlayer() {
// console.log(newPlayerColor);
push();
fill(255, 255, 255, 100);
rectMode(CENTER);
stroke("white");
strokeWeight(1);
rect(width / 2, height * 0.95 / 10, 230, 40);
textFont("Roboto Mono");
textSize(12);
textAlign(CENTER);
fill("white");
noStroke();
// stroke("white");
text("Another user is making a wish", width / 2, height / 10);
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
  backgroundSound = loadSound("./assets/sounds/background_sound.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(9, 14, 36);

  backgroundSound.setVolume(0.10);
  backgroundSound.play();
  backgroundSound.loop();

  push();
  buttonBack = createButton("SEND");
  buttonBack.position(windowWidth/2-buttonBack.width/2, windowHeight*12/14-buttonBack.height/2);
  buttonBack.mousePressed();
  pop();

}

// Callback function called when a new message comes from the server
// Data parameters will contain the received data



function otherMouse(data) {
  console.log("received:", data);
  noStroke();
  fill("yellow");
  ellipse(data.x, data.y, 20);
}

function mouseDragged() {
  console.log("sending: ", mouseX, mouseY);
  noStroke();
  fill(255);

  // create an object containing the mouse position
  let message = {
    x: mouseX,
    y: mouseY,
  };
  // send the object to server,
  // tag it as "mouse" event
  socket.emit("mouse", message);

  ellipse(mouseX, mouseY, 20);
}

function draw() {

}

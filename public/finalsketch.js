// Create a new connection using socket.io (imported in index.html)
let socket = io();
let myColor = "white";
let buttonSend;
var backgroundSound;

let stars = [];
let lines = [];

// var star;



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


  // star = { //star element to define behavior of shooting star
  //   starX : mouseX,
  //   starY : mouseY,
  //   size : random(0.5, 1)
  // }

  backgroundSound.setVolume(0.10);
  backgroundSound.play();
  backgroundSound.loop();

  push();
  buttonSend = createButton("SEND");
  buttonSend.position(windowWidth/2-buttonSend.width/2, windowHeight*12/14-buttonSend.height/2);
  // buttonSend.mousePressed(anotherStar);
  pop();

  for (let i = 0; i < width * 0.22; i++) {
    stars.push(new Constellation());
  }
}

// Callback function called when a new message comes from the server
// Data parameters will contain the received data
function otherMouse(data) {
  console.log("received:", data);
  noStroke();
  fill("red");
  ellipse(data.x, data.y, 4);

}

function mouseClicked() {
  console.log("sending: ", mouseX, mouseY);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 4);


  // create an object containing the mouse position
  let message = {
    x: mouseX,
    y: mouseY,
  };
  // send the object to server,
  // tag it as "mouse" event
  socket.emit("mouse", message);

}

function draw() {
  for (let i = 0; i < stars.length; i++) {
      stars[i].twinkle();
      stars[i].display();
    }

//   push();
//   ellipseMode(CENTER); //Draw stars in the canvas
//   fill(255, 255, 255, 20);
//   strokeWeight(0);
//   pop();
//
//
//   //Draw shooting star
// push();
// ellipseMode(CENTER);
// fill(255, 255, 255, 20);
// strokeWeight(0);
// ellipse(star.starX, star.starY, star.size, star.size);
// star.starX = star.starX+1; //Move shoouting star
// star.starY = star.starY-1;
// star.size = star.size + 0.02
// pop();
 //Decreases the size of shooting star
  }
//
//   function anotherStar() {
//   star = {
//   starX : random(windowWidth),
//   starY : random(windowHeight),
//   size : random(0.5, 3)
// }
//   }


  function mousePressed() {
    for (let i = 0; i < stars.length; i++) {
      stars[i].starClick(mouseX, mouseY);
      stars[i].lineDraw();
    }
  }

  class Constellation {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.d = random(1, 3);
    this.clicked = false;
  }

  display() {
    noStroke();
    if (this.clicked == true) {
      ellipse(this.x, this.y, this.d + 4);
    } else {
      ellipse(this.x, this.y, this.d);
    }
  }

  twinkle() {
    this.r = random(110, 255);
    this.g = random(207, 254);
    this.b = random(204, 255);
    fill(this.r, this.g, this.b);
  }


  starClick(mx, my) {
    if (dist(mx, my, this.x, this.y) < this.d / 2 + 1) {
      this.clicked = !this.clicked;
      lines.push(this.x, this.y);
    }
  }

  lineDraw() {
    if (lines.length == 4) {
      stroke(239, 255, 253, 95);
      line(lines[0], lines[1], lines[2], lines[3]);
      lines.splice(0, 2);
    }

  // let message = {
  //   x: this.x,
  //   y: this.y,
  // };
  //   socket.emit("mouse", message);
  }
}

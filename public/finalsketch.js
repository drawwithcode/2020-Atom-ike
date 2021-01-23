// Create a new connection using socket.io (imported in index.html)
let socket = io();
let myColor = "white";
// let buttonSend;
var backgroundSound;

let stars = [];
// let lines = [];

//
var currX ;
var currY ;
var prevX = -1;
var prevY = -1;

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
  rect(width / 2, height * 1.2 / 10, 230, 20);
  textFont("Roboto Mono");
  textSize(12);
  textAlign(CENTER);
  fill("white");
  noStroke();
  // stroke("white");
  text("Someone else is making a wish", width / 2, height / 8);
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

  //title
  p = createP("Zoom and find your galaxy");
  p.position(windowWidth / 2 - 100, 0);

  p = createP("Tap on the stars and create a constellation");
  p.position(windowWidth / 2 - 155, 25);

  //categories
  p1 = createDiv("Autonomy");
  p1.position(windowWidth / 2, windowHeight / 2);

  p2 = createDiv("Balance");
  p2.position(windowWidth / 4, windowHeight / 4.7);

  p3 = createDiv("Expression");
  p3.position(windowWidth / 10, windowHeight / 3.2);

  p4 = createDiv("Overcoming");
  p4.position(windowWidth / 6, windowHeight * 5.5 / 8);

  p5 = createDiv("Romance");
  p5.position(windowWidth * 3 / 4, windowHeight * 2 / 3);

  p6 = createDiv("Self love");
  p6.position(windowWidth * 4 / 5, windowHeight / 3.6);

  p7 = createDiv("Interaction");
  p7.position(windowWidth / 2, windowHeight / 3);

  p8 = createDiv("Closeness");
  p8.position(windowWidth * 3 / 5, windowHeight / 5);

  p9 = createDiv("Abundance");
  p9.position(windowWidth / 11, windowHeight * 7 / 8);

  p10 = createDiv("Openness");
  p10.position(windowWidth * 4 / 5, windowHeight * 6.5 / 8);

  p11 = createDiv("Discovery");
  p11.position(windowWidth * 4 / 5, windowHeight / 2);

  p12 = createDiv("Growth");
  p12.position(windowWidth / 13, windowHeight / 2);




  backgroundSound.setVolume(0.10);
  backgroundSound.play();
  backgroundSound.loop();

  // push();
  // buttonSend = createButton("SEND");
  // buttonSend.position(windowWidth / 2 - buttonSend.width / 2, windowHeight * 12 / 14 - buttonSend.height / 2);
  // // buttonSend.mousePressed(anotherStar);
  // pop();

  for (let i = 0; i < 180; i++) {
    stars.push(new Constellation());
  }
}

// Callback function called when a new message comes from the server
// Data parameters will contain the received data

function otherMouse(data) {
  console.log("received:", data);

  // var cx = data.x;
  // var cy = data.y;
  // var px = data.x2;
  // var py = data.y2;



  // data.x = data.x2;
  // data.y = data.y2;


  push();
  strokeWeight(4);
  stroke("yellow");
  point(data.x, data.y);
  pop();

  push();
  strokeWeight(0.5);
  stroke("yellow");
  line(data.x, data.y, data.x2, data.y2);
  pop();
  //


    // prevX = currX;
    // prevY = currY;



  // prevX = mouseX;
  // prevY = mouseY;
  //


}

// function mousePressed() {
//   console.log("sending: ", mouseX, mouseY, prevX, prevY);
//
//   push();
//   strokeWeight(4);
//   stroke(255);
//   point(mouseX, mouseY);
//   pop();
//
// push();
// strokeWeight(0.5);
// stroke(255);
// // line(mouseX, mouseY, prevX, prevY);
// line(mouseX, mouseY, prevX, prevY);
// pop();
//
// // push();
// // strokeWeight(4);
// // stroke(255);
// // point(mouseX, mouseY);
// // pop();
//
// prevX = mouseX;
// prevY = mouseY;
//
//   // noStroke();
//   // fill(255);
//   // ellipse(mouseX, mouseY, 4);
//
//
//   // create an object containing the mouse position
//
//   let message = {
//     x: mouseX - prevX,
//     y: mouseY - prevY,
//     x2: prevX,
//     y2: prevY,
//
//     // ln: lines,
//     // st: stars,
//   };
//   // send the object to server,
//   // tag it as "mouse" event
//   socket.emit("mouse", message);
//
//
// }

function mouseClicked() {
  console.log("sending: ", currX, currY, prevX, prevY);

  // prevX = currX;
  // prevY = currY;

  currX = mouseX;
  currY = mouseY;



  push();
  strokeWeight(4);
  stroke(255);
  point(currX, currY);
  pop();


  strokeWeight(0.5);
  stroke(255);
  // line(mouseX, mouseY, prevX, prevY);
 var message;

  if (prevX == -1) {
   line(currX, currY, currX, currY);

   let message = {
     x: currX,
     y: currY,
     x2: currX,
     y2: currY,
   };
  }

  else {
    line(currX, currY, prevX, prevY);

    let message = {
      x: currX,
      y: currY,
      x2: prevX,
      y2: prevY,
    };

      socket.emit("mouse", message);
  }


  // send the object to server,
  // tag it as "mouse" event
  // socket.emit("mouse", message);

  prevX = currX;
  prevY = currY;



  // push();
  // strokeWeight(4);
  // stroke(255);
  // point(mouseX, mouseY);
  // pop();

  // prevX = currX;
  // prevY = currY;



  // noStroke();
  // fill(255);
  // ellipse(mouseX, mouseY, 4);


  // create an object containing the mouse position

  // let message = {
  //   x: (currX + prevX),
  //   y: (currY + prevY),
  //   x2: prevX,
  //   y2: prevY,
  //
  //   // ln: lines,
  //   // st: stars,
  // };
  // // send the object to server,
  // // tag it as "mouse" event
  // socket.emit("mouse", message);


}

// function mousePressed() {
//   console.log("sending: ", mouseX, mouseY, prevX, prevY);
//
//
// push();
// strokeWeight(4);
// stroke(255);
// point(mouseX, mouseY);
// pop();
//
//
//
//
//   // create an object containing the mouse position
//   let message = {
//     x: mouseX,
//     y: mouseY,
//
//     // ln: lines,
//     // st: stars,
//   };
//   // send the object to server,
//   // tag it as "mouse" event
//   socket.emit("mouse", message);
//
// }

function draw() {

  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
  }


  push();
  fill(9, 14, 36);
  noStroke();
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight / 13, 310, 25);
  pop();

  push();
  fill(9, 14, 36);
  noStroke();
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight / 25, 200, 27);
  pop();


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

  // twinkle() {
  //   this.r = random(110, 255);
  //   this.g = random(207, 254);
  //   this.b = random(204, 255);
  //   fill(this.r, this.g, this.b);
  // }

  //
  // starClick(mx, my) {
  //   if (dist(mx, my, this.x, this.y) < this.d / 2 + 1) {
  //     this.clicked = !this.clicked;
  //     lines.push(this.x, this.y);
  //   }
  // }
  //
  // lineDraw() {
  //   if (lines.length == 4) {
  //     stroke(239, 255, 253, 95);
  //     line(lines[0], lines[1], lines[2], lines[3]);
  //     lines.splice(0, 2);
  //   }
  // }
  // let message = {
  //   x: this.x,
  //   y: this.y,
  // };
  //   socket.emit("mouse", message);

}

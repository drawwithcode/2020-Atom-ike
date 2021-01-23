// var immagine;
//
// function preload(){
//  //load immagine
// }
//
// function setup(){
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw(){
//   clear();
//   background();
//
//
//   push();
//   imageMode(CENTER);
//   image(menuillustration, windowWidth/2, windowHeight/2, width/2, width/4);
//
//   //Show Logo
//   image(logo, windowWidth/2, windowHeight*3/16, width/3, width/6);
//   pop();
//
//   //Create text
//   push();
//   textAlign(CENTER);
//   textSize(width/70);
//   fill("#3499fe");
//   text("Connect your mobile device to use this WebApp!", width/2, height*7/8);
//   pop();
//
//
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

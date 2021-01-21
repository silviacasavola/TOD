let gif;
let gif2;
let gif3;

let frameNumber = 0;
let frameNumber2 = 0;
let frameNumber3 = 0;



 function preload() {
   gif = loadImage('assets/img/scopri/tod.gif');
 }

 function setup() {
// PLACES THE FOOTER AT THE BOTTOM
  const pageHeight = document.documentElement.scrollHeight;
  // console.log("pageHeight =" + pageHeight);

  const footer = document.getElementById("footer");

  select("#footer").position(0, pageHeight)


// 1ST GIF
   var cnv1 = createCanvas(windowWidth, windowHeight)
   cnv1.parent("first-section");
   cnv1.style("position", "absolute")
   cnv1.style("top", "10vh")
   // cnv1.style("border-style", "solid")
   cnv1.style("z-index", "20")
   cnv1.position(0, 0);

   select("#first-section").mouseWheel(animateGif);
   gif.setFrame(0);
 }

function draw() {
clear();

image(gif, 0, 0, windowWidth, windowHeight);
  gif.pause();
}

function animateGif(event) {
let maxFrame = gif.numFrames();

let y = floor(constrain(event.deltaY, -1, 1));

if (y>0 && frameNumber < maxFrame || y<0 && frameNumber > 0) {
    frameNumber = frameNumber + y;
    gif.play()
    gif.setFrame(frameNumber);
  }
else {
  gif.pause();
  gif.setFrame(frameNumber);
}
}


// 2ND GIF

let sketch = function(s2) {

s2.preload = function() {
  gif2 = s2.loadImage('assets/img/scopri/core.gif');
}

s2.setup = function() {
var cnv2 = s2.createCanvas(s2.windowWidth, s2.windowHeight)

cnv2.parent("second-section")
cnv2.style("position", "absolute")
// cnv2.style("border-style", "solid")
cnv2.style("z-index", "-20")
cnv2.position(0, 0)
s2.select("#second-section").mouseWheel(s2.animategif2);

gif2.setFrame(0);
  }

s2.draw = function() {
s2.clear();

s2.image(gif2, s2.windowWidth/2 , 0, (s2.windowHeight/5)*3, s2.windowHeight);
gif2.pause();
}

s2.animategif2 = function(event) {
let maxFrame = gif2.numFrames();

let y = floor(constrain(event.deltaY, -1, 1));

if (y>0 && frameNumber2 < maxFrame || y<0 && frameNumber2 > 0) {
    frameNumber2 = frameNumber2 + y;
    gif2.play()
    gif2.setFrame(frameNumber2);
  }
else {
  gif2.pause();
  gif2.setFrame(frameNumber2);
}
}

}

let s2 = new p5(sketch);


// 3RD GIF

let sketch2 = function(s3) {

s3.preload = function() {
  gif3 = s3.loadImage('assets/img/scopri/hub.gif');
}

s3.setup = function() {
var cnv3 = s3.createCanvas(s3.windowWidth, s3.windowHeight)

cnv3.parent("third-section")
cnv3.style("position", "absolute")
// cnv3.style("border-style", "solid")
cnv3.style("z-index", "-20")
cnv3.position(0, 0)
s3.select("#third-section").mouseWheel(s3.animategif3);

gif3.setFrame(0);
}

s3.draw = function() {

let size = gif3.width * 0.5;

s3.clear();

s3.scale(0.5)
s3.image(gif3, s3.windowWidth - size/2, s3.windowHeight/4);

gif3.pause();
}

s3.animategif3 = function(event) {
let maxFrame = gif3.numFrames();

let y = floor(constrain(event.deltaY, -1, 1));

if (y>0 && frameNumber3 < maxFrame || y<0 && frameNumber3 > 0) {
    frameNumber3 = frameNumber3 + y;
    gif3.play()
    gif3.setFrame(frameNumber3);
  }
else {
  gif3.pause();
  gif3.setFrame(frameNumber3);
}
}

}

let s3 = new p5(sketch2);

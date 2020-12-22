function setup() {
  cnv = createCanvas(0, 0);
}

function draw() {
	background(color("white"));


// CLAIM
let myText;

    if (mouseX < windowWidth/2 && mouseY > windowHeight/2 && mouseY < windowHeight-50) {
    			myText = 'forever.'
    		} else {
    	myText = "yesterday."}

select('#claim1').html("Your beloved, <br>" + myText);


// BLOB

let blobX = mouseX - blob.width/2;
let blobY = mouseY - blob.height/2;

// let blobX = constrain(pageX0, -blob.width/2, windowWidth);
// let blobY = constrain(pageY0, -blob.height/2, windowHeight)

select("#blob").position(blobX, blobY);
}

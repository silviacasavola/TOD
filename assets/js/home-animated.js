function setup() {
  cnv = createCanvas(0, 0);

  const pageHeight = document.documentElement.scrollHeight;
  console.log("pageHeight =" + pageHeight);

  let footer = select("#footer");
  let footerHeight = footer.height;

  console.log("footer size =" + footerHeight);

  select("#footer").position(windowWidth/10, pageHeight - footerHeight)
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

let pageX;
let pageY;

let blobX0;
let blobY0;

let blobX;
let blobY;

// let bodyheight = $(document).height();
// console.log(bodyheight);


$(document).mousemove(function (event) {
    pageX = event.pageX;
    pageY = event.pageY;


const pageHeight = document.documentElement.scrollHeight;

// X
blobX = constrain (pageX, -blob.width/2, windowWidth);
blobY = constrain (pageY, -blob.height/2, pageHeight-90)

select("#blob").position(blobX, blobY)
});

}

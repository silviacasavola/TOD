// PLACES THE FOOTER AT THE BOTTOM
function setup() {

  let pageHeight = document.documentElement.scrollHeight;

 select("#footer").position(0, pageHeight);
}

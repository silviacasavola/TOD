// PLACES THE FOOTER AT THE BOTTOM

function footerPosition() {
 const pageHeight = document.documentElement.scrollHeight;
 // console.log("pageHeight =" + pageHeight);

 const footer = document.getElementById("footer");

 select("#footer").position(0, pageHeight)

}

function setup() {
  // PLACES THE FOOTER AT THE BOTTOM
    const pageHeight = document.documentElement.scrollHeight;
    // console.log("pageHeight =" + pageHeight);

    const footer = document.getElementById("footer");

    select("#footer").position(windowWidth/10, pageHeight)
}

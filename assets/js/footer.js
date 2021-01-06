function setup() {

const pageHeight = document.documentElement.scrollHeight;
console.log("pageHeight =" + pageHeight);

let footer = select("#footer");
let footerHeight = footer.height;

console.log("footer size =" + footerHeight);

select("#footer").position(windowWidth/10, pageHeight - footerHeight)
}

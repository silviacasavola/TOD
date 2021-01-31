// MENU MOBILE
let open = false;

function menuMobile() {
if (open == false) {
  document.getElementById("menu").style.left = "0%";
  open = true;
}
if (open == true) {
  document.getElementById("menu").style.left = "100%";
  open = false;
}
}

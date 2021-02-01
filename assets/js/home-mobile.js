let first = false;
let second = false;

function mouseClicked() {

let claim = document.getElementById("claim-mobile");
let claim2 = document.getElementById("claim2-mobile");
let perdita = document.getElementById("perdita");
let affetto = document.getElementById("affetto");


if (windowWidth < windowHeight) {
if (first == false && second==false) {
  claim.style.display = "none";
  perdita.style.display = "block";
  document.getElementById("mobile-bookmarks").src = "assets/img/mobile/home-bookmarks2.png";
  first = true;  }

else if (first == true && second==false) {
    perdita.style.display = "none";
    affetto.style.display = "block";
    document.getElementById("mobile-bookmarks").src = "assets/img/mobile/home-bookmarks3.png";
    second = true;
    first = false;
  }

else if (second && true && first==false) {
    affetto.style.display = "none";
    claim.style.display = "block";
    claim2.style.animationPlayState = "paused";
    claim2.style.opacity = "1";
    document.getElementById("mobile-bookmarks").src = "assets/img/mobile/home-bookmarks1.png";
    second = false;
  }
}
}

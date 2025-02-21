let openBtn = document.getElementById("open_btn");
let closeBtn = document.getElementById("close_btn");
let mobileNavigation = document.getElementById("mobile_nav");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  mobileNavigation.style.width = "100vw";
}

function closeNav() {
  mobileNavigation.style.width = "0vw";
}

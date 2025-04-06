let hamburger = document.getElementById("hamburger");
let closeIcon = document.querySelector(".close");
let navbar = document.querySelector("nav ul");
hamburger.addEventListener("click", () => {
  navbar.style.transform = "scale(1)";
  // navbar.style.display = "block";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  navbar.style.transform = "scale(0)";
  // navbar.style.display = "none";
  closeIcon.style.display = "none";
});

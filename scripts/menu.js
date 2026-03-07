const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if(navLinks.classList.contains("active") && !navLinks.contains(e.target) && !hamburger.contains(e.target)){
    navLinks.classList.remove("active");
  }
});
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 10) {
    navBar.classList.add("shrink");
  } else {
    navBar.classList.remove("shrink");
  }
});

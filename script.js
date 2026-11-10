
const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
  mobileMenu.classList.add("open");
  menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

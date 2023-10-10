const menuBtn = document.querySelector(".hamburger__btn");
const navMenu = document.querySelector(".hamburger__menu");
const menuLinks = document.querySelectorAll(".hamburger__menu .menu__list-link");
const btn = document.querySelectorAll('.hamburger .header__buy');
const body = document.querySelector("body");
const menuItems = [...menuLinks, ...btn];

menuBtn.addEventListener("click", toggleMobileMenu);

menuItems.forEach(menuItem => {
	menuItem.addEventListener("click", toggleMobileMenu)
})

function toggleMobileMenu() {
	menuBtn.classList.toggle("active");
	navMenu.classList.toggle("active");
	menuBtn.classList.contains("active") ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';
}
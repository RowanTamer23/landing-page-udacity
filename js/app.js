/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

let list = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("section");

let options = {
  root: null, // relative to document viewport
  rootMargin: "10px", // margin around root. Values are similar to css property. Unitless values not allowed
  threshold: 0.7, // visible amount of item shown in relation to root
};

let observer = new IntersectionObserver((sections) => {
  sections.forEach((s) => {
    const link = list.querySelector(
      `[data-nav='${s.target.getAttribute("data-nav")}']`
    );

    if (s.isIntersecting) {
      s.target.classList.add("your-active-class");
      link.classList.add("active");
    } else {
      s.target.classList.remove("your-active-class");
      link.classList.remove("active");
    }
  });
}, options);

const navUpdate = () => {
  sections.forEach((s) => {
    const navLink = document.createElement("li");
    const sectionTitle = s.getAttribute("data-nav");
    navLink.classList.add("menu__link");
    navLink.setAttribute("data-nav", sectionTitle);
    navLink.innerHTML = sectionTitle;
    navLink.addEventListener("click", () => {
      s.scrollIntoView({ behavior: "smooth" });
    });
    list.appendChild(navLink);
    observer.observe(s);
  });
};
navUpdate();

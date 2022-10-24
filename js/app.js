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
const navUpdate = () => {
let list = document.querySelector('#navbar__list');
let sections = document.querySelectorAll('section');
sections.forEach(s=>{
    const navLink = document.createElement('li');
    const sectionTitle = s.getAttribute('data-nav')
    const SectionId = s. getAttribute('id');
    navLink.classList.add('menu__link');
    navLink.innerHTML=`<a style='color:black; text-decoration:none;' href=${'#'+SectionId}>${sectionTitle}</a>`
    list.appendChild(navLink)
})
}
navUpdate();

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



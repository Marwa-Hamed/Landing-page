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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const navigation = document.getElementById('navbar__list');
// section global var
const sections = document.querySelectorAll('section');

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
function navBuilder() {
    let navUI = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigation
    navigation.innerHTML = navUI;

};
navBuilder();



// Add class 'active' to section when near top of viewport
function offset(section) {
    return Math.floor(section.getBoundingClientRect().top);
};

//remove all active class
function removeActive(section) {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
};


// adding the active class
function addActive(conditional, section) {
    if (conditional) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color:grey;";
    };
};

// implementing the actual function
function sectionActivation() {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 140 && elementOffset >= -140;

        removeActive(section);
        addActive(inviewport(), section);

    });
};
window.addEventListener('scroll', sectionActivation);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



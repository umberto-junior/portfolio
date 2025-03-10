// Select elements
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('c-btn__menu--expand');
    const menu = document.getElementById('menu');
    const closeButton = document.querySelector('.c-btn__menu--collapse');
    const menuLinks = document.querySelectorAll('.c-menu__link');

    // Event click to open menu
    menuButton.addEventListener('click', function () {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('show');
        menu.setAttribute('aria-hidden', isExpanded);
    });

    // Event click to close menu
    closeButton.addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
        menu.setAttribute('aria-hidden', 'true');
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuButton.setAttribute('aria-expanded', 'false');
            menu.classList.remove('show');
            menu.setAttribute('aria-hidden', 'true');
        });
    });

    // Allow keyboard navigation
    menuButton.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            menuButton.click();
        }
    });
});


// Set the offset value
const offset = 100;

document.querySelectorAll('.c-menu__link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Calculate the position to scroll to
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

        // Scroll to the target position
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Smooth scroll
        });
    });
});
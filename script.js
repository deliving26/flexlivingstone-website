// Keeps the small-screen navigation simple and accessible.
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
});
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'Menu';
    });
});

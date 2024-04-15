document.addEventListener('DOMContentLoaded', function () {

    // Index selectors
    const overlay = document.querySelector('.home__overlay');

    // Header selectors
    const menuButton = document.querySelector('.header__menu-button');
    const navContainer = document.querySelector('.header__nav');
    const iconBar = document.querySelector('.fa-bars');
    const iconTimes = document.querySelector('.fa-times');

    function toggleMenu() {
        if (navContainer.style.transform === 'translateX(-100%)' || !navContainer.style.transform) {
            navContainer.style.transform = 'translateX(0%)';
            iconBar.style.display = 'none';
            iconTimes.style.display = 'block';
            overlay.style.display = 'block';
        } else {
            navContainer.style.transform = 'translateX(-100%)';
            iconBar.style.display = 'block';
            iconTimes.style.display = 'none';
            overlay.style.display = 'none';
        }

    }

    menuButton.addEventListener('click', toggleMenu);

});
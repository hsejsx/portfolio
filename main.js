'use strict';

const header = document.querySelector('.header');
const headerHeight = Math.ceil(header.getBoundingClientRect().height);
console.log(headerHeight);
window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        return;
    } else {
        header.style.backgroundColor = `rgba(255, 255, 255, ${window.scrollY / headerHeight})`;
    }
})
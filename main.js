'use strict';

const header = document.querySelector('.header');
const headerHeight = Math.ceil(header.getBoundingClientRect().height);
const arrowBtn = document.querySelector('.arrow-btn');
console.log(headerHeight);
window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        arrowBtn.classList.add('show');
        return;
    } else {
        header.style.backgroundColor = `rgba(255, 255, 255, ${window.scrollY / headerHeight})`;
        arrowBtn.classList.remove('show');
    }
})
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

const count = document.querySelector('#projects .section__description');
const categoryList = document.querySelector('.project__category');
const categories = document.querySelectorAll('.category__list__item button');
const projectList = document.querySelector('.project__list');
const projects = document.querySelectorAll('.project__list .project');

printCount();

categoryList.addEventListener('click', (e) => {
    const target = e.target.dataset.type;
    if (target) {
        showProject(target);
        showActive(e.target);
    }
})

function showActive(e) {
    categories.forEach(category => category.classList.remove('is-active'));
    console.log(categories);
    e.classList.add('is-active');
    console.log(e);
}

function showProject(type) {
    projectList.classList.add('animation');
    setTimeout(() => {
        projectList.classList.remove('animation');
        projectList.textContent = '';
        const projectsArr = Array.from(projects);
        if (type === 'all') {
            projectsArr.forEach(project => projectList.appendChild(project));
        } else {
            const filtered = projectsArr.filter(project => project.dataset.type === type);
            filtered.forEach(project => projectList.appendChild(project));
        }
        printCount();
    }, 300);
}

function printCount() {
    const projectCount = projectList.childElementCount;
    count.textContent = `${projectCount} 개의 프로젝트가 있습니다.`;
}
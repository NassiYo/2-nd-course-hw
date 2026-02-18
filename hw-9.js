// Задача 1
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
    const titleEl = document.querySelector('.title');
    titleEl.classList.toggle('title_hidden');
});

// Задача 2
const btnChangeColorEl = document.querySelector('.btn-change-color');

btnChangeColorEl.addEventListener('click', () => {
    const textEl = document.querySelector('.text');
    textEl.style.color = 'blue';
});
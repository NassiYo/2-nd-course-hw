// Задача 1
const btnEl = document.querySelector('.btn');
const titleEl = document.querySelector('.title');

btnEl.addEventListener('click', () => {
    
    titleEl.classList.toggle('title_hidden');
});

// Задача 2
const btnChangeColorEl = document.querySelector('.btn-change-color');

btnChangeColorEl.addEventListener('click', () => {
    const textEl = document.querySelector('.text');
    textEl.style.color = 'blue';
});

// Задача 3
const btnChangeTitleEl = document.querySelector('.btn-change-title');

btnChangeTitleEl.addEventListener('click', () => {
     titleEl.textContent = "Привет, мир!";
});
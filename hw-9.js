// Задача 1

const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
    const titleEl = document.querySelector('.title');
    titleEl.classList.toggle('title_hidden');
});
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

// Задача 4
const descriptionEls = document.querySelectorAll('.description');
descriptionEls.forEach(element => {
    element.textContent = "Измененный текст";
});

// Задача 5
const description5Els = document.querySelectorAll('.description5');
description5Els.forEach(element => {
    element.textContent = "Новый текст";
});

// Задача 6
const btnAddToEndEl = document.querySelector('.btn-add-to-end');

btnAddToEndEl.addEventListener('click', () =>{
    const addedElement = document.createElement('p');
    addedElement.textContent = "Новый абзац";
    addedElement.classList.add('added-text');

    document.body.append(addedElement);
});
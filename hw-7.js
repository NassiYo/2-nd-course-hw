// Игра Переверни текст
function startGame3() {
    const userText = prompt('Введите текст');
    const reversText = userText.split('').reverse().join('');
    alert(reversText);
};

// Игра "Викторина"

function startGame5() { 
    // Массив вопросов и правильных ответов
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let userAnswer, output; //Переменные для хранения ответа пользователя и вывода вопроса
    let pointsCounter = 0; //Счетчик правильных ответов

    for (let i = 0; i < quiz.length; i++) {

        // Формирование вывода вопроса
        output = quiz[i].question + '\nВарианты ответа: ';
        for (let j = 0; j < quiz[i].options.length; j++) {
            output += '\n' + quiz[i].options[j];
        };
        output += '\nВведи только номер ответа';
        userAnswer = Number(prompt(output));
        
        //Проверка правильности ответа
        (userAnswer === quiz[i].correctAnswer) && pointsCounter++; 
    };

    alert(`Количество правильных ответов: ${pointsCounter}`);
}


//Задача 1
const str1 = 'js';
console.log(str1.toUpperCase());

// Задача 2
function reternArrStartWithStr(arr, str) {
    return newArr = arr.filter((item => item.toLowerCase().startsWith(str.toLowerCase())));
};

const arr2 = ['Qwerty', 'awerty', 'qWefgh', 'qertygff', 'qwecvb',];
const str2 = 'qwE';
console.log(reternArrStartWithStr(arr2, str2));

// Задача 3
const num3 = 32.58884;
console.log(`Результат округления числа ${num3} до МЕНЬШЕГО целого: ${Math.floor(num3)}`);
console.log(`Результат округления числа ${num3} до БОЛЬШЕГО целого: ${Math.ceil(num3)}`);
console.log(`Результат округления числа ${num3} до БЛИЖАЙШЕГО целого: ${Math.round(num3)}`);

// Задача 4
const arr4 = [52, 53, 49, 77, 21, 32];
console.log(`Даны числа ${arr4}.\nМинимальное число: ${Math.min(...arr4)}\nМакимальное число: ${Math.max(...arr4)}`);

// Задача 5
const randomNumber = () => console.log(Math.floor(Math.random() * 10) + 1);
randomNumber();

// Задача 6
const getArrRandomNumbers0toNumber = (number) => {
    const randomNumber = Math.floor(Math.random() * (number + 1));
    const arr = [];
    for (let i = 0; i < Math.floor(number / 2); i++) {
        arr.push(Math.floor(Math.random() * (number + 1)));
    }
    return arr;
}
console.log(getArrRandomNumbers0toNumber(9));

// Задача 7
const randomNumberFromN1ToN2 = (n1, n2) => Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
// Функция, где (n2 - n1 + 1) -- Число возможных значений, + n1 -- начало отсчета возможных значений начиная с числа n1
console.log(randomNumberFromN1ToN2(3, 6));

// Задача 8
const date = new Date();
console.log('Сегодня ' + date.toLocaleDateString() + ' года');

// Задача 9
const currentDate = new Date();
// const dateIn73days = new Date(+currentDate + (73 * 24 * 60 * 60 * 1000));
// console.log(`Сегодня ${currentDate.toLocaleDateString()} года, а через 73 дня будет ${dateIn73days.toLocaleDateString()} года`);

const dateIn73Days = new Date(currentDate);
dateIn73Days.setDate(currentDate.getDate() + 73);
console.log(`Сегодня ${currentDate.toLocaleDateString()} года, а через 73 дня будет ${dateIn73Days.toLocaleDateString()} года`);

// Задача 10
const someDate = new Date();
function getFormatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const days = [
        "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = days[date.getDay()];
    const time = date.toLocaleTimeString('ru-Ru');

    return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${time}`;

};
console.log(getFormatDate(someDate));
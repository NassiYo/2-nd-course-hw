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


// //Задача 1
// const str1 = 'js';
// console.log(str1.toUpperCase());

// Задача 2
function reternArrStartWithStr(arr, str) {
    return newArr = arr.filter((item => item.toLowerCase().startsWith(str.toLowerCase())));
};

// const arr2 = ['Qwerty', 'awerty', 'qWefgh', 'qertygff', 'qwecvb',];
// const str2 = 'qwE';
// console.log(reternArrStartWithStr(arr2, str2));

// // Задача 3
// const num3 = 32.58884;
// console.log(`Результат округления числа ${num3} до МЕНЬШЕГО целого: ${Math.floor(num3)}`);
// console.log(`Результат округления числа ${num3} до БОЛЬШЕГО целого: ${Math.ceil(num3)}`);
// console.log(`Результат округления числа ${num3} до БЛИЖАЙШЕГО целого: ${Math.round(num3)}`);

// Задача 4
const arr4 = [52, 53, 49, 77, 21, 32];
console.log(`Даны числа ${arr4}.\nМинимальное число: ${Math.min(...arr4)}\nМакимальное число: ${Math.max(...arr4)}`);


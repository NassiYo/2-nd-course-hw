// Игра "Камень, ножницы, бумага"

function startGame4() {
    const choices = ['камень', 'ножницы', 'бумага']; //массив возможных выриантов
    let userChoice = prompt("Выбери: камень, ножницы или бумага?").toLowerCase(); //выбор пользователя сводится к нижнему регистру
    let compChoice = choices[Math.floor(Math.random() * 3)]; // выбор компьютера. Из массива возможных вариантов выбирается выриант по случайному индексу. Индекс - случайное число от 0 до 3, не включая 3. 

    if (choices.includes(userChoice)) {
        alert(`Выбор пользователя - ${userChoice}, выбор компьютера - ${compChoice}.`); //Если игрок ввел выбор верно, то выводится выбор игрока и выбор компьютера
    } else {
        alert('Выбор не сделан или введен неверно.'); //Если игрок ввел значение с ошибкой, то компьютер об этом сообщает и игрок проигрывает.
    };

    let result = '';

    if (userChoice === compChoice) {
        result = 'ничья';
    } else if ((userChoice === 'камень' && compChoice === 'ножницы') || (userChoice === 'ножницы' && compChoice === 'бумага') || (userChoice === 'бумага' && compChoice === 'камень')) {
        result = 'победа';
    } else {
        result = 'проигрыш';
    };
    alert(`Результат - ${result}.`);
};

// // Задача 1
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort((a, b) => a.age - b.age));

// // Задача 2
// function isPositive(a) {
//     return a > 0;
// }

// function isMale(a) {
//     return a.gender === ' male';
// }

// function filter(arr, ruleFunction) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         (ruleFunction(arr[i])) && output.push(arr[i]);
//     };

//     return output;
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people1 = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people1, isMale));

// Задача 3


const intervalID = setInterval(function DateOutput() {
    let currentDate = new Date();
    console.log(currentDate.toLocaleDateString());
}, 3000);

setTimeout(function DateOutputEnding() {
    console.log('30 секунд прошло');
    clearInterval(intervalID);
}, 30000);
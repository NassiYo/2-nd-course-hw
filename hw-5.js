// Игра "Угадай число"
function startGame1() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    while (true) {
        let userNumber = prompt('Угадай число от 1 до 100');

        if (userNumber === null) {
            alert("Игра отменена");
            break;
        }

        userNumber = Number(userNumber);

        if (Number.isNaN(userNumber)) {
            alert("Вы ввели не число");
            continue;
        } else if (userNumber === randomNumber) {
            alert("Ура, ты угадал :)");
            break;
        } else if (userNumber > randomNumber) {
            alert("Неверно, загаданное число меньше. Попробуй еще раз.")
        } else {
            alert("Неверно, загаданное число больше. Попробуй еще раз.")
        }
    }
}

// // Задача 1
// const minOfTwo = (number1, number2) => (number1 > number2) ?  number2 : number1;

// // Задача 2
// const isEven = (number) => (number % 2 === 0) ? "Число четное" : "Число нечетное";

// // Задача 3
// // Функция выводит результат в консоль
// function square(x) {
//     console.log(x * x);
// };

// // Функция возвращает результат
// const square1 = x => x * x;

// // Задача 4
// function ageCheck() {
//     const userAge = Number((prompt("Сколько вам лет?")));

//     if (userAge < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (userAge >= 0 && userAge <= 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!');
//     }
// };

// // Задача 5
// const multiplication = (number1, number2) => (typeof number1 !== "number" || Number.isNaN(number1) || typeof number2 !== "number" || Number.isNaN(number2)) ? 'Одно или оба значения не являются числом' : number1 * number2;

// // Задача 6
// const cube = () => {
//     const input = prompt("Введите число");
//     const num = Number(input);

//     if (typeof num !== "number" || Number.isNaN(num)) {
//         return 'Переданный параметр не является числом'
//     }

//     return `${num} в кубе равняется ${num ** 3}`;
     
// }

// // Задача 7

// const circle1 = {
//     radius: 3,
//     getArea() {
//         return Math.PI * this.radius ** 2;
//     },
//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// };
// const circle2 = {
//     radius: 56,
//     getArea() {
//         return Math.PI * this.radius ** 2;
//     },
//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// };
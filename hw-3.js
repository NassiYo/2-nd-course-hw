// Задача 1
let password = 'fff444';
let tryPassword = prompt('Введите пароль');
password === tryPassword ? alert ('Пароль введен верно') : alert ('Пароль введен неверно');

// Задача 2
let c = 2;
(c > 0) && (c < 10) ? console.log('Верно') : console.log('Неверно');

// Задача 3
let d = 0;
let e = 500;
(d > 100) || (e > 100) ? console.log("Верно") : console.log("Неверно");

// Задача 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задача 5
monthNumber = 12;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;
    default:
        console.log("Нет такого месяца");
        break;
}